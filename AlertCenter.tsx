import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SlideUp } from '@/src/components/animations';
import { 
  Bell, AlertTriangle, ShieldAlert, ArrowDownUp, Settings,
  CheckCircle2, Plus
} from 'lucide-react';

export function AlertCenter() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'Security', title: 'Suspicious Contract Interaction', desc: 'Unusual function call on staking contract by unknown deployer.', time: '5m ago', severity: 'Critical', icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/10' },
    { id: 2, type: 'Whale', title: 'Large Unstake Detected', desc: 'Top 5 wallet unstaked 250,000 AURAX.', time: '12m ago', severity: 'High', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 3, type: 'Treasury', title: 'Treasury Threshold Reached', desc: 'USDC reserves dropped below 30-day runway projection.', time: '2h ago', severity: 'Medium', icon: ArrowDownUp, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { id: 4, type: 'Network', title: 'RPC Latency Spike', desc: 'Polygon RPC nodes experiencing >500ms latency.', time: '4h ago', severity: 'Low', icon: AlertTriangle, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ]);

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <div className="space-y-6">
      <SlideUp delay={0.1}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Bell className="w-6 h-6 text-aura-500" /> Alert Center
            </h2>
            <p className="text-gray-400 mt-1">Configure and monitor real-time ecosystem alerts.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Settings className="w-4 h-4" /> Configure
            </Button>
            <Button variant="default" className="gap-2">
              <Plus className="w-4 h-4" /> New Alert
            </Button>
          </div>
        </div>
      </SlideUp>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <SlideUp delay={0.2}>
            {alerts.length === 0 ? (
              <Card className="p-12 border-gray-800/50 bg-gray-900/50 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-12 h-12 text-green-500 mb-4 opacity-50" />
                <h3 className="text-lg font-bold text-white">All Clear</h3>
                <p className="text-sm text-gray-400 mt-1">No active alerts at the moment.</p>
              </Card>
            ) : (
              alerts.map((alert, i) => {
                const Icon = alert.icon;
                return (
                  <Card key={alert.id} className="p-4 border-gray-800/50 bg-gray-900/50 flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${alert.bg}`}>
                      <Icon className={`w-5 h-5 ${alert.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white font-bold text-sm">{alert.title}</h4>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{alert.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${alert.bg} ${alert.color}`}>
                          {alert.severity}
                        </span>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-gray-400 hover:text-white" onClick={() => removeAlert(alert.id)}>Dismiss</Button>
                          <Button variant="outline" size="sm" className="h-6 text-xs px-2">Investigate</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })
            )}
          </SlideUp>
        </div>

        <div className="space-y-6">
          <SlideUp delay={0.3}>
            <Card className="p-6 border-gray-800/50 bg-gray-900/50">
              <h3 className="text-lg font-bold text-white mb-4">Active Configurations</h3>
              <div className="space-y-4">
                {[
                  { name: 'Whale Transactions', desc: '> 100k AURAXX moved', status: true },
                  { name: 'Smart Contract Events', desc: 'Admin function calls', status: true },
                  { name: 'Treasury Balance', desc: '< $5M Reserves', status: true },
                  { name: 'Failed Txs Spike', desc: '> 5% fail rate in 1h', status: false },
                ].map((conf, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-950/50 rounded-lg border border-gray-800">
                    <div>
                      <h4 className="text-sm font-medium text-white">{conf.name}</h4>
                      <span className="text-xs text-gray-500">{conf.desc}</span>
                    </div>
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${conf.status ? 'bg-aura-500' : 'bg-gray-700'}`}>
                      <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${conf.status ? 'left-6' : 'left-1'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
