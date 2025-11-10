"use client"

import { useState } from "react"
import { useApp } from "./app-context"

export function LoginSection() {
  const { setIsLoggedIn, setUserProfile } = useApp()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<"student" | "professional" | "">("")
  const [purpose, setPurpose] = useState("academic")

  const handleLogin = () => {
    if (!name.trim() || !email.trim() || !role) return
    
    setUserProfile({
      name,
      email,
      role,
      purpose,
      joinedDate: new Date().toISOString()
    })
    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl" style={{ boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.4)" }}>
              AI
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AiThink
            </h1>
          </div>
          <p className="text-slate-400">AI-Powered Learning Platform</p>
        </div>

        {/* Login Form */}
        <div className="p-8 rounded-2xl border border-blue-500/20" style={{ backgroundColor: "var(--glass-bg)", backdropFilter: "blur(20px)" }}>
          <h2 className="text-2xl font-bold text-blue-100 mb-6 text-center">Welcome Back!</h2>
          
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/60"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/60"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">I am a</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setRole("student")}
                  className={`px-4 py-3 rounded-lg border transition-all ${
                    role === "student"
                      ? "bg-blue-600/50 border-blue-500/60 text-blue-100"
                      : "bg-slate-800/30 border-slate-600/30 text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  🎓 Student
                </button>
                <button
                  onClick={() => setRole("professional")}
                  className={`px-4 py-3 rounded-lg border transition-all ${
                    role === "professional"
                      ? "bg-blue-600/50 border-blue-500/60 text-blue-100"
                      : "bg-slate-800/30 border-slate-600/30 text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  💼 IT Professional
                </button>
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Purpose</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/30 text-white focus:outline-none focus:border-blue-500/60"
              >
                <option value="academic">Academic Learning</option>
                <option value="skill">Skill Development</option>
                <option value="exam">Exam Preparation</option>
                <option value="research">Research</option>
              </select>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={!name.trim() || !email.trim() || !role}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-6"
              style={{ boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.4)" }}
            >
              Start Learning
            </button>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            By continuing, you agree to use AiThink for educational purposes
          </p>
        </div>
      </div>
    </div>
  )
}
