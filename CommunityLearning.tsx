import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Users, MessageSquare, Trophy, ArrowRight } from 'lucide-react';

const discussions = [
  { user: '0x71C...3a2', topic: 'Best strategy for minimizing unstaking fees?', replies: 12, time: '2h ago' },
  { user: '0x44F...9b1', topic: 'Can someone explain the recent change in Treasury allocation?', replies: 34, time: '5h ago' },
  { user: '0x99A...1c4', topic: 'Study Group: Preparing for Governance Master Cert', replies: 8, time: '1d ago' },
];

const leaders = [
  { rank: 1, user: '0x12A...f44', points: '12,450', certs: 5 },
  { rank: 2, user: '0x88B...2e1', points: '11,200', certs: 4 },
  { rank: 3, user: '0x33C...8a9', points: '9,850', certs: 4 },
];

export function CommunityLearning() {
  return (
    <section className="py-12 relative z-10" id="community">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-pink-500/10 rounded-lg">
            <Users className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Community Learning</h2>
            <p className="text-gray-400">Learn together, compete, and share knowledge.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SlideUp>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white flex items-center">
                   <MessageSquare className="w-4 h-4 mr-2 text-pink-400" /> Active Discussions
                </h3>
                <button className="text-xs text-pink-400 hover:text-pink-300">View All</button>
             </div>
             
             <div className="space-y-4 flex-1">
                {discussions.map((disc, i) => (
                   <div key={i} className="p-3 bg-aura-900/50 rounded-lg border border-aura-700/30 hover:border-pink-500/30 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                         <span className="text-xs font-mono text-gray-500">{disc.user}</span>
                         <span className="text-xs text-gray-600">{disc.time}</span>
                      </div>
                      <p className="text-sm text-white font-medium mb-3">{disc.topic}</p>
                      <div className="flex items-center text-xs text-gray-400">
                         <MessageSquare className="w-3 h-3 mr-1" /> {disc.replies} replies
                      </div>
                   </div>
                ))}
             </div>
             <Button className="w-full mt-4 bg-aura-700 hover:bg-aura-600 text-white">Start Discussion</Button>
          </Card>
        </SlideUp>

        <SlideUp delay={0.1}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white flex items-center">
                   <Trophy className="w-4 h-4 mr-2 text-yellow-400" /> Top Learners
                </h3>
                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">This Month</span>
             </div>
             
             <div className="space-y-3 flex-1">
                {leaders.map((leader, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-aura-900/50 rounded-lg border border-aura-700/30">
                      <div className="flex items-center space-x-3">
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            leader.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                            leader.rank === 2 ? 'bg-gray-300/20 text-gray-300' :
                            'bg-orange-700/20 text-orange-400'
                         }`}>
                            {leader.rank}
                         </div>
                         <span className="text-sm font-mono text-white">{leader.user}</span>
                      </div>
                      <div className="text-right">
                         <div className="text-sm font-bold text-emerald-400">{leader.points} pts</div>
                         <div className="text-xs text-gray-500">{leader.certs} Certs</div>
                      </div>
                   </div>
                ))}
             </div>
             
             <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20 flex justify-between items-center">
                <div>
                   <p className="text-xs text-gray-400 mb-1">Your Rank</p>
                   <p className="text-lg font-bold text-white">#1,402</p>
                </div>
                <button className="flex items-center text-sm text-pink-400 hover:text-pink-300 font-medium">
                   View Leaderboard <ArrowRight className="w-4 h-4 ml-1" />
                </button>
             </div>
          </Card>
        </SlideUp>
      </div>
    </section>
  );
}
