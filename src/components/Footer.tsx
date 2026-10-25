import React from "react";
import { Link } from "react-router-dom";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../data/config";
import { SERVICES_DATA } from "../data/services";
import { Instagram, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-ivory border-t border-brand-sand/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-sm bg-brand-ivory flex items-center justify-center text-brand-charcoal font-serif font-bold text-lg">
                G<span className="text-brand-brass">I</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-medium tracking-editorial text-white block">
                  GLOBAL INTERIO
                </span>
                <span className="text-[9px] tracking-widest uppercase text-brand-sand/70 block">
                  Studio & Custom Furniture • Vijayapura
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-brand-sand/75 font-light leading-relaxed max-w-sm mt-4">
              A bespoke interior architecture studio and furniture manufacturer based in Vijayapura,
              Karnataka. Crafting warm, contemporary residential and commercial environments made for living.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-brass border border-white/10 flex items-center justify-center text-brand-sand hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-600 border border-white/10 flex items-center justify-center text-brand-sand hover:text-white transition-colors"
                aria-label="WhatsApp Enquiries"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-brand-sand/80 font-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Studio</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">Our Process</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Visit</Link>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-4">
              Specialties
            </span>
            <ul className="space-y-2 text-xs text-brand-sand/80 font-light">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-white transition-colors flex items-center justify-between">
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-4">
              Studio & Factory
            </span>
            <div className="space-y-4 text-xs text-brand-sand/80 font-light">
              <div>
                <span className="text-white font-medium block">Experience Centre:</span>
                <p className="mt-0.5 leading-relaxed">
                  {BUSINESS_CONFIG.experienceCentreAddress.line1}, {BUSINESS_CONFIG.experienceCentreAddress.landmark}, Vijayapura, Karnataka — 586101
                </p>
                <a
                  href={BUSINESS_CONFIG.experienceCentreAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-brand-brass hover:underline mt-1"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div>
                <span className="text-white font-medium block">Manufacturing Unit:</span>
                <p className="mt-0.5 leading-relaxed">
                  {BUSINESS_CONFIG.factoryAddress.line1}, {BUSINESS_CONFIG.factoryAddress.area}, Vijayapura — 586104
                </p>
              </div>

              <div>
                <span className="text-white font-medium block">Working Hours:</span>
                <p className="mt-0.5">{BUSINESS_CONFIG.businessHours.weekdays}</p>
                <p>{BUSINESS_CONFIG.businessHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sand/60 font-light">
          <div>
            © {currentYear} {BUSINESS_CONFIG.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link to="/contact" className="hover:text-brand-ivory transition-colors">
              Privacy & Data Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-brand-ivory transition-colors">
              Consultation Terms
            </Link>
            <span className="text-white/20">•</span>
            <span>Vijayapura, Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
