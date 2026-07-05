import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const faqs = [
  {
    question: 'How do referrals work?',
    answer: 'Share your unique referral link or code. When someone signs up using it and becomes a verified active user, they are added to your referral network, and you both earn rewards.'
  },
  {
    question: 'When are rewards distributed?',
    answer: 'Direct referral rewards are distributed immediately upon the referee completing their first qualifying action. Fractional network rewards are calculated daily and distributed at 00:00 UTC.'
  },
  {
    question: 'Is there a referral limit?',
    answer: 'No, there is no hard cap on the number of people you can invite. However, to maintain a high Network Growth Score, you should ensure your invitees remain active.'
  },
  {
    question: 'What activities qualify?',
    answer: 'Qualifying activities include staking AURAXX, providing liquidity, participating in governance proposals, or completing minimum volume requirements on the decentralized exchange.'
  },
  {
    question: 'How is abuse prevented?',
    answer: 'We utilize advanced on-chain analysis and Sybil-resistance protocols. Wallets flagged for suspicious activity (e.g., circular funding, multiple accounts from identical fingerprints) will be excluded from the reward pool.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 relative z-10" id="faq">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-aura-purple/10 rounded-lg">
            <HelpCircle className="w-6 h-6 text-aura-purple" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers regarding the Smart Web Reward program.</p>
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
