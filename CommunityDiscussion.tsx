import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { MessageSquare, ThumbsUp, Reply, ShieldAlert } from 'lucide-react';

interface CommunityDiscussionProps {
  proposalId: string;
}

const mockComments = [
  {
    id: 1,
    author: '0x1a...9c2d',
    role: 'Moderator',
    content: 'This proposal aligns with our Q3 roadmap perfectly. The requested budget is reasonable given the scope.',
    likes: 24,
    time: '2h ago'
  },
  {
    id: 2,
    author: '0x8b...3e4f',
    role: 'Member',
    content: 'Have we considered the impact on existing liquidity providers? We should ensure emissions aren\'t diluted too rapidly.',
    likes: 12,
    time: '5h ago'
  },
  {
    id: 3,
    author: '0x71...8f9a',
    role: 'Author',
    content: 'Addressing the liquidity concerns: The emission curve adjustment is gradual over 6 months specifically to prevent shock to current LPs.',
    likes: 45,
    time: '6h ago'
  }
];

export function CommunityDiscussion({ proposalId }: CommunityDiscussionProps) {
  return (
    <Card className="bg-aura-800/30 border-aura-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white flex items-center">
          <MessageSquare className="w-5 h-5 text-cyan-400 mr-2" />
          Community Discussion
        </h3>
        <span className="text-sm text-gray-400">142 Comments</span>
      </div>

      {/* Input Area */}
      <div className="mb-8">
        <textarea 
          placeholder="Share your thoughts on this proposal..."
          className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none h-24 mb-3"
        />
        <div className="flex justify-end">
          <Button className="bg-aura-700 hover:bg-aura-600 text-white text-sm">
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {mockComments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-600 to-aura-800 border border-aura-500 shrink-0" />
            
            <div className="flex-1">
              <div className="flex items-baseline space-x-2 mb-1">
                <span className="font-medium text-white text-sm">{comment.author}</span>
                {comment.role === 'Moderator' && (
                  <span className="flex items-center text-[10px] uppercase font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                    <ShieldAlert className="w-3 h-3 mr-1" /> Mod
                  </span>
                )}
                {comment.role === 'Author' && (
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">
                    Author
                  </span>
                )}
                <span className="text-xs text-gray-500 ml-auto">{comment.time}</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-3">
                {comment.content}
              </p>
              
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <button className="flex items-center hover:text-emerald-400 transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5 mr-1" />
                  {comment.likes}
                </button>
                <button className="flex items-center hover:text-white transition-colors">
                  <Reply className="w-3.5 h-3.5 mr-1" />
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
