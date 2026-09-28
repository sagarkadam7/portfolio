import { ArrowUp, ArrowUpRight, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { localAnswer, retrieve } from "./data/knowledge.js";
import { ASK_OPEN_EVENT } from "./askEvents.js";

const SUGGESTIONS = [
  "What is he building right now?",
  "What's his AI stack?",
  "Tell me about AED Inspect",
  "How can I contact him?",
];

const WELCOME = {
  role: "assistant",
  text: "Hi — I'm Sagar's AI assistant. Ask me about his work, his AI stack, his projects, or how to reach him.",
  sources: [],
};

const LINK_PATTERN =
  /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+|\b(?:[\w-]+\.)+(?:com|in|ai|app|net|dev)(?:\/[^\s)]*)?)/g;

function renderRich(text) {
  const clean = text.replace(/\*\*/g, "");
  return clean.split(LINK_PATTERN).map((part, index) => {
    if (index % 2 === 0) return part;
    const trimmed = part.replace(/[.,;:]+$/, "");
    const trailing = part.slice(trimmed.length);
    const href = trimmed.includes("@") && !trimmed.startsWith("http")
      ? `mailto:${trimmed}`
      : trimmed.startsWith("http")
        ? trimmed
        : `https://${trimmed}`;
    return (
      <span key={`${part}-${index}`}>
        <a
          className="font-bold text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal"
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
        >
          {trimmed}
        </a>
        {trailing}
      </span>
    );
  });
}

