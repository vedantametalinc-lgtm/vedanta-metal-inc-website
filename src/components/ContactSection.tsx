import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileText, MessageSquare, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/metalsData';

export const ContactSection: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const whatsappUrl = `https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900/80 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            Commercial Communications
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            CONTACT VEDANTA METAL INC
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Connect directly with our sales desk for material enquiries, technical specifications, and official purchase orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Address Card */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Registered Office &amp; Operations
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    VEDANTA METAL INC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {COMPANY_INFO.address}
                  </p>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.address, 'address')}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-mono cursor-pointer"
                  >
                    {copiedText === 'address' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText === 'address' ? 'Address Copied' : 'Copy Full Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Direct Telephone &amp; Mobile
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors block font-mono"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Available during standard business hours for procurement enquiries.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 px-3 py-1.5 rounded border border-emerald-500/30 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>CHAT ON WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Clickable Email Addresses Card */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Procurement &amp; Sales Inquiries
                  </span>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between">
                      <a
                        href={`mailto:${COMPANY_INFO.emails[0]}`}
                        className="text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors font-mono"
                      >
                        {COMPANY_INFO.emails[0]}
                      </a>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.emails[0], 'email1')}
                        className="text-xs text-slate-400 hover:text-white p-1"
                        title="Copy email"
                      >
                        {copiedText === 'email1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-900">
                      <a
                        href={`mailto:${COMPANY_INFO.emails[1]}`}
                        className="text-sm font-bold text-slate-200 hover:text-amber-300 transition-colors font-mono"
                      >
                        {COMPANY_INFO.emails[1]}
                      </a>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.emails[1], 'email2')}
                        className="text-xs text-slate-400 hover:text-white p-1"
                        title="Copy email"
                      >
                        {copiedText === 'email2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 font-mono">
                    Send tender documents, BOQs, and material schedules directly to either address.
                  </p>
                </div>
              </div>
            </div>

            {/* GSTIN Card */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    Goods &amp; Services Tax Identification Number (GSTIN)
                  </span>
                  <span className="text-sm font-bold font-mono text-white tracking-wider">
                    {COMPANY_INFO.gstin}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(COMPANY_INFO.gstin, 'gstin')}
                className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-mono inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copiedText === 'gstin' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedText === 'gstin' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Location Map / Operational Hub Preview */}
          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl flex flex-col h-full min-h-[460px]">
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Operational Location · Girgaon, Mumbai
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">PIN 400004</span>
            </div>

            {/* Interactive OpenStreetMap Embed for Girgaon Mumbai without external trackers */}
            <div className="flex-1 w-full bg-slate-900 relative">
              <iframe
                title="VEDANTA METAL INC Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8150%2C18.9550%2C72.8350%2C18.9700&amp;layer=mapnik&amp;marker=18.9615%2C72.8252"
                className="w-full h-full min-h-[350px] border-0 filter invert contrast-125 hue-rotate-180 opacity-90"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <strong className="text-white block">VEDANTA METAL INC</strong>
                  <span className="text-[11px] text-slate-400 font-mono">Harharwala Building, Patthe Baburao Marg, Mumbai</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Patthe+Baburao+Marg+Gol+Pittha+Junction+Girgaon+Mumbai+400004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[11px] font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded font-mono shrink-0"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
