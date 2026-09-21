import { Navbar } from './components/Navbar';
import { DashboardOverview } from './components/DashboardOverview';
import { RoutineBuilder } from './components/RoutineBuilder';
import { SleepAnalytics } from './components/SleepAnalytics';
import { SleepChallenge } from './components/SleepChallenge';
import { Problem } from './components/Problem';
import { Concept } from './components/Concept';
import { Hardware } from './components/Hardware';
import { BusinessModel } from './components/BusinessModel';
import { Vision } from './components/Vision';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sleep-navy text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      <main>
        {/* MAIN PRODUCT PROTOTYPE DASHBOARD */}
        <div id="dashboard-overview" className="scroll-mt-20">
          <DashboardOverview
            onNavigateToRoutine={() => scrollTo('routine')}
            onNavigateToAnalytics={() => scrollTo('dashboard')}
            onNavigateToChallenge={() => scrollTo('challenge')}
          />
        </div>

        {/* 3 GENUINELY INTERACTIVE PRODUCT DEMOS */}
        <RoutineBuilder />
        <SleepAnalytics />
        <SleepChallenge />

        {/* BRAND & COMPETITION STRATEGY DRAWER */}
        <div className="border-t border-white/10 pt-16 bg-[#04060f]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-900 border border-white/10 px-4 py-1.5 rounded-full">
              Business Strategy & Concept Reference
            </span>
          </div>

          <Problem />
          <Concept />
          <Hardware />
          <BusinessModel />
          <Vision />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
