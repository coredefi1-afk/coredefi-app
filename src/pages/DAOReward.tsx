import { motion } from 'motion/react';
import { Vote, GitBranch, TrendingUp, Shield } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function DAOReward() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Smart DAO Reward</h1>
        <p className="text-gray-400">Earn rewards for governance participation and community contribution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'DAO Members', value: '8.5K', icon: Vote },
          { label: 'Active Votes', value: '42', icon: GitBranch },
          { label: 'Vote Power', value: '250 CDT', icon: Shield },
          { label: 'DAO Rewards', value: '$120K', icon: TrendingUp },
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
          <h2 className="text-xl font-bold mb-4">DAO Governance</h2>
          <p className="text-gray-400 mb-4">Shape the future of CoreDeFi through decentralized governance.</p>
          <div className="space-y-3">
            {[
              'Vote on protocol changes and improvements',
              'Earn rewards for voting participation',
              'Delegate your voting power to trusted members',
              'View proposal history and outcomes',
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-aura-accent mr-3"></div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}