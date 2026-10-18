import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle2, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { MATERIAL_CATEGORIES } from '../data/metalsData';

interface ProductRangeCatalogProps {
  selectedCategoryIndex: number;
  onSelectCategoryIndex: (index: number) => void;
  onOpenRfqWithGrade: (category: string, grade: string) => void;
}

export const ProductRangeCatalog: React.FC<ProductRangeCatalogProps> = ({
  selectedCategoryIndex,
  onSelectCategoryIndex,
  onOpenRfqWithGrade,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = MATERIAL_CATEGORIES[selectedCategoryIndex] || MATERIAL_CATEGORIES[0];

  // Grade filter matching search
  const filteredGrades = currentCategory.grades.filter((g) =>
    g.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="range" className="py-20 sm:py-28 bg-slate-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            Technical Metallurgy Catalogue
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            PRODUCT RANGE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Procurement specification directory for stainless steel, nickel alloys, duplex, titanium, and copper-brass alloys. Select a category below or search for your required grade.
          </p>
        </div>

        {/* Category Navigation Tabs (Clean Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin border-b border-slate-800 mb-8">
          {MATERIAL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === selectedCategoryIndex;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategoryIndex(idx);
                  setSearchTerm('');
                }}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                    : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Catalogue Card */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Category Top Banner */}
          <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                    CATEGORY SPECIFICATION
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentCategory.grades.length} Certified Supplied Grades
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentCategory.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentCategory.shortDesc}
                </p>
                <p className="text-xs text-amber-300/80 font-mono">
                  {currentCategory.specificationNote}
                </p>
              </div>

              {/* Quick Search within this Category */}
              <div className="w-full lg:w-72 shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Filter ${currentCategory.name} grades...`}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-lg text-xs text-white placeholder-slate-500 font-mono transition-colors outline-none"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Grades Specification Grid */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span>Available Technical Grades &amp; Materials</span>
              </h4>
              <span className="text-xs font-mono text-slate-500">
                Click any grade to pre-fill RFQ
              </span>
            </div>

            {filteredGrades.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGrades.map((grade) => (
                  <div
                    key={grade}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-500">GRADE</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 opacity-80" />
                      </div>
                      <span className="text-lg font-bold text-white font-mono group-hover:text-amber-300 transition-colors block">
                        {grade}
                      </span>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Supplied to standard engineering tolerances
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-800/80">
                      <button
                        onClick={() => onOpenRfqWithGrade(currentCategory.name, grade)}
                        className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-slate-950 bg-slate-800/80 group-hover:bg-amber-400 rounded transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>REQUEST A QUOTE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center rounded-xl bg-slate-900/30 border border-dashed border-slate-800">
                <p className="text-sm text-slate-400 font-mono">
                  No grade matching "{searchTerm}" found under {currentCategory.name}.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 text-xs font-bold text-amber-400 hover:underline cursor-pointer"
                >
                  Reset Grade Filter
                </button>
              </div>
            )}

            {/* Bottom Procurement Banner within Catalogue */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  Need a specific size, thickness, pipe schedule, or cut-to-length piece for <strong>{currentCategory.name}</strong>?
                </span>
              </div>
              <button
                onClick={() => onOpenRfqWithGrade(currentCategory.name, '')}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shrink-0 cursor-pointer"
              >
                REQUEST A QUOTE
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
