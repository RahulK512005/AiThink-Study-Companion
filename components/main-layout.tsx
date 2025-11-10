"use client"

import { AppProvider, useApp } from "./app-context"
import { Sidebar } from "./sidebar"
import { HeroSection } from "./hero-section"
import { DashboardSection } from "./dashboard-section"
import { SubjectsSection } from "./subjects-section"
import { HistorySection } from "./history-section"
import { DocumentationSection } from "./documentation-section"
import { ProfileSection } from "./profile-section"
import { LoginSection } from "./login-section"

function LayoutContent() {
  const { currentMainTab, sidebarOpen, isLoggedIn } = useApp()

  if (!isLoggedIn) {
    return <LoginSection />
  }

  return (
    <div className="w-full bg-background text-foreground transition-all duration-300">
      <Sidebar />

      {/* Main content area */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
        {currentMainTab === "home" && <HeroSection />}
        {currentMainTab === "dashboard" && <DashboardSection />}
        {currentMainTab === "subjects" && <SubjectsSection />}
        {currentMainTab === "history" && <HistorySection />}
        {currentMainTab === "documentation" && <DocumentationSection />}
        {currentMainTab === "profile" && <ProfileSection />}
      </div>
    </div>
  )
}

export function MainLayout() {
  return (
    <AppProvider>
      <LayoutContent />
    </AppProvider>
  )
}
