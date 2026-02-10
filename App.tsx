
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProgramOverview } from './components/ProgramOverview.tsx';
import { Features } from './components/Features.tsx';
import { Phases } from './components/Phases.tsx';
import { FrontFeatures } from './components/FrontFeatures.tsx';
import { Offerings } from './components/Offerings.tsx';
import { CTA } from './components/CTASection.tsx';
import { Footer } from './components/Footer.tsx';
import { ImmersionTrip } from './components/ImmersionTrip.tsx';
import { AIEmployees } from './components/AIEmployees.tsx';
import { Funding } from './components/Funding.tsx';
import { About } from './components/About.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('landing');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} onNavigate={setActiveSection} activeSection={activeSection} />
      <main className="flex-grow">
        {activeSection === 'landing' ? (
          <>
            <Hero />
            <FrontFeatures />
            <Offerings />
          </>
        ) : activeSection === 'workshop' ? (
          <>
            <ProgramOverview />
            <Phases />
          </>
        ) : activeSection === 'immersion' ? (
          <ImmersionTrip />
        ) : activeSection === 'employees' ? (
          <AIEmployees />
        ) : activeSection === 'grants' ? (
          <Funding />
        ) : activeSection === 'about' ? (
          <About />
        ) : (
          <div className="pt-40 pb-40 text-center animate-in fade-in zoom-in duration-500">
            <div className="max-w-2xl mx-auto px-4">
              <span className="material-symbols-outlined text-6xl text-teal mb-6">construction</span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-navy-900 dark:text-white mb-4">
                Content coming soon<span className="text-red">.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-12">
                We're currently building something amazing for the {activeSection === 'fun' ? 'AI for fun' : activeSection} section. Stay tuned!
              </p>
              <button
                onClick={() => setActiveSection('landing')}
                className="bg-navy-900 dark:bg-teal text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2 mx-auto"
              >
                <span className="material-symbols-outlined">home</span>
                Return Home
              </button>
            </div>
          </div>
        )}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
