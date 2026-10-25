import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES_DATA, ServiceItem } from "../data/services";
import { getWhatsAppUrl } from "../data/config";
import { CheckCircle2, ArrowRight, MessageSquare, Layers, Sparkles } from "lucide-react";

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  useEffect(() => {
    document.title = "Services | Global Interio — Modular Kitchens, Wardrobes & Interiors";
    window.scrollTo(0, 0);
  }, []);

  const handleEnquireService = (service: ServiceItem) => {
    const msg = `Hello Global Interio, I am interested in your ${service.title} services in Vijayapura. Please share specifications and estimate guidelines.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <main className="pt-28 pb-24 bg-brand-ivory text-brand-charcoal">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              What We Create
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-charcoal font-normal leading-[1.12]">
            Comprehensive Interior Architecture & <span className="italic font-light">Custom Furniture.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-charcoal/80 font-light leading-relaxed">
            Every service is backed by architectural space planning, 3D visualization, and in-house
            fabrication at our KIADB Vijayapura facility.
          </p>
        </div>
      </section>

      {/* Services List Detailed Deep-Dive */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24 mb-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side (6 cols) */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative overflow-hidden shadow-luxury border border-brand-sand/40">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 bg-brand-charcoal/90 text-white backdrop-blur-sm">
                      0{index + 1} • {service.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side (6 cols) */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-brass block mb-1">
                  {service.subtitle}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-light">
                  {service.fullDescription}
                </p>

                {/* Engineering Highlights */}
                <div className="mt-6 pt-6 border-t border-brand-sand/40">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal block mb-3">
                    Key Deliverables & Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/75">
                        <CheckCircle2 className="w-4 h-4 text-brand-brass shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials Included */}
                <div className="mt-6 p-4 bg-brand-linen border border-brand-sand/40">
                  <span className="text-[10px] uppercase tracking-widest text-brand-walnut font-bold block mb-2">
                    Materials & Finishes Specified:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.materialsIncluded.map((mat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white px-2.5 py-1 border border-brand-sand/30 text-brand-charcoal/80"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleEnquireService(service)}
                    className="px-6 py-3 bg-brand-charcoal text-white hover:bg-brand-brass transition-colors text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire About {service.title}</span>
                  </button>
                  <Link
                    to="/contact"
                    className="text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-brass transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Site Survey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Direct CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 text-center pt-12 border-t border-brand-sand/40">
        <h3 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
          Require a Multi-Room or Complete Villa Project?
        </h3>
        <p className="text-sm text-brand-charcoal/70 font-light max-w-lg mx-auto mt-3">
          We offer turnkey coordination across civil work, modular carpentry, ceiling, electrical, and painting.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="px-8 py-4 bg-brand-brass text-white hover:bg-brand-gold transition-colors text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2"
          >
            <span>Book Turnkey Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
