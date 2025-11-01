'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Target,
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap,
  BarChart3,
  Award
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export function MarketBenchmark() {
  const competitors = [
    {
      name: 'Kontakt.io',
      solution: 'Real-time discharge detection via RTLS',
      launchDate: 'Feb 2025',
      traction: 'Piloting with major health systems',
      threatLevel: 'HIGH',
      threatColor: 'bg-red-500',
      threatBg: 'bg-red-50',
      threatBorder: 'border-red-200',
    },
    {
      name: 'Qventus',
      solution: 'Agentic AI for patient flow + discharge planning',
      launchDate: '2012 (mature)',
      traction: '50+ health systems',
      threatLevel: 'MEDIUM',
      threatColor: 'bg-yellow-500',
      threatBg: 'bg-yellow-50',
      threatBorder: 'border-yellow-200',
    },
    {
      name: 'LeanTaaS',
      solution: 'Predictive analytics for discharge forecasting',
      launchDate: '2011 (mature)',
      traction: '20+ major health systems',
      threatLevel: 'MEDIUM',
      threatColor: 'bg-yellow-500',
      threatBg: 'bg-yellow-50',
      threatBorder: 'border-yellow-200',
    },
    {
      name: 'LiveData',
      solution: 'OR turnover optimization (surgical suites only)',
      launchDate: '2001 (mature)',
      traction: '700+ ORs across 85+ hospitals',
      threatLevel: 'LOW',
      threatColor: 'bg-green-500',
      threatBg: 'bg-green-50',
      threatBorder: 'border-green-200',
    },
    {
      name: 'Epic/Cerner',
      solution: 'Basic bed management (EHR vendors)',
      launchDate: 'Ongoing',
      traction: '90%+ US hospitals',
      threatLevel: 'MEDIUM-HIGH (future)',
      threatColor: 'bg-yellow-600',
      threatBg: 'bg-yellow-50',
      threatBorder: 'border-yellow-200',
    },
    {
      name: 'Virtual MGR',
      solution: 'EVS task management software',
      launchDate: 'Niche',
      traction: 'Small vendor',
      threatLevel: 'LOW',
      threatColor: 'bg-green-500',
      threatBg: 'bg-green-50',
      threatBorder: 'border-green-200',
    },
    {
      name: 'Philips/GE',
      solution: 'Emerging agentic AI capabilities',
      launchDate: 'Early-stage',
      traction: 'Not focused on room turnover',
      threatLevel: 'LOW',
      threatColor: 'bg-green-500',
      threatBg: 'bg-green-50',
      threatBorder: 'border-green-200',
    },
  ];

  const roiComparison = [
    { name: 'Kontakt.io', idleTime: 50, revenue: 1.52, time: 16, cost: 300 },
    { name: 'Qventus', idleTime: 20, revenue: 2.0, time: 24, cost: 500 },
    { name: 'LeanTaaS', idleTime: 15, revenue: 1.2, time: 24, cost: 400 },
    { name: 'Health AI Supervisor', idleTime: 30, revenue: 7.7, time: 12, cost: 365 },
  ];

  const marketData = [
    { metric: 'Current Size (2025)', value: '$1.19-1.27B' },
    { metric: 'Growth Rate (CAGR)', value: '13.8-17.6%' },
    { metric: 'Projected Size (2033)', value: '$4-5.4B' },
  ];

  const capabilityComparison = [
    { capability: 'Real-time Detection', Kontakt: 100, Qventus: 30, Health: 100 },
    { capability: 'Orchestration', Kontakt: 20, Qventus: 40, Health: 100 },
    { capability: 'Multi-System Coord', Kontakt: 10, Qventus: 70, Health: 100 },
    { capability: 'Predictive Planning', Kontakt: 0, Qventus: 80, Health: 100 },
    { capability: 'Agentic AI', Kontakt: 0, Qventus: 60, Health: 100 },
    { capability: 'EVS Workflow', Kontakt: 50, Qventus: 10, Health: 100 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Comprehensive Market Benchmark Analysis
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI Supervisor vs. Competitors
        </p>
      </motion.div>

      {/* Quick Answer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border-2 border-blue-200 p-8 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 shadow-md flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Quick Answer</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Seven major competitors have built solutions addressing parts of the hospital room turnover problem, 
              but none provide the complete orchestration that AI Supervisor delivers.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Market Reality (November 2025)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Competitors Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          Competitive Landscape
        </h2>
        <div className="overflow-x-auto rounded-xl border-2 border-gray-200 shadow-lg">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Competitor</th>
                <th className="px-6 py-4 text-left font-bold">What They Solve</th>
                <th className="px-6 py-4 text-left font-bold">Launch Date</th>
                <th className="px-6 py-4 text-left font-bold">Traction</th>
                <th className="px-6 py-4 text-center font-bold">Threat Level</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, idx) => (
                <motion.tr
                  key={competitor.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-800">{competitor.name}</td>
                  <td className="px-6 py-4 text-gray-600">{competitor.solution}</td>
                  <td className="px-6 py-4 text-gray-600">{competitor.launchDate}</td>
                  <td className="px-6 py-4 text-gray-600">{competitor.traction}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white ${competitor.threatColor}`}>
                      {competitor.threatLevel}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Biggest Threat - Kontakt.io */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">🔴 BIGGEST THREAT: Kontakt.io</h2>
            <p className="text-gray-600 text-sm mt-1">Launch Date: February 2025 (VERY RECENT)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Strengths */}
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Why They're Strong
            </h3>
            <ul className="space-y-2">
              {[
                'RTLS technology is mature and battle-tested',
                'Eliminates manual handoff delays',
                'Real-time vs. reactive approach',
                'Mobile-first UX for frontline workers',
                'Published case studies show real ROI',
                'Strong funding and momentum',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitations */}
          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Why They're Limited
            </h3>
            <ul className="space-y-2">
              {[
                'Detection-only (not orchestration)',
                'No maintenance visibility',
                'No multi-system coordination',
                'Reactive, not predictive',
                'No agentic AI capabilities',
                'No RTLS of staff location',
                'Treats all rooms equally',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Competitive Assessment */}
        <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Competitive Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Problem Coverage</p>
              <p className="text-2xl font-bold text-blue-600">~50%</p>
              <p className="text-xs text-gray-500 mt-1">Kontakt.io solves detection only</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">ROI Advantage</p>
              <p className="text-2xl font-bold text-green-600">5x</p>
              <p className="text-xs text-gray-500 mt-1">$7.7M vs $1.52M</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Timeline Advantage</p>
              <p className="text-2xl font-bold text-purple-600">12 weeks</p>
              <p className="text-xs text-gray-500 mt-1">Health can reach market faster</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ROI Comparison Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-green-600" />
          Real ROI Comparison
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Impact Chart */}
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Revenue Impact (200-bed hospital)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => `$${value}M`} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue (Millions)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Implementation Comparison */}
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Implementation Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => `${value} weeks`} />
                <Legend />
                <Bar dataKey="time" fill="#3b82f6" name="Weeks" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-6 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-green-800 mb-2">Key Insight</h4>
              <p className="text-gray-700 leading-relaxed">
                <strong>Health's 5x ROI advantage</strong> comes from orchestration (not just detection). 
                Kontakt.io moves the needle on idle time; Health moves the needle on revenue recovery 
                through intelligent coordination.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Market Size */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-purple-600" />
          Market Size & Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketData.map((item, idx) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + idx * 0.1 }}
              className="rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 shadow-lg"
            >
              <p className="text-sm font-semibold text-gray-600 mb-2">{item.metric}</p>
              <p className="text-3xl font-bold text-purple-600">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Qventus Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">🟡 SECOND BIGGEST THREAT: Qventus</h2>
            <p className="text-gray-600 text-sm mt-1">Mature company (founded 2012, $105M Series D funding)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">Why They're Strong</h3>
            <ul className="space-y-2">
              {[
                'Proven agentic AI capabilities',
                'Deep EHR integration',
                'Large customer base (50+ health systems)',
                'Strong track record of financial ROI',
                'Well-capitalized ($105M Series D)',
                'Strategic partnerships',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Why They Don't Compete (Yet)</h3>
            <ul className="space-y-2">
              {[
                'Focus is discharge planning, not room turnover',
                'No EVS workflow coordination',
                'No RTLS integration',
                'No maintenance system coordination',
                'Expensive ($500K+/year)',
                'Slow implementation (6+ months)',
                'No frontline mobile interface',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <XCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-3">Competitive Assessment</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Qventus is <strong>complementary, not competitive</strong>. They solve strategic level 
            ("discharge patients faster"); You solve operational level ("clean rooms faster").
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <p className="text-sm text-gray-600 mb-1">Integration Opportunity</p>
              <p className="text-sm font-semibold text-indigo-700">Their forecasting → Your prioritization</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <p className="text-sm text-gray-600 mb-1">Positioning</p>
              <p className="text-sm font-semibold text-indigo-700">Layer on top, not replace</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <p className="text-sm text-gray-600 mb-1">Timeline Advantage</p>
              <p className="text-sm font-semibold text-indigo-700">12 weeks vs 24 months</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Capability Radar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Award className="w-8 h-8 text-blue-600" />
          Capability Comparison
        </h2>
        <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-lg">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={capabilityComparison}>
              <PolarGrid />
              <PolarAngleAxis dataKey="capability" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Kontakt.io" dataKey="Kontakt" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Radar name="Qventus" dataKey="Qventus" stroke="#eab308" fill="#eab308" fillOpacity={0.3} />
              <Radar name="Health AI Supervisor" dataKey="Health" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}

