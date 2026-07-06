import { ChatMessage, ChatRole, UsageMetrics } from "./types";

export const STORAGE_MESSAGES_KEY = "maxifer-chat-messages";
export const STORAGE_METRICS_KEY = "maxifer-chat-metrics";

export const INITIAL_METRICS: UsageMetrics = {
  promptTokens: 0,
  completionTokens: 0,
  totalTokens: 0,
  lastModel: "Sin consultas",
  lastResponseTimeMs: 0,
};

export function createMessage(role: ChatRole, content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
  };
}

export function formatResponseTime(responseTimeMs: number): string {
  if (!responseTimeMs) {
    return "--";
  }

  return `${(responseTimeMs / 1000).toFixed(2)}s`;
}

export function readStoredMessages(): ChatMessage[] {
  const savedMessages = window.localStorage.getItem(STORAGE_MESSAGES_KEY);

  if (!savedMessages) {
    return [];
  }

  try {
    const parsedMessages = JSON.parse(savedMessages) as unknown;
    return Array.isArray(parsedMessages) ? (parsedMessages as ChatMessage[]) : [];
  } catch {
    window.localStorage.removeItem(STORAGE_MESSAGES_KEY);
    return [];
  }
}

export function readStoredMetrics(): UsageMetrics {
  const savedMetrics = window.localStorage.getItem(STORAGE_METRICS_KEY);

  if (!savedMetrics) {
    return INITIAL_METRICS;
  }

  try {
    return { ...INITIAL_METRICS, ...(JSON.parse(savedMetrics) as Partial<UsageMetrics>) };
  } catch {
    window.localStorage.removeItem(STORAGE_METRICS_KEY);
    return INITIAL_METRICS;
  }
}
