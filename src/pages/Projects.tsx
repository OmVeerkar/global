import React, { useEffect } from "react";
import { ProjectGallery } from "../components/ProjectGallery";

export function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Global Interio — Completed Projects in Vijayapura";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-24 bg-brand-ivory text-brand-charcoal min-h-screen">
      {/* Portfolio Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Our Portfolio
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-brand-charcoal font-normal leading-[1.12]">
            Architectural Projects & <span className="italic font-light">Custom Spaces.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-brand-charcoal/80 font-light leading-relaxed">
            A comprehensive look at our living rooms, modular kitchens, luxury bedroom suites,
            walk-in wardrobes, and commercial interiors in Vijayapura and North Karnataka.
          </p>
        </div>
      </section>

      {/* Embedded Project Gallery with Lightbox & Category Filters */}
      <ProjectGallery />
    </main>
  );
}
