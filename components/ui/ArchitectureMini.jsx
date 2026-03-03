export default function ArchitectureMini() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">System View</div>
        <div className="text-xs font-medium text-slate-500">request → compute → data</div>
      </div>

      <div className="mt-4 grid grid-cols-3 items-center gap-3">
        <Node title="Web" subtitle="Next.js UI" accent="indigo" />
        <Arrow />
        <Node title="API" subtitle="Services + Auth" accent="violet" />

        <div className="col-span-3 my-1">
          <Pipeline />
        </div>

        <Node title="Queue" subtitle="Jobs / ETL" accent="emerald" />
        <Arrow />
        <Node title="DB" subtitle="Postgres" accent="slate" />
      </div>
    </div>
  );
}

function Node({ title, subtitle, accent }) {
  const ring =
    accent === "indigo"
      ? "ring-indigo-200"
      : accent === "violet"
      ? "ring-violet-200"
      : accent === "emerald"
      ? "ring-emerald-200"
      : "ring-slate-200";

  const dot =
    accent === "indigo"
      ? "bg-indigo-500"
      : accent === "violet"
      ? "bg-violet-500"
      : accent === "emerald"
      ? "bg-emerald-500"
      : "bg-slate-500";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-3 ring-1 ${ring}`}>
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <div className="text-sm font-bold text-slate-900">{title}</div>
      </div>
      <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center">
      <span className="text-slate-400">→</span>
    </div>
  );
}

function Pipeline() {
  return (
    <div className="relative h-2 overflow-hidden rounded-full bg-slate-100">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-violet-300 to-emerald-300 opacity-70" />
      <div className="absolute inset-0 animate-pulse bg-white/20" />
    </div>
  );
}