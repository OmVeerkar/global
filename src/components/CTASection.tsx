import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../data/config";

interface CTASectionProps {
  onOpenConsultation?: () => void;
}

export function CTASection({ onOpenConsultation }: CTASectionProps) {
  const handleWhatsApp = () => {
    const msg = "Hello Global Interio, I would like to request an interior design consultation in Vijayapura. Please let me know your available slots.";
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal overflow-hidden text-white">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt="Architectural Luxury Interior"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/70" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 bg-brand-sand/10 border border-brand-brass/30 px-3.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-brass animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-brand-brass uppercase">
            Start Your Journey
          </span>
        </div>

        {/* Master Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-brand-ivory max-w-4xl mx-auto">
          Let's Create a Space You'll <span className="italic font-light text-brand-sand">Love Coming Home To.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-brand-sand/80 max-w-2xl mx-auto font-light leading-relaxed">
          Tell us about your space, your ideas, and what you have in mind. Let's start a conversation.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-brand-brass text-white font-medium text-xs uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 shadow-luxury flex items-center gap-2.5 rounded-none"
          >
            <Calendar className="w-4 h-4" />
            <span>Request a Consultation</span>
          </Link>

          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-brand-ivory border border-white/20 font-medium text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300 flex items-center gap-2.5 rounded-none"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Studio location note */}
        <p className="mt-8 text-xs text-brand-sand/50 font-light">
          Experience Centre: 2nd Floor, Domino's Building, Jalnagar Road, Vijayapura • Factory: KIADB Industrial Area
        </p>
      </div>
    </section>
  );
}
