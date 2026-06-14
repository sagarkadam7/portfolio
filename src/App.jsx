import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PROFILE = {
  email: "sagarkadam8081@gmail.com",
  phone: "+91 8010477969",
  linkedin: "https://www.linkedin.com/in/sagar-kadam-engineer7",
  github: "https://github.com/sagarkadam7",
  mockInterviewLive: "https://interviewai-web-h2ht.onrender.com",
  location: "Pune, India",
  graduation: "May 2026",
  heroImage: "/sagar-hero.png",
};

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    company: "SageAlpha Analytics",
    role: "Frontend Developer & AI Integration Intern",
    period: "Pune · Present",
    highlight: "Call IQ — Live on Azure",
    body: "Designed and implemented React UI flows for Call IQ, an AI-powered call intelligence platform. Integrated agentic AI workflows for multi-step automation, real-time transcription insights, and automated follow-up support. Deployed frontend builds on Microsoft Azure Static Web Apps.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=90",
    icon: Zap,
    stack: ["React", "Tailwind", "Agentic AI", "Azure"],
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
    kicker: "01 / Agentic AI in Production",
    title: "Building multi-step AI workflows for applied product use cases.",
    body: "Clear UX, reliable data flow, and maintainable frontend integration.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=90",
  },
  {
    kicker: "02 / Full-Stack SaaS Development",
    title: "Building secure, responsive web platforms from the ground up.",
    body: "Owning the entire stack—from database schema to final UI/UX.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90",
  },
  {
    kicker: "03 / GenAI Orchestration",
    title: "Designing automated, human-in-the-loop pipelines.",
    body: "Systems thinking that goes far beyond single-prompt engineering.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90",
  },
];

const projects = [
  {
    index: "01",
    title: "CallIQ: AI Call Intelligence",
    type: "Internship · SageAlpha",
    stack: "React · Agentic AI · Azure",
    impact:
      "Developed React UI flows and agentic workflow integrations for a call intelligence platform. Supports transcription analysis, follow-up automation, and Azure-hosted frontend deployment.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=90",
    href: "#experience",
  },
  {
    index: "02",
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
    index: "03",
    title: "Automated Media Pipeline",
    type: "GenAI · Orchestration",
    stack: "TTS · Avatars · YouTube API",
    impact:
      "Script-to-publish workflow integrating TTS, AI avatars, human-in-the-loop approval gates, and automated YouTube delivery via OAuth 2.0.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1500&q=90",
    repo: PROFILE.github,
  },
  {
    index: "04",
    title: "React Commerce",
    type: "Live · E-commerce",
    stack: "React · Vercel",
    impact: "Built a responsive storefront with product discovery, stateful UI, and a conversion-focused layout to show React delivery beyond AI projects.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1500&q=90",
    repo: "https://github.com/sagarkadam7/React-commerce",
    live: "https://react-commerce-rose.vercel.app",
  },
  {
    index: "05",
    title: "Projects List",
    type: "Live · Dev portfolio hub",
    stack: "React · Vercel",
    impact: "A scannable index of public repositories and live demos for faster review of deployed React work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=90",
    repo: "https://github.com/sagarkadam7/projects-list",
    live: "https://projectslist-nine.vercel.app",
  },
  {
    index: "06",
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
  { value: "8.80", label: "BE CGPA", sub: "Computer Engineering" },
  { value: "4", label: "Internships", sub: "AI · React · Java · OSS" },
  { value: "Live", label: "Production", sub: "Call IQ + Mock Interview" },
  { value: "GSSoC", label: "Open Source", sub: "Contributor '25" },
  { value: "2026", label: "Graduated", sub: "Pune · Remote OK" },
];

const stackPillars = [
  {
    logo: "agentic",
    title: "Agentic Workflows",
    body: "Engineered multi-step AI automation, real-time transcription analysis, and predictive follow-up logic for CallIQ.",
    tools: ["Agent workflows", "Call IQ", "Azure"],
  },
  {
    logo: "mern",
    title: "Full-Stack SaaS",
    body: "Built low-latency, context-aware platforms using the MERN stack, Gemini Pro, and secure JWT authentication.",
    tools: ["MERN", "Gemini Pro", "JWT"],
  },
  {
    logo: "backend",
    title: "Java Backend Systems",
    body: "Java internship experience with Core Java, J2EE, MySQL, OOP, debugging, and backend workflow fundamentals.",
    tools: ["Java", "J2EE", "MySQL"],
  },
  {
    logo: "rag",
    title: "GenAI Orchestration",
    body: "Architected asynchronous media pipelines utilizing TTS, avatar synthesis, RAG methodologies, and Azure cloud infrastructure.",
    tools: ["TTS", "RAG", "Azure"],
  },
];

const skillGroups = [
  {
    logo: "frontend",
    label: "Frontend",
    title: "Interfaces that feel fast",
    focus: "Primary strength",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
    skills: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "GSAP", "Responsive UI"],
  },
  {
    logo: "mern",
    label: "MERN Stack",
    title: "Full-stack SaaS delivery",
    focus: "Production builds",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT Auth", "REST APIs"],
  },
  {
    logo: "agentic",
    label: "Agentic AI",
    title: "Multi-step AI workflows",
    focus: "CallIQ experience",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1200&q=85",
    skills: ["Agent workflows", "LLM orchestration", "Transcription analysis", "Follow-up logic", "Gemini API"],
  },
  {
    logo: "rag",
    label: "RAG + GenAI",
    title: "Context-aware AI systems",
    focus: "AI pipelines",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    skills: ["RAG", "Embeddings", "Prompt design", "TTS", "AI avatars", "Human review loops"],
  },
  {
    logo: "backend",
    label: "Backend",
    title: "APIs, data, and auth",
    focus: "Reliable foundations",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85",
    skills: ["PHP", "Laravel", "Java", "J2EE", "MySQL", "Database design"],
  },
  {
    logo: "cloud",
    label: "Cloud + Tools",
    title: "Deployable engineering",
    focus: "Shipping workflow",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=85",
    skills: ["Azure", "Render", "Vercel", "GitHub", "OAuth 2.0", "Open Source"],
  },
];

