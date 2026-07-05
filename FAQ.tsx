import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const faqs = [
  {
    question: 'How do I create a proposal?',
    answer: 'To create a proposal, navigate to the "Create Proposal" section. You will need to hold a minimum amount of AURAXX tokens (or equivalent voting power) to submit a draft. Fill in the details, requested budget, and timeline, then submit it for community review.'
  },
  {
    question: 'Who can vote?',
    answer: 'Any wallet holding AURAXX tokens, staked AURAXX, or actively participating in the ecosystem (which grants reputation XP) can vote. Your voting power is determined by a snapshot taken at the moment the proposal goes live.'
  },
  {
    question: 'How is voting power calculated?',
    answer: 'Voting power (vAURAXX) is calculated using a quadratic formula that weighs both your token holdings and your ecosystem reputation. Staking tokens for longer periods or holding active DAO roles provides a multiplier to your base voting power.'
  },
  {
    question: 'When are proposals executed?',
    answer: 'If a proposal passes the voting threshold (typically 51% approval with a minimum quorum), it enters a timelock period (e.g., 48 hours). After the timelock, code changes are executed on-chain automatically, or treasury funds are unlocked to a multi-sig.'
  },
  {
    question: 'How is governance secured?',
    answer: 'Governance is secured through on-chain smart contracts. Critical protocol upgrades require a higher quorum and longer timelock, allowing the community ample time to review. The treasury multi-sig acts as a fail-safe for fund distributions.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 relative z-10" id="faq">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Governance FAQ</h2>
            <p className="text-gray-400">Common questions about participating in the DAO.</p>
          </div>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/30 border-aura-700/50 p-2 md:p-4">
          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b transition-colors duration-300 ${isOpen ? 'border-aura-600' : 'border-aura-700/30 hover:border-aura-700'} last:border-b-0`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                  >
                    <span className={`font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                      {faq.question}
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
                        <div className="pb-4 text-sm text-gray-400 leading-relaxed">
                          {faq.answer}
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
