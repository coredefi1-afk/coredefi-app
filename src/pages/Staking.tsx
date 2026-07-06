import { motion } from 'motion/react';
import { Layers, TrendingUp, Wallet, Lock } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Staking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Smart Flexi Staking</h1>
        <p className="text-gray-400">Stake your tokens and earn flexible rewards with optimized strategies.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Staked', value: '$2.4M', icon: Lock, color: 'from-blue-500 to-cyan-500' },
          { label: 'APY', value: '24.5%', icon: TrendingUp, color: 'from-emerald-500 to-green-500' },
          { label: 'Your Stake', value: '$12,500', icon: Wallet, color: 'from-purple-500 to-pink-500' },
          { label: 'Earned', value: '$1,250', icon: Layers, color: 'from-orange-500 to-red-500' },
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
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Staking Overview</h2>
            <p className="text-gray-400 mb-4">Participate in our flexible staking program to earn rewards while maintaining control of your assets.</p>
            <div className="space-y-3">
              {['Multiple staking pools available', 'Withdraw anytime with no lock-up', 'Earn passive income in real-time', 'Compound your rewards automatically'].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-aura-accent mr-3"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-gradient-to-br from-aura-accent/10 to-aura-purple/10 border-aura-accent/20">
            <h2 className="text-xl font-bold mb-4">Start Staking</h2>
            <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 font-bold transition-all duration-300 hover:shadow-glow">
              Connect Wallet
            </button>
            <p className="text-xs text-gray-400 mt-4 text-center">Min stake: 100 CDT</p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}