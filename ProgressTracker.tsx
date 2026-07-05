import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Activity, Calendar as CalendarIcon, Target } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export function ProgressTracker() {
  const weeklyData = [
    { day: 'Mon', hours: 1.2 },
    { day: 'Tue', hours: 2.5 },
    { day: 'Wed', hours: 0.8 },
    { day: 'Thu', hours: 3.1 },
    { day: 'Fri', hours: 1.5 },
    { day: 'Sat', hours: 4.2 },
    { day: 'Sun', hours: 2.0 },
  ];

  const skillData = [
    { subject: 'DeFi Basics', A: 90, fullMark: 100 },
    { subject: 'Staking', A: 85, fullMark: 100 },
    { subject: 'Governance', A: 60, fullMark: 100 },
    { subject: 'Treasury', A: 40, fullMark: 100 },
    { subject: 'Security', A: 75, fullMark: 100 },
    { subject: 'Analytics', A: 50, fullMark: 100 },
  ];

  return (
    <section className="py-12 relative z-10" id="progress">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Activity className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Progress Analytics</h2>
            <p className="text-gray-400">Track your learning velocity and skill acquisition.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SlideUp>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-bold text-white flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-blue-400" /> Weekly Learning Hours
               </h3>
               <span className="text-xs font-medium text-gray-400 bg-aura-900 px-2 py-1 rounded">Last 7 Days</span>
            </div>
            
            <div className="flex-1 -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                    contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px' }}
                    itemStyle={{ color: '#60a5fa' }}
                  />
                  <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </SlideUp>

        <SlideUp delay={0.1}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-2">
               <h3 className="text-lg font-bold text-white flex items-center">
                  <Target className="w-4 h-4 mr-2 text-fuchsia-400" /> Skill Radar
               </h3>
            </div>
            
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Skills" dataKey="A" stroke="#d946ef" fill="#d946ef" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </SlideUp>
      </div>
    </section>
  );
}
