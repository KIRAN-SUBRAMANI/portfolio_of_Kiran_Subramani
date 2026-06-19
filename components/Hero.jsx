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
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Full Stack • Generative AI • Distributed Systems
            </div>

            <h1 className="mt-7 font-extrabold tracking-tight text-slate-900">
              <span className="block text-3xl sm:text-4xl lg:text-5xl">Hey there,</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl">I am</span>
              <span className="block text-4xl sm:text-5xl lg:text-5xl text-blue-600 mt-3">
                <AnimatedText text="KIRAN SUBRAMANI" speed={100} pause={1500} loop={true} />
              </span>
            </h1>

            <p className="mt-8 text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-emerald-700">I build enterprise-scale systems,</span>{" "}
              <span className="text-slate-900">AI copilots, and event-driven microservices.</span>
            </p>

            <p className="mt-4 max-w-xl text-lg text-slate-600 leading-relaxed">
              Full Stack Developer at Wells Fargo, specializing in Java, Spring Boot, Kafka, React, AWS, and Generative AI with LangChain, RAG, and OpenAI GPT.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">THROUGHPUT</div>
                <div className="mt-2 text-lg font-bold text-slate-900">15K+ TPS</div>
              </div>
              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">RELIABILITY</div>
                <div className="mt-2 text-lg font-bold text-slate-900">99.97% uptime</div>
              </div>
              <div className="card-premium rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-4">
                <div className="text-xs tracking-widest text-slate-500 font-semibold">AUTOMATION</div>
                <div className="mt-2 text-lg font-bold text-slate-900">60% CI/CD savings</div>
              </div>
            </div>

            <div className="mt-7 flex gap-6 text-sm font-semibold text-slate-700">
              <a href="https://www.linkedin.com/in/kiran-subramani6199/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/KIRAN-SUBRAMANI" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:kiransubramani2@gmail.com">Email</a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="btn-pop rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold">CONTACT ME</a>
              <a href="/Kiran Subramani.pdf" className="btn-pop rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold">GET RESUME</a>
              <a href="#projects" className="btn-pop rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-slate-900 font-semibold">View work</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="gradient-frame">
              <div className="card-premium rounded-[25px] border border-white/60 bg-white/85 backdrop-blur-xl p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs tracking-widest text-slate-500 font-semibold">ENGINEERING PROFILE</div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900">Full Stack Developer</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-100">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Full Stack", "Java 17 + Spring Boot + React + Angular", "Active", "bg-blue-50 text-blue-700 border-blue-100"],
                    ["Generative AI", "RAG + LangChain + LangGraph + OpenAI", "Active", "bg-purple-50 text-purple-700 border-purple-100"],
                    ["Event Streaming", "Kafka + Solace Pub/Sub + Redis", "Active", "bg-emerald-50 text-emerald-700 border-emerald-100"],
                    ["Cloud & Infra", "AWS + Docker + Kubernetes + Datadog", "Active", "bg-orange-50 text-orange-700 border-orange-100"],
                  ].map(([title, subtitle, status, pillClass]) => (
                    <div key={title} className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">{title}</div>
                        <div className="text-sm text-slate-600">{subtitle}</div>
                      </div>
                      <div className={`rounded-full border px-4 py-1 text-sm font-semibold ${pillClass}`}>{status}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">Throughput</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">15K+ TPS</div>
                  </div>
                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">Uptime</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">99.97%</div>
                  </div>
                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">CI/CD Saved</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">60%</div>
                  </div>
                  <div className="card-premium rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <div className="text-xs text-slate-500 font-semibold">Billing Delay ↓</div>
                    <div className="mt-2 text-xl font-extrabold text-slate-900">30%</div>
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