import Container from "./Container";

const experiences = [
  {
    role: "Front-End Developer",
    company: "YosiInnovation Private Ltd • IISc, India",
    period: "Jun 2023 – Nov 2023",
    tag: "React + IoT Focus",
    signals: ["280 hrs ↓ manual entry", "17→6 UI errors/build", "<0.25s obstacle latency"],
    bullets: [
      "Promoted from intern after delivering three deployable IoT prototypes for MedTech incubation programs at IISc.",
      "Built a React + TypeScript vendor-management portal that automated procurement workflows, cutting manual data entry by 280 hours per quarter and synchronizing information across four departments.",
      "Designed reusable React components that reduced UI validation errors from 17 to 6 per build cycle, improving release reliability.",
      "Engineered a Smart Walking Stick integrating GPS, ESP32, and cloud analytics to assist visually impaired users, achieving obstacle-detection latency under 0.25 seconds during field testing.",
    ],
    stack: ["React.js", "TypeScript", "ESP32", "GPS", "Cloud Analytics", "IoT"],
  },
  {
    role: "Front-End Developer Intern",
    company: "YosiInnovation Private Ltd • IISc, India",
    period: "Sep 2022 – May 2023",
    tag: "Security + Audit Automation",
    signals: ["79s ↓ per audit record", "50 reports in <90 min", "35 compliance deviations found"],
    bullets: [
      "Designed an automated VB.NET + Excel risk-assessment system for critical banking infrastructure, reducing audit cycle time by 79 seconds per record and improving throughput across 2,000 records per audit.",
      "Created an interactive UI workflow to rank high-risk vulnerabilities, processing 50 reports in under 90 minutes instead of 150, improving review turnaround.",
      "Conducted security-control gap analyses across 12 systems, documenting 35 compliance deviations and drafting remediation plans.",
      "Delivered a live prototype demo to 50 Ernst & Young executives, securing adoption of the audit-automation methodology within two partner institutions.",
    ],
    stack: ["VB.NET", "Excel", "UI/UX", "Security Analysis", "Compliance"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Greet Labs Pvt Ltd • Bengaluru, India",
    period: "Feb 2023 – Apr 2023",
    tag: "MERN + DevOps",
    signals: ["40% ↓ unauthorized access", "200ms→150ms API latency", "100% on-time delivery"],
    bullets: [
      "Implemented and deployed a full-stack MERN e-commerce platform that accelerated checkout speed by 79 seconds per transaction and improved user engagement across 1,500+ sessions.",
      "Strengthened backend security by implementing RBAC and JWT-based authentication, reducing unauthorized access attempts by 40% while ensuring encrypted, authorized data exchange.",
      "Refactored MongoDB queries and Node.js APIs, cutting average API latency from 200ms to 150ms and enhancing scalability under load testing with 10k+ concurrent users.",
      "Automated CI/CD workflows via GitHub Actions and Jenkins, achieving 100% on-time sprint delivery and reducing manual deployment effort by 3 hours per cycle.",
    ],
    stack: ["MongoDB", "Express", "React.js", "Node.js", "JWT", "RBAC", "GitHub Actions", "Jenkins", "Docker"],
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
              Highlights emphasize measurable outcomes: performance, security,
              automation, and clean UI systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Full Stack", "IoT", "Security", "DevOps"].map(
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
