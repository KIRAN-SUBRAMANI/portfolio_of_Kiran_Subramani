import Container from "./Container";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Aurora background */}
      <div className="aurora" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 items-center py-16 lg:py-20">
          {/* LEFT */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for SWE • Backend • Full-stack
            </div>

              <h1 className="mt-7 font-extrabold tracking-tight text-slate-900">
              <span className="block text-3xl sm:text-4xl lg:text-5xl">
                Hey there,
              </span>

              <span className="block text-3xl sm:text-4xl lg:text-5xl">
                I am
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-5xl text-blue-600 mt-3">
                <AnimatedText
                  text="KIRAN SUBRAMANI"
                  speed={100}
                  pause={1500}
                  loop={true}
                />
              </span>
            </h1>

            <p className="mt-8 text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-emerald-700">I turn ideas into</span>{" "}
              <span className="text-slate-900">code that ships.</span>
            </p>

            <p className="mt-4 max-w-xl text-lg text-slate-600 leading-relaxed">
              I build scalable APIs, data pipelines, and production-grade web apps
              — with clean architecture, measurable performance, and strong UX.
            </p>

            {/* mini cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">
                  LATENCY
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">
                  p95 110ms
                </div>
                <div className="text-sm text-slate-500">under load</div>
              </div>

              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">
                  RELIABILITY
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">
                  99.95%
                </div>
                <div className="text-sm text-slate-500">SLO tracking</div>
              </div>

              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">
                  SHIPPING
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">
                  CI/CD
                </div>
                <div className="text-sm text-slate-500">preview → prod</div>
              </div>
            </div>

            {/* links */}
            <div className="mt-7 flex gap-6 text-sm font-semibold text-slate-700">
              <a className="hover:text-slate-900" href="https://www.linkedin.com/in/kiran-subramani6199/">LinkedIn</a>
              <a className="hover:text-slate-900" href="https://github.com/KIRAN-SUBRAMANI">GitHub</a>
              <a className="hover:text-slate-900" href="#">LeetCode</a>

            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-pop rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-sm"
              >
                CONTACT ME →
              </a>

              <a
                href="/Kiran Subramani.pdf"
                className="btn-pop rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm"
              >
                GET RESUME ↓
              </a>

              <a
                href="#projects"
                className="btn-pop rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-slate-900 font-semibold backdrop-blur"
              >
                View work
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="gradient-frame">
              <div className="card-premium rounded-[25px] border border-white/60 bg-white/85 backdrop-blur-xl p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs tracking-widest text-slate-500 font-semibold">
                      ENGINEERING PROFILE
                    </div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900">
                      System Builder
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Frontend", "Next.js + React", "Active", "bg-blue-50 text-blue-700 border-blue-100"],
                    ["Backend", "Node + FastAPI", "Active", "bg-purple-50 text-purple-700 border-purple-100"],
                    ["Database", "Postgres + Redis", "Active", "bg-emerald-50 text-emerald-700 border-emerald-100"],
                    ["Infra", "AWS + Docker", "Active", "bg-orange-50 text-orange-700 border-orange-100"],
                  ].map(([title, subtitle, status, pillClass]) => (
                    <div
                      key={title}
                      className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{title}</div>
                        <div className="text-sm text-slate-600">{subtitle}</div>
                      </div>
                      <div className={`rounded-full border px-4 py-1 text-sm font-semibold ${pillClass}`}>
                        {status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs tracking-widest text-slate-500 font-semibold">
                      p95 Latency
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">
                      120ms
                    </div>
                  </div>

                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs tracking-widest text-slate-500 font-semibold">
                      Uptime
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">
                      99.95%
                    </div>
                  </div>

                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs tracking-widest text-slate-500 font-semibold">
                      Deploy Flow
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">
                      CI/CD
                    </div>
                  </div>

                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs tracking-widest text-slate-500 font-semibold">
                      Ownership
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">
                      End-to-End
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny “glow” highlight behind the card */}
            <div className="absolute -inset-10 -z-10 rounded-[32px] bg-gradient-to-r from-blue-200/30 via-emerald-200/20 to-indigo-200/30 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}