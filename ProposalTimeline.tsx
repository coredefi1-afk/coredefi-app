import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Edit3, Users, Vote, CheckCircle, PlayCircle, Flag } from 'lucide-react';

interface ProposalTimelineProps {
  status: string;
}

export function ProposalTimeline({ status }: ProposalTimelineProps) {
  const stages = [
    { name: 'Draft', icon: Edit3, completed: true },
    { name: 'Review', icon: Users, completed: true },
    { name: 'Voting', icon: Vote, completed: status !== 'Draft' && status !== 'Review' },
    { name: 'Approved', icon: CheckCircle, completed: status === 'Passed' },
    { name: 'Execution', icon: PlayCircle, completed: false },
    { name: 'Completed', icon: Flag, completed: false }
  ];

  return (
    <Card className="bg-aura-800/30 border-aura-700/50 p-6 overflow-x-auto custom-scrollbar">
      <div className="min-w-[600px]">
        <div className="flex items-center justify-between relative">
          {/* Connecting Line */}
          <div className="absolute left-6 right-6 top-5 h-0.5 bg-aura-700/50 -z-10" />
          
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isCurrent = stage.name === status || (status === 'Active' && stage.name === 'Voting');
            
            return (
              <div key={stage.name} className="flex flex-col items-center relative z-10 w-24">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 transition-colors ${
                  stage.completed 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : isCurrent
                      ? 'bg-blue-500/20 border-blue-500 text-blue-400 animate-pulse'
                      : 'bg-aura-900 border-aura-700 text-gray-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium ${
                  stage.completed || isCurrent ? 'text-gray-200' : 'text-gray-500'
                }`}>
                  {stage.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
