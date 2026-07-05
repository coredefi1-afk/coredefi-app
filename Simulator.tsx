import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Zap, Play, Settings } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SlideUp } from '@/src/components/animations';

export function Simulator() {
  const [apy, setApy] = useState(200);
  const [participation, setParticipation] = useState(45);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <SlideUp delay={0.1}>
          <Card className="p-6 border-gray-800/50 bg-gray-900/50">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-aura-500" />
              Parameters
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Target APY</span>
                  <span className="text-white">{apy}%</span>
                </label>
                <input 
                  type="range" 
                  min="0" max="1000" 
                  value={apy} 
                  onChange={(e) => setApy(Number(e.target.value))}
                  className="w-full accent-aura-500"
                />
              </div>
              
              <div>
                <label className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Staking Participation</span>
                  <span className="text-white">{participation}%</span>
                </label>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={participation} 
                  onChange={(e) => setParticipation(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <Button className="w-full mt-4" variant="default">
                <Play className="w-4 h-4 mr-2" /> Run Simulation
              </Button>
            </div>
          </Card>
        </SlideUp>
      </div>

      <div className="lg:col-span-2">
        <SlideUp delay={0.2}>
          <Card className="h-full min-h-[400px] p-6 border-gray-800/50 bg-gray-900/50 flex flex-col">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Simulation Results
            </h2>
            <div className="flex-1 border border-gray-800 rounded-lg bg-gray-950/50 flex items-center justify-center">
               <div className="text-center text-gray-500">
                 <p>Adjust parameters and run simulation to view projected outcomes.</p>
                 <p className="text-sm mt-2">Visualizing treasury growth vs emission rate.</p>
               </div>
            </div>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}
