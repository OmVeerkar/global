import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS_CONFIG } from "../data/config";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Our Process", to: "/process" },
    { label: "Contact", to: "/contact" }
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm border-b border-brand-sand/30 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
          {/* Left: Brand Monogram & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-brand-brass"
            aria-label="Global Interio Home"
          >
            {/* Architectural Monogram Icon */}
            <div className="w-10 h-10 rounded-sm bg-brand-charcoal flex items-center justify-center border border-brand-brass/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-lg font-bold tracking-tighter text-brand-ivory">
                G<span className="text-brand-brass">I</span>
              </span>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-semibold tracking-editorial leading-none transition-colors ${
                  isScrolled || !isHome ? "text-brand-charcoal" : "text-white drop-shadow-sm"
                }`}
              >
                GLOBAL INTERIO
              </span>
              <span
                className={`text-[9px] tracking-widest uppercase font-medium mt-0.5 transition-colors ${
                  isScrolled || !isHome ? "text-brand-walnut/70" : "text-brand-sand/80"
                }`}
              >
                Studio & Furniture • Vijayapura
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest font-medium transition-all duration-200 relative py-1 focus:outline-none focus:ring-1 focus:ring-brand-brass ${
                    isScrolled || !isHome
                      ? isActive
                        ? "text-brand-brass font-semibold"
                        : "text-brand-charcoal/80 hover:text-brand-brass"
                      : isActive
                      ? "text-brand-sand font-semibold"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-brass rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Consultation CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              onClick={onOpenConsultation}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 rounded-none shadow-sm ${
                isScrolled || !isHome
                  ? "bg-brand-charcoal text-brand-ivory hover:bg-brand-brass hover:text-white"
                  : "bg-white/90 text-brand-charcoal hover:bg-white hover:text-brand-brass backdrop-blur-sm"
              }`}
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`lg:hidden p-2 rounded-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-brass ${
                isScrolled || !isHome
                  ? "border-brand-sand/50 text-brand-charcoal bg-white/50"
                  : "border-white/30 text-white bg-black/20 backdrop-blur-sm"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-brand-charcoal text-brand-ivory lg:hidden flex flex-col justify-between pt-24 pb-12 px-8 overflow-y-auto animate-fadeIn"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] tracking-widest uppercase text-brand-brass font-semibold">
              Navigation
            </span>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl hover:text-brand-brass transition-colors flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-brass/60" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-4 pt-6 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center text-xs uppercase tracking-widest font-semibold bg-brand-brass text-white hover:bg-brand-gold transition-colors"
            >
              Request Design Consultation
            </Link>

            <div className="flex flex-col gap-1 text-xs text-brand-sand/70">
              <span className="font-medium text-white">{BUSINESS_CONFIG.experienceCentreAddress.line1}</span>
              <span>{BUSINESS_CONFIG.experienceCentreAddress.landmark}, Vijayapura</span>
              <span className="text-[11px] text-brand-sand/50 mt-1">KIADB In-House Furniture Unit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
