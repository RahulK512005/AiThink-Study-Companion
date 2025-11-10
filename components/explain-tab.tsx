"use client"

import { useState, useEffect } from "react"
import { useApp } from "./app-context"
import { explainTopic } from "@/lib/ollama"

export function ExplainTab() {
  const { isLoading, setIsLoading, selectedModel, updateStats, addToHistory } = useApp()
  const [topic, setTopic] = useState("")
  const [explanation, setExplanation] = useState("")

  const loadExplanation = async () => {
    if (!topic.trim()) return
    setIsLoading(true)
    try {
      const result = await explainTopic(topic, selectedModel)
      setExplanation(result.output)
      updateStats()
      addToHistory('explain', { topic })
    } catch (error) {
      setExplanation("Failed to load explanation.")
    }
    setIsLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic to explain..."
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white"
        />
        <button
          onClick={loadExplanation}
          disabled={isLoading || !topic.trim()}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium disabled:opacity-50"
        >
          {isLoading ? "Loading..." : "Explain"}
        </button>
      </div>

      {explanation && (
        <div
          className="p-6 rounded-lg border border-blue-500/20 text-slate-300 leading-relaxed"
          style={{
            backgroundColor: "var(--glass-bg)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p>{explanation}</p>
        </div>
      )}
    </div>
  )
}
