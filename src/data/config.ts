/**
 * GLOBAL INTERIO — Centralized Business Configuration
 * Edit business details, verified contact information, and social links in this file.
 */

export interface BusinessConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  eyebrow: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  experienceCentreAddress: {
    line1: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    googleMapsUrl: string;
  };
  factoryAddress: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
  };
  contacts: {
    // Digits only with country code (e.g. 91 for India).
    // REPLACE THIS with the verified business WhatsApp number when confirmed.
    whatsappNumber: string;
    isWhatsappVerified: boolean;
    displayPhone: string;
    displayEmail: string;
  };
  socials: {
    instagram: string;
    facebook?: string;
    pinterest?: string;
  };
  businessHours: {
    weekdays: string;
    sunday: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: "GLOBAL INTERIO",
  shortName: "Global Interio",
  tagline: "Spaces That Feel Like You.",
  eyebrow: "INTERIOR DESIGN • VIJAYAPURA",
  locationCity: "Vijayapura",
  locationState: "Karnataka",
  locationCountry: "India",
  experienceCentreAddress: {
    line1: "2nd Floor, Domino's Building",
    landmark: "Jalnagar Road / Solapur Road",
    city: "Vijayapura",
    state: "Karnataka",
    pincode: "586101",
    googleMapsUrl: "https://maps.google.com/?q=Jalnagar+Road+Vijayapura+Karnataka"
  },
  factoryAddress: {
    line1: "Plot No. 42, In-House Furniture Manufacturing Unit",
    area: "KIADB Mahalbagayat Industrial Area",
    city: "Vijayapura",
    state: "Karnataka",
    pincode: "586104"
  },
  contacts: {
    // Centralized editable WhatsApp number (India format: 91 + 10 digits)
    // NOTE FOR OWNER: Replace '919876543210' with your official business WhatsApp number.
    whatsappNumber: "919876543210",
    isWhatsappVerified: false, // Flag to indicate whether owner confirmed direct phone
    displayPhone: "+91 98765 43210",
    displayEmail: "info@globalinterio.com"
  },
  socials: {
    instagram: "https://www.instagram.com/global_interio_vijayapura/"
  },
  businessHours: {
    weekdays: "Mon – Sat: 10:00 AM – 8:30 PM",
    sunday: "Sunday: By Appointment"
  }
};

/**
 * Helper to construct direct WhatsApp click-to-chat links
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = BUSINESS_CONFIG.contacts.whatsappNumber;
  const defaultMsg = `Hello Global Interio, I would like to enquire about interior design services in Vijayapura. Please contact me to discuss my project.`;
  const message = customMessage || defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a detailed project consultation message for WhatsApp
 */
export function generateConsultationWhatsAppMessage(data: {
  name: string;
  phone: string;
  projectType: string;
  propertyType: string;
  approxArea?: string;
  budgetRange?: string;
  location: string;
  description: string;
}): string {
  return [
    `*NEW INTERIOR DESIGN CONSULTATION REQUEST*`,
    `----------------------------------------`,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Project Type:* ${data.projectType}`,
    `*Property Type:* ${data.propertyType}`,
    data.approxArea ? `*Approximate Area:* ${data.approxArea} sq ft` : null,
    data.budgetRange ? `*Budget Range:* ${data.budgetRange}` : null,
    `*Location:* ${data.location}`,
    data.description ? `*Details:* ${data.description}` : null,
    `----------------------------------------`,
    `_Sent via Global Interio Digital Showroom_`
  ]
    .filter(Boolean)
    .join("\n");
}
