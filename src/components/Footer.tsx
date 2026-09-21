import React from 'react';
import { Moon } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#04060f] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Moon className="w-4 h-4 fill-indigo-400/20 text-indigo-400" />
              </div>
              <span>
                SLEEP <span className="text-indigo-400">OS</span>
              </span>
            </a>
            
            <p className="text-sm text-indigo-300 font-medium">
              Build better nights.
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Sleep OS is a personalised sleep-behaviour platform designed to help people build consistent bedtime habits through routines, guided content, behavioural tracking and personalisation.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
              <button
                onClick={() => scrollToSection('concept')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('hardware')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Hardware
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Vision
              </button>
            </div>

            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} SLEEP OS. All rights reserved. Business Plan Competition Prototype.
            </div>
          </div>

        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 text-center max-w-3xl mx-auto">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <strong className="text-slate-400 font-semibold">Disclaimer:</strong> Sleep OS is a personalised sleep-behaviour web application platform designed for habit tracking and general wellness. Sleep OS is NOT a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition or sleep disorder.
          </p>
        </div>
      </div>
    </footer>
  );
};
