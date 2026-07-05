import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const leaderboardData = [
  { rank: 1, wallet: '0x71C...9A43', referrals: 1245, rewards: '45,200', score: 99, isCurrentUser: false },
  { rank: 2, wallet: '0x3F...E8B1', referrals: 980, rewards: '38,150', score: 98, isCurrentUser: false },
  { rank: 3, wallet: '0x11A...42C', referrals: 850, rewards: '32,400', score: 96, isCurrentUser: false },
  { rank: 4, wallet: '0x99B...7D2', referrals: 710, rewards: '28,900', score: 94, isCurrentUser: false },
  { rank: 42, wallet: '0x4f...a2b1', referrals: 142, rewards: '4,520', score: 85, isCurrentUser: true },
  { rank: 5, wallet: '0x88C...3F1', referrals: 650, rewards: '25,100', score: 93, isCurrentUser: false },
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-300" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <Award className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section className="py-12 relative z-10" id="leaderboard">
      <FadeIn>
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Community Leaderboard</h2>
          <p className="text-gray-400">Top contributors expanding the CoreDeFi ecosystem.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/40 border-aura-700/50 overflow-hidden relative">
           {/* Background subtle glow */}
           <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-aura-900/50 text-gray-400 text-xs uppercase tracking-wider border-b border-aura-700/50">
                  <th className="px-6 py-4 font-medium w-24 text-center">Rank</th>
                  <th className="px-6 py-4 font-medium">Wallet</th>
                  <th className="px-6 py-4 font-medium text-right">Referrals</th>
                  <th className="px-6 py-4 font-medium text-right">Rewards (AURAXX)</th>
                  <th className="px-6 py-4 font-medium text-center">Growth Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-aura-700/30 text-sm">
                {leaderboardData.map((row, index) => {
                  const isBreak = index > 0 && row.rank - leaderboardData[index - 1].rank > 1;
                  
                  return (
                    <React.Fragment key={row.rank}>
                      {isBreak && (
                        <tr className="bg-aura-900/20">
                          <td colSpan={5} className="px-6 py-2 text-center text-gray-500">
                            •••
                          </td>
                        </tr>
                      )}
                      <tr className={`transition-colors group ${row.isCurrentUser ? 'bg-aura-accent/10 border-l-2 border-aura-accent' : 'hover:bg-aura-800/30'}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex justify-center items-center">
                            {row.rank <= 3 ? getRankIcon(row.rank) : <span className="text-gray-400 font-bold">{row.rank}</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                             <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${row.isCurrentUser ? 'from-aura-accent to-aura-purple' : 'from-gray-700 to-gray-800'} flex items-center justify-center text-[10px] text-white font-bold`}>
                               {row.wallet.substring(2, 4)}
                             </div>
                             <span className={`font-mono ${row.isCurrentUser ? 'text-aura-accent font-bold' : 'text-gray-300'}`}>
                               {row.wallet}
                               {row.isCurrentUser && <span className="ml-2 text-xs text-aura-accent bg-aura-accent/20 px-2 py-0.5 rounded-full border border-aura-accent/30">YOU</span>}
                             </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-white">{row.referrals.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-emerald-400">{row.rewards}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center justify-center">
                              <span className="text-white font-bold mr-2">{row.score}</span>
                              <div className="w-16 h-1.5 bg-aura-900 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: `${row.score}%` }} />
                              </div>
                           </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
