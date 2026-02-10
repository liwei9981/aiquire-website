
import React from 'react';

export const FrontFeatures: React.FC = () => {
  const cards = [
    {
      icon: 'rocket_launch',
      title: 'Practical Results',
      desc: "Skip the theory. We co-create and deploy functional AI employees directly into your operations for immediate, measurable impact.",
      borderColor: 'hover:border-teal',
      iconColor: 'text-teal'
    },
    {
      icon: 'account_balance',
      title: 'Strategic Funding',
      desc: 'Scale with confidence. We bridge the gap to grants and private investment to ensure your transformation is sustainably funded.',
      borderColor: 'hover:border-purple',
      iconColor: 'text-purple'
    },
    {
      icon: 'security',
      title: 'Enterprise Security',
      desc: 'Maintain total sovereignty. Our on-premise solutions meet strict enterprise standards, ensuring complete privacy and control.',
      borderColor: 'hover:border-red',
      iconColor: 'text-red'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden transition-colors">
      <div className="absolute right-0 top-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -mr-32"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-navy-900 dark:text-white mb-6">
            Why Us<span className="text-red">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl lg:text-2xl font-display font-semibold">
            We believe in AI Transformation in Action<span className="text-red">.</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-navy-700 ${card.borderColor} transition-all duration-300 flex flex-col h-full hover:shadow-2xl dark:hover:bg-navy-900/40`}
            >
              <div className="w-16 h-16 bg-white dark:bg-navy-800 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
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
