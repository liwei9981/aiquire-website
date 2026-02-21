
import React from 'react';

export const ProgramOverview: React.FC = () => {
  return (
    <section className="pt-40 pb-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/10 rounded-full blur-[120px] -mr-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple/5 rounded-full blur-[100px] -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/30 text-teal text-[10px] font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top duration-700">
          NTU Partnership Workshop
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-7xl font-display font-extrabold mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-700">
            SME AI Workforce <br />
            <span className="text-teal">Transformation</span> Workshop<span className="text-red">.</span>
          </h1>

          <p className="text-xl lg:text-2xl text-navy-100 font-light leading-relaxed mb-10 opacity-90 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Learn, Co-create and Deploy: A hands-on path to success offered by Transforce in partnership with NTU to help you co-create your own digital workforce.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-teal">school</span>
              <span className="text-sm font-bold">Expert Mentorship</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-purple">psychology</span>
              <span className="text-sm font-bold">Custom AI Prototypes</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-red">rocket_launch</span>
              <span className="text-sm font-bold">Operational Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
