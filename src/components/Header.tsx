import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, MATERIAL_CATEGORIES } from '../data/metalsData';

interface HeaderProps {
  onOpenRfq: (category?: string, grade?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToProduct: (slug: string) => void;
  currentProductSlug?: string | null;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenRfq, 
  onNavigateHome,
  onNavigateToProduct,
  currentProductSlug = null
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', action: () => onNavigateHome('home') },
    { label: 'About Us', action: () => onNavigateHome('about') },
    { 
      label: 'Products', 
      isDropdown: true,
      action: () => onNavigateHome('products')
    },
    { label: 'Product Range', action: () => onNavigateHome('range') },
    { label: 'Industries', action: () => onNavigateHome('industries') },
    { label: 'Gallery', action: () => onNavigateHome('gallery') },
    { label: 'Contact', action: () => onNavigateHome('contact') },
  ];

  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b ${
        isScrolled ? 'border-slate-300 shadow-md py-2.5' : 'border-slate-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Logo Zone */}
          <button
            onClick={() => onNavigateHome('home')}
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540] rounded cursor-pointer"
            title="VEDANTA METAL INC - Home"
          >
            <BrandLogo variant="header" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => {
                        link.action();
                        setProductsDropdownOpen(false);
                      }}
                      className={`inline-flex items-center gap-1 whitespace-nowrap hover:text-[#0A2540] transition-colors py-1 cursor-pointer ${
                        currentProductSlug ? 'text-[#0A2540] font-bold' : ''
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#0A2540]' : 'text-slate-400'}`} />
                    </button>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                          Individual Product Pages
                        </div>
                        {MATERIAL_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onNavigateToProduct(cat.slug);
                              setProductsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3.5 py-2 text-xs font-medium hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer ${
                              currentProductSlug === cat.slug
                                ? 'bg-slate-100 font-bold text-[#0A2540]'
                                : 'text-slate-700'
                            }`}
                          >
                            <span className="truncate pr-2">{cat.name}</span>
                            <span className="text-[10px] font-mono text-slate-400 shrink-0">
                              {cat.grades.length} Gr
                            </span>
                          </button>
                        ))}
                        <div className="p-2 border-t border-slate-100">
                          <button
                            onClick={() => {
                              onNavigateHome('products');
                              setProductsDropdownOpen(false);
                            }}
                            className="w-full text-center py-1.5 rounded bg-slate-50 hover:bg-slate-100 text-[11px] font-bold text-[#0A2540] transition-colors"
                          >
                            View All Categories Overview &rarr;
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="whitespace-nowrap shrink-0 hover:text-[#0A2540] transition-colors py-1 cursor-pointer font-semibold relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A2540] transition-all duration-200 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0A2540] transition-colors py-2 px-3 rounded-md border border-slate-200 bg-slate-50"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A2540]" />
              <span className="font-mono">{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors py-2 px-3 rounded-md border border-emerald-200 bg-emerald-50"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenRfq()}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#0A2540] hover:bg-[#071E3D] transition-all shadow-sm rounded-md cursor-pointer whitespace-nowrap active:scale-95"
            >
              REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile Menu & Quote Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenRfq()}
              className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-white bg-[#0A2540] rounded shadow-sm"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  link.action();
                }}
                className="text-left text-sm font-semibold text-slate-800 hover:text-[#0A2540] py-2 border-b border-slate-100 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Individual Product Quick Links */}
          <div className="pt-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
              Individual Product Pages
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {MATERIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToProduct(cat.slug);
                  }}
                  className={`text-left text-xs px-3 py-2 rounded border transition-colors flex items-center justify-between ${
                    currentProductSlug === cat.slug
                      ? 'bg-slate-100 font-bold text-[#0A2540] border-slate-300'
                      : 'border-slate-100 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] font-mono text-slate-400">View Page &rarr;</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
              <span>Sales Desk Phone:</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#0A2540] font-mono font-bold">
                {COMPANY_INFO.phone}
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              CHAT ON WHATSAPP
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-3 text-xs font-bold tracking-wider uppercase text-white bg-[#0A2540] hover:bg-[#071E3D] rounded-md shadow-sm"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
