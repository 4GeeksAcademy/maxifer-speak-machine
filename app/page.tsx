"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ChatHeader } from "../components/chat/ChatHeader";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatWindow } from "../components/chat/ChatWindow";
import { StatsPanel } from "../components/chat/StatsPanel";
import { useChatDashboard } from "../components/chat/useChatDashboard";

export default function Home() {
  const [isMetricsOpen, setIsMetricsOpen] = useState(false);
  const { messages, input, setInput, loading, error, metrics, handleSubmit, clearConversation } =
    useChatDashboard();

  useEffect(() => {
    if (!isMetricsOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMetricsOpen]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_30%),linear-gradient(180deg,_#06101d_0%,_#081524_38%,_#040b14_100%)] text-slate-100">
      <main className="mx-auto flex h-screen w-full max-w-[1280px] flex-col overflow-hidden px-4 pb-28 pt-0 sm:px-6 md:px-8 md:pb-32 md:pt-8">
        <ChatHeader
          onClearConversation={clearConversation}
          onToggleMetrics={() => setIsMetricsOpen((previous) => !previous)}
          metricsOpen={isMetricsOpen}
        />

        <div className={`fixed inset-0 z-40 md:hidden ${isMetricsOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
          <button
            type="button"
            aria-label="Cerrar panel de metricas"
            onClick={() => setIsMetricsOpen(false)}
            className={`absolute inset-0 bg-slate-950/65 transition-opacity duration-300 ${isMetricsOpen ? "opacity-100" : "opacity-0"}`}
          />

          <aside
            className={`relative h-full w-[min(86vw,320px)] border-r border-white/10 bg-slate-950/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-transform duration-300 ${isMetricsOpen ? "translate-x-0" : "-translate-x-full"}`}
            aria-hidden={!isMetricsOpen}
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Metricas</h2>
              <button
                type="button"
                aria-label="Cerrar metricas"
                onClick={() => setIsMetricsOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-200 transition hover:border-white/20 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-blue-300/40"
              >
                <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
            <div className="hide-scrollbar h-[calc(100%-3.5rem)] overflow-y-auto pr-1">
              <StatsPanel metrics={metrics} />
            </div>
          </aside>
        </div>

        <section className="mt-6 flex min-h-0 flex-1 flex-col gap-4 overflow-hidden md:flex-row md:items-stretch md:gap-6">
          <div className="hidden md:block">
            <StatsPanel metrics={metrics} />
          </div>
          <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
            <ChatWindow messages={messages} loading={loading} error={error} />
          </div>
        </section>
        <ChatInput input={input} loading={loading} onChange={setInput} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
