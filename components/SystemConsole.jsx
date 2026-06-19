export default function SystemConsole() {
  const stats = [
    { k: "Throughput", v: "15K+ TPS", note: "Kafka event streaming" },
    { k: "Uptime", v: "99.97%", note: "SLO maintained" },
    { k: "CI/CD Savings", v: "60%", note: "GitHub Actions + Datadog" },
    { k: "Billing Delay", v: "30% ↓", note: "Kafka + Redis queues" },
  ];

  const events = [
    { t: "01", label: "Subscription created", tone: "ok" },
    { t: "02", label: "Solace Pub/Sub event", tone: "ok" },
    { t: "03", label: "SAP S/4HANA sync", tone: "ok" },
    { t: "04", label: "Payment reconciled", tone: "ok" },
    { t: "05", label: "AI copilot triggered", tone: "ok" },
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
            <div className="text-sm font-semibold text-slate-900">Live System Console</div>
            <div className="text-xs text-slate-500">Wells Fargo • Enterprise Platform</div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Production
            </span>
          </div>
        </div>

        {/* Service map */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-700">Request path</div>
            <div className="text-[11px] text-slate-500">client → api → events → data</div>
          </div>

          <div className="grid grid-cols-5 items-center gap-2 text-[11px]">
            {[
              { name: "Angular", sub: "Frontend" },
              { name: "Spring", sub: "Java 17" },
              { name: "Solace", sub: "Pub/Sub" },
              { name: "Kafka", sub: "Streaming" },
              { name: "Redis", sub: "Cache" },
            ].map((n, i) => (
              <div key={i} className="relative">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                  <div className="font-semibold text-slate-900">{n.name}</div>
                  <div className="text-slate-500">{n.sub}</div>
                </div>
                {i < 4 && (
                  <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-slate-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SLO cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.k} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-[11px] text-slate-500">{s.k}</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">{s.v}</div>
              <div className="mt-1 text-[11px] text-slate-500">{s.note}</div>
            </div>
          ))}
        </div>

        {/* Event timeline */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 text-xs font-semibold text-slate-700">Order lifecycle events</div>
          <div className="flex flex-wrap gap-2">
            {events.map((e) => (
              <span
                key={e.t + e.label}
                className={"inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] " + toneClass(e.tone)}
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
            <div className="text-xs font-semibold">AI copilot pipeline</div>
            <div className="text-[11px] text-slate-400">RAG + LangGraph</div>
          </div>

          <div className="mt-3 space-y-2 text-[12px]">
            <Line left="User query" mid="LangChain router" right="18ms" />
            <Line left="Vector search" mid="Pinecone / Weaviate" right="34ms" />
            <Line left="LLM response" mid="OpenAI GPT / Claude" right="610ms" />
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