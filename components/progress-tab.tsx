"use client"

import { useApp } from "./app-context"

export function ProgressTab() {
  const { history, learningStreak, questionsAnswered, topicsMastered } = useApp()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <p className="text-slate-400 text-sm">Learning Streak</p>
          <p className="text-3xl font-bold text-blue-100">{learningStreak} days</p>
        </div>
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <p className="text-slate-400 text-sm">Questions Answered</p>
          <p className="text-3xl font-bold text-green-100">{questionsAnswered}</p>
        </div>
        <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <p className="text-slate-400 text-sm">Topics Mastered</p>
          <p className="text-3xl font-bold text-yellow-100">{topicsMastered}</p>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
        <h3 className="text-xl font-bold text-blue-100 mb-4">Activity History</h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {history.length === 0 ? (
            <p className="text-slate-400 text-center py-8">No activity yet. Start learning to see your progress!</p>
          ) : (
            history.slice().reverse().map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-300 font-semibold capitalize">{item.type.replace('_', ' ')}</p>
                    <p className="text-slate-400 text-sm">{item.data.topic || 'General'}</p>
                  </div>
                  <p className="text-slate-500 text-xs">{new Date(item.timestamp).toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
