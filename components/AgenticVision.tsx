'use client';

import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { Zap, Network, Brain, TrendingUp, Sparkles, AlertTriangle, GitBranch, Target } from 'lucide-react';

const comparisonData = [
  { capability: 'Adaptability', traditional: 20, agentic: 95 },
  { capability: 'Context Awareness', traditional: 30, agentic: 90 },
  { capability: 'Proactive Planning', traditional: 15, agentic: 85 },
  { capability: 'Multi-System Intelligence', traditional: 25, agentic: 92 },
  { capability: 'Learning Capability', traditional: 10, agentic: 88 },
];

const agenticFeatures = [
  {
    icon: Network,
    title: 'Multi-System Intelligence',
    description: 'Receives real-time data from bed management, EVS scheduling, maintenance systems, and occupancy forecasts simultaneously.',
    example: 'Understands that a delayed cleaning cascades into bed availability, patient admission time, and staff allocation.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Reasoning Under Uncertainty',
    description: 'Infers connections across separate systems to identify critical blockers.',
    example: 'Patient complaint → room discomfort → faster turnover if unaddressed → shows as critical blocker, not separate issue.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Proactive Prioritization',
    description: 'Predicts workflows 2-4 hours in advance and assigns resources preventively.',
    example: 'Predicts checkout windows, pre-assigns EVS to high-occupancy floors, flags maintenance issues before they propagate.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Operational Learning',
    description: 'Learns facility-specific patterns and optimizes continuously.',
    example: 'Which floors have highest discharge rates at 10 AM, which procedures leave more contamination, staff efficiency variations by shift.',
    color: 'from-orange-500 to-red-500',
  },
];

const traditionalProblems = [
  'Follows rigid, preprogrammed rules',
  'Fails catastrophically with real-world complexity',
  'Cannot handle staff shortages dynamically',
  'Misses equipment failures in separate systems',
  'No adaptation to urgent admissions',
  'Zero learning from historical patterns',
];

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function AgenticVision() {
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
          <span className="font-semibold">Competitive Edge</span>
        </motion.div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Agentic AI as a Competitive Edge
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Why Agentic AI, not traditional automation?
        </p>
      </motion.div>

      {/* Traditional vs Agentic Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Traditional Automation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-red-100">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Traditional Automation</h2>
          </div>
          
          <div className="bg-white/50 p-4 rounded-lg mb-6 font-mono text-sm text-gray-700">
            <p className="mb-2">IF room_status == "dirty"</p>
            <p className="mb-2 ml-4">AND staff_available == true</p>
            <p className="ml-4">THEN assign_cleaning()</p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Deterministic and fragile—follows preprogrammed rules that fail catastrophically when real-world complexity appears.
          </p>

          <div className="space-y-3">
            {traditionalProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <p className="text-gray-600">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agentic AI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 border-2 border-green-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Agentic AI</h2>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-4 rounded-lg mb-6">
            <p className="text-gray-700 font-semibold mb-2">Context-Aware Intelligence</p>
            <div className="flex items-center gap-2 flex-wrap">
              {['Real-time Data', 'Multi-System', 'Adaptive', 'Learning'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Contextual and adaptive</strong>—understands interconnections, reasons under uncertainty, 
            and continuously learns facility-specific patterns.
          </p>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-4 rounded-xl shadow-lg"
          >
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={comparisonData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="capability" tick={{ fill: '#6b7280', fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                <Radar
                  name="Traditional"
                  dataKey="traditional"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Agentic AI"
                  dataKey="agentic"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.5}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </div>

      {/* Agentic AI Features */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mb-12"
      >
        <motion.h2
          variants={staggerItem}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          How Agentic AI Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agenticFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-blue-400">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-blue-600">Example:</span> {feature.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
      >
        <GitBranch className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          The Future is Adaptive Intelligence
        </h3>
        <p className="text-white/90 text-lg">
          Transform your healthcare operations from reactive to predictive
        </p>
      </motion.div>
    </div>
  );
}

