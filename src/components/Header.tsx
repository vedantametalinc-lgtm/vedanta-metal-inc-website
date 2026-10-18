import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/metalsData';

interface HeaderProps {
  onOpenRfq: (category?: string, grade?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRfq }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Product Range', href: '#range' },
    { label: 'Industries', href: '#industries' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Brand Wordmark / Uploaded Logo */}
          <a
            href="#home"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            title="VEDANTA METAL INC - Home"
          >
            <BrandLogo variant="header" />
          </a>

          {/* Zone 2: Navigation Links (Single Line, Clean Typography) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded border border-slate-800 bg-slate-900/60"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-2 px-3 rounded border border-emerald-500/30 bg-emerald-950/30"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenRfq()}
              className="px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md hover:shadow-amber-500/20 rounded cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            >
              REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenRfq()}
              className="px-2.5 py-1.5 text-[11px] font-bold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded whitespace-nowrap shrink-0"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/98 border-b border-slate-800 px-5 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-slate-300 hover:text-amber-400 py-1.5 border-b border-slate-800/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Direct Phone:</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 font-semibold">
                {COMPANY_INFO.phone}
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              CHAT ON WHATSAPP
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-3 text-xs font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-lg"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
