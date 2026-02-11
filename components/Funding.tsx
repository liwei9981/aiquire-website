
import React from 'react';

export const Funding: React.FC = () => {
  const esgGrants = [
    {
      title: "Productivity Solutions Grant (PSG)",
      support: "Up to 50% (Max S$30,000)",
      eligibility: "Local SMEs (30% equity, <S$100M turnover)",
      details: "Covers pre-approved IT solutions and equipment for automation. Focuses on immediate productivity improvements.",
      icon: "payments",
      color: "teal"
    },
    {
      title: "Enterprise Development Grant (EDG)",
      support: "Up to 50% (Sustainability 70%)",
      eligibility: "Registered Singapore companies (30% equity)",
      details: "Comprehensive support for innovation, automation, and process redesign. Includes manpower and consultancy costs.",
      icon: "rocket_launch",
      color: "purple"
    },
    {
      title: "SkillsFuture Enterprise Credit (SFEC)",
      support: "S$10,000 one-off credit",
      eligibility: "Employers with 3+ local Citizen/PR staff",
      details: "Covers up to 90% of out-of-pocket expenses for AI/digital upskilling and transformation workshops.",
      icon: "school",
      color: "red"
    }
  ];

  const imdaGrants = [
    {
      name: "Advanced Digital Solutions (ADS)",
      focus: "Pilot Adoption",
      desc: "Grants for early adopters to test advanced/integrated AI, sustainability, and e-commerce solutions."
    },
    {
      name: "Digital Enterprise Blueprint (DEB)",
      focus: "SME Competitiveness",
      desc: "Framework launched May 2024 focusing on expertise, tech access, and talent development."
    },
    {
      name: "Digital Leaders Workshop",
      focus: "Business Model Transformation",
      desc: "2-year pilot equipping progressive companies with talent and capabilities to lead their sectors."
    },
    {
      name: "5G Innovation Workshop",
      focus: "Infrastructure Cluster",
      desc: "Support for 5G use cases in Maritime, Industry 4.0, Urban Mobility, and Smart Estates."
    }
  ];

  const idps = [
    "Accountancy", "Early Childhood", "Environmental Services", "Food Manufacturing", "Food Services", "Retail", "Logistics", "Construction"
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/5 rounded-full blur-[120px] -mr-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/30 text-teal text-[10px] font-bold uppercase tracking-widest mb-6">
            Government Support & AI Grants
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6">
            AI Grants & Funding<span className="text-red">.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-navy-100 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Maximize your ROI by leveraging Singapore's robust grant ecosystem. We help you navigate ESG and IMDA funding for AI and Digital Transformation.
          </p>
        </div>
      </section>

      {/* ESG Primary Grants */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-200 dark:bg-navy-800 flex-grow"></div>
            <h2 className="text-3xl font-display font-bold text-navy-900 dark:text-white shrink-0">Primary ESG AI Grants</h2>
            <div className="h-px bg-slate-200 dark:bg-navy-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {esgGrants.map((grant, i) => (
              <div key={i} className="bg-white dark:bg-navy-900/50 rounded-[2.5rem] p-8 border border-slate-100 dark:border-navy-800 shadow-sm hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 rounded-2xl bg-${grant.color}/10 flex items-center justify-center text-${grant.color} mb-6`}>
                  <span className="material-symbols-outlined text-3xl">{grant.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900 dark:text-white">{grant.title}</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-xl">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Support Level</div>
                    <div className="text-teal font-bold">{grant.support}</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-800 p-4 rounded-xl">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Eligibility</div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-300">{grant.eligibility}</div>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {grant.details}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-navy-900 p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal/10 rounded-full blur-2xl group-hover:bg-teal/20 transition-all"></div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-teal">monetization_on</span>
                SEEDS Capital
              </h4>
              <p className="text-navy-100 opacity-80 text-sm leading-relaxed mb-6">Co-investment up to S$12M for deep tech startups including AI and Quantum computing. Partnering with VCs to catalyze growth.</p>
              <button className="text-teal font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span className="material-symbols-outlined">east</span>
              </button>
            </div>
            <div className="bg-white dark:bg-navy-900/50 p-8 rounded-3xl border border-slate-100 dark:border-navy-800 flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">Enterprise Financing Scheme</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Combine grants with flexible financing to fund AI software, equipment, and digital infrastructure projects.</p>
              <div className="flex flex-wrap gap-2">
                {["Software Purchase", "Equipment", "Digital Infrastructure"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-navy-800 rounded-full text-[10px] font-bold text-slate-500 uppercase">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMDA Section */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="sticky top-32">
              <h2 className="text-4xl font-display font-bold text-navy-900 dark:text-white mb-6">IMDA Core Initiatives<span className="text-red">.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                The Info-communications Media Development Authority (IMDA) leads the way in ensuring Singaporean SMEs are digitally progressive.
              </p>
              <div className="p-6 bg-teal/5 border border-teal/20 rounded-3xl">
                <div className="flex items-center gap-3 mb-2 text-teal">
                  <span className="material-symbols-outlined">lightbulb</span>
                  <span className="font-bold uppercase text-xs tracking-widest">Key Feature</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Solutions from Advanced Digital Solutions (ADS) can transition to PSG after successful piloting.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {imdaGrants.map((grant, i) => (
                <div key={i} className="p-8 bg-slate-50 dark:bg-navy-900/50 rounded-3xl border border-slate-100 dark:border-navy-800 hover:border-teal/50 transition-colors">
                  <div className="text-teal font-bold text-xs uppercase tracking-widest mb-2">{grant.focus}</div>
                  <h4 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">{grant.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{grant.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IDP Industry Grid */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-navy-900 dark:text-white mb-4">Industry Digital Plans (IDPs)<span className="text-red">.</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Specific roadmaps, pre-approved solutions, and grant support for unique sector needs.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {idps.map((idp, i) => (
              <div key={i} className="bg-white dark:bg-navy-900/80 p-6 rounded-2xl text-center border border-slate-100 dark:border-navy-800 group hover:bg-navy-900 hover:text-white transition-all cursor-default">
                <span className="text-sm font-bold tracking-tight">{idp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Training */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple to-navy-800 p-12 rounded-[3rem] text-white">
              <h3 className="text-3xl font-display font-bold mb-8">Digital Skills & Training Support</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined">cast_for_education</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Company-Led Training (CLT)</h4>
                    <p className="text-navy-100 opacity-80 text-sm">For fresh and mid-career professionals to gain tech competencies for in-demand jobs.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined">swap_horiz</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Career Conversion (CCP)</h4>
                    <p className="text-navy-100 opacity-80 text-sm">Supporting PMETs switching into emerging tech sectors via immersive skills conversion.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal p-12 rounded-[3rem] text-white flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/20 text-[10px] font-bold uppercase tracking-widest w-fit mb-6">
                Most Popular SME Tool
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">CTO-as-a-Service</h3>
              <p className="text-teal-50 text-lg mb-8 leading-relaxed">
                Identify digitalization needs, access market-proven solutions, and engage expert digital consultants—all without a full-time CTO investment.
              </p>
              <ul className="space-y-3 mb-8">
                {["Digitalization Needs ID", "Market-Proven Solutions", "Expert Advisory", "Project Management"].map((li, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                    <span className="material-symbols-outlined text-navy-900">check_circle</span>
                    {li}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-navy-900 text-white py-4 rounded-2xl font-bold hover:bg-navy-950 transition-colors">
                Access Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Summary Card */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-navy-900/20 rounded-[3rem] p-12 border border-slate-100 dark:border-navy-800 text-center">
            <h2 className="text-2xl font-bold mb-8 text-navy-900 dark:text-white">Better Data Driven Business (BDDB)</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12">
              Free tools and guidance helping SMEs leverage data analytics while maintaining robust data protection. Competitive edge through data efficiency.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-teal text-white px-8 py-3 rounded-full font-bold shadow-glow hover:opacity-90 transition-all">Check Eligibility</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
