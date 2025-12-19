import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setScrolled(window.scrollY > 20);

      // Handle active section highlighting
      const scrollPosition = window.scrollY + 100; // Offset to trigger activation earlier
      
      let current = '';
      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Handle scroll to top
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle scroll to section with offset for fixed header
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Approximate height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Professional Logo Section */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')}
            className="flex items-center gap-4 group focus:outline-none"
          >
            {/* Logo Icon */}
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl rotate-6 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-12 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl border border-slate-800 z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                    <span className="font-serif font-bold text-xl text-white tracking-wider">MK</span>
                </div>
            </div>

            {/* Text Branding */}
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300 font-serif">
                Mayank Kundalwal
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase">
                  PhD Candidate
                </span>
              </div>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href 
                    ? 'text-blue-600 font-bold' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activeSection === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};