'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  RefreshCw, 
  Brain, 
  Network, 
  Zap, 
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function AgenticSuperiority() {
  const comparisonTable = [
    {
      challenge: 'Silos',
      traditional: 'Optimizes each process independently. Cleaning schedules are unaware of maintenance delays.',
      agentic: 'Reasons across all systems simultaneously. Detects that the air conditioning failure blocks room availability before it becomes critical.',
      traditionalIcon: X,
      agenticIcon: Network,
      traditionalColor: 'text-red-600',
      agenticColor: 'text-green-600'
    },
    {
      challenge: 'Exception Handling',
      traditional: 'Rule-based; fails with unexpected events. "If no staff available, skip task" → no contingencies.',
      agentic: 'Adapts in real time. Staff absence → AI redirects, alerts the manager, and predicts impact on availability.',
      traditionalIcon: AlertTriangle,
      agenticIcon: Zap,
      traditionalColor: 'text-red-600',
      agenticColor: 'text-green-600'
    },
    {
      challenge: 'Prediction',
      traditional: 'Reactive. Responds after events occur.',
      agentic: 'Proactive. Predicts discharge windows, pre-allocates resources, flags risks 2–4 hours in advance.',
      traditionalIcon: Clock,
      agenticIcon: TrendingUp,
      traditionalColor: 'text-red-600',
      agenticColor: 'text-green-600'
    },
    {
      challenge: 'Learning',
      traditional: 'Static rules requiring manual reconfiguration.',
      agentic: 'Learns facility-specific patterns (e.g., discharges on 4th floor tend to happen 60 minutes early on Thursdays). Continuously optimizes.',
      traditionalIcon: RefreshCw,
      agenticIcon: Brain,
      traditionalColor: 'text-red-600',
      agenticColor: 'text-green-600'
    },
    {
      challenge: 'Coordination Overload',
      traditional: 'Humans must manually coordinate across teams.',
      agentic: 'AI acts as a neutral orchestrator, reducing manual coordination by 60–70%.',
      traditionalIcon: Users,
      agenticIcon: Target,
      traditionalColor: 'text-red-600',
      agenticColor: 'text-green-600'
    },
    {
      challenge: 'Context Awareness',
      traditional: 'No understanding of why tasks matter; treats all equally.',
      agentic: 'Understands urgency drivers (ED occupancy, delays, quarantines). Intelligently prioritizes.',
      traditionalIcon: X,
      agenticIcon: Brain,
      traditionalColor: 'text-red-600',
      agenticColor: 'text-green-600'
    }
  ];

  const whyAgenticReasons = [
    {
      title: 'Multi-System Dependencies',
      description: 'Preparing a room depends on bed management + EVS + maintenance + occupancy forecasting + staff availability. Traditional automation can handle 1–2 systems; agentic systems handle many simultaneously.',
      icon: Network,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Emergent Complexity',
      description: 'The scenario in the brief (A/C failure + staff delay + automatic assignment) triggers a cascading issue no human anticipated. Agentic systems can handle novel combinations dynamically.',
      icon: AlertTriangle,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Human Judgment Is Costly',
      description: 'The EVS Manager is skilled but limited in availability. Their valuable time is wasted on constant context switching. Automating routine coordination frees them for strategic decisions.',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-Time Constraints',
      description: 'Hospitals operate at high velocity. By the time a human reviews data, the situation may have changed. Agentic systems operate at machine speed with human supervision.',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Incremental Value',
      description: 'Once built, the orchestration layer can expand to operating rooms, inventory, staffing, and patient flow—amplifying ROI across the organization.',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    }
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
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Why Agentic AI</span>
        </motion.div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Superior to Traditional Automation
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          This is fundamentally a coordination problem, not merely an automation problem
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Limitations of Traditional Workflow Automation
        </h2>
        
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 mb-4 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-t-xl border border-gray-200">
              <div className="col-span-12 md:col-span-2">
                <h3 className="font-bold text-gray-800">Challenge</h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-red-600">Traditional Automation</h3>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-green-600">Agentic AI Supervisor</h3>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {comparisonTable.map((row, index) => {
                const TraditionalIcon = row.traditionalIcon;
                const AgenticIcon = row.agenticIcon;
                
                return (
                  <motion.div
                    key={row.challenge}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="grid grid-cols-12 gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                  >
                    {/* Challenge Column */}
                    <div className="col-span-12 md:col-span-2 flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <Target className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="font-bold text-gray-800 text-sm">{row.challenge}</h4>
                      </div>
                    </div>

                    {/* Traditional Automation Column */}
                    <div className="col-span-12 md:col-span-5 p-4 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-400">
                      <div className="flex items-start gap-3 mb-2">
                        <TraditionalIcon className={`w-5 h-5 ${row.traditionalColor} flex-shrink-0 mt-0.5`} />
                        <p className="text-sm text-gray-700 leading-relaxed">{row.traditional}</p>
                      </div>
                    </div>

                    {/* Agentic AI Column */}
                    <div className="col-span-12 md:col-span-5 p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-400">
                      <div className="flex items-start gap-3 mb-2">
                        <AgenticIcon className={`w-5 h-5 ${row.agenticColor} flex-shrink-0 mt-0.5`} />
                        <p className="text-sm text-gray-700 leading-relaxed">{row.agentic}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Why Agentic AI Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Why Agentic AI for This Problem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This is fundamentally a <strong>coordination problem</strong>, not merely an automation problem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyAgenticReasons.map((reason, index) => {
            const ReasonIcon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${reason.color} mb-4 shadow-lg`}>
                    <ReasonIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Key Insight Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="p-8 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm flex-shrink-0">
            <Brain className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">The Fundamental Difference</h3>
            <p className="text-lg leading-relaxed opacity-95">
              Traditional automation <strong>follows rules</strong>. Agentic AI <strong>understands context</strong> and 
              <strong> adapts dynamically</strong>. In healthcare operations where every decision affects patient care, 
              the ability to coordinate across systems, predict outcomes, and learn from patterns isn't a luxury—it's a necessity.
            </p>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <span className="font-semibold">60-70%</span> reduction in manual coordination
              </div>
              <ArrowRight className="w-5 h-5" />
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <span className="font-semibold">2-4 hours</span> predictive advantage
              </div>
              <ArrowRight className="w-5 h-5" />
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <span className="font-semibold">Machine speed</span> with human supervision
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

