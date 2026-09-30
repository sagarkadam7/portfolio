import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  ExternalLink,
  GitBranch,
  HeartPulse,
  Linkedin,
  Mail,
  Menu,
  X,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import AgentGlyph from "./AgentGlyph.jsx";
import AskAgent from "./AskAgent.jsx";
import { openAskAgent } from "./askEvents.js";

const PROFILE = {
  email: "sagarkadam8081@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-kadam-engineer7",
  github: "https://github.com/sagarkadam7",
  mockInterviewLive: "https://interviewai-web-h2ht.onrender.com",
  callIqLive: "https://witty-grass-0d70a0a10.6.azurestaticapps.net/",
  aedSmartxLive: "https://aedsmartx.com",
  aedInspectLive: "https://inspector.aedsmartx.com",
  thinkHealth: "https://www.thinkhealth.in",
  sageAlpha: "https://sagealpha.ai",
  location: "Pune, India",
  graduation: "May 2026",
  heroImage: "/sagar-hero.png",
};

gsap.registerPlugin(ScrollTrigger, SplitText);

let lenis = null;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const hasFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function scrollToTarget(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  if (lenis) lenis.scrollTo(target, { duration: 1.4 });
  else target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

const hostOf = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

const formatPuneTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

const navLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
];

const experience = [
  {
    company: "Think Health Care & Safety",
    site: PROFILE.thinkHealth,
    role: "AI Full Stack Engineer",
    period: "Pune · Present",
    highlight: "AED SmartX + AED Inspect — live",
    body: "Building Think Health's AED products end to end: AED SmartX, a platform for tracking devices, inspections, supplies, training certifications, and compliance across sites — and AED Inspect, where AI reads photos of a defibrillator's labels and reports in minutes whether it's emergency-ready.",
    image: "/projects/aedsmartx.jpg",
    imagePosition: "100% 50%",
    icon: HeartPulse,
    stack: ["Full Stack", "AI Vision", "Compliance", "Health Tech"],
    links: [
      { label: "AED SmartX", href: PROFILE.aedSmartxLive },
      { label: "AED Inspect", href: PROFILE.aedInspectLive },
    ],
    current: true,
  },
  {
    company: "SageAlpha Analytics",
    site: PROFILE.sageAlpha,
    role: "Frontend Developer & AI Integration Intern",
    period: "Pune · Prior role",
    highlight: "Call IQ — Live on Azure",
    body: "Designed and implemented React UI flows for Call IQ, an AI-powered call intelligence platform. Integrated agentic AI workflows for multi-step automation, real-time transcription insights, and automated follow-up support. Deployed frontend builds on Microsoft Azure Static Web Apps.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=90",
    icon: Zap,
    stack: ["React", "Tailwind", "Agentic AI", "Azure"],
    links: [{ label: "Visit Call IQ", href: PROFILE.callIqLive }],
  },
  {
    company: "Scalefull Technologies",
    role: "React Intern",
    period: "Internship",
    highlight: "React frontend delivery",
    body: "Built responsive React components, improved frontend flows, and applied reusable component patterns for user-facing web interfaces.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=90",
    icon: Code2,
    stack: ["React", "JavaScript", "CSS", "Frontend"],
  },
  {
    company: "Pegasus Technologies",
    role: "Java Developer Intern",
    period: "Jan 2026 – Mar 2026",
    highlight: "Java backend systems",
    body: "Worked on Core Java, J2EE, and MySQL fundamentals across backend modules, OOP-driven architecture, debugging, and business-system workflows.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=90",
    icon: Code2,
    stack: ["Java", "J2EE", "MySQL", "OOP"],
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor · GSSoC '25",
    period: "Remote · May – Aug 2025",
    highlight: "Open-source contribution",
    body: "Contributed to open-source web repositories by resolving bugs, improving frontend logic, and collaborating through GitHub pull requests.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90",
    icon: GitBranch,
    stack: ["Open Source", "Frontend", "GitHub PRs"],
  },
];

const services = [
  {
    index: "01",
    kicker: "Agentic AI in Production",
    title: "Multi-step AI workflows for applied product use cases.",
    body: "Clear UX, reliable data flow, and maintainable frontend integration — shipped on Call IQ and running on Azure.",
    proof: "Call IQ · Live on Azure",
    proofHref: PROFILE.callIqLive,
    tools: ["Agent workflows", "Transcription insights", "Follow-up automation", "Azure"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=90",
  },
  {
    index: "02",
    kicker: "Full-Stack SaaS Development",
    title: "Secure, responsive web platforms from the ground up.",
    body: "Owning the entire stack — from database schema to final UI/UX — with authentication, APIs, and deployment handled end to end.",
    proof: "Mock Interview AI · Live on Render",
    proofHref: PROFILE.mockInterviewLive,
    tools: ["MERN", "JWT auth", "REST APIs", "Render"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90",
  },
  {
    index: "03",
    kicker: "GenAI Orchestration",
    title: "Automated, human-in-the-loop pipelines.",
    body: "Systems thinking that goes far beyond single-prompt engineering, with approval gates where human judgement matters.",
    proof: "Automated Media Pipeline",
    tools: ["TTS", "AI avatars", "OAuth 2.0", "YouTube API"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90",
  },
];

const projects = [
  {
    title: "AED SmartX",
    type: "Live · Think Health",
    stack: "Full Stack · Health Tech · SaaS",
    impact:
      "AED program management platform: track devices across sites, log inspections, get supply and expiry alerts, and manage training certifications and compliance from one portal.",
    image: "/projects/aedsmartx.jpg",
    imagePosition: "left top",
    screen: true,
    live: PROFILE.aedSmartxLive,
  },
  {
    title: "AED Inspect",
    type: "Live · AI Inspection",
    stack: "AI Vision · PDF Reports",
    impact:
      "Photograph six parts of a defibrillator and the AI reads every label, tells you in about three minutes whether it would work in an emergency, and emails a PDF report.",
    image: "/projects/aed-inspect.jpg",
    screen: true,
    live: PROFILE.aedInspectLive,
  },
  {
    title: "CallIQ: AI Call Intelligence",
    type: "Live · SageAlpha",
    stack: "React · Agentic AI · Azure",
    impact:
      "Developed React UI flows and agentic workflow integrations for a call intelligence platform. Supports transcription analysis, follow-up automation, and Azure-hosted frontend deployment.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=90",
    live: PROFILE.callIqLive,
  },
  {
    title: "AI Mock Interview Platform",
    type: "Live · Full-stack SaaS",
    stack: "MERN · Gemini · JWT · jsPDF",
    impact:
      "JD-aware technical interviews powered by Gemini Pro. Includes speech analytics, automated scoring, and dynamic PDF reporting. Built with the MERN stack.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=90",
    repo: "https://github.com/sagarkadam7/mock-interview-ai",
    live: PROFILE.mockInterviewLive,
  },
  {
    title: "Automated Media Pipeline",
    type: "GenAI · Orchestration",
    stack: "TTS · Avatars · YouTube API",
    impact:
      "Script-to-publish workflow integrating TTS, AI avatars, human-in-the-loop approval gates, and automated YouTube delivery via OAuth 2.0.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1500&q=90",
    repo: PROFILE.github,
  },
  {
    title: "React Commerce",
    type: "Live · E-commerce",
    stack: "React · Vercel",
    impact: "Built a responsive storefront with product discovery, stateful UI, and a conversion-focused layout to show React delivery beyond AI projects.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1500&q=90",
    repo: "https://github.com/sagarkadam7/React-commerce",
    live: "https://react-commerce-rose.vercel.app",
  },
  {
    title: "Projects List",
    type: "Live · Dev portfolio hub",
    stack: "React · Vercel",
    impact: "A scannable index of public repositories and live demos for faster review of deployed React work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=90",
    repo: "https://github.com/sagarkadam7/projects-list",
    live: "https://projectslist-nine.vercel.app",
  },
  {
    title: "Learning Platform",
    type: "Live · EdTech UI",
    stack: "React · Vercel",
    impact: "Content structure, navigation, and deployment discipline—shows readable information architecture for user-facing products.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=90",
    repo: "https://github.com/sagarkadam7/learning",
    live: "https://learning-bay-ten.vercel.app",
  },
];

const education = [
  {
    school: "Genba Sopanrao Moze College of Engineering",
    degree: "B.E. Computer Engineering",
    detail: "CGPA 8.80 / 10.0",
    period: `Graduated ${PROFILE.graduation}`,
  },
  {
    school: "Pimpri Chinchwad College of Engineering",
    degree: "Diploma · Internet of Things (IoT)",
    detail: "CGPA 8.36 / 10.0",
    period: "Completed 2023",
  },
];

const metrics = [
  { value: "Now", label: "AI Full Stack Engineer", sub: "Think Health Care & Safety", live: true },
  {
    value: "4",
    label: "Live products",
    sub: "AED SmartX · AED Inspect · Call IQ · Mock Interview",
    count: true,
    decimals: 0,
  },
  {
    value: "5",
    label: "Teams shipped with",
    sub: "Think Health · SageAlpha · Scalefull · Pegasus · GSSoC",
    count: true,
    decimals: 0,
  },
  { value: "8.80", label: "B.E. CGPA", sub: "Computer Engineering · 2026", count: true, decimals: 2 },
];

const stackPillars = [
  {
    logo: "agentic",
    title: "Agentic Workflows",
    body: "Engineered multi-step AI automation, real-time transcription analysis, and predictive follow-up logic for CallIQ.",
    tools: ["LangGraph", "MCP", "Call IQ"],
  },
  {
    logo: "llm",
    title: "LLMs & RAG",
    body: "Retrieval-augmented systems on cloud and local LLMs — grounded answers, embeddings, and pipelines that keep humans in the loop.",
    tools: ["Ollama", "pgvector", "LlamaIndex"],
  },
  {
    logo: "mern",
    title: "Full-Stack SaaS",
    body: "Built low-latency, context-aware platforms using the MERN stack, Gemini Pro, and secure JWT authentication.",
    tools: ["MERN", "TypeScript", "Gemini"],
  },
  {
    logo: "seo",
    title: "Next.js & SEO",
    body: "Server-rendered Next.js apps with technical SEO — metadata, structured data, and Core Web Vitals — so products get found.",
    tools: ["Next.js", "Vercel AI SDK", "Schema.org"],
  },
];

const skillGroups = [
  {
    logo: "agentic",
    label: "Agentic AI",
    title: "Multi-step AI agents",
    focus: "Core focus",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1200&q=85",
    skills: ["LangGraph", "LangChain", "MCP", "Tool calling", "Langfuse evals", "Human-in-the-loop"],
  },
  {
    logo: "llm",
    label: "LLMs",
    title: "Cloud and local models",
    focus: "Model layer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    skills: ["Ollama", "Llama", "Qwen", "Mistral", "OpenAI", "Claude", "Gemini"],
  },
  {
    logo: "rag",
    label: "RAG + GenAI",
    title: "Context-aware AI systems",
    focus: "Grounded answers",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    skills: ["LlamaIndex", "pgvector", "Pinecone", "Chroma", "Embeddings", "Reranking"],
  },
  {
    logo: "mern",
    label: "MERN Stack",
    title: "Full-stack SaaS delivery",
    focus: "Production builds",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    skills: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "REST APIs"],
  },
  {
    logo: "seo",
    label: "Next.js + SEO",
    title: "Fast, findable web apps",
    focus: "Ranking & performance",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85",
    skills: ["Next.js App Router", "Vercel AI SDK", "Technical SEO", "Core Web Vitals", "Schema.org", "Search Console"],
  },
  {
    logo: "frontend",
    label: "AI-native workflow",
    title: "Shipping faster with AI tools",
    focus: "Daily toolkit",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
    skills: ["Claude Code", "Cursor", "GitHub Copilot", "v0", "Perplexity", "ChatGPT"],
  },
];

const skillHighlights = [
  "Claude Code",
  "Cursor",
  "LangGraph",
  "LangChain",
  "MCP",
  "Ollama",
  "Llama",
  "Qwen",
  "OpenAI",
  "Claude",
  "Gemini",
  "LlamaIndex",
  "pgvector",
  "Pinecone",
  "Langfuse",
  "Next.js",
  "Vercel AI SDK",
  "TypeScript",
  "MongoDB",
  "Node.js",
  "Docker",
  "Technical SEO",
  "GitHub Copilot",
  "Tailwind CSS",
  "GSAP",
  "Vercel",
];

const principles = [
  "Lead with the problem solved—then the stack. Hiring managers scan outcomes first.",
  "Every project should have a live demo, repo, or both. Proof beats promises.",
  "AI features need trust UX: sources, limits, and clear failure states.",
  "Own the full path: design, API, data model, deploy—so nothing falls between roles.",
];

function useSmoothScroll(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;

    const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis = instance;
    instance.on("scroll", ScrollTrigger.update);
    const raf = (time) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link || link.hasAttribute("data-menu-link") || link.classList.contains("skip-link")) return;
      const hash = link.getAttribute("href");
      if (hash.length < 2 || !document.querySelector(hash)) return;
      event.preventDefault();
      scrollToTarget(hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      instance.destroy();
      lenis = null;
    };
  }, [enabled]);
}

