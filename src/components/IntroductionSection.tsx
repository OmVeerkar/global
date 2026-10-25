import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Factory, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/config";

export function IntroductionSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-brand-ivory relative overflow-hidden">
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Architectural Photo & Experience Badges (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden shadow-luxury border border-brand-sand/40">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Global Interio Architectural Living Room Concept"
                className="w-full h-[480px] sm:h-[580px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo Attribution Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 border border-brand-sand/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block">
                    Vijayapura Studio & Manufacturing
                  </span>
                  <span className="font-serif text-sm text-brand-charcoal font-medium">
                    Domino's Bldg Experience Centre & KIADB Factory
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-brand-brass shrink-0 ml-2" />
              </div>
            </div>

            {/* Architectural Geometric Offset Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-brass/30 pointer-events-none hidden sm:block -z-0" />
          </div>

          {/* Right Column: Editorial Copy (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-brand-brass" />
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
                About Global Interio
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal font-normal leading-[1.12]">
              Good Design Is <span className="italic font-light">Felt,</span> Not Just Seen.
            </h2>

            {/* Body */}
            <p className="mt-6 text-base sm:text-lg text-brand-charcoal/80 leading-relaxed font-light">
              Every space has a story. Our approach to interiors brings together thoughtful planning,
              material selection, functionality, and considered details to create spaces that feel personal
              and timeless.
            </p>

            <p className="mt-4 text-sm sm:text-base text-brand-charcoal/70 leading-relaxed font-light">
              Rooted in Vijayapura, Karnataka, Global Interio bridges the gap between sophisticated architectural
              concepts and tangible execution. We operate our own dedicated furniture manufacturing facility at KIADB
              Mahalbagayat Industrial Area, giving homeowners unparalleled precision, honest pricing, and genuine
              durability.
            </p>

            {/* Key Studio Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-sand/40">
              <div className="flex items-start gap-3">
                <Factory className="w-5 h-5 text-brand-brass shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brand-charcoal">In-House Manufacturing</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-0.5 font-light">
                    Direct factory fabrication in Vijayapura with zero middlemen markups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-brass shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brand-charcoal">Premium Hardware</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-0.5 font-light">
                    Certified German soft-close fittings (Hafele & Blum) built to last.
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More & Consultation Link */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/40 hover:border-brand-brass"
              >
                <span>Learn About Our Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={BUSINESS_CONFIG.experienceCentreAddress.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-charcoal/60 hover:text-brand-charcoal transition-colors underline underline-offset-4"
              >
                Visit Jalnagar Road Experience Centre
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
