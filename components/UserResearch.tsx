'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Timer, Target, TrendingUp, RefreshCw, Shield, BarChart, UserSearch, MessageSquare, Paintbrush, PlayCircle, Search, Eye, CheckCircle, CheckCircle2, Brain, Lightbulb, ChevronRight, ArrowRight, Clock } from 'lucide-react';

export function UserResearch() {
  const [expandedPhase, setExpandedPhase] = React.useState<number | null>(0);

  const successMetrics = [
    { icon: Timer, label: 'Average time to prioritize and assign rooms' },
    { icon: Target, label: 'Percentage of correct prioritization decisions' },
    { icon: TrendingUp, label: 'Perceived confidence in AI decisions (1-5 scale)' },
    { icon: RefreshCw, label: 'Number of context switches per decision' },
    { icon: Shield, label: 'Rate of successful handling of exceptions' }
  ];

  const phases = [
    {
      id: 0,
      number: 'Phase 1',
      title: 'Baseline Quantitative Analysis',
      duration: 'Week 1',
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      objective: 'Quantify current operational load and establish baseline to measure AI Supervisor impact',
      method: 'Extract historical data from hospitals already using the software (without AI)',
      keyMetrics: [
        'Average time from discharge → cleaning → new admission',
        'Number of "dirty" rooms per hour',
        'Cleaning SLA compliance rate',
        'Delays due to maintenance or coordination',
        'Task distribution by shift and staff member'
      ],
      outcomes: [
        'Identification of systemic bottlenecks',
        'Quantification of current impact of limited visibility',
        'Initial dataset to train AI Supervisor rules',
        'Hypotheses validation data'
      ],
      hypotheses: [
        'Informational overload and coordination delays explain most (>60%) room turnover delays',
        'Automated prioritization could reduce turnover times by 20–30%'
      ]
    },
    {
      id: 1,
      number: 'Phase 2',
      title: 'Ethnographic Observation',
      duration: 'Weeks 1-2',
      icon: UserSearch,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      objective: 'Identify friction points, cognitive overload, and decision patterns in current workflow',
      method: 'Shadow 3–5 EVS Managers in hospitals of different sizes for 2–3 days each',
      focusAreas: [
        'Common triggers for urgent re-prioritization (ED overload, infection control, staff absence, equipment failures)',
        'Multi-system coordination (calls, emails, manual sheets)',
        'Information gaps and associated frustrations',
        'Decisions requiring human judgment vs. automation suitability',
        'Communication with frontline staff'
      ],
      hypotheses: [
        'Information fragmentation and lack of context are key drivers of cognitive load',
        'Automating routine decisions will free up time for strategic coordination'
      ]
    },
    {
      id: 2,
      number: 'Phase 3',
      title: 'Contextual Inquiry & Pain Point Mapping',
      duration: 'Week 2',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      objective: 'Capture expectations, frustrations, and improvement opportunities in multi-system coordination',
      method: 'Structured interviews with 10–12 participants: EVS Managers, Bed Management Coordinators, Maintenance Supervisors, Cleaning Staff',
      keyQuestions: [
        '"Describe your worst-case room turnover scenario."',
        '"What chaos would you eliminate if you could?"',
        '"What real-time information are you missing?"',
        '"What alerts or visualizations would help you decide faster?"'
      ],
      expectedOutcomes: [
        'Empathy map and detailed operational workflow',
        'Identification of critical information the AI Supervisor must centralize',
        'Validation of perceived value of predictive alerts and AI explainability'
      ]
    },
    {
      id: 3,
      number: 'Phase 4',
      title: 'Co-Design & Prototype Validation',
      duration: 'Week 3',
      icon: Paintbrush,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      objective: 'Validate that AI Supervisor interface simplifies decision-making and reduces cognitive load',
      method: 'Creation and testing of low-fidelity prototypes with 3–4 dashboard variations',
      prototypes: [
        'Prioritized queue with justification for each decision',
        'Facility heat map showing room status',
        'Predictive timeline view with estimated turnaround times'
      ],
      usabilityTesting: '15–20 minute sessions using realistic scenarios, observing reaction time and comprehension',
      validationCriteria: [
        'Immediate understanding of prioritization logic',
        'Ease of taking action without switching systems',
        'Smooth handling of exceptions or reassignment',
        'Confidence level in AI recommendations'
      ],
      hypotheses: [
        'Dashboards enable efficient prioritization without additional training',
        'AI explainability increases trust and adoption'
      ]
    },
    {
      id: 4,
      number: 'Phase 5',
      title: 'Full Workflow Simulation',
      duration: 'Week 3',
      icon: PlayCircle,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      objective: 'Test multi-system operational flow under realistic scenarios before MVP development',
      method: 'Simulation with real data and chained events',
      scenario: '"At 10:00 AM, five discharges occur simultaneously; maintenance reports a breakdown."',
      activities: [
        'Observe how managers and staff interact with the system',
        'Record redundant steps, decision time, and exception handling'
      ],
      metricsToCollect: [
        'Average time to assign and release rooms',
        'Exception resolution rate without external intervention',
        'Context switches per decision',
        'Perceived confidence in AI'
      ],
      expectedOutcomes: [
        'Validation that flow reflects real workload conditions',
        'Confirmation that interface reduces manual steps',
        'Evidence of improved coordination and operational speed'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
          User Research & Workflow Optimization
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pre-MVP validation strategy to ensure AI Supervisor reduces cognitive load and supports decision-making
        </p>
      </motion.div>

      {/* Overall Objective & Success Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 border-2 border-blue-200"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500">
            <Target className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Overall Objective</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Validate that the AI Supervisor <strong>reduces cognitive load</strong> and supports decision-making for 
              the EVS Manager and frontline staff, ensuring the interface simplifies the multi-system workflow 
              <strong> without adding friction or complexity</strong>.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Success Metrics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {successMetrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm flex items-start gap-3"
                >
                  <MetricIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{metric.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Research Timeline - Professional Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Research Strategy Timeline</h3>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline - Horizontal Layout */}
          <div className="hidden lg:block relative">
            {/* Main Timeline Track */}
            <div className="absolute left-12 right-12 top-20 h-1.5 bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 to-green-300 rounded-full shadow-md" />
            
            {/* Phases in a Row */}
            <div className="relative flex justify-between items-start pt-16 pb-8">
              {phases.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                const isLast = idx === phases.length - 1;
                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex-1 flex flex-col items-center max-w-[20%] relative"
                  >
                    {/* Connection Arrow (except last) */}
                    {!isLast && (
                      <div className="absolute left-[60%] top-20 w-[40%] h-0.5 bg-gray-300 z-0" />
                    )}
                    
                    {/* Timeline Node with Icon */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-4 border-white shadow-2xl flex items-center justify-center cursor-pointer`}
                      >
                        <PhaseIcon className="w-9 h-9 text-white" />
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
                        <span className="text-xs font-bold text-gray-700">{idx + 1}</span>
                      </div>
                    </div>
                    
                    {/* Phase Info Card */}
                    <div className={`w-full p-3 rounded-lg bg-white border-2 ${phase.borderColor} shadow-md hover:shadow-xl transition-all`}>
                      <p className="text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">{phase.number}</p>
                      <h3 className="text-xs font-bold text-gray-800 mb-2 leading-snug line-clamp-2 min-h-[2rem]">
                        {phase.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-600">{phase.duration}</span>
                      </div>
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
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="relative flex gap-4"
                >
                  {/* Vertical Timeline Line */}
                  {idx < phases.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300" />
                  )}
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} border-4 border-white shadow-lg flex items-center justify-center`}>
                      <PhaseIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-gray-700">{idx + 1}</span>
                    </div>
                  </div>
                  
                  {/* Phase Card */}
                  <div className={`flex-1 p-4 rounded-lg bg-gradient-to-br ${phase.bgColor} border-2 ${phase.borderColor} shadow-md`}>
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Phase Details */}
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            isExpanded={expandedPhase === phase.id}
            onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// Phase Card Component
function PhaseCard({ phase, isExpanded, onToggle, index }: {
  phase: any;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = phase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl border-2 ${phase.borderColor} bg-gradient-to-br ${phase.bgColor} overflow-hidden shadow-lg hover:shadow-xl transition-all`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-colors text-left"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} shadow-lg flex-shrink-0`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/80 text-sm font-semibold text-gray-700">
                {phase.number}
              </span>
              <span className="text-sm text-gray-600 font-medium">{phase.duration}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {phase.title}
            </h3>
            <p className="text-gray-600">{phase.objective}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 bg-white/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Method
                </h4>
                <p className="text-sm text-gray-600">{phase.method}</p>
              </div>

              {phase.keyMetrics && (
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-purple-600" />
                    Key Metrics
                  </h4>
                  <ul className="space-y-2">
                    {phase.keyMetrics.map((metric: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.focusAreas && (
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    Focus Areas
                  </h4>
                  <ul className="space-y-2">
                    {phase.focusAreas.map((area: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.keyQuestions && (
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                    Key Questions
                  </h4>
                  <ul className="space-y-3">
                    {phase.keyQuestions.map((question: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-700 italic">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.prototypes && (
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Paintbrush className="w-5 h-5 text-pink-600" />
                    Prototype Variations
                  </h4>
                  <ul className="space-y-2">
                    {phase.prototypes.map((prototype: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{prototype}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 p-3 rounded bg-purple-50 border border-purple-200">
                    <p className="text-xs font-semibold text-purple-800 mb-1">Usability Testing:</p>
                    <p className="text-xs text-purple-700">{phase.usabilityTesting}</p>
                  </div>
                </div>
              )}

              {phase.scenario && (
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <PlayCircle className="w-5 h-5 text-indigo-600" />
                    Simulation Scenario
                  </h4>
                  <p className="text-sm text-gray-700 mb-3 italic bg-indigo-50 p-3 rounded border-l-4 border-indigo-400">
                    {phase.scenario}
                  </p>
                  {phase.activities && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Activities:</p>
                      <ul className="space-y-1">
                        {phase.activities.map((activity: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <ArrowRight className="w-3 h-3 text-indigo-500 mt-1 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {phase.outcomes && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {phase.outcomes.map((outcome: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.expectedOutcomes && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {phase.expectedOutcomes.map((outcome: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.hypotheses && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    Hypotheses to Validate
                  </h4>
                  <ul className="space-y-3">
                    {phase.hypotheses.map((hypothesis: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Brain className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="italic">{hypothesis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.validationCriteria && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Validation Criteria
                  </h4>
                  <ul className="space-y-2">
                    {phase.validationCriteria.map((criteria: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.metricsToCollect && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-orange-600" />
                    Metrics to Collect
                  </h4>
                  <ul className="space-y-2">
                    {phase.metricsToCollect.map((metric: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Timer className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

