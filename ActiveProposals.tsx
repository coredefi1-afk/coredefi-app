import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Vote, FileText, CheckCircle, Clock, AlertCircle, TrendingUp, Users, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Extracted mock data and sub-components to keep file clean
import { ProposalDetails } from './ProposalDetails';
import { VotingCenter } from './VotingCenter';
import { CommunityDiscussion } from './CommunityDiscussion';
import { ProposalTimeline } from './ProposalTimeline';

export const mockProposals = [
  {
    id: 'AIP-42',
    title: 'Increase Validator Set & Adjust Staking Rewards',
    category: 'Protocol Upgrade',
    author: '0x71...8f9a',
    summary: 'Proposing to increase the active validator set from 100 to 150 to improve decentralization, while adjusting the staking emission curve.',
    status: 'Active',
    progress: 68,
    timeRemaining: '2d 14h',
    impact: '$450K',
    participation: '42%',
    votes: { yes: 12.5, no: 4.2, abstain: 1.1 } // in millions
  },
  {
    id: 'AIP-41',
    title: 'Q3 Marketing & Ecosystem Growth Fund',
    category: 'Treasury',
    author: '0x33...1b2c',
    summary: 'Allocate 2M AURAXX from the community treasury for Q3 marketing initiatives, hackathons, and developer grants.',
    status: 'Active',
    progress: 85,
    timeRemaining: '5h 30m',
    impact: '$2.0M',
    participation: '65%',
    votes: { yes: 8.5, no: 1.2, abstain: 0.3 }
  },
  {
    id: 'AIP-40',
    title: 'Integrate Chainlink CCIP for Cross-Chain Communication',
    category: 'Integration',
    author: '0x99...4d5e',
    summary: 'Adopt Chainlink CCIP as the standard for cross-chain messaging to enhance security and interoperability.',
    status: 'Passed',
    progress: 100,
    timeRemaining: 'Ended',
    impact: '$0',
    participation: '58%',
    votes: { yes: 15.2, no: 0.8, abstain: 0.5 }
  }
];

export function ActiveProposals() {
  const [selectedProposal, setSelectedProposal] = useState<typeof mockProposals[0] | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Passed': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Rejected': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <section className="py-12 relative z-10" id="active-proposals">
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Governance Proposals</h2>
            <p className="text-gray-400">Review and vote on ecosystem improvements.</p>
          </div>
          <div className="hidden md:flex space-x-2">
             <Button variant="secondary" className="h-9 px-4 text-xs bg-aura-800/50">All</Button>
             <Button variant="ghost" className="h-9 px-4 text-xs hover:bg-aura-800/50">Active</Button>
             <Button variant="ghost" className="h-9 px-4 text-xs hover:bg-aura-800/50">Passed</Button>
          </div>
        </div>
      </FadeIn>

      <div className="space-y-4">
        {mockProposals.map((proposal, index) => (
          <SlideUp key={proposal.id} delay={index * 0.1}>
            <Card className="bg-aura-800/30 border-aura-700/50 p-6 hover:bg-aura-800/50 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Left Col: Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-sm font-mono text-gray-500">{proposal.id}</span>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getStatusColor(proposal.status)}`}>
                      {proposal.status}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-aura-900/80 border border-aura-700/50 text-gray-300">
                      {proposal.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {proposal.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {proposal.summary}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-1.5" />
                      Author: <span className="text-cyan-400 ml-1">{proposal.author}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {proposal.timeRemaining}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <TrendingUp className="w-4 h-4 mr-1.5" />
                      Impact: <span className="text-amber-400 ml-1">{proposal.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Voting Progress & Actions */}
                <div className="lg:w-72 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-aura-700/50 pt-6 lg:pt-0 lg:pl-6">
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-sm text-gray-400">Approval</span>
                    <span className="text-lg font-bold text-white">{proposal.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-aura-900 rounded-full overflow-hidden mb-4">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${proposal.progress > 50 ? 'bg-emerald-500' : 'bg-red-500'}`}
                      style={{ width: `${proposal.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                    <span>Participation: {proposal.participation}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-aura-700/50 hover:bg-aura-600 text-white"
                      onClick={() => setSelectedProposal(proposal)}
                    >
                      Details
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white border-0"
                      disabled={proposal.status !== 'Active'}
                      onClick={() => setSelectedProposal(proposal)} // In a real app, might jump straight to vote section
                    >
                      Vote
                    </Button>
                  </div>
                </div>

              </div>
            </Card>
          </SlideUp>
        ))}
      </div>

      {/* Fullscreen Proposal Details Modal/Overlay */}
      <AnimatePresence>
        {selectedProposal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProposal(null)} />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-aura-900/95 border border-aura-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-aura-700/50 shrink-0">
                <div className="flex items-center space-x-3">
                   <span className="text-sm font-mono text-gray-500">{selectedProposal.id}</span>
                   <h2 className="text-xl font-bold text-white line-clamp-1">{selectedProposal.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProposal(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-aura-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                <ProposalTimeline status={selectedProposal.status} />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <ProposalDetails proposal={selectedProposal} />
                    <CommunityDiscussion proposalId={selectedProposal.id} />
                  </div>
                  <div className="space-y-8">
                    <VotingCenter proposal={selectedProposal} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
