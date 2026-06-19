import Container from "./Container";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Wells Fargo • USA",
    period: "Jan 2026 – Present",
    tag: "Enterprise & AI",
    signals: ["GenAI Copilots Deployed", "15K+ TPS @ 99.97%", "60% CI/CD Savings"],
    bullets: [
      "Architected enterprise-scale device subscription and order management platforms using Java 17, Spring Boot, Microservices, Angular, REST APIs, Redis, and AWS, streamlining commercial leasing and fulfillment operations across multiple global markets.",
      "Engineered event-driven architectures leveraging Solace Pub/Sub, MuleSoft, SAP S/4HANA FICA, and EZLease systems enabling real-time orchestration of billing, payments, device upgrades, subscription activations, cancellations, and financial reconciliations.",
      "Developed and deployed Generative AI solutions using OpenAI GPT, Anthropic Claude, LangChain, LangGraph, CrewAI, RAG frameworks, Pinecone, and Weaviate — building intelligent enterprise assistants and AI copilots for policy interpretation, contract analysis, and customer support.",
      "Built machine learning and predictive analytics pipelines using Python, PyTorch, Scikit-learn, and LLM embeddings to identify subscription churn risks, detect payment anomalies, and generate actionable business insights.",
      "Designed resilient cloud-native microservices with Spring Cloud, Eureka, Consul, Docker, Kubernetes, AWS CloudWatch, and AWS X-Ray — sustaining thousands of concurrent API requests under high-volume event processing workloads.",
      "Automated end-to-end CI/CD and DevOps workflows using GitHub Actions, Flyway, Docker, Kubernetes, and Datadog — reducing MTTR and maintaining high availability for mission-critical enterprise applications.",
    ],
    stack: ["Java 17", "Spring Boot", "Angular", "Solace Pub/Sub", "MuleSoft", "SAP S/4HANA", "OpenAI GPT", "LangChain", "LangGraph", "RAG", "Pinecone", "Weaviate", "AWS", "Docker", "Kubernetes"],
  },
  {
    role: "Full Stack Software Developer",
    company: "Accenture • India",
    period: "Jun 2022 – Dec 2023",
    tag: "Enterprise & DevOps",
    signals: ["30% ↓ billing delays", "25% ↓ release cycle", "ETL dashboards"],
    bullets: [
      "Developed enterprise applications integrating SAP SD and billing systems with Java Spring Boot services, automating pricing and order-to-cash workflows for enterprise retail and manufacturing clients.",
      "Built RESTful APIs and middleware services using Java, Spring, and Node.js to connect SAP backend systems with modern web applications and partner platforms.",
      "Designed data pipelines and reporting services using SQL, Python, and ETL frameworks to generate operational dashboards and financial reports for business intelligence and executive stakeholders.",
      "Implemented microservice components and asynchronous job processing using Kafka and Redis queues, reducing transaction processing delays by 30%.",
      "Enhanced frontend applications using Angular, JavaScript, and TypeScript to build internal dashboards for pricing and billing workflows.",
      "Automated CI/CD workflows using Jenkins, GitLab pipelines, and Docker — reducing release cycle time by 25%.",
    ],
    stack: ["Java", "Spring Boot", "SAP SD", "Node.js", "Angular", "TypeScript", "Kafka", "Redis", "PostgreSQL", "SQL Server", "Jenkins", "Docker", "Python"],
  },
  {
    role: "Software Engineer",
    company: "Flipkart • Remote, India",
    period: "May 2021 – May 2022",
    tag: "E-Commerce & Backend",
    signals: ["20% perf improvement", "High-vol marketplace", "Payment APIs"],
    bullets: [
      "Assisted in developing backend services using Java, Spring, and REST APIs, contributing to order processing and inventory management modules for Flipkart's high-volume e-commerce platform.",
      "Contributed to microservice components and event-processing pipelines using Python and Kafka, enabling reliable handling of product catalog updates and order events across distributed systems.",
      "Optimized memory management and implemented multithreading with C++ Standard Library, improving application performance by 20%.",
      "Developed frontend components using ReactJS, JavaScript, and Redux, improving seller dashboard usability and enabling merchants to track inventory and order fulfillment more efficiently.",
      "Integrated external payment gateway and logistics APIs, automating order lifecycle workflows from checkout to shipment tracking.",
      "Built internal data analysis scripts using Python and SQL, generating reports on seller performance and product demand trends.",
    ],
    stack: ["Java", "Spring", "Python", "Kafka", "ReactJS", "Redux", "JavaScript", "C++", "MySQL", "MongoDB", "REST APIs"],
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
      <div className="text-[11px] font-extrabold tracking-[0.28em] text-slate-500">SIGNAL</div>
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
            <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-extrabold text-white">{e.tag}</span>
            <span className="text-xs font-bold text-slate-500">{e.period}</span>
          </div>
        </div>

        <h3 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">{e.role}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-600">{e.company}</p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {e.signals.map((s) => <SignalBox key={s} value={s} />)}
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
          {e.stack.map((t) => <Pill key={t}>{t}</Pill>)}
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
          <div className="lg:sticky lg:top-24">
            <div className="text-xs tracking-[0.35em] font-extrabold text-slate-500">EXPERIENCE</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">Results-driven engineering work.</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              4+ years building enterprise-scale systems across finance, e-commerce, and enterprise services — with measurable impact on performance, reliability, and AI automation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "AWS", "Kafka", "GenAI"].map((x) => <Pill key={x}>{x}</Pill>)}
            </div>
          </div>

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