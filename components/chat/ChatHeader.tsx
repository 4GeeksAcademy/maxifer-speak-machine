import { Menu, Trash2 } from "lucide-react";

interface ChatHeaderProps {
  onClearConversation: () => void;
  onToggleMetrics: () => void;
  metricsOpen: boolean;
}

export function ChatHeader({ onClearConversation, onToggleMetrics, metricsOpen }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-20 -mx-4 border-b border-white/10 bg-slate-950/40 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 md:mx-0 md:rounded-3xl md:border md:bg-slate-950/30 md:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleMetrics}
            aria-label={metricsOpen ? "Ocultar metricas" : "Mostrar metricas"}
            aria-expanded={metricsOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-200 transition hover:border-white/20 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-blue-300/40 md:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </button>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">AI Assistant</h1>
        </div>
        <button
          type="button"
          onClick={onClearConversation}
          aria-label="Limpiar chat"
          title="Limpiar chat"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-200 transition hover:border-white/20 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
        >
          <Trash2 className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}