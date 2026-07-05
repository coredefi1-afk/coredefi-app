import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Check, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';

interface VotingCenterProps {
  proposal: any;
}

export function VotingCenter({ proposal }: VotingCenterProps) {
  const [selectedVote, setSelectedVote] = useState<'yes' | 'no' | 'abstain' | null>(null);

  const totalVotes = proposal.votes.yes + proposal.votes.no + proposal.votes.abstain;
  const yesPct = ((proposal.votes.yes / totalVotes) * 100).toFixed(1);
  const noPct = ((proposal.votes.no / totalVotes) * 100).toFixed(1);
  const abstainPct = ((proposal.votes.abstain / totalVotes) * 100).toFixed(1);

  return (
    <Card className="bg-aura-800/30 border-aura-700/50 p-6 sticky top-6">
      <h3 className="text-lg font-bold text-white mb-6">Voting Center</h3>

      {/* Current Results */}
      <div className="space-y-4 mb-8">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-emerald-400 font-medium">Yes</span>
            <span className="text-white">{yesPct}%</span>
          </div>
          <div className="w-full h-2 bg-aura-900 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${yesPct}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">{proposal.votes.yes}M AURAXX</p>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-red-400 font-medium">No</span>
            <span className="text-white">{noPct}%</span>
          </div>
          <div className="w-full h-2 bg-aura-900 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full" style={{ width: `${noPct}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">{proposal.votes.no}M AURAXX</p>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400 font-medium">Abstain</span>
            <span className="text-white">{abstainPct}%</span>
          </div>
          <div className="w-full h-2 bg-aura-900 rounded-full overflow-hidden">
            <div className="h-full bg-gray-500 rounded-full" style={{ width: `${abstainPct}%` }} />
          </div>
        </div>
      </div>

      <div className="border-t border-aura-700/50 pt-6">
        <div className="mb-4 flex items-center justify-between text-sm">
           <span className="text-gray-400">Your Voting Power</span>
           <span className="text-white font-bold">12,450 vAURAXX</span>
        </div>

        <div className="space-y-3 mb-6">
          <button 
            onClick={() => setSelectedVote('yes')}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
              selectedVote === 'yes' ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-aura-900/50 border-aura-700/30 hover:border-emerald-500/30'
            }`}
          >
            <span className={`font-medium ${selectedVote === 'yes' ? 'text-emerald-400' : 'text-gray-300'}`}>Vote Yes</span>
            {selectedVote === 'yes' ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Circle className="w-5 h-5 text-gray-600" />}
          </button>

          <button 
            onClick={() => setSelectedVote('no')}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
              selectedVote === 'no' ? 'bg-red-500/20 border-red-500/50' : 'bg-aura-900/50 border-aura-700/30 hover:border-red-500/30'
            }`}
          >
            <span className={`font-medium ${selectedVote === 'no' ? 'text-red-400' : 'text-gray-300'}`}>Vote No</span>
            {selectedVote === 'no' ? <CheckCircle2 className="w-5 h-5 text-red-400" /> : <Circle className="w-5 h-5 text-gray-600" />}
          </button>

          <button 
            onClick={() => setSelectedVote('abstain')}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
              selectedVote === 'abstain' ? 'bg-gray-500/20 border-gray-500/50' : 'bg-aura-900/50 border-aura-700/30 hover:border-gray-500/30'
            }`}
          >
            <span className={`font-medium ${selectedVote === 'abstain' ? 'text-gray-300' : 'text-gray-400'}`}>Abstain</span>
            {selectedVote === 'abstain' ? <CheckCircle2 className="w-5 h-5 text-gray-400" /> : <Circle className="w-5 h-5 text-gray-600" />}
          </button>
        </div>

        <div className="bg-aura-900/50 rounded-lg p-3 mb-6 text-xs text-gray-400 space-y-2">
           <div className="flex justify-between">
              <span>Participation Bonus</span>
              <span className="text-emerald-400">+1.2%</span>
           </div>
           <div className="flex justify-between">
              <span>Reputation Impact</span>
              <span className="text-cyan-400">+15 XP</span>
           </div>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white border-0 shadow-glow disabled:opacity-50"
          disabled={!selectedVote || proposal.status !== 'Active'}
        >
          Submit Vote
        </Button>
      </div>
    </Card>
  );
}
