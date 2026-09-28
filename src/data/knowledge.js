// Facts the "Ask my AI" assistant may use. Shared by the browser (local retrieval)
// and the serverless function (Claude), so both answer from the same source of truth.

export const CONTACT = {
  email: "sagarkadam8081@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-kadam-engineer7",
  github: "https://github.com/sagarkadam7",
};

export const KNOWLEDGE = [
  {
    id: "about",
    title: "About Sagar",
    section: "#about",
    keywords:
      "who sagar about summary intro introduce overview profile background engineer location located based live city pune india remote",
    text: "Sagar Kadam is an AI Full Stack Engineer in Pune, India. He builds agentic AI and full-stack products — currently AED SmartX and AED Inspect at Think Health Care & Safety, and previously Call IQ at SageAlpha — with a stack centred on agentic AI, LLMs, RAG, MERN and Next.js.",
  },
  {
    id: "now",
    title: "Current role · Think Health",
    section: "#experience",
    link: { label: "thinkhealth.in", href: "https://www.thinkhealth.in" },
    keywords:
      "current job role now today work working employer company think health care safety full stack engineer present building",
    text: "Sagar is currently an AI Full Stack Engineer at Think Health Care & Safety in Pune — a health and safety company that supplies AEDs and first-aid equipment and runs certified safety training. There he builds AED SmartX and AED Inspect end to end.",
  },
  {
    id: "aed-smartx",
    title: "AED SmartX",
    section: "#work",
    link: { label: "aedsmartx.com", href: "https://aedsmartx.com" },
    keywords:
      "aed smartx platform saas program management defibrillator device devices inspection supplies expiry alerts training certification compliance site portal dashboard health tech product",
    text: "AED SmartX is Think Health's AED program-management platform, built by Sagar. Organisations track defibrillators across sites, log inspections, get supply and expiry alerts, and manage training certifications and compliance from one web portal. It's live at aedsmartx.com.",
  },
  {
    id: "aed-inspect",
    title: "AED Inspect",
    section: "#work",
    link: { label: "inspector.aedsmartx.com", href: "https://inspector.aedsmartx.com" },
    keywords:
      "aed inspect ai vision computer multimodal photo photos image label labels inspection automated report pdf emergency ready defibrillator product",
    text: "AED Inspect is an AI inspection app Sagar built for Think Health. You photograph six parts of a defibrillator; the AI reads every label and reports in about three minutes whether the device would work in an emergency, then emails a PDF report. It's free and live at inspector.aedsmartx.com.",
  },
  {
    id: "calliq",
    title: "Call IQ · SageAlpha",
    section: "#experience",
    link: { label: "Call IQ", href: "https://witty-grass-0d70a0a10.6.azurestaticapps.net/" },
    keywords:
      "sagealpha call iq calliq agentic workflow transcription call intelligence follow-up automation azure static web apps react previous prior before intern",
    text: "Before Think Health, Sagar was a Frontend Developer & AI Integration Intern at SageAlpha (sagealpha.ai). He built React UI flows for Call IQ — an AI call-intelligence platform — and integrated agentic AI workflows for multi-step automation, real-time transcription insights and automated follow-ups, deployed on Azure Static Web Apps.",
  },
  {
    id: "mock-interview",
    title: "AI Mock Interview",
    section: "#work",
    link: { label: "Live demo", href: "https://interviewai-web-h2ht.onrender.com" },
    keywords:
      "mock interview gemini mern jwt speech analytics scoring pdf jspdf render saas full stack project demo",
    text: "The AI Mock Interview platform runs job-description-aware technical interviews powered by Gemini Pro, with speech analytics, automated scoring and PDF reports. It's a full-stack MERN app with JWT auth, live on Render, with the code on GitHub.",
  },
  {
    id: "media-pipeline",
    title: "Automated Media Pipeline",
    section: "#work",
    keywords:
      "media pipeline genai orchestration tts text speech avatar avatars youtube oauth human loop approval script publish automation",
    text: "The Automated Media Pipeline is a script-to-publish GenAI workflow: text-to-speech, AI avatars, human-in-the-loop approval gates, and automated YouTube delivery over OAuth 2.0.",
  },
  {
    id: "web-projects",
    title: "React projects",
    section: "#work",
    keywords: "react commerce ecommerce storefront projects list learning platform edtech vercel frontend portfolio",
    text: "He has also shipped React Commerce (a responsive storefront), Projects List (an index of his repos and demos) and a Learning Platform UI — all live on Vercel with public code.",
  },
  {
    id: "ai-stack",
    title: "AI stack at a glance",
    section: "#skills",
    keywords:
      "ai stack tech technology technologies skill skills toolkit toolchain expertise strength strengths specialise specialize",
    text: "Sagar's AI stack at a glance: agents with LangGraph, LangChain and MCP; cloud and local LLMs (Ollama with Llama, Qwen and Mistral, plus OpenAI, Claude and Gemini); RAG with LlamaIndex, pgvector, Pinecone and Chroma; shipped on MERN and Next.js with TypeScript.",
  },
  {
    id: "agentic",
    title: "Agentic AI stack",
    section: "#skills",
    keywords:
      "agentic agent agents langgraph langchain mcp model context protocol tool calling function evals observability langfuse human loop multi-step orchestration",
    text: "Agentic AI is Sagar's core focus: multi-step agents with LangGraph and LangChain, MCP and tool calling, Langfuse for evals and tracing, and human-in-the-loop approval where it matters.",
  },
  {
    id: "llms",
    title: "LLMs · cloud and local",
    section: "#skills",
    keywords:
      "llm llms model models local ollama llama qwen mistral openai gpt claude anthropic gemini open source self hosted prompt engineering",
    text: "He works with both cloud and local LLMs — Ollama for running open models like Llama, Qwen and Mistral locally, plus the OpenAI, Claude and Gemini APIs.",
  },
  {
    id: "rag",
    title: "RAG pipelines",
    section: "#skills",
    keywords:
      "rag retrieval augmented generation vector database embedding embeddings llamaindex pgvector pinecone chroma rerank reranking search grounded knowledge",
    text: "For RAG he builds retrieval pipelines with LlamaIndex, vector stores such as pgvector, Pinecone and Chroma, embeddings and reranking, so answers stay grounded in real data. This assistant is a small RAG system itself.",
  },
  {
    id: "web",
    title: "MERN, Next.js & SEO",
    section: "#skills",
    keywords:
      "mern mongodb express react node nodejs typescript nextjs next app router vercel ai sdk seo technical core web vitals schema structured data search console frontend backend full stack api rest",
    text: "On the web side he ships MERN apps (MongoDB, Express, React, Node.js) with TypeScript, and Next.js App Router apps with the Vercel AI SDK. He also handles technical SEO — Core Web Vitals, schema.org structured data and Search Console.",
  },
  {
    id: "tools",
    title: "AI-native workflow",
    section: "#skills",
    keywords: "tool tools claude code cursor copilot github v0 perplexity chatgpt ai coding workflow productivity",
    text: "His daily AI-native toolkit includes Claude Code, Cursor, GitHub Copilot, v0, Perplexity and ChatGPT.",
  },
  {
    id: "education",
    title: "Education",
    section: "#about",
    keywords:
      "education degree college university cgpa gpa grade graduated graduation be btech computer engineering diploma iot internet things genba sopanrao moze pimpri chinchwad pccoe 2026 2023 study",
    text: "Sagar holds a B.E. in Computer Engineering from Genba Sopanrao Moze College of Engineering (CGPA 8.80, graduated May 2026) and a Diploma in IoT from Pimpri Chinchwad College of Engineering (CGPA 8.36, 2023).",
  },
  {
    id: "earlier",
    title: "Earlier experience",
    section: "#experience",
    keywords:
      "internship internships scalefull pegasus gssoc girlscript open source contributor react java intern experience history earlier year years",
    text: "Earlier he was a React Intern at Scalefull Technologies, a Java Developer Intern at Pegasus Technologies (Jan–Mar 2026), and an open-source contributor in GirlScript Summer of Code 2025.",
  },
  {
    id: "contact",
    title: "Contact",
    section: "#contact",
    link: { label: "Email Sagar", href: `mailto:${CONTACT.email}` },
    keywords:
      "contact email mail hire hiring reach linkedin github connect message talk collaborate resume cv available opportunity freelance",
    text: `The best way to reach Sagar is email at ${CONTACT.email} or LinkedIn (linkedin.com/in/sagar-kadam-engineer7). His code is on GitHub at github.com/sagarkadam7. He's based in Pune, India and open to conversations.`,
  },
  {
    id: "principles",
    title: "How he works",
    section: "#contact",
    keywords: "principle principles how work team approach value values philosophy process culture",
    text: "How he works: lead with the problem solved, then the stack; ship every project with a live demo or repo; give AI features trust UX — sources, limits and clear failure states; and own the full path from design to deploy.",
  },
];

