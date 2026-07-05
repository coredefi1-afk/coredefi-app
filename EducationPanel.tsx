import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const topics = [
  {
    title: 'What is Smart Web Reward?',
    content: 'Smart Web Reward is an intelligent ecosystem growth module. Unlike traditional referral programs, it focuses on rewarding users for expanding the CoreDeFi network through verified community participation, education, and genuine ecosystem engagement, ensuring sustainable growth rather than just superficial metric padding.'
  },
  {
    title: 'How are rewards calculated?',
    content: 'Rewards are calculated dynamically based on a multi-tier system. You earn a baseline reward for direct referrals who complete verification. Additionally, you earn fractional rewards when your referrals invite others (up to Level 2). The Network Growth Score multiplier applies bonuses based on the active participation of your invited network.'
  },
  {
    title: 'What qualifies as a valid referral?',
    content: 'A valid referral is a new user who registers using your unique code, connects a verified wallet, and performs at least one ecosystem action (such as staking AURAXX, executing a swap, or participating in governance) within 30 days of registration.'
  },
  {
    title: 'Best practices for community growth',
    content: 'Focus on quality over quantity. Use the Referral Toolkit to educate potential users about the true value of the CoreDeFi ecosystem. Host local meetups, create educational content (threads, videos), and support your referrals as they onboard.'
  },
  {
    title: 'Anti-spam and fairness policy',
    content: 'To maintain the integrity of the ecosystem, we employ advanced Sybil-resistance mechanisms. Self-referrals, bot networks, and low-quality engagement farms are strictly prohibited. Accounts found violating these terms will have their Network Growth Score reset and pending rewards forfeited.'
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
            <h2 className="text-2xl font-display font-bold text-white">Ecosystem Growth Academy</h2>
            <p className="text-gray-400">Learn how to maximize your impact and rewards.</p>
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
