
import React, { useState } from 'react';

export const ImmersionTrip: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Wuxi IoT Ecosystem",
      location: "Wuxi",
      focus: "Ground Zero for IoT",
      details: "Arrival in Wuxi, China's only national-level IoT zone. Welcome briefing on the $56B IoT powerhouse and evening networking dinner with state officials."
    },
    {
      day: 2,
      title: "Warehouse Robotics & Humanoid Components",
      location: "Wuxi",
      focus: "Quicktron & Juxie",
      details: "Site visits to Quicktron (global leader in warehouse robotics) and Juxie Intelligent Drive to explore humanoid robot components and mass production facilities."
    },
    {
      day: 3,
      title: "Wuxi to Nanjing: Industrial Transition",
      location: "Wuxi → Nanjing",
      focus: "Smart Manufacturing",
      details: "Morning visits to Wuxi's 'Dark Factories'. Afternoon high-speed rail transition to Nanjing. Evening briefing on Nanjing's elite robotics cluster."
    },
    {
      day: 4,
      title: "AI Research & Dexterous Robotics",
      location: "Nanjing",
      focus: "NJU AI Lab & CasiaHand",
      details: "Deep dive at NJU AI Lab (led by Prof. Zhou Zhihua). Afternoon visit to CasiaHand to witness industrial-grade dexterous hands in action."
    },
    {
      day: 5,
      title: "Government Engagement & Wrap-up",
      location: "Nanjing",
      focus: "Market Entry Strategy",
      details: "Exclusive round-table with Nanjing government officials and Estun leadership. Strategic debrief on R&D partnerships and market entry for Singaporean SMEs."
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-background-dark">
      {/* Section 1: Hero (The Hook) */}
      <section className="pt-40 pb-24 bg-navy-900 text-white relative overflow-hidden text-center">
        {/* Decorative Background Main */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541873676947-9ec5983478a2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        {/* Wuxi Feature Image - Left Decorative Circle */}
        <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[35%] aspect-square max-w-[450px] hidden lg:block opacity-40 pointer-events-none z-0">
          <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white/10 relative shadow-[0_0_50px_rgba(0,177,176,0.2)]">
            <img
              src="/images/wuxi.jpg"
              className="w-full h-full object-cover"
              alt="Wuxi Landmark"
            />
            <div className="absolute inset-0 bg-navy-900/20"></div>
          </div>
        </div>

        {/* Nanjing Feature Image - Right Decorative Circle */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[35%] aspect-square max-w-[450px] hidden lg:block opacity-40 pointer-events-none z-0">
          <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white/10 relative shadow-[0_0_50px_rgba(103,121,189,0.2)]">
            <img
              src="/images/nanjing.png"
              className="w-full h-full object-cover"
              alt="Nanjing Landmark"
            />
            <div className="absolute inset-0 bg-navy-900/20"></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/80 to-navy-900 z-[1]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 border border-red/30 text-red text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse"></span>
            March 23 – 27, 2026
          </div>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-display font-extrabold mb-8 leading-tight drop-shadow-lg max-w-5xl mx-auto">
            Connect and Learn within China’s <br /><span className="text-teal">Innovation Ecosystem</span><span className="text-red">.</span>
          </h1>
          <p className="text-2xl text-navy-100 max-w-4xl mx-auto leading-relaxed font-light mb-12 opacity-90">
            An exclusive 5-day immersion into the heart of China’s AI, Robotics, and Advanced Manufacturing ecosystem in Wuxi & Nanjing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-teal hover:bg-teal-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-glow hover:-translate-y-1">
              Apply Now
            </button>
            <div className="flex flex-col items-center justify-center px-6 border-l border-white/20">
              <span className="text-teal text-2xl font-bold">Wuxi & Nanjing</span>
              <span className="text-xs uppercase tracking-widest opacity-60 font-semibold">Primary Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Value Proposition */}
      <section className="py-24 border-b border-slate-100 dark:border-navy-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center text-teal">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-2xl font-bold">Supply Chain Mastery</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Tap into China’s latest advancements in AI models and intelligent robotics at the source.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-purple/10 rounded-2xl flex items-center justify-center text-purple">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold">Beyond the Hype</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Gain real-world access to production facilities, R&D labs, and rising tech unicorns.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-red/10 rounded-2xl flex items-center justify-center text-red">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="text-2xl font-bold">Direct Networking</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Sit down with state officials, $100M+ funded founders, and enterprise leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Regional Focus */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy-900 dark:text-white mb-4">Strategic Hubs<span className="text-red">.</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Exploring the innovation powerhouses of the Yangtze River Delta.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-navy-900 rounded-[3rem] p-10 shadow-xl border border-slate-100 dark:border-navy-800 hover:border-teal transition-all group">
              <div className="h-64 rounded-2xl overflow-hidden mb-8 relative">
                <img src="/images/wuxi.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Wuxi Skyline" />
                <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest">Wuxi City</div>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">The IoT Capital</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">A $56B powerhouse and China’s only national-level IoT zone. Home to 3,000+ enterprises and the global "ground zero" for smart manufacturing.</p>
              <div className="flex items-center gap-2 text-teal font-bold text-sm uppercase tracking-widest">
                <span className="material-symbols-outlined">location_on</span>
                National IoT Zone
              </div>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-[3rem] p-10 shadow-xl border border-slate-100 dark:border-navy-800 hover:border-purple transition-all group">
              <div className="h-64 rounded-2xl overflow-hidden mb-8 relative">
                <img src="/images/nanjing.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Nanjing Landmark" />
                <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest">Nanjing City</div>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">The R&D Engine</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">A top-tier robotics cluster bridging elite academic research (Nanjing University) with industry leaders like Estun and CasiaHand.</p>
              <div className="flex items-center gap-2 text-purple font-bold text-sm uppercase tracking-widest">
                <span className="material-symbols-outlined">school</span>
                Elite Robotics Cluster
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Site Visits */}
      <section className="py-24 bg-white dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-navy-900 dark:text-white mb-4">Featured Site Visits<span className="text-red">.</span></h2>
              <p className="text-slate-500 text-lg">Direct access to the companies redefining the boundaries of intelligence and robotics.</p>
            </div>
            <div className="hidden lg:block">
              <span className="text-7xl font-display font-black text-slate-100 dark:text-navy-800/50">PROOF</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Quicktron", role: "Warehouse Robotics", desc: "Global leader with 30,000+ robots deployed in logistics hubs." },
              { name: "Juxie Drive", role: "Humanoid Components", desc: "Specialists in precision drives and mass production of robot limbs." },
              { name: "CasiaHand", role: "Dexterous Hands", desc: "Industrial-grade hands born from the Chinese Academy of Sciences." },
              { name: "NJU AI Lab", role: "Elite R&D", desc: "Led by Prof. Zhou Zhihua, partnering with Huawei, Intel, and ByteDance." }
            ].map((site, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-navy-800/40 border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-all">
                <h4 className="text-2xl font-bold mb-1 text-navy-900 dark:text-white">{site.name}</h4>
                <div className="text-teal text-sm font-bold uppercase tracking-tighter mb-4">{site.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{site.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline Itinerary */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">Journey Timeline<span className="text-red">.</span></h2>
            <p className="text-navy-200 text-lg">5 Days of Strategic Immersion from Wuxi to Nanjing</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-gradient-to-b from-teal via-purple to-red opacity-30"></div>

            <div className="space-y-12">
              {itinerary.map((day, idx) => (
                <div key={idx} className="relative pl-20 group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-0 w-14 h-14 rounded-full border-4 border-navy-900 bg-navy-800 flex items-center justify-center z-10 transition-all duration-500 ${activeDay === day.day ? 'scale-110 shadow-glow border-teal' : 'group-hover:border-teal/50'}`}>
                    <span className={`text-xl font-display font-bold ${activeDay === day.day ? 'text-teal' : 'text-white/40'}`}>{day.day}</span>
                  </div>

                  <div className={`p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 transition-all cursor-pointer ${activeDay === day.day ? 'bg-white/10 border-white/20' : ''}`} onClick={() => setActiveDay(day.day)}>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest">{day.location}</span>
                      <span className="px-3 py-1 rounded-full bg-purple/20 text-purple text-xs font-bold uppercase tracking-widest">Focus: {day.focus}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{day.title}</h3>
                    <p className={`text-navy-100 text-lg font-light leading-relaxed transition-all duration-500 overflow-hidden ${activeDay === day.day ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}`}>
                      {day.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Target Audience */}
      <section className="py-24 bg-white dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-navy-900 dark:text-white mb-8">Who Should Join<span className="text-red">.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Founders", desc: "Scaling deep tech and seeking robust supply chain partners in China." },
                  { title: "Investors / VCs", desc: "Seeking early-stage deals and expansion-ready pipelines for portfolios." },
                  { title: "Executives", desc: "Exploring R&D workshops and long-term market entry strategies." }
                ].map((aud, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-navy-800/20 hover:bg-slate-100 transition-colors">
                    <span className="material-symbols-outlined text-teal text-4xl">check_circle</span>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{aud.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{aud.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Business Immersion" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                <p className="text-white text-lg italic leading-relaxed">"A unique opportunity to see the future of industry before it goes global."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing & Logistics (The Closer) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-teal/20 rounded-full blur-[100px]"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Pricing & Logistics<span className="text-red">.</span></h2>
                <div className="text-6xl font-display font-black text-teal mb-4">SGD 2,999</div>
                <div className="inline-block p-6 bg-red/20 border border-red/40 rounded-2xl mb-10 animate-pulse">
                  <div className="text-xl font-bold text-white mb-1">Grant Support Available</div>
                  <div className="text-sm opacity-80">Subsidies up to <span className="text-2xl font-black text-red-400">SGD 30,000</span> (Subject to evaluation)</div>
                </div>

                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal">inventory_2</span>
                  What’s Included:
                </h4>
                <ul className="space-y-4 text-navy-200">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-teal">hotel</span> 4 Nights Accommodation & In-country Transport</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-teal">restaurant</span> All Meals & Networking Dinners</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-teal">factory</span> Curated Facility Tours & Government Engagement</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-teal">handshake</span> Pre-trip Commercial Matching</li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[3rem] shadow-xl">
                  <h3 className="text-3xl font-bold mb-6 text-center">Ready to Pivot?</h3>
                  <p className="text-center text-navy-200 mb-10">Limited slots available to ensure high-quality peer-to-peer engagement.</p>
                  <div className="space-y-4">
                    <button className="w-full bg-teal hover:bg-teal-600 text-white py-5 rounded-2xl font-bold transition-all shadow-glow text-xl">
                      Register Interest Now
                    </button>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-navy-400">
                    Registration Deadline: January 15, 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
