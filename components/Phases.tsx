
import React from 'react';

export const Phases: React.FC = () => {
  const phases = [
    {
      num: '01',
      phaseLabel: 'Phase 1',
      title: 'Foundation and Strategy',
      accent: 'teal',
      bgColor: 'bg-white dark:bg-background-dark',
      textColor: 'text-navy-900 dark:text-white',
      descColor: 'text-slate-600 dark:text-slate-400',
      pointColor: 'text-slate-600 dark:text-slate-300',
      icon: 'architecture',
      mainDesc: 'Objective: Get your business ready for AI and make sure your team is on board.',
      points: [
        { label: 'Tech Check', text: 'We review your current systems and data to see what’s ready. Then, we find the specific daily tasks where an AI agent can save you the most time and money.' },
        { label: 'Money & Funding', text: 'We help you navigate Singapore’s government grants (or private money) to offset the costs of the transformation and drive your business growth.' },
        { label: 'People & Management', text: 'We help your leadership team and staff get comfortable with AI. We focus on building a culture where people and AI agents work well together.' }
      ]
    },
    {
      num: '02',
      phaseLabel: 'Phase 2',
      title: 'Co-Development and Prototyping',
      accent: 'purple',
      bgColor: 'bg-navy-900',
      textColor: 'text-white',
      descColor: 'text-navy-100',
      pointColor: 'text-navy-200',
      icon: 'psychology_alt',
      mainDesc: 'Objective: Work together under expert mentorship to build a Minimum Viable Product (MVP) for Proof of Value (POV).',
      points: [
        { label: 'Strategy & Path', text: 'We work with you to decide whether to co-develop a custom AI agent from scratch or co-customize an existing AI employee.' },
        { label: 'Hands-on Build', text: 'Under our mentorship, we help you set up your AI agent using your business data. This ensures your team learns how it works.' },
        { label: 'Value Testing', text: 'We work together to test the AI agent in a safe environment. We look for real proof that the solution saves time and cuts costs.' }
      ]
    },
    {
      num: '03',
      phaseLabel: 'Phase 3',
      title: 'Production and Scaling Up',
      accent: 'red',
      bgColor: 'bg-slate-50 dark:bg-navy-900/30',
      textColor: 'text-navy-900 dark:text-white',
      descColor: 'text-slate-600 dark:text-slate-400',
      pointColor: 'text-slate-600 dark:text-slate-300',
      icon: 'rocket_launch',
      mainDesc: 'Objective: Turn your tested AI agent into a professional, secure AI employee used across the company.',
      points: [
        { label: 'Setup & Workflow', text: 'We optimize your human staff and integrate it into your management workflows and current IT systems.' },
        { label: 'Safety & Rules', text: 'We set up clear rules for how the AI employee works and where your human staff needs to check things.' },
        { label: 'Long-term Support', text: 'We help you navigate grant options to support your growth. We also provide a simple “Token” system for ongoing technical support.' }
      ]
    }
  ];

  return (
    <div className="relative">
      {phases.map((p, idx) => (
        <section 
          key={idx} 
          className={`py-24 lg:py-32 ${p.bgColor} relative overflow-hidden transition-colors duration-500`}
        >
          {/* Section Decor */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${p.accent}/20 to-transparent`}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              
              {/* Left Column: Phase Identifier */}
              <div className="lg:sticky lg:top-40 space-y-6">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${p.accent}/10 border border-${p.accent}/20 text-${p.accent} text-[10px] font-bold uppercase tracking-widest mb-4`}>
                  {p.phaseLabel}
                </div>
                
                <div className="relative">
                  <span className={`text-9xl font-display font-black text-${p.accent}/10 absolute -left-4 -top-12 select-none`}>
                    {p.num}
                  </span>
                  <h2 className={`text-4xl lg:text-5xl font-display font-bold ${p.textColor} relative z-10 leading-tight`}>
                    {p.title}<span className={`text-${p.accent}`}>.</span>
                  </h2>
                </div>
                
                <p className={`${p.descColor} text-xl leading-relaxed font-light`}>
                  {p.mainDesc}
                </p>
                
                <div className={`w-20 h-20 rounded-3xl bg-${p.accent}/10 flex items-center justify-center text-${p.accent}`}>
                  <span className="material-symbols-outlined text-5xl">{p.icon}</span>
                </div>
              </div>

              {/* Right Column: Key Points */}
              <div className="space-y-8">
                {p.points.map((pt, pIdx) => (
                  <div 
                    key={pIdx} 
                    className={`group p-8 lg:p-10 rounded-[2.5rem] ${idx === 1 ? 'bg-white/5 border-white/10' : 'bg-white dark:bg-navy-800 shadow-sm border-slate-100 dark:border-navy-700'} border transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <div className="flex gap-6">
                      <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-${p.accent}/10 flex items-center justify-center text-${p.accent}`}>
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold mb-3 ${p.textColor}`}>{pt.label}</h4>
                        <p className={`${p.pointColor} text-lg leading-relaxed font-light`}>
                          {pt.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Connective Visual for Scroll */}
          {idx < phases.length - 1 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
              <div className={`w-12 h-12 rounded-full ${phases[idx+1].bgColor.split(' ')[0]} border-4 border-white dark:border-navy-900 shadow-lg flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-${p.accent} animate-bounce`}>expand_more</span>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
