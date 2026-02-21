
import React from 'react';

export const Phases: React.FC = () => {
  const phases = [
    {
      num: '01',
      phaseLabel: 'Module 1 - 3 Hours',
      title: 'The AI Explorer',
      accent: 'teal',
      bgColor: 'bg-white dark:bg-background-dark',
      textColor: 'text-navy-900 dark:text-white',
      descColor: 'text-slate-600 dark:text-slate-400',
      pointColor: 'text-slate-600 dark:text-slate-300',
      icon: 'architecture',
      mainDesc: 'Outcome: Frontseat Observing. Focus on Strategic Awareness & Tool Mastery.',
      points: [
        { label: 'Governance & Security Mastery', text: 'Establish a "privacy-first" foundation by understanding data ownership and security protocols required for safe corporate AI adoption.' },
        { label: 'Frontier Tool Proficiency', text: 'Gain a strategic edge by mastering the unique strengths of Google, Anthropic, and OpenAI, including "Power User" features like Gems and Custom GPTs.' },
        { label: 'Competitive Intelligence Logic', text: 'Learn to apply frontier models to real-world business cases, such as automated policy checks and deep competitor analysis.' }
      ]
    },
    {
      num: '02',
      phaseLabel: 'Module 2 - 3 Hours',
      title: 'The Logic Builder',
      accent: 'purple',
      bgColor: 'bg-navy-900',
      textColor: 'text-white',
      descColor: 'text-navy-100',
      pointColor: 'text-navy-200',
      icon: 'psychology_alt',
      mainDesc: 'Outcome: Prototype Confidence. Focus on Functional Prototyping & Automation.',
      points: [
        { label: 'Rapid "Vibe App" Creation', text: 'Transform from a prompter to a builder by using Claude Artifacts to create functional tools like PDF-to-Web converters and data dashboards.' },
        { label: 'Agentic Workflow Design', text: 'Experience the shift to multi-step AI logic, building "agentic" flows that handle complex, iterative business tasks without manual intervention.' },
        { label: 'Workflow Transformation', text: 'Identify and prototype high-impact AI opportunities that turn unstructured, "messy" data into instant, actionable business insights.' }
      ]
    },
    {
      num: '03',
      phaseLabel: 'Module 3 - 6 Hours',
      title: 'The Agentic Orchestrator',
      accent: 'red',
      bgColor: 'bg-slate-50 dark:bg-navy-900/30',
      textColor: 'text-navy-900 dark:text-white',
      descColor: 'text-slate-600 dark:text-slate-400',
      pointColor: 'text-slate-600 dark:text-slate-300',
      icon: 'rocket_launch',
      mainDesc: 'Outcome: MVP / POC Capability. Focus on Pilot Deployment & Integration.',
      points: [
        { label: 'Functional Pilot Agent Construction', text: 'Validate discovered opportunities by building a functional pilot agent using Google Antigravity, Claude Code, or Codex App on local PDPA-compliant hardware (e.g., Mac Mini).' },
        { label: 'Enterprise Ecosystem Exploration', text: 'Explore robust integration solutions including Cloud Hosting, LLM APIs, and external data sources such as WhatsApp via 3rd party gateways.' },
        { label: 'Scalability & Operational Readiness', text: 'Achieve controlled usage for immediate productivity improvement while preparing the groundwork for professional AI teams and full-scale deployment.' }
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
                <div className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-${p.accent}/10 border border-${p.accent}/20 text-${p.accent} text-xs font-black uppercase tracking-widest mb-6 shadow-sm`}>
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
              <div className={`w-12 h-12 rounded-full ${phases[idx + 1].bgColor.split(' ')[0]} border-4 border-white dark:border-navy-900 shadow-lg flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-${p.accent} animate-bounce`}>expand_more</span>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
