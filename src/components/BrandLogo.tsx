import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'hero' | 'footer' | 'large';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  showSubtitle = true
}) => {
  const [imgError, setImgError] = useState(false);

  // Height configurations strictly maintaining proportions
  const sizeClasses = {
    header: 'h-11 sm:h-12 w-auto max-h-14',
    hero: 'h-14 sm:h-16 w-auto',
    footer: 'h-12 sm:h-14 w-auto',
    large: 'h-16 sm:h-20 w-auto'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <img
          src="/logo.svg?v=2"
          alt="VEDANTA METAL INC"
          className={`${sizeClasses[variant]} object-contain transition-transform duration-200 drop-shadow-sm`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#0A2540] text-white flex items-center justify-center p-2 shadow-sm">
            <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
              <path d="M8 8 L18 8 L24 28 L30 8 L40 8 L28 34 L20 34 Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wide text-[#0A2540] text-lg leading-tight">
              VEDANTA METAL INC
            </span>
            {showSubtitle && (
              <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase">
                Stockist &amp; Supplier
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
