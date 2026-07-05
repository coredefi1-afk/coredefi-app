import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SlideUp } from '@/src/components/animations';
import { 
  Database, Activity, ArrowRight, Server, Globe, Hash, Clock, Box
} from 'lucide-react';

export function LiveIndexer() {
  const [events, setEvents] = useState([
    { id: 1, type: 'Transfer', chain: 'Ethereum', hash: '0x12...34af', from: '0xAb...cd91', to: '0x99...ef22', value: '1,500 USDC', time: 'Just now' },
    { id: 2, type: 'Stake', chain: 'Arbitrum', hash: '0x45...88bc', from: '0x11...22aa', to: 'CoreDeFi Staking', value: '15,000 AURAX', time: '12s ago' },
    { id: 3, type: 'Treasury Movement', chain: 'Ethereum', hash: '0x89...11de', from: 'CoreDeFi Treasury', to: '0x55...33cc', value: '50 ETH', time: '45s ago' },
    { id: 4, type: 'DAO Vote', chain: 'Polygon', hash: '0xaa...bbcc', from: '0x77...66dd', to: 'CoreDeFi Governance', value: 'Proposal #42', time: '1m ago' },
    { id: 5, type: 'Claim', chain: 'Base', hash: '0xcc...ddff', from: 'CoreDeFi Rewards', to: '0x44...55ee', value: '3,200 AURAX', time: '2m ago' },
  ]);

  const chains = [
    { name: 'Ethereum', status: 'Synced', block: '18,245,102', latency: '12ms' },
    { name: 'Arbitrum', status: 'Synced', block: '142,551,008', latency: '15ms' },
    { name: 'Optimism', status: 'Synced', block: '110,230,441', latency: '14ms' },
    { name: 'Base', status: 'Synced', block: '9,442,105', latency: '18ms' },
    { name: 'Polygon', status: 'Synced', block: '48,112,500', latency: '22ms' },
  ];

  return (
    <div className="space-y-6">
      <SlideUp delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {chains.map((chain, i) => (
            <Card key={i} className="p-4 border-gray-800/50 bg-gray-900/50 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-aura-500" />
                  <span className="font-bold text-white text-sm">{chain.name}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Block</span>
                  <span className="text-gray-300 font-mono">{chain.block}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Latency</span>
                  <span className="text-green-400">{chain.latency}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SlideUp>

      <SlideUp delay={0.2}>
        <Card className="p-6 border-gray-800/50 bg-gray-900/50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-aura-500" /> Real-Time Event Engine
              </h3>
              <p className="text-sm text-gray-400 mt-1">Live stream of aggregated cross-chain events.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter by Chain</Button>
              <Button variant="outline" size="sm">Event Type</Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="pb-3 font-medium">Event Type</th>
                  <th className="pb-3 font-medium">Chain</th>
                  <th className="pb-3 font-medium">Tx Hash</th>
                  <th className="pb-3 font-medium">From</th>
                  <th className="pb-3 font-medium">To / Action</th>
                  <th className="pb-3 font-medium">Value</th>
                  <th className="pb-3 font-medium text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {events.map((ev, i) => (
                  <tr key={ev.id} className="text-gray-300 hover:bg-gray-800/30 transition-colors">
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium bg-gray-800 border border-gray-700
                        ${ev.type === 'Treasury Movement' ? 'text-red-400 border-red-500/20 bg-red-500/10' : 
                          ev.type === 'Stake' ? 'text-green-400 border-green-500/20 bg-green-500/10' : 
                          'text-aura-400 border-aura-500/20 bg-aura-500/10'}`}>
                        {ev.type}
                      </span>
                    </td>
                    <td className="py-4 flex items-center gap-2"><Globe className="w-3 h-3 text-gray-500" /> {ev.chain}</td>
                    <td className="py-4 font-mono text-gray-400 hover:text-aura-400 cursor-pointer">{ev.hash}</td>
                    <td className="py-4 font-mono">{ev.from}</td>
                    <td className="py-4 font-mono">{ev.to}</td>
                    <td className="py-4 font-medium text-white">{ev.value}</td>
                    <td className="py-4 text-right text-gray-500 text-xs">{ev.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </SlideUp>
    </div>
  );
}
