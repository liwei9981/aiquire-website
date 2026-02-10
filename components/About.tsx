
import React from 'react';

export const About: React.FC = () => {
  const founders = [
    {
      name: "Dr. Li Wei",
      role: "Co-founder and Chairman",
      image: "/images/liwei.png", // Dr. Li Wei
      bio: "Dr. Li Wei is dedicated to fostering the cross-border growth of tech companies, a key focus at AiQuire. With nearly 20 years of experience in technology transfer and commercialization, including over a decade at Singapore's A*STAR, he is skilled in investment, incubation, IP management, and international collaboration. He holds a Ph.D. and Bachelor's in Microelectronics from Nanyang Technological University, and an MBA from INSEAD.",
      accent: "teal",
      linkedin: "https://www.linkedin.com/in/wei-li-77363526/"
    },
    {
      name: "Mr. Tyler Huang",
      role: "Co-founder and CEO",
      image: "/images/tyler.png", // Mr. Tyler Huang
      bio: "Tyler Huang has nearly 20 years of experience in high-tech enterprise and project management, including over 10 years at NXP Semiconductors. As a Lean Six Sigma certified project manager, he is well-versed in international technology collaboration. He holds dual Bachelor's degrees in Electronic Engineering and English from the University of Electronic Science and Technology of China, and a Master's in Technology Management from the National University of Singapore.",
      accent: "navy",
      linkedin: "https://www.linkedin.com/in/tylerhuangsg/"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-background-dark">
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/5 rounded-full blur-[100px] -mr-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight">
              About Us<span className="text-red">.</span>
            </h1>
            <p className="text-xl text-navy-100 font-light leading-relaxed">
              Leading the way in AI transformation for Singaporean SMEs with global research and industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section - Screenshot Style Integration */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {founders.map((founder, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 items-start animate-in slide-in-from-bottom duration-1000">
                {/* Photo Side - Circular as per screenshot */}
                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative mx-auto md:mx-0">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-100 dark:border-navy-800 shadow-xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-teal text-white p-2 rounded-full shadow-lg">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900 dark:text-white mb-1">
                      {founder.name}
                    </h2>
                    <h4 className="text-xl font-bold text-teal dark:text-teal/80">
                      {founder.role}
                    </h4>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {founder.bio}
                  </p>

                  <div className="pt-4 flex justify-center md:justify-start gap-4">
                    <button className="flex items-center gap-2 text-navy-800 dark:text-teal font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                      Contact <span className="material-symbols-outlined text-sm">mail</span>
                    </button>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-navy-800 dark:text-teal font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
                    >
                      LinkedIn <span className="material-symbols-outlined text-sm">link</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Commitment<span className="text-red">.</span></h2>
            <p className="text-slate-500">Excellence in every SME transformation journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'hub', title: "Ecosystem Focus", desc: "Connecting local SMEs to global innovation hubs in the Yangtze River Delta." },
              { icon: 'insights', title: "Result Driven", desc: "We don't just consult; we build working AI prototypes that drive ROI." },
              { icon: 'groups', title: "Partnership", desc: "Proudly collaborating with NTU and AiQuire and top-tier industrial leaders." }
            ].map((v, i) => (
              <div key={i} className="bg-white dark:bg-navy-900/40 p-10 rounded-[2.5rem] border border-slate-100 dark:border-navy-800 text-center hover:shadow-lg transition-all group">
                <span className="material-symbols-outlined text-5xl text-teal mb-6 group-hover:scale-110 transition-transform">{v.icon}</span>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-slate-500 dark:text-slate-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
