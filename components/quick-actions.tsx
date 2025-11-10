"use client"

import { useState } from "react"

const actions = [
  { id: 1, title: "Generate Questions", icon: "❓", color: "from-blue-600 to-blue-500" },
  { id: 2, title: "Explain Topic", icon: "📝", color: "from-purple-600 to-purple-500" },
  { id: 3, title: "Practice Problems", icon: "🎯", color: "from-cyan-600 to-cyan-500" },
  { id: 4, title: "Summarize", icon: "📋", color: "from-pink-600 to-pink-500" },
  { id: 5, title: "Create Flashcards", icon: "🃏", color: "from-orange-600 to-orange-500" },
  { id: 6, title: "Essay Feedback", icon: "✍️", color: "from-green-600 to-green-500" },
]

export function QuickActions() {
  const [selectedAction, setSelectedAction] = useState<number | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const handleAction = (actionId: number) => {
    setSelectedAction(actionId)
    const action = actions.find((a) => a.id === actionId)
    if (action) {
      setResult(
        `Processing: ${action.title}...\n\nSimulation: Your AI tutor is preparing customized ${action.title.toLowerCase()} based on your learning progress.`,
      )
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => handleAction(action.id)}
          className="group relative rounded-xl border border-blue-500/20 p-6 hover:border-blue-500/60 transition-all duration-300 text-left overflow-hidden"
          style={{
            backgroundColor: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          <div className="relative z-10">
            <div className="text-4xl mb-3">{action.icon}</div>
            <h3 className="font-semibold text-white mb-1">{action.title}</h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Click to get started</p>
          </div>

          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity -z-10`}
          />
        </button>
      ))}

      {/* Result area */}
      {result && (
        <div className="lg:col-span-3 mt-8 animate-scale-in">
          <div
            className="rounded-xl border border-blue-500/30 p-6 bg-gradient-to-br from-blue-950/40 to-slate-900/50"
            style={{
              backgroundColor: "var(--glass-bg)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 10px 25px -5px rgb(165 180 252 / 0.4)",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">{actions.find((a) => a.id === selectedAction)?.title}</h4>
                <p className="text-slate-300 whitespace-pre-line text-sm leading-relaxed">{result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
