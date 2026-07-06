import { FormEvent, KeyboardEvent } from "react";

interface ChatInputProps {
  input: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function ChatInput({ input, loading, onChange, onSubmit }: ChatInputProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <form onSubmit={onSubmit} className="fixed inset-x-0 bottom-0 z-30 p-4 md:left-[280px] md:p-6">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-slate-950/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label htmlFor="chat-input" className="sr-only">Escribe tu mensaje</label>
          <textarea
            id="chat-input"
            value={input}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje para la IA..."
            rows={1}
            className="min-h-[64px] flex-1 resize-none rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-300/50 focus:ring-2 focus:ring-blue-300/20 sm:text-base"
          />
          <button
            type="submit"
            disabled={loading || input.trim().length === 0}
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-900/60 disabled:text-blue-100/60"
          >
            {loading ? "Pensando..." : "Enviar"}
          </button>
        </div>
        <p className="px-2 pt-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
          La conversacion y las metricas se guardan automaticamente en este navegador.
        </p>
      </div>
    </form>
  );
}