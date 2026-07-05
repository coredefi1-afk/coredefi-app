import React from 'react';
import { motion } from 'motion/react';
import { Shield, Activity, Vote, MessageSquare, Zap } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

export function ParticipationScore() {
  const score = 92;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const stats = [
    { label: 'Voting Consistency', value: '96%', icon: Vote, color: 'text-emerald-400' },
    { label: 'Proposal Engagement', value: '88%', icon: Activity, color: 'text-blue-400' },
    { label: 'Community Contribution', value: '85%', icon: MessageSquare, color: 'text-fuchsia-400' },
    { label: 'Reward Multiplier', value: '1.25x', icon: Zap, color: 'text-amber-400' },
  ];

  return (
    <section className="py-12 relative z-10" id="participation-score">
      <SlideUp>
        <Card className="bg-aura-800/40 border-aura-700/50 overflow-hidden relative p-8 backdrop-blur-xl shadow-glass">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-aura-accent/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left: Circular Score */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <div className="relative flex items-center justify-center w-48 h-48">
                {/* Background Ring */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r={radius}
                    className="stroke-aura-900"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  {/* Progress Ring */}
                  <motion.circle
                    cx="96"
                    cy="96"
                    r={radius}
                    className="stroke-aura-accent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    strokeWidth="12"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                
                {/* Score Content */}
                <div className="absolute flex flex-col items-center justify-center">
                  <motion.span 
                    className="text-4xl font-display font-bold text-white drop-shadow-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    {score}
                  </motion.span>
                  <span className="text-xs text-gray-400 font-medium tracking-wider uppercase mt-1">Score</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-aura-purple/20 px-4 py-1.5 rounded-full border border-aura-purple/30">
                  <Shield className="w-4 h-4 text-aura-purple" />
                  <span className="text-sm font-bold text-white tracking-wide">ELITE TIER</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Stats */}
            <div className="flex-1 w-full z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white">Governance Reputation</h3>
                <p className="text-gray-400 mt-1">Your participation actively strengthens the ecosystem.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-aura-900/50 border border-aura-700/50 p-4 rounded-xl flex items-center justify-between group hover:bg-aura-800/60 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-aura-800 rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                        <span className="text-sm text-gray-300 font-medium">{stat.label}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{stat.value}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
