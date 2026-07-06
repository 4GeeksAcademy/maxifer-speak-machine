import { FormEvent, useEffect, useRef, useState } from "react";
import {
  createMessage,
  INITIAL_METRICS,
  readStoredMessages,
  readStoredMetrics,
  STORAGE_MESSAGES_KEY,
  STORAGE_METRICS_KEY,
} from "./chatUtils";
import { ChatMessage, ChatResponse, UsageMetrics } from "./types";

export function useChatDashboard() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [metrics, setMetrics] = useState<UsageMetrics>(INITIAL_METRICS);
  const hydratedRef = useRef(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMessages(readStoredMessages());
      setMetrics(readStoredMetrics());
      hydratedRef.current = true;
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (hydratedRef.current) {
      window.localStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (hydratedRef.current) {
      window.localStorage.setItem(STORAGE_METRICS_KEY, JSON.stringify(metrics));
    }
  }, [metrics]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedInput = input.trim();

    if (!trimmedInput || loading) {
      return;
    }

    const userMessage = createMessage("user", trimmedInput);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = (await response.json()) as ChatResponse;

      if (!response.ok || typeof data.text !== "string" || data.text.length === 0) {
        throw new Error(data.error || "No se pudo obtener respuesta del modelo.");
      }

      const assistantText = data.text;

      setMessages((current) => [...current, createMessage("assistant", assistantText)]);
      setMetrics((current) => ({
        promptTokens: current.promptTokens + (data.usage?.prompt_tokens ?? 0),
        completionTokens: current.completionTokens + (data.usage?.completion_tokens ?? 0),
        totalTokens: current.totalTokens + (data.usage?.total_tokens ?? 0),
        lastModel: data.model ?? current.lastModel,
        lastResponseTimeMs: data.responseTimeMs ?? 0,
      }));
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  function clearConversation() {
    setMessages([]);
    setInput("");
    setError("");
    setLoading(false);
    setMetrics(INITIAL_METRICS);
    window.localStorage.removeItem(STORAGE_MESSAGES_KEY);
    window.localStorage.removeItem(STORAGE_METRICS_KEY);
  }

  return { messages, input, setInput, loading, error, metrics, handleSubmit, clearConversation };
}
