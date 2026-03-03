import Container from "./Container";

const METRICS = [
  {
    label: "Latency",
    value: "200ms → 150ms",
    desc: "API optimization",
    accent: "from-blue-500/15 to-indigo-500/10",
  },
  {
    label: "Speed",
    value: "+40%",
    desc: "Caching + lazy loading",
    accent: "from-emerald-500/15 to-teal-500/10",
  },
  {
    label: "Scale",
    value: "10k+ users",
    desc: "Load-tested backend",
    accent: "from-violet-500/15 to-fuchsia-500/10",
  },
  {
    label: "Impact",
    value: "280 hrs saved",
    desc: "Workflow automation",
    accent: "from-orange-500/15 to-rose-500/10",
  },
];

const FOCUS = [
  "Backend APIs",
  "Database design",
  "Performance tuning",
  "CI/CD",
  "Cloud deployment",
  "Observability",
];

export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute top-20 -right-20 h-[380px] w-[380px] rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-indigo-300/15 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          {/* Heading Row */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.35em] text-slate-500 font-semibold">
                ABOUT
              </div>

              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                I build{" "}
                <span className="text-slate-900">production-ready</span>{" "}
                software that{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                  scales and performs
                </span>
                .
              </h2>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                I’m a SWE-focused graduate student with hands-on experience
                building full-stack and cloud-native systems. I care about
                measurable outcomes: lower latency, faster load times, reliable
                deployments, and clean UX.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to SWE New Grad (US)
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 lg:p-7 card-premium">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 card-premium"
                >
                  <div
                    className={`pointer-events-none absolute -inset-10 bg-gradient-to-br ${m.accent} blur-2xl`}
                  />
                  <div className="relative">
                    <div className="text-xs tracking-[0.35em] text-slate-500 font-semibold uppercase">
                      {m.label}
                    </div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900">
                      {m.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-column cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* HOW I WORK */}
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-7 card-premium overflow-hidden">
              <div className="pointer-events-none absolute -inset-16 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-emerald-500/10 blur-2xl" />

              <div className="relative">
                <div className="text-xs tracking-[0.35em] text-slate-500 font-semibold">
                  HOW I WORK
                </div>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Simple process. Strong outcomes.
                </h3>

                <div className="mt-6 space-y-6">
                  <Step
                    n="01"
                    title="Define the problem"
                    desc="Clarify requirements, constraints, and what success looks like (metrics/SLOs)."
                  />
                  <Step
                    n="02"
                    title="Design the system"
                    desc="Pick the simplest architecture that scales: data model, API contracts, boundaries."
                  />
                  <Step
                    n="03"
                    title="Ship + iterate"
                    desc="Deploy with CI/CD, monitor, learn from real usage, and improve quickly."
                  />
                </div>
              </div>
            </div>

            {/* FOCUS AREAS */}
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-7 card-premium overflow-hidden">
              <div className="pointer-events-none absolute -inset-16 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-indigo-500/10 blur-2xl" />

              <div className="relative">
                <div className="text-xs tracking-[0.35em] text-slate-500 font-semibold">
                  FOCUS AREAS
                </div>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  SWE signals recruiters care about
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {FOCUS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 hover:border-indigo-200 hover:text-slate-900 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5 card-premium">
                  <div className="text-xs tracking-[0.35em] text-slate-500 font-semibold">
                    NOW / NEXT
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-bold">Now:</span> building end-to-end
                      projects with performance & reliability in mind.
                      <br />
                      <span className="font-bold">Next:</span> polishing case
                      studies + shipping production deployments with monitoring.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3 flex-wrap">
                  <a
                    href="#projects"
                    className="btn-pop rounded-full bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow-sm"
                  >
                    View Projects →
                  </a>
                  <a
                    href="#contact"
                    className="btn-pop rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-slate-900 font-semibold backdrop-blur"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle divider */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </Container>
    </section>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold">
          {n}
        </div>
        <div className="mt-3 h-full w-px bg-slate-200" />
      </div>

      <div>
        <div className="text-lg font-extrabold text-slate-900">{title}</div>
        <div className="mt-1 text-slate-600 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}