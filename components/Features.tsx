
import React from 'react';

export const Features: React.FC = () => {
  const cards = [
    {
      icon: 'engineering',
      title: 'Real AI Outcomes',
      desc: "Stop experimenting. We co-create functional AI prototypes that automate your core workflows and deliver immediate, measurable ROI.",
      borderColor: 'hover:border-teal',
      iconColor: 'text-navy-800 dark:text-teal'
    },
    {
      icon: 'price_check',
      title: 'Funding and Grants',
      desc: 'Optimize your investment. Our experts navigate Singapore’s grant landscape to minimize your costs and accelerate digital growth.',
      borderColor: 'hover:border-red',
      iconColor: 'text-red'
    },
    {
      icon: 'school',
      title: 'Expert resource',
      desc: 'Tap into the combined expertise of NTU, Transfong, and our global partners to access proven strategies and reliable AI technology.',
      borderColor: 'hover:border-purple',
      iconColor: 'text-purple'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden transition-colors">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-navy-100 dark:bg-navy-800/20 rounded-full blur-3xl -ml-32"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-navy-900 dark:text-white mb-6">
            Why Us<span className="text-red">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
            We deliver transformation in action. We don’t just provide training—we partner with you to co-create your digital future.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-navy-700 ${card.borderColor} transition-all duration-300 flex flex-col h-full hover:shadow-xl dark:hover:bg-navy-900/40`}
            >
              <div className="w-16 h-16 bg-white dark:bg-navy-800 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className={`material-symbols-outlined text-4xl ${card.iconColor}`}>{card.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed flex-grow font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
