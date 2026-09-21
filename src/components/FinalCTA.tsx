import React from 'react';
import { ArrowRight, Moon } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToRoutine = () => {
    const element = document.getElementById('routine');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-indigo-500/30 rounded-3xl p-10 sm:p-16 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-xl glow-subtle space-y-6">
          
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto">
            <Moon className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your best nights start before you fall asleep.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Take control of your evening habits with a personalized routine built around your life.
          </p>

          <div className="pt-4">
            <button
              onClick={scrollToRoutine}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/30 shadow-xl shadow-indigo-950/80 hover:shadow-indigo-500/20 transition-all cursor-pointer group"
            >
              <span>Build Your Routine</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
