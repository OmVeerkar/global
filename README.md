# Global Interio — Premium 3D Interior Design & Custom Furniture

A luxury architectural digital showroom built for **Global Interio**, a bespoke interior design studio and custom furniture manufacturer based in **Vijayapura (Bijapur), Karnataka, India**.

Instagram: [@global_interio_vijayapura](https://www.instagram.com/global_interio_vijayapura/)

---

## 🏛️ Project Overview

Global Interio reflects the aesthetic of a high-end architectural design atelier. Rather than a generic corporate website, the experience delivers:
- **Immersive 3D Living Room Hero:** Interactive procedural Three.js room with realistic lighting, material finishes (Warm Walnut, Nordic Oak, Moody Charcoal), camera controls, and WebGL error boundary fallbacks.
- **Signature 3D Experience ("Explore the Details"):** Real-time material customizer allowing clients to preview fluted credenzas in Natural Oak, Smoked Walnut, Matte Ivory, and Charcoal Slate with brushed brass or black hardware under different room lighting temperatures.
- **Comprehensive Service Catalog:** 8 detailed services spanning residential villas, modular kitchens, bedroom sanctuaries, living rooms, wardrobes, commercial spaces, and turnkey interior solutions.
- **Filterable Architectural Project Portfolio:** Filter by category (Living Rooms, Kitchens, Bedrooms, Wardrobes, Residential, Commercial) with a full-screen image lightbox, thumbnail carousel, and keyboard navigation (`Esc`, `←`, `→`).
- **6-Step Design Process Timeline:** A clear, transparent roadmap from initial consultation to final 40-point quality audit and handover.
- **Client-Side Validated Consultation Form:** Detailed multi-parameter enquiry generator that automatically formats and encodes a structured brief directly for WhatsApp.
- **Floating WhatsApp Dispatch:** Global click-to-chat button with prefilled enquiry text.
- **Local SEO & Schema.org Markup:** LocalBusiness JSON-LD schema with verified Vijayapura landmarks, robots.txt, and sitemap.xml.

---

## 🛠️ Technology Stack

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS with a custom architectural palette (Ivory `#F6F2EA`, Sand Beige `#D8C6AE`, Walnut `#5A4030`, Charcoal `#242320`, Muted Brass `#B69A65`)
- **Typography:** Cormorant Garamond (Editorial Serif) & DM Sans (Modern Sans-serif)
- **3D Engine:** Three.js + `@react-three/fiber` + `@react-three/drei`
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+ recommended; tested on v24)
- npm or pnpm / yarn

### Installation
```bash
# Navigate to the project directory
cd global-interio

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
The application will launch at: `http://localhost:5173/` (or `http://127.0.0.1:5173/`)

### Production Build
```bash
npm run build
```
Build output is saved to the `dist/` directory, optimized and split into high-performance chunks.

### Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Centralized Configuration Guide

All business details, addresses, phone numbers, and WhatsApp numbers are managed from a single file:
👉 **[`src/data/config.ts`](file:///C:/Users/Hp/global-interio/src/data/config.ts)**

### 1. Update Business WhatsApp Number
Open `src/data/config.ts` and update:
```typescript
contacts: {
  // Digits only with country code (e.g., 91 for India + 10-digit number)
  whatsappNumber: "91XXXXXXXXXX",
  isWhatsappVerified: true,
  displayPhone: "+91 XXXXX XXXXX",
  displayEmail: "contact@globalinterio.com"
}
```

### 2. Physical Studio & Factory Addresses (Verified)
- **Experience Centre:** 2nd Floor, Domino's Building, Jalnagar Road / Solapur Road, Vijayapura, Karnataka — 586101
- **Manufacturing Facility:** KIADB Mahalbagayat Industrial Area, Vijayapura, Karnataka — 586104

### 3. Modifying Services & Projects
- **Services:** Edit [`src/data/services.ts`](file:///C:/Users/Hp/global-interio/src/data/services.ts)
- **Portfolio Projects:** Edit [`src/data/projects.ts`](file:///C:/Users/Hp/global-interio/src/data/projects.ts)
- **3D Materials & Finishes:** Edit [`src/data/materials.ts`](file:///C:/Users/Hp/global-interio/src/data/materials.ts)

---

## 📋 Business Details Needing Owner Confirmation

In accordance with our strict data integrity policy:
1. **WhatsApp & Phone Number:** Currently set to placeholder `919876543210` pending the business owner's direct input.
2. **Official Business Email:** Set to `info@globalinterio.com` / `contact@globalinterio.com`.
3. **Project Photography:** Real verified projects are tagged with `Verified Studio Work` (Solapur Road, Jalnagar, etc.); conceptual architectural studies are honestly designated as `Studio Concept`. Once additional on-site photos from Vijayapura sites are provided, they can be dropped directly into `public/images/projects/` and mapped in `src/data/projects.ts`.

---

## 📄 License & Attribution

Designed and engineered for **Global Interio, Vijayapura, Karnataka, India**. All rights reserved.
