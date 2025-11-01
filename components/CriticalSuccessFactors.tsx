'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Users,
  Heart,
  Server,
  CheckCircle2,
  AlertCircle,
  Key,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export function CriticalSuccessFactors() {
  const successFactors = [
    {
      id: 1,
      title: 'Data Quality and Freshness',
      description: 'Reliable, up-to-date data accessible via APIs',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: 'Pilot Hospital Engagement',
      description: 'Active participation and support from the pilot site',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      title: 'EVS Manager Adoption',
      description: 'Willingness of EVS managers to use and trust the system',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
    },
    {
      id: 4,
      title: 'Robust Technical Infrastructure',
      description: 'Stable systems and network to support real-time operations',
      icon: Server,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
    },
  ];

  const keyAssumptions = [
    {
      id: 1,
      title: 'Modern APIs Available',
      description: 'Access to Epic/Cerner REST endpoints for integration',
      icon: Key,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200',
    },
    {
      id: 2,
      title: 'EVS Teams Open to Digital Tools',
      description: 'Staff are receptive to adopting AI-driven workflow solutions',
      icon: Zap,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
    },
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
          Critical Success Factors and Assumptions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Key dependencies and foundational assumptions for project success
        </p>
      </motion.div>

      {/* Success Factors Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Success Depends On</h2>
            <p className="text-gray-600 text-sm mt-1">
              Critical factors that drive project success
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successFactors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className={`rounded-2xl border-2 ${factor.borderColor} bg-gradient-to-br ${factor.bgColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${factor.color} shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/80 text-gray-700">
                        #{factor.id}
                      </span>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {factor.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Key Assumptions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Key Assumptions</h2>
            <p className="text-gray-600 text-sm mt-1">
              Foundational assumptions that must hold true
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyAssumptions.map((assumption, idx) => {
            const Icon = assumption.icon;
            return (
              <motion.div
                key={assumption.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className={`rounded-2xl border-2 ${assumption.borderColor} bg-gradient-to-br ${assumption.bgColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-16 -mt-16" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${assumption.color} shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/80 text-gray-700">
                        #{assumption.id}
                      </span>
                      <Shield className="w-4 h-4 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {assumption.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {assumption.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Summary Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border-2 border-blue-200 p-8 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 shadow-md flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Foundation for Success
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These critical success factors and assumptions form the foundation of our implementation strategy. 
              Regular monitoring and validation of these dependencies will ensure project alignment and minimize risks 
              throughout the deployment lifecycle.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                4 Success Factors
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                2 Key Assumptions
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

