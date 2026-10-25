import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { PROJECTS_DATA, PROJECT_CATEGORIES, ProjectItem } from "../data/projects";
import { getWhatsAppUrl } from "../data/config";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle,
  Sparkles,
  ArrowRight,
  MessageSquare,
  MapPin,
  Calendar
} from "lucide-react";

export function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Filter projects by category
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === "All Projects") return true;
    return project.category === selectedCategory;
  });

  // Open Lightbox
  const handleOpenLightbox = (project: ProjectItem, imageIndex = 0) => {
    setActiveProject(project);
    setCurrentImageIndex(imageIndex);
  };

  // Close Lightbox
  const handleCloseLightbox = useCallback(() => {
    setActiveProject(null);
    setCurrentImageIndex(0);
  }, []);

  // Previous Image in Lightbox
  const handlePrevImage = useCallback(() => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeProject.galleryImages.length - 1 : prev - 1
    );
  }, [activeProject]);

  // Next Image in Lightbox
  const handleNextImage = useCallback(() => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) =>
      prev === activeProject.galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [activeProject]);

  // Keyboard navigation (Escape to close, Arrows to paginate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, handleCloseLightbox, handlePrevImage, handleNextImage]);

  // WhatsApp enquiry for specific project
  const handleProjectEnquiry = (project: ProjectItem) => {
    const msg = `Hello Global Interio, I am interested in a project similar to "${project.title}" (${project.category}) located in ${project.location}. Please share consultation availability.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-brass" />
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
                Portfolio of Works
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal font-normal">
              Curated <span className="italic font-light">Spaces & Architecture.</span>
            </h2>
            <p className="mt-3 text-base text-brand-charcoal/70 font-light max-w-xl">
              Explore residential villas, modular kitchens, luxury bedrooms, and custom furniture
              engineered in Vijayapura.
            </p>
          </div>

          <div className="text-xs text-brand-charcoal/60 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Showing verified studio projects & design studies</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-brand-sand/40">
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-all rounded-none ${
                  isActive
                    ? "bg-brand-charcoal text-white shadow-sm"
                    : "bg-white/60 text-brand-charcoal/70 hover:text-brand-charcoal hover:bg-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white border border-brand-sand/40 hover:border-brand-brass transition-all duration-500 shadow-luxury overflow-hidden"
            >
              {/* Cover Image Container */}
              <div
                className="relative h-72 sm:h-80 overflow-hidden cursor-pointer bg-brand-charcoal"
                onClick={() => handleOpenLightbox(project, 0)}
              >
                <img
                  src={project.coverImage}
                  alt={`${project.title} - ${project.category} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-semibold bg-white/90 text-brand-charcoal backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.isVerifiedWork ? (
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold bg-emerald-800/90 text-white backdrop-blur-sm flex items-center gap-1">
                      <CheckCircle className="w-2.5 h-2.5" />
                      Verified
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium bg-brand-charcoal/80 text-brand-sand/90 backdrop-blur-sm">
                      Studio Concept
                    </span>
                  )}
                </div>

                {/* Maximize Hover Icon */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-brand-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4 text-brand-brass" />
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-3 left-4 text-white text-xs flex items-center gap-1.5 font-light">
                  <MapPin className="w-3.5 h-3.5 text-brand-brass" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/60 mb-1">
                    <span>{project.area}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3
                    onClick={() => handleOpenLightbox(project, 0)}
                    className="font-serif text-xl sm:text-2xl text-brand-charcoal hover:text-brand-brass transition-colors cursor-pointer font-medium"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-charcoal/70 font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Materials Tags & View Action */}
                <div className="pt-4 mt-4 border-t border-brand-sand/30 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1 max-w-[65%]">
                    {project.materials.slice(0, 2).map((mat, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-brand-ivory px-2 py-0.5 text-brand-charcoal/75 border border-brand-sand/40 truncate"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenLightbox(project, 0)}
                    className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal hover:text-brand-brass flex items-center gap-1 transition-colors"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Page Button */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-charcoal text-brand-ivory hover:bg-brand-brass transition-all duration-300 text-xs uppercase tracking-widest font-semibold shadow-luxury"
          >
            <span>View Complete Vijayapura Project Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Full-Screen Architectural Image Lightbox & Details Drawer */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-md flex flex-col justify-between text-white animate-fadeIn"
        >
          {/* Lightbox Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg sm:text-xl text-brand-ivory">
                {activeProject.title}
              </span>
              <span className="text-xs text-brand-brass uppercase tracking-widest hidden sm:inline">
                • {activeProject.category}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-white/60">
                {currentImageIndex + 1} / {activeProject.galleryImages.length}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="p-2 border border-white/20 hover:border-brand-brass text-white hover:text-brand-brass transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Body (Center Image & Drawer) */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center relative p-4 sm:p-8 overflow-hidden gap-6">
            {/* Previous Image Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 z-20 p-3 bg-black/40 hover:bg-black/80 border border-white/20 rounded-full text-white transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Central High-Res Image */}
            <div className="flex-1 max-w-4xl max-h-[70vh] flex items-center justify-center">
              <img
                src={activeProject.galleryImages[currentImageIndex]}
                alt={`${activeProject.title} view ${currentImageIndex + 1}`}
                className="max-w-full max-h-[68vh] object-contain shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next Image Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 lg:right-[380px] z-20 p-3 bg-black/40 hover:bg-black/80 border border-white/20 rounded-full text-white transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Project Details Sidebar Drawer (Desktop) */}
            <div className="w-full lg:w-80 bg-brand-charcoal/90 border border-white/10 p-6 flex flex-col justify-between max-h-[70vh] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between text-xs text-brand-sand/70 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-brass" />
                    {activeProject.location}
                  </span>
                  <span>{activeProject.year}</span>
                </div>

                <h4 className="font-serif text-2xl text-white mb-2">
                  {activeProject.title}
                </h4>
                <p className="text-xs text-brand-sand leading-relaxed mb-4">
                  {activeProject.description}
                </p>

                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-brand-brass font-bold block mb-2">
                    Materials & Specifications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.materials.map((m, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white/10 px-2 py-0.5 text-brand-ivory border border-white/10"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.notes && (
                  <p className="text-[11px] text-white/50 italic border-t border-white/10 pt-3">
                    {activeProject.notes}
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-white/10 mt-4">
                <button
                  onClick={() => handleProjectEnquiry(activeProject)}
                  className="w-full py-3 bg-brand-brass hover:bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for Similar Space</span>
                </button>
              </div>
            </div>
          </div>

          {/* Lightbox Bottom Thumbnail Strip */}
          <div className="p-4 border-t border-white/10 flex items-center justify-center gap-3 overflow-x-auto">
            {activeProject.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-12 overflow-hidden border transition-all ${
                  currentImageIndex === idx
                    ? "border-brand-brass scale-105"
                    : "border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
