import Container from "./Container";

const projects = [
  {
    title: "Good Dog — Responsive Web App",
    tag: "Performance + UX",
    period: "Jun 2025 – Aug 2025",
    signals: ["Engagement +30%", "Load time −40%", "Reusable UI"],
    bullets: [
      "Built responsive Next.js + React app with clean component architecture.",
      "Improved perceived speed via caching + lazy loading patterns.",
      "Shipped reusable UI primitives to reduce regressions & speed iteration.",
    ],
    stack: ["Next.js", "React", "Context API", "Performance"],
    repo: "#",
    live: "#",
  },
  {
    title: "Astrology Portfolio Platform",
    tag: "Cloud + Observability",
    period: "Jun 2024 – Jan 2025",
    signals: ["Latency −40%", "2× load", "Monitoring dashboards"],
    bullets: [
      "Built Flask services on cloud VMs and containerized with Docker.",
      "Scaled using modular service separation & clean interfaces.",
      "Added Prometheus + Grafana dashboards to track system health.",
    ],
    stack: ["Flask", "GCP", "Docker", "Prometheus", "Grafana"],
    repo: "#",
    live: "#",
  },
  {
    title: "Full-Stack MERN E-Commerce",
    tag: "Delivery + Scale",
    period: "Feb 2023 – Apr 2023",
    signals: ["REST APIs", "Auth + Roles", "Checkout flow"],
    bullets: [
      "Implemented catalog, cart, checkout, and admin workflows.",
      "Designed REST endpoints + MongoDB schema for scalable CRUD.",
      "Improved UX with strong loading/error states and clean UI flows.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    repo: "#",
    live: "#",
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

function LinkBtn({ href, children, solid = false }) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      className={
        solid
          ? "inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-extrabold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      }
    >
      {children} <span aria-hidden>↗</span>
    </a>
  );
}

function ProjectCard({ p, i }) {
  return (
    <article
      className={`project-stack-card relative rounded-[26px] border border-slate-200/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.10)] overflow-hidden`}
      style={{
        // per-card stacking offset (CSS var used by globals.css)
        "--stackY": `${i * 22}px`,
      }}
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 opacity-80 project-glow" />

      <div className="relative p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-extrabold text-white">
              {p.tag}
            </span>
            <span className="text-xs font-bold text-slate-500">{p.period}</span>
          </div>
          <div className="flex gap-2">
            <LinkBtn href={p.repo} solid>
              Repo
            </LinkBtn>
            <LinkBtn href={p.live}>Live</LinkBtn>
          </div>
        </div>

        <h3 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
          {p.title}
        </h3>

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
          {/* LEFT (static) */}
          <div className="lg:sticky lg:top-24">
            <div className="text-xs tracking-[0.35em] font-extrabold text-slate-500">
              PROJECTS
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Proof of execution.
            </h2>
            <p className="mt-2 text-lg font-semibold text-slate-600">
              Real builds. Measurable results. Clean delivery.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed">
              These projects reflect how I approach engineering: clear architecture,
              performance mindset, and production-ready execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Performance", "System Design", "Cloud", "UX", "Observability"].map(
                (x) => (
                  <Pill key={x}>{x}</Pill>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkBtn href="#" solid>
                View GitHub
              </LinkBtn>
              <LinkBtn href="#">Download Resume</LinkBtn>
            </div>
          </div>

          {/* RIGHT (stack + sticky cards) */}
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