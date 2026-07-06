import { ChatMessage } from "./types";

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const badgeClass = isUser
    ? "border-blue-400/30 bg-blue-500/20 text-blue-100"
    : "border-cyan-400/20 bg-slate-800 text-cyan-200";
  const bubbleClass = isUser
    ? "rounded-br-md border-blue-400/30 bg-blue-500/15 text-blue-50"
    : "rounded-bl-md border-white/10 bg-slate-800/90 text-slate-100";

  return (
    <div className={`flex flex-col gap-2 ${isUser ? "items-end" : "items-start"}`}>
      <div className={`flex items-center gap-2 px-1 text-xs uppercase tracking-[0.2em] text-slate-400 ${isUser ? "flex-row-reverse" : ""}`}>
        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border ${badgeClass}`}>
          {isUser ? "U" : "AI"}
        </span>
        <span>{isUser ? "Usuario" : "Asistente"}</span>
      </div>
      <div className={`max-w-[88%] rounded-3xl px-5 py-4 text-sm leading-7 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-base ${bubbleClass}`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}