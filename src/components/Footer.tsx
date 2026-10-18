import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/metalsData';

interface FooterProps {
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq }) => {
  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Product Range', href: '#range' },
    { label: 'Industries', href: '#industries' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Company Info, Navigation, Contact & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Company Bio & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-md pt-2">
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
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & RFQ Button */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Contact Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex flex-col gap-1 pl-6">
                <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="hover:text-amber-400 font-mono">
                  {COMPANY_INFO.emails[0]}
                </a>
                <a href={`mailto:${COMPANY_INFO.emails[1]}`} className="hover:text-amber-400 font-mono">
                  {COMPANY_INFO.emails[1]}
                </a>
              </div>

              <div className="pt-1 pl-6 text-[11px] font-mono text-slate-500">
                GSTIN: <span className="text-slate-300">{COMPANY_INFO.gstin}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRfq}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
