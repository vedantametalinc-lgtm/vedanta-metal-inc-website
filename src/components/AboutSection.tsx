import React from 'react';
import { Layers, FileCheck2, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface AboutSectionProps {
  onOpenRfq: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenRfq }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Corporate Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                Corporate Profile
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                ABOUT VEDANTA METAL INC
              </h2>
            </div>

            <p className="text-lg text-slate-200 font-medium leading-relaxed">
              <strong className="text-white font-bold">VEDANTA METAL INC</strong> is a stockist and supplier of industrial metal products, specializing in Stainless Steel, Duplex &amp; Super Duplex Steel, Nickel &amp; High-Temperature Alloys, Titanium Alloys, Aluminium, Copper and Brass.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The company focuses on supplying materials for industrial and engineering requirements. We operate with a dedicated commitment to responsive enquiry handling, clear material specification adherence, and dependable supply for technical and commercial procurement operations.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether your project demands high-corrosion duplex grades for aggressive chemical media, high-temperature nickel alloys for thermal service, or standard stainless steel structural stock, VEDANTA METAL INC provides direct quotation and supply execution based strictly on your required dimensional and material specifications.
            </p>

            {/* Factual Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Material Specialization
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Comprehensive supply across stainless, nickel, duplex, and titanium grades.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <FileCheck2 className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Enquiry-Driven Sourcing
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Tailored RFQ responses aligned with required client dimensions and standards.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRfq}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Side Panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8">
              {/* Subtle technical background grid */}
              <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

              {/* Uploaded Logo Display */}
              <div className="relative z-10 pb-6 border-b border-slate-800 flex items-center justify-between">
                <BrandLogo variant="large" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest border border-slate-700/80 rounded px-2 py-0.5">
                  STOCKIST &amp; SUPPLIER
                </span>
              </div>

              {/* Industrial Metal Visual */}
              <div className="relative z-10 my-6 rounded-lg overflow-hidden border border-slate-700/60 shadow-inner group">
                <img
                  src="/src/assets/images/stainless_steel_inventory_1792267828128.jpg"
                  alt="VEDANTA METAL INC industrial steel inventory"
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-[11px] text-slate-300 font-mono">
                  Standard &amp; Custom Metallurgy Sourcing
                </div>
              </div>

              {/* Technical Specifications Callout */}
              <div className="relative z-10 space-y-2 pt-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800 text-slate-400">
                  <span>Role:</span>
                  <span className="font-semibold text-slate-200">Stockist &amp; Supplier</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800 text-slate-400">
                  <span>Primary Alloys:</span>
                  <span className="font-semibold text-slate-200">SS, Duplex, Nickel, Titanium</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800 text-slate-400">
                  <span>Target Buyers:</span>
                  <span className="font-semibold text-slate-200">B2B, EPC, Engineering, Fabricators</span>
                </div>
                <div className="flex justify-between items-center py-1.5 text-slate-400">
                  <span>GSTIN:</span>
                  <span className="font-mono text-amber-400 font-medium">27ABBFV9309F1Z0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
