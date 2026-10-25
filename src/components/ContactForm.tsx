import React, { useState } from "react";
import confetti from "canvas-confetti";
import { BUSINESS_CONFIG, generateConsultationWhatsAppMessage, getWhatsAppUrl } from "../data/config";
import {
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ArrowRight
} from "lucide-react";

export interface FormDataState {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  propertyType: string;
  approxArea: string;
  budgetRange: string;
  preferredStyle: string;
  projectLocation: string;
  description: string;
  preferredContact: "WhatsApp" | "Phone Call" | "Visit Studio";
}

const INITIAL_FORM: FormDataState = {
  fullName: "",
  phone: "",
  email: "",
  projectType: "Full Home Interiors",
  propertyType: "Independent House / Villa",
  approxArea: "",
  budgetRange: "₹10 Lakh – ₹25 Lakh",
  preferredStyle: "Contemporary Luxury",
  projectLocation: "Vijayapura",
  description: "",
  preferredContact: "WhatsApp"
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>("");

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormDataState, string>> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name (at least 2 characters).";
    }
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.projectLocation.trim()) {
      errs.projectLocation = "Please specify the project location or city.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Form structured WhatsApp message
    const waText = generateConsultationWhatsAppMessage({
      name: formData.fullName,
      phone: formData.phone,
      projectType: formData.projectType,
      propertyType: `${formData.propertyType} (${formData.preferredStyle})`,
      approxArea: formData.approxArea,
      budgetRange: formData.budgetRange,
      location: formData.projectLocation,
      description: formData.description
        ? `${formData.description} [Preferred Contact: ${formData.preferredContact}]`
        : `Preferred contact: ${formData.preferredContact}`
    });

    const waUrl = getWhatsAppUrl(waText);
    setSubmittedWhatsAppUrl(waUrl);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    // Direct user to open WhatsApp or review summary
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(waUrl, "_blank");
    }, 600);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-brand-brass" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-walnut">
              Connect With Us
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal font-normal">
            Request an Interior <span className="italic font-light">Consultation.</span>
          </h2>
          <p className="mt-4 text-base text-brand-charcoal/70 font-light leading-relaxed">
            Fill in your project requirements below. Your enquiry will generate a detailed consultation
            brief sent directly to our design team via WhatsApp and studio dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-brand-sand/40 shadow-luxury">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 border border-emerald-200">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-brand-charcoal font-normal">
                  Consultation Brief Prepared
                </h3>
                <p className="text-sm text-brand-charcoal/70 mt-3 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="font-medium text-brand-charcoal">{formData.fullName}</span>.
                  Your request has been routed to our WhatsApp desk. If the WhatsApp window did not open
                  automatically, click the button below:
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={submittedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 border border-brand-sand/60 text-brand-charcoal hover:bg-brand-ivory text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Full Name <span className="text-brand-brass">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Anand Patil"
                      className={`w-full px-4 py-3 bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName ? "border-red-400 ring-1 ring-red-400" : "border-brand-sand/50 focus:border-brand-brass"
                      }`}
                      required
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Phone Number <span className="text-brand-brass">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:bg-white focus:outline-none transition-colors ${
                        errors.phone ? "border-red-400 ring-1 ring-red-400" : "border-brand-sand/50 focus:border-brand-brass"
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email (Optional) & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Email Address <span className="text-brand-charcoal/40 lowercase text-[10px]">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@example.com"
                      className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-sand/50 text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:bg-white focus:border-brand-brass focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Project Location / City <span className="text-brand-brass">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Solapur Road, Vijayapura"
                      className={`w-full px-4 py-3 bg-brand-ivory/50 border text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:bg-white focus:outline-none transition-colors ${
                        errors.projectLocation ? "border-red-400 ring-1 ring-red-400" : "border-brand-sand/50 focus:border-brand-brass"
                      }`}
                      required
                    />
                    {errors.projectLocation && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectLocation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-sand/50 text-sm text-brand-charcoal focus:bg-white focus:border-brand-brass focus:outline-none transition-colors"
                    >
                      <option value="Full Home Interiors">Full Home Interiors</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Wardrobe">Wardrobe & Closets</option>
                      <option value="Commercial Interiors">Commercial Interiors</option>
                      <option value="Custom Furniture">Custom Furniture</option>
                      <option value="Other">Other Interior Work</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-sand/50 text-sm text-brand-charcoal focus:bg-white focus:border-brand-brass focus:outline-none transition-colors"
                    >
                      <option value="Independent House / Villa">Independent House / Villa</option>
                      <option value="2 BHK / 3 BHK Apartment">2 BHK / 3 BHK Apartment</option>
                      <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="New Construction (Grey Structure)">New Construction</option>
                    </select>
                  </div>
                </div>

                {/* Area & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Approximate Area <span className="text-brand-charcoal/40 lowercase text-[10px]">(sq. ft)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.approxArea}
                      onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                      placeholder="e.g. 2,400"
                      className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-sand/50 text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:bg-white focus:border-brand-brass focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-sand/50 text-sm text-brand-charcoal focus:bg-white focus:border-brand-brass focus:outline-none transition-colors"
                    >
                      <option value="Under ₹5 Lakh (Modular / Select Room)">Under ₹5 Lakh</option>
                      <option value="₹5 Lakh – ₹10 Lakh">₹5 Lakh – ₹10 Lakh</option>
                      <option value="₹10 Lakh – ₹25 Lakh">₹10 Lakh – ₹25 Lakh</option>
                      <option value="₹25 Lakh – ₹50 Lakh+">₹25 Lakh – ₹50 Lakh+</option>
                      <option value="Need Advice / Estimation First">Need Guidance / Estimate</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                    Project Vision or Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your space, preferred materials (e.g. walnut, acrylic kitchen), timeline, or questions..."
                    className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-sand/50 text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:bg-white focus:border-brand-brass focus:outline-none transition-colors"
                  />
                </div>

                {/* Preferred Contact Mode */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-brand-charcoal mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {(["WhatsApp", "Phone Call", "Visit Studio"] as const).map((method) => (
                      <label
                        key={method}
                        className={`flex items-center gap-2 px-4 py-2 border cursor-pointer text-xs transition-all ${
                          formData.preferredContact === method
                            ? "bg-brand-charcoal text-white border-brand-charcoal"
                            : "bg-brand-ivory/50 text-brand-charcoal/80 border-brand-sand/50 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={() => setFormData({ ...formData, preferredContact: method })}
                          className="sr-only"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-brand-brass hover:bg-brand-gold text-white font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-luxury flex items-center justify-center gap-2 rounded-none disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Formatting Consultation Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Consultation Enquiry via WhatsApp</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-brand-charcoal/60 text-center mt-3">
                    Your request generates a verified WhatsApp consultation message. No spam, guaranteed privacy.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Verified Studio Locations & Direct Contacts (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Experience Centre Card */}
            <div className="bg-white p-8 border border-brand-sand/40 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-brass mb-3">
                <MapPin className="w-4 h-4" />
                <span>Experience Centre & Studio</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-charcoal">
                Jalnagar Road Studio
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/75 mt-2 font-light leading-relaxed">
                {BUSINESS_CONFIG.experienceCentreAddress.line1}, {BUSINESS_CONFIG.experienceCentreAddress.landmark},
                {" "}{BUSINESS_CONFIG.experienceCentreAddress.city}, {BUSINESS_CONFIG.experienceCentreAddress.state} — {BUSINESS_CONFIG.experienceCentreAddress.pincode}
              </p>
              <div className="mt-4 pt-4 border-t border-brand-sand/30 flex items-center justify-between">
                <a
                  href={BUSINESS_CONFIG.experienceCentreAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-brass transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-emerald-600 font-medium">Open Today</span>
              </div>
            </div>

            {/* Factory Facility Card */}
            <div className="bg-white p-8 border border-brand-sand/40 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-brass mb-3">
                <MapPin className="w-4 h-4" />
                <span>Manufacturing Facility</span>
              </div>
              <h3 className="font-serif text-2xl text-brand-charcoal">
                KIADB Furniture Factory
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/75 mt-2 font-light leading-relaxed">
                {BUSINESS_CONFIG.factoryAddress.line1}, {BUSINESS_CONFIG.factoryAddress.area},
                {" "}{BUSINESS_CONFIG.factoryAddress.city}, {BUSINESS_CONFIG.factoryAddress.state} — {BUSINESS_CONFIG.factoryAddress.pincode}
              </p>
              <p className="text-[11px] text-brand-charcoal/60 mt-2 italic">
                Precision modular manufacturing, edge-banding, and CNC woodworking.
              </p>
            </div>

            {/* Studio Hours & Socials */}
            <div className="bg-brand-charcoal text-white p-8 border border-brand-brass/30">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-brass mb-4">
                <Clock className="w-4 h-4" />
                <span>Studio Working Hours</span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-brand-sand/90">
                <p>{BUSINESS_CONFIG.businessHours.weekdays}</p>
                <p>{BUSINESS_CONFIG.businessHours.sunday}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-sand/60 block">
                    Follow Studio Updates
                  </span>
                  <a
                    href={BUSINESS_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-brand-brass hover:text-white transition-colors mt-1 font-medium"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@global_interio_vijayapura</span>
                  </a>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-colors"
                  title="WhatsApp Global Interio"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
