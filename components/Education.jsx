import Container from "./Container";

const education = [
  {
    range: "2024 - 2025",
    degree: "M.S. INFORMATION SYSTEM TECHNOLOGIES",
    school: "Wilmington University • USA",
    subtitle: "Specialization: Cloud Systems & AI Engineering",
    gpaLabel: "GPA",
    gpaValue: "3.7/4.0",
    logoSrc: "/wilmington.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-20">
      <Container>

        {/* Section Title */}
        <div className="flex items-center justify-center gap-4">
          <div className="hidden sm:block h-[2px] w-28 bg-slate-900/80 rounded-full" />
          <div className="px-6 py-2 rounded-xl bg-slate-900 text-white font-extrabold shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
            Education
          </div>
          <div className="hidden sm:block h-[2px] w-28 bg-slate-900/80 rounded-full" />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="relative rounded-[34px] border border-slate-200/70 bg-white/55 backdrop-blur overflow-hidden shadow-[0_26px_80px_rgba(15,23,42,0.10)] min-h-[420px]">
            <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle,rgba(15,23,42,0.16)_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-emerald-400/10" />

            <div className="relative p-10">
              <div className="text-xs font-semibold tracking-[0.22em] text-slate-500">
                ACADEMIC FOUNDATION
              </div>

              <div className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Building a strong foundation in scalable systems and AI engineering.
              </div>

              <div className="mt-4 text-slate-600 text-lg">
                Distributed Systems • Cloud • AI Systems • Performance Engineering
              </div>

              <div className="mt-8 rounded-2xl bg-white/75 border border-slate-200/70 p-6">
                <div className="text-slate-900 font-bold">
                  Core Focus Areas
                </div>
                <div className="mt-2 text-slate-600">
                  Microservices architecture, distributed systems, cloud-native applications, and AI-powered workflows including RAG and real-time data pipelines.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (CENTERED SINGLE CARD) */}
          <div className="space-y-8 max-w-xl mx-auto">
            {education.map((item) => (
              <div
                key={item.range}
                className="relative w-full rounded-[22px] bg-[#2f2f2f] overflow-hidden shadow-[0_22px_70px_rgba(15,23,42,0.30)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent" />

                <div className="relative px-8 py-8">

                  {/* Year */}
                  <div className="text-center text-white font-extrabold tracking-tight text-3xl">
                    {item.range}
                  </div>

                  <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                    {/* LEFT CONTENT */}
                    <div className="flex items-start gap-5">
                      <div className="h-12 w-12 grid place-items-center shrink-0">
                        <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
                          <rect x="6" y="6" width="32" height="32" rx="6" stroke="#F3B21A" strokeWidth="2.5" />
                          <circle cx="22" cy="18" r="4" fill="#F3B21A" />
                          <path
                            d="M15 31c1.5-4.5 12.5-4.5 14 0"
                            stroke="#F3B21A"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="min-w-0">
                        <div className="text-[#35d39a] font-extrabold tracking-[0.08em] text-xl uppercase">
                          {item.degree}
                        </div>

                        <div className="mt-3 text-white/85 text-lg leading-snug">
                          {item.school}
                        </div>

                        <div className="mt-1 text-white/55 text-sm">
                          {item.subtitle}
                        </div>

                        <div className="mt-2 text-[#F3B21A] font-extrabold text-lg">
                          {item.gpaLabel}: {item.gpaValue}
                        </div>

                        {/* Extra highlight */}
                        <div className="mt-2 text-white/50 text-sm">
                          Focus: Distributed Systems • Cloud • AI Systems
                        </div>
                      </div>
                    </div>

                    {/* LOGO */}
                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                      <div className="h-[110px] w-[170px] md:h-[120px] md:w-[140px] rounded-xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.30)] overflow-hidden flex items-center justify-center">
                        <img
                          src={item.logoSrc}
                          alt={`${item.school} logo`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}