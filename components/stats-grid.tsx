"use client"

import { useApp } from "./app-context"

export function StatsGrid() {
  const { learningStreak, questionsAnswered, topicsMastered } = useApp()

  const stats = [
    { label: "Learning Streak", value: `${learningStreak} days`, icon: "🔥", color: "from-orange-600 to-red-600" },
    { label: "Topics Mastered", value: topicsMastered.toString(), icon: "⭐", color: "from-yellow-600 to-orange-600" },
    { label: "Questions Answered", value: questionsAnswered.toString(), icon: "✓", color: "from-green-600 to-emerald-600" },
    { label: "Accuracy Rate", value: "--", icon: "🎯", color: "from-blue-600 to-cyan-600" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="group rounded-xl border border-blue-500/20 p-6 hover:border-blue-500/60 transition-all duration-300 overflow-hidden relative hover:shadow-xl"
          style={{
            backgroundColor: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{stat.icon}</span>
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-40 transition-all`}
              />
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>

          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity -z-10`}
          />
        </div>
      ))}
    </div>
  )
}
