import React from 'react';
import { Sliders, LayoutDashboard, Trophy, Sparkles } from 'lucide-react';

export const ProductDemos: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#070918] border-y border-white/5 space-y-20">
      
      {/* Section Container Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Demonstrations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Experience Sleep OS
        </h2>
        <p className="text-slate-300 text-base">
          Preview our three core platform modules designed to transform nighttime habits.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* DEMO 1: Routine Builder Placeholder (#routine) */}
        <div id="routine" className="scroll-mt-24 bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden glow-subtle">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
                <span>MODULE 01</span>
                <span>•</span>
                <span className="text-slate-400">INTERACTIVE PLACEHOLDER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Sliders className="w-7 h-7 text-indigo-400" />
                <span>Routine Builder</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Design custom bedtime sequences with timed wind-down triggers, room prep reminders, screen-off cutoffs, and evening reflection prompts.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Dim Lights (10:00 PM)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Screen Cutoff (10:15 PM)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Guided Wind-down (10:30 PM)
                </span>
              </div>
            </div>

            {/* Interactive Component Frame Placeholder */}
            <div className="w-full lg:w-96 bg-slate-950/90 border border-indigo-500/20 rounded-2xl p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-semibold text-slate-300">Default Evening Flow</span>
                <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
                  Ready for Phase 2
                </span>
              </div>
              
              <div className="space-y-2.5">
                <div className="p-3 bg-slate-900 border border-indigo-500/20 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-xs font-medium text-slate-200">1. Environment Prep</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">15m</span>
                </div>

                <div className="p-3 bg-slate-900 border border-indigo-500/20 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="text-xs font-medium text-slate-200">2. Guided Breathing</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">10m</span>
                </div>

                <div className="p-3 bg-slate-900 border border-indigo-500/20 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-slate-200">3. Sleep Audio Stream</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">30m</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <span className="text-[11px] text-indigo-400 font-mono">
                  [ #routine Module Container Ready ]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DEMO 2: Sleep Dashboard Placeholder (#dashboard) */}
        <div id="dashboard" className="scroll-mt-24 bg-slate-900/80 border border-sky-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden glow-subtle-blue">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
                <span>MODULE 02</span>
                <span>•</span>
                <span className="text-slate-400">INTERACTIVE PLACEHOLDER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <LayoutDashboard className="w-7 h-7 text-sky-400" />
                <span>Sleep Dashboard</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Track habit execution scores, sleep latency trends, bedtime consistency percentages, and morning restorative ratings in one streamlined dashboard.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Habit Consistency (91%)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Avg Latency (14m)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  7-Day Trend Analytics
                </span>
              </div>
            </div>

            {/* Interactive Dashboard Frame Placeholder */}
            <div className="w-full lg:w-96 bg-slate-950/90 border border-sky-500/20 rounded-2xl p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-semibold text-slate-300">Habit Metrics Preview</span>
                <span className="text-[10px] bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-500/30">
                  Ready for Phase 2
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-slate-900 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-slate-400">7-Day Consistency</div>
                  <div className="text-lg font-bold text-sky-400 mt-1">91%</div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-white/5">
                  <div className="text-[10px] text-slate-400">Wind-down Speed</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">+18%</div>
                </div>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="text-xs text-slate-300">Weekly Habit Streaks</div>
                <div className="flex gap-1">
                  {['M','T','W','T','F','S','S'].map((_day, idx) => (
                    <div key={idx} className="w-4 h-4 rounded bg-indigo-500/30 border border-indigo-400/40 text-[9px] font-mono flex items-center justify-center text-indigo-300">
                      ✓
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <span className="text-[11px] text-sky-400 font-mono">
                  [ #dashboard Module Container Ready ]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DEMO 3: Sleep Challenge Placeholder (#challenge) */}
        <div id="challenge" className="scroll-mt-24 bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden glow-subtle">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
                <span>MODULE 03</span>
                <span>•</span>
                <span className="text-slate-400">INTERACTIVE PLACEHOLDER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <Trophy className="w-7 h-7 text-purple-400" />
                <span>Sleep Challenge</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Join structured 14-day bedtime accountability sprints, track group streaks, unlock milestone badges, and lock in consistent sleep schedules with friends.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  14-Day Bedtime Reset
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Peer Streak Tracking
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-white/5">
                  Milestone Rewards
                </span>
              </div>
            </div>

            {/* Interactive Challenge Frame Placeholder */}
            <div className="w-full lg:w-96 bg-slate-950/90 border border-purple-500/20 rounded-2xl p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-semibold text-slate-300">Sprint Challenge Preview</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                  Ready for Phase 3
                </span>
              </div>
              
              <div className="bg-slate-900 p-3.5 rounded-xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">14-Day Consistent Bedtime Sprint</span>
                  <span className="text-[11px] text-purple-400 font-medium">Day 8 of 14</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[57%]" />
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400">
                  <span>Participants: 1,420 sleepers</span>
                  <span className="text-emerald-400 font-semibold">Streak: 8 Days</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <span className="text-[11px] text-purple-400 font-mono">
                  [ #challenge Module Container Ready ]
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
