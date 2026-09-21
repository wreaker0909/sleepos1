import React from 'react';
import { Check } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const tiers = [
    {
      name: 'FREE',
      tagline: 'Essential habit foundation',
      badge: 'Core Platform',
      features: [
        'Basic routines',
        'Basic tracking',
        'Limited content',
      ],
      highlight: false,
    },
    {
      name: 'PREMIUM',
      tagline: 'Complete personalised intelligence',
      badge: 'Most Popular',
      features: [
        'Personalised routines',
        'Advanced insights',
        'Full content library',
        'Social challenges',
      ],
      highlight: true,
    },
    {
      name: 'HARDWARE',
      tagline: 'Integrated sleep ecosystem',
      badge: 'Future Tier',
      features: [
        'Future sleep earbuds',
        'Accessories',
        'Future devices',
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Monetisation Strategy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible tiers for every sleeper
          </h2>
          <p className="text-slate-300 text-base">
            Designed to scale from accessible daily routines to advanced personalisation and proprietary hardware.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlight
                  ? 'bg-gradient-to-b from-indigo-950/90 to-slate-900/90 border-2 border-indigo-500/60 shadow-2xl shadow-indigo-950/80 md:-translate-y-2 glow-subtle'
                  : 'bg-slate-900/60 border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tier.highlight
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                        : 'bg-slate-800 text-slate-400 border border-white/5'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                {/* Tier Name */}
                <h3 className="text-2xl font-black tracking-tight text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-400 mb-6">{tier.tagline}</p>

                {/* Feature List */}
                <ul className="space-y-3.5 pt-2 border-t border-white/10">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          tier.highlight
                            ? 'bg-indigo-500/20 text-indigo-400'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-4 border-t border-white/5 text-center">
                <span className="text-xs font-medium text-slate-400">
                  {tier.name === 'HARDWARE' ? 'Phase 4 Release' : 'Subscription Tier'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
