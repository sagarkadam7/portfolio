import Anthropic from "@anthropic-ai/sdk";
import { CONTACT, knowledgeAsText } from "../src/data/knowledge.js";

export const config = { runtime: "edge" };

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";
const MAX_QUESTION_CHARS = 500;
const MAX_TURNS = 8;
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 10 * 60 * 1000;

// Best-effort per-IP limit. Edge instances are short-lived and not shared, so this
// blunts casual abuse only; put a durable limiter (e.g. Upstash) in front for more.
const requestLog = new Map();

const SYSTEM_PROMPT = `You are the AI assistant on Sagar Kadam's portfolio website. Visitors are usually recruiters, hiring managers and engineers.

Answer questions about Sagar — his current work, projects, skills, experience, education and how to contact him — using only the facts inside <knowledge>. Refer to him as Sagar, in the third person.

Keep every answer to 2–4 short sentences of plain text: no markdown, headings or bullet lists. Mention a live link or email when it helps the visitor act.

If <knowledge> does not cover a question, say you don't have that detail and suggest emailing Sagar at ${CONTACT.email}. Never invent employers, dates, metrics, clients or skills. If a question is unrelated to Sagar, briefly steer back to what you can help with.

Latency-sensitive; begin your visible answer immediately.

<knowledge>
${knowledgeAsText()}
</knowledge>`;

function json(body, status, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store", ...extraHeaders },
  });
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function sanitizeMessages(raw) {
  if (!Array.isArray(raw)) return [];
  const messages = raw
    .filter(
      (message) =>
        message &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim(),
    )
    .slice(-MAX_TURNS)
    .map((message) => ({ role: message.role, content: message.content.trim().slice(0, MAX_QUESTION_CHARS * 2) }));

  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return [];
  messages[messages.length - 1].content = messages[messages.length - 1].content.slice(0, MAX_QUESTION_CHARS);
  return messages;
}

export default async function handler(request) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405, { allow: "POST" });
  if (!process.env.ANTHROPIC_API_KEY) return json({ error: "Assistant is not configured" }, 503);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return json({ error: "Too many questions — try again in a few minutes." }, 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const messages = sanitizeMessages(body?.messages);
  if (!messages.length) return json({ error: "Ask a question" }, 400);

  const client = new Anthropic();
  const stream = client.beta.messages.stream({
    model: MODEL,
    max_tokens: 1024,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "low" },
    system: SYSTEM_PROMPT,
    messages,
  });

  const events = stream[Symbol.asyncIterator]();
  let first;
  try {
    // Wait for the first event so an upstream failure becomes a clean HTTP error
    // (the browser then falls back to local retrieval) instead of a broken stream.
    first = await events.next();
  } catch (error) {
    const status = error instanceof Anthropic.RateLimitError ? 429 : 502;
    return json({ error: "The assistant is unavailable right now." }, status);
  }

  const encoder = new TextEncoder();
  const textOf = (event) =>
    event?.type === "content_block_delta" && event.delta.type === "text_delta" ? event.delta.text : "";

  const body$ = new ReadableStream({
    async start(controller) {
      try {
        if (!first.done) {
          const text = textOf(first.value);
          if (text) controller.enqueue(encoder.encode(text));
        }
        for (let next = await events.next(); !next.done; next = await events.next()) {
          const text = textOf(next.value);
          if (text) controller.enqueue(encoder.encode(text));
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(encoder.encode("I can't help with that one — ask me about Sagar's work instead."));
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body$, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-ask-engine": "claude",
    },
  });
}
