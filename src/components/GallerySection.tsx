import React, { useState } from 'react';
import { Maximize2, X, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/metalsData';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            Material Visuals
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            GALLERY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Representative visuals demonstrating stainless steel coils, high-temp alloy bars, duplex piping, and titanium stocks available for commercial procurement.
          </p>
          
          {/* Factual Disclaimer Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Note: Visuals are representative illustrations of material forms and industrial alloy stock.</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveImage(item.image);
                setActiveTitle(item.title);
              }}
              className="group relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Information Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors shrink-0 ml-2">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <span className="text-sm font-bold text-white font-mono">{activeTitle}</span>
              <button
                onClick={() => setActiveImage(null)}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-slate-950 max-h-[75vh] flex items-center justify-center">
              <img
                src={activeImage}
                alt={activeTitle}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>VEDANTA METAL INC · Material Supply Visual</span>
              <span>Click outside to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
