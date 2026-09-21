import React, { useState } from 'react';
import { Trophy, Flame, Users, Award, CheckCircle2, Star } from 'lucide-react';

export const SleepChallenge: React.FC = () => {
  const [userStreak, setUserStreak] = useState(8);
  const [hasLoggedToday, setHasLoggedToday] = useState(false);
  const [totalParticipants, setTotalParticipants] = useState(1420);

  const leaderboard = [
    { rank: 1, name: 'Elena R.', streak: '14 Days', badge: 'Consistency Master', score: '98%' },
    { rank: 2, name: 'Marcus K.', streak: '13 Days', badge: 'Night Owl Reset', score: '96%' },
    { rank: 3, name: 'You (Sleep OS)', streak: `${userStreak} Days`, badge: 'On Track', score: '91%', isUser: true },
    { rank: 4, name: 'Sophia L.', streak: '8 Days', badge: 'Habit Builder', score: '89%' },
    { rank: 5, name: 'David M.', streak: '7 Days', badge: 'Wind-Down Pro', score: '86%' },
  ];

  const handleSprintCheckIn = () => {
    if (!hasLoggedToday) {
      setUserStreak(prev => prev + 1);
      setHasLoggedToday(true);
      setTotalParticipants(prev => prev + 1);
    }
  };

  const progressPercentage = Math.round((userStreak / 14) * 100);

  return (
    <section id="challenge" className="py-20 relative bg-[#070918] border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Trophy className="w-3.5 h-3.5 text-purple-400" />
            <span>FEATURE MODULE 03 • COMMUNITY CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            14-Day Bedtime Challenge
          </h2>

          <p className="text-slate-300 text-base">
            Build bedtime accountability together with community streaks, sprint milestones, and peer encouragement.
          </p>
        </div>

        {/* MAIN CHALLENGE INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Sprint Status & Check-in Control (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6 glow-subtle">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">ACTIVE SPRINT</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">14-Day Bedtime Regularity Sprint</h3>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-semibold text-purple-300 flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                <span>{totalParticipants.toLocaleString()} Participants</span>
              </div>
            </div>

            {/* User Sprint Progress Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Your Sprint Progress</span>
                <span className="text-purple-300 font-mono font-bold">Day {userStreak} of 14 ({progressPercentage}%)</span>
              </div>

              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                />
              </div>
            </div>

            {/* Check-in Action Box */}
            <div className="bg-slate-950/90 border border-purple-500/20 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
                <Flame className="w-6 h-6 text-amber-400" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">Daily Bedtime Check-in</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Log your bedtime within your target 20-minute window to keep your sprint streak alive.
                </p>
              </div>

              <button
                onClick={handleSprintCheckIn}
                disabled={hasLoggedToday}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  hasLoggedToday
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-950'
                }`}
              >
                {hasLoggedToday ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Check-in Complete for Today! (+1 Day)</span>
                  </>
                ) : (
                  <>
                    <Flame className="w-4 h-4 text-amber-300" />
                    <span>Log Today's Bedtime Commitment</span>
                  </>
                )}
              </button>
            </div>

            {/* Achievement Badges Preview */}
            <div className="pt-2 border-t border-white/5 space-y-3">
              <div className="text-xs font-semibold text-slate-300">Unlocked Milestone Badges</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-purple-500/30 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">7-Day Streak</div>
                  <div className="text-[9px] text-emerald-400 font-mono mt-0.5">Unlocked ✓</div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-white/5 text-center opacity-80">
                  <Award className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Screen Master</div>
                  <div className="text-[9px] text-slate-400 font-mono mt-0.5">In Progress (5/7)</div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-white/5 text-center opacity-80">
                  <Trophy className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">Sprint Champion</div>
                  <div className="text-[9px] text-slate-400 font-mono mt-0.5">Reach Day 14</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Sprint Leaderboard (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Sprint Leaderboard</span>
                </h3>
                <p className="text-xs text-slate-400">Live community consistency rankings</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {leaderboard.map((item) => (
                <div
                  key={item.rank}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                    item.isUser
                      ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-md'
                      : 'bg-slate-950/70 border-white/5 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full font-mono text-xs font-bold flex items-center justify-center ${
                        item.rank === 1
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : item.rank === 2
                          ? 'bg-slate-400/20 text-slate-300 border border-slate-400/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      #{item.rank}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{item.name}</span>
                        {item.isUser && <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.2 rounded">YOU</span>}
                      </div>
                      <div className="text-[10px] text-purple-400 font-mono">{item.badge}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-amber-400 font-mono">{item.streak}</div>
                    <div className="text-[10px] text-slate-400">{item.score} Consistency</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-400 italic">
                * Sprint rankings update daily at bedtime cutoff.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
