'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, CheckCircle2, Zap, Users, BarChart3, XCircle, ArrowRight, Eye, Bell, Cpu, LayoutDashboard, Smartphone, Network, TrendingDown, Shield, Activity, MapPin, Camera, RefreshCw, Database, Link2, FileCheck, Brain, ChevronRight, Search, UserSearch, MessageSquare, Paintbrush, PlayCircle, Target, TrendingUp, BarChart, Timer, CheckCircle, XCircle as XCircleIcon, Users as UsersIcon, FileText, Lightbulb } from 'lucide-react';

const currentStateTimeline = [
  {
    time: '10:00 AM',
    event: 'Patient discharged',
    action: 'Bed marked as "dirty"',
    status: 'neutral',
    problem: null,
  },
  {
    time: '10:15 AM',
    event: 'EVS Manager checks status',
    action: 'Manual check across multiple applications',
    status: 'warning',
    problem: 'No real-time visibility into cleaning queue',
  },
  {
    time: '10:30 AM',
    event: 'A/C malfunction logged',
    action: 'Logged in maintenance system only',
    status: 'error',
    problem: 'Never communicated to EVS or bed management',
  },
  {
    time: '11:00 AM',
    event: 'Cleaning staff arrive',
    action: 'Bed management uninformed of A/C issue',
    status: 'error',
    problem: 'Critical information siloed',
  },
  {
    time: '11:30 AM',
    event: 'Bed assigned automatically',
    action: 'Dirty, overheated room assigned to ER patient',
    status: 'critical',
    problem: 'CHAOS ENSURES',
  },
];

const futureStateTimeline = [
  {
    time: '10:02 AM',
    event: 'Discharge signal detected',
    action: 'AI queries all systems simultaneously',
    status: 'success',
    systems: ['EVS capacity', 'Maintenance status', 'ER admissions', 'Room issues', 'Staff location', 'Efficiency data'],
  },
  {
    time: '10:05 AM',
    event: 'Prioritized action plan generated',
    action: 'AI orchestrates multi-system response',
    status: 'success',
    priorities: [
      {
        level: 'Priority 1 (Critical)',
        action: 'Maintenance inspects A/C in Room 412',
        reason: 'Patient complaint; high recurrence risk',
        icon: AlertTriangle,
        color: 'from-red-500 to-orange-500',
      },
      {
        level: 'Priority 2 (High)',
        action: 'Dispatch cleaning staff to 4th floor',
        reason: '3 rooms pending, urgent admission pressure',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        level: 'Action 3',
        action: 'Block Room 412 pending verification',
        reason: 'Prevent automatic assignment',
        icon: CheckCircle2,
        color: 'from-green-500 to-emerald-500',
      },
    ],
  },
];

