import React, { useEffect } from "react";
import { ProcessSection } from "../components/ProcessSection";
import { ShieldCheck, Clock, Award, Hammer, Wrench, CheckCircle2 } from "lucide-react";

export function Process() {
  useEffect(() => {
    document.title = "Our Process | Global Interio — Transparent Design & Execution";
    window.scrollTo(0, 0);
  }, []);

  const qualityStandards = [
    {
      title: "IS 710 Marine Grade Plywood",
      desc: "Waterproof, borer & termite-proof core construction for modular kitchens and vanity cabinets."
    },
    {
      title: "German Hardware Warranties",
      desc: "Blum and Hafele hinges and lift systems backed by multi-year manufacturer warranties."
    },
    {
      title: "40-Point Quality Handover Audit",
      desc: "Every shutter alignment, soft-close dampening, silicone seal, and lighting cove undergoes rigorous inspection."
    },
    {
      title: "Direct Factory Accountability",
      desc: "Manufactured at our own KIADB industrial unit in Vijayapura with strict quality control before site delivery."
    }
  ];

  return (
    <main className="pt-28 pb-24 bg-brand-ivory text-brand-charcoal min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Workflow & Standards
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-charcoal font-normal leading-[1.12]">
            Architectural Discipline From <span className="italic font-light">Concept to Handover.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-charcoal/80 font-light leading-relaxed">
            We follow a structured 6-phase journey that removes uncertainty, guarantees budget adherence,
            and ensures meticulous execution.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessSection />

      {/* Quality Standards Guarantee */}
      <section className="py-20 bg-white border-y border-brand-sand/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut block mb-2">
              Quality Assurance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
              Engineered to Endure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((std, i) => (
              <div key={i} className="p-6 bg-brand-ivory/50 border border-brand-sand/40">
                <ShieldCheck className="w-6 h-6 text-brand-brass mb-4" />
                <h4 className="font-serif text-lg text-brand-charcoal font-medium mb-2">
                  {std.title}
                </h4>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
