import React from 'react';
import { Copy, QrCode, Share2, MousePointerClick, UserPlus, CheckCircle } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

export function ReferralDashboard() {
  const referralCode = "AURAX-8X9Y2Z";
  const referralLink = `https://coredefi.network/join/${referralCode}`;

  return (
    <section className="py-12 relative z-10" id="referral-dashboard">
      <SlideUp className="max-w-4xl mx-auto">
        <Card className="bg-aura-800/40 border-aura-700/50 overflow-hidden relative shadow-glass backdrop-blur-xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-aura-purple/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-aura-accent/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
            
            {/* Left Column - Link & Code */}
            <div className="flex-1 space-y-6 z-10">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Your Referral Hub</h3>
                <p className="text-sm text-gray-400 mb-6">Share your unique link and code to invite others to the CoreDeFi ecosystem and start earning rewards.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Personal Referral Link</label>
                  <div className="flex">
                    <div className="flex-1 bg-aura-900/50 border border-aura-700/50 rounded-l-lg px-4 py-3 text-white overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                      {referralLink}
                    </div>
                    <button className="bg-aura-accent hover:bg-cyan-400 text-aura-900 font-bold px-4 rounded-r-lg transition-colors flex items-center justify-center border border-aura-accent">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Referral Code</label>
                  <div className="flex">
                    <div className="flex-1 bg-aura-900/50 border border-aura-700/50 rounded-l-lg px-4 py-3 text-white font-mono text-lg font-bold">
                      {referralCode}
                    </div>
                    <button className="bg-aura-800 hover:bg-aura-700 border border-aura-700/50 text-white font-bold px-4 rounded-r-lg transition-colors flex items-center justify-center">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Quick Share</label>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-colors">
                    <span className="font-bold">X</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#0088cc]/20 text-[#0088cc] hover:bg-[#0088cc] hover:text-white flex items-center justify-center transition-colors">
                    <Share2 className="w-4 h-4" /> {/* Telegram icon placeholder */}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#5865F2]/20 text-[#5865F2] hover:bg-[#5865F2] hover:text-white flex items-center justify-center transition-colors">
                    <Share2 className="w-4 h-4" /> {/* Discord icon placeholder */}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors">
                    <Share2 className="w-4 h-4" /> {/* WhatsApp icon placeholder */}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - QR & Stats */}
            <div className="w-full md:w-64 flex flex-col items-center justify-between gap-6 z-10">
              <div className="bg-white p-4 rounded-2xl w-48 h-48 flex items-center justify-center shadow-lg relative group overflow-hidden">
                 <QrCode className="w-40 h-40 text-aura-900" />
                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                   <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-gray-200">
                     Download QR
                   </Button>
                 </div>
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between bg-aura-900/50 p-3 rounded-lg border border-aura-700/50">
                  <div className="flex items-center">
                    <MousePointerClick className="w-4 h-4 text-aura-accent mr-2" />
                    <span className="text-sm text-gray-400">Total Clicks</span>
                  </div>
                  <span className="font-bold text-white">1,402</span>
                </div>
                <div className="flex items-center justify-between bg-aura-900/50 p-3 rounded-lg border border-aura-700/50">
                  <div className="flex items-center">
                    <UserPlus className="w-4 h-4 text-aura-purple mr-2" />
                    <span className="text-sm text-gray-400">Signups</span>
                  </div>
                  <span className="font-bold text-white">345</span>
                </div>
                <div className="flex items-center justify-between bg-aura-900/50 p-3 rounded-lg border border-aura-700/50">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-sm text-gray-400">Qualified</span>
                  </div>
                  <span className="font-bold text-white">142</span>
                </div>
              </div>
            </div>

          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
