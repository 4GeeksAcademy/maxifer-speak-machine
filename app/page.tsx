"use client";

import { ChatHeader } from "../components/chat/ChatHeader";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatSidebar } from "../components/chat/ChatSidebar";
import { ChatWindow } from "../components/chat/ChatWindow";
import { StatsPanel } from "../components/chat/StatsPanel";
import { useChatDashboard } from "../components/chat/useChatDashboard";

export default function Home() {
  const { messages, input, setInput, loading, error, metrics, handleSubmit, clearConversation } =
    useChatDashboard();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_30%),linear-gradient(180deg,_#06101d_0%,_#081524_38%,_#040b14_100%)] text-slate-100">
      <ChatSidebar
        messageCount={messages.length}
        loading={loading}
        onClearConversation={clearConversation}
      />
      <main className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-4 pb-36 pt-6 sm:px-6 md:ml-[280px] md:px-8 md:pt-8">
        <ChatHeader onClearConversation={clearConversation} />
        <StatsPanel metrics={metrics} />
        <ChatWindow messages={messages} loading={loading} error={error} />
        <ChatInput input={input} loading={loading} onChange={setInput} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
