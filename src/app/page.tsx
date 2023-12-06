"use client";
import Logo from "@/components/logo";
import { useChat } from "ai/react";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="pt-4 pb-32 text-inherit dark:text-inherit">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`dark:text-inherit text-inherit border-t border-black/10 ${
            message.role === "assistant" && "bg-inherit"
          }`}
        >
          <div className="max-w-3xl mx-auto py-6 flex">
            {message.role === "assistant" && <Logo />}
            <span className="ml-3">{message.content}</span>
          </div>
        </div>
      ))}

      <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
        <input
          className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background"
          placeholder="Send a message"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
