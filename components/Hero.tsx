
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-background-dark transition-colors">
      {/* Background Blobs - matching the screenshot's soft large shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-slate-100 dark:bg-navy-800/20 rounded-full opacity-50 blur-[120px]"></div>
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-teal/10 dark:bg-teal/5 rounded-full opacity-60 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            {/* Pill matching the screenshot precisely */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white dark:bg-navy-800 border border-navy-100 dark:border-navy-600 text-navy-900 dark:text-teal text-xs font-black uppercase tracking-widest shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              POWERING SINGAPORE'S DIGITAL FUTURE
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-black text-navy-900 dark:text-white leading-[1.05] tracking-tight">
                Empowering <br />
                every business <br />
                with an <span className="text-teal">AI</span> <br />
                <span className="gradient-text bg-gradient-to-r from-teal to-purple inline-block">workforce</span>
                <span className="text-red">.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed pt-6 font-light">
                Transfong helps companies learn, build, and deploy secure, scalable AI workforces—transforming technology into practical growth.
              </p>
            </div>
          </div>

          {/* Image container matching the screenshot's 'double-frame' effect - Padding reduced to make image bigger */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-[5rem] overflow-hidden bg-slate-50 dark:bg-navy-900 flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000 p-4 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-100/50 to-white/50 dark:from-navy-800 dark:to-background-dark pointer-events-none"></div>

            <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 via-transparent to-navy-900/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
