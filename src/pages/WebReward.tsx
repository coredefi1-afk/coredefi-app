import { motion } from 'motion/react';
import { Globe, Award, Zap, Users } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function WebReward() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Smart Web Reward</h1>
        <p className="text-gray-400">Earn rewards for participating in the CoreDeFi ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Users', value: '125K+', icon: Users },
          { label: 'Total Rewards', value: '$5.2M', icon: Award },
          { label: 'Rewards Rate', value: '12% APY', icon: Zap },
          { label: 'Your Balance', value: '$3,250', icon: Globe },
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
          <h2 className="text-xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: '1', title: 'Participate', desc: 'Engage with CoreDeFi products and services' },
              { num: '2', title: 'Earn', desc: 'Automatically accumulate reward points' },
              { num: '3', title: 'Withdraw', desc: 'Convert rewards to tokens anytime' },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-aura-accent/20 flex items-center justify-center text-aura-accent font-bold mr-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}