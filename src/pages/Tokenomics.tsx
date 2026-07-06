import { motion } from 'motion/react';
import { PieChart, TrendingUp, Zap, Users } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Tokenomics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Tokenomics</h1>
        <p className="text-gray-400">Understand CoreDeFi's token distribution and economics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Supply', value: '1B CDT', icon: PieChart },
          { label: 'Circulating', value: '450M CDT', icon: TrendingUp },
          { label: 'Burn Rate', value: '2.5%/Year', icon: Zap },
          { label: 'Holders', value: '125.3K', icon: Users },
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
          <h2 className="text-xl font-bold mb-4">Token Allocation</h2>
          <div className="space-y-4">
            {[
              { name: 'Community & Rewards', pct: 30, color: 'from-aura-accent to-cyan-400' },
              { name: 'Team & Advisors', pct: 15, color: 'from-aura-purple to-purple-400' },
              { name: 'Treasury', pct: 25, color: 'from-emerald-500 to-green-400' },
              { name: 'Ecosystem', pct: 20, color: 'from-orange-500 to-yellow-400' },
              { name: 'Marketing', pct: 10, color: 'from-pink-500 to-red-400' },
            ].map((alloc, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{alloc.name}</span>
                  <span className="text-aura-accent">{alloc.pct}%</span>
                </div>
                <div className="w-full h-2 bg-aura-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${alloc.pct}%` }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className={`h-full bg-gradient-to-r ${alloc.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}