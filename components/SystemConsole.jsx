export default function SystemConsole() {
  const stats = [
    { k: "p95 latency", v: "132ms", note: "rolling 30m" },
    { k: "error rate", v: "0.08%", note: "SLO: < 0.1%" },
    { k: "throughput", v: "1.8k rpm", note: "peak 2.4k" },
    { k: "saturation", v: "41%", note: "CPU / DB pool" },
  ];

  const events = [
    { t: "10:12", label: "Deploy v1.14", tone: "ok" },
    { t: "10:14", label: "Canary 10%", tone: "ok" },
    { t: "10:17", label: "Alert: p95 spike", tone: "warn" },
    { t: "10:23", label: "Rollback + patch", tone: "ok" },
    { t: "10:28", label: "Stable", tone: "ok" },
  ];

  const toneClass = (tone) =>
    tone === "warn"
      ? "border-yellow-200 bg-yellow-50 text-yellow-900"
      : "border-emerald-200 bg-emerald-50 text-emerald-900";

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Live System Console
            </div>
            <div className="text-xs text-slate-500">
              observability • traces • SLOs
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Healthy
            </span>
          </div>
        </div>

        {/* Service map */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-700">
              Request path
            </div>
            <div className="text-[11px] text-slate-500">edge → compute → data</div>
          </div>

          <div className="grid grid-cols-5 items-center gap-2 text-[11px]">
            {[
              { name: "Edge", sub: "CDN + TLS" },
              { name: "Web", sub: "Next.js" },
              { name: "API", sub: "FastAPI" },
              { name: "Queue", sub: "Jobs" },
              { name: "DB", sub: "Postgres" },
            ].map((n, i) => (
              <div key={i} className="relative">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                  <div className="font-semibold text-slate-900">{n.name}</div>
                  <div className="text-slate-500">{n.sub}</div>
                </div>
                {i < 4 && (
                  <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-slate-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SLO cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="text-[11px] text-slate-500">{s.k}</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">
                {s.v}
              </div>
              <div className="mt-1 text-[11px] text-slate-500">{s.note}</div>
            </div>
          ))}
        </div>

        {/* Incident timeline */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 text-xs font-semibold text-slate-700">
            Recent deploy timeline
          </div>
          <div className="flex flex-wrap gap-2">
            {events.map((e) => (
              <span
                key={e.t + e.label}
                className={
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] " +
                  toneClass(e.tone)
                }
              >
                <span className="font-semibold">{e.t}</span>
                <span className="opacity-90">{e.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Trace sample */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-950 p-4 text-slate-100">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold">trace.sample</div>
            <div className="text-[11px] text-slate-400">3 spans</div>
          </div>

          <div className="mt-3 space-y-2 text-[12px]">
            <Line left="GET /" mid="edge-cache" right="12ms" />
            <Line left="SSR" mid="web-render" right="42ms" />
            <Line left="SELECT" mid="db-query (idx)" right="21ms" />
          </div>

          <div className="mt-3 text-[11px] text-slate-400">
            Tip: swap these with real numbers once you measure them.
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ left, mid, right }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <span className="text-slate-200">{left}</span>
      <span className="text-slate-400">{mid}</span>
      <span className="font-semibold text-emerald-300">{right}</span>
    </div>
  );
}