'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Network, 
  Target, 
  Bell,
  TrendingUp,
  LayoutDashboard,
  Search,
  RefreshCw,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  ChevronRight,
  Calendar
} from 'lucide-react';

export function PhaseRoadmap() {
  const phases = [
    {
      id: 0,
      number: 'Phase 0',
      title: 'Data Preparation & Integration',
      duration: '1 week',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      objective: 'Consolidate all relevant data sources so the AI Supervisor has visibility into critical processes',
      keyActions: [
        'Map sources: EVS, bed management, maintenance orders, IoT temperature/humidity sensors',
        'Create minimal connectors for RAG (vector DB)',
        'Define baseline KPIs: average cleaning time, critical delays, bed assignment incidents'
      ],
      estimatedImpact: 'Establishes the foundation for data-driven decision-making, though with no immediate operational efficiency impact',
      metric: '~80% real-time visibility into critical rooms',
      efficiencyGain: null
    },
    {
      id: 1,
      number: 'Phase 1',
      title: 'Context Aggregator',
      duration: '2 weeks',
      icon: Network,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      objective: 'Aggregate data from multiple systems in real time to provide a unified view of each room\'s status',
      keyActions: [
        'Integrate EVS, maintenance, and bed management data',
        'Display room status on a simple dashboard: clean, pending, critical'
      ],
      estimatedImpact: 'Reduces uncertainty and errors caused by fragmented information',
      efficiencyMetrics: [
        'Manual reassignments reduced by 20–30% in pilot areas',
        'Incident response time improved from 45 min → 25 min'
      ],
      efficiencyGain: 'Manual reassignments ↓ 20–30%'
    },
    {
      id: 2,
      number: 'Phase 2',
      title: 'Task Prioritization Engine',
      duration: '2 weeks',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      objective: 'Automatically prioritize rooms for cleaning and maintenance based on urgency, patient status, and room condition',
      keyActions: [
        'Implement simple rules combined with LLM-based dynamic prioritization',
        'Use multi-agent setup: one agent for cleaning, another for maintenance'
      ],
      estimatedImpact: 'Optimizes staff usage by avoiding non-critical tasks',
      metrics: [
        'EVS staff efficiency up 15–20% (more rooms ready per hour)',
        'Critical room delays reduced by 25%'
      ],
      efficiencyGain: 'EVS staff efficiency ↑ 15–20%'
    },
    {
      id: 3,
      number: 'Phase 3',
      title: 'Automated Alerts & Communication',
      duration: '2 weeks',
      icon: Bell,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      objective: 'Automatically notify EVS and maintenance about conflicts, delays, or new work orders',
      keyActions: [
        'Integrate with email, Slack, or internal app',
        'Auto-alerts when a room won\'t be ready on time'
      ],
      estimatedImpact: 'Reduces manual coordination and back-and-forth communication',
      metrics: [
        'Manual communication time reduced by 30–40%',
        'Critical delays cut from 20–30% → 10–15%'
      ],
      efficiencyGain: 'Communication time ↓ 30–40%'
    },
    {
      id: 4,
      number: 'Phase 4',
      title: 'Predictive Assignment Advisor',
      duration: '2 weeks',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      objective: 'Anticipate cleaning and maintenance delays, suggesting real-time staff reassignments',
      keyActions: [
        'Analyze historical cleaning and maintenance durations',
        'Multi-agent simulation to test "what-if" bottleneck scenarios'
      ],
      estimatedImpact: 'Reduces overload during high-demand peaks',
      metrics: [
        'On-time room readiness increased 70% → 90% (pilot units)',
        'EVS overtime reduced by 10–15%'
      ],
      efficiencyGain: 'On-time readiness ↑ 70→90%'
    },
    {
      id: 5,
      number: 'Phase 5',
      title: 'Real-time Room Readiness Dashboard',
      duration: '2 weeks',
      icon: LayoutDashboard,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      objective: 'Centralized visualization of room status and readiness predictions',
      keyActions: [
        'Dashboard with three states: clean, pending, critical',
        'Integrate Context Aggregator + Predictive Assignment Advisor'
      ],
      estimatedImpact: 'Improves rapid decision-making for patient admissions',
      metrics: [
        'Bed assignment errors reduced 15% → 2–5%',
        'Urgent patient assignment time decreased 30–45 min → <10 min'
      ],
      efficiencyGain: 'Bed assignment errors ↓ 15→2–5%'
    },
    {
      id: 6,
      number: 'Phase 6',
      title: 'Root Cause & Recommendation Agent',
      duration: '2 weeks',
      icon: Search,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      objective: 'Identify critical issues and suggest corrective actions (e.g., reassign staff, prioritize HVAC repair, defer assignment)',
      keyActions: [
        'LLM + multi-agent reasoning for delay root-cause analysis',
        'Generate proactive operational recommendations'
      ],
      estimatedImpact: 'Prevents recurring incidents and improves interdepartmental coordination',
      metrics: [
        'Critical incidents (HVAC, incomplete cleaning) reduced 10–15% → <3%',
        'Patient satisfaction during peak occupancy improved +15%'
      ],
      efficiencyGain: 'Critical incidents ↓ 10→<3%'
    },
    {
      id: 7,
      number: 'Phase 7',
      title: 'Continuous Learning Loop',
      duration: '2 weeks',
      icon: RefreshCw,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      objective: 'Automatically refine prioritization rules based on performance data and recommendation outcomes',
      keyActions: [
        'Capture KPIs: cleaning times, delays, SOP compliance',
        'Dynamically adjust prioritization logic'
      ],
      estimatedImpact: 'Continuous optimization without constant manual oversight',
      metrics: [
        'Additional 10–15% efficiency gain in EVS operations',
        'Cumulative reduction of critical delays to <5%',
        'Establishes foundation for future expansion to other units/floors'
      ],
      efficiencyGain: 'Overall efficiency ↑ 10–15%'
    }
  ];

  const summaryTable = [
    { phase: 'Context Aggregator', impact: 'Unified visibility', efficiency: 'Manual reassignments ↓ 20–30%' },
    { phase: 'Task Prioritization', impact: 'Task optimization', efficiency: 'EVS staff efficiency ↑ 15–20%' },
    { phase: 'Alerts & Communication', impact: 'Reduced manual coordination', efficiency: 'Communication time ↓ 30–40%' },
    { phase: 'Predictive Assignment', impact: 'Delay anticipation', efficiency: 'On-time room readiness ↑ 70→90%' },
    { phase: 'Dashboard', impact: 'Faster patient assignment', efficiency: 'Bed assignment errors ↓ 15→2–5%' },
    { phase: 'Root Cause & Recommendations', impact: 'Proactive issue resolution', efficiency: 'Critical incidents ↓ 10→<3%' },
    { phase: 'Continuous Learning', impact: 'Ongoing optimization', efficiency: 'Overall efficiency ↑ 10–15%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white mb-6">
          <Calendar className="w-5 h-5" />
          <span className="font-semibold">MVP through Phase 7</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
          Phase Roadmap
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Strategic rollout plan: From data preparation to continuous learning
        </p>
      </motion.div>

      {/* Timeline Visualization - Professional Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Implementation Timeline</h2>
        
        {/* Timeline Container - Horizontal Scrollable for Mobile */}
        <div className="relative">
          {/* Desktop Timeline - Horizontal Layout */}
          <div className="hidden lg:block relative">
            {/* MVP Background Highlight */}
            <div className="absolute left-12 right-[55%] top-0 bottom-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-transparent rounded-2xl border-2 border-dashed border-blue-300/50 -z-0" />
            
            {/* Main Timeline Track */}
            <div className="absolute left-12 right-12 top-20 h-1.5 bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 to-green-300 rounded-full shadow-md z-10" />
            
            {/* MVP Separator Line (after phase 3) */}
            <div className="absolute left-[55%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 z-20" style={{ transform: 'translateX(-50%)' }} />
            <div className="absolute left-[55%] top-24 -translate-x-1/2 z-30">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1.5 rounded-full shadow-lg border-2 border-white">
                <span className="text-xs font-bold">MVP Complete</span>
              </div>
            </div>
            
            {/* Phases in a Row */}
            <div className="relative flex justify-between items-start pt-16 pb-8">
              {phases.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                const isLast = idx === phases.length - 1;
                const isMVP = idx <= 3;
                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex-1 flex flex-col items-center max-w-[12%] relative"
                  >
                    {/* Connection Arrow (except last) */}
                    {!isLast && (
                      <div className={`absolute left-[60%] top-20 w-[40%] h-0.5 z-0 ${isMVP && idx === 3 ? 'bg-gradient-to-r from-blue-300 via-purple-300 to-transparent' : 'bg-gray-300'}`} />
                    )}
                    
                    {/* Timeline Node with Icon */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-4 ${isMVP ? 'border-blue-400' : 'border-white'} shadow-2xl flex items-center justify-center cursor-pointer relative`}
                      >
                        <PhaseIcon className="w-9 h-9 text-white" />
                        {/* MVP Badge */}
                        {isMVP && (
                          <div className="absolute -top-1 -left-1 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-md">
                            <span className="text-[8px] font-bold">MVP</span>
                          </div>
                        )}
                      </motion.div>
                      {/* Animated Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${phase.color}`}
                        animate={{ 
                          scale: [1, 1.4, 1.4], 
                          opacity: [0.4, 0, 0] 
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          delay: idx * 0.4,
                          ease: "easeOut"
                        }}
                      />
                      {/* Phase Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-lg">
                        <span className="text-xs font-bold text-gray-700">{idx}</span>
                      </div>
                    </div>
                    
                    {/* Phase Info Card */}
                    <div className={`w-full p-3 rounded-lg bg-white border-2 ${phase.borderColor} ${isMVP ? 'shadow-lg ring-2 ring-blue-200/50' : 'shadow-md'} hover:shadow-xl transition-all relative`}>
                      {/* MVP Label on Card */}
                      {isMVP && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md border border-white">
                            MVP
                          </span>
                        </div>
                      )}
                      <p className="text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">{phase.number}</p>
                      <h3 className="text-xs font-bold text-gray-800 mb-2 leading-snug line-clamp-2 min-h-[2rem]">
                        {phase.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-600">{phase.duration}</span>
                      </div>
                      {phase.efficiencyGain && (
                        <div className="pt-2 border-t border-gray-100">
                          <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full inline-block">
                            {phase.efficiencyGain}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Timeline - Vertical Layout */}
          <div className="lg:hidden space-y-8">
            {phases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              const isMVP = idx <= 3;
              const isMVPComplete = idx === 3;
              return (
                <React.Fragment key={phase.id}>
                  {/* MVP Separator */}
                  {isMVPComplete && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-4 my-6"
                    >
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                        <span className="text-xs font-bold">MVP Complete</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className={`relative flex gap-4 ${isMVP ? 'pl-2 border-l-4 border-blue-400' : ''}`}
                  >
                    {/* Vertical Timeline Line */}
                    {idx < phases.length - 1 && (
                      <div className={`absolute left-6 top-20 bottom-0 w-0.5 ${isMVP ? 'bg-gradient-to-b from-blue-300 via-purple-300 to-green-300' : 'bg-gradient-to-b from-blue-300 via-purple-300 to-green-300'}`} />
                    )}
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} border-4 ${isMVP ? 'border-blue-400' : 'border-white'} shadow-lg flex items-center justify-center relative`}>
                        <PhaseIcon className="w-6 h-6 text-white" />
                        {/* MVP Badge */}
                        {isMVP && (
                          <div className="absolute -top-1 -left-1 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-md">
                            <span className="text-[7px] font-bold">MVP</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-gray-700">{idx}</span>
                      </div>
                    </div>
                    
                    {/* Phase Card */}
                    <div className={`flex-1 p-4 rounded-lg bg-gradient-to-br ${phase.bgColor} border-2 ${phase.borderColor} ${isMVP ? 'shadow-lg ring-2 ring-blue-200/50' : 'shadow-md'} relative`}>
                      {/* MVP Label on Card */}
                      {isMVP && (
                        <div className="absolute -top-2 left-4">
                          <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md border border-white">
                            MVP
                          </span>
                        </div>
                      )}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{phase.number}</p>
                          <h3 className="text-base font-bold text-gray-800 mb-2">{phase.title}</h3>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                      {phase.efficiencyGain && (
                        <div className="mt-2">
                          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                            {phase.efficiencyGain}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
          
          {/* Total Duration Badge */}
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">
                Total Duration: <strong className="text-lg">15 weeks</strong>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Phase Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Phase Details</h2>
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Summary Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Expected Efficiency Gains by Phase</h2>
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 mb-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-blue-200 p-4">
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-bold text-gray-800">Phase</h3>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-bold text-gray-800">Key Impact</h3>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-bold text-gray-800">Estimated Efficiency Metric</h3>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {summaryTable.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="grid grid-cols-12 gap-4 p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="col-span-12 md:col-span-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-100">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-800">{row.phase}</span>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex items-center">
                    <span className="text-gray-700">{row.impact}</span>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm font-semibold">
                      {row.efficiency}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Phase Card Component
function PhaseCard({ phase, index }: { phase: any; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Icon = phase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl border-2 ${phase.borderColor} bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all`}
    >
      {/* Card Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-6 text-left hover:bg-gradient-to-br ${phase.bgColor} transition-colors`}
      >
        <div className="flex items-start gap-4">
          <div className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} shadow-lg flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-bold text-gray-700">
                {phase.number}
              </span>
              <span className="text-sm text-gray-600 font-medium">{phase.duration}</span>
              {phase.efficiencyGain && (
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  {phase.efficiencyGain}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{phase.title}</h3>
            <p className="text-gray-600 leading-relaxed">{phase.objective}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 flex-shrink-0"
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isExpanded && (
          <div className={`p-6 bg-gradient-to-br ${phase.bgColor} space-y-4`}>
            {/* Key Actions */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Key Actions
              </h4>
              <div className="space-y-2">
                {phase.keyActions.map((action: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">{action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Impact */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
              <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                Estimated Impact
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">{phase.estimatedImpact}</p>
            </div>

            {/* Metrics */}
            {(phase.metrics || phase.efficiencyMetrics || phase.metric) && (
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phase.metrics?.map((metric: string, idx: number) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-gray-200">
                      <p className="text-sm text-gray-700 leading-relaxed">{metric}</p>
                    </div>
                  ))}
                  {phase.efficiencyMetrics?.map((metric: string, idx: number) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-gray-200">
                      <p className="text-sm text-gray-700 leading-relaxed">{metric}</p>
                    </div>
                  ))}
                  {phase.metric && (
                    <div className="p-3 rounded-lg bg-white border border-gray-200">
                      <p className="text-sm text-gray-700 leading-relaxed">{phase.metric}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

