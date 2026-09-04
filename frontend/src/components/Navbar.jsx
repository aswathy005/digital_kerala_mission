import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';

const navItems = [
  { label: 'Home', path: '/', anchor: '#hero' },
  { label: 'AI Sales Engine', path: '/ai-sales-engine', anchor: '#ai-sales-engine' },
  { label: 'For Business Owners', path: '/business-owners', anchor: '#opportunities' },
  { label: 'For Partners', path: '/partners', anchor: '#partners' },
  { label: 'About Us', path: '/about', anchor: '#why-us' },
  { label: 'Resources', path: '/resources', anchor: '#resources' },
  { label: 'Contact Us', path: '/contact', anchor: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/' && item.anchor) {
      const element = document.querySelector(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(item.path);
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/contact');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding - DKM Digital Kerala Mission */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-gradient flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <span className="font-sans text-xs font-black tracking-tighter">DKM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-base font-extrabold text-navy-dark tracking-tight leading-none group-hover:text-primary-purple transition-colors">
                DIGITAL KERALA
              </span>
              <span className="font-sans text-[11px] font-bold text-primary-purple tracking-widest leading-none mt-1">
                MISSION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 text-xs xl:text-sm font-sans font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-primary-purple bg-purple-50'
                      : 'text-slate-body hover:text-navy-dark hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="purple"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={handleCtaClick}
              className="rounded-full shadow-purple-glow"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-navy-dark hover:text-primary-purple hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-white border-b border-slate-200 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-left py-2.5 px-4 text-sm font-sans font-semibold text-navy-dark hover:text-primary-purple hover:bg-purple-50 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Button
                variant="purple"
                size="md"
                className="w-full justify-center rounded-full"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleCtaClick}
              >
                Book a Free Consultation
              </Button>

              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-xs font-mono text-slate-500 hover:text-primary-purple"
              >
                Admin Portal Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
