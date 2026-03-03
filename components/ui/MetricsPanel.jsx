export default function MetricsPanel() {
  const items = [
    { k: "API p95", v: "120ms", sub: "steady under load" },
    { k: "Uptime", v: "99.95%", sub: "SLO driven" },
    { k: "DB", v: "PostgreSQL", sub: "indexes + tuning" },
    { k: "Deploy", v: "CI/CD", sub: "preview → prod" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">Engineering Snapshot</div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Shipping
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {items.map((x) => (
          <div
            key={x.k}
            className="rounded-xl border border-slate-200 bg-white p-3"
          >
            <div className="text-xs font-medium text-slate-500">{x.k}</div>
            <div className="mt-1 text-sm font-extrabold text-slate-900">{x.v}</div>
            <div className="mt-1 text-xs text-slate-500">{x.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}