import React from 'react';
import { Image, MessageSquare, QrCode, Layout, Download, Share2, Eye } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

const tools = [
  { id: 1, title: 'Referral Banner', type: 'Image', icon: Image, desc: 'High-res banners for Twitter & Discord headers.' },
  { id: 2, title: 'Social Post Templates', type: 'Text', icon: MessageSquare, desc: 'Ready-to-use tweets and threads about CoreDeFi.' },
  { id: 3, title: 'Invite Message', type: 'Text', icon: MessageSquare, desc: 'Personalized DM templates for friends.' },
  { id: 4, title: 'QR Poster', type: 'Print', icon: QrCode, desc: 'Printable A4 poster with your referral QR code.' },
  { id: 5, title: 'Brand Kit', type: 'Assets', icon: Layout, desc: 'Logos, colors, and typography guidelines.' },
];

export function ReferralToolkit() {
  return (
    <section className="py-12 relative z-10" id="referral-toolkit">
      <FadeIn>
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Referral Toolkit</h2>
          <p className="text-gray-400">Professional assets to help you expand your network.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <SlideUp key={tool.id} delay={index * 0.1} className="h-full">
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-aura-accent" />
                </div>
                
                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-aura-purple bg-aura-purple/10 px-2 py-1 rounded-md border border-aura-purple/20">
                      {tool.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 flex-1">{tool.desc}</p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <Button variant="secondary" size="sm" className="flex-1 bg-aura-900/80 border-aura-700/50 hover:bg-aura-700">
                      <Eye className="w-4 h-4 mr-2 text-gray-400" /> Preview
                    </Button>
                    <Button variant="secondary" size="sm" className="w-10 px-0 bg-aura-900/80 border-aura-700/50 hover:bg-aura-700 group/btn">
                      <Download className="w-4 h-4 text-gray-400 group-hover/btn:text-white" />
                    </Button>
                    <Button variant="secondary" size="sm" className="w-10 px-0 bg-aura-900/80 border-aura-700/50 hover:bg-aura-700 group/btn">
                      <Share2 className="w-4 h-4 text-gray-400 group-hover/btn:text-white" />
                    </Button>
                  </div>
                </div>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
