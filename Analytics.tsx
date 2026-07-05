import React, { useState } from 'react';
import { 
  Activity, Database, ShieldAlert, Wallet, Landmark, Bell, 
  BrainCircuit, LayoutDashboard, Search
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FadeIn } from '@/src/components/animations';

import { LiveIndexer } from './AnalyticsModules/LiveIndexer';
import { ProtocolHealth } from './AnalyticsModules/ProtocolHealth';
import { WalletIntel } from './AnalyticsModules/WalletIntel';
import { TreasuryGovMonitor } from './AnalyticsModules/TreasuryGovMonitor';
import { AlertCenter } from './AnalyticsModules/AlertCenter';

export function Analytics() {
  const [activeTab, setActiveTab] = useState('indexer');

  const tabs = [
    { id: 'indexer', label: 'Live Indexer', icon: Database },
    { id: 'health', label: 'Protocol Health', icon: Activity },
    { id: 'wallet', label: 'Wallet Intel', icon: Wallet },
    { id: 'treasury', label: 'Treasury & Gov', icon: Landmark },
    { id: 'alerts', label: 'Alert Center', icon: Bell },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'indexer': return <LiveIndexer />;
      case 'health': return <ProtocolHealth />;
      case 'wallet': return <WalletIntel />;
      case 'treasury': return <TreasuryGovMonitor />;
      case 'alerts': return <AlertCenter />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-20">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-aura-500" />
              On-Chain Intelligence
            </h1>
            <p className="text-gray-400 mt-1">Real-time blockchain indexing, anomaly detection, and ecosystem monitoring.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="shrink-0 gap-2">
              <ShieldAlert className="w-4 h-4 text-green-400" /> System Active
            </Button>
          </div>
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 ${isActive ? 'bg-aura-500/20 text-aura-300 border border-aura-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'}`}
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
