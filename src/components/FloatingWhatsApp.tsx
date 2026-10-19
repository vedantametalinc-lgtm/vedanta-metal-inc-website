import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/metalsData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip notice */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">Quick procurement enquiry on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-0.5 ml-1 cursor-pointer"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group relative"
        title="Chat with VEDANTA METAL INC on WhatsApp"
        aria-label="Chat with VEDANTA METAL INC on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
