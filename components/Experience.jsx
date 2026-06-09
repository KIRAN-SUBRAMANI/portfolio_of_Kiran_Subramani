import Container from "./Container";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "CVS Health • USA",
    period: "Jan 2026 – Present",
    tag: "Healthcare & AI",
    signals: ["38% ↓ API latency", "45% ↓ MTTR", "15K+ TPS @ 99.97% uptime"],
    bullets: [
      "Architected scalable healthcare microservices using Java, Spring Boot, Kafka, and AWS EKS, modernizing claims and patient workflow systems for 2M+ healthcare members.",
      "Engineered AI-assisted incident analysis pipelines using OpenAI APIs and RAG-based intelligent root-cause detection, decreasing MTTR by 45% for cloud operations teams.",
      "Developed responsive provider and member-facing applications using React.js, TypeScript, GraphQL, and Node.js, increasing user engagement scores by 28%.",
      "Implemented distributed event-driven architectures with Kafka and Redis processing 15K+ TPS with 99.97% application uptime.",
      "Automated CI/CD and cloud-native deployments using Jenkins, AWS Lambda, and CloudFormation, reducing production deployment effort by 60%.",
    ],
    stack: ["Java", "Spring Boot", "React.js", "TypeScript", "Kafka", "AWS EKS", "Docker", "Kubernetes", "GraphQL", "OpenAI APIs", "RAG"],
  },
  {
    role: "Full Stack Software Developer",
    company: "Lenskart • India",
    period: "Jun 2022 – Dec 2023",
    tag: "E-Commerce & DevOps",
    signals: ["35% ↑ checkout speed", "25% ↓ page load time", "40% ↓ stock mismatch"],
    bullets: [
      "Designed and developed scalable e-commerce microservices using Java, Spring Boot, MySQL, and REST APIs, improving checkout performance by 35% for online customers.",
      "Built dynamic frontend modules using Angular, JavaScript, and GraphQL, reducing page load time by 25% and enhancing personalized shopping experiences.",
      "Integrated Kafka-based async event processing and Redis caching for real-time inventory synchronization, reducing stock mismatch incidents by 40%.",
      "Containerized and deployed cloud-native applications using Docker, Kubernetes, Jenkins, and AWS EC2, reducing infrastructure provisioning time from hours to minutes.",
      "Achieved 85% test coverage and reduced production defects by 30% through Agile QA practices with JUnit, Mockito, and Selenium.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "JavaScript", "GraphQL", "Kafka", "Redis", "Docker", "Kubernetes", "AWS EC2", "MySQL"],
  },
  {
    role: "Software Developer",
    company: "BharatPe • Remote, India",
    period: "May 2021 – May 2022",
    tag: "Fintech & Payments",
    signals: ["22% ↓ transaction latency", "40% ↓ unauthorized access", "85% test coverage"],
    bullets: [
      "Developed secure payment processing APIs using Java, Spring Boot, SQL, and Node.js, supporting merchant onboarding and UPI transaction workflows for thousands of small businesses.",
      "Reduced transaction processing latency by 22% by refactoring high-performance validation modules using C++ and multithreading techniques.",
      "Built React.js merchant dashboards providing real-time payment insights and transaction monitoring for business stakeholders.",
      "Implemented cloud-based monitoring and logging using AWS CloudWatch and Jenkins CI/CD pipelines, improving production stability across distributed systems.",
      "Optimized MySQL and Redis for high-throughput fintech transactions, improving scalability during peak payment traffic events.",
    ],
    stack: ["Java", "Spring Boot", "Node.js", "React.js", "C++", "MySQL", "Redis", "AWS CloudWatch", "Jenkins", "Docker"],
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
              Highlights emphasize measurable outcomes across healthcare,
              fintech, and e-commerce: latency, reliability, and AI-driven
              automation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "AWS", "Kafka", "AI/ML"].map(
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