function useMagnetic() {
  useEffect(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return undefined;

    const cleanups = [...document.querySelectorAll("[data-magnetic]")].map((element) => {
      const xTo = gsap.quickTo(element, "x", { duration: 0.8, ease: "elastic.out(1, 0.35)" });
      const yTo = gsap.quickTo(element, "y", { duration: 0.8, ease: "elastic.out(1, 0.35)" });
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        xTo((event.clientX - (rect.left + rect.width / 2)) * 0.32);
        yTo((event.clientY - (rect.top + rect.height / 2)) * 0.42);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
        gsap.set(element, { x: 0, y: 0 });
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

// Cards marked [data-spotlight] get a lime glow that tracks the pointer.
function useSpotlight() {
  useEffect(() => {
    if (!hasFinePointer()) return undefined;

    const onMove = (event) => {
      const card = event.target.closest?.("[data-spotlight]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

function Spotlight({ tone = "dark", fill = true }) {
  return (
    <>
      {fill && <span className={`spotlight spotlight--${tone}`} aria-hidden="true" />}
      <span className="spotlight-edge" aria-hidden="true" />
    </>
  );
}

// Two stacked copies of an icon: on hover the first leaves and the second takes its place.
function SwapIcon({ icon: Icon, size = 17, strokeWidth = 3, axis = "diagonal" }) {
  return (
    <span className={`swap-icon swap-icon--${axis}`} style={{ width: size, height: size }} aria-hidden="true">
      <Icon size={size} strokeWidth={strokeWidth} />
      <Icon size={size} strokeWidth={strokeWidth} />
    </span>
  );
}

function Preloader() {
  return (
    <div
      className="preloader fixed inset-0 z-[200] flex flex-col justify-between bg-[#080807] px-5 py-6 text-bone md:px-10 md:py-8"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.18em] text-bone/50">
        <span>Portfolio · {new Date().getFullYear()}</span>
        <span>{PROFILE.location}</span>
      </div>
      <p className="preloader-name text-[clamp(44px,11vw,168px)] font-black uppercase leading-[0.84] tracking-[-0.05em]">
        Sagar Kadam
      </p>
      <div className="flex items-end justify-between gap-6">
        <p className="max-w-xs text-xs font-black uppercase tracking-[0.16em] text-bone/45">
          AI Full Stack Engineer
        </p>
        <p className="preloader-count text-[clamp(56px,10vw,136px)] font-black leading-none text-signal tabular-nums">
          0
        </p>
      </div>
      <div className="preloader-bar absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-signal" />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-signal"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [enabled] = useState(() => hasFinePointer() && !prefersReducedMotion());

  useEffect(() => {
    if (!enabled) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });
    const interactive = "a, button, [data-cursor]";
    let visible = false;

    const move = (event) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        visible = true;
      }
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };
    const over = (event) => {
      const target = event.target.closest(interactive);
      if (!target) return;
      ring.classList.add("is-active");
      const text = target.getAttribute("data-cursor-label");
      if (text) {
        label.textContent = text;
        ring.classList.add("has-label");
      }
    };
    const out = (event) => {
      const target = event.target.closest(interactive);
      if (!target || target.contains(event.relatedTarget)) return;
      ring.classList.remove("is-active", "has-label");
    };
    const hide = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      visible = false;
    };
    const press = () => gsap.to(ring, { scale: 0.82, duration: 0.15 });
    const release = () => gsap.to(ring, { scale: 1, duration: 0.4, ease: "back.out(3)" });

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

function Header({ menuOpen, onToggleMenu }) {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 6) return;
      setHidden(y > lastY && y > 160);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main > section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id || "");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`site-header pointer-events-none fixed left-0 top-0 z-50 flex w-full items-start justify-between px-5 py-5 text-white mix-blend-difference md:px-10 ${
        hidden && !menuOpen ? "is-hidden" : ""
      }`}
    >
      <a className="pointer-events-auto grid text-lg font-black uppercase leading-[0.82]" href="#top" aria-label="Home">
        <span>Sagar</span>
        <span>Kadam</span>
      </a>
      <nav className="pointer-events-auto hidden gap-9 text-sm font-black uppercase md:flex" aria-label="Main navigation">
        {navLinks.map(([label, href]) => {
          const isActive = active === href.slice(1);
          return (
            <a
              key={href}
              className="nav-link relative py-1"
              href={href}
              aria-current={isActive ? "true" : undefined}
            >
              {label}
              <span className={`nav-underline ${isActive ? "is-active" : ""}`} aria-hidden="true" />
            </a>
          );
        })}
      </nav>
      <button
        type="button"
        className="pointer-events-auto flex h-10 items-center gap-2 rounded-full border border-white/40 px-4 text-[10px] font-black uppercase tracking-[0.12em] md:hidden"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? "Close" : "Menu"}
        {menuOpen ? <X size={15} strokeWidth={3} /> : <Menu size={15} strokeWidth={3} />}
      </button>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const focusTimer = setTimeout(() => firstLinkRef.current?.focus(), 350);
    const onKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(focusTimer);
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const go = (event, href) => {
    event.preventDefault();
    onClose();
    // Wait for the menu effect cleanup to restart Lenis before scrolling.
    setTimeout(() => scrollToTarget(href), 60);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[45] flex flex-col justify-between overflow-y-auto bg-[#080807] px-5 pb-8 pt-28 text-bone md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map(([label, href], index) => (
              <div key={href} className="overflow-hidden border-b border-white/10">
                <motion.a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={href}
                  data-menu-link
                  onClick={(event) => go(event, href)}
                  className="flex items-baseline gap-4 py-2 text-[clamp(34px,10.5vw,64px)] font-black uppercase leading-[0.95]"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "110%" }}
                  transition={{ duration: 0.7, delay: 0.18 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-xs font-black text-signal">{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </motion.a>
              </div>
            ))}
          </nav>
          <motion.div
            className="mt-10 grid gap-3 text-[11px] font-black uppercase tracking-[0.12em] text-bone/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <a href={`mailto:${PROFILE.email}`} className="text-bone">
              {PROFILE.email}
            </a>
            <div className="flex gap-6">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const heroChips = ["Agentic AI", "LLMs", "RAG", "MERN", "Next.js", "SEO"];

function Hero() {
  return (
    <section id="top" className="hero-stage relative min-h-[100svh] overflow-hidden bg-[#080807] text-bone">
      <div className="hero-media absolute inset-0 opacity-70">
        <img
          className="hero-bg h-full w-full scale-110 object-cover"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90"
          alt=""
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,0.96)_0%,rgba(8,8,7,0.56)_48%,rgba(8,8,7,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,7,0.9)_0%,rgba(8,8,7,0.26)_48%,rgba(8,8,7,0.5)_100%)]" />
      </div>

      <div className="hero-content relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1500px] grid-rows-[auto_1fr_auto] px-4 pb-5 pt-24 md:px-10 md:pb-7 md:pt-28">
        <div className="hero-top flex flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-2.5 text-[11px] font-black uppercase text-bone/75 md:text-xs">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-signal" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Building at Think Health
          </span>
          <span className="hero-meta text-[11px] font-black uppercase text-bone/55 md:text-xs">
            {PROFILE.location}
          </span>
        </div>

        <div className="hero-main grid items-end gap-8 py-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.68fr)] lg:items-center lg:gap-12 lg:py-10 xl:gap-16">
          <div className="min-w-0">
            <p className="hero-kicker mb-5 text-xs font-black uppercase tracking-[0.24em] text-bone/58 md:text-sm">
              Sagar Kadam
            </p>
            <h1 className="hero-title hero-title--cinematic text-[clamp(60px,10.2vw,150px)] font-black uppercase leading-[0.8] tracking-[-0.065em]">
              <span className="hero-line hero-line--ghost block">AI Full</span>
              <span className="hero-line hero-line--ghost block">Stack</span>
              <span className="hero-line hero-line--signal block">Engineer</span>
            </h1>
            <p className="hero-tagline mt-6 max-w-md text-sm font-bold leading-relaxed text-bone/55 md:text-base lg:hidden">
              AED SmartX &amp; AED Inspect at Think Health · Call IQ at SageAlpha · Mock Interview SaaS on Render.
            </p>
            <div className="hero-chips mt-7 flex max-w-2xl flex-wrap gap-2">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="hero-chip rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[10px] font-black uppercase text-bone/60"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <motion.div className="hero-panel relative max-w-xl overflow-hidden border-l border-white/18 bg-black/10 py-7 pl-6 pr-2 lg:justify-self-end lg:pl-8 xl:max-w-[520px]">
            <div className="pointer-events-none absolute -left-px top-0 h-full w-px bg-gradient-to-b from-transparent via-signal/45 to-transparent" />
            <p className="hero-panel-lead relative text-lg font-bold leading-relaxed text-bone/78 md:text-xl md:leading-relaxed">
              I build <span className="font-black text-bone">agentic AI</span> and full-stack products:{" "}
              <a
                className="text-signal underline decoration-signal/40 decoration-2 underline-offset-4 transition-colors hover:decoration-signal"
                href={PROFILE.aedSmartxLive}
                target="_blank"
                rel="noreferrer"
              >
                AED SmartX
              </a>{" "}
              and{" "}
              <a
                className="text-signal underline decoration-signal/40 decoration-2 underline-offset-4 transition-colors hover:decoration-signal"
                href={PROFILE.aedInspectLive}
                target="_blank"
                rel="noreferrer"
              >
                AED Inspect
              </a>{" "}
              at Think Health,{" "}
              <a
                className="underline decoration-bone/30 decoration-2 underline-offset-4 transition-colors hover:decoration-bone"
                href={PROFILE.callIqLive}
                target="_blank"
                rel="noreferrer"
              >
                Call IQ
              </a>{" "}
              on Azure, and{" "}
              <a
                className="underline decoration-bone/30 decoration-2 underline-offset-4 transition-colors hover:decoration-bone"
                href={PROFILE.mockInterviewLive}
                target="_blank"
                rel="noreferrer"
              >
                Mock Interview AI
              </a>{" "}
              on Render.
            </p>
            <p className="hero-panel-sub mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-black uppercase leading-relaxed tracking-[0.12em] text-bone/55">
              <span className="rounded-full bg-signal px-2 py-0.5 text-[10px] tracking-[0.1em] text-ink">Now</span>
              AI Full Stack Engineer ·{" "}
              <a
                className="text-bone underline decoration-bone/30 underline-offset-4 transition-colors hover:decoration-bone"
                href={PROFILE.thinkHealth}
                target="_blank"
                rel="noreferrer"
              >
                Think Health Care &amp; Safety
              </a>
            </p>
            <div className="hero-cta mt-8 flex flex-wrap gap-3">
              <span className="hero-cta-item">
                <a
                  data-magnetic
                  className="btn-fill inline-flex items-center gap-2 rounded-full border border-signal/60 bg-signal px-6 py-3.5 text-sm font-black uppercase text-ink"
                  href="#work"
                >
                  View work <SwapIcon icon={ArrowUpRight} />
                </a>
              </span>
              <span className="hero-cta-item">
                <button
                  type="button"
                  data-magnetic
                  className="btn-fill btn-fill--signal inline-flex items-center gap-2 rounded-full border border-signal/35 bg-white/[0.04] px-5 py-3.5 text-sm font-black uppercase text-bone"
                  onClick={() => openAskAgent()}
                >
                  <AgentGlyph size={20} className="btn-glyph text-signal" /> Ask my AI
                </button>
              </span>
              <span className="hero-cta-item">
                <a
                  data-magnetic
                  className="btn-fill btn-fill--signal inline-flex items-center gap-2 rounded-full border border-signal/25 px-5 py-3.5 text-sm font-black uppercase text-bone"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <SwapIcon icon={Linkedin} size={16} axis="vertical" />
                </a>
              </span>
            </div>
            <div className="hero-proof mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["Now", "Think Health", "AI Full Stack"],
                ["4", "Live products", "AED · Call IQ · SaaS", 0],
                ["8.80", "CGPA", "B.E. Computer Engg", 2],
              ].map(([value, label, sub, decimals]) => (
                <div key={label} className="hero-proof-item">
                  <p
                    className="text-[clamp(28px,4vw,44px)] font-black leading-none text-bone tabular-nums"
                    data-count={decimals !== undefined ? value : undefined}
                    data-decimals={decimals}
                  >
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase text-bone/80">{label}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase text-bone/40">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom grid items-end gap-4">
          <div className="hero-marquee overflow-hidden border-y border-white/12 py-4 md:py-5">
            <div className="marquee-track flex w-max shrink-0 items-center text-[clamp(30px,5.2vw,78px)] font-black uppercase leading-none tracking-[-0.03em]">
              {[0, 1].map((pass) =>
                [
                  "AED SmartX",
                  "Agentic AI",
                  "LLMs",
                  "RAG",
                  "MERN",
                  "Next.js",
                  "SEO",
                  "Call IQ",
                  "Think Health",
                  "Gemini",
                ].map((word, index) => (
                  <span
                    key={`${pass}-${word}`}
                    className={`pr-[0.6em] ${index % 2 === 0 ? "text-bone" : "marquee-word--outline"}`}
                    aria-hidden={pass === 1 || undefined}
                  >
                    {word}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="about" className="about-section manifesto relative overflow-clip bg-bone px-4 py-24 text-ink md:px-10 md:py-36">
      <div className="about-intro mx-auto max-w-[1500px]">
        <div className="about-intro-head rule-draw rule-draw--ink flex flex-wrap items-center justify-between gap-4 pb-6">
          <p className="about-label text-sm font-black uppercase text-muted">About</p>
        </div>

        <div className="about-main mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-20">
          <div className="about-copy min-w-0">
            <h2 className="about-headline max-w-3xl text-[clamp(32px,5.2vw,72px)] font-black leading-[1.06] tracking-tight xl:max-w-2xl">
              <span className="about-line block">Computer engineer</span>
              <span className="about-line block">
                shipping{" "}
                <span className="about-highlight relative inline-block whitespace-nowrap">
                  <span
                    className="about-highlight-bar absolute inset-x-[-0.06em] bottom-[0.06em] h-[0.36em] origin-left bg-signal"
                    aria-hidden="true"
                  />
                  <span className="relative">AI in production</span>
                </span>
              </span>
            </h2>

            <figure className="about-portrait about-portrait--inline relative mx-auto mt-10 w-full max-w-[240px] sm:max-w-[260px] lg:hidden">
              <motion.div
                className="about-portrait-frame aspect-[5/6] overflow-hidden border border-ink/12 bg-paper shadow-editorial"
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <img className="about-portrait-img h-full w-full object-cover" src={PROFILE.heroImage} alt="Sagar Kadam" />
              </motion.div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="about-badge rounded-full bg-ink px-3 py-1.5 text-[10px] font-black uppercase text-bone">
                  AI Full Stack Engineer
                </span>
                <span className="about-badge rounded-full bg-signal px-3 py-1.5 text-[10px] font-black uppercase text-ink">
                  @ Think Health
                </span>
              </div>
            </figure>

            <p className="about-lead mt-8 max-w-2xl text-[15px] font-bold leading-relaxed text-muted sm:text-base md:mt-10 md:text-lg md:leading-relaxed lg:max-w-none">
              I&apos;m Sagar Kadam, an AI Full Stack Engineer at{" "}
              <a
                className="text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                href={PROFILE.thinkHealth}
                target="_blank"
                rel="noreferrer"
              >
                Think Health Care &amp; Safety
              </a>{" "}
              in {PROFILE.location}, where I build{" "}
              <a
                className="text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                href={PROFILE.aedSmartxLive}
                target="_blank"
                rel="noreferrer"
              >
                AED SmartX
              </a>{" "}
              and the AI-powered{" "}
              <a
                className="text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                href={PROFILE.aedInspectLive}
                target="_blank"
                rel="noreferrer"
              >
                AED Inspect
              </a>
              . Before that I built agentic AI at{" "}
              <a
                className="text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                href={PROFILE.sageAlpha}
                target="_blank"
                rel="noreferrer"
              >
                SageAlpha
              </a>{" "}
              on{" "}
              <a
                className="text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                href={PROFILE.callIqLive}
                target="_blank"
                rel="noreferrer"
              >
                Call IQ
              </a>
              , and shipped a Gemini-powered interview SaaS on Render.
            </p>
            <p className="about-sub mt-6 max-w-2xl border-t border-ink/10 pt-5 text-[11px] font-black uppercase leading-relaxed tracking-wide text-ink/45 md:text-xs lg:max-w-none">
              AI Full Stack Engineer · Agentic AI · Health Tech · Full-Stack SaaS
            </p>
          </div>

          <figure className="about-portrait about-portrait--side relative hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <motion.div
              className="about-portrait-frame aspect-[5/6] overflow-hidden border border-ink/12 bg-paper shadow-editorial"
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <img
                className="about-portrait-img h-full w-full object-cover"
                src={PROFILE.heroImage}
                alt="Sagar Kadam — AI Full Stack Engineer"
              />
            </motion.div>
            <div className="mt-5 flex flex-col gap-2">
              <span className="about-badge w-fit rounded-full bg-ink px-4 py-2 text-[10px] font-black uppercase text-bone">
                AI Full Stack Engineer
              </span>
              <span className="about-badge w-fit rounded-full bg-signal px-4 py-2 text-[10px] font-black uppercase text-ink">
                @ Think Health · {PROFILE.location}
              </span>
            </div>
          </figure>
        </div>
      </div>

      <div className="about-education mx-auto mt-20 grid max-w-[1500px] gap-4 md:grid-cols-2">
        {education.map((item) => (
          <motion.article
            key={item.school}
            data-spotlight
            className="about-edu-card group relative overflow-hidden border border-ink/12 bg-paper p-6 transition-colors duration-300 hover:border-signal/40 md:p-8"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-signal/10 transition-transform duration-500 group-hover:scale-150" />
            <Spotlight tone="light" />
            <p className="relative text-xs font-black uppercase text-muted">{item.period}</p>
            <h3 className="about-edu-title relative mt-3 text-xl font-black leading-tight md:text-2xl">{item.degree}</h3>
            <p className="relative mt-2 text-sm font-bold text-muted">{item.school}</p>
            <p className="relative mt-4 text-sm font-black uppercase text-[#6f7d10]">{item.detail}</p>
          </motion.article>
        ))}
      </div>

      <div className="about-metrics mx-auto mt-4 grid max-w-[1500px] gap-px overflow-hidden border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            className="metric-card group bg-bone p-6 transition-colors duration-300 hover:bg-paper md:p-7"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <p className="flex items-center gap-3 text-[clamp(36px,4.5vw,64px)] font-black leading-none tabular-nums">
              {metric.live && (
                <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
                  <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-signal" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-signal ring-2 ring-ink/10" />
                </span>
              )}
              <span data-count={metric.count ? metric.value : undefined} data-decimals={metric.decimals}>
                {metric.value}
              </span>
            </p>
            <p className="mt-3 text-sm font-black uppercase leading-tight">{metric.label}</p>
            <p className="mt-1 text-xs font-bold uppercase text-muted">{metric.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SkillLogo({ type }) {
  const stroke = "currentColor";
  const logos = {
    frontend: (
      <>
        <rect x="5" y="6" width="26" height="22" rx="3" />
        <path d="M5 13h26" />
        <path d="M14 20l-4-3.5L14 13" />
        <path d="M22 13l4 3.5L22 20" />
      </>
    ),
    mern: (
      <>
        <path d="M18 4l12 7v14l-12 7-12-7V11L18 4z" />
        <path d="M12 14l6-3.5 6 3.5v7l-6 3.5-6-3.5v-7z" />
        <path d="M18 10.5v14" />
        <path d="M12 14l12 7" />
        <path d="M24 14l-12 7" />
      </>
    ),
    agentic: (
      <>
        <circle cx="8" cy="18" r="4" />
        <circle cx="18" cy="8" r="4" />
        <circle cx="28" cy="20" r="4" />
        <path d="M11 15l4-4" />
        <path d="M21 11l4 6" />
        <path d="M12 20h12" />
      </>
    ),
    rag: (
      <>
        <path d="M9 6h14l5 5v19H9z" />
        <path d="M23 6v6h5" />
        <path d="M13 17h10" />
        <path d="M13 22h7" />
        <path d="M5 11v19h18" />
        <path d="M28 4l1.5 3L33 8.5 29.5 10 28 13l-1.5-3L23 8.5 26.5 7 28 4z" />
      </>
    ),
    backend: (
      <>
        <ellipse cx="18" cy="8" rx="11" ry="4" />
        <path d="M7 8v9c0 2.2 4.9 4 11 4s11-1.8 11-4V8" />
        <path d="M7 17v9c0 2.2 4.9 4 11 4s11-1.8 11-4v-9" />
        <path d="M13 26h10" />
      </>
    ),
    cloud: (
      <>
        <path d="M13 27H9a6 6 0 010-12 8.5 8.5 0 0116-3.5A7.5 7.5 0 0127 27h-4" />
        <path d="M18 16v15" />
        <path d="M13 21l5-5 5 5" />
      </>
    ),
    llm: (
      <>
        <rect x="9" y="9" width="18" height="18" rx="3" />
        <path d="M14 14h8v8h-8z" />
        <path d="M14 4v5M22 4v5M14 27v5M22 27v5M4 14h5M4 22h5M27 14h5M27 22h5" />
      </>
    ),
    seo: (
      <>
        <circle cx="15" cy="15" r="9" />
        <path d="M21.5 21.5L31 31" />
        <path d="M10.5 18l3-3 2.5 2 4-5" />
      </>
    ),
  };

  return (
    <svg className="skill-logo-svg" viewBox="0 0 36 36" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {logos[type]}
    </svg>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section relative overflow-hidden bg-[#080807] px-4 py-24 text-bone md:px-10 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-signal/10 blur-[110px]" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="rule-draw mb-12 grid gap-8 pb-10 lg:grid-cols-[0.36fr_1fr] lg:items-start lg:gap-14">
          <div className="lg:pt-2">
            <p className="skills-label text-sm font-black uppercase text-bone/55">Skills</p>
            <p className="skills-kicker mt-5 text-xs font-black uppercase tracking-[0.18em] text-signal">
              AI · Web · Cloud · Backend
            </p>
          </div>
          <div>
            <h2 className="skills-title max-w-[20ch] text-[clamp(32px,4.6vw,72px)] font-black uppercase leading-[0.9]">
              A practical stack for shipping AI products.
            </h2>
            <p className="skills-lead mt-7 max-w-3xl text-lg font-bold leading-relaxed text-bone/62 md:text-xl">
              Agentic AI workflows, cloud and local LLMs, RAG pipelines, MERN delivery, and Next.js apps built for
              technical SEO.
            </p>
          </div>
        </div>

        <div className="skills-marquee mb-8 overflow-hidden border-y border-white/15 py-3">
          <div className="skills-ribbon flex w-max gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-bone/70">
            {[...skillHighlights, ...skillHighlights].map((skill, index) => (
              <span key={`${skill}-${index}`} className="rounded-full border border-white/15 bg-white/[0.035] px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ logo, label, title, focus, image, skills }, index) => (
            <motion.article
              key={label}
              data-spotlight
              className="skill-card group relative min-h-[360px] overflow-hidden border border-white/14 bg-white/[0.035] p-6 backdrop-blur transition-colors duration-300 hover:border-signal/40 hover:bg-white/[0.06] md:p-7"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
            >
              <img className="skill-card-bg absolute inset-0 h-full w-full object-cover" src={image} alt="" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,8,7,0.96)_0%,rgba(8,8,7,0.88)_44%,rgba(8,8,7,0.66)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(200,220,84,0.18),transparent_34%)]" />
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-signal/10 transition-transform duration-500 group-hover:scale-150" />
              <Spotlight />
              <div className="skill-part relative flex items-start justify-between gap-4">
                <div className="skill-logo">
                  <SkillLogo type={logo} />
                </div>
                <span className="skill-num text-[clamp(42px,5vw,74px)] font-black leading-none text-white/10 transition-colors duration-500 group-hover:text-signal/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="skill-part relative mt-10">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-signal">{label}</p>
                <h3 className="mt-3 text-[clamp(26px,2.8vw,40px)] font-black leading-[0.95]">{title}</h3>
                <p className="mt-4 text-sm font-black uppercase text-bone/45">{focus}</p>
              </div>

              <div className="skill-part relative mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-black/15 px-3 py-1.5 text-[11px] font-black uppercase text-bone/72 transition-colors duration-300 group-hover:border-signal/30 group-hover:text-bone"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const active = experience[activeIndex];

  // The role crossing the middle of the viewport becomes active, so the
  // preview follows the scroll as well as the pointer.
  useEffect(() => {
    const rows = listRef.current?.querySelectorAll(".experience-row");
    if (!rows?.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section relative overflow-clip bg-[#080807] px-4 py-24 text-bone md:px-10 md:py-36">
      <div className="rule-draw relative mb-12 grid gap-8 pb-10 md:mb-14 lg:grid-cols-[0.36fr_1fr] lg:items-start lg:gap-14">
        <div className="lg:pt-2">
          <p className="experience-label text-sm font-black uppercase text-bone/55">Experience</p>
          <p className="experience-kicker mt-5 text-xs font-black uppercase tracking-[0.18em] text-signal">
            Health Tech · Agentic AI · MERN · Open Source
          </p>
        </div>
        <h2 className="experience-title max-w-[22ch] text-[clamp(32px,4.6vw,72px)] font-black uppercase leading-[0.9]">
          Health-Tech AI, Agentic Workflows, Full-Stack Delivery, and Open Source.
        </h2>
      </div>
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,34vw)]">
        <div
          className="experience-timeline pointer-events-none absolute -left-5 bottom-0 top-0 hidden w-px origin-top bg-gradient-to-b from-signal via-white/25 to-transparent md:block"
          aria-hidden="true"
        />
        <div ref={listRef} className="experience-list grid gap-4">
          {experience.map((role, index) => {
            const Icon = role.icon;
            const isActive = index === activeIndex;
            return (
              <motion.article
                key={role.company}
                data-index={index}
                data-spotlight
                className={`experience-row group relative cursor-pointer overflow-hidden border backdrop-blur-sm transition-colors duration-500 ${
                  isActive
                    ? "border-signal/50 bg-white/[0.07]"
                    : "border-white/12 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <img
                  className={`experience-bg absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    isActive ? "scale-105 opacity-25" : "scale-110 opacity-0 group-hover:opacity-15"
                  }`}
                  style={role.imagePosition ? { objectPosition: role.imagePosition } : undefined}
                  src={role.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/92 to-[#080807]/60" aria-hidden="true" />
                <Spotlight />

                <div className="experience-part relative grid gap-6 p-6 md:grid-cols-[92px_1fr] md:p-8">
                  <div className="flex items-start justify-between md:flex-col md:justify-start md:gap-4">
                    <span
                      className={`experience-index text-[clamp(40px,4.2vw,60px)] font-black leading-none transition-colors duration-300 ${
                        isActive ? "text-signal" : "text-bone/25 group-hover:text-bone/50"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive ? "border-signal/60 bg-signal/15 text-signal" : "border-white/15 text-bone/50"
                      }`}
                    >
                      <Icon size={20} strokeWidth={2.4} />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="experience-part flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-[clamp(24px,3vw,42px)] font-black leading-[0.95]">
                        {role.site ? (
                          <a
                            className="relative z-10 inline-flex items-start gap-1.5 transition-colors duration-300 hover:text-signal"
                            href={role.site}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {role.company}
                            <ArrowUpRight className="mt-[0.1em] h-[0.5em] w-[0.5em] opacity-50" strokeWidth={3} />
                          </a>
                        ) : (
                          role.company
                        )}
                      </h3>
                      <span className="flex items-center gap-2 text-xs font-black uppercase text-bone/50">
                        {role.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/50 px-2 py-0.5 text-[10px] text-signal">
                            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                              <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-signal" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                            </span>
                            Current
                          </span>
                        )}
                        {role.period}
                      </span>
                    </div>
                    <p className="experience-part mt-2 text-sm font-black uppercase text-bone/75 md:text-base">{role.role}</p>
                    <p className="experience-part mt-2 text-xs font-black uppercase text-signal">{role.highlight}</p>
                    <p className="experience-part mt-5 max-w-3xl text-base font-bold leading-tight text-bone/62 transition-all duration-500 md:text-lg">
                      {role.body}
                    </p>
                    <div className="experience-part mt-5 flex flex-wrap gap-2">
                      {role.stack.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase transition-colors duration-300 md:text-xs ${
                            isActive ? "border-signal/35 text-signal" : "border-white/15 text-bone/55"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                      {role.links?.map((link) => (
                        <a
                          key={link.href}
                          className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-signal bg-signal px-3 py-1 text-[10px] font-black uppercase text-ink transition-colors duration-300 hover:border-bone hover:bg-bone md:text-xs"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <SwapIcon icon={ArrowUpRight} size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="experience-progress absolute bottom-0 left-0 h-[3px] bg-signal"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.article>
            );
          })}
        </div>

        <aside className="experience-preview relative hidden lg:block">
          <div className="sticky top-24 h-[min(600px,calc(100svh-8rem))] overflow-hidden border border-white/15 bg-[#0c0c0b]">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.company}
                className="absolute inset-0"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                exit={{ scale: 1.06, transition: { duration: 0.9 } }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.div
                  className="h-full w-full"
                  initial={{ scale: 1.22 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    className="experience-preview-img h-full w-full object-cover"
                    style={active.imagePosition ? { objectPosition: active.imagePosition } : undefined}
                    src={active.image}
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="experience-preview-shade pointer-events-none absolute inset-0 z-10" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.company}
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-7"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] tabular-nums">
                  <span>
                    <span className="text-signal">{String(activeIndex + 1).padStart(2, "0")}</span>
                    <span className="text-bone/45"> / {String(experience.length).padStart(2, "0")}</span>
                  </span>
                  <span className="h-px w-8 bg-white/25" aria-hidden="true" />
                  {active.current && <span className="rounded-full bg-signal px-2.5 py-1 text-ink">Current role</span>}
                </p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-signal">{active.highlight}</p>
                <h3 className="mt-3 text-[clamp(28px,2.6vw,40px)] font-black leading-[0.95]">{active.company}</h3>
                <p className="mt-3 text-base font-bold leading-snug text-bone/75">{active.role}</p>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.14em] text-bone/45">
                  {active.period}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="stack-section bg-[#080807] px-4 py-24 text-bone md:px-10 md:py-36">
      <div className="rule-draw mb-12 grid gap-8 pb-10 md:mb-14 lg:grid-cols-[0.36fr_1fr] lg:items-start lg:gap-14">
        <div className="lg:pt-2">
          <p className="stack-label text-sm font-black uppercase text-bone/55">What I bring</p>
          <p className="stack-kicker mt-5 text-xs font-black uppercase tracking-[0.18em] text-signal">
            Four pillars · one delivery path
          </p>
        </div>
        <div>
          <h2 className="stack-title max-w-[23ch] text-[clamp(32px,4.6vw,72px)] font-black uppercase leading-[0.9]">
            Bridging complex AI workflows and robust, user-centric applications.
          </h2>
          <p className="stack-lead mt-7 max-w-3xl text-lg font-bold leading-relaxed text-bone/62 md:text-xl">
            Agentic workflows, RAG on cloud and local LLMs, full-stack MERN SaaS with Gemini, and Next.js apps
            engineered for search.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stackPillars.map(({ logo, title, body, tools }, index) => (
          <article
            key={title}
            data-spotlight
            className="stack-card group relative flex min-h-[360px] flex-col border border-white/15 bg-white/[0.035] p-6 backdrop-blur md:p-7"
          >
            <Spotlight />
            <div className="stack-part relative flex items-start justify-between gap-4">
              <div className="stack-logo">
                <SkillLogo type={logo} />
              </div>
              <span className="stack-num text-[clamp(34px,4vw,54px)] font-black leading-none text-white/10 transition-colors duration-500 group-hover:text-signal/30">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="stack-part relative mt-8 text-[clamp(21px,2.1vw,27px)] font-black uppercase leading-[0.95]">
              {title}
            </h3>

            <p className="stack-part relative mt-4 flex-1 text-[15px] font-bold leading-relaxed text-bone/60">
              {body}
            </p>

            <div className="stack-part relative mt-7 flex flex-wrap gap-2 border-t border-white/12 pt-5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-bone/65 transition-colors duration-300 group-hover:border-signal/30 group-hover:text-bone/90"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="service-section bg-paper px-4 py-24 text-ink md:px-10 md:py-36">
      <div className="service-head rule-draw rule-draw--ink mb-12 pb-8 md:mb-16 md:pb-10">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="service-head-label mb-5 text-sm font-black uppercase text-muted">
              What I do
            </p>
            <h2 className="service-title text-[clamp(44px,8vw,132px)] font-black uppercase leading-[0.82]">
              Capabilities
            </h2>
          </div>
          <p className="service-head-lead max-w-md text-base font-bold leading-relaxed text-muted md:text-lg">
            How I build agentic AI features, full-stack SaaS, and GenAI orchestration — each one
            backed by something already running in production.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:gap-5">
        {services.map((service, index) => {
          const flipped = index % 2 === 1;

          return (
            <article
              key={service.title}
              className="service-card group relative grid overflow-hidden border border-ink/15 bg-bone transition-colors duration-500 hover:border-signal/60 md:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-center gap-9 p-6 md:p-10 lg:p-12 ${
                  flipped ? "md:order-2" : ""
                }`}
              >
                <div>
                  <div className="service-part flex items-center gap-4">
                    <span className="service-index text-[clamp(30px,3.6vw,52px)] font-black leading-none text-signal">
                      {service.index}
                    </span>
                    <span className="service-rule h-px flex-1 origin-left bg-ink/15" aria-hidden="true" />
                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-muted md:text-xs">
                      {service.kicker}
                    </span>
                  </div>

                  <h3 className="service-part mt-8 max-w-[15ch] text-[clamp(27px,3.4vw,46px)] font-black leading-[0.98] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="service-part mt-5 max-w-lg text-base font-bold leading-relaxed text-muted md:text-lg">
                    {service.body}
                  </p>
                </div>

                <div className="service-part">
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-ink/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-ink/70 transition-colors duration-300 group-hover:border-ink/45 group-hover:text-ink"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 flex items-center gap-2.5 border-t border-ink/12 pt-5 text-[11px] font-black uppercase tracking-[0.12em] text-ink/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    {service.proofHref ? (
                      <a
                        className="inline-flex items-center gap-1 text-ink underline decoration-ink/25 decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                        href={service.proofHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {service.proof} <SwapIcon icon={ArrowUpRight} size={13} />
                      </a>
                    ) : (
                      service.proof
                    )}
                  </p>
                </div>
              </div>

              <div
                className={`service-image-wrap relative min-h-[260px] overflow-hidden md:min-h-[440px] ${
                  flipped ? "md:order-1" : ""
                }`}
              >
                <img
                  className="service-image absolute inset-x-0 top-[-20%] h-[140%] w-full scale-110 object-cover"
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work-section overflow-hidden bg-ink text-bone">
      <div className="work-pin flex min-h-screen flex-col justify-center px-4 py-20 md:px-10 md:py-24 lg:py-[72px]">
        <div className="mb-8 grid gap-6 md:mb-10 lg:grid-cols-[0.36fr_1fr] lg:items-end lg:gap-14">
          <div className="work-meta">
            <p className="work-meta-item text-sm font-black uppercase text-bone/60">Featured Work</p>
            <p className="work-meta-item mt-5 text-xs font-black uppercase tracking-[0.18em] text-signal">
              {String(projects.length).padStart(2, "0")} projects · live &amp; open source
              <span className="lg:hidden"> · swipe →</span>
            </p>
            <div className="work-meta-item mt-6 hidden max-w-[260px] items-center gap-3 lg:flex">
              <span className="work-progress-track relative h-[2px] flex-1 overflow-hidden bg-white/15">
                <span className="work-progress absolute inset-0 origin-left scale-x-0 bg-signal" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.14em] text-bone/45">Scroll</span>
            </div>
          </div>
          <h2 className="work-headline max-w-[20ch] text-[clamp(32px,4.6vw,72px)] font-black leading-[0.92]">
            Live products, verifiable code, and real-world impact.
          </h2>
        </div>
        <div className="work-track flex gap-5 pb-2 will-change-transform">
          {projects.map((project, position) => {
            const primaryHref = project.live || project.href || project.repo;
            const isExternal = primaryHref.startsWith("http");
            return (
              <article
                key={project.title}
                data-spotlight
                className={`project-card group relative isolate grid h-[clamp(420px,58vh,640px)] w-[84vw] shrink-0 content-end overflow-hidden rounded-[2px] border border-white/10 bg-[#0d0d0c] p-5 sm:w-[72vw] md:w-[42vw] md:p-7 xl:w-[36vw] ${
                  project.screen ? "project-card--screen" : ""
                }`}
              >
                {project.screen ? (
                  // Product screenshots are light UIs: show them crisp in a browser frame
                  // rather than dimming them into a backdrop.
                  <div className="project-frame absolute inset-x-5 bottom-0 top-5 -z-20 overflow-hidden rounded-t-[10px] border border-b-0 border-white/12 bg-[#161614] md:inset-x-7 md:top-7">
                    <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="ml-3 truncate text-[10px] font-bold tracking-[0.04em] text-bone/45">
                        {hostOf(project.live)}
                      </span>
                    </div>
                    <div className="h-[calc(100%-2rem)] overflow-hidden">
                      <img
                        className="project-img project-img--screen h-full w-full object-cover object-top"
                        style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                        src={project.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    className="project-img absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <Spotlight fill={false} />
                <a
                  className="absolute inset-0 z-10"
                  href={primaryHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={`Open ${project.title}`}
                  data-cursor-label="View"
                />
                <div className="project-body">
                  <div className="mb-5 flex items-center justify-between border-b border-white/20 pb-4 text-xs font-black uppercase md:text-sm">
                    <span className="text-signal">{String(position + 1).padStart(2, "0")}</span>
                    <span className="flex items-center gap-2">
                      {project.live && (
                        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                          <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-signal" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                        </span>
                      )}
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-[clamp(28px,3vw,48px)] font-black leading-[0.92]">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-[15px] font-bold leading-snug text-white/80 md:text-base">
                    {project.impact}
                  </p>
                  <div className="relative z-20 mt-5 flex flex-wrap items-center gap-2.5">
                    <span className="mr-1 text-[11px] font-black uppercase tracking-[0.06em] text-white/60">
                      {project.stack}
                    </span>
                    {project.live && (
                      <a className="project-btn project-btn--primary" href={project.live} target="_blank" rel="noreferrer">
                        Live <SwapIcon icon={ArrowUpRight} size={14} />
                      </a>
                    )}
                    {project.repo && (
                      <a className="project-btn" href={project.repo} target="_blank" rel="noreferrer">
                        Code <SwapIcon icon={ExternalLink} size={13} />
                      </a>
                    )}
                    {!project.live && !project.repo && (
                      <a className="project-btn" href={project.href}>
                        See role <SwapIcon icon={ArrowUpRight} size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="principles-section bg-paper px-4 py-24 text-ink md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="principles-label mb-5 text-sm font-black uppercase text-muted">Principles</p>
          <h2 className="principles-title max-w-[11ch] text-[clamp(40px,5.6vw,92px)] font-black uppercase leading-[0.86]">
            How I work on a team.
          </h2>
          <p className="principles-lead mt-6 max-w-sm text-base font-bold leading-relaxed text-muted md:text-lg">
            Four rules I hold myself to on every project, from first commit to production.
          </p>
        </div>
        <div className="border-t border-ink/20">
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="principle-row group relative grid gap-3 py-7 md:grid-cols-[72px_1fr] md:gap-4 md:py-9"
            >
              <span className="principle-line absolute bottom-0 left-0 h-px w-full origin-left bg-ink/20" aria-hidden="true" />
              <span className="principle-num text-sm font-black uppercase text-muted transition-colors duration-300 group-hover:text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="principle-text text-[clamp(20px,2.2vw,34px)] font-black leading-[1.12] tracking-tight">
                <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {principle}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="closing-stage relative overflow-hidden bg-bone px-4 py-24 text-ink md:px-10 md:py-36">
      <div className="relative grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
        <div>
          <p className="closing-label mb-6 flex items-center gap-2.5 text-sm font-black uppercase text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-ink" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            Open to conversations
          </p>
          <h2 className="closing-title max-w-5xl text-[clamp(48px,7.4vw,124px)] font-black uppercase leading-[0.84]">
            Let&apos;s build something impactful.
          </h2>
        </div>

        <div className="closing-side grid content-end gap-8">
          <p className="closing-part text-[clamp(22px,2.4vw,36px)] font-black leading-tight">
            Building health-tech AI at Think Health.
          </p>
          <p className="closing-part max-w-xl text-base font-bold leading-relaxed text-muted md:text-lg">
            AI Full Stack Engineer in Pune, India. Always happy to talk about AI products, full-stack builds, and
            interesting collaborations.
          </p>

          <div className="closing-part">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-muted">Email</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                className="text-[clamp(18px,1.9vw,26px)] font-black underline decoration-ink/25 decoration-2 underline-offset-[6px] transition-colors duration-300 hover:decoration-ink"
                href={`mailto:${PROFILE.email}`}
              >
                {PROFILE.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-ink/25 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bone"
              >
                {copied ? <Check size={13} strokeWidth={3} /> : <Copy size={13} strokeWidth={3} />}
                {copied ? "Copied" : "Copy"}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
          </div>

          <div className="closing-part flex flex-wrap gap-3">
            <a
              data-magnetic
              className="btn-fill btn-fill--signal inline-flex w-fit items-center gap-3 rounded-full border border-ink bg-ink px-6 py-4 text-sm font-black uppercase text-bone"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Message on LinkedIn <SwapIcon icon={Linkedin} size={18} axis="vertical" />
            </a>
            <a
              data-magnetic
              className="btn-fill btn-fill--ink inline-flex w-fit items-center gap-3 rounded-full border border-ink/25 px-6 py-4 text-sm font-black uppercase text-ink"
              href={`mailto:${PROFILE.email}`}
            >
              Email me <SwapIcon icon={Mail} size={18} axis="vertical" />
            </a>
            <a
              data-magnetic
              className="btn-fill btn-fill--ink inline-flex w-fit items-center gap-3 rounded-full border border-ink/25 px-6 py-4 text-sm font-black uppercase text-ink"
              href={PROFILE.mockInterviewLive}
              target="_blank"
              rel="noreferrer"
            >
              Live demo <SwapIcon icon={ArrowUpRight} size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [time, setTime] = useState(formatPuneTime);

  useEffect(() => {
    const timer = setInterval(() => setTime(formatPuneTime()), 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer id="site-footer" className="bg-[#080807] px-4 pb-8 pt-12 text-bone md:px-10">
      <div className="grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="min-w-0">
          <a
            className="footer-name block text-[clamp(44px,9vw,150px)] font-black uppercase leading-[0.84] tracking-[-0.04em] transition-colors duration-300 hover:text-signal"
            href={`mailto:${PROFILE.email}`}
          >
            Sagar Kadam
          </a>
          <p className="mt-5 max-w-lg text-sm font-bold leading-relaxed text-bone/55">
            AI Full Stack Engineer at Think Health Care &amp; Safety · Previously SageAlpha · B.E. Computer
            Engineering (8.80 CGPA), 2026.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex flex-wrap gap-5 text-sm font-black uppercase">
            {[
              ["LinkedIn", PROFILE.linkedin],
              ["GitHub", PROFILE.github],
              ["AED SmartX", PROFILE.aedSmartxLive],
              ["Call IQ", PROFILE.callIqLive],
              ["Mock Interview", PROFILE.mockInterviewLive],
            ].map(([label, href]) => (
              <a
                key={label}
                className="link-draw inline-flex items-center gap-1 transition-colors duration-300 hover:text-signal"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {label} <SwapIcon icon={ExternalLink} size={14} />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-black uppercase tracking-[0.08em] text-bone/50">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              Pune · {time} IST
            </span>
            <a className="transition-colors hover:text-bone" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Right padding keeps "Back to top" clear of the floating Ask launcher. */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pr-24 pt-6 text-[11px] font-black uppercase tracking-[0.12em] text-bone/40 md:pr-36">
        <span>© {new Date().getFullYear()} Sagar Kadam · Designed &amp; engineered in Pune</span>
        <a className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-signal" href="#top">
          Back to top <SwapIcon icon={ArrowUp} size={14} axis="vertical" />
        </a>
      </div>
    </footer>
  );
}

function useGsapAnimations(rootRef) {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const finePointer = hasFinePointer();
    const cleanups = [];
    const countRestores = [];

    const countTo = (element, duration = 1.5) => {
      const original = element.textContent;
      const end = parseFloat(element.dataset.count);
      const decimals = Number(element.dataset.decimals || 0);
      const counter = { value: 0 };
      countRestores.push(() => {
        element.textContent = original;
      });
      element.textContent = (0).toFixed(decimals);
      return gsap.to(counter, {
        value: end,
        duration,
        ease: "power3.out",
        paused: true,
        onUpdate: () => {
          element.textContent = counter.value.toFixed(decimals);
        },
      });
    };

    const context = gsap.context(() => {
      const revealLines = (selector, trigger, start = "top 75%") => {
        document.querySelectorAll(selector).forEach((element) => {
          SplitText.create(element, {
            type: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 70,
                opacity: 0,
                rotateX: -35,
                transformOrigin: "50% 100%",
                transformPerspective: 900,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: { trigger: trigger || element, start },
              }),
          });
        });
      };

      // Section-head hairlines draw in from the left. Called per section so
      // ScrollTriggers keep being created in document order around the Work pin.
      const drawRule = (scope) => {
        const rule = document.querySelector(`${scope} .rule-draw`);
        if (!rule) return;
        gsap.fromTo(
          rule,
          { "--rule": 0 },
          {
            "--rule": 1,
            duration: 1.4,
            ease: "expo.inOut",
            scrollTrigger: { trigger: rule, start: "top 82%" },
          },
        );
      };

      // ---------- initial states ----------
      gsap.set(".hero-top, .hero-kicker, .hero-panel, .hero-proof, .hero-bottom", { y: 40, opacity: 0 });
      gsap.set(".hero-chip, .hero-tagline, .hero-panel-lead, .hero-panel-sub", { y: 24, opacity: 0 });
      gsap.set(".hero-cta-item", { y: 20, opacity: 0 });
      gsap.set(".service-card, .stack-card, .skill-card", { y: 90, opacity: 0 });
      gsap.set(".metric-card", { y: 50, opacity: 0 });
      gsap.set(".stack-label, .stack-kicker, .stack-lead, .service-head-label, .service-head-lead", {
        y: 28,
        opacity: 0,
      });
      // Capability rows enter from the side their image sits on.
      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.set(card, { x: index % 2 === 1 ? 60 : -60 });
      });
      gsap.set(".skills-label, .skills-kicker, .skills-lead, .skills-marquee", { y: 36, opacity: 0 });
      gsap.set(".about-line", { y: 50, opacity: 0 });
      gsap.set(".about-lead, .about-sub, .about-label", { y: 28, opacity: 0 });
      gsap.set(".about-edu-card", { y: 40, opacity: 0 });
      gsap.set(".about-highlight-bar", { scaleX: 0 });
      gsap.set(".experience-label, .experience-kicker", { y: 36, opacity: 0 });
      gsap.set(".experience-row", { x: -80, opacity: 0 });
      gsap.set(".experience-timeline", { scaleY: 0 });
      gsap.set(".experience-preview", { x: 40, opacity: 0 });
      gsap.set(".work-meta-item", { y: 26, opacity: 0 });
      gsap.set(".project-card", { y: 120, rotate: 2, opacity: 0 });
      gsap.set(".principles-label, .principles-lead", { y: 26, opacity: 0 });
      gsap.set(".closing-label, .closing-part", { y: 30, opacity: 0 });

      // ---------- hero ----------
      const heroSplit = SplitText.create(".hero-line", { type: "words,chars", tag: "span" });
      gsap.set(heroSplit.words, { display: "inline-block", whiteSpace: "nowrap" });
      gsap.set(heroSplit.chars, {
        display: "inline-block",
        yPercent: 90,
        opacity: 0,
        rotateX: -75,
        transformOrigin: "50% 100%",
        transformPerspective: 800,
      });

      const heroIntro = gsap
        .timeline({ paused: true, defaults: { ease: "power4.out" } })
        .to(".hero-top", { y: 0, opacity: 1, duration: 0.6 }, 0)
        .to(".hero-kicker", { y: 0, opacity: 1, duration: 0.6 }, 0.08)
        .to(heroSplit.chars, { yPercent: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.024 }, 0.12)
        .to(".hero-panel", { y: 0, opacity: 1, duration: 0.8 }, 0.45)
        .to(".hero-panel-lead", { y: 0, opacity: 1, duration: 0.7 }, 0.55)
        .to(".hero-chip", { y: 0, opacity: 1, duration: 0.5, stagger: 0.04 }, 0.7)
        .to(".hero-tagline", { y: 0, opacity: 1, duration: 0.6 }, 0.75)
        .to(".hero-panel-sub", { y: 0, opacity: 1, duration: 0.6 }, 0.75)
        .to(".hero-cta-item", { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 }, 0.85)
        .to(".hero-proof", { y: 0, opacity: 1, duration: 0.7 }, 1.0)
        .to(".hero-bottom", { y: 0, opacity: 1, duration: 0.7 }, 1.1);

      gsap.utils.toArray(".hero-proof [data-count]").forEach((element) => {
        heroIntro.add(countTo(element, 1.3).play(), 1.0);
      });

      const preloader = document.querySelector(".preloader");
      if (preloader) {
        if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        lenis?.stop();

        const nameSplit = SplitText.create(".preloader-name", { type: "words,chars", tag: "span" });
        gsap.set(nameSplit.words, { display: "inline-block", whiteSpace: "nowrap" });
        const count = preloader.querySelector(".preloader-count");
        const progress = { value: 0 };
        gsap.set(".preloader-name", { opacity: 1 });

        gsap
          .timeline({
            onComplete: () => {
              gsap.set(preloader, { display: "none" });
              lenis?.start();
              try {
                sessionStorage.setItem("sk-intro", "1");
              } catch {
                // Private mode can block storage; the intro simply replays next visit.
              }
            },
          })
          .from(nameSplit.chars, {
            display: "inline-block",
            yPercent: 110,
            opacity: 0,
            rotateX: -80,
            transformPerspective: 800,
            stagger: 0.03,
            duration: 0.7,
            ease: "power4.out",
          })
          .to(
            progress,
            {
              value: 100,
              duration: 0.95,
              ease: "power2.inOut",
              onUpdate: () => {
                count.textContent = Math.round(progress.value);
              },
            },
            0,
          )
          .to(".preloader-bar", { scaleX: 1, duration: 0.95, ease: "power2.inOut" }, 0)
          .to(preloader, { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "+=0.05")
          .add(() => heroIntro.play(), "-=0.55");
      } else {
        heroIntro.play();
      }

      const marquee = gsap.to(".marquee-track", { xPercent: -50, ease: "none", repeat: -1, duration: 22 });
      let settleTimer;
      ScrollTrigger.create({
        trigger: ".hero-stage",
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          const direction = self.direction === 1 ? 1 : -1;
          const boost = Math.min(Math.abs(self.getVelocity()) / 260, 5);
          gsap.to(marquee, { timeScale: direction * (1 + boost), duration: 0.2, overwrite: true });
          clearTimeout(settleTimer);
          settleTimer = setTimeout(() => gsap.to(marquee, { timeScale: direction, duration: 0.8 }), 140);
        },
      });
      cleanups.push(() => clearTimeout(settleTimer));

      gsap.to(".hero-bg", {
        yPercent: -6,
        scale: 1.1,
        ease: "none",
        scrollTrigger: { trigger: ".hero-stage", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-main", {
        yPercent: -10,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: ".hero-stage", start: "top top", end: "bottom top", scrub: true },
      });

      if (finePointer) {
        const hero = document.querySelector(".hero-stage");
        const bgX = gsap.quickTo(".hero-bg", "x", { duration: 1.4, ease: "power3" });
        const bgY = gsap.quickTo(".hero-bg", "y", { duration: 1.4, ease: "power3" });
        const onMove = (event) => {
          bgX((event.clientX / window.innerWidth - 0.5) * -28);
          bgY((event.clientY / window.innerHeight - 0.5) * -18);
        };
        hero.addEventListener("pointermove", onMove);
        cleanups.push(() => hero.removeEventListener("pointermove", onMove));
      }

      // ---------- about ----------
      drawRule(".about-section");

      gsap.to(".about-label", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-section", start: "top 78%" },
      });

      gsap.to(".about-line", {
        y: 0,
        opacity: 1,
        duration: 0.95,
        stagger: 0.14,
        ease: "power4.out",
        scrollTrigger: { trigger: ".about-headline", start: "top 80%" },
      });

      gsap.to(".about-highlight-bar", {
        scaleX: 1,
        duration: 0.9,
        delay: 0.45,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".about-headline", start: "top 80%" },
      });

      gsap.utils.toArray(".about-portrait").forEach((figure) => {
        gsap
          .timeline({ scrollTrigger: { trigger: figure, start: "top 85%" } })
          .fromTo(
            figure.querySelector(".about-portrait-frame"),
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "expo.inOut" },
          )
          .fromTo(
            figure.querySelector(".about-portrait-img"),
            { scale: 1.35 },
            { scale: 1, duration: 1.6, ease: "expo.out" },
            0,
          )
          .fromTo(
            figure.querySelectorAll(".about-badge"),
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" },
            0.75,
          );
      });

      gsap.to(".about-lead, .about-sub", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-lead", start: "top 88%" },
      });

      gsap.to(".about-edu-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-education", start: "top 82%" },
      });

      gsap.to(".metric-card", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-metrics", start: "top 85%" },
      });

      gsap.utils.toArray(".about-metrics [data-count]").forEach((element) => {
        const tween = countTo(element, 1.6);
        ScrollTrigger.create({
          trigger: ".about-metrics",
          start: "top 85%",
          once: true,
          onEnter: () => tween.play(),
        });
      });

      // ---------- skills ----------
      drawRule(".skills-section");
      revealLines(".skills-title", ".skills-section", "top 72%");

      gsap.to(".skills-label, .skills-kicker, .skills-lead, .skills-marquee", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-section", start: "top 75%" },
      });

      gsap.to(".skill-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skill-card", start: "top 86%" },
      });

      gsap.utils.toArray(".skill-card").forEach((card) => {
        gsap.fromTo(
          card.querySelectorAll(".skill-part"),
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 86%" },
          },
        );
        gsap.fromTo(
          card.querySelector(".skill-num"),
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: card, start: "top 86%" },
          },
        );
      });

      // ---------- experience ----------
      drawRule(".experience-section");

      gsap.to(".experience-label, .experience-kicker", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".experience-section", start: "top 75%" },
      });

      gsap.fromTo(
        ".experience-title",
        { clipPath: "inset(0 100% 0 0)", x: -40 },
        {
          clipPath: "inset(0 0% 0 0)",
          x: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".experience-section", start: "top 70%" },
        },
      );

      gsap.to(".experience-timeline", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".experience-section", start: "top 70%", end: "bottom 20%", scrub: 1 },
      });

      gsap.to(".experience-preview", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".experience-preview", start: "top 80%" },
      });

      gsap.utils.toArray(".experience-row").forEach((row) => {
        gsap.to(row, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: row, start: "top 85%" },
        });
        gsap.fromTo(
          row.querySelectorAll(".experience-part, .experience-index"),
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 85%" },
          },
        );
        const bg = row.querySelector(".experience-bg");
        if (bg) {
          gsap.to(bg, {
            scale: 1.08,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }
      });

      // ---------- work ----------
      revealLines(".work-headline", ".work-section", "top 70%");

      gsap.to(".work-meta-item", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work-section", start: "top 72%" },
      });

      const track = document.querySelector(".work-track");
      if (track) {
        gsap.to(".project-card", {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".work-section", start: "top 70%" },
        });

        const pinned = window.matchMedia("(min-width: 1024px)").matches;
        // When pinned, photos settle oversized so they have room to drift inside the card.
        const photoScale = pinned ? 1.16 : 1.02;

        gsap.fromTo(
          ".project-img",
          { scale: 1.32 },
          {
            scale: (index, image) => (image.classList.contains("project-img--screen") ? 1 : photoScale),
            duration: 1.8,
            stagger: 0.12,
            ease: "expo.out",
            scrollTrigger: { trigger: ".work-section", start: "top 70%" },
          },
        );

        if (pinned) {
          const horizontal = gsap.to(track, {
            x: () => -Math.max(0, track.scrollWidth - window.innerWidth + 40),
            ease: "none",
            scrollTrigger: {
              trigger: ".work-pin",
              start: "top top",
              end: () => `+=${Math.max(track.scrollWidth, window.innerWidth * 2)}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => gsap.set(".work-progress", { scaleX: self.progress }),
            },
          });

          gsap.utils.toArray(".project-card").forEach((card) => {
            const photo = card.querySelector(".project-img:not(.project-img--screen)");
            if (!photo) return;
            gsap.fromTo(
              photo,
              { xPercent: -6 },
              {
                xPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizontal,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
          });
        }
      }

      // ---------- capabilities (services) ----------
      drawRule(".service-section");

      gsap.to(".service-head-label, .service-head-lead", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".service-section", start: "top 76%" },
      });

      gsap.fromTo(
        ".service-title",
        { clipPath: "inset(0 100% 0 0)", x: -40 },
        {
          clipPath: "inset(0 0% 0 0)",
          x: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".service-section", start: "top 74%" },
        },
      );

      gsap.utils.toArray(".service-card").forEach((card, index) => {
        const image = card.querySelector(".service-image");

        // The photo wipes open from the card's outer edge as the row slides in.
        gsap.fromTo(
          card.querySelector(".service-image-wrap"),
          { clipPath: index % 2 === 1 ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "expo.inOut",
            scrollTrigger: { trigger: card, start: "top 78%" },
          },
        );

        gsap.to(card, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 78%" },
        });

        gsap.fromTo(
          card.querySelectorAll(".service-part"),
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 74%" },
          },
        );

        gsap.fromTo(
          card.querySelector(".service-index"),
          { scale: 0.6, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "back.out(1.8)",
            scrollTrigger: { trigger: card, start: "top 74%" },
          },
        );

        gsap.fromTo(
          card.querySelector(".service-rule"),
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
            scrollTrigger: { trigger: card, start: "top 74%" },
          },
        );

        gsap.to(image, {
          yPercent: -12,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });

      // ---------- stack ----------
      drawRule(".stack-section");

      gsap.fromTo(
        ".stack-title",
        { clipPath: "inset(0 100% 0 0)", x: -40 },
        {
          clipPath: "inset(0 0% 0 0)",
          x: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".stack-section", start: "top 70%" },
        },
      );

      gsap.to(".stack-label, .stack-kicker, .stack-lead", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stack-section", start: "top 74%" },
      });

      gsap.to(".stack-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stack-card", start: "top 82%" },
      });

      gsap.utils.toArray(".stack-card").forEach((card) => {
        gsap.fromTo(
          card.querySelectorAll(".stack-part"),
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 84%" },
          },
        );
        gsap.fromTo(
          card.querySelector(".stack-num"),
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: card, start: "top 84%" },
          },
        );
      });

      // ---------- principles ----------
      revealLines(".principles-title", ".principles-section", "top 72%");

      gsap.to(".principles-label, .principles-lead", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".principles-section", start: "top 74%" },
      });

      gsap.utils.toArray(".principle-row").forEach((row) => {
        gsap
          .timeline({ scrollTrigger: { trigger: row, start: "top 86%" } })
          .fromTo(row.querySelector(".principle-line"), { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power3.inOut" })
          .fromTo(
            row.querySelector(".principle-num"),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            0.1,
          )
          .fromTo(
            row.querySelector(".principle-text"),
            { y: 34, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, ease: "power4.out" },
            0.15,
          );
      });

      // ---------- closing ----------
      gsap.to(".closing-label", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".closing-stage", start: "top 78%" },
      });

      const closingSplit = SplitText.create(".closing-title", { type: "words" });
      gsap.fromTo(
        closingSplit.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.14,
          ease: "none",
          scrollTrigger: { trigger: ".closing-stage", start: "top 78%", end: "top 22%", scrub: true },
        },
      );

      gsap.to(".closing-part", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".closing-side", start: "top 88%" },
      });

      // ---------- footer ----------
      const footerSplit = SplitText.create(".footer-name", { type: "words,chars", tag: "span" });
      gsap.set(footerSplit.words, { display: "inline-block", whiteSpace: "nowrap" });
      gsap.from(footerSplit.chars, {
        display: "inline-block",
        yPercent: 100,
        opacity: 0,
        rotateX: -80,
        transformPerspective: 800,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: "#site-footer", start: "top 92%" },
      });
    }, rootRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    cleanups.push(() => window.removeEventListener("load", refresh));

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
      countRestores.forEach((restore) => restore());
    };
  }, [rootRef]);
}

export default function App() {
  const rootRef = useRef(null);
  const [motionEnabled] = useState(() => !prefersReducedMotion());
  const [showIntro] = useState(() => {
    if (!motionEnabled) return false;
    try {
      return !sessionStorage.getItem("sk-intro");
    } catch {
      return true;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useSmoothScroll(motionEnabled);
  useGsapAnimations(rootRef);
  useMagnetic();
  useSpotlight();

  return (
    <MotionConfig reducedMotion="user">
      <div ref={rootRef} className="min-h-screen bg-bone font-display text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {showIntro && <Preloader />}
        <ScrollProgress />
        <Cursor />
        <div className="grain" aria-hidden="true" />
        <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} />
        <MobileMenu open={menuOpen} onClose={closeMenu} />
        <main id="main" tabIndex={-1}>
          <Hero />
          <Manifesto />
          <Skills />
          <Experience />
          <Work />
          <Services />
          <Stack />
          <Principles />
          <Closing />
        </main>
        <Footer />
        <AskAgent />
      </div>
    </MotionConfig>
  );
}
