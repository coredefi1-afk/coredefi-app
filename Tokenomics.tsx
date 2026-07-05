import React, { useState } from 'react';
import { 
  PieChart as PieChartIcon, Activity, TrendingUp, AlertTriangle, 
  Download, BrainCircuit, RefreshCw, Layers, ShieldCheck, Zap
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

import { TokenomicsOverview } from './TokenomicsModules/Overview';
import { SupplyEngine } from './TokenomicsModules/SupplyEngine';
import { RebaseMonitor } from './TokenomicsModules/RebaseMonitor';
import { TreasuryBacking } from './TokenomicsModules/TreasuryBacking';
import { EcosystemHealth } from './TokenomicsModules/EcosystemHealth';
import { Simulator } from './TokenomicsModules/Simulator';
import { TokenFlow } from './TokenomicsModules/TokenFlow';
import { AIInsights } from './TokenomicsModules/AIInsights';
import { Alerts } from './TokenomicsModules/Alerts';

export function Tokenomics() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: PieChartIcon },
    { id: 'supply', label: 'Supply Engine', icon: Layers },
    { id: 'rebase', label: 'Rebase Monitor', icon: RefreshCw },
    { id: 'treasury', label: 'Treasury Backing', icon: ShieldCheck },
    { id: 'health', label: 'Ecosystem Health', icon: Activity },
    { id: 'flow', label: 'Token Flow', icon: TrendingUp },
    { id: 'simulator', label: 'Simulator', icon: Zap },
    { id: 'insights', label: 'AI Insights', icon: BrainCircuit },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <TokenomicsOverview />;
      case 'supply': return <SupplyEngine />;
      case 'rebase': return <RebaseMonitor />;
      case 'treasury': return <TreasuryBacking />;
      case 'health': return <EcosystemHealth />;
      case 'flow': return <TokenFlow />;
      case 'simulator': return <Simulator />;
      case 'insights': return <AIInsights />;
      case 'alerts': return <Alerts />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-20">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Tokenomics Intelligence</h1>
            <p className="text-gray-400 mt-1">Simulate, monitor, optimize, and visualize protocol economic health.</p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            <Download className="w-4 h-4" /> Export Report
          </Button>
        </div>
      </FadeIn>

      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar gap-2 mb-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 ${isActive ? 'bg-aura-500/20 text-aura-300 border border-aura-500/30' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}
