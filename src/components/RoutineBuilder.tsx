import React, { useState } from 'react';
import { Sliders, Plus, Trash2, Clock, Volume2, RotateCcw } from 'lucide-react';

export const RoutineBuilder: React.FC = () => {
  // Target Bedtime State
  const [targetBedtime, setTargetBedtime] = useState('22:45'); // 10:45 PM
  const [audioPreset, setAudioPreset] = useState('Pink Noise');

  // Routine Step Items State
  const [steps, setSteps] = useState([
    { id: '1', title: 'Dim bedroom lights & adjust temperature', duration: 15, category: 'Environment' },
    { id: '2', title: 'Screen cutoff & activate Do Not Disturb', duration: 10, category: 'Digital Hygiene' },
    { id: '3', title: 'Guided 4-7-8 breathing wind-down', duration: 10, category: 'Relaxation' },
    { id: '4', title: 'Sleep OS audio stream & bed entry', duration: 25, category: 'Audio Guidance' },
  ]);

  const [newStepTitle, setNewStepTitle] = useState('');
  const [newStepDuration, setNewStepDuration] = useState(10);

  const totalDurationMins = steps.reduce((sum, s) => sum + s.duration, 0);

  // Calculate start time based on target bedtime minus total wind-down duration
  const getCalculatedStartTime = () => {
    const [hours, minutes] = targetBedtime.split(':').map(Number);
    let totalBedtimeMins = hours * 60 + minutes;
    let startMins = totalBedtimeMins - totalDurationMins;
    if (startMins < 0) startMins += 24 * 60;
    
    const startH = Math.floor(startMins / 60);
    const startM = startMins % 60;
    const ampm = startH >= 12 ? 'PM' : 'AM';
    const formattedH = startH % 12 === 0 ? 12 : startH % 12;
    const formattedM = startM < 10 ? `0${startM}` : startM;
    return `${formattedH}:${formattedM} ${ampm}`;
  };

  const handleAddStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStepTitle.trim()) return;

    const newStep = {
      id: Date.now().toString(),
      title: newStepTitle.trim(),
      duration: Number(newStepDuration),
      category: 'Custom Routine',
    };

    setSteps([...steps, newStep]);
    setNewStepTitle('');
    setNewStepDuration(10);
  };

  const handleRemoveStep = (id: string) => {
    setSteps(steps.filter(s => s.id !== id));
  };

  const handleDurationChange = (id: string, newDur: number) => {
    setSteps(steps.map(s => (s.id === id ? { ...s, duration: newDur } : s)));
  };

  const handleResetDefaults = () => {
    setSteps([
      { id: '1', title: 'Dim bedroom lights & adjust temperature', duration: 15, category: 'Environment' },
      { id: '2', title: 'Screen cutoff & activate Do Not Disturb', duration: 10, category: 'Digital Hygiene' },
      { id: '3', title: 'Guided 4-7-8 breathing wind-down', duration: 10, category: 'Relaxation' },
      { id: '4', title: 'Sleep OS audio stream & bed entry', duration: 25, category: 'Audio Guidance' },
    ]);
    setTargetBedtime('22:45');
    setAudioPreset('Pink Noise');
  };

  return (
    <section id="routine" className="py-20 relative bg-[#070918] border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>FEATURE MODULE 01 • INTERACTIVE TOOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Routine Builder
          </h2>

          <p className="text-slate-300 text-base">
            Customize your nightly wind-down sequence, set duration triggers, and calculate your optimal start time.
          </p>
        </div>

        {/* MAIN INTERACTIVE BUILDER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Routine Step Sequence Editor (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6 glow-subtle">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Custom Wind-down Steps</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Adjust step durations or add custom bedtime habits.
                </p>
              </div>

              <button
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-800 border border-white/5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* List of Editable Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="bg-slate-950/80 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-4 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                        <span className="text-[10px] text-indigo-400 font-mono">{step.category}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveStep(step.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                      title="Remove Step"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Duration Slider */}
                  <div className="flex items-center gap-4 pt-1">
                    <input
                      type="range"
                      min="5"
                      max="45"
                      step="5"
                      value={step.duration}
                      onChange={(e) => handleDurationChange(step.id, Number(e.target.value))}
                      className="w-full accent-indigo-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                    />
                    <span className="text-xs font-mono font-bold text-indigo-300 shrink-0 w-12 text-right">
                      {step.duration} mins
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Form to Add New Step */}
            <form onSubmit={handleAddStep} className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-semibold text-slate-300">Add Custom Habit Step</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="e.g. Warm Herbal Tea & Reading"
                  value={newStepTitle}
                  onChange={(e) => setNewStepTitle(e.target.value)}
                  className="flex-1 bg-slate-950 border border-white/10 focus:border-indigo-500/60 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />

                <select
                  value={newStepDuration}
                  onChange={(e) => setNewStepDuration(Number(e.target.value))}
                  className="bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value={5}>5 mins</option>
                  <option value={10}>10 mins</option>
                  <option value={15}>15 mins</option>
                  <option value={20}>20 mins</option>
                  <option value={30}>30 mins</option>
                </select>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 transition-all cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Step</span>
                </button>
              </div>
            </form>

          </div>

          {/* RIGHT COLUMN: Routine Configuration Summary & Audio Triggers (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Wind-down Timing Summary Card */}
            <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-5 glow-subtle">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Routine Schedule Calculation</span>
                <span className="text-xs font-mono text-emerald-400">Live Active</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 font-medium block mb-1">Target Bedtime</label>
                  <input
                    type="time"
                    value={targetBedtime}
                    onChange={(e) => setTargetBedtime(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 focus:border-indigo-500/60 rounded-xl p-3 text-sm font-bold text-indigo-300 font-mono focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Total Wind-Down</div>
                    <div className="text-lg font-black text-white mt-0.5">{totalDurationMins} mins</div>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-white/5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Wind-Down Start</div>
                    <div className="text-lg font-black text-indigo-400 mt-0.5">{getCalculatedStartTime()}</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-indigo-950/40 border border-indigo-500/20 rounded-2xl text-xs text-slate-300 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Alarm cue will trigger at <strong>{getCalculatedStartTime()}</strong> to initiate your step sequence.</span>
              </div>
            </div>

            {/* Environmental & Audio Presets */}
            <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 shadow-xl backdrop-blur-xl space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-sky-400" />
                <span>Ambient Soundscape Preset</span>
              </h4>

              <div className="grid grid-cols-2 gap-2">
                {['Pink Noise', 'Rainfall', 'Delta Waves', 'Deep Forest'].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAudioPreset(preset)}
                    className={`p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      audioPreset === preset
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 font-semibold'
                        : 'bg-slate-950/80 text-slate-400 hover:text-white border-white/5'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Selected Audio Stream:</span>
                <span className="font-mono text-indigo-300 font-semibold">{audioPreset}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
