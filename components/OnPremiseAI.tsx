
import React from 'react';

export const OnPremiseAI: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal/20 to-purple/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <img
                                src="/images/on-premise-ai.png"
                                alt="AiQuire On-Premise AI Device"
                                className="relative rounded-[2rem] shadow-2xl w-full border border-slate-200 dark:border-navy-700 hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-navy-900/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                                <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Enterprise Grade</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-black uppercase tracking-widest mb-6">
                            Hardware & Software Excellence
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-display font-bold text-navy-900 dark:text-white mb-8 leading-tight">
                            On-Premise <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-600 dark:from-white dark:to-slate-400">AI Employee</span><span className="text-red">.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl leading-relaxed mb-10 font-light">
                            Bring the power of enterprise-grade AI directly into your secure infrastructure. Our compact, high-performance hardware solutions are pre-configured with industry-leading AI capabilities, ensuring total data sovereignty and zero-latency performance for your specific business workflows.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                            {[
                                { icon: 'lock', title: 'Total Data Sovereignty' },
                                { icon: 'speed', title: 'Zero-Latency Performance' },
                                { icon: 'settings_suggest', title: 'Ready-to-Deploy' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center lg:items-start xl:items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-navy-800/50 transition-colors group text-center lg:text-left xl:text-center">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-navy-800 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-teal">{item.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-navy-900 dark:text-white text-sm uppercase tracking-wider">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
