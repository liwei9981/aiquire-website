
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative bg-teal overflow-hidden">
      <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-navy-900/20 rounded-full blur-3xl"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">
          Ready to transform your workforce<span className="text-red">.</span>
        </h2>
        <p className="text-teal-50 text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Join the leading Singaporean SMEs already leveraging AI to drive growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-navy-900 hover:bg-navy-950 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1">
            Schedule Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal px-10 py-5 rounded-full text-lg font-bold transition-all">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};
