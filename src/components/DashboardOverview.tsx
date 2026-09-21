import React, { useState } from 'react';
import { Moon, Clock, Flame, Award, CheckCircle2, Circle, Sparkles, RefreshCw, ArrowUpRight, Smile, Meh, Frown } from 'lucide-react';

interface DashboardProps {
  onNavigateToRoutine: () => void;
  onNavigateToAnalytics: () => void;
  onNavigateToChallenge: () => void;
}

export const DashboardOverview: React.FC<DashboardProps> = ({
  onNavigateToRoutine,
  onNavigateToAnalytics,
  onNavigateToChallenge,
}) => {
  // Interactive State
  const [sleepScore, setSleepScore] = useState(84);
  const [lastRating, setLastRating] = useState<'Rested' | 'Neutral' | 'Tired'>('Rested');
  
  // Routine Checklist State
  const [routineTasks, setRoutineTasks] = useState([
    { id: 1, title: 'Dim bedroom lights & set temperature to 19°C', duration: '10:00 PM', completed: true },
    { id: 2, title: 'Screen cutoff & activate Do Not Disturb', duration: '10:15 PM', completed: true },
    { id: 3, title: 'Guided 4-7-8 breathing wind-down', duration: '10:30 PM', completed: false },
    { id: 4, title: 'Sleep OS ambient pink noise stream', duration: '10:45 PM', completed: false },
  ]);

  // Insight Generator State
  const insightsList = [
    'Your sleep latency was 14 minutes faster on nights you completed screen cutoff before 10:15 PM.',
    'Deep sleep increased by 18% when keeping bedroom temperature consistently at 19°C.',
    'Consistent bedtime within a 20-minute window improved morning alertness ratings by 24%.',
    'Guided wind-down audio reduced tossing and turning during your initial sleep cycle by 30%.',
  ];
  const [insightIndex, setInsightIndex] = useState(0);

  // Challenge Streak State
  const [streakDays, setStreakDays] = useState(5);
  const [checkedInToday, setCheckedInToday] = useState(false);

  const toggleTask = (id: number) => {
    setRoutineTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedCount = routineTasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / routineTasks.length) * 100);

  const handleRateMorning = (rating: 'Rested' | 'Neutral' | 'Tired') => {
    setLastRating(rating);
    if (rating === 'Rested') setSleepScore(88);
    else if (rating === 'Neutral') setSleepScore(80);
    else setSleepScore(72);
  };

  const nextInsight = () => {
    setInsightIndex((prev) => (prev + 1) % insightsList.length);
  };

  const handleCheckIn = () => {
    if (!checkedInToday) {
      setStreakDays(prev => prev + 1);
      setCheckedInToday(true);
    }
  };

  return (
    <section className="pt-28 pb-16 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Prototype Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>SLEEP OS • INTERACTIVE PRODUCT PROTOTYPE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Nightly Dashboard Overview
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Live interactive product metrics, routine checklist, and personalised intelligence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToRoutine}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-md cursor-pointer transition-all"
            >
              Configure Routine
            </button>
            <button
              onClick={onNavigateToAnalytics}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20 cursor-pointer transition-all"
            >
              View Analytics
            </button>
          </div>
        </div>

        {/* TOP ROW: 3 CORE METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Sleep Score & Morning Quality Rating */}
          <div className="bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-6 shadow-xl backdrop-blur-xl glow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Sleep Score</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {sleepScore >= 85 ? 'Optimal' : sleepScore >= 78 ? 'Good' : 'Needs Reset'}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-2">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white tracking-tight">{sleepScore}</span>
                  <span className="text-sm text-indigo-400 font-semibold">/ 100</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Based on 91% bedtime consistency
                </p>
              </div>

              {/* Score Progress Ring */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-indigo-400"
                    strokeDasharray={`${sleepScore}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <Moon className="w-5 h-5 text-indigo-400 absolute" />
              </div>
            </div>

            {/* Interactive Morning Quality Quick Rating */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="text-[11px] text-slate-400 font-medium">How do you feel this morning?</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleRateMorning('Rested')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    lastRating === 'Rested'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <Smile className="w-3.5 h-3.5" />
                  <span>Rested</span>
                </button>

                <button
                  onClick={() => handleRateMorning('Neutral')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    lastRating === 'Neutral'
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <Meh className="w-3.5 h-3.5" />
                  <span>Okay</span>
                </button>

                <button
                  onClick={() => handleRateMorning('Tired')}
                  className={`py-1.5 px-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    lastRating === 'Tired'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <Frown className="w-3.5 h-3.5" />
                  <span>Tired</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Sleep Duration & Stage Breakdown */}
          <div className="bg-slate-900/80 border border-sky-500/30 rounded-3xl p-6 shadow-xl backdrop-blur-xl glow-subtle-blue space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Sleep Duration</span>
              </div>
              <span className="text-xs font-mono text-sky-400">Target 7.5h+</span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">7h 44m</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Slept 10:58 PM – 6:42 AM (Latency: 12 mins)
              </p>
            </div>

            {/* Interactive Sleep Stage Breakdown Bar */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Stages Breakdown</span>
                <span className="text-sky-300 font-mono">Deep: 1h 45m</span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex gap-0.5">
                <div className="bg-indigo-500 h-full w-[23%]" title="Deep Sleep 23%" />
                <div className="bg-sky-400 h-full w-[28%]" title="REM Sleep 28%" />
                <div className="bg-slate-600 h-full w-[49%]" title="Light Sleep 49%" />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500" /> Deep (23%)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-400" /> REM (28%)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-600" /> Light (49%)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Bedtime Consistency & Streak */}
          <div className="bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 shadow-xl backdrop-blur-xl glow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Bedtime Consistency</span>
              </div>
              <span className="text-xs font-bold text-emerald-400">Top 10%</span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">91%</span>
                <span className="text-xs text-purple-300 font-mono">7-Day Score</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Target: 10:45 PM • Actual Avg: 10:52 PM
              </p>
            </div>

            {/* Challenge Check-in Action Widget */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">Current Bedtime Streak</span>
                <span className="text-amber-400 font-bold">{streakDays} Days 🔥</span>
              </div>

              <button
                onClick={handleCheckIn}
                disabled={checkedInToday}
                className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  checkedInToday
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md'
                }`}
              >
                {checkedInToday ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Bedtime Logged Today!</span>
                  </>
                ) : (
                  <>
                    <Flame className="w-3.5 h-3.5 text-amber-300" />
                    <span>Check-in Today's Bedtime</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* MIDDLE ROW: TONIGHT'S ROUTINE CHECKLIST & PERSONALISED INSIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tonight's Routine Checklist (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <span>Tonight's Routine Checklist</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click steps to check off as you complete your evening wind-down.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-indigo-300">{completedCount} of {routineTasks.length} Completed</div>
                  <div className="text-[10px] text-slate-400">{progressPercent}% Wind-down Ready</div>
                </div>
                <button
                  onClick={onNavigateToRoutine}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-white/5 transition-colors cursor-pointer"
                  title="Configure Routine"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Interactive Checklist Items */}
            <div className="space-y-3">
              {routineTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    task.completed
                      ? 'bg-indigo-950/30 border-indigo-500/40 text-slate-300'
                      : 'bg-slate-950/70 border-white/5 hover:border-white/20 text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                    <span className={`text-sm font-medium ${task.completed ? 'line-through text-slate-400' : 'text-white'}`}>
                      {task.title}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-indigo-300 px-2.5 py-1 rounded-lg bg-indigo-950/80 border border-indigo-500/20 shrink-0">
                    {task.duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onNavigateToRoutine}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Edit Routine Sequence & Timing Triggers</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Personalised Insight Box (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">AI Sleep Insight</span>
                </div>
                <button
                  onClick={nextInsight}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors cursor-pointer"
                  title="Generate Next Insight"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-sm text-slate-200 leading-relaxed font-normal">
                "{insightsList[insightIndex]}"
              </div>

              <div className="space-y-2">
                <div className="text-[11px] text-slate-400 font-medium">Key Driver Detected</div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-indigo-300 flex items-center justify-between">
                  <span>Circadian Synchronization</span>
                  <span className="font-bold text-emerald-400">+14% Score</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={onNavigateToChallenge}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join 14-Day Sleep Challenge</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
