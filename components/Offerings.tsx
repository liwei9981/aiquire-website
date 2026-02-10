
import React from 'react';

export const Offerings: React.FC = () => {
  const items = [
    {
      num: '01',
      label: 'Learn',
      title: 'Strategy & Readiness',
      accent: 'teal',
      desc: 'Through AI transformation sessions, specialized courses, and joint workshops with our partners, we map AI to your specific business goals while assessing tech readiness to identify high-value workflows.'
    },
    {
      num: '02',
      label: 'Build',
      title: 'Co-Creation & Prototyping',
      accent: 'purple',
      desc: 'We work together to build a functional Minimum Viable Product (MVP) tailored to your unique business data and workflows. Our approach ensures your team is fully aligned as we develop AI employees that deliver immediate Proof of Value (POV).'
    },
    {
      num: '03',
      label: 'Deploy',
      title: 'Customization and Security',
      accent: 'red',
      desc: 'We launch secure, on-premise enterprise-grade AI solutions that meet stringent security standards. Our focus is on intuitive usability and seamless integration into your management workflows to ensure daily efficiency and lasting value.'
    }
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Our Offerings<span className="text-red">.</span>
          </h2>
          <p className="text-navy-200 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive roadmap to your enterprise AI future: <br className="hidden md:block" />
            <span className="text-teal font-bold italic">Learn</span>, <span className="text-purple font-bold italic">Build</span>, and <span className="text-red font-bold italic">Deploy</span>.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="relative group flex">
              <div className={`flex-grow h-full bg-navy-800/40 backdrop-blur-md p-10 lg:p-12 rounded-[3.5rem] border border-navy-700/50 hover:border-${item.accent} transition-all duration-500 shadow-2xl flex flex-col items-start text-left hover:-translate-y-2`}>
                
                {/* Obvious Label Badge */}
                <div className="flex items-center justify-between w-full mb-10">
                  <div className={`px-6 py-2.5 rounded-full bg-${item.accent} text-white text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-${item.accent}/20`}>
                    {item.label}
                  </div>
                  <div className={`text-5xl font-display font-black text-${item.accent}/20 select-none`}>
                    {item.num}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-navy-100/80 text-lg leading-relaxed font-light flex-grow mb-10">
                  {item.desc}
                </p>
                
                <div className="mt-auto w-full pt-8 border-t border-navy-700/50">
                  <button className={`flex items-center gap-3 text-${item.accent} font-black text-sm uppercase tracking-widest hover:gap-5 transition-all group-hover:translate-x-1`}>
                    Get Started <span className="material-symbols-outlined font-bold">arrow_forward</span>
                  </button>
                </div>

                {/* Decorative glow effect */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-${item.accent}/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
