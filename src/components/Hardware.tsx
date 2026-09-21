import React from 'react';
import { Volume2, Sparkles } from 'lucide-react';

export const Hardware: React.FC = () => {
  const features = [
    {
      title: 'Low-profile ergonomic design',
      desc: 'Engineered specifically for night-long wear without pressure points.',
    },
    {
      title: 'Side-sleeping comfort',
      desc: 'Ultra-thin medical-grade silicone housing sits flush inside the ear canal.',
    },
    {
      title: 'Sleep audio optimization',
      desc: 'Precision acoustic drivers tailored for calming binaural beats & pink noise.',
    },
    {
      title: 'Environmental noise monitoring',
      desc: 'Passive isolation paired with subtle ambient noise masking.',
    },
    {
      title: 'Smart restorative alarm',
      desc: 'Gentle haptic & acoustic wake signals aligned with your lightest sleep phase.',
    },
  ];

  return (
    <section id="hardware" className="py-24 relative bg-[#080b1e]/90 border-y border-white/5 scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conceptual Product Showcase Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-indigo-500/20 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden glow-subtle">
              
              {/* Badge: FUTURE CONCEPT */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase">
                  FUTURE CONCEPT
                </span>
                <span className="text-xs font-mono text-slate-400">PHASE 4 VISION</span>
              </div>

              {/* Mockup Product Illustration Container */}
              <div className="my-8 py-10 bg-slate-950/80 border border-white/5 rounded-2xl flex flex-col items-center justify-center relative group">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-sky-500/20 border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-950/80 relative">
                  <div className="w-20 h-20 rounded-full bg-indigo-950/90 border border-indigo-400/30 flex items-center justify-center">
                    <Volume2 className="w-9 h-9 text-indigo-300" />
                  </div>
                  {/* Subtle orbital ring indicator */}
                  <div className="absolute inset-0 rounded-full border border-indigo-400/20 animate-ping opacity-20 pointer-events-none" />
                </div>

                <div className="mt-6 text-center">
                  <h4 className="text-lg font-bold text-white tracking-wide">Sleep OS Earbuds</h4>
                  <p className="text-xs text-slate-400 mt-1">Ultra-low profile biometric sleep audio hardware</p>
                </div>
              </div>

              {/* Explicit Disclaimer */}
              <div className="p-3.5 bg-slate-900/90 border border-white/5 rounded-xl text-center">
                <p className="text-xs text-slate-400">
                  * <strong className="text-slate-300">Note:</strong> Conceptual hardware expansion designed for Phase 4. Currently non-existent; Sleep OS is software-first.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Text & Features List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Hardware Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Software first.{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Hardware when it matters.
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We believe habit change starts in software. Once routines are established, custom sleep earbuds will elevate comfort and nighttime environment control.
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/20 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