const dashboardData = {
  readyForCleaning: { count: 3, priority: '4th floor', urgency: 'high' },
  pendingMaintenance: { count: 1, issue: 'A/C', eta: '30 min' },
  normalPriority: { count: 2, status: 'on-track' },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ArchitectureUX() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
          Solution and Features
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          How AI Supervisor transforms reactive chaos into proactive coordination
        </p>
      </motion.div>

      {/* Main Problem Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-red-100">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Main Problem Solved</h2>
        </div>

        {/* Current State Timeline */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-800">Current State (Without AI Supervisor)</h3>
          </div>

          <div className="space-y-4">
            {currentStateTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex gap-4 relative"
              >
                <div className="flex-shrink-0 w-24 text-right pt-1">
                  <span className="text-sm font-semibold text-gray-700">{item.time}</span>
                </div>
                <div className="flex-shrink-0 w-1 bg-gray-300 relative">
                  <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white ${
                    item.status === 'neutral' ? 'bg-gray-400' :
                    item.status === 'warning' ? 'bg-yellow-400' :
                    item.status === 'error' ? 'bg-orange-400' :
                    'bg-red-500'
                  }`} />
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{item.event}</h4>
                    {item.status === 'critical' && (
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                        CRITICAL
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{item.action}</p>
                  {item.problem && (
                    <div className="mt-2 p-2 rounded bg-red-50 border-l-4 border-red-400">
                      <p className="text-sm text-red-700 font-medium">{item.problem}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 p-4 rounded-lg bg-red-100 border-2 border-red-300"
          >
            <p className="text-red-800 font-bold text-center text-lg">
              Result: 1.5 hours of inefficiency, patient safety risk, and operational chaos
            </p>
          </motion.div>
        </div>

        {/* AI Supervisor Solution */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">Future State (With AI Supervisor)</h3>
          </div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {futureStateTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.2 }}
                className="flex gap-4 relative"
              >
                <div className="flex-shrink-0 w-24 text-right pt-1">
                  <span className="text-sm font-semibold text-gray-700">{item.time}</span>
                </div>
                <div className="flex-shrink-0 w-1 bg-green-400 relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white p-5 rounded-lg shadow-lg border-2 border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-800">{item.event}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.action}</p>

                    {/* Systems Queried */}
                    {item.systems && (
                      <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                        <p className="text-xs font-semibold text-blue-600 mb-2">AI QUERIES SIMULTANEOUSLY:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.systems.map((system, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
                            >
                              {system}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Prioritized Actions */}
                    {item.priorities && (
                      <div className="mt-4 space-y-3">
                        {item.priorities.map((priority, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 + idx * 0.1 }}
                            className={`p-4 rounded-lg bg-gradient-to-r ${priority.color} text-white`}
                          >
                            <div className="flex items-start gap-3">
                              <priority.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="font-semibold text-sm mb-1">{priority.level}</p>
                                <p className="text-sm opacity-95">{priority.action}</p>
                                <p className="text-xs mt-2 opacity-80 italic">{priority.reason}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Unified Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Unified Dashboard Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Bell className="w-8 h-8" />
              <span className="text-4xl font-bold">{dashboardData.readyForCleaning.count}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Rooms Ready for Cleaning</h3>
            <p className="text-sm opacity-90">Priority: <strong>{dashboardData.readyForCleaning.priority}</strong></p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8" />
              <span className="text-4xl font-bold">{dashboardData.pendingMaintenance.count}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Pending Maintenance</h3>
            <p className="text-sm opacity-90">{dashboardData.pendingMaintenance.issue} — ETA: <strong>{dashboardData.pendingMaintenance.eta}</strong></p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <CheckCircle2 className="w-8 h-8" />
              <span className="text-4xl font-bold">{dashboardData.normalPriority.count}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Normal Priority</h3>
            <p className="text-sm opacity-90">Status: <strong>{dashboardData.normalPriority.status}</strong></p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="mt-6 p-6 rounded-xl bg-white shadow-lg border-2 border-gray-200"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-100">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">EVS Manager's View</h4>
              <p className="text-gray-600 leading-relaxed">
                <strong>Unified dashboard</strong> shows: "{dashboardData.readyForCleaning.count} rooms ready for cleaning (priority: {dashboardData.readyForCleaning.priority}), 
                {dashboardData.pendingMaintenance.count} room pending maintenance ({dashboardData.pendingMaintenance.issue}—ETA {dashboardData.pendingMaintenance.eta}), 
                {dashboardData.normalPriority.count} rooms normal priority."
              </p>
              <p className="text-gray-500 text-sm mt-2 italic">
                All without changing context. All in real-time.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Key Benefits Summary */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 mb-16"
      >
        <motion.h3
          variants={staggerItem}
          className="text-2xl font-bold text-white mb-6 text-center"
        >
          Transformation Results
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            variants={staggerItem}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white"
          >
            <ArrowRight className="w-6 h-6 mb-2" />
            <p className="font-semibold">From 1.5 hours</p>
            <p className="text-sm opacity-90">to 3 minutes</p>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white"
          >
            <Eye className="w-6 h-6 mb-2" />
            <p className="font-semibold">Single unified view</p>
            <p className="text-sm opacity-90">No context switching</p>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white"
          >
            <Zap className="w-6 h-6 mb-2" />
            <p className="font-semibold">Proactive orchestration</p>
            <p className="text-sm opacity-90">Prevents chaos</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Function Components Section */}
      <FeatureComponents />
    </div>
  );
}

// Feature Components Section
function FeatureComponents() {
  const [expandedFeature, setExpandedFeature] = React.useState<number | null>(0);

  const features = [
    {
      id: 0,
      title: 'Real-Time Orchestration Engine',
      subtitle: 'AI Supervisor',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      description: 'The core intelligence layer that coordinates all systems in real-time',
      dataIngestion: [
        'Bed management systems (Epic/Cerner)',
        'EVS systems',
        'Maintenance work orders',
        'RTLS (Real-time location services)'
      ],
      eventProcessing: [
        'Patient discharges',
        'Maintenance alerts',
        'Staff logs',
        'Configurable thresholds (e.g., ED occupancy >80%)'
      ],
      decisionLogic: [
        {
          label: 'Room readiness urgency',
          detail: 'ED queue depth, forecasted admissions'
        },
        {
          label: 'Staff availability & location',
          detail: 'Minimizing travel time'
        },
        {
          label: 'Maintenance dependencies',
          detail: 'Identifying blockers'
        },
        {
          label: 'Infection control priorities',
          detail: 'High-risk procedures require stricter protocols'
        },
        {
          label: 'Staff fatigue',
          detail: 'Fair task rotation, respect scheduled breaks'
        }
      ],
      impacts: [
        { metric: 'Critical delays reduction', value: '25-30%', color: 'text-red-600' },
        { metric: 'EVS staff efficiency', value: '15-20%', color: 'text-green-600' }
      ]
    },
    {
      id: 1,
      title: 'EVS Manager Dashboard',
      icon: LayoutDashboard,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      description: 'Unified command center for real-time visibility and control',
      features: [
        {
          title: 'Unified Queue View',
          icon: Eye,
          description: 'All pending rooms color-coded by urgency: red = critical, yellow = high, green = normal'
        },
        {
          title: 'Predictive Alerts',
          icon: Bell,
          description: 'Example: "4th floor: 2 discharges expected at 1:15 PM. 1 maintenance dependency flagged. Estimated readiness: 2:30 PM if staff allocation optimized now."'
        },
        {
          title: 'AI Explanations',
          icon: Zap,
          description: '"Why is this room high priority?" → "ED occupancy 85%, 3 expected admissions between 1–2 PM, this room blocks an admission, estimated cleaning time 18 min."'
        },
        {
          title: 'Quick Actions',
          icon: Activity,
          description: 'One-tap reassignment, override dependencies (if approved), task delegation to mobile app'
        }
      ],
      impacts: [
        { metric: 'Bed assignment errors', from: '15%', to: '2-5%', color: 'text-green-600' },
        { metric: 'Patient experience', value: '+15%', color: 'text-blue-600' }
      ]
    },
    {
      id: 2,
      title: 'Mobile Interface',
      subtitle: 'For Frontline Workers',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      description: 'Geofenced, context-aware mobile experience for staff',
      features: [
        {
          title: 'Simplified Task Assignment',
          icon: MapPin,
          description: 'Geofenced notifications: "Clean Room 412 (priority: 2), estimated 20 min, COVID protocol required, maintenance access after cleaning."'
        },
        {
          title: 'Completion Proof',
          icon: Camera,
          description: 'Photo + timestamp + QR validation replace manual checklists, feeding real-time trust signals to AI Supervisor'
        },
        {
          title: 'Dynamic Redirection',
          icon: RefreshCw,
          description: 'Flag issues instantly (locked room, spill, missing equipment) → AI recalculates prioritization and reassigns dynamically'
        }
      ],
      impacts: [
        { metric: 'EVS operational efficiency', value: '15-20%', color: 'text-green-600' },
        { metric: 'Critical delay reduction', value: '25-30%', color: 'text-orange-600' }
      ]
    },
    {
      id: 3,
      title: 'System Integration Layer',
      subtitle: 'Backend',
      icon: Network,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      description: 'Fault-tolerant gateway ensuring seamless system coordination',
      features: [
        {
          title: 'Fault-Tolerant Multi-API Gateway',
          icon: Shield,
          description: 'Manages retries, data consistency, and timeouts across bed management, EHR, maintenance, and RTLS systems'
        },
        {
          title: 'Conflict Resolution',
          icon: Link2,
          description: 'If bed management attempts to assign a blocked room, action is intercepted and error prevented'
        },
        {
          title: 'Audit Logging',
          icon: FileCheck,
          description: 'Every decision recorded with reasoning, enabling compliance, traceability, and continuous improvement'
        }
      ],
      impacts: [
        { metric: 'Assignment errors & conflicts', value: '<3%', color: 'text-green-600' },
        { metric: 'Regulatory compliance', value: '100%', color: 'text-blue-600', note: 'No added managerial effort' }
      ]
    }
  ];

  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
          Function Components
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Collaborative features designed to work seamlessly across hospital teams
        </p>
      </motion.div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isExpanded={expandedFeature === feature.id}
            onToggle={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ feature, isExpanded, onToggle, index }: {
  feature: any;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl border-2 ${feature.borderColor} bg-gradient-to-br ${feature.bgColor} overflow-hidden shadow-lg hover:shadow-xl transition-all`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-left flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {feature.title}
            </h3>
            {feature.subtitle && (
              <p className="text-sm text-gray-600 font-medium">{feature.subtitle}</p>
            )}
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4"
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
            {/* Left Column - Features/Details */}
            <div className="space-y-4">
              {feature.dataIngestion && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Data Ingestion
                  </h4>
                  <ul className="space-y-2">
                    {feature.dataIngestion.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feature.eventProcessing && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    Event Processing
                  </h4>
                  <ul className="space-y-2">
                    {feature.eventProcessing.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feature.decisionLogic && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-green-600" />
                    Decision Logic
                  </h4>
                  <ul className="space-y-3">
                    {feature.decisionLogic.map((item: any, idx: number) => (
                      <li key={idx} className="text-sm">
                        <span className="font-medium text-gray-800">{item.label}:</span>
                        <span className="text-gray-600 ml-1">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feature.features && (
                <div className="space-y-4">
                  {feature.features.map((item: any, idx: number) => {
                    const FeatureIcon = item.icon;
                    return (
                      <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <div className="flex items-start gap-3">
                          <FeatureIcon className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-1">{item.title}</h5>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Column - Impact Metrics */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-green-600" />
                Estimated Impact
              </h4>
              <div className="space-y-4">
                {feature.impacts.map((impact: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">{impact.metric}</span>
                      {impact.from ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">{impact.from}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <span className={`text-lg font-bold ${impact.color}`}>{impact.to}</span>
                        </div>
                      ) : (
                        <span className={`text-lg font-bold ${impact.color}`}>{impact.value}</span>
                      )}
                    </div>
                    {impact.note && (
                      <p className="text-xs text-gray-500 mt-1">{impact.note}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

