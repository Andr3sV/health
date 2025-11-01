'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingDown, Clock, Bed, Brain, ArrowRight } from 'lucide-react';

const beforeAfterData = [
  { name: 'Before', time: 120, color: '#ef4444' },
  { name: 'After', time: 75, color: '#10b981' },
];

const impactMetrics = [
  {
    icon: Clock,
    label: 'Idle Time Reduction',
    value: '30-40%',
    description: 'From 120 to 70-80 minutes',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bed,
    label: 'Bed Capacity Recovery',
    value: '10-15',
    description: 'Additional beds per 200-bed hospital/year',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Brain,
    label: 'Cognitive Load Reduction',
    value: '60%',
    description: 'Through intelligent orchestration',
    color: 'from-purple-500 to-pink-500',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ExecutiveSummary() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
        >
          Executive Summary
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Transform reactive, fragmented workflows into proactive, coordinated operations
        </p>
      </motion.div>

      {/* Problem Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-red-100">
            <TrendingDown className="w-8 h-8 text-red-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Current room turnover workflow represents a <strong>classic orchestration failure</strong>—multiple 
              intelligent systems (bed management, maintenance, EVS scheduling) operate in silos despite their 
              interdependencies. The result: <strong>delayed patient admissions</strong>, poor experiences, 
              and <strong>wasted operational capacity</strong>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Solution */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100"
      >
        <div className="flex items-start gap-4 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Solution: AI Supervisor</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              A foundational <strong>orchestration layer</strong> that transforms workflows into coordinated operations. 
              Instead of adding complexity, it <strong>removes it</strong> by acting as an intelligent conductor among 
              existing systems—providing EVS Managers and hospital staff with a unified, context-aware view.
            </p>
          </div>
        </div>

        {/* Before/After Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Room Idle Time: Before vs After
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={beforeAfterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="time" radius={[8, 8, 0, 0]}>
                {beforeAfterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center mt-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              37.5% reduction in idle time
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Core Value Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mb-12"
      >
        <motion.h2
          variants={staggerItem}
          className="text-3xl font-bold text-center mb-8 text-gray-800"
        >
          Core Value Proposition
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5`} />
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.label}</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
