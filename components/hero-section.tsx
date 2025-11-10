"use client"

import { useState, useEffect } from "react"
import { useApp } from "./app-context"
import { NeuralNetworkCanvas } from "./neural-network-canvas"

export function HeroSection() {
  const { setCurrentMainTab, setCurrentDashboardSubTab } = useApp()
  const [displayText, setDisplayText] = useState("")
  const fullText = "AI Study Companion"
  const [index, setIndex] = useState(0)

  const handleStartLearning = () => {
    setCurrentMainTab("dashboard")
    setCurrentDashboardSubTab("chat")
  }

  const handleViewDocs = () => {
    setCurrentMainTab("documentation")
  }

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetworkCanvas />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="absolute inset-0 -z-10 blur-3xl">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/25 rounded-full mix-blend-multiply filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/25 rounded-full mix-blend-multiply filter blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Main heading with typing effect */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              {displayText}
            </span>
            <span className="text-blue-400 animate-pulse ml-2">|</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed text-pretty">
            Premium AI educational platform with offline Ollama integration
          </p>
          <p className="text-sm md:text-base text-slate-400 mt-3">
            Interactive 3D learning experience powered by neural networks
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button onClick={handleStartLearning} className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
            <span className="relative z-10 flex items-center gap-2">
              Start Learning
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-40 blur-xl transition-opacity -z-10" />
          </button>

          <button
            onClick={handleViewDocs}
            className="px-8 py-4 text-slate-100 font-semibold rounded-lg transition-all duration-300 border hover:bg-slate-800/50"
            style={{
              backgroundColor: "var(--glass-bg)",
              borderColor: "var(--glass-border)",
              backdropFilter: "blur(20px)",
            }}
          >
            View Documentation
          </button>
        </div>

        {/* Feature badges */}
        <div
          className="mt-16 flex flex-wrap gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          {["Offline First", "3D Interface", "AI Powered", "Real-time"].map((badge, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-full text-sm text-slate-200 border transition-all duration-300"
              style={{
                backgroundColor: "var(--glass-bg)",
                borderColor: "var(--glass-border)",
                backdropFilter: "blur(20px)",
              }}
            >
              ✓ {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-blue-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}
