'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Calculator,
  PieChart,
  BarChart3,
  Target,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Building2,
  Users,
  Clock,
  Percent,
  Calendar,
  Sparkles
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

export function FinancialJustification() {
  const pilotMetrics = [
    {
      metric: 'Room Downtime (min)',
      baseline: 120,
      target: 85,
      delta: -35,
      unit: 'min',
      improvement: true,
    },
    {
      metric: 'Effective Beds (calculated)',
      baseline: 200,
      target: 205,
      delta: 5,
      unit: 'beds',
      improvement: true,
    },
    {
      metric: 'Occupancy Rate (%)',
      baseline: 82,
      target: 85,
      delta: 3,
      unit: '%',
      improvement: true,
    },
    {
      metric: 'Annual Revenue Impact',
      baseline: 219,
      target: 226.7,
      delta: 7.7,
      unit: 'M',
      improvement: true,
      isRevenue: true,
    },
    {
      metric: 'EVS Labor Savings',
      baseline: 0,
      target: 35,
      delta: 35,
      unit: 'K',
      improvement: true,
      isSavings: true,
    },
  ];

  const implementationCosts = [
    { item: 'Engineering Team (4 FTE x 2 months)', cost: 300, unit: 'K' },
    { item: 'Infrastructure (Cloud, Tools)', cost: 20, unit: 'K' },
    { item: 'Pilot & Support', cost: 30, unit: 'K' },
    { item: 'Training & Documentation', cost: 15, unit: 'K' },
  ];

  const roiYearOne = [
    { category: 'Revenue Impact', amount: 7.7, color: '#10b981', isPositive: true },
    { category: 'Implementation Costs', amount: -0.365, color: '#ef4444', isPositive: false },
    { category: 'Operating Costs', amount: -0.05, color: '#f59e0b', isPositive: false },
    { category: 'Net Benefit', amount: 7.285, color: '#3b82f6', isPositive: true },
  ];

  const multiHospitalData = [
    { year: 'Year 1', hospitals: 1, revenue: 7.7, costs: 0.415, net: 7.285 },
    { year: 'Year 2', hospitals: 10, revenue: 69, costs: 1.5, net: 67.5 },
  ];

  const pieData = [
    { name: 'Engineering Team', value: 300 },
    { name: 'Infrastructure', value: 20 },
    { name: 'Pilot & Support', value: 30 },
    { name: 'Training', value: 15 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Financial Justification and ROI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Updated based on proposed roadmap - Phased approach enabling progressive value capture
        </p>
      </motion.div>

      {/* Pilot Hospital Case */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 shadow-lg">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Pilot Hospital Case (200 Beds)</h2>
            <p className="text-gray-600 text-sm mt-1">
              Targets reflect efficiency gains through Phases 1-3 (MVP)
            </p>
          </div>
        </div>

        {/* Metrics Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-gray-200 shadow-lg mb-6">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Metric</th>
                <th className="px-6 py-4 text-center font-bold">Baseline</th>
                <th className="px-6 py-4 text-center font-bold">Target (Phase 3 MVP)</th>
                <th className="px-6 py-4 text-center font-bold">Delta</th>
              </tr>
            </thead>
            <tbody>
              {pilotMetrics.map((item, idx) => (
                <motion.tr
                  key={item.metric}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-800">{item.metric}</td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {item.baseline > 0 ? `${item.baseline}${item.unit !== '%' && item.unit !== 'M' && item.unit !== 'K' ? ` ${item.unit}` : item.unit}` : '-'}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">
                    {item.target > 0 ? `${item.target}${item.unit !== '%' && item.unit !== 'M' && item.unit !== 'K' ? ` ${item.unit}` : item.unit}` : '-'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                      item.improvement
                        ? item.isRevenue || item.isSavings
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {item.delta > 0 ? (
                        <>
                          <ArrowUp className="w-4 h-4" />
                          +{item.delta}{item.unit}
                        </>
                      ) : (
                        <>
                          <ArrowDown className="w-4 h-4" />
                          {item.delta}{item.unit}
                        </>
                      )}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visual Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-800">Downtime Reduction</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-1">-35 min</p>
            <p className="text-sm text-gray-600">29% improvement</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-gray-800">Revenue Impact</h3>
            </div>
            <p className="text-3xl font-bold text-green-600 mb-1">+$7.7M</p>
            <p className="text-sm text-gray-600">Annual increase</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 shadow-lg ring-4 ring-purple-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-800">Effective Beds</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600 mb-1">+5 beds</p>
            <p className="text-sm text-gray-600">2.5% capacity gain</p>
          </motion.div>
        </div>

        {/* Notes */}
        <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">Notes</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Targets reflect efficiency gains through Context Aggregator, Task Prioritization, and Automated Alerts (Phases 1–3). 
                Later phases (Predictive Assignment, Dashboard, Root Cause Agent) will further increase on-time room readiness 
                and reduce critical delays, which may improve revenue and labor savings beyond these initial estimates.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MVP Implementation Costs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">MVP Implementation Costs (2 months)</h2>
            <p className="text-gray-600 text-sm mt-1">Breakdown of initial investment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Costs Table */}
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Breakdown</h3>
            <div className="space-y-3">
              {implementationCosts.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <span className="text-sm text-gray-700">{item.item}</span>
                  <span className="text-lg font-bold text-gray-800">${item.cost}{item.unit}</span>
                </div>
              ))}
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white mt-4 border-2 border-blue-400">
                <span className="text-lg font-bold">Total Approx.</span>
                <span className="text-2xl font-extrabold">$365K</span>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value}K`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* ROI - First Year */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">ROI – First Year (Pilot Hospital)</h2>
            <p className="text-gray-600 text-sm mt-1">20x return on investment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ROI Breakdown */}
          <div className="space-y-4">
            {roiYearOne.map((item, idx) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className={`rounded-xl border-2 p-6 shadow-lg ${
                  item.isPositive
                    ? 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50'
                    : 'border-red-200 bg-gradient-to-br from-red-50 to-orange-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-800">{item.category}</span>
                  <span className={`text-2xl font-bold ${
                    item.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.amount > 0 ? '+' : ''}${item.amount}{item.amount > 1 ? 'M' : 'M'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Bar Chart */}
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Financial Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiYearOne}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => `$${value}M`} />
                <Bar dataKey="amount" fill="#10b981">
                  {roiYearOne.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-6 rounded-xl border-2 border-green-400 bg-gradient-to-r from-green-500 to-emerald-500 p-8 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm font-semibold mb-2">First Year ROI</p>
              <p className="text-5xl font-extrabold text-white">~20x</p>
              <p className="text-green-100 text-sm mt-2">Net Benefit: $7.3M</p>
            </div>
            <div className="text-right">
              <CheckCircle2 className="w-16 h-16 text-white/80 mb-2" />
              <p className="text-white text-sm font-medium">Exceptional Return</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Multi-Hospital Scenario */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Multi-Hospital Scenario (Year 2)</h2>
            <p className="text-gray-600 text-sm mt-1">Scaling to 10 hospitals</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg">
            <p className="text-sm font-semibold text-gray-600 mb-2">Additional Revenue</p>
            <p className="text-4xl font-bold text-blue-600">~$69M</p>
          </div>
          <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg">
            <p className="text-sm font-semibold text-gray-600 mb-2">Incremental Costs</p>
            <p className="text-4xl font-bold text-red-600">~$1.5M</p>
          </div>
          <div className="rounded-xl border-2 border-green-400 bg-gradient-to-r from-green-500 to-emerald-500 p-6 shadow-xl ring-4 ring-green-200">
            <p className="text-sm font-semibold text-white mb-2">Cumulative Net Benefit</p>
            <p className="text-4xl font-extrabold text-white">~$60M</p>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Year-over-Year Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={multiHospitalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value}M`} />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
              <Bar dataKey="costs" fill="#ef4444" name="Costs" />
              <Bar dataKey="net" fill="#3b82f6" name="Net Benefit" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8 }}
        className="rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border-2 border-blue-200 p-8 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 shadow-md flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Summary</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The phased roadmap enables progressive value capture: <strong>Phases 1–3 establish core operational efficiencies</strong>, 
              while subsequent phases (4–7) enhance predictive capabilities, reduce delays further, and strengthen ROI across multiple sites.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">MVP ROI</p>
                <p className="text-2xl font-bold text-green-600">20x</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">First Year Benefit</p>
                <p className="text-2xl font-bold text-blue-600">$7.3M</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Year 2 (10 sites)</p>
                <p className="text-2xl font-bold text-purple-600">$60M</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

