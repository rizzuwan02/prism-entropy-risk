import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Demo', href: '#demo' },
  { label: 'Team', href: '#team' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card backdrop-blur-md border-b border-neon-blue/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
          >
            PRISM
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-neon-blue ${
                  activeSection === item.href.slice(1)
                    ? 'text-neon-blue'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-gradient-to-r from-neon-blue to-neon-green text-dark-primary font-bold hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('#demo')}
            >
              Try Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Simple scroll indicators */}
      <div className="md:hidden">
        <div className="flex justify-center space-x-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-neon-blue'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};