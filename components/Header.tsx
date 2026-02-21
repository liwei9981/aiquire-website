
import React, { useState } from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  onNavigate: (section: string) => void;
  activeSection: string;
}

export const TransfongLogo: React.FC<{ className?: string; isDark?: boolean }> = ({ className = "h-8", isDark = false }) => (
  <div className={`flex items-center select-none ${className}`}>
    <span className={`font-display font-extrabold text-2xl tracking-tighter ${isDark ? 'text-white' : 'text-navy-900'}`}>
      Transfong<span className="text-red">.</span>
    </span>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode, onNavigate, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'landing' },
    { label: 'AI Workshop', id: 'workshop' },
    { label: 'AI Immersion Trip', id: 'immersion' },
    { label: 'AI Employees', id: 'employees' },
    { label: 'AI Grants', id: 'grants' },
    { label: 'About', id: 'about' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-navy-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => handleNavigate('landing')}
              className="flex-shrink-0 flex items-center group transition-transform hover:scale-[1.02]"
            >
              <TransfongLogo isDark={isDarkMode} className="h-10" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:block ml-12 space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${activeSection === item.id
                    ? 'bg-teal/10 text-teal'
                    : 'text-slate-600 dark:text-slate-300 hover:text-navy-800 dark:hover:text-teal'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-navy-800 dark:text-slate-400 dark:hover:text-teal rounded-full hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-navy-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] border-b border-gray-100 dark:border-navy-700' : 'max-h-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`block w-full text-left px-4 py-3 text-base font-bold transition-all rounded-xl ${activeSection === item.id
                ? 'bg-teal/10 text-teal'
                : 'text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-navy-800'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[81px] bg-black/20 backdrop-blur-[2px] z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};
