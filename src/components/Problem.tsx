import React from 'react';
import { CalendarX, Smartphone, BrainCircuit, Activity } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <CalendarX className="w-6 h-6 text-indigo-400" />,
      title: 'Inconsistent schedules',
      description: 'Shifting sleep times confuse your circadian clock, leading to poor sleep quality even when getting enough hours.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      title: 'Screen habits',
      description: 'Late-night blue light exposure and doomscrolling delay natural melatonin release and keep your mind hyper-stimulated.',
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      title: 'Stress & overthinking',
      description: 'Unwinding without structure leaves your nervous system alert, preventing the transition into restorative deep sleep.',
    },
    {
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      title: 'No feedback loop',
      description: 'Without tracking habit consistency against sleep outcomes, it is impossible to learn what actually improves your sleep.',
    },
  ];

  return (
    <section className="py-20 relative bg-[#080b1c]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
            The Sleep Gap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Knowing you need sleep isn't the same as building a sleep habit.
          </h2>
          <p className="text-slate-400 text-base">
            Modern sleep products offer endless tracking or sound loops, but fail to address the core problem: bedtime behaviour.
          </p>
        </div>

        {/* 4 Compact Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-950/40 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