export default function AskAgent() {
  const [open, setOpen] = useState(false);
  const [launcherReady, setLauncherReady] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [engine, setEngine] = useState(null);
  const remoteAvailable = useRef(true);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const updateLast = useCallback((patch) => {
    setMessages((current) => {
      const next = [...current];
      const last = next[next.length - 1];
      next[next.length - 1] = { ...last, ...(typeof patch === "function" ? patch(last) : patch) };
      return next;
    });
  }, []);

  const typeOut = useCallback(
    (text) =>
      new Promise((resolve) => {
        let shown = 0;
        const step = () => {
          shown = Math.min(text.length, shown + 4);
          updateLast({ text: text.slice(0, shown) });
          if (shown < text.length) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      }),
    [updateLast],
  );

  const askRemote = useCallback(
    async (history) => {
      if (!remoteAvailable.current) return false;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch("/api/ask", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });
        clearTimeout(timer);
        if (!response.ok || response.headers.get("x-ask-engine") !== "claude" || !response.body) {
          if (response.status === 404 || response.status === 405 || response.status === 503) {
            remoteAvailable.current = false;
          }
          return false;
        }
        setEngine("claude");
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let received = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          received += decoder.decode(value, { stream: true });
          updateLast({ text: received });
        }
        return received.trim().length > 0;
      } catch {
        clearTimeout(timer);
        return false;
      }
    },
    [updateLast],
  );

  const ask = useCallback(
    async (rawQuestion) => {
      const question = rawQuestion.trim().slice(0, 400);
      if (!question || busy) return;
      setBusy(true);
      setInput("");

      const history = [...messagesRef.current, { role: "user", text: question }]
        .filter((message) => message !== WELCOME)
        .map((message) => ({ role: message.role, content: message.text }));

      const related = retrieve(question, 2).map((result) => result.chunk);
      setMessages((current) => [
        ...current,
        { role: "user", text: question },
        { role: "assistant", text: "", sources: related, pending: true },
      ]);

      const answeredRemotely = await askRemote(history);
      if (!answeredRemotely) {
        setEngine((current) => current ?? "local");
        const answer = localAnswer(question);
        updateLast({ sources: answer.sources });
        await typeOut(answer.text);
      }
      updateLast({ pending: false });
      setBusy(false);
    },
    [askRemote, busy, typeOut, updateLast],
  );

  useEffect(() => {
    const timer = setTimeout(() => setLauncherReady(true), 2600);
    const onOpen = (event) => {
      setOpen(true);
      const question = event.detail?.question;
      if (question) setTimeout(() => ask(question), 250);
    };
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener(ASK_OPEN_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(ASK_OPEN_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, [ask]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages]);

  const onSubmit = (event) => {
    event.preventDefault();
    ask(input);
  };

  const showSuggestions = messages.length === 1;

  return (
    <>
      <AnimatePresence>
        {launcherReady && !open && (
          <motion.button
            type="button"
            className="ask-launcher fixed bottom-5 right-5 z-[70] flex items-center gap-2.5 rounded-full border border-signal bg-signal py-3 pl-4 pr-5 text-xs font-black uppercase tracking-[0.1em] text-ink shadow-[0_18px_50px_rgba(200,220,84,0.25)] md:bottom-8 md:right-8"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Ask Sagar's AI assistant"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-ink" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            <Sparkles size={16} strokeWidth={2.6} />
            Ask my AI
            <kbd className="ml-1 hidden rounded border border-ink/25 px-1.5 py-0.5 text-[9px] font-black text-ink/60 md:inline">
              Ctrl K
            </kbd>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.section
            className="ask-panel fixed inset-x-3 bottom-3 z-[80] flex h-[min(78svh,640px)] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0c0c0b]/95 text-bone shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl md:inset-x-auto md:bottom-8 md:right-8 md:w-[420px]"
            role="dialog"
            aria-label="Ask Sagar's AI assistant"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            style={{ transformOrigin: "bottom right" }}
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em]">
                  <Sparkles size={16} strokeWidth={2.6} className="text-signal" />
                  Ask Sagar&apos;s AI
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-bone/45">
                  {engine === "claude"
                    ? "Live · Claude · grounded in his portfolio"
                    : "RAG over his portfolio · answers cite sources"}
                </p>
              </div>
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-bone/70 transition-colors hover:border-signal hover:text-signal"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
              >
                <X size={16} strokeWidth={2.6} />
              </button>
            </header>

            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
              data-lenis-prevent
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={message.role === "user" ? "max-w-[85%]" : "max-w-[92%]"}>
                    <div
                      className={
                        message.role === "user"
                          ? "rounded-2xl rounded-br-sm bg-signal px-4 py-2.5 text-sm font-bold leading-relaxed text-ink"
                          : "rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold leading-relaxed text-bone/85"
                      }
                    >
                      {message.pending && !message.text ? (
                        <span className="ask-typing inline-flex gap-1" aria-label="Thinking">
                          <span />
                          <span />
                          <span />
                        </span>
                      ) : (
                        renderRich(message.text)
                      )}
                    </div>
                    {message.role === "assistant" && !message.pending && message.sources?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {message.sources.map((source) => {
                          const external = source.link;
                          const href = external ? external.href : source.section;
                          return (
                            <a
                              key={source.id}
                              href={href}
                              target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
                              rel={external ? "noreferrer" : undefined}
                              onClick={external ? undefined : () => setOpen(false)}
                              className="inline-flex items-center gap-1 rounded-full border border-white/12 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-bone/55 transition-colors hover:border-signal/60 hover:text-signal"
                            >
                              {external ? external.label : source.title}
                              <ArrowUpRight size={11} strokeWidth={3} />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {showSuggestions && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      type="button"
                      onClick={() => ask(suggestion)}
                      className="rounded-full border border-signal/35 px-3 py-1.5 text-left text-xs font-bold text-bone/80 transition-colors hover:border-signal hover:bg-signal hover:text-ink"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.06 }}
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] py-1.5 pl-4 pr-1.5 focus-within:border-signal/60">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  maxLength={400}
                  placeholder="Ask about his work, stack, projects…"
                  className="min-w-0 flex-1 bg-transparent text-sm font-bold text-bone placeholder:text-bone/35 focus:outline-none"
                  aria-label="Your question"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-signal text-ink transition-opacity disabled:opacity-35"
                  aria-label="Send question"
                >
                  <ArrowUp size={17} strokeWidth={3} />
                </button>
              </div>
              <p className="mt-2 px-2 text-[10px] font-bold text-bone/35">
                Answers come only from Sagar&apos;s portfolio. For anything else, email {" "}
                <a className="underline hover:text-bone" href="mailto:sagarkadam8081@gmail.com">
                  sagarkadam8081@gmail.com
                </a>
                .
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
