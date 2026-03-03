const COMMANDS = [
  "$ deploy --env=prod",
  "✓ build passed (84 tests)",
  "✓ migrations applied",
  "✓ healthcheck: ok",
  "→ traffic shifted: 100%",
  "SLO: p95 < 150ms ✅",
];

export default function ConsoleCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs font-semibold text-slate-300">release.console</div>
        <div className="w-10" />
      </div>

      <div className="p-5">
        <div className="mb-3 text-xs font-medium text-slate-400">
          Production deploy (simulated)
        </div>

        <div className="space-y-2 font-mono text-sm leading-6 text-slate-100">
          {COMMANDS.map((c, i) => (
            <div key={i} className="flex gap-3">
              <span className="select-none text-slate-500">{String(i + 1).padStart(2, "0")}</span>
              <span className={c.startsWith("✓") ? "text-emerald-300" : c.includes("SLO") ? "text-indigo-300" : ""}>
                {c}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
          Big-tech signal: reliability, tests, migrations, observability, SLOs.
        </div>
      </div>
    </div>
  );
}