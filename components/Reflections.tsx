'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Users,
  Database,
  IterationCw,
  Shield,
  TrendingUp,
  Brain,
  Target
} from 'lucide-react';

export function Reflections() {
  const reflections = [
    {
      id: 1,
      title: 'Iterative Delivery and User Engagement',
      icon: IterationCw,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      content: 'It is far more effective to deliver in small, iterative releases, allowing the end users to interact with the system early on. This hands-on engagement provides invaluable feedback, helping us continuously refine the system prompt, improve contextual understanding, and ensure that the AI\'s behavior truly aligns with user needs in real operational settings.',
    },
    {
      id: 2,
      title: 'Human-in-the-Loop Model',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      content: 'In the short term, the AI will not reach full autonomy for critical, high-stakes tasks — and it shouldn\'t. Human oversight and intervention are essential, both to ensure safety and reliability, and to enable the AI to learn from real-world corrections. This human-in-the-loop model transforms each interaction into a training opportunity, gradually improving decision quality and trust in the system.',
    },
    {
      id: 3,
      title: 'Data as the Foundation',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      content: 'The main challenge, however, is not purely technological — it lies in data organization and quality. AI performance is constrained less by the sophistication of its algorithms and more by the availability, structure, and consistency of the underlying data. To unlock the full potential of the AI Supervisor, the foundation must be solid: clean, timely, and well-integrated data pipelines across systems.',
    },
  ];

  const keyInsights = [
    {
      icon: Lightbulb,
      text: 'Small releases enable faster feedback loops',
      color: 'text-yellow-600',
    },
    {
      icon: Shield,
      text: 'Human oversight ensures safety and learning',
      color: 'text-blue-600',
    },
    {
      icon: Database,
      text: 'Data quality is the true constraint, not algorithms',
      color: 'text-purple-600',
    },
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
          Reflections on the Project and the Role of AI
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Key learnings from building an AI Supervisor and the fundamental principles that drive effective AI implementation in healthcare operations
        </p>
      </motion.div>

      {/* Key Insights Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200"
      >
        <div className="flex flex-wrap items-center justify-center gap-6">
          {keyInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md"
              >
                <Icon className={`w-5 h-5 ${insight.color}`} />
                <span className="text-sm font-medium text-gray-700">{insight.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Main Reflections */}
      <div className="space-y-8">
        {reflections.map((reflection, index) => {
          const Icon = reflection.icon;
          return (
            <motion.div
              key={reflection.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className={`rounded-2xl border-2 ${reflection.borderColor} bg-gradient-to-br ${reflection.bgColor} overflow-hidden shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${reflection.color} shadow-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {reflection.title}
                    </h2>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl p-6 border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {reflection.content}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Insight Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">The Core Principle</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Effective AI implementation in healthcare requires a balanced approach: iterative development that engages users early, human oversight that ensures safety while enabling learning, and a robust data foundation that unlocks the system's true potential. These three pillars work together to create AI systems that are not just technologically advanced, but truly aligned with real-world operational needs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

