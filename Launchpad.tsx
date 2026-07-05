import React, { useState } from 'react';
import { 
  Rocket, Search, LayoutGrid, Users, LineChart, BrainCircuit,
  Wallet, ShieldCheck, Download, Activity, ArrowRight, ArrowLeft
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

import { LaunchpadHome } from './LaunchpadModules/LaunchpadHome';
import { ProjectDetails } from './LaunchpadModules/ProjectDetails';
import { Incubator } from './LaunchpadModules/Incubator';
import { InvestorDashboard } from './LaunchpadModules/InvestorDashboard';
import { EcosystemAnalytics } from './LaunchpadModules/EcosystemAnalytics';
import { AIAnalysis } from './LaunchpadModules/AIAnalysis';

export function Launchpad() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const tabs = [
    { id: 'home', label: 'Launchpad', icon: Rocket },
    { id: 'incubator', label: 'Incubator', icon: LayoutGrid },
    { id: 'dashboard', label: 'Investor Dashboard', icon: Wallet },
    { id: 'analytics', label: 'Ecosystem Analytics', icon: LineChart },
    { id: 'analysis', label: 'AI Analysis', icon: BrainCircuit },
  ];

  const handleSelectProject = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  const renderContent = () => {
    if (selectedProject) {
      return <ProjectDetails projectId={selectedProject} onBack={handleBackToProjects} />;
    }

    switch (activeTab) {
      case 'home': return <LaunchpadHome onSelectProject={handleSelectProject} />;
      case 'incubator': return <Incubator />;
      case 'dashboard': return <InvestorDashboard />;
      case 'analytics': return <EcosystemAnalytics />;
      case 'analysis': return <AIAnalysis />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-20">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Rocket className="w-8 h-8 text-aura-500" />
              CoreDeFi Launchpad
            </h1>
            <p className="text-gray-400 mt-1">Decentralized fundraising, incubation, and ecosystem builder.</p>
          </div>
          {!selectedProject && (
            <div className="flex gap-2">
              <Button variant="outline" className="shrink-0 gap-2">
                <ShieldCheck className="w-4 h-4" /> KYC Status
              </Button>
            </div>
          )}
        </div>
      </FadeIn>

      {!selectedProject && (
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar gap-2 mb-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 ${isActive ? 'bg-aura-500/20 text-aura-300 border border-aura-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'}`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}
