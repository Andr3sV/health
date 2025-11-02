'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  Clock, 
  AlertTriangle, 
  Brain, 
  CheckCircle, 
  Wrench,
  Bed,
  Heart,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  DollarSign,
  Percent,
  ChevronRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function SuccessMetrics() {
  const primaryMetrics = [
    {
      id: 1,
      title: 'Room Downtime',
      subtitle: 'Critical',
      icon: Clock,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      definition: 'Time between patient discharge and next actual admission.',
      currentBenchmark: '120 min',
      target: '75–90 min',
      reduction: '30–35%',
      measurement: 'Timestamp extraction from bed management system (discharge → admission)',
      importance: 'Increases effective bed capacity; a 30-minute reduction equals roughly 3–5 additional beds in a 200-bed hospital.',
      currentValue: 120,
      targetValue: 82.5,
      unit: 'minutes'
    },
    {
      id: 2,
      title: 'Room Preparation Time',
      subtitle: 'Operational',
      icon: TrendingDown,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      definition: 'Time from discharge until the room is clean, verified, and ready for admission.',
      currentBenchmark: '45–60 min',
      target: '25–35 min',
      reduction: '40–45%',
      measurement: 'Completion log in mobile app + QR code verification',
      importance: 'Direct operational improvement; serves as an input for downtime predictions.',
      currentValue: 52.5,
      targetValue: 30,
      unit: 'minutes'
    },
    {
      id: 3,
      title: 'Maintenance-Blocking Incidents',
      subtitle: 'Safety',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-50 to-amber-50',
      borderColor: 'border-yellow-200',
      definition: 'Number of times a maintenance issue delayed room availability.',
      currentBenchmark: '8–12% of turnovers',
      target: 'Baseline + 40% reduction',
      reduction: '40%',
      measurement: 'AI Supervisor logs (maintenance flagged as blocker), validated by post-review',
      importance: 'Prevents cascading delays and improves room turnover reliability.',
      currentValue: 10,
      targetValue: 6,
      unit: '%'
    }
  ];

  const secondaryMetrics = [
    {
      id: 4,
      title: 'EVS Manager Cognitive Load',
      subtitle: 'Efficiency',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      definition: 'Percentage of time spent on manual checks, coordination, and context switching during a shift.',
      currentBenchmark: '25–35% of shift',
      target: '8–12%',
      reduction: '60–70%',
      measurement: 'Direct observation, time-and-motion studies pre- and post-implementation',
      importance: 'Frees time for higher-value work (training, compliance, incident response).',
      currentValue: 30,
      targetValue: 10,
      unit: '%'
    },
    {
      id: 5,
      title: 'Staff Compliance with Assignments',
      subtitle: 'Adoption',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      definition: 'Percentage of tasks completed as assigned vs. tasks redirected or skipped.',
      currentBenchmark: 'Baseline to establish',
      target: '≥85%',
      measurement: 'Completion logs in mobile app + QR verification',
      importance: 'Indicates trust and usability of AI prioritization.',
      currentValue: 70,
      targetValue: 85,
      unit: '%'
    },
    {
      id: 6,
      title: 'Mean Time to Resolve Maintenance',
      subtitle: 'Reliability',
      icon: Wrench,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      definition: 'Time from maintenance alert to issue resolution.',
      currentBenchmark: '2–4 hours',
      target: '<1.5 hours',
      reduction: '50%',
      measurement: 'Combined records from maintenance system and AI Supervisor',
      importance: 'Enabled by proactive AI alerts.',
      currentValue: 3,
      targetValue: 1.25,
      unit: 'hours'
    }
  ];

  const tertiaryMetrics = [
    {
      id: 7,
      title: 'Bed Occupancy Rate',
      subtitle: 'Capacity',
      icon: Bed,
      color: 'from-blue-500 to-green-500',
      bgColor: 'from-blue-50 to-green-50',
      borderColor: 'border-blue-200',
      definition: 'Average percentage of occupied beds vs. total available.',
      currentBenchmark: '80–85%',
      target: '85–88%',
      improvement: '+3 points',
      measurement: 'Bed management system data',
      financialImpact: 'With an average of $3,000/bed/day, a 200-bed hospital reclaiming 2–3 beds = $6–9 million in additional annual revenue.',
      currentValue: 82.5,
      targetValue: 86.5,
      unit: '%'
    },
    {
      id: 8,
      title: 'Patient Satisfaction',
      subtitle: 'Quality',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      definition: 'Admission experience score — "How quick and organized was the admission?"',
      currentBenchmark: 'Baseline to establish',
      target: '10% improvement',
      measurement: 'Post-discharge surveys (HCAHPS or internal equivalents)',
      importance: 'Timely admission experience quality.',
      currentValue: 70,
      targetValue: 77,
      unit: 'score'
    },
    {
      id: 9,
      title: 'Staff Overtime and Burnout',
      subtitle: 'Culture',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      definition: 'Percentage of EVS staff working unplanned overtime; manager stress levels.',
      currentBenchmark: 'Baseline to establish',
      target: '15–20% reduction',
      measurement: 'HR/payroll data + optional EVS team pulse surveys',
      importance: 'Reduced overtime hours and improved work-life balance.',
      currentValue: 25,
      targetValue: 20,
      unit: '%'
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
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
          Success Metrics (KPIs)
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          AI Supervisor – Measuring impact across room efficiency, workflow, and business outcomes
        </p>
      </motion.div>

      {/* Primary Metrics */}
      <MetricSection 
        title="Primary Metrics"
        subtitle="Room Efficiency"
        metrics={primaryMetrics}
        delay={0.2}
      />

      {/* Secondary Metrics */}
      <MetricSection 
        title="Secondary Metrics"
        subtitle="Workflow and Experience"
        metrics={secondaryMetrics}
        delay={0.4}
      />

      {/* Tertiary Metrics */}
      <MetricSection 
        title="Tertiary Metrics"
        subtitle="Business and Cultural Impact"
        metrics={tertiaryMetrics}
        delay={0.6}
      />
    </div>
  );
}

// Metric Section Component
function MetricSection({ title, subtitle, metrics, delay }: {
  title: string;
  subtitle: string;
  metrics: any[];
  delay: number;
}) {
  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={`${title}-${metric.id}-${index}`} 
            metric={metric} 
            index={index}
            isExpanded={expandedCard === metric.id}
            onExpand={() => setExpandedCard(expandedCard === metric.id ? null : metric.id)}
            showContent={expandedCard !== null}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Metric Card Component
function MetricCard({ metric, index, isExpanded, onExpand, showContent }: { 
  metric: any; 
  index: number;
  isExpanded: boolean;
  onExpand: () => void;
  showContent: boolean;
}) {
  const Icon = metric.icon;

  // Calculate max value for chart scaling
  const maxValue = Math.max(metric.currentValue, metric.targetValue) * 1.3;
  const currentPercentage = (metric.currentValue / maxValue) * 100;
  const targetPercentage = (metric.targetValue / maxValue) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl border-2 ${metric.borderColor} bg-gradient-to-br ${metric.bgColor} overflow-hidden shadow-lg hover:shadow-xl transition-all`}
    >
      {/* Card Header - More Compact */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${metric.color} shadow-md flex-shrink-0`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/90 text-gray-700">
                  #{metric.id}
                </span>
                <span className="text-xs font-medium text-gray-600">{metric.subtitle}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">{metric.title}</h3>
            </div>
          </div>
        </div>

        {/* Compact Comparison with Side-by-Side Bars */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {/* Current Value */}
          <div className="bg-white/80 rounded-lg p-2.5 border border-red-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-600">Current</span>
              <span className="text-sm font-bold text-red-600">{metric.currentValue} {metric.unit}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${currentPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />
            </div>
          </div>

          {/* Target Value */}
          <div className="bg-white/80 rounded-lg p-2.5 border border-green-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-600">Target</span>
              <span className="text-sm font-bold text-green-600">{typeof metric.targetValue === 'number' ? metric.targetValue : ''} {metric.unit}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${targetPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />
            </div>
          </div>
        </div>

        {/* Reduction/Improvement Badge */}
        {(metric.reduction || metric.improvement) && (
          <div className="mt-3 flex items-center justify-center">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              metric.reduction ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {metric.reduction ? `↓ ${metric.reduction}` : `↑ ${metric.improvement}`}
            </span>
          </div>
        )}

        {/* Expand Button */}
        <button
          onClick={onExpand}
          className="w-full mt-3 pt-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-center gap-2 bg-white/40 hover:bg-white/60 rounded-lg"
        >
          <span>{isExpanded ? 'Less Details' : 'More Details'}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.span>
        </button>
      </div>

      {/* Expanded Content - Always show when any card is expanded */}
      {(showContent || isExpanded) && (
        <motion.div
          initial={false}
          animate={{
            height: 'auto',
            opacity: 1,
            marginTop: 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className={`p-5 bg-gradient-to-br ${metric.bgColor} space-y-4`}>
            {/* Definition */}
            <div className="p-3 rounded-lg bg-white border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                Definition
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.definition}</p>
            </div>

            {/* Benchmark vs Target - Horizontal Layout */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-red-50 border-l-4 border-red-400">
                <p className="text-xs font-semibold text-red-600 mb-1">Current Benchmark</p>
                <p className="text-sm font-bold text-gray-800">{metric.currentBenchmark}</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50 border-l-4 border-green-400">
                <p className="text-xs font-semibold text-green-600 mb-1">Target (MVP)</p>
                <p className="text-sm font-bold text-gray-800">{metric.target}</p>
              </div>
            </div>

            {/* Measurement & Importance - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                  Measurement
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">{metric.measurement}</p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-gray-200">
                <h4 className="text-xs font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  Importance
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">{metric.importance}</p>
              </div>
            </div>

            {/* Financial Impact - Full Width if Present */}
            {metric.financialImpact && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">Financial Impact</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{metric.financialImpact}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

