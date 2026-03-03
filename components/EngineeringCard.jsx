export default function EngineeringCard() {
  const stack = [
    { name: "Frontend", tech: "Next.js + React", color: "bg-blue-100 text-blue-800" },
    { name: "Backend", tech: "Node + FastAPI", color: "bg-purple-100 text-purple-800" },
    { name: "Database", tech: "Postgres + Redis", color: "bg-emerald-100 text-emerald-800" },
    { name: "Infra", tech: "AWS + Docker", color: "bg-orange-100 text-orange-800" },
  ];

  return (
    <div className="relative w-full">
      <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold tracking-widest text-slate-500">
              ENGINEERING PROFILE
            </div>
            <div className="mt-1 text-lg font-bold text-slate-900">
              System Builder
            </div>
          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Production Ready
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Stack blocks */}
        <div className="space-y-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 hover:shadow-md transition"
            >
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  {item.name}
                </div>
                <div className="text-xs text-slate-500">
                  {item.tech}
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${item.color}`}
              >
                Active
              </span>
            </div>
          ))}
        </div>

        {/* Bottom metrics */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Metric label="p95 Latency" value="120ms" />
          <Metric label="Uptime" value="99.95%" />
          <Metric label="Deploy Flow" value="CI/CD" />
          <Metric label="Ownership" value="End-to-End" />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-bold text-slate-900">{value}</div>
    </div>
  );
}