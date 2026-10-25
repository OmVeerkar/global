import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquareText,
  Compass,
  Palette,
  Calculator,
  Hammer,
  KeyRound,
  ArrowRight
} from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation & Discovery",
    subtitle: "Understanding Your Vision",
    description: "We meet at our Jalnagar Road Experience Centre or your site in Vijayapura to understand your lifestyle, aesthetic aspirations, space dimensions, and investment goals.",
    icon: MessageSquareText,
    deliverables: ["Lifestyle questionnaire", "Site measurement survey", "Initial style moodboard"]
  },
  {
    number: "02",
    title: "Space Planning & Zoning",
    subtitle: "Ergonomics & Circulation",
    description: "Developing detailed 2D floor plans, furniture placement diagrams, and spatial zoning to ensure every square foot serves a clear functional purpose.",
    icon: Compass,
    deliverables: ["2D architectural floor layout", "Electrical & plumbing marking plan", "Circulation flow assessment"]
  },
  {
    number: "03",
    title: "3D Design & Material Selection",
    subtitle: "Tactile Experience & Previews",
    description: "Experience photorealistic 3D renders of your rooms and touch actual material swatches (Italian marble, smoked veneers, acrylic finishes, and German hardware) in person.",
    icon: Palette,
    deliverables: ["High-resolution 3D room renders", "Physical material palette board", "Custom lighting & false ceiling design"]
  },
  {
    number: "04",
    title: "Planning & Detailed Estimation",
    subtitle: "Transparent Budgeting",
    description: "We deliver an itemized bill of quantities with honest pricing, clearly defining every wood grade, hardware brand, fabric, and milestone timeline with zero surprises.",
    icon: Calculator,
    deliverables: ["Itemized BOQ & material specifications", "Production schedule roadmap", "Contractual delivery milestone dates"]
  },
  {
    number: "05",
    title: "Factory Craftsmanship & Execution",
    subtitle: "In-House Precision",
    description: "Modular cabinetry and customized furniture are precision-machined in our KIADB Vijayapura manufacturing facility while on-site civil and electrical works proceed seamlessly.",
    icon: Hammer,
    deliverables: ["Factory-finished modular panels", "Dedicated site supervisor monitoring", "Weekly photographic progress updates"]
  },
  {
    number: "06",
    title: "Quality Audit & Handover",
    subtitle: "Your Move-In Ready Home",
    description: "A comprehensive 40-point quality audit, deep professional cleaning, hardware alignment check, and official key handover with warranty certificates.",
    icon: KeyRound,
    deliverables: ["Final walkthrough & quality sign-off", "Hardware manufacturer warranties", "Care & maintenance guidebook"]
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-brand-linen relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Our Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal font-normal">
            A Transparent, <span className="italic font-light">Considered Process.</span>
          </h2>
          <p className="mt-4 text-base text-brand-charcoal/70 font-light leading-relaxed">
            From your first coffee at our Vijayapura studio to the day you unlock your door,
            every step is engineered for peace of mind, punctuality, and lasting quality.
          </p>
        </div>

        {/* 6 Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-8 border border-brand-sand/40 hover:border-brand-brass transition-all duration-300 shadow-sm hover:shadow-luxury flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-brand-brass/80 group-hover:text-brand-brass transition-colors">
                      Step {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-ivory border border-brand-sand/40 flex items-center justify-center text-brand-charcoal group-hover:bg-brand-brass group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-brand-walnut/70 font-medium block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-brand-charcoal font-medium mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-sand/30">
                  <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-brand-charcoal/70 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-brass" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Callout */}
        <div className="mt-16 p-8 bg-brand-ivory border border-brand-sand/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <h4 className="font-serif text-xl sm:text-2xl text-brand-charcoal">
              Ready to begin your spatial transformation?
            </h4>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 font-light mt-1">
              Book an initial walkthrough with our interior design architects at our Jalnagar Road Studio.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-brand-charcoal text-white hover:bg-brand-brass transition-colors text-xs uppercase tracking-widest font-semibold flex items-center gap-2 whitespace-nowrap"
          >
            <span>Book Design Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
