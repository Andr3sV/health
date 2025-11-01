'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Shield, 
  Users, 
  TrendingDown,
  Database,
  Lock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  ChevronRight,
  Brain,
  Network,
  FileText,
  Zap,
  Eye
} from 'lucide-react';

export function RiskMitigation() {
  const riskMatrix = [
    {
      id: 1,
      risk: 'AI Hallucinations',
      description: 'System gives bad advice, trust is lost',
      probability: 'Medium',
      impact: 'High',
      probabilityLevel: 'medium',
      impactLevel: 'high',
      mitigation: 'Use of Grounding (Retrieval-Augmented Generation), human oversight, explainability',
      icon: Brain,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 2,
      risk: 'System Integration Failures',
      description: 'API timeouts, inconsistent data',
      probability: 'Medium–High',
      impact: 'High',
      probabilityLevel: 'high',
      impactLevel: 'high',
      mitigation: 'Fault-tolerant architecture, manual fallback mode, exhaustive testing',
      icon: Network,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200'
    },
    {
      id: 3,
      risk: 'Privacy / HIPAA Violations',
      description: 'Unauthorized exposure of sensitive data',
      probability: 'Low',
      impact: 'Critical',
      probabilityLevel: 'low',
      impactLevel: 'critical',
      mitigation: 'Encryption (at rest and in transit), audit logging, business associate agreements, regular security assessments',
      icon: Lock,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      id: 4,
      risk: 'Low Adoption / User Resistance',
      description: 'Managers avoid or underuse the system',
      probability: 'Medium',
      impact: 'High',
      probabilityLevel: 'medium',
      impactLevel: 'high',
      mitigation: 'Co-design with EVS managers, internal champions, training, quick wins',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 5,
      risk: 'Model Degradation Over Time',
      description: 'Learns wrong patterns',
      probability: 'Medium',
      impact: 'Medium',
      probabilityLevel: 'medium',
      impactLevel: 'medium',
      mitigation: 'Continuous monitoring, scheduled retraining, feedback loops, data drift detection',
      icon: TrendingDown,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200'
    }
  ];

  const detailedPlans = [
    {
      id: 1,
      risk: 'AI Hallucinations and Unreliable Recommendations',
      riskDetail: 'The AI recommends an action based on flawed reasoning. The manager follows it, causing an operational error.',
      mitigations: [
        {
          title: 'Retrieval-Augmented Generation (RAG)',
          description: 'Use RAG to ensure decisions are grounded in real data'
        },
        {
          title: 'Explainability',
          description: 'Provide rationale, confidence level, and manual override option'
        },
        {
          title: 'Human Oversight',
          description: 'Human oversight for all critical decisions'
        },
        {
          title: 'Continuous Monitoring',
          description: 'Monthly audit reviews and continuous monitoring'
        }
      ],
      icon: Brain,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 2,
      risk: 'System Integration Failures',
      riskDetail: 'API outages or delays cause outdated or inconsistent data.',
      mitigations: [
        {
          title: 'Fault-Tolerant Architecture',
          description: 'Automatic retries and real-time alerts'
        },
        {
          title: 'Data Consistency Checks',
          description: 'Periodic data consistency checks'
        },
        {
          title: 'Graceful Degradation',
          description: 'Functionality degrades gracefully when a subsystem fails'
        },
        {
          title: 'Comprehensive Testing',
          description: 'Integration and stress testing prior to deployment'
        }
      ],
      icon: Network,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200'
    },
    {
      id: 3,
      risk: 'Privacy and HIPAA Compliance',
      riskDetail: 'Unauthorized exposure of sensitive data.',
      mitigations: [
        {
          title: 'Data Minimization',
          description: 'Only collect data that is operationally required'
        },
        {
          title: 'Encryption & Access Controls',
          description: 'Strong encryption (at rest and in transit) and strict access controls'
        },
        {
          title: 'Compliant Contracts',
          description: 'HIPAA-compliant vendor and partner contracts'
        },
        {
          title: 'Security Audits',
          description: 'Regular security audits and penetration testing'
        }
      ],
      icon: Lock,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      id: 4,
      risk: 'Low Adoption and User Resistance',
      riskDetail: 'Managers avoid or underuse the system due to lack of trust or resistance to change.',
      mitigations: [
        {
          title: 'Co-Design Approach',
          description: 'Involve users early through co-design and feedback loops'
        },
        {
          title: 'Training & Support',
          description: 'Training and dedicated support during rollout'
        },
        {
          title: 'Internal Champions',
          description: 'Internal champion program to foster advocacy'
        },
        {
          title: 'Celebrate Wins',
          description: 'Celebrate early wins and incorporate continuous feedback to build trust'
        }
      ],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 5,
      risk: 'Model Degradation Over Time',
      riskDetail: 'Changing operational patterns reduce model accuracy and reliability.',
      mitigations: [
        {
          title: 'Performance Monitoring',
          description: 'Continuous performance monitoring and data drift alerts'
        },
        {
          title: 'Scheduled Retraining',
          description: 'Scheduled model retraining with recent data'
        },
        {
          title: 'Drift Detection',
          description: 'Detection of input distribution changes and automated retriggering of learning cycles'
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Human-in-the-loop feedback to validate and refine AI outputs'
        }
      ],
      icon: TrendingDown,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200'
    }
  ];

  const getProbabilityColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-700 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'critical': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white mb-6">
          <Shield className="w-5 h-5" />
          <span className="font-semibold">Risk Mitigation</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Risk Mitigation Strategy
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive risk management and mitigation plans for AI Supervisor deployment
        </p>
      </motion.div>

      {/* Risk Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Risk Matrix</h2>
        
        {/* Table Header */}
        <div className="overflow-x-auto mb-6">
          <div className="min-w-full bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 p-4">
            <div className="grid grid-cols-12 gap-4 font-semibold text-gray-800">
              <div className="col-span-12 md:col-span-3">Risk</div>
              <div className="col-span-12 md:col-span-2 text-center">Probability</div>
              <div className="col-span-12 md:col-span-2 text-center">Impact</div>
              <div className="col-span-12 md:col-span-5">Mitigation Strategy</div>
            </div>
          </div>

          {/* Risk Rows */}
          <div className="space-y-4">
            {riskMatrix.map((risk, index) => {
              const RiskIcon = risk.icon;
              return (
                <motion.div
                  key={risk.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`rounded-xl border-2 ${risk.borderColor} bg-gradient-to-br ${risk.bgColor} overflow-hidden shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="grid grid-cols-12 gap-4 p-5">
                    {/* Risk Column */}
                    <div className="col-span-12 md:col-span-3 flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${risk.color} flex-shrink-0`}>
                        <RiskIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 mb-1">{risk.risk}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{risk.description}</p>
                      </div>
                    </div>

                    {/* Probability Column */}
                    <div className="col-span-6 md:col-span-2 flex items-center justify-center">
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 ${getProbabilityColor(risk.probabilityLevel)}`}>
                        {risk.probability}
                      </span>
                    </div>

                    {/* Impact Column */}
                    <div className="col-span-6 md:col-span-2 flex items-center justify-center">
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 ${getImpactColor(risk.impactLevel)}`}>
                        {risk.impact}
                      </span>
                    </div>

                    {/* Mitigation Column */}
                    <div className="col-span-12 md:col-span-5 flex items-center">
                      <p className="text-sm text-gray-700 leading-relaxed">{risk.mitigation}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Detailed Mitigation Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Detailed Mitigation Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive strategies to address each identified risk
          </p>
        </div>

        <div className="space-y-6">
          {detailedPlans.map((plan, index) => (
            <MitigationPlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Mitigation Plan Card Component
function MitigationPlanCard({ plan, index }: { plan: any; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl border-2 ${plan.borderColor} bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all`}
    >
      {/* Card Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-6 text-left hover:bg-gradient-to-br ${plan.bgColor} transition-colors`}
      >
        <div className="flex items-start gap-4">
          <div className={`p-4 rounded-xl bg-gradient-to-br ${plan.color} shadow-lg flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-700">
                #{plan.id}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{plan.risk}</h3>
            <p className="text-gray-600 leading-relaxed">{plan.riskDetail}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 flex-shrink-0"
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isExpanded && (
          <div className={`p-6 bg-gradient-to-br ${plan.bgColor}`}>
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Mitigation Strategies
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.mitigations.map((mitigation: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-lg bg-white border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 mb-2">{mitigation.title}</h5>
                      <p className="text-sm text-gray-600 leading-relaxed">{mitigation.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

