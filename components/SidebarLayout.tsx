"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"

interface SidebarLayoutProps {
  children: React.ReactNode
  currentSection: number
  onSectionChange: (section: number) => void
}

export function SidebarLayout({ children, currentSection, onSectionChange }: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar currentSection={currentSection} onSectionChange={onSectionChange} />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

