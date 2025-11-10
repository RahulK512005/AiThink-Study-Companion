"use client"

import { useApp } from "./app-context"
import { DashboardTabs } from "./dashboard-tabs"
import { ChatTab } from "./chat-tab"
import { QuizTab } from "./quiz-tab"
import { ExplainTab } from "./explain-tab"
import { PracticeTab } from "./practice-tab"
import { ProgressTab } from "./progress-tab"
import { StatsGrid } from "./stats-grid"

export function DashboardSection() {
  const { currentDashboardSubTab, selectedModel, setSelectedModel } = useApp()

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 pb-8">
      {/* Header with model selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-blue-100">Learning Dashboard</h1>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="px-4 py-2 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white"
          style={{
            backgroundColor: "rgb(30 41 59 / 0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <option value="gemma3:1b">Gemma 3 1B (Recommended)</option>
          <option value="qwen2.5:0.5b">Qwen 2.5 0.5B</option>
          <option value="tinyllama">TinyLlama</option>
        </select>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Sub-tabs */}
      <DashboardTabs />

      <div className="mt-6">
        {currentDashboardSubTab === "chat" && <ChatTab />}
        {currentDashboardSubTab === "quiz" && <QuizTab />}
        {currentDashboardSubTab === "explain" && <ExplainTab />}
        {currentDashboardSubTab === "practice" && <PracticeTab />}
        {currentDashboardSubTab === "progress" && <ProgressTab />}
      </div>
    </div>
  )
}
