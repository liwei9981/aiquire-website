
import React from 'react';
import { AiQuireLogo } from './Header.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-navy-900/50 pt-20 pb-10 border-t border-slate-200 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <AiQuireLogo isDark={document.documentElement.classList.contains('dark')} className="h-12" />
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg leading-relaxed">
              Empowering Singaporean SMEs with cutting-edge AI workforce solutions through strategic partnership with NTU.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-navy-800 flex items-center justify-center text-navy-800 dark:text-slate-300 hover:bg-teal hover:text-white dark:hover:bg-teal transition-all">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-navy-800 flex items-center justify-center text-navy-800 dark:text-slate-300 hover:bg-teal hover:text-white dark:hover:bg-teal transition-all">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-navy-900 dark:text-white text-lg mb-6">AI Workshop</h4>
            <ul className="space-y-4 text-base text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-teal transition-colors" href="#">Overview</a></li>
              <li><a className="hover:text-teal transition-colors" href="#">Success Stories</a></li>
              <li><a className="hover:text-teal transition-colors" href="#">Grant Eligibility</a></li>
              <li><a className="hover:text-teal transition-colors" href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-navy-900 dark:text-white text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-base text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-teal transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-teal transition-colors" href="#">NTU Partnership Workshop</a></li>
              <li><a className="hover:text-teal transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-teal transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-navy-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">© 2024 AiQuire. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a className="hover:text-navy-800 dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-navy-800 dark:hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
