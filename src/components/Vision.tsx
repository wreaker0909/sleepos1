import React from 'react';
import { Compass } from 'lucide-react';

export const Vision: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Sleep OS App',
      description: 'Foundational web platform featuring routine building, bedtime wind-down guidance, and consistency tracking.',
      status: 'Current Focus',
      active: true,
    },
    {
      phase: 'Phase 2',
      title: 'Personalised Sleep Intelligence',
      description: 'Algorithmic habit recommendations, sleep latency correlations, and smart timing optimization.',
      status: 'Upcoming',
      active: false,
    },
    {
      phase: 'Phase 3',
      title: 'Social Accountability',
      description: 'Peer sleep challenges, community habit streaks, and group bedtime commitments.',
      status: 'Upcoming',
      active: false,
    },
    {
      phase: 'Phase 4',
      title: 'Sleep Hardware',
      description: 'Proprietary low-profile sleep earbuds with active environmental noise monitoring and haptic restorative alarms.',
      status: 'Future Vision',
      active: false,
    },
  ];

  return (
    <section id="vision" className="py-24 relative bg-[#070a1a] border-y border-white/5 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>Product Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build better nights. One habit at a time.
          </h2>
          <p className="text-slate-300 text-base">
            Our multi-stage roadmap scales Sleep OS from a habit platform into a complete sleep ecosystem.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative border ${
                item.active
                  ? 'bg-slate-900/90 border-indigo-500/50 shadow-xl shadow-indigo-950/60 glow-subtle'
                  : 'bg-slate-900/50 border-white/5 hover:border-white/15'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {item.phase}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      item.active
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 border border-white/5'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress Bar Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.active ? 'bg-indigo-500 w-full' : 'bg-slate-700 w-1/4'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
