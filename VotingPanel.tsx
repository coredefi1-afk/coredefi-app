import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, Gift, Zap, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

export function VotingPanel() {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | 'abstain' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!selectedOption) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setHasVoted(true);
    }, 1500);
  };

  return (
    <section className="py-12 relative z-10" id="voting-panel">
      <SlideUp className="max-w-4xl mx-auto">
        <Card className="bg-aura-800/40 border-aura-700/50 p-6 md:p-8 relative overflow-hidden backdrop-blur-xl shadow-glass">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-aura-purple/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            
            {/* Left: Voting Interface */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-aura-900 border border-aura-700 rounded text-xs font-mono text-gray-400">AIP-42</span>
                  <span className="text-sm font-medium text-emerald-400">Active</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Ecosystem Growth Fund Allocation for Q4</h3>
                <p className="text-sm text-gray-400">Cast your vote to distribute 5M AURAXX from the treasury to developer grants.</p>
              </div>

              <AnimatePresence mode="wait">
                {!hasVoted ? (
                  <motion.div 
                    key="voting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-3">
                      <button 
                        onClick={() => setSelectedOption('yes')}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                          selectedOption === 'yes' 
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                            : 'bg-aura-900/50 border-aura-700/50 text-gray-300 hover:border-emerald-500/50 hover:bg-emerald-500/5'
                        }`}
                      >
                        <span className="font-bold">Yes, Allocate Funds</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 'yes' ? 'border-emerald-500 bg-emerald-500/20' : 'border-gray-500'}`}>
                          {selectedOption === 'yes' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                        </div>
                      </button>

                      <button 
                        onClick={() => setSelectedOption('no')}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                          selectedOption === 'no' 
                            ? 'bg-red-500/10 border-red-500 text-red-400' 
                            : 'bg-aura-900/50 border-aura-700/50 text-gray-300 hover:border-red-500/50 hover:bg-red-500/5'
                        }`}
                      >
                        <span className="font-bold">No, Reject Proposal</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 'no' ? 'border-red-500 bg-red-500/20' : 'border-gray-500'}`}>
                          {selectedOption === 'no' && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                        </div>
                      </button>

                      <button 
                        onClick={() => setSelectedOption('abstain')}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                          selectedOption === 'abstain' 
                            ? 'bg-gray-500/20 border-gray-400 text-white' 
                            : 'bg-aura-900/50 border-aura-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-500/10'
                        }`}
                      >
                        <span className="font-bold">Abstain</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 'abstain' ? 'border-gray-400 bg-gray-400/20' : 'border-gray-500'}`}>
                          {selectedOption === 'abstain' && <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />}
                        </div>
                      </button>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button 
                        onClick={handleVote}
                        disabled={!selectedOption || isSubmitting}
                        className="flex-1 bg-aura-accent text-aura-900 hover:bg-cyan-400 font-bold h-12 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-aura-900 border-t-transparent rounded-full"
                          />
                        ) : (
                          "Submit Vote"
                        )}
                      </Button>
                      <Button variant="secondary" className="px-6 h-12 bg-aura-900 border-aura-700/50">
                        <FileText className="w-4 h-4 mr-2 text-gray-400" />
                        Details
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 bg-aura-900/50 rounded-xl border border-aura-accent/30 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Vote Submitted Successfully</h4>
                    <p className="text-gray-400 text-sm mb-6 max-w-sm">Your vote has been recorded on-chain. Rewards will be distributed upon proposal execution.</p>
                    <Button variant="secondary" onClick={() => {setHasVoted(false); setSelectedOption(null)}} className="bg-aura-800 border-aura-700/50">
                      Vote on Another Proposal
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Voting Power & Rewards */}
            <div className="w-full md:w-72 space-y-4">
              <div className="bg-aura-900/60 border border-aura-700/50 p-4 rounded-xl">
                <div className="flex items-center text-gray-400 mb-2">
                  <Wallet className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Voting Power</span>
                </div>
                <div className="text-2xl font-bold text-white font-mono">14,250 <span className="text-sm text-gray-500">vAURAXX</span></div>
              </div>
              
              <div className="bg-aura-900/60 border border-aura-700/50 p-4 rounded-xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-aura-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="flex items-center text-aura-accent mb-2">
                  <Gift className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Est. DAO Reward</span>
                </div>
                <div className="text-xl font-bold text-white">~45.5 <span className="text-sm text-gray-500">AURAXX</span></div>
              </div>

              <div className="bg-aura-900/60 border border-aura-700/50 p-4 rounded-xl">
                <div className="flex flex-col space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400"/> Impact</span>
                    <span className="font-medium text-white">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 flex items-center"><Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400"/> Participation Bonus</span>
                    <span className="font-medium text-white">1.25x</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
