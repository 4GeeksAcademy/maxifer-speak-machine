import { formatResponseTime } from "./chatUtils";
import { UsageMetrics } from "./types";
import { MetricCard } from "./MetricCard";

interface StatsPanelProps {
  metrics: UsageMetrics;
}

export function StatsPanel({ metrics }: StatsPanelProps) {
  return (
    <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
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