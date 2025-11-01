'use client';

import { motion } from 'framer-motion';
import { ExecutiveSummary } from '@/components/ExecutiveSummary';
import { AgenticVision } from '@/components/AgenticVision';
import { ArchitectureUX } from '@/components/ArchitectureUX';
import { UserResearch } from '@/components/UserResearch';
import { AgenticSuperiority } from '@/components/AgenticSuperiority';
import { SuccessMetrics } from '@/components/SuccessMetrics';
import { RiskMitigation } from '@/components/RiskMitigation';
import { PhaseRoadmap } from '@/components/PhaseRoadmap';
import { CriticalSuccessFactors } from '@/components/CriticalSuccessFactors';
import { MarketBenchmark } from '@/components/MarketBenchmark';
import { SidebarLayout } from '@/components/SidebarLayout';
import { useState } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 0, component: <ExecutiveSummary />, title: 'Executive Summary' },
    { id: 1, component: <AgenticVision />, title: 'Agentic AI Vision' },
    { id: 2, component: <ArchitectureUX />, title: 'Architecture & UX' },
    { id: 3, component: <UserResearch />, title: 'User Research' },
    { id: 4, component: <AgenticSuperiority />, title: 'Why Agentic AI' },
    { id: 5, component: <SuccessMetrics />, title: 'Success Metrics' },
    { id: 6, component: <RiskMitigation />, title: 'Risk Mitigation' },
    { id: 7, component: <PhaseRoadmap />, title: 'Phase Roadmap' },
    { id: 8, component: <CriticalSuccessFactors />, title: 'Success Factors' },
    { id: 9, component: <MarketBenchmark />, title: 'Market Benchmark' },
  ];

  return (
    <SidebarLayout 
      currentSection={currentSection}
      onSectionChange={setCurrentSection}
    >
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <main className="p-6">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {sections[currentSection].component}
          </motion.div>
        </main>
      </div>
    </SidebarLayout>
  );
}
