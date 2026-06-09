import Container from "./Container";

const projects = [
  {
    title: "AI-Assisted Incident Analysis Pipeline — CVS Health",
    tag: "AI Systems + RAG",
    signals: ["45% MTTR reduction", "OpenAI + RAG", "Production scale"],
    bullets: [
      "Engineered AI-assisted incident analysis pipelines using OpenAI APIs, Python, and Retrieval-Augmented Generation (RAG) to automate production log investigation and intelligent root-cause detection.",
      "Decreased MTTR by 45% for cloud operations teams by replacing manual log triage with intelligent automated analysis.",
      "Integrated with AWS CloudWatch and distributed tracing tools to feed real-time signals into the RAG pipeline.",
    ],
    stack: ["Python", "OpenAI APIs", "RAG", "AWS CloudWatch", "LLMs", "Spring Boot"],
    repo: "#",
    live: "#",
  },
  {
    title: "Healthcare Microservices Platform — CVS Health",
    tag: "Microservices + Kafka",
    signals: ["38% latency reduction", "15K+ TPS", "99.97% uptime"],
    bullets: [
      "Architected scalable healthcare microservices using Java, Spring Boot, Kafka, and AWS EKS to modernize claims and patient workflow systems for 2M+ healthcare members.",
      "Implemented distributed event-driven architectures with Kafka and Redis to process high-volume healthcare transactions and real-time notifications at 15K+ TPS.",
      "Automated CI/CD and cloud-native deployments using Jenkins, AWS Lambda, and CloudFormation, reducing production deployment effort by 60%.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "AWS EKS", "Redis", "Docker", "Kubernetes", "Jenkins"],
    repo: "#",
    live: "#",
  },
  {
    title: "E-Commerce Microservices Platform — Lenskart",
    tag: "Full Stack + DevOps",
    signals: ["35% faster checkout", "25% load time reduction", "85% test coverage"],
    bullets: [
      "Designed and developed scalable e-commerce microservices using Java, Spring Boot, MySQL, and REST APIs, improving checkout performance by 35% for online customers.",
      "Built dynamic frontend modules using Angular, JavaScript, and GraphQL, reducing page load time by 25% and enhancing personalized shopping experiences.",
      "Integrated Kafka-based async event processing and Redis caching for real-time inventory synchronization, reducing stock mismatch incidents by 40%.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "GraphQL", "Kafka", "Redis", "Docker", "Kubernetes", "MySQL"],
  },
];

const PROJECT_TAGS = [
  "Microservices",
  "AI / RAG",
  "Kafka Pipelines",
  "Cloud & DevOps",
  "Full Stack",
];

function Pill({ children }) {
  return <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">{children}</span>;
}

function SignalBox({ value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm">
      <div className="text-[11px] font-extrabold tracking-[0.28em] text-slate-500">SIGNAL</div>
      <div className="mt-1 text-sm font-black text-slate-900">{value}</div>
    </div>
  );
}

function LinkBtn({ href, children, solid = false }) {
  const cls = solid
    ? "inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-extrabold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";
  return <a href={href || "#"} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
}

function ProjectCard({ p, i }) {
  return (
    <article
      className="project-stack-card relative rounded-[26px] border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.10)] overflow-hidden"
      style={{ "--stackY": `${i * 22}px` }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 project-glow" />
      <div className="relative p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-extrabold text-white">{p.tag}</span>
            <span className="text-xs font-bold text-slate-500">{p.period}</span>
          </div>
        </div>

        <h3 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">{p.title}</h3>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {p.signals.map((s) => (
            <SignalBox key={s} value={s} />
          ))}
        </div>

        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          {p.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500/80 shadow-[0_0_0_4px_rgba(99,102,241,0.18)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs tracking-[0.35em] font-extrabold text-slate-500">PROJECTS</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">Built with engineering discipline.</h2>
            <p className="mt-2 text-lg font-semibold text-slate-600">Real systems, cleaner architecture, measurable outcomes.</p>
            <p className="mt-6 text-slate-600 leading-relaxed">
              These projects reflect how I build software: performance-minded,
              production-aware, and focused on clear system design across
              healthcare, fintech, and e-commerce domains.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PROJECT_TAGS.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkBtn href="https://github.com/KIRAN-SUBRAMANI" solid>View GitHub</LinkBtn>
              <LinkBtn href="/Kiran Subramani.pdf">Download Resume</LinkBtn>
            </div>
          </div>

          <div className="project-stack-wrap">
            {projects.map((p, i) => (
              <div key={p.title} className="project-stack-item">
                <ProjectCard p={p} i={i} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}