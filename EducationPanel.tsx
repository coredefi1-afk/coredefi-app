import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const topics = [
  {
    title: 'What is DAO Governance?',
    content: 'DAO (Decentralized Autonomous Organization) Governance is the process by which the CoreDeFi community proposes, discusses, and votes on upgrades, fund allocations, and strategic directions for the ecosystem. It ensures that the protocol evolves in a decentralized, transparent, and community-driven manner.'
  },
  {
    title: 'How Voting Works',
    content: 'Voting power is determined by the amount of vAURAXX (vote-escrowed AURAXX) you hold in your wallet. When a proposal is active, you can cast your vote (Yes, No, or Abstain). Once submitted, your vote is recorded on-chain and cannot be altered. Quorum requirements must be met for a proposal to pass.'
  },
  {
    title: 'How DAO Rewards Are Calculated',
    content: 'Rewards are distributed based on your active participation. You earn a base reward for casting a vote on an active proposal. This base reward is then multiplied by your Governance Reputation Score. Additionally, participating in critical protocol upgrades often yields a higher multiplier.'
  },
  {
    title: 'Reputation System',
    content: 'Your Governance Reputation Score increases with consistent participation, meaningful forum discussions, and a history of voting on ecosystem proposals. High reputation unlocks multiplier bonuses on your DAO rewards and grants exclusive badges within the community leaderboards.'
  },
  {
    title: 'Best Practices for Governance',
    content: 'Always read the full proposal details and community discussions before voting. Avoid blind voting, as it degrades the quality of governance. Stay informed about the long-term impact of proposals on the ecosystem, and engage respectfully with other community members in the forums.'
  }
];

export function EducationPanel() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 relative z-10" id="education-panel">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Governance Education</h2>
            <p className="text-gray-400">Understand the mechanics of decentralized decision-making.</p>
          </div>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/30 border-aura-700/50 p-2 md:p-4">
          <div className="space-y-2">
            {topics.map((topic, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-xl transition-colors duration-300 ${isOpen ? 'bg-aura-900/80 border-aura-600' : 'bg-transparent border-aura-700/30 hover:border-aura-700'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-aura-accent' : 'text-gray-200'}`}>
                      {topic.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-aura-accent' : 'text-gray-500'}`} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-aura-800/50 mt-2">
                          {topic.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
