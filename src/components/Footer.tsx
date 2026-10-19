import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, MATERIAL_CATEGORIES } from '../data/metalsData';

interface FooterProps {
  onOpenRfq: () => void;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateToProduct: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenRfq,
  onNavigateHome,
  onNavigateToProduct 
}) => {
  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  const quickLinks = [
    { label: 'Home', action: () => onNavigateHome('home') },
    { label: 'About Us', action: () => onNavigateHome('about') },
    { label: 'Products', action: () => onNavigateHome('products') },
    { label: 'Product Range', action: () => onNavigateHome('range') },
    { label: 'Industries', action: () => onNavigateHome('industries') },
    { label: 'Gallery', action: () => onNavigateHome('gallery') },
    { label: 'Contact', action: () => onNavigateHome('contact') },
  ];

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Company Info, Navigation, Contact & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Company Bio & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigateHome('home')}
              className="text-left cursor-pointer"
            >
              <BrandLogo variant="footer" />
            </button>
            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-md pt-2">
              {COMPANY_INFO.positioning}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              Specializing in the supply of high-integrity industrial metals and alloy materials for engineering, petrochemical, energy, and precision manufacturing sectors.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Individual Product Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {MATERIAL_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigateToProduct(cat.slug)}
                    className="hover:text-[#0A2540] hover:underline transition-colors flex items-center gap-1.5 cursor-pointer text-left py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="hover:text-[#0A2540] hover:underline transition-colors inline-block py-0.5 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & RFQ Button */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider">
              Contact Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A2540] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#0A2540] font-mono font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex flex-col gap-1 pl-6">
                <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="hover:text-[#0A2540] font-mono">
                  {COMPANY_INFO.emails[0]}
                </a>
                <a href={`mailto:${COMPANY_INFO.emails[1]}`} className="hover:text-[#0A2540] font-mono">
                  {COMPANY_INFO.emails[1]}
                </a>
              </div>

              <div className="pt-1 pl-6 text-[11px] font-mono text-slate-500">
                GSTIN: <span className="font-bold text-slate-700">{COMPANY_INFO.gstin}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRfq}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#071E3D] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal & Copyright strictly formatted */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} VEDANTA METAL INC
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Stockist &amp; Supplier</span>
            <span>·</span>
            <span>Industrial Metallurgy</span>
            <span>·</span>
            <span>B2B Procurement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
