"use client"

import * as React from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Menu } from "lucide-react"

interface SidebarLayoutProps {
  children: React.ReactNode
  currentSection: number
  onSectionChange: (section: number) => void
}

export function SidebarLayout({ children, currentSection, onSectionChange }: SidebarLayoutProps) {
  // Control sidebar state only for desktop to keep it collapsed on initial load
  // On mobile, SidebarProvider manages its own openMobile state independently
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  
  React.useEffect(() => {
    setIsMounted(true)
    // Only clear cookie on desktop to ensure sidebar starts collapsed
    // On mobile, the SidebarProvider handles its own state via openMobile
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 1024
      if (!isMobile) {
        // Clear cookie to ensure desktop sidebar starts collapsed
        document.cookie = 'sidebar_state=; path=/; max-age=0'
      }
    }
  }, [])

  // Don't pass controlled props on mobile - let SidebarProvider manage openMobile internally
  // On desktop, we control it to ensure it starts collapsed
  const isMobile = isMounted && typeof window !== 'undefined' && window.innerWidth < 1024

  return (
    <SidebarProvider 
      // Only control on desktop, let mobile manage internally
      {...(isMounted && !isMobile ? {
        open: sidebarOpen,
        onOpenChange: setSidebarOpen
      } : {})}
      defaultOpen={false}
    >
      <AppSidebar currentSection={currentSection} onSectionChange={onSectionChange} />
      <SidebarInset>
        {/* Mobile Header with Menu Button */}
        <div className="sticky top-0 z-50 flex items-center gap-3 px-4 py-3 border-b bg-white shadow-sm lg:hidden">
          <SidebarTrigger className="data-[state=open]:bg-accent">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle sidebar</span>
          </SidebarTrigger>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <div>
              <h2 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                AI Supervisor
              </h2>
            </div>
          </div>
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

