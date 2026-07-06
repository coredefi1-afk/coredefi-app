import { motion } from 'motion/react';
import { Scale, Vote, Users, CheckCircle } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Governance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Governance</h1>
        <p className="text-gray-400">Participate in CoreDeFi's decentralized governance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Proposals', value: '127', icon: Scale },
          { label: 'Active Votes', value: '12', icon: Vote },
          { label: 'Members', value: '8.5K', icon: Users },
          { label: 'Passed', value: '98%', icon: CheckCircle },
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
          <h2 className="text-xl font-bold mb-4">Active Proposals</h2>
          <div className="space-y-4">
            {[
              { id: 'PROP-001', title: 'Increase Treasury Allocation to Protocol Development', votes: '7.2K', status: 'Voting' },
              { id: 'PROP-002', title: 'New Staking Pool Implementation', votes: '5.1K', status: 'Voting' },
              { id: 'PROP-003', title: 'Fee Structure Optimization', votes: '4.8K', status: 'Voting' },
            ].map((prop, i) => (
              <div key={i} className="p-4 rounded-lg bg-aura-900/30 border border-border/50 hover:border-aura-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-aura-accent font-mono">{prop.id}</p>
                    <p className="font-semibold text-white mt-1">{prop.title}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-aura-accent/20 text-aura-accent">
                    {prop.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{prop.votes} votes cast</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}