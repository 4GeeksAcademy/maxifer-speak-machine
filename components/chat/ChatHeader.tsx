interface ChatHeaderProps {
  onClearConversation: () => void;
}

export function ChatHeader({ onClearConversation }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-20 -mx-4 border-b border-white/10 bg-slate-950/40 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 md:mx-0 md:rounded-3xl md:border md:bg-slate-950/30 md:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-blue-200/70">AI Chat Dashboard</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Conversacion persistente con metricas en tiempo real</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">Historial completo, consumo acumulado de tokens y tiempos de respuesta para observar el comportamiento de la integracion con Groq.</p>
        </div>

        <button
          type="button"
          onClick={onClearConversation}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-blue-300/40 md:hidden"
        >
          Limpiar chat
        </button>
      </div>
    </header>
  );
}