"use client"

import { useApp } from "./app-context"

export function ProfileSection() {
  const { userProfile, learningStreak, questionsAnswered, topicsMastered, history, setIsLoggedIn, setCurrentMainTab } = useApp()

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (!userProfile) return null

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 pb-8">
      <h1 className="text-4xl font-bold text-blue-100 mb-8">👤 Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
            <h2 className="text-2xl font-bold text-blue-100 mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400">Full Name</label>
                <p className="text-lg text-slate-100 font-semibold">{userProfile.name}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Email</label>
                <p className="text-lg text-slate-100">{userProfile.email}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Role</label>
                <p className="text-lg text-slate-100">
                  {userProfile.role === "student" ? "🎓 Student" : "💼 IT Professional"}
                </p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Purpose</label>
                <p className="text-lg text-slate-100 capitalize">{userProfile.purpose}</p>
              </div>
              <div>
                <label className="text-sm text-slate-400">Member Since</label>
                <p className="text-lg text-slate-100">{new Date(userProfile.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Learning Stats */}
          <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
            <h2 className="text-2xl font-bold text-blue-100 mb-6">Learning Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30">
                <p className="text-3xl font-bold text-orange-400">{learningStreak}</p>
                <p className="text-sm text-slate-400 mt-1">Day Streak</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30">
                <p className="text-3xl font-bold text-green-400">{questionsAnswered}</p>
                <p className="text-sm text-slate-400 mt-1">Questions</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border border-yellow-500/30">
                <p className="text-3xl font-bold text-yellow-400">{topicsMastered}</p>
                <p className="text-sm text-slate-400 mt-1">Topics</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
            <h2 className="text-2xl font-bold text-blue-100 mb-4">Recent Activity</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {history.slice(-5).reverse().map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-700/30 border border-slate-600/30">
                  <p className="text-blue-300 font-semibold capitalize">{item.type.replace('_', ' ')}</p>
                  <p className="text-slate-400 text-sm">{new Date(item.timestamp).toLocaleString()}</p>
                </div>
              ))}
              {history.length === 0 && (
                <p className="text-slate-400 text-center py-4">No activity yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
            <h2 className="text-xl font-bold text-blue-100 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button onClick={() => setCurrentMainTab("dashboard")} className="w-full px-4 py-3 rounded-lg bg-blue-600/50 border border-blue-500/60 text-blue-100 hover:bg-blue-600/70 transition-all">
                📊 View Dashboard
              </button>
              <button onClick={() => setCurrentMainTab("subjects")} className="w-full px-4 py-3 rounded-lg bg-purple-600/50 border border-purple-500/60 text-purple-100 hover:bg-purple-600/70 transition-all">
                📚 Browse Subjects
              </button>
              <button onClick={() => setCurrentMainTab("history")} className="w-full px-4 py-3 rounded-lg bg-green-600/50 border border-green-500/60 text-green-100 hover:bg-green-600/70 transition-all">
                📈 View History
              </button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-red-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(10px)" }}>
            <h2 className="text-xl font-bold text-red-100 mb-4">Account</h2>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 rounded-lg bg-red-600/50 border border-red-500/60 text-red-100 hover:bg-red-600/70 transition-all"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
