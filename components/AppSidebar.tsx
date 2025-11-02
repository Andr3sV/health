"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  FileText,
  Sparkles,
  Building2,
  Home,
  ChevronRight,
  Search,
  TrendingUp,
  BarChart3,
  Shield,
  Map,
  Target,
  Globe,
  DollarSign,
  Lightbulb
} from "lucide-react"
import { cn } from "@/lib/utils"

const deliverables = [
  {
    id: 0,
    title: "Executive Summary",
    icon: Home,
    description: "Overview and value proposition",
  },
  {
    id: 1,
    title: "Agentic AI Vision",
    icon: Sparkles,
    description: "Why Agentic AI vs traditional",
  },
  {
    id: 2,
    title: "Solution and Features",
    icon: Building2,
    description: "Solution design and key features",
  },
  {
    id: 3,
    title: "User Research",
    icon: Search,
    description: "Research strategy and workflow optimization",
  },
  {
    id: 4,
    title: "Why Agentic AI",
    icon: TrendingUp,
    description: "Superior to traditional automation",
  },
  {
    id: 5,
    title: "Success Metrics",
    icon: BarChart3,
    description: "KPIs and performance indicators",
  },
  {
    id: 6,
    title: "Risk Mitigation",
    icon: Shield,
    description: "Risk management and mitigation strategies",
  },
  {
    id: 7,
    title: "Phase Roadmap",
    icon: Map,
    description: "MVP through Phase 7 implementation plan",
  },
]

const bonusSections = [
  {
    id: 8,
    title: "Success Factors",
    icon: Target,
    description: "Critical success factors and assumptions",
  },
  {
    id: 9,
    title: "Reflections on AI",
    icon: Lightbulb,
    description: "Project reflections and AI implementation principles",
  },
  {
    id: 10,
    title: "Market Benchmark",
    icon: Globe,
    description: "Competitive analysis and market comparison",
  },
  {
    id: 11,
    title: "Financial Justification",
    icon: DollarSign,
    description: "ROI analysis and financial justification",
  },
]

const allSections = [...deliverables, ...bonusSections]

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentSection: number
  onSectionChange: (section: number) => void
}

export function AppSidebar({ currentSection, onSectionChange, ...props }: AppSidebarProps) {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar()

  // In mobile, always show expanded content when Sheet is open
  // In desktop, use the state (expanded/collapsed)
  const isExpanded = isMobile ? openMobile : state === "expanded"

  const handleSectionChange = (sectionId: number) => {
    onSectionChange(sectionId)
    // Close sidebar on mobile after selection
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b">
        {isExpanded ? (
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent truncate">
                  AI Supervisor
                </h2>
                <p className="text-xs text-muted-foreground truncate">
                  Healthcare Intelligence
                </p>
              </div>
            </div>
            {!isMobile && <SidebarTrigger className="ml-auto" />}
            {isMobile && (
              <button
                onClick={() => setOpenMobile(false)}
                className="ml-auto rounded-md p-1 hover:bg-accent"
                aria-label="Close sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center px-2 py-2">
            <SidebarTrigger />
          </div>
        )}
      </SidebarHeader>
      
      <SidebarContent className="flex flex-col">
        {/* Deliverables */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2">Deliverables</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {deliverables.map((section) => {
                const Icon = section.icon
                const isActive = currentSection === section.id
                
                return (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      onClick={() => handleSectionChange(section.id)}
                      tooltip={!isExpanded ? section.title : undefined}
                      isActive={isActive}
                      className={cn(
                        "w-full justify-start",
                        isActive && "bg-gradient-to-r from-blue-500/10 to-green-500/10 border-l-4 border-blue-500"
                      )}
                    >
                      <Icon className={cn(
                        "w-5 h-5 flex-shrink-0",
                        isActive && "text-blue-600"
                      )} />
                      {isExpanded && (
                        <>
                          <span className="ml-2 font-medium">{section.title}</span>
                          <ChevronRight className={cn(
                            "ml-auto w-4 h-4 transition-transform",
                            isActive && "translate-x-1"
                          )} />
                        </>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bonus */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2">Bonus</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bonusSections.map((section) => {
                const Icon = section.icon
                const isActive = currentSection === section.id
                
                return (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      onClick={() => handleSectionChange(section.id)}
                      tooltip={!isExpanded ? section.title : undefined}
                      isActive={isActive}
                      className={cn(
                        "w-full justify-start",
                        isActive && "bg-gradient-to-r from-blue-500/10 to-green-500/10 border-l-4 border-blue-500"
                      )}
                    >
                      <Icon className={cn(
                        "w-5 h-5 flex-shrink-0",
                        isActive && "text-blue-600"
                      )} />
                      {isExpanded && (
                        <>
                          <span className="ml-2 font-medium">{section.title}</span>
                          <ChevronRight className={cn(
                            "ml-auto w-4 h-4 transition-transform",
                            isActive && "translate-x-1"
                          )} />
                        </>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Progress Indicator */}
        {isExpanded && (
          <SidebarGroup className="mt-auto border-t pt-4">
            <SidebarGroupContent>
              <div className="px-2 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {currentSection + 1} / {allSections.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((currentSection + 1) / allSections.length) * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

