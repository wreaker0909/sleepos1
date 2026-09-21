import React, { useState, useEffect } from 'react';
import { Moon, Menu, X, ArrowRight, LayoutDashboard, Sliders, Trophy, LineChart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060814]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/80 transition-colors">
              <Moon className="w-4 h-4 fill-indigo-400/20 text-indigo-400" />
            </div>
            <span>
              SLEEP <span className="text-indigo-400">OS</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('dashboard-overview')}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => scrollToSection('routine')}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              <span>Routine Builder</span>
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LineChart className="w-3.5 h-3.5 text-sky-400" />
              <span>Sleep Analytics</span>
            </button>
            <button
              onClick={() => scrollToSection('challenge')}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Trophy className="w-3.5 h-3.5 text-purple-400" />
              <span>Challenge</span>
            </button>
            <button
              onClick={() => scrollToSection('concept')}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Concept & Vision
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              PROTOTYPE ACTIVE
            </span>
            <button
              onClick={() => scrollToSection('routine')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/30 shadow-sm transition-all cursor-pointer"
            >
              <span>Build Routine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d1d]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4">
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('dashboard-overview')}
              className="text-left text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-white/5"
            >
              Dashboard Overview
            </button>
            <button
              onClick={() => scrollToSection('routine')}
              className="text-left text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-white/5"
            >
              Routine Builder
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="text-left text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-white/5"
            >
              Sleep Analytics
            </button>
            <button
              onClick={() => scrollToSection('challenge')}
              className="text-left text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-white/5"
            >
              14-Day Challenge
            </button>
            <button
              onClick={() => scrollToSection('concept')}
              className="text-left text-sm font-medium text-slate-200 hover:text-indigo-400 py-2 border-b border-white/5"
            >
              Concept & Vision
            </button>
          </nav>
          <button
            onClick={() => scrollToSection('routine')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md"
          >
            <span>Build Routine</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
