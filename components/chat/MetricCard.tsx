interface MetricCardProps {
  label: string;
  value: string;
  hint: string;
}

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <article className="min-w-[150px] flex-1 rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-100">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </article>
  );
}