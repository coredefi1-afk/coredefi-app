import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Award, CheckCircle, Lock, PlayCircle, ShieldCheck } from 'lucide-react';
import { QuizModal } from '@/src/components/QuizModal';

const certifications = [
  {
    title: 'CoreDeFi Fundamentals',
    status: 'completed',
    score: '96%',
    attempts: 1,
    badgeColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/20'
  },
  {
    title: 'Advanced DeFi Strategies',
    status: 'in-progress',
    score: '--',
    attempts: 0,
    badgeColor: 'text-blue-400',
    badgeBg: 'bg-blue-500/10'
  },
  {
    title: 'DAO Governance Master',
    status: 'locked',
    score: '--',
    attempts: 0,
    badgeColor: 'text-gray-500',
    badgeBg: 'bg-gray-800'
  }
];

export function QuizzesCertifications() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  return (
    <section className="py-12 relative z-10" id="certifications">
      <QuizModal 
        isOpen={!!activeQuiz} 
        onClose={() => setActiveQuiz(null)} 
        title={activeQuiz || ''} 
      />
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-fuchsia-500/10 rounded-lg">
            <Award className="w-6 h-6 text-fuchsia-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Certifications & Quizzes</h2>
            <p className="text-gray-400">Validate your knowledge and earn on-chain verifiable badges.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <SlideUp key={cert.title} delay={index * 0.1}>
            <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col relative overflow-hidden group">
              {cert.status === 'locked' && (
                 <div className="absolute inset-0 bg-aura-900/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
                    <Lock className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-300">Complete prerequisites to unlock</span>
                 </div>
              )}
              
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${cert.badgeBg} border border-aura-700/50`}>
                   {cert.status === 'completed' ? <ShieldCheck className={`w-7 h-7 ${cert.badgeColor}`} /> : <Award className={`w-7 h-7 ${cert.badgeColor}`} />}
                </div>
                {cert.status === 'completed' && (
                  <span className="flex items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                     <CheckCircle className="w-3.5 h-3.5 mr-1" /> Passed
                  </span>
                )}
                {cert.status === 'in-progress' && (
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md">
                     Available
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                 <div>
                    <span className="block text-gray-500 text-xs mb-1">Passing Score</span>
                    <span className="text-white font-medium">80%</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-xs mb-1">Your Best Score</span>
                    <span className={`font-medium ${cert.status === 'completed' ? 'text-emerald-400' : 'text-gray-400'}`}>{cert.score}</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-xs mb-1">Attempts</span>
                    <span className="text-white font-medium">{cert.attempts} / 3</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-xs mb-1">Questions</span>
                    <span className="text-white font-medium">25</span>
                 </div>
              </div>

              <div className="mt-auto pt-4 border-t border-aura-700/50">
                 {cert.status === 'completed' ? (
                   <Button variant="secondary" className="w-full text-fuchsia-400 hover:text-fuchsia-300 hover:bg-fuchsia-500/10 border-fuchsia-500/30">
                      View Certificate Badge
                   </Button>
                 ) : (
                   <Button onClick={() => setActiveQuiz(cert.title)} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      <PlayCircle className="w-4 h-4 mr-2" /> Start Certification
                   </Button>
                 )}
              </div>
            </Card>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
