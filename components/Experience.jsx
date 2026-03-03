import Container from "./Container";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Yosi Innovation Pvt Ltd • IISc, India",
    period: "Jun 2023 – Nov 2023",
    tag: "Promoted from Intern",
    signals: ["280 hrs saved/quarter", "Reusable UI", "IoT prototypes"],
    bullets: [
      "Promoted from intern after delivering three deployable IoT prototypes for MedTech incubation programs.",
      "Built a React + TypeScript vendor-management portal that automated procurement workflows, cutting manual data entry by 280 hours/quarter and syncing across 4 departments.",
      "Designed reusable UI components that reduced validation errors from 17 → 6 per build cycle, improving release reliability.",
      "Engineered a Smart Walking Stick (GPS + ESP32 + cloud analytics) achieving obstacle-detection latency under 0.25s during field testing.",
    ],
    stack: ["React", "TypeScript", "UI Systems", "IoT", "ESP32", "Cloud"],
  },
  {
    role: "Front-End Developer Intern",
    company: "Yosi Innovation Pvt Ltd • IISc, India",
    period: "Sep 2022 – May 2023",
    tag: "Security + Automation",
    signals: ["79s/record faster", "50 reports <90 min", "35 deviations"],
    bullets: [
      "Built an automated VB.NET + Excel risk-assessment system for critical banking infrastructure; reduced audit cycle time by 79s/record across 2,000 records per audit.",
      "Created an interactive UI workflow to rank high-risk vulnerabilities, processing 50 reports in <90 minutes (down from 150).",
      "Conducted security-control gap analyses across 12 systems, documenting 35 compliance deviations and drafting remediation plans.",
      "Presented a live prototype demo to 50 Ernst & Young executives, securing adoption within two partner institutions.",
    ],
    stack: ["VB.NET", "Excel Automation", "Security Controls", "Compliance"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Greet Labs Pvt Ltd • Bengaluru, India",
    period: "Feb 2023 – Apr 2023",
    tag: "Performance + Scale",
    signals: ["MERN build", "APIs + Auth", "Production deploy"],
    bullets: [
      "Implemented and deployed a full-stack MERN e-commerce platform with clean REST APIs and responsive UI.",
      "Designed MongoDB schema + backend routes for catalog, cart, and checkout workflows.",
      "Improved UX with robust loading/error states and clear admin management flows.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
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