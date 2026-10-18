import React from 'react';
import { ArrowRight, ShieldCheck, MessageSquare, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/metalsData';

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
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Industrial Image with Measured Deep Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_industrial_metals_1792267826893.jpg"
          alt="VEDANTA METAL INC industrial steel coils, plates, and round bars inventory"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep Industrial Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        {/* Subtle technical line pattern overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>{COMPANY_INFO.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
            {COMPANY_INFO.headline}
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-2xl font-semibold text-amber-200/90 tracking-normal mb-4">
            {COMPANY_INFO.subheading}
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {COMPANY_INFO.supportingText}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={onOpenRfq}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreProducts}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded transition-all cursor-pointer backdrop-blur-sm"
            >
              EXPLORE PRODUCTS
            </button>

            <button
              onClick={onContactClick}
              className="px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              CONTACT US
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-500/30 rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          {/* Factual Procurement Assurance Kicker */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Direct Mill Specification Compliance</span>
            </div>
            <span className="hidden sm:inline text-slate-700">·</span>
            <div>Standard &amp; Custom Sized Cut Materials</div>
            <span className="hidden sm:inline text-slate-700">·</span>
            <div>Fast Quotation Turnaround</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-500 hidden md:flex flex-col items-center gap-1 opacity-75 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
