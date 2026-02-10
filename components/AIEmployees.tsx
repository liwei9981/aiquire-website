
import React from 'react';

export const AIEmployees: React.FC = () => {
  const agents = [
    {
      name: "Max",
      image: "/images/max.png",
      role: "Marketing and Sales",
      desc: "Your dedicated lead generation and content powerhouse. Max analyzes market trends and creates high-converting campaigns across digital channels to drive consistent growth.",
      skills: ["Lead Gen", "Content Strategy", "Social Media", "Sales Funnels"],
      icon: "trending_up",
      accent: "purple"
    },
    {
      name: "Layla",
      image: "/images/layla.png",
      role: "Legal Assistant",
      desc: "Layla reviews NDAs, vendor contracts, and employment agreements. She identifies hidden risks and summarizes complex legal jargon to ensure your SME remains fully protected.",
      skills: ["Contract Review", "Risk Assessment", "Legal Research", "Due Diligence"],
      icon: "description",
      accent: "red"
    },
    {
      name: "Oliver",
      image: "/images/oliver.png",
      role: "Operation Supervisor",
      desc: "Your strategic business partner that consolidates multi-departmental data into unified reports. Oliver provides the CEO with a complete daily overview and deep insights to optimize company-wide performance.",
      skills: ["BI Reporting", "Data Consolidation", "KPI Tracking", "Strategic Insights"],
      icon: "visibility",
      accent: "teal"
    },
    {
      name: "Felix",
      image: "/images/felix.png",
      role: "Accounting Assistant",
      desc: "Automates invoice processing and real-time cash flow forecasting. Felix identifies cost-saving opportunities and ensures your financial records are always audit-ready.",
      skills: ["Cash Flow Analysis", "Invoicing", "Tax Prep", "Audit Trails"],
      icon: "account_balance_wallet",
      accent: "teal"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6">
            Meet Your Digital Workforce<span className="text-red">.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-navy-100 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Intelligent, scalable, and ready to deploy. Custom-trained AI employees designed to integrate seamlessly into your SME's core operations.
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal text-xs font-bold uppercase tracking-widest">Deploy in 14 Days</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple text-xs font-bold uppercase tracking-widest">SME Grant Eligible</span>
          </div>
        </div>
      </section>

      {/* Agents Collection Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:max-w-5xl lg:mx-auto">
            {agents.map((agent, i) => (
              <div key={i} className="group relative flex flex-col bg-white dark:bg-navy-900/40 rounded-[2.5rem] border border-slate-100 dark:border-navy-800 p-8 hover:border-teal transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                {/* Visual Accent */}
                <div className={`absolute -right-4 -top-4 w-32 h-32 bg-${agent.accent}/5 rounded-full blur-2xl group-hover:bg-${agent.accent}/10 transition-colors`}></div>

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="relative">
                    <div className={`absolute -inset-1 bg-gradient-to-tr from-${agent.accent} to-white opacity-40 rounded-full blur-sm group-hover:opacity-100 transition-opacity`}></div>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-20 h-20 rounded-full object-cover relative z-10 border-2 border-white dark:border-navy-800 transition-all shadow-lg"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-navy-900 rounded-full z-20"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-navy-900 dark:text-white leading-tight">
                      {agent.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-teal font-bold text-[10px] uppercase tracking-widest mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span>
                      Digital Agent
                    </div>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-2 mb-4 text-${agent.accent}`}>
                  <span className="material-symbols-outlined text-xl">{agent.icon}</span>
                  <span className="text-sm font-bold uppercase tracking-wider">{agent.role}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                  {agent.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {agent.skills.map((skill, si) => (
                      <span key={si} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-50 dark:bg-navy-800 border border-slate-100 dark:border-navy-700 text-slate-500 dark:text-slate-400">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-4 rounded-xl border border-navy-900 dark:border-white/20 text-navy-900 dark:text-white font-bold hover:bg-navy-900 hover:text-white dark:hover:bg-teal dark:hover:border-teal transition-all flex items-center justify-center gap-2 group/btn relative z-10 shadow-sm">
                    View Technical Profile
                    <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">east</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-[3rem] p-12 lg:p-20 text-white relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 rounded-r-[3rem] hidden lg:block"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-display font-bold mb-6">How Your AI Employee Works<span className="text-red">.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-teal flex-shrink-0 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Knowledge Onboarding</h4>
                    <p className="text-navy-100 opacity-80 font-light">We train the agent on your specific SOPs, documents, and business data in a secure, private environment.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-purple flex-shrink-0 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Workflow Integration</h4>
                    <p className="text-navy-100 opacity-80 font-light">The agent is integrated into your existing tools like Slack, WhatsApp, or your CRM.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
                    <p className="text-navy-100 opacity-80 font-light">As the agent handles tasks, it learns from your feedback to become more efficient and accurate over time.</p>
                  </div>
                </div>
              </div>
              <button className="mt-12 bg-teal hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-glow">
                Request a Custom Build
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs or SME Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-16">The SME Advantage<span className="text-red">.</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-4xl font-black text-teal">0%</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Employee Fatigue</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-4xl font-black text-purple">10x</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Task Speed</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-4xl font-black text-red">60%</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">OpEx Reduction</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-4xl font-black text-navy-800 dark:text-teal">24/7</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Service Uptime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
