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
    <section id="contact" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0A2540] uppercase">
            Commercial Communications
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mt-1">
            CONTACT VEDANTA METAL INC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Connect directly with our sales desk for material enquiries, technical specifications, and official purchase orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Address Card */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2540]/5 border border-[#0A2540]/10 flex items-center justify-center text-[#0A2540] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                    Registered Office &amp; Operations
                  </span>
                  <h3 className="text-sm font-bold text-[#0A2540] mb-1.5">
                    VEDANTA METAL INC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {COMPANY_INFO.address}
                  </p>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.address, 'address')}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#0A2540] hover:underline font-mono cursor-pointer font-semibold"
                  >
                    {copiedText === 'address' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText === 'address' ? 'Address Copied' : 'Copy Full Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2540]/5 border border-[#0A2540]/10 flex items-center justify-center text-[#0A2540] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                    Direct Telephone &amp; Mobile
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-[#0A2540] hover:underline transition-colors block font-mono"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Available during standard business hours for procurement enquiries.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200 transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>CHAT ON WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Clickable Email Addresses Card */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2540]/5 border border-[#0A2540]/10 flex items-center justify-center text-[#0A2540] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                    Procurement &amp; Sales Inquiries
                  </span>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between">
                      <a
                        href={`mailto:${COMPANY_INFO.emails[0]}`}
                        className="text-sm font-bold text-[#0A2540] hover:underline transition-colors font-mono"
                      >
                        {COMPANY_INFO.emails[0]}
                      </a>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.emails[0], 'email1')}
                        className="text-xs text-slate-400 hover:text-[#0A2540] p-1"
                        title="Copy email"
                      >
                        {copiedText === 'email1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <a
                        href={`mailto:${COMPANY_INFO.emails[1]}`}
                        className="text-sm font-bold text-slate-700 hover:text-[#0A2540] transition-colors font-mono"
                      >
                        {COMPANY_INFO.emails[1]}
                      </a>
                      <button
                        onClick={() => handleCopy(COMPANY_INFO.emails[1], 'email2')}
                        className="text-xs text-slate-400 hover:text-[#0A2540] p-1"
                        title="Copy email"
                      >
                        {copiedText === 'email2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
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
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#0A2540]" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Goods &amp; Services Tax Identification Number (GSTIN)
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 tracking-wider">
                    {COMPANY_INFO.gstin}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(COMPANY_INFO.gstin, 'gstin')}
                className="px-3 py-1.5 rounded bg-slate-50 border border-slate-300 hover:bg-slate-100 text-xs text-slate-700 font-mono inline-flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                {copiedText === 'gstin' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedText === 'gstin' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Location Map / Operational Hub Preview */}
          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-md flex flex-col h-full min-h-[460px]">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider">
                  Operational Location · Girgaon, Mumbai
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">PIN 400004</span>
            </div>

            {/* Interactive OpenStreetMap Embed for Girgaon Mumbai in Clean Daylight Mode */}
            <div className="flex-1 w-full bg-slate-100 relative">
              <iframe
                title="VEDANTA METAL INC Location Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8150%2C18.9550%2C72.8350%2C18.9700&amp;layer=mapnik&amp;marker=18.9615%2C72.8252"
                className="w-full h-full min-h-[350px] border-0 opacity-95"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-700 flex items-center justify-between shadow-md">
                <div>
                  <strong className="text-[#0A2540] block">VEDANTA METAL INC</strong>
                  <span className="text-[11px] text-slate-500 font-mono">Harharwala Building, Patthe Baburao Marg, Mumbai</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Patthe+Baburao+Marg+Gol+Pittha+Junction+Girgaon+Mumbai+400004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-bold text-white bg-[#0A2540] hover:bg-[#071E3D] rounded font-mono shrink-0 shadow-sm"
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
