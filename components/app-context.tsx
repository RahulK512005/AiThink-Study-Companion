"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export type MainTab = "home" | "dashboard" | "subjects" | "history" | "profile" | "documentation"

export type DashboardSubTab = "chat" | "quiz" | "explain" | "practice" | "progress"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface UserProfile {
  name: string
  email: string
  role: "student" | "professional"
  purpose: string
  joinedDate: string
}

interface AppContextType {
  // Main tabs
  currentMainTab: MainTab
  setCurrentMainTab: (tab: MainTab) => void

  // Dashboard sub-tabs
  currentDashboardSubTab: DashboardSubTab
  setCurrentDashboardSubTab: (subTab: DashboardSubTab) => void

  // UI state
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void

  // Chat/Ollama state
  messages: Message[]
  addMessage: (role: "user" | "assistant", content: string) => void
  clearMessages: () => void

  // Selected subject/topic
  selectedTopic: string
  setSelectedTopic: (topic: string) => void

  // Loading state
  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  // Selected model
  selectedModel: string
  setSelectedModel: (model: string) => void

  // Stats
  learningStreak: number
  questionsAnswered: number
  topicsMastered: number
  updateStats: () => void

  // History
  history: any[]
  addToHistory: (type: string, data: any) => void

  // Auth
  isLoggedIn: boolean
  setIsLoggedIn: (loggedIn: boolean) => void
  userProfile: UserProfile | null
  setUserProfile: (profile: UserProfile) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [currentMainTab, setCurrentMainTab] = useState<MainTab>("home")
  const [currentDashboardSubTab, setCurrentDashboardSubTab] = useState<DashboardSubTab>("chat")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedTopic, setSelectedTopic] = useState("JavaScript")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("gemma3:1b")
  const [learningStreak, setLearningStreak] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [topicsMastered, setTopicsMastered] = useState(0)
  const [history, setHistory] = useState<any[]>([])
  const [lastActivityDate, setLastActivityDate] = useState<string | null>(null)

  const updateStats = () => {
    const today = new Date().toDateString()
    
    if (lastActivityDate !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toDateString()
      
      if (lastActivityDate === yesterdayStr) {
        setLearningStreak(prev => prev + 1)
      } else if (lastActivityDate === null) {
        setLearningStreak(1)
      } else {
        setLearningStreak(1)
      }
      
      setLastActivityDate(today)
    }
    
    setQuestionsAnswered(prev => prev + 1)
  }

  const addToHistory = (type: string, data: any) => {
    setHistory(prev => [...prev, { type, data, timestamp: new Date() }])
  }

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages((prev) => [...prev, { id: `msg-${Date.now()}`, role, content, timestamp: new Date() }])
  }

  const clearMessages = () => setMessages([])

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userProfile,
        setUserProfile,
        currentMainTab,
        setCurrentMainTab,
        currentDashboardSubTab,
        setCurrentDashboardSubTab,
        sidebarOpen,
        setSidebarOpen,
        messages,
        addMessage,
        clearMessages,
        selectedTopic,
        setSelectedTopic,
        isLoading,
        setIsLoading,
        selectedModel,
        setSelectedModel,
        learningStreak,
        questionsAnswered,
        topicsMastered,
        updateStats,
        history,
        addToHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}
