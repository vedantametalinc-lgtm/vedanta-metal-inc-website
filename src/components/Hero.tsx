import React from 'react';
import { ArrowRight, ShieldCheck, MessageSquare, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/metalsData';
import heroIndustrialMetalsImage from '../assets/images/hero_industrial_metals_1792267826893.jpg';

interface HeroProps {
  onOpenRfq: () => void;
  onExploreProducts: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRfq,
  onExploreProducts,
  onContactClick,
}) => {
  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  return (
    <section id="home" className="relative bg-white pt-28 pb-16 sm:pb-20 border-b border-slate-200 overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Formal Executive Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0A2540]/5 border border-[#0A2540]/15 text-[#0A2540] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0A2540]" />
              <span>{COMPANY_INFO.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-[#0A2540] leading-[1.14]">
              {COMPANY_INFO.headline}
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl font-bold text-slate-700 tracking-normal">
              {COMPANY_INFO.subheading}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {COMPANY_INFO.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenRfq}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#0A2540] hover:bg-[#071E3D] rounded-md transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold tracking-wide text-[#0A2540] hover:bg-slate-100 bg-slate-50 border border-slate-300 rounded-md transition-all cursor-pointer"
              >
                EXPLORE PRODUCTS
              </button>

              <button
                onClick={onContactClick}
                className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0A2540] transition-colors cursor-pointer"
              >
                CONTACT US
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* Technical Trust Strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified Mill Specifications</span>
              </div>
              <span className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0A2540]" />
                <span>Direct B2B Supply &amp; Enquiry Desk</span>
              </div>
              <span className="hidden sm:inline text-slate-300">·</span>
              <div className="font-mono text-slate-500">
                GSTIN: <span className="font-bold text-[#0A2540]">{COMPANY_INFO.gstin}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={heroIndustrialMetalsImage}
                  alt="Industrial metals coils and plates inventory by VEDANTA METAL INC"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 block">
                    Material Staging &amp; Logistics
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                    Stainless Steel &amp; Specialty Alloy Inventory
                  </h3>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="p-4 bg-white border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 font-mono text-[10px] uppercase block">Material Classes</span>
                  <span className="font-bold text-[#0A2540]">SS, Duplex, Nickel, Ti</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono text-[10px] uppercase block">Operations Desk</span>
                  <span className="font-bold text-[#0A2540]">Girgaon, Mumbai</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
