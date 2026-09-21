import React, { useState } from 'react';
import { LayoutDashboard, Plus, TrendingUp, Moon } from 'lucide-react';

export const SleepAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d'>('7d');
  const [showLogModal, setShowLogModal] = useState(false);

  // Dynamic Chart Data State
  const [weeklyData, setWeeklyData] = useState([
    { day: 'Mon', score: 78, latency: 22, duration: '7h 10m' },
    { day: 'Tue', score: 82, latency: 18, duration: '7h 35m' },
    { day: 'Wed', score: 85, latency: 14, duration: '7h 45m' },
    { day: 'Thu', score: 81, latency: 16, duration: '7h 20m' },
    { day: 'Fri', score: 88, latency: 10, duration: '8h 05m' },
    { day: 'Sat', score: 91, latency: 11, duration: '8h 20m' },
    { day: 'Sun', score: 84, latency: 12, duration: '7h 44m' },
  ]);

  // Log Modal Form State
  const [logBedtime, setLogBedtime] = useState('23:00');
  const [logWaketime, setLogWaketime] = useState('07:00');
  const [logFeeling, setLogFeeling] = useState('Rested');

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    const newScore = logFeeling === 'Rested' ? 89 : logFeeling === 'Okay' ? 80 : 72;
    const newEntry = {
      day: 'Today',
      score: newScore,
      latency: logFeeling === 'Rested' ? 10 : 20,
      duration: '8h 00m',
    };
    
    setWeeklyData([...weeklyData.slice(1), newEntry]);
    setShowLogModal(false);
  };

  const avgScore = Math.round(weeklyData.reduce((acc, d) => acc + d.score, 0) / weeklyData.length);
  const avgLatency = Math.round(weeklyData.reduce((acc, d) => acc + d.latency, 0) / weeklyData.length);

  return (
    <section id="dashboard" className="py-20 relative bg-[#060814] border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-xs font-semibold text-sky-300">
              <LayoutDashboard className="w-3.5 h-3.5 text-sky-400" />
              <span>FEATURE MODULE 02 • INTERACTIVE ANALYTICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sleep Dashboard & Trends
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Monitor sleep score consistency, latency reductions, and stage trends across daily wind-down routines.
            </p>
          </div>

          {/* Time-Range Toggle & Manual Log Button */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-1 rounded-xl border border-white/10 flex gap-1">
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  timeRange === '7d' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  timeRange === '30d' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                30 Days
              </button>
            </div>

            <button
              onClick={() => setShowLogModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 border border-sky-400/30 shadow-md cursor-pointer transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Log Sleep Entry</span>
            </button>
          </div>
        </div>

        {/* METRICS & TREND CHART GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SVG Trend Chart (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-sky-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6 glow-subtle-blue">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-sky-400" />
                  <span>Sleep Score Consistency Trend</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Daily sleep execution ratings ({timeRange === '7d' ? '7-Day View' : '30-Day Projection'})
                </p>
              </div>

              <div className="text-right">
                <span className="text-2xl font-black text-sky-400">{avgScore}</span>
                <span className="text-xs text-slate-400 block font-mono">Avg Score</span>
              </div>
            </div>

            {/* Interactive SVG Chart Visual */}
            <div className="bg-slate-950/80 border border-white/5 rounded-2xl p-6 relative">
              <div className="h-48 w-full flex items-end justify-between gap-3 pt-6 px-2">
                {weeklyData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-sky-500/40 text-[10px] text-sky-300 font-mono px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-20">
                      Score: {item.score} • Latency: {item.latency}m
                    </div>

                    {/* Score Bar */}
                    <div className="w-full bg-slate-800 rounded-t-lg relative flex items-end overflow-hidden" style={{ height: '140px' }}>
                      <div
                        className="w-full bg-gradient-to-t from-indigo-600 via-sky-500 to-sky-400 rounded-t-lg group-hover:brightness-125 transition-all duration-300"
                        style={{ height: `${(item.score / 100) * 140}px` }}
                      />
                    </div>

                    <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-sky-300 transition-colors">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-sky-400" /> Sleep Score</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-700" /> Base Baseline (70)</span>
                </div>
                <span className="text-emerald-400 font-semibold text-[11px]">+12% vs last week</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Sleep Metrics Summary Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-5 space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Average Sleep Latency</div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-black text-white">{avgLatency} mins</span>
                <span className="text-xs font-semibold text-emerald-400">-6m faster</span>
              </div>
              <p className="text-xs text-slate-400">Time elapsed before entering light sleep</p>
            </div>

            <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-5 space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Deep Sleep Ratio</div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-black text-indigo-400">23%</span>
                <span className="text-xs font-semibold text-indigo-300">1h 45m</span>
              </div>
              <p className="text-xs text-slate-400">Physical restorative sleep phase percentage</p>
            </div>

            <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-5 space-y-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">REM Sleep Ratio</div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-black text-sky-400">28%</span>
                <span className="text-xs font-semibold text-sky-300">2h 10m</span>
              </div>
              <p className="text-xs text-slate-400">Cognitive processing & memory consolidation phase</p>
            </div>

          </div>

        </div>

        {/* LOG SLEEP ENTRY MODAL */}
        {showLogModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-sky-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Moon className="w-5 h-5 text-sky-400" />
                  <span>Log Last Night's Sleep</span>
                </h3>
                <button
                  onClick={() => setShowLogModal(false)}
                  className="text-slate-400 hover:text-white text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddLog} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Bedtime Time</label>
                  <input
                    type="time"
                    value={logBedtime}
                    onChange={(e) => setLogBedtime(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-2.5 text-sm text-white font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Wake Up Time</label>
                  <input
                    type="time"
                    value={logWaketime}
                    onChange={(e) => setLogWaketime(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-2.5 text-sm text-white font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Morning Feeling</label>
                  <select
                    value={logFeeling}
                    onChange={(e) => setLogFeeling(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Rested">Rested & Energized</option>
                    <option value="Okay">Neutral / Satisfactory</option>
                    <option value="Tired">Tired / Groggy</option>
                  </select>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowLogModal(false)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-slate-400 bg-slate-800 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-colors cursor-pointer"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
