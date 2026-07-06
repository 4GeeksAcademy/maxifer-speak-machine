export function LoadingMessage() {
  return (
    <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-900/60 px-5 py-4 text-slate-300">
      <div className="mt-1 flex gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300" />
      </div>
      <p className="text-sm leading-6">Pensando...</p>
    </div>
  );
}