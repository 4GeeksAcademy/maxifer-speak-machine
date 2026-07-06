export function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/35 px-6 py-10 text-center">
      <p className="text-lg font-medium text-slate-100">Todavia no hay conversacion.</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Escribi tu primer mensaje para iniciar el historial y empezar a acumular metricas del modelo.
      </p>
    </div>
  );
}