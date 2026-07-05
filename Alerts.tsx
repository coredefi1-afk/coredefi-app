import React from 'react';
import { Card } from '../../components/ui/Card';
import { AlertTriangle, Bell, Clock, ShieldAlert } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';
import { Button } from '../../components/ui/Button';

export function Alerts() {
  const alerts = [
    { severity: 'high', title: 'Large Unstake Detected', desc: 'A wallet unstaked 1,500,000 AURAX. Monitoring for potential sell pressure.', time: '10 mins ago', action: 'View Transaction' },
    { severity: 'medium', title: 'Low Governance Quorum', desc: 'Proposal #42 requires 5M more votes to reach quorum.', time: '2 hours ago', action: 'Review Proposal' },
    { severity: 'low', title: 'Rebase Executed', desc: 'Epoch 42 rebase completed successfully. 9,800 AURAXX minted.', time: '4 hours ago', action: 'View Details' },
  ];

  return (
    <SlideUp delay={0.1}>
      <Card className="p-6 border-gray-800/50 bg-gray-900/50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Protocol Alerts
          </h2>
          <Button variant="outline" size="sm">Configure Alerts</Button>
        </div>
        
        <div className="space-y-4">
          {alerts.map((alert, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 gap-4">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg mt-1 ${alert.severity === 'high' ? 'bg-red-500/20 text-red-500' : alert.severity === 'medium' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'}`}>
                  {alert.severity === 'high' ? <ShieldAlert className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{alert.title}</h3>
                  <p className="text-sm text-gray-400">{alert.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" /> {alert.time}
                  </div>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="shrink-0">{alert.action}</Button>
            </div>
          ))}
        </div>
      </Card>
    </SlideUp>
  );
}
