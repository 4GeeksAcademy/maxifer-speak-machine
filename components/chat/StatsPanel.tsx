import { formatResponseTime } from "./chatUtils";
import { UsageMetrics } from "./types";
import { MetricCard } from "./MetricCard";

interface StatsPanelProps {
  metrics: UsageMetrics;
}

export function StatsPanel({ metrics }: StatsPanelProps) {
  return (
    <section className="flex flex-col gap-3 md:sticky md:top-24 md:w-[320px] md:shrink-0 md:gap-4 md:overflow-y-auto md:hide-scrollbar">
      <MetricCard
        label="Prompt tokens"
        value={metrics.promptTokens.toString()}
        hint="Acumulado de entrada"
      />
      <MetricCard
        label="Completion tokens"
        value={metrics.completionTokens.toString()}
        hint="Acumulado de salida"
      />
      <MetricCard label="Total tokens" value={metrics.totalTokens.toString()} hint="Consumo total" />
      <MetricCard label="Modelo" value={metrics.lastModel} hint="Ultima respuesta" />
      <MetricCard
        label="Tiempo"
        value={formatResponseTime(metrics.lastResponseTimeMs)}
        hint="Latencia medida"
      />
    </section>
  );
}