export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mb-10">
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          {kicker}
        </div>
      ) : null}

      <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 text-lg text-slate-600 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}