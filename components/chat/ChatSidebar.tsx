interface ChatSidebarProps {
  messageCount: number;
  loading: boolean;
  onClearConversation: () => void;
}

export function ChatSidebar({
  messageCount,
  loading,
  onClearConversation,
}: ChatSidebarProps) {
  return (
    <aside className="hidden border-r border-white/10 bg-slate-950/75 md:fixed md:inset-y-0 md:left-0 md:flex md:w-[280px] md:flex-col md:backdrop-blur-xl">
      <div className="border-b border-white/10 px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-lg font-semibold text-blue-100 ring-1 ring-blue-400/30">AI</div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-50">Speak Machine</p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">Metrics Dashboard</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-2 px-4 py-6">
        <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100 shadow-inner shadow-blue-500/5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-200/70">Sesion activa</p>
          <p className="mt-1 font-medium">Chat completo con trazabilidad de tokens</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-300">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Mensajes</p>
          <p className="mt-1 text-2xl font-semibold text-slate-50">{messageCount}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-300">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Estado</p>
          <p className="mt-1 font-medium text-slate-50">{loading ? "Pensando..." : "Listo para responder"}</p>
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          onClick={onClearConversation}
          className="flex w-full items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-100 transition hover:bg-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-300/50"
        >
          Borrar conversacion
        </button>
      </div>
    </aside>
  );
}
