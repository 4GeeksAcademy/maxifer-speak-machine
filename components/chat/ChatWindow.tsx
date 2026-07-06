import { ChatMessage } from "./types";
import { EmptyState } from "./EmptyState";
import { ErrorBanner } from "./ErrorBanner";
import { LoadingMessage } from "./LoadingMessage";
import { MessageBubble } from "./MessageBubble";

interface ChatWindowProps {
  messages: ChatMessage[];
  loading: boolean;
  error: string;
}

export function ChatWindow({ messages, loading, error }: ChatWindowProps) {
  return (
    <section className="mt-6 flex flex-1 flex-col rounded-[28px] border border-white/10 bg-slate-950/45 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-50">Chat Window</h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Historial completo de la sesion</p>
        </div>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100">
          {loading ? "Pensando..." : "Ready"}
        </span>
      </div>

      <div className="flex-1 space-y-6 px-4 py-5 sm:px-6">
        {messages.length === 0 ? <EmptyState /> : messages.map((message) => <MessageBubble key={message.id} message={message} />)}
        {loading ? <LoadingMessage /> : null}
        {error ? <ErrorBanner error={error} /> : null}
      </div>
    </section>
  );
}