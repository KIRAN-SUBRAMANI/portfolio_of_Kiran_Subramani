import Container from "./Container";

const projects = [
  {
    title: "Enterprise AI Copilot Platform — Wells Fargo",
    tag: "Generative AI + RAG",
    signals: ["Policy automation", "Contract analysis", "LangGraph agents"],
    bullets: [
      "Developed Generative AI solutions using OpenAI GPT, Anthropic Claude, LangChain, LangGraph, and CrewAI — building intelligent enterprise assistants that automate policy interpretation, contract analysis, and operational decision-making.",
      "Implemented RAG frameworks with Pinecone and Weaviate vector databases to enable intelligent document retrieval and context-aware AI responses across enterprise knowledge bases.",
      "Built machine learning pipelines using Python, PyTorch, and Scikit-learn to identify subscription churn risks, detect payment anomalies, and generate actionable business insights from LLM embeddings.",
    ],
    stack: ["OpenAI GPT", "Anthropic Claude", "LangChain", "LangGraph", "CrewAI", "RAG", "Pinecone", "Weaviate", "Python", "PyTorch"],
  },
  {
    title: "Device Subscription & Order Management Platform — Wells Fargo",
    tag: "Microservices + Event-Driven",
    signals: ["Global markets", "15K+ TPS", "99.97% uptime"],
    bullets: [
      "Architected enterprise-scale device subscription and order management platforms using Java 17, Spring Boot, Angular, REST APIs, Redis, and AWS, supporting commercial leasing and fulfillment operations across multiple global markets.",
      "Engineered event-driven architectures leveraging Solace Pub/Sub, MuleSoft integration, SAP S/4HANA FICA, and EZLease systems, enabling real-time orchestration of billing, payments, device upgrades, and financial reconciliations.",
      "Designed resilient cloud-native microservices using Spring Cloud, Eureka, Consul, Docker, Kubernetes, AWS CloudWatch, and X-Ray — sustaining thousands of concurrent API requests under high-volume workloads.",
    ],
    stack: ["Java 17", "Spring Boot", "Angular", "Solace Pub/Sub", "MuleSoft", "SAP S/4HANA", "Redis", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Enterprise Order-to-Cash Automation — Accenture",
    tag: "SAP Integration + Full Stack",
    signals: ["30% ↓ billing delays", "25% ↓ release cycle", "ETL dashboards"],
    bullets: [
      "Developed enterprise applications integrating SAP SD and billing systems with Java Spring Boot services to automate pricing and order-to-cash workflows for enterprise retail and manufacturing clients.",
      "Built RESTful APIs and middleware services using Java, Spring, and Node.js to connect SAP backends with modern web applications and partner platforms, enabling scalable business integrations.",
      "Implemented microservice components and asynchronous job processing using Kafka and Redis queues, reducing transaction processing delays by 30%, with CI/CD via Jenkins and GitLab cutting release cycles by 25%.",
    ],
    stack: ["Java", "Spring Boot", "SAP SD", "Node.js", "Angular", "Kafka", "Redis", "PostgreSQL", "Jenkins", "Docker", "Python"],
  },
];

const PROJECT_TAGS = [
  "Generative AI",
  "Microservices",
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
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-extrabold text-white">{p.tag}</span>
        </div>

        <h3 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">{p.title}</h3>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {p.signals.map((s) => <SignalBox key={s} value={s} />)}
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
          {p.stack.map((t) => <Pill key={t}>{t}</Pill>)}
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
            <p className="mt-2 text-lg font-semibold text-slate-600">Real systems, production-grade architecture, measurable outcomes.</p>
            <p className="mt-6 text-slate-600 leading-relaxed">
              These projects reflect how I build software: performance-minded,
              AI-augmented, and focused on clear system design across enterprise
              finance, e-commerce, and distributed platform domains.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PROJECT_TAGS.map((x) => <Pill key={x}>{x}</Pill>)}
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