const STOPWORDS = new Set(
  "a an the is are was were be been being his he him her sagar kadam what which who whom whose how where when why does do did can could would should will to of in on for with and or at by from about any has have had it its this that these those me you your i my we our tell know show give list some there here also just than then them they as into more most much many very please does doing done get got".split(
    " ",
  ),
);

function stem(word) {
  if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

export function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/\.js\b/g, "js")
    .split(/[^a-z0-9+#]+/)
    .filter((token) => token && !STOPWORDS.has(token))
    .map(stem);
}

// BM25 over title + keywords (weighted double) + text.
const docs = KNOWLEDGE.map((chunk) => tokenize(`${chunk.title} ${chunk.keywords} ${chunk.keywords} ${chunk.text}`));
const avgLength = docs.reduce((sum, doc) => sum + doc.length, 0) / docs.length;
const documentFrequency = new Map();
docs.forEach((doc) => {
  new Set(doc).forEach((term) => documentFrequency.set(term, (documentFrequency.get(term) || 0) + 1));
});

export function retrieve(query, limit = 3) {
  const terms = [...new Set(tokenize(query))];
  if (!terms.length) return [];
  const k1 = 1.2;
  const b = 0.75;
  return docs
    .map((doc, index) => {
      let score = 0;
      for (const term of terms) {
        const df = documentFrequency.get(term);
        if (!df) continue;
        const tf = doc.filter((token) => token === term).length;
        const idf = Math.log(1 + (docs.length - df + 0.5) / (df + 0.5));
        score += (idf * tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * doc.length) / avgLength));
      }
      return { chunk: KNOWLEDGE[index], score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b2) => b2.score - a.score)
    .slice(0, limit);
}

const GREETING = /^(hi|hello|hey|yo|hola|namaste|good (morning|afternoon|evening))\b/i;

export function localAnswer(question) {
  const trimmed = question.trim();
  if (GREETING.test(trimmed) && trimmed.split(/\s+/).length <= 4) {
    const about = KNOWLEDGE.find((chunk) => chunk.id === "about");
    return {
      text: `Hi! ${about.text} Ask me about his projects, AI stack, or how to reach him.`,
      sources: [about],
    };
  }

  const results = retrieve(trimmed, 3);
  if (!results.length || results[0].score < 1) {
    return {
      text: `I don't have that in Sagar's portfolio. I can tell you about his current work at Think Health, his AI stack (agents, LLMs, RAG), his projects, or how to contact him — or email him directly at ${CONTACT.email}.`,
      sources: [KNOWLEDGE.find((chunk) => chunk.id === "contact")],
    };
  }

  const [top, second] = results;
  const picked = [top.chunk];
  // Only merge a second passage when it is nearly as relevant; otherwise answers get repetitive.
  if (second && second.score >= top.score * 0.85) picked.push(second.chunk);
  return { text: picked.map((chunk) => chunk.text).join(" "), sources: picked };
}

export function knowledgeAsText() {
  return KNOWLEDGE.map((chunk) => `## ${chunk.title}\n${chunk.text}`).join("\n\n");
}
