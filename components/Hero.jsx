import Container from "./Container";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="aurora" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 items-center py-16 lg:py-20">
          {/* LEFT */}
          <div className="relative">
            {/* Availability */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Backend • AI Systems • Distributed Systems
            </div>

            {/* Name */}
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

            {/* Main headline */}
            <p className="mt-8 text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-emerald-700">I build scalable AI systems,</span>{" "}
              <span className="text-slate-900">fintech microservices, and real-time pipelines.</span>
            </p>

            {/* Subtext */}
            <p className="mt-4 max-w-xl text-lg text-slate-600 leading-relaxed">
              Focused on microservices, event-driven systems, and AI-powered applications using Java, Spring Boot, Kafka, and AWS.
            </p>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">
                  PERFORMANCE
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">
                  +35% API throughput
                </div>
              </div>

              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">
                  AUTOMATION
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">
                  40% effort reduction
                </div>
              </div>

              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">
                  INFRA
                </div>
                <div className="mt-2 text-lg font-bold text-slate-900">
                  25% cost reduction
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-7 flex gap-6 text-sm font-semibold text-slate-700">
              <a href="https://www.linkedin.com/in/kiran-subramani6199/">LinkedIn</a>
              <a href="https://github.com/KIRAN-SUBRAMANI">GitHub</a>
              <a href="#">LeetCode</a>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-pop rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold"
              >
                CONTACT ME →
              </a>

              <a
                href="/Kiran Subramani.pdf"
                className="btn-pop rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold"
              >
                GET RESUME ↓
              </a>

              <a
                href="#projects"
                className="btn-pop rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-slate-900 font-semibold"
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
                      AI Systems Engineer
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Backend", "Java + Spring Boot + Microservices", "Active", "bg-blue-50 text-blue-700 border-blue-100"],
                    ["AI Systems", "RAG + LLMs + Anomaly Detection", "Active", "bg-purple-50 text-purple-700 border-purple-100"],
                    ["Data Streaming", "Kafka + Redis + Real-time Pipelines", "Active", "bg-emerald-50 text-emerald-700 border-emerald-100"],
                    ["Cloud & Infra", "AWS + Docker + Kubernetes", "Active", "bg-orange-50 text-orange-700 border-orange-100"],
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
                    <div className="text-xs text-slate-500 font-semibold">Throughput</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">+35%</div>
                  </div>

                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">Automation</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">40%</div>
                  </div>

                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">Infra Cost</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">-25%</div>
                  </div>

                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">Reliability</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">99.95%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-10 -z-10 rounded-[32px] bg-gradient-to-r from-blue-200/30 via-emerald-200/20 to-indigo-200/30 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}