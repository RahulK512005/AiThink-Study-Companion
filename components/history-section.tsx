"use client"

import { useApp } from "./app-context"

export function HistorySection() {
  const { history } = useApp()

  const getActivityIcon = (type: string) => {
    switch(type) {
      case 'subject_learning': return '📚'
      case 'subject_question': return '❓'
      case 'quiz': return '📝'
      case 'quiz_completed': return '✅'
      case 'explain': return '💡'
      case 'practice': return '🎯'
      case 'practice_answer': return '✏️'
      default: return '📌'
    }
  }

  const getActivityTitle = (type: string) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const groupByDate = () => {
    const grouped: Record<string, any[]> = {}
    history.forEach(item => {
      const date = new Date(item.timestamp).toLocaleDateString()
      if (!grouped[date]) grouped[date] = []
      grouped[date].push(item)
    })
    return grouped
  }

  const groupedHistory = groupByDate()

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 pb-8">
      <h1 className="text-4xl font-bold text-blue-100 mb-8">Learning History</h1>

      {history.length === 0 ? (
        <div className="p-12 rounded-lg border border-blue-500/20 text-center" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
          <p className="text-slate-400 text-lg">No learning history yet. Start learning to see your progress!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.keys(groupedHistory).reverse().map(date => (
            <div key={date} className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
              <h2 className="text-xl font-bold text-blue-100 mb-4">{date}</h2>
              <div className="space-y-3">
                {groupedHistory[date].reverse().map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getActivityIcon(item.type)}</span>
                      <div className="flex-1">
                        <p className="text-blue-300 font-semibold">{getActivityTitle(item.type)}</p>
                        <div className="text-slate-400 text-sm mt-1">
                          {item.data.level && <span>Level: {item.data.level} • </span>}
                          {item.data.domain && item.data.domain !== 'N/A' && <span>Domain: {item.data.domain} • </span>}
                          {item.data.subject && <span>Subject: {item.data.subject}</span>}
                          {item.data.topic && <span>Topic: {item.data.topic}</span>}
                          {item.data.question && <p className="mt-1">Question: {item.data.question}</p>}
                          {item.data.score !== undefined && <p className="mt-1 text-green-400">Score: {item.data.score}/{item.data.total}</p>}
                          {item.data.model && <p className="mt-1">Model: {item.data.model}</p>}
                        </div>
                        <p className="text-slate-500 text-xs mt-2">{new Date(item.timestamp).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
