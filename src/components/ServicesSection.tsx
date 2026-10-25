import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES_DATA, ServiceItem } from "../data/services";
import { ArrowUpRight, CheckCircle2, Layers, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../data/config";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleEnquire = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const msg = `Hello Global Interio, I am interested in your "${service.title}" services in Vijayapura. Please share more details and layout consultation options.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Our Capabilities
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal font-normal">
            Bespoke Interior & <span className="italic font-light">Furniture Services.</span>
          </h2>
          <p className="mt-4 text-base text-brand-charcoal/70 font-light leading-relaxed">
            From precision modular kitchens to complete turnkey villas, each service reflects deep architectural
            discipline and factory-grade woodworking.
          </p>
        </div>

        {/* 8 Services Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col bg-brand-ivory/50 border border-brand-sand/30 hover:border-brand-brass transition-all duration-500 shadow-sm hover:shadow-luxury-hover overflow-hidden"
            >
              {/* Service Image with Zoom Effect */}
              <div className="relative h-60 overflow-hidden bg-brand-sand/20">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Tag & Number */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 bg-brand-charcoal/85 text-brand-ivory backdrop-blur-sm border border-brand-brass/30">
                    {service.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3 text-xs font-serif text-brand-ivory/70">
                  0{index + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-brand-sand font-medium block">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-white font-medium">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-brand-sand/30">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-brass shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-brand-sand/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-medium text-brand-charcoal hover:text-brand-brass flex items-center gap-1 transition-colors"
                  >
                    <span>View Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleEnquire(service)}
                    className="px-3 py-1.5 bg-brand-charcoal text-brand-ivory hover:bg-brand-brass transition-colors text-[11px] uppercase tracking-wider font-medium flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3 text-brand-brass" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Page Link */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-ivory border border-brand-sand/60 text-brand-charcoal hover:border-brand-brass hover:text-brand-brass transition-all duration-300 text-xs uppercase tracking-widest font-semibold shadow-sm"
          >
            <span>Explore All 8 Service Specifications & Layout Options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-charcoal/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="bg-white max-w-2xl w-full border border-brand-sand/50 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-brass font-semibold">
                  {activeModalService.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal mt-1">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-1.5 border border-brand-sand/40 hover:bg-brand-ivory text-brand-charcoal transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="h-56 sm:h-64 overflow-hidden mb-6">
              <img
                src={activeModalService.imageUrl}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light mb-6">
              {activeModalService.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-3">
                Key Deliverables & Engineering
              </h4>
              <ul className="space-y-2">
                {activeModalService.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal/75">
                    <CheckCircle2 className="w-4 h-4 text-brand-brass shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 p-4 bg-brand-ivory border border-brand-sand/30">
              <span className="text-[10px] uppercase tracking-widest text-brand-walnut font-bold block mb-2">
                Materials & Hardware Included
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModalService.materialsIncluded.map((mat, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white px-2.5 py-1 border border-brand-sand/40 text-brand-charcoal/80"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-sand/30">
              <button
                onClick={() => {
                  const s = activeModalService;
                  setActiveModalService(null);
                  handleEnquire(s);
                }}
                className="flex-1 py-3 px-6 bg-brand-charcoal text-white hover:bg-brand-brass transition-colors text-xs uppercase tracking-widest font-semibold text-center"
              >
                Enquire On WhatsApp
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-6 border border-brand-sand/60 text-brand-charcoal text-xs uppercase tracking-widest font-medium hover:bg-brand-ivory transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
