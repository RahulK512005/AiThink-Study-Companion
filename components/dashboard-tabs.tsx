"use client"

import { useApp } from "./app-context"

const subTabs = [
  { id: "chat", label: "Chat with AI", icon: "💬" },
  { id: "quiz", label: "Quiz", icon: "✅" },
  { id: "explain", label: "Explain Topic", icon: "📖" },
  { id: "practice", label: "Practice Problems", icon: "🎯" },
  { id: "progress", label: "Progress", icon: "📊" },
]

export function DashboardTabs() {
  const { currentDashboardSubTab, setCurrentDashboardSubTab } = useApp()

  return (
    <div
      className="flex gap-2 mb-6 overflow-x-auto pb-2 border-b border-blue-500/20"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      {subTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setCurrentDashboardSubTab(tab.id as any)}
          className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all text-sm font-medium ${
            currentDashboardSubTab === tab.id
              ? "bg-gradient-to-r from-blue-600/50 to-blue-500/40 text-blue-100 border border-blue-500/60"
              : "text-slate-300 hover:bg-blue-500/20 border border-transparent hover:border-blue-500/30"
          }`}
          style={
            currentDashboardSubTab === tab.id ? { boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.4)" } : undefined
          }
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  )
}
