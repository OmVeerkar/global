import React, { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";

export function Contact() {
  useEffect(() => {
    document.title = "Contact & Studio Visit | Global Interio Vijayapura";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-12 bg-brand-ivory text-brand-charcoal min-h-screen">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Get In Touch
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-charcoal font-normal leading-[1.12]">
            Visit Our Studio or <span className="italic font-light">Enquire Online.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-charcoal/80 font-light leading-relaxed">
            Whether you have an upcoming apartment handover, an independent villa under construction,
            or a commercial space in Vijayapura, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Embedded Contact Form & Location Details */}
      <ContactForm />
    </main>
  );
}
