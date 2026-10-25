import React from "react";
import { Check, Shield, Layers, Eye, Sparkles, Sliders, Wrench } from "lucide-react";

export function WhyChooseUs() {
  const genuineBenefits = [
    {
      title: "Direct In-House Factory Fabrication",
      description: "Unlike design agencies that outsource carpentry to third-party contractors, our custom furniture and modular kitchens are manufactured at our own KIADB industrial facility in Vijayapura.",
      icon: Wrench
    },
    {
      title: "Thoughtful Ergonomics & Space Planning",
      description: "Every room is planned around your natural daily routines. We prioritize conversational seating, uncluttered walking paths, and maximized natural lighting.",
      icon: Sliders
    },
    {
      title: "Authentic Material Honesty",
      description: "We work with genuine marine-grade plywood (IS 710), anti-scratch acrylics, certified German hardware (Blum & Hafele), and natural stone veneers without deceptive substitutes.",
      icon: Layers
    },
    {
      title: "Transparent Specifications & BOQ",
      description: "You receive an itemized breakdown of materials, brands, thicknesses, and hardware mechanisms before any work begins, eliminating hidden costs.",
      icon: Shield
    },
    {
      title: "3D Visualization Before Execution",
      description: "You see and approve every view in accurate 3D, avoiding costly on-site modifications and ensuring the finished space matches your expectations.",
      icon: Eye
    },
    {
      title: "Dedicated Local Studio Support",
      description: "Located right on Jalnagar Road in Vijayapura, our team is directly accessible for walkthroughs, material touch-and-feel sessions, and after-handover service.",
      icon: Sparkles
    }
  ];

  const materialSwatches = [
    {
      name: "Natural White Oak Veneer",
      type: "Architectural Wood",
      image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=400&q=80",
      notes: "Sourced for subtle linear grain and warm golden warmth."
    },
    {
      name: "Italian Calacatta Quartz",
      type: "Countertops & Vanities",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
      notes: "Stain-resistant, non-porous luxury surface."
    },
    {
      name: "Fluted Charcoal Timber",
      type: "Accent Paneling",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
      notes: "Tactile acoustic relief panels for media walls."
    },
    {
      name: "Muted Brushed Brass",
      type: "Hardware & Reveal Trims",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
      notes: "Warm metallic accents that age gracefully."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Our Principles
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal font-normal">
            Why Homeowners in Vijayapura <span className="italic font-light">Trust Us.</span>
          </h2>
          <p className="mt-4 text-base text-brand-charcoal/70 font-light leading-relaxed">
            We focus on genuine craftsmanship, transparent communication, and enduring materials
            rather than marketing gimmicks.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {genuineBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-brand-ivory/40 border border-brand-sand/40 hover:border-brand-brass transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white border border-brand-sand/40 flex items-center justify-center text-brand-brass mb-6 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal mb-2 font-medium">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Design Philosophy & Material Palette Showcase */}
        <div className="bg-brand-charcoal text-white p-8 sm:p-14 lg:p-16 border border-brand-brass/30 shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Editorial Philosophy (6 Cols) */}
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-3">
                Our Design Philosophy
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-brand-ivory">
                "Architecture is not just about buildings, but about the quality of life inside them."
              </h3>
              <p className="mt-6 text-sm text-brand-sand/80 font-light leading-relaxed">
                At Global Interio, we reject fleeting trends in favor of timeless proportions, natural materials,
                and ergonomic calm. A well-designed interior shouldn't feel staged for photographs; it should feel
                effortlessly inviting every single morning.
              </p>
              <div className="mt-8 flex items-center gap-4 text-xs text-brand-sand/60">
                <span className="w-6 h-[1px] bg-brand-brass" />
                <span>Global Interio Architectural Studio • Vijayapura, Karnataka</span>
              </div>
            </div>

            {/* Right: Tactile Material Palette (6 Cols) */}
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-4">
                The Tactile Material Palette
              </span>
              <div className="grid grid-cols-2 gap-4">
                {materialSwatches.map((swatch, i) => (
                  <div
                    key={i}
                    className="group bg-white/5 border border-white/10 p-3.5 hover:border-brand-brass/60 transition-colors"
                  >
                    <div className="h-28 overflow-hidden mb-3 bg-black/40">
                      <img
                        src={swatch.image}
                        alt={swatch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-brand-brass block">
                      {swatch.type}
                    </span>
                    <h5 className="font-serif text-sm text-white font-medium mt-0.5 truncate">
                      {swatch.name}
                    </h5>
                    <p className="text-[11px] text-white/60 font-light mt-1 line-clamp-2">
                      {swatch.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
