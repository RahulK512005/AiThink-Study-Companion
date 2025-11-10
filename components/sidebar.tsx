"use client"

import { useApp } from "./app-context"

const menuItems = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "subjects", label: "Subjects", icon: "📚" },
  { id: "history", label: "Learning History", icon: "📈" },
  { id: "profile", label: "Profile", icon: "👤" },
]

export function Sidebar() {
  const { currentMainTab, setCurrentMainTab, sidebarOpen, setSidebarOpen } = useApp()

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-lg border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300"
        style={{
          backgroundColor: "var(--glass-bg)",
          borderColor: "rgb(59 130 246 / 0.3)",
          backdropFilter: "blur(20px)",
        }}
      >
        <span className="text-xl">☰</span>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen transition-all duration-300 ease-out z-30 ${sidebarOpen ? "w-64" : "w-0 md:w-20"} overflow-hidden`}
      >
        <div
          className="h-full border-r border-blue-500/20 p-4 flex flex-col bg-gradient-to-b from-blue-950/20 to-slate-900/30"
          style={{
            backgroundColor: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Logo */}
          <div className="mb-8 flex items-center gap-3 px-2">
            <div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold"
              style={{ boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.4)" }}
            >
              AI
            </div>
            {sidebarOpen && <span className="font-bold text-lg text-slate-100">AiThink</span>}
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentMainTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-smooth text-sm font-medium ${
                  currentMainTab === item.id
                    ? "bg-gradient-to-r from-blue-600/50 to-blue-500/40 text-blue-100 border border-blue-500/60"
                    : "text-slate-300 hover:bg-blue-500/20 border border-transparent hover:border-blue-500/30"
                }`}
                style={currentMainTab === item.id ? { boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.4)" } : undefined}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Footer status */}
          <div className={`pt-4 border-t border-blue-500/20 ${!sidebarOpen && "md:hidden"}`}>
            <div className={`flex items-center gap-2 text-xs text-slate-400 ${!sidebarOpen && "md:flex-col md:gap-1"}`}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {sidebarOpen && <span>Offline Ready</span>}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  )
}
