import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../data/config";
import {
  Compass,
  Factory,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export function About() {
  useEffect(() => {
    document.title = "About Us | Global Interio — Architectural Interior Studio Vijayapura";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-24 bg-brand-ivory text-brand-charcoal">
      {/* Editorial Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              About Global Interio
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-charcoal font-normal leading-[1.12]">
            Where Architectural Vision Meets <span className="italic font-light">Factory Precision.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-charcoal/80 font-light leading-relaxed">
            Founded in Vijayapura, Karnataka, Global Interio was created to elevate everyday living
            spaces through thoughtful spatial planning, tactile natural materials, and precision-manufactured
            custom furniture.
          </p>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-24">
        <div className="relative h-[420px] sm:h-[540px] overflow-hidden shadow-luxury border border-brand-sand/40">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Global Interio Studio Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-xl">
            <span className="text-xs uppercase tracking-widest text-brand-brass font-bold">
              Vijayapura, Karnataka
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mt-1">
              "We believe a home should reflect the stillness you seek at the end of the day."
            </h3>
          </div>
        </div>
      </section>

      {/* The Two Pillars: Studio & Factory */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Pillar 1 */}
          <div className="p-10 bg-white border border-brand-sand/40 shadow-sm">
            <div className="w-12 h-12 bg-brand-ivory flex items-center justify-center text-brand-brass mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-1">
              Pillar 01
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal mb-4">
              The Design Studio & Experience Centre
            </h3>
            <p className="text-sm text-brand-charcoal/75 font-light leading-relaxed mb-6">
              Located on the 2nd Floor of the Domino's Building on Jalnagar / Solapur Road, our studio
              is an interactive design sanctuary. Here, clients explore live layout mockups, experience 3D
              room walkthroughs, and physically touch imported marble slabs, textured wood veneers, and
              fabric samples before committing to a design.
            </p>
            <div className="text-xs text-brand-charcoal/70 flex items-center gap-2 pt-4 border-t border-brand-sand/30">
              <MapPin className="w-4 h-4 text-brand-brass" />
              <span>Jalnagar Road, Vijayapura, Karnataka — 586101</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-10 bg-white border border-brand-sand/40 shadow-sm">
            <div className="w-12 h-12 bg-brand-ivory flex items-center justify-center text-brand-brass mb-6">
              <Factory className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-1">
              Pillar 02
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal mb-4">
              In-House KIADB Manufacturing Unit
            </h3>
            <p className="text-sm text-brand-charcoal/75 font-light leading-relaxed mb-6">
              We eliminate third-party carpenters and middlemen markups. Our dedicated furniture manufacturing
              facility at KIADB Mahalbagayat Industrial Area features precision machinery, CNC cutting, and PUR
              edge-banding to deliver modular kitchens and wardrobes with 0.1mm tolerances and unmatched longevity.
            </p>
            <div className="text-xs text-brand-charcoal/70 flex items-center gap-2 pt-4 border-t border-brand-sand/30">
              <MapPin className="w-4 h-4 text-brand-brass" />
              <span>KIADB Mahalbagayat Industrial Area, Vijayapura — 586104</span>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Values */}
      <section className="bg-brand-linen py-20 border-y border-brand-sand/30 mb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut block mb-2">
              Our Core Convictions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
              Principles Guiding Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-brand-sand/40">
              <span className="font-serif text-2xl text-brand-brass font-light">01</span>
              <h4 className="font-serif text-xl text-brand-charcoal mt-3 mb-2 font-medium">
                Spatial Proportions First
              </h4>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light leading-relaxed">
                Before choosing colors or wallpapers, we obsess over light, airflow, walking clearance,
                and ergonomic balance. A beautiful room that feels cramped is a failed design.
              </p>
            </div>

            <div className="p-6 bg-white border border-brand-sand/40">
              <span className="font-serif text-2xl text-brand-brass font-light">02</span>
              <h4 className="font-serif text-xl text-brand-charcoal mt-3 mb-2 font-medium">
                Material Authenticity
              </h4>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light leading-relaxed">
                We favor natural oak, smoked walnut, fluted limestone, and brushed brass over synthetic
                imitations. We believe materials should age with character and grace over decades.
              </p>
            </div>

            <div className="p-6 bg-white border border-brand-sand/40">
              <span className="font-serif text-2xl text-brand-brass font-light">03</span>
              <h4 className="font-serif text-xl text-brand-charcoal mt-3 mb-2 font-medium">
                Radical Transparency
              </h4>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light leading-relaxed">
                Clear contracts, itemized bills of quantities, certified hardware guarantees, and
                unapologetic honesty. You always know what goes into your home and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Action */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 text-center">
        <h3 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
          Meet Our Architects in Vijayapura
        </h3>
        <p className="text-sm text-brand-charcoal/70 font-light max-w-lg mx-auto mt-3">
          We welcome you to visit our Jalnagar Road studio or schedule a site visit for your upcoming home or office.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-brand-charcoal text-white hover:bg-brand-brass transition-colors text-xs uppercase tracking-widest font-semibold"
          >
            Schedule Studio Walkthrough
          </Link>
          <a
            href={getWhatsAppUrl("Hello Global Interio, I would like to schedule a visit to your Jalnagar Road studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white border border-brand-sand/60 text-brand-charcoal hover:border-brand-brass transition-colors text-xs uppercase tracking-widest font-medium flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}
