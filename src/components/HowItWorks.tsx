import React from 'react';
import { Sliders, Moon, LineChart, Cpu } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Build your routine',
      description: 'Select habits, set timing triggers, and structure your ideal evening wind-down sequence.',
      icon: <Sliders className="w-5 h-5 text-indigo-400" />,
    },
    {
      number: '02',
      title: 'Follow your routine',
      description: 'Receive gentle evening cues, ambient audio guidance, and timely screen-off prompts.',
      icon: <Moon className="w-5 h-5 text-sky-400" />,
    },
    {
      number: '03',
      title: 'Track consistency',
      description: 'Log completion rates and observe how bedtime regularity directly impacts your energy.',
      icon: <LineChart className="w-5 h-5 text-purple-400" />,
    },
    {
      number: '04',
      title: 'Personalise over time',
      description: 'Our intelligence engine adjusts habit timing and recommendations based on your sleep history.',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
            System Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Four steps to consistent sleep
          </h2>
          <p className="text-slate-300 text-base">
            Sleep OS simplifies habit formation into a reliable, repeatable daily framework.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black text-indigo-400 font-mono tracking-wider">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
