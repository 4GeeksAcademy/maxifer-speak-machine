interface MetricCardProps {
  label: string;
  value: string;
  hint: string;
}

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <article className="w-full min-w-0 rounded-xl border border-white/10 bg-slate-900/70 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm md:rounded-2xl md:p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400 md:text-[11px] md:tracking-[0.18em]">{label}</p>
      <p className="mt-2 text-xl font-semibold leading-tight tracking-tight text-slate-100 md:mt-3 md:text-2xl">{value}</p>
      <p className="mt-1 text-xs text-slate-400 md:mt-2 md:text-sm">{hint}</p>
    </article>
  );
}