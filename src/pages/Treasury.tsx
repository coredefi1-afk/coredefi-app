import { motion } from 'motion/react';
import { Landmark, PieChart, ArrowUpRight, Lock } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Treasury() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Treasury Management</h1>
        <p className="text-gray-400">View and manage CoreDeFi's treasury assets and allocations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Assets', value: '$24.5M', icon: Landmark, change: '+12.3%' },
          { label: 'Year Yield', value: '$2.1M', icon: ArrowUpRight, change: '+8.2%' },
          { label: 'Safe Holdings', value: '$18.3M', icon: Lock, change: '+5.1%' },
          { label: 'Allocation', value: '15 Assets', icon: PieChart, change: 'Balanced' },
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
                    <p className="text-xs text-emerald-400 mt-1">{stat.change}</p>
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
          <h2 className="text-xl font-bold mb-4">Asset Distribution</h2>
          <div className="space-y-3">
            {[
              { asset: 'Stablecoins', amount: '$9.2M', pct: 38 },
              { asset: 'Blue Chip Tokens', amount: '$7.5M', pct: 30 },
              { asset: 'Emerging Assets', amount: '$4.8M', pct: 20 },
              { asset: 'Yield Farms', amount: '$3.0M', pct: 12 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">{item.asset}</span>
                  <span className="text-sm text-aura-accent">{item.amount}</span>
                </div>
                <div className="w-full h-2 bg-aura-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.pct}%` }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="h-full bg-gradient-to-r from-aura-accent to-aura-purple"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.pct}%</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}