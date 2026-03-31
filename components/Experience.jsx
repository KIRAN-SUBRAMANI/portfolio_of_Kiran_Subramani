import Container from "./Container";

const experiences = [
  {
    role: "Software Engineer",
    company: "Intuit • USA",
    period: "Jan 2026 – Present",
    tag: "AI + Systems Focus",
    signals: ["35% ↑ API throughput", "AI + RAG systems", "25% ↓ infra cost"],
    bullets: [
      "Built high-scale fintech microservices, improving API throughput by 35%.",
      "Shipped a RAG-powered system for financial query resolution, reducing manual work by 40%.",
      "Developed AI anomaly detection, improving data reliability and compliance.",
      "Designed real-time event pipelines with Kafka + AWS for low-latency processing.",
      "Reduced latency using Redis caching + async processing for faster user responses.",
      "Scaled infrastructure with Docker + Kubernetes, cutting costs by 25%.",
      "Automated delivery using CI/CD pipelines, reducing downtime and release friction.",
    ],
    stack: ["Java", "Spring Boot", "Python", "RAG", "LLMs", "Kafka", "AWS", "Redis", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "Zoho • India",
    period: "May 2021 – Dec 2023",
    tag: "Backend + Systems",
    signals: ["Backend systems at scale", "Event-driven architecture", "Secure SaaS platforms"],
    bullets: [
      "Built scalable backend services using Java, Spring Boot, and REST APIs, powering enterprise SaaS applications for global users",
      "Developed interactive Angular UI systems, improving user engagement and reducing latency through optimized rendering.",
      "Refactored legacy modules using C++ (multithreading), improving memory efficiency and reducing system crashes.",
      "Implemented secure authentication systems (JWT, OAuth2) for multi-tenant platforms, ensuring data privacy and compliance.",
      "Engineered real-time data pipelines using Apache Kafka, enabling faster event processing and system consistency.",
      "Optimized SQL queries and database schemas (MySQL, PostgreSQL), reducing query execution time by ~20%.",
      "Automated CI/CD pipelines using Jenkins and Docker, improving deployment speed and reliability.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "Apache Kafka", "Jenkins", "Docker", "MySQL", "PostgreSQL", "JWT", "OAuth2", "C++"]
  },
];

function Pill({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function SignalBox({ value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm">
      <div className="text-[11px] font-extrabold tracking-[0.28em] text-slate-500">
        SIGNAL
      </div>
      <div className="mt-1 text-sm font-black text-slate-900">{value}</div>
    </div>
  );
}

function ExperienceCard({ e, i }) {
  return (
    <article
      className="exp-stack-card relative rounded-[26px] border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.10)] overflow-hidden"
      style={{ "--stackY": `${i * 22}px` }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 exp-glow" />

      <div className="relative p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-extrabold text-white">
              {e.tag}
            </span>
            <span className="text-xs font-bold text-slate-500">{e.period}</span>
          </div>
        </div>

        <h3 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
          {e.role}
        </h3>
        <p className="mt-1 text-sm font-semibold text-slate-600">{e.company}</p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {e.signals.map((s) => (
            <SignalBox key={s} value={s} />
          ))}
        </div>

        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          {e.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500/80 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {e.stack.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          {/* LEFT (static) */}
          <div className="lg:sticky lg:top-24">
            <div className="text-xs tracking-[0.35em] font-extrabold text-slate-500">
              EXPERIENCE
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Results-driven engineering work.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Highlights emphasize measurable outcomes: performance, scale, security,
              delivery, and clean UI systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Performance", "Automation", "Security", "UI Systems", "Cloud"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>
          </div>

          {/* RIGHT (stacked sticky cards) */}
          <div className="exp-stack-wrap">
            {experiences.map((e, i) => (
              <div key={e.role + e.period} className="exp-stack-item">
                <ExperienceCard e={e} i={i} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}