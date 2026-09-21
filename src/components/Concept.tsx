import React from 'react';
import { Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Concept: React.FC = () => {
  const flowNodes = [
    { label: 'CONTENT', subtitle: 'Guided wind-down audio' },
    { label: 'ROUTINE', subtitle: 'Structured evening steps' },
    { label: 'HABIT', subtitle: 'Daily consistency triggers' },
    { label: 'DATA', subtitle: 'Measurable sleep metrics' },
    { label: 'PERSONALISATION', subtitle: 'AI-tailored habit loops' },
  ];

  return (
    <section id="concept" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-medium text-indigo-300">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Platform Layer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Not another sleep-sounds app.
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Most sleep products focus only on surface content or passive measurement. Sleep OS unifies the entire bedtime journey into one continuous feedback loop.
          </p>
        </div>

        {/* Connected Flow Diagram Visual */}
        <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl backdrop-blur-xl">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-8">
            The Sleep OS Behavioural Loop
          </div>

          {/* Flow Nodes Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {flowNodes.map((node, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full bg-slate-950/80 border border-indigo-500/20 hover:border-indigo-400/50 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-950/60 relative group">
                  <span className="text-[10px] font-mono text-indigo-400 block mb-1">0{index + 1}</span>
                  <div className="text-sm font-bold tracking-wider text-white group-hover:text-indigo-300 transition-colors">
                    {node.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {node.subtitle}
                  </div>
                </div>

                {/* Connector Arrow for non-last nodes */}
                {index < flowNodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-indigo-400/60">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Integrated system converting nightly data into smarter evening habits</span>
          </div>
        </div>

        {/* Clarification Box: "OS" Platform Definition */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-900/90 via-indigo-950/30 to-slate-900/90 border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">Why "OS"?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                In Sleep OS, <strong className="text-indigo-300 font-semibold">"OS" refers to the platform layer</strong> that connects routine building, behavioural tracking, guided wind-downs, and personalisation into one seamless experience.
              </p>
              <p className="text-xs text-slate-400 italic">
                * Note: Sleep OS is a sleep-behaviour web application platform, not a desktop computer operating system.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
