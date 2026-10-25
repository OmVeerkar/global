import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { getWhatsAppUrl, BUSINESS_CONFIG } from "../data/config";

export function WhatsAppButton() {
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  const handleClick = () => {
    window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
      {/* Floating Tooltip Pill */}
      {!isTooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-charcoal text-white text-xs px-3.5 py-2 rounded-full border border-brand-brass/40 shadow-luxury animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-light">
            Chat with <span className="font-semibold text-brand-sand">Global Interio</span>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsTooltipDismissed(true);
            }}
            className="text-white/60 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <button
        onClick={handleClick}
        aria-label="Chat with Global Interio Vijayapura on WhatsApp"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-luxury-hover transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 relative group"
      >
        <MessageSquare className="w-7 h-7" />
        
        {/* Active status dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-emerald-600 rounded-full" />
      </button>
    </div>
  );
}
