"use client"

import { useState } from "react"
import { useApp } from "./app-context"
import { queryOllama } from "@/lib/ollama"

export function ChatTab() {
  const { messages, addMessage, isLoading, setIsLoading, selectedModel } = useApp()
  const [userInput, setUserInput] = useState("")

  const handleSend = async () => {
    if (!userInput.trim() || isLoading) return

    addMessage("user", userInput)
    setUserInput("")
    setIsLoading(true)

    try {
      const aiResponse = await queryOllama(userInput, selectedModel)
      addMessage("assistant", aiResponse.output || "No response")
    } catch (error) {
      addMessage("assistant", "Sorry, I couldn't process that. Please try again.")
      console.error("[v0] Chat error:", error)
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-[600px] gap-4">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400 text-center">
            <p>Start a conversation...</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.role === "user" ? "bg-blue-600/50 text-blue-100" : "bg-slate-700/50 text-slate-100"
                }`}
                style={{
                  backgroundColor: msg.role === "user" ? "rgb(37 99 235 / 0.5)" : "rgb(55 65 81 / 0.5)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div
              className="px-4 py-2 rounded-lg animate-pulse"
              style={{
                backgroundColor: "rgb(55 65 81 / 0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-sm text-slate-300">AI thinking...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about the topic..."
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/60 transition-all"
          style={{
            backgroundColor: "rgb(30 41 59 / 0.5)",
            backdropFilter: "blur(10px)",
          }}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !userInput.trim()}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 transition-all"
          style={{
            boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.4)",
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}
