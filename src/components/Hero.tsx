import React from 'react';
import { ArrowRight, Sparkles, Moon, Clock, Flame, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Personalised Sleep-Behaviour Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Sleep isn't just something you do.{' '}
              <span className="block mt-2 bg-gradient-to-r from-indigo-300 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
                It's a habit you build.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sleep OS turns bedtime into a personalised, measurable routine designed to help you build consistent evening habits.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('routine')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/30 shadow-lg shadow-indigo-950/60 hover:shadow-indigo-500/20 transition-all cursor-pointer group"
              >
                <span>Build Your Routine</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('concept')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <span>Explore Sleep OS</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Column (Sleep Dashboard Card Mockup) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-indigo-950/50 glow-subtle">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">Nightly Intelligence</h2>
                    <p className="text-xs text-slate-400">Live Demo Snapshot</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  Optimal
                </span>
              </div>

              {/* Main Score & Metric Display */}
              <div className="py-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                    Sleep Score
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tight text-white">84</span>
                    <span className="text-sm font-medium text-indigo-400">/ 100</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">High habit consistency</p>
                </div>

                {/* Score Progress Ring Mockup */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-indigo-500"
                      strokeDasharray="84, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <Award className="w-7 h-7 text-indigo-400 absolute" />
                </div>
              </div>

              {/* Demo Data Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-3 text-center">
                  <div className="flex items-center justify-center text-indigo-400 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Bedtime</div>
                  <div className="text-sm font-bold text-white mt-0.5">10:58 PM</div>
                </div>

                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-3 text-center">
                  <div className="flex items-center justify-center text-sky-400 mb-1">
                    <Moon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Wake Time</div>
                  <div className="text-sm font-bold text-white mt-0.5">6:42 AM</div>
                </div>

                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-3 text-center">
                  <div className="flex items-center justify-center text-emerald-400 mb-1">
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Consistency</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">91%</div>
                </div>
              </div>

              {/* Small Footer Tag */}
              <div className="mt-5 pt-3 border-t border-white/5 text-center">
                <p className="text-[11px] text-slate-500 font-mono">
                  DEMO DATA • PERSONALISATION ENGINE READY
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
