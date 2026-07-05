import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Star, Users, Clock, Play } from 'lucide-react';

const courses = [
  {
    title: 'DeFi Strategies Masterclass',
    instructor: 'Alex Mercer (CoreDeFi Core)',
    duration: '2h 15m',
    difficulty: 'Advanced',
    rating: '4.9',
    students: '12.5k',
    desc: 'Learn advanced yield farming and risk mitigation strategies in the CoreDeFi ecosystem.',
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Intro to Smart Web Rewards',
    instructor: 'Sarah Jenkins',
    duration: '45m',
    difficulty: 'Beginner',
    rating: '4.7',
    students: '8.2k',
    desc: 'Understand how to earn AURAXX by engaging with the protocol and completing missions.',
    image: 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20'
  },
  {
    title: 'Governance Proposal Drafting',
    instructor: 'CoreDeFi DAO Council',
    duration: '1h 30m',
    difficulty: 'Intermediate',
    rating: '4.8',
    students: '5.1k',
    desc: 'A complete guide to drafting, submitting, and lobbying for an CoreDeFi Improvement Proposal (AIP).',
    image: 'bg-gradient-to-br from-fuchsia-500/20 to-orange-500/20'
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-12 relative z-10" id="featured-courses">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Featured Courses</h2>
          <p className="text-gray-400">Hand-picked courses to accelerate your Web3 journey.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <SlideUp key={course.title} delay={index * 0.1}>
            <Card className="bg-aura-800/30 border-aura-700/50 p-0 overflow-hidden h-full flex flex-col group hover:border-blue-500/30 transition-colors cursor-pointer">
              {/* Cover Image Placeholder */}
              <div className={`h-40 ${course.image} relative flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                 <div className="absolute inset-0 bg-aura-900/20 mix-blend-overlay" />
                 <Play className="w-12 h-12 text-white/50 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" />
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-xs text-blue-400 font-medium">{course.instructor}</span>
                   <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 bg-aura-900 px-2 py-1 rounded-md">{course.difficulty}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1">{course.desc}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
                   <div className="flex items-center space-x-3">
                      <span className="flex items-center"><Star className="w-3.5 h-3.5 text-yellow-400 mr-1" /> {course.rating}</span>
                      <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> {course.students}</span>
                   </div>
                   <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {course.duration}</span>
                </div>

                <div className="flex gap-3 mt-auto">
                   <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white border-0">Start</Button>
                   <Button variant="secondary" className="px-4 hover:bg-aura-700 hover:text-white">Preview</Button>
                </div>
              </div>
            </Card>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
