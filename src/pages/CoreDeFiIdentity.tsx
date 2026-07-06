import { motion } from 'motion/react';
import { Fingerprint, Shield, CheckCircle, Award } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function CoreDeFiIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">CoreDeFi Identity</h1>
        <p className="text-gray-400">Build your decentralized identity and earn reputation badges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Reputation', value: '4.8/5', icon: Shield },
          { label: 'Badges', value: '12', icon: Award },
          { label: 'Verified', value: 'Yes', icon: CheckCircle },
          { label: 'Score', value: '950', icon: Fingerprint },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-6 h-6 text-aura-accent" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Your Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: '🚀', name: 'Early Pioneer' },
              { emoji: '💎', name: 'Diamond Holder' },
              { emoji: '🌟', name: 'Community Star' },
              { emoji: '📚', name: 'Knowledge Seeker' },
              { emoji: '🏆', name: 'Top Trader' },
              { emoji: '🤝', name: 'Collaborator' },
            ].map((badge, i) => (
              <div key={i} className="p-4 rounded-lg bg-aura-900/30 border border-border/50 hover:border-aura-accent/50 transition-colors text-center cursor-pointer">
                <div className="text-3xl mb-2">{badge.emoji}</div>
                <p className="text-xs font-semibold text-gray-300">{badge.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}