const skillHighlights = ["Frontend", "MERN", "Agentic AI", "RAG", "PHP", "Laravel", "Java", "Azure", "Gemini", "GSAP"];

const principles = [
  "Lead with the problem solved—then the stack. Hiring managers scan outcomes first.",
  "Every project should have a live demo, repo, or both. Proof beats promises.",
  "AI features need trust UX: sources, limits, and clear failure states.",
  "Own the full path: design, API, data model, deploy—so nothing falls between roles.",
];

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });
  const [active, setActive] = useState(false);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY, visible: true });
    const enter = () => setActive(true);
    const leave = () => setActive(false);
    const showLight = () => setOnLight(true);
    const hideLight = () => setOnLight(false);

    window.addEventListener("pointermove", move);
    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });

    const lightSections = document.querySelectorAll(".about-section, .service-section, .principles-section, .closing-stage");
    lightSections.forEach((section) => {
      section.addEventListener("pointerenter", showLight);
      section.addEventListener("pointerleave", hideLight);
    });

    return () => {
      window.removeEventListener("pointermove", move);
      document.querySelectorAll("a, button").forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
      lightSections.forEach((section) => {
        section.removeEventListener("pointerenter", showLight);
        section.removeEventListener("pointerleave", hideLight);
      });
    };
  }, []);

  return (
    <motion.div
      className={`pointer-events-none fixed z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 md:block ${
        onLight ? "border-ink/20 mix-blend-normal" : "border-white/80 mix-blend-difference"
      } ${position.visible && !onLight ? "opacity-100" : "opacity-0"} ${active ? "h-16 w-16" : "h-5 w-5"}`}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  );
}

function Header() {
  return (
    <header className="pointer-events-none fixed left-0 top-0 z-40 flex w-full items-start justify-between px-5 py-5 text-white mix-blend-difference md:px-10">
      <a className="pointer-events-auto grid text-lg font-black uppercase leading-[0.82]" href="#top" aria-label="Home">
        <span>Sagar</span>
        <span>Kadam</span>
      </a>
      <nav className="pointer-events-auto hidden gap-9 text-sm font-black uppercase md:flex" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="pointer-events-auto rounded-full border border-white/35 px-3 py-2 text-[10px] font-black uppercase md:hidden" href="#contact">
        Contact
      </a>
    </header>
  );
}

const heroChips = ["Agentic AI", "Gemini API", "React", "Azure", "MERN", "Java"];

function Hero() {
  return (
    <section id="top" className="hero-stage relative min-h-[100svh] overflow-hidden bg-[#080807] text-bone">
      <div className="hero-media absolute inset-0 opacity-70">
        <img
          className="hero-bg h-full w-full scale-110 object-cover"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90"
          alt="Premium architectural interior"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,0.96)_0%,rgba(8,8,7,0.56)_48%,rgba(8,8,7,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,7,0.9)_0%,rgba(8,8,7,0.26)_48%,rgba(8,8,7,0.5)_100%)]" />
      </div>

      <div className="hero-content relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1500px] grid-rows-[auto_1fr_auto] px-4 pb-5 pt-24 md:px-10 md:pb-7 md:pt-28">
        <motion.div className="hero-top flex flex-wrap items-center justify-end gap-4">
          <span className="hero-meta text-[11px] font-black uppercase text-bone/55 md:text-xs">
            {PROFILE.location} · Remote-friendly
          </span>
        </motion.div>

        <div className="hero-main grid items-end gap-8 py-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.68fr)] lg:items-center lg:gap-12 lg:py-10 xl:gap-16">
          <div className="min-w-0">
            <p className="hero-kicker mb-5 text-xs font-black uppercase tracking-[0.24em] text-bone/58 md:text-sm">
              Sagar Kadam
            </p>
            <h1 className="hero-title hero-title--cinematic text-[clamp(62px,12.7vw,184px)] font-black uppercase leading-[0.78] tracking-[-0.065em]">
              <span className="hero-line hero-line--ghost block">AI Full</span>
              <span className="hero-line hero-line--ghost block">Stack</span>
              <span className="hero-line hero-line--signal block">Engineer</span>
            </h1>
            <p className="hero-tagline mt-6 max-w-md text-sm font-bold leading-relaxed text-bone/55 md:text-base lg:hidden">
              AI integration at SageAlpha · Mock Interview SaaS on Render · Java backend experience.
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
              I build <span className="font-black text-bone">agentic AI</span> and full-stack products with practical implementation examples:
              <span className="text-signal"> Call IQ</span> on Azure, Mock Interview AI on Render, and MERN + Java backend work.
            </p>
            <p className="hero-panel-sub mt-5 text-xs font-black uppercase leading-relaxed tracking-[0.12em] text-bone/45">
              AI Engineer · Frontend + AI Integration · Full Stack
            </p>
            <div className="hero-cta mt-8 flex flex-wrap gap-3">
              <motion.a
                className="hero-cta-primary inline-flex items-center gap-2 rounded-full border border-signal/60 bg-signal px-6 py-3.5 text-sm font-black uppercase text-ink"
                href="#work"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View work <ArrowUpRight size={17} strokeWidth={3} />
              </motion.a>
              <motion.a
                className="hero-cta-secondary inline-flex items-center gap-2 rounded-full border border-signal/35 bg-white/[0.04] px-5 py-3.5 text-sm font-black uppercase text-bone"
                href={PROFILE.mockInterviewLive}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, borderColor: "rgba(200, 220, 84, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Live demo <ExternalLink size={15} strokeWidth={3} />
              </motion.a>
              <motion.a
                className="hero-cta-secondary inline-flex items-center gap-2 rounded-full border border-signal/25 px-5 py-3.5 text-sm font-black uppercase text-bone"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn <Linkedin size={16} strokeWidth={3} />
              </motion.a>
            </div>
            <div className="hero-proof mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["8.80", "CGPA", "BE CSE"],
                ["Live", "Products", "Call IQ · SaaS"],
                ["2026", "Grad", "Pune · Remote"],
              ].map(([value, label, sub]) => (
                <div key={label} className="hero-proof-item">
                  <p className="text-[clamp(28px,4vw,44px)] font-black leading-none text-bone">{value}</p>
                  <p className="mt-2 text-[10px] font-black uppercase text-bone/80">{label}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase text-bone/40">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom grid items-end gap-4">
          <div className="hero-marquee overflow-hidden border-y border-white/12 py-3 md:py-4">
            <div className="marquee-track flex w-max shrink-0 gap-8 text-[clamp(28px,5vw,72px)] font-black uppercase leading-none text-bone/85">
              <span>Call IQ</span><span>Gemini</span><span>Agentic AI</span><span>MERN</span><span>Azure</span><span>React</span><span>Java</span><span>GSSoC</span>
              <span>Call IQ</span><span>Gemini</span><span>Agentic AI</span><span>MERN</span><span>Azure</span><span>React</span><span>Java</span><span>GSSoC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="about" className="about-section manifesto relative overflow-hidden bg-bone px-4 py-24 text-ink md:px-10 md:py-36">
      <div className="about-intro mx-auto max-w-[1500px]">
        <div className="about-intro-head flex flex-wrap items-center justify-between gap-4 border-b border-ink/12 pb-6">
          <p className="about-label text-sm font-black uppercase text-muted">About</p>
        </div>

        <div className="about-main mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-20">
          <div className="about-copy min-w-0">
            <h2 className="about-headline max-w-3xl text-[clamp(32px,5.2vw,72px)] font-black leading-[1.06] tracking-tight xl:max-w-2xl">
              <span className="about-line block">Computer engineer</span>
              <span className="about-line block">
                shipping <span className="text-signal">AI in production</span>
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
                <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-black uppercase text-bone">AI Engineer</span>
                <span className="rounded-full bg-signal px-3 py-1.5 text-[10px] font-black uppercase text-ink">CGPA 8.80</span>
              </div>
            </figure>

            <p className="about-lead mt-8 max-w-2xl text-[15px] font-bold leading-relaxed text-muted sm:text-base md:mt-10 md:text-lg md:leading-relaxed lg:max-w-none">
              I&apos;m Sagar Kadam — based in {PROFILE.location}, graduated {PROFILE.graduation}. I build agentic AI at SageAlpha on{" "}
              <span className="text-ink">Call IQ</span>, ship a Gemini-powered interview SaaS on Render, and have enterprise Java internship experience.
            </p>
            <p className="about-sub mt-6 max-w-2xl border-t border-ink/10 pt-5 text-[11px] font-black uppercase leading-relaxed tracking-wide text-ink/45 md:text-xs lg:max-w-none">
              Targeting AI Engineer · Frontend + AI Integration · Full Stack
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
              <span className="w-fit rounded-full bg-ink px-4 py-2 text-[10px] font-black uppercase text-bone">AI Engineer</span>
              <span className="w-fit rounded-full bg-signal px-4 py-2 text-[10px] font-black uppercase text-ink">{PROFILE.location}</span>
            </div>
          </figure>
        </div>
      </div>

      <div className="about-education mx-auto mt-20 grid max-w-[1500px] gap-4 md:grid-cols-2">
        {education.map((item) => (
          <motion.article
            key={item.school}
            className="about-edu-card group relative overflow-hidden border border-ink/12 bg-paper p-6 transition-colors duration-300 hover:border-signal/40 md:p-8"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-signal/10 transition-transform duration-500 group-hover:scale-150" />
            <p className="text-xs font-black uppercase text-muted">{item.period}</p>
            <h3 className="about-edu-title mt-3 text-xl font-black leading-tight md:text-2xl">{item.degree}</h3>
            <p className="mt-2 text-sm font-bold text-muted">{item.school}</p>
            <p className="mt-4 text-sm font-black uppercase text-signal">{item.detail}</p>
          </motion.article>
        ))}
      </div>

      <div className="about-metrics mx-auto mt-4 grid max-w-[1500px] gap-px overflow-hidden border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            className="metric-card group bg-bone p-6 transition-colors duration-300 hover:bg-paper md:p-7"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <p className="text-[clamp(36px,4.5vw,64px)] font-black leading-none transition-colors duration-300 group-hover:text-signal">
              {metric.value}
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
        <div className="mb-12 grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[0.36fr_1fr] lg:items-end">
          <div>
            <p className="skills-label text-sm font-black uppercase text-bone/55">Skills</p>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-signal">AI · Web · Cloud · Backend</p>
          </div>
          <div>
            <h2 className="skills-title max-w-6xl text-[clamp(42px,7vw,126px)] font-black uppercase leading-[0.84]">
              A practical stack for shipping AI products.
            </h2>
            <p className="mt-7 max-w-3xl text-lg font-bold leading-relaxed text-bone/62 md:text-2xl">
              Frontend polish, MERN delivery, agentic AI workflows, RAG foundations, PHP Laravel, Java backends, and cloud deployment.
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
              className="skill-card group relative min-h-[360px] overflow-hidden border border-white/14 bg-white/[0.035] p-6 backdrop-blur transition-colors duration-300 hover:border-signal/40 hover:bg-white/[0.06] md:p-7"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
            >
              <img className="skill-card-bg absolute inset-0 h-full w-full object-cover" src={image} alt="" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,8,7,0.96)_0%,rgba(8,8,7,0.88)_44%,rgba(8,8,7,0.66)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(200,220,84,0.18),transparent_34%)]" />
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-signal/10 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="skill-logo">
                  <SkillLogo type={logo} />
                </div>
                <span className="text-[clamp(42px,5vw,74px)] font-black leading-none text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-10">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-signal">{label}</p>
                <h3 className="mt-3 text-[clamp(28px,3.4vw,48px)] font-black leading-[0.92]">{title}</h3>
                <p className="mt-4 text-sm font-black uppercase text-bone/45">{focus}</p>
              </div>

              <div className="relative mt-8 flex flex-wrap gap-2">
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
  const active = experience[activeIndex];

  return (
    <section id="experience" className="experience-section relative overflow-hidden bg-[#080807] px-4 py-24 text-bone md:px-10 md:py-36">
      <div
        className="experience-timeline pointer-events-none absolute bottom-0 left-[1.35rem] top-32 hidden w-px origin-top bg-gradient-to-b from-signal via-white/25 to-transparent md:left-[2.6rem] md:block"
        aria-hidden="true"
      />
      <div className="relative mb-16 grid gap-10 lg:grid-cols-[0.38fr_1fr] lg:items-end">
        <div>
          <p className="experience-label text-sm font-black uppercase text-bone/55">Experience</p>
          <p className="mt-6 text-sm font-black uppercase text-signal">AI Integration · React · Java · Open Source</p>
        </div>
        <h2 className="experience-title max-w-5xl text-[clamp(40px,7vw,128px)] font-black uppercase leading-[0.84]">
          AI Integration, React Delivery, Java Systems, and Open Source.
        </h2>
      </div>
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,34vw)]">
        <div className="experience-list grid gap-4">
          {experience.map((role, index) => {
            const Icon = role.icon;
            const isActive = index === activeIndex;
            return (
              <motion.article
                key={role.company}
                className={`experience-row group relative cursor-pointer overflow-hidden border backdrop-blur-sm transition-colors duration-500 ${
                  isActive
                    ? "border-signal/50 bg-white/[0.07]"
                    : "border-white/12 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                layout
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <img
                  className={`experience-bg absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    isActive ? "scale-105 opacity-35" : "scale-110 opacity-0 group-hover:opacity-20"
                  }`}
                  src={role.image}
                  alt=""
                />
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/92 to-[#080807]/55" aria-hidden="true" />

                <div className="experience-part relative grid gap-6 p-6 md:grid-cols-[72px_1fr] md:p-8">
                  <div className="flex items-start justify-between md:flex-col md:justify-start md:gap-4">
                    <span
                      className={`experience-index text-[clamp(40px,5vw,72px)] font-black leading-none transition-colors duration-300 ${
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
                      <h3 className="text-[clamp(26px,3.8vw,52px)] font-black leading-[0.92]">{role.company}</h3>
                      <span className="text-xs font-black uppercase text-bone/50">{role.period}</span>
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

        <motion.aside
          className="experience-preview relative hidden min-h-[420px] overflow-hidden border border-white/15 lg:block"
          key={active.company}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <img className="experience-preview-img h-full w-full object-cover" src={active.image} alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-between p-7">
            <p className="text-xs font-black uppercase text-signal">{active.highlight}</p>
            <div>
              <p className="text-sm font-black uppercase text-bone/60">{active.period}</p>
              <h3 className="mt-2 text-4xl font-black leading-none">{active.company}</h3>
              <p className="mt-3 text-lg font-bold leading-tight text-bone/75">{active.role}</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="stack-section bg-[#080807] px-4 py-24 text-bone md:px-10 md:py-36">
      <div className="mb-16 grid gap-8 md:grid-cols-[0.45fr_1fr]">
        <p className="text-sm font-black uppercase text-bone/55">What I bring</p>
        <div>
          <h2 className="stack-title max-w-6xl text-[clamp(44px,7vw,128px)] font-black uppercase leading-[0.84]">
            Bridging the gap between complex AI workflows and robust, user-centric applications.
          </h2>
          <p className="mt-8 max-w-3xl text-xl font-bold leading-tight text-bone/65 md:text-2xl">
            Agentic workflows on CallIQ, full-stack SaaS with Gemini Pro, GenAI media pipelines, Azure deployment, and Java backend fundamentals.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stackPillars.map(({ logo, title, body, tools }) => (
          <article key={title} className="stack-card min-h-[360px] border border-white/15 bg-white/[0.035] p-6 backdrop-blur">
            <div className="stack-logo mb-8">
              <SkillLogo type={logo} />
            </div>
            <h3 className="text-3xl font-black leading-none">{title}</h3>
            <p className="mt-5 text-base font-bold leading-tight text-bone/62">{body}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-white/15 px-3 py-1 text-xs font-black uppercase text-bone/70">
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
      <div className="mb-16 flex items-end justify-between gap-8">
        <h2 className="text-[clamp(44px,8vw,140px)] font-black uppercase leading-[0.82]">Capabilities</h2>
        <p className="hidden max-w-sm text-lg font-bold leading-tight text-muted md:block">
          How I build agentic AI features, full-stack SaaS, and GenAI orchestration with practical deployment workflows.
        </p>
      </div>
      <div className="grid gap-5">
        {services.map((service) => (
          <article key={service.title} className="service-card group grid min-h-[72vh] overflow-hidden border border-ink/15 bg-bone md:grid-cols-[0.9fr_1.1fr]">
            <div className="grid content-between p-6 md:p-10">
              <div>
                <p className="mb-6 text-sm font-black uppercase text-muted">{service.kicker}</p>
              <h3 className="max-w-3xl text-[clamp(36px,6vw,104px)] font-black leading-[0.9]">{service.title}</h3>
              </div>
              <p className="mt-10 max-w-xl text-xl font-bold leading-tight text-muted md:text-2xl">{service.body}</p>
            </div>
            <div className="service-image-wrap min-h-[360px] overflow-hidden">
              <img className="service-image h-full w-full scale-110 object-cover" src={service.image} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work-section overflow-hidden bg-ink text-bone">
      <div className="work-pin flex min-h-screen flex-col justify-center px-4 py-20 md:px-10 md:py-24">
        <div className="mb-8 grid gap-6 md:mb-10 md:grid-cols-[280px_minmax(0,1fr)] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-bone/60">Featured Work</p>
            <p className="mt-4 hidden max-w-[220px] text-sm font-bold leading-tight text-bone/45 md:block">
              Live products, verifiable code, and real-world impact.
            </p>
          </div>
          <h2 className="work-headline max-w-5xl text-[clamp(38px,6.2vw,104px)] font-black leading-[0.88]">
            Live products, verifiable code, and real-world impact.
          </h2>
        </div>
        <div className="work-track flex gap-5 pb-2 will-change-transform">
          {projects.map((project) => {
            const projectHref = project.href || project.live || project.repo;
            const isExternal = projectHref.startsWith("http");
            return (
            <a
              key={project.title}
              className="project-card group relative grid h-[clamp(420px,52vh,620px)] w-[84vw] shrink-0 content-end overflow-hidden rounded-[2px] p-5 sm:w-[72vw] md:w-[42vw] md:p-7 xl:w-[36vw]"
              href={projectHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              aria-label={`View project ${project.title}`}
            >
              <img className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" src={project.image} alt="" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
              <div className="mb-5 flex items-center justify-between border-b border-white/30 pb-4 text-sm font-black uppercase">
                <span>{project.index}</span>
                <span>{project.type}</span>
              </div>
              <h3 className="text-[clamp(34px,4.6vw,78px)] font-black leading-[0.88]">{project.title}</h3>
              <p className="mt-4 max-w-xl text-base font-bold leading-tight text-white/80 md:text-lg">{project.impact}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-black uppercase text-white/75">
                <span className="flex items-center gap-2">{project.stack} <ArrowUpRight size={16} strokeWidth={3} /></span>
                {project.live && <span className="rounded-full border border-white/30 px-3 py-1">Live</span>}
              </div>
            </a>
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
      <div className="grid gap-10 md:grid-cols-[0.7fr_1fr]">
        <h2 className="principles-title text-[clamp(42px,7vw,122px)] font-black uppercase leading-[0.84]">
          How I work on a team.
        </h2>
        <div className="grid gap-0 border-t border-ink/20">
          {principles.map((principle, index) => (
            <div key={principle} className="principle-row grid gap-4 border-b border-ink/20 py-7 md:grid-cols-[120px_1fr]">
              <span className="text-sm font-black uppercase text-muted">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-[clamp(24px,3vw,48px)] font-black leading-none">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-stage relative overflow-hidden bg-bone px-4 py-24 text-ink md:px-10 md:py-36">
      <div className="absolute right-0 top-0 h-full w-px bg-ink/15 md:right-[18vw]" />
      <div className="absolute right-[10vw] top-0 h-full w-px bg-ink/10" />
      <div className="relative grid gap-12 md:grid-cols-[1fr_0.8fr]">
        <h2 className="closing-title max-w-5xl text-[clamp(48px,9vw,160px)] font-black uppercase leading-[0.82]">
          Let&apos;s build something impactful.
        </h2>
        <div className="grid content-end gap-8">
          <p className="text-[clamp(20px,2.5vw,40px)] font-black leading-tight">
            Open to Full-Stack and AI Engineering roles.
          </p>
          <p className="max-w-2xl text-lg font-bold leading-relaxed text-muted md:text-xl">
            B.E. Computer Engineering (8.80 CGPA) | Pune, India | Graduated May 2026.
            <br />
            Available for remote and on-site opportunities.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-black uppercase text-bone" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              Message on LinkedIn <Linkedin size={18} strokeWidth={3} />
            </a>
            <a className="inline-flex w-fit items-center gap-3 rounded-full border border-ink/25 px-6 py-4 text-sm font-black uppercase text-ink" href={`mailto:${PROFILE.email}`}>
              Email me <Mail size={18} strokeWidth={3} />
            </a>
            <a className="inline-flex w-fit items-center gap-3 rounded-full border border-ink/25 px-6 py-4 text-sm font-black uppercase text-ink" href={PROFILE.mockInterviewLive} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={18} strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#080807] px-4 py-10 text-bone md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8">
        <div>
          <a className="text-[clamp(34px,7vw,116px)] font-black leading-none" href={`mailto:${PROFILE.email}`}>
            Sagar Kadam
          </a>
          <p className="mt-3 max-w-lg text-sm font-bold leading-relaxed text-bone/55">
            B.E. Computer Engineering (8.80 CGPA) | Pune, India | Graduated May 2026. Available for remote and on-site
            opportunities.
          </p>
          <p className="mt-2 text-xs font-bold uppercase text-bone/40">
            {PROFILE.email} · {PROFILE.phone}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-black uppercase">
          {[
            ["LinkedIn", PROFILE.linkedin],
            ["GitHub", PROFILE.github],
            ["Mock Interview", PROFILE.mockInterviewLive],
          ].map(([label, href]) => (
            <a key={label} className="inline-flex items-center gap-1" href={href} target="_blank" rel="noreferrer">
              {label} <ExternalLink size={14} strokeWidth={3} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function useGsapAnimations(rootRef) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.set(".hero-kicker, .hero-top, .hero-panel, .hero-proof, .hero-bottom", { y: 40, opacity: 0 });
      gsap.set(".hero-line", { y: 80, opacity: 0 });
      gsap.set(".hero-chip, .hero-tagline, .hero-panel-lead, .hero-panel-sub", { y: 24, opacity: 0 });
      gsap.set(".hero-cta a", { y: 20, opacity: 0 });
      gsap.set(".service-card, .metric-card, .stack-card, .skill-card, .principle-row", { y: 90, opacity: 0 });
      gsap.set(".skills-label, .skills-title, .skills-marquee", { y: 44, opacity: 0 });
      gsap.set(".about-line", { y: 50, opacity: 0 });
      gsap.set(".about-lead, .about-sub, .about-badge, .about-label", { y: 28, opacity: 0 });
      gsap.set(".about-edu-card", { y: 40, opacity: 0 });
      gsap.set(".about-portrait", { y: 50, opacity: 0, scale: 0.96 });
      gsap.set(".experience-row", { x: -80, opacity: 0 });
      gsap.set(".experience-label, .experience-title", { y: 60, opacity: 0 });
      gsap.set(".experience-timeline", { scaleY: 0 });
      gsap.set(".experience-preview", { x: 40, opacity: 0 });
      gsap.set(".project-card", { y: 120, rotate: 2, opacity: 0 });

      gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(".hero-top", { y: 0, opacity: 1, duration: 0.7 })
        .to(".hero-kicker", { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
        .to(".hero-line", { y: 0, opacity: 1, duration: 1, stagger: 0.14 }, "-=0.5")
        .to(".hero-chip", { y: 0, opacity: 1, duration: 0.6, stagger: 0.05 }, "-=0.5")
        .to(".hero-tagline", { y: 0, opacity: 1, duration: 0.7 }, "-=0.45")
        .to(".hero-panel", { y: 0, opacity: 1, duration: 0.85 }, "-=0.7")
        .to(".hero-panel-lead", { y: 0, opacity: 1, duration: 0.75 }, "-=0.65")
        .to(".hero-panel-sub", { y: 0, opacity: 1, duration: 0.6 }, "-=0.55")
        .to(".hero-cta a", { y: 0, opacity: 1, duration: 0.65, stagger: 0.08 }, "-=0.5")
        .to(".hero-proof", { y: 0, opacity: 1, duration: 0.75 }, "-=0.45")
        .to(".hero-bottom", { y: 0, opacity: 1, duration: 0.7 }, "-=0.55");

      gsap.to(".hero-glow--signal", {
        x: 30,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow--ember", {
        x: -24,
        y: 16,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: 20,
      });

      gsap.to(".hero-bg", {
        yPercent: -6,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-stage",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".about-label, .about-badge", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 78%",
        },
      });

      gsap.to(".about-line", {
        y: 0,
        opacity: 1,
        duration: 0.95,
        stagger: 0.14,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-headline",
          start: "top 80%",
        },
      });

      gsap.to(".about-portrait", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-portrait",
          start: "top 85%",
        },
      });

      gsap.to(".about-lead", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-lead",
          start: "top 88%",
        },
      });

      gsap.to(".about-sub", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-sub",
          start: "top 90%",
        },
      });

      gsap.to(".about-edu-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-education",
          start: "top 82%",
        },
      });

      gsap.to(".about-metrics .metric-card", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-metrics",
          start: "top 85%",
        },
      });

      gsap.to(".skills-label, .skills-title, .skills-marquee", {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 75%",
        },
      });

      gsap.to(".skill-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-card",
          start: "top 84%",
        },
      });

      gsap.fromTo(".stack-title", { clipPath: "inset(0 100% 0 0)", x: -40 }, {
        clipPath: "inset(0 0% 0 0)",
        x: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".stack-section",
          start: "top 70%",
        },
      });

      gsap.to(".stack-card", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stack-card",
          start: "top 82%",
        },
      });

      gsap.utils.toArray(".service-card").forEach((card) => {
        const image = card.querySelector(".service-image");
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
          },
        });
        gsap.to(image, {
          yPercent: -12,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      const track = document.querySelector(".work-track");
      if (track) {
        const isMobileWork = window.matchMedia("(max-width: 1023px)").matches;
        gsap.to(".project-card", {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".work-section",
            start: "top 70%",
          },
        });
        if (!isMobileWork) {
          const distance = () => -Math.max(0, track.scrollWidth - window.innerWidth + 40);
          gsap.to(track, {
            x: distance,
            ease: "none",
            scrollTrigger: {
              trigger: ".work-pin",
              start: "top top",
              end: () => `+=${Math.max(track.scrollWidth, window.innerWidth * 2)}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }

      gsap.to(".experience-label", {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 75%",
        },
      });

      gsap.fromTo(
        ".experience-title",
        { clipPath: "inset(0 100% 0 0)", x: -40 },
        {
          clipPath: "inset(0 0% 0 0)",
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience-section",
            start: "top 70%",
          },
        },
      );

      gsap.to(".experience-timeline", {
        scaleY: 1,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      gsap.to(".experience-preview", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".experience-preview",
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".experience-row").forEach((row) => {
        const parts = row.querySelectorAll(".experience-part, .experience-index");
        gsap.to(row, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
        gsap.fromTo(
          parts,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          },
        );
        const bg = row.querySelector(".experience-bg");
        if (bg) {
          gsap.to(bg, {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      gsap.to(".principle-row", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".principles-section",
          start: "top 72%",
        },
      });

      gsap.fromTo(".closing-title", { xPercent: -8, opacity: 0.35 }, {
        xPercent: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".closing-stage",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });

      gsap.to(".closing-stage > div:first-child", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".closing-stage",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, rootRef);

    return () => context.revert();
  }, [rootRef]);
}

export default function App() {
  const rootRef = useRef(null);
  useGsapAnimations(rootRef);

  return (
    <div ref={rootRef} className="min-h-screen bg-bone font-display text-ink">
      <Cursor />
      <Header />
      <main>
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
    </div>
  );
}
