export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  features: string[];
  materialsIncluded: string[];
  tag: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential-interiors",
    title: "Residential Interiors",
    subtitle: "Complete Living Environments",
    shortDescription: "Complete interior concepts tailored for modern villas, luxury apartments, and independent homes across Vijayapura.",
    fullDescription: "From comprehensive spatial planning to final styling, we craft residential environments that harmonize everyday function with timeless aesthetics. Every corner is carefully considered for flow, natural light, and lifestyle ease.",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom 3D layout planning & photorealistic previews",
      "Unified material palettes across all living zones",
      "Ergonomic zoning for comfort and circulation",
      "Turnkey civil, carpentry, and electrical execution"
    ],
    materialsIncluded: ["Natural Oak & Teak Finishes", "Acoustic Wall Paneling", "Designer LED Coves", "Linen Drapery"],
    tag: "Signature Service"
  },
  {
    id: "modular-kitchens",
    title: "Modular Kitchens",
    subtitle: "Culinary Precision & Craftsmanship",
    shortDescription: "Precision-engineered modular kitchen layouts featuring German soft-close hardware, anti-scratch finishes, and smart pantry storage.",
    fullDescription: "Our modular kitchens combine architectural minimalism with heavy-duty Indian kitchen ergonomics. Utilizing marine-grade plywood and premium German fittings (Hafele/Blum), we deliver kitchens built to endure decades of joyful cooking.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Waterproof BWP Marine Ply & Acrylic / PU finishes",
      "Hydraulic pull-outs, tandem boxes & corner carousels",
      "Quartz / Nano-white heat-resistant countertops",
      "Concealed LED under-cabinet task illumination"
    ],
    materialsIncluded: ["Marine Grade 710 Plywood", "Anti-Fingerprint Acrylic", "Blum/Hafele Soft-Close Hardware", "Calacatta Quartz"],
    tag: "Core Specialty"
  },
  {
    id: "living-room-design",
    title: "Living Room Design",
    subtitle: "Architectural Grandeur & Comfort",
    shortDescription: "Curated formal and family living zones with bespoke fluted TV units, ambient layered lighting, and custom seating.",
    fullDescription: "The living room is the soul of your home. We balance proportions, textures, acoustics, and seating arrangements to create conversational sanctuaries that impress guests and soothe the family after a long day.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Floating fluted wood TV backdrops with ambient backlighting",
      "Sofa layout optimization for dialogue and natural views",
      "Architectural display niches with micro-cement or stone veneers",
      "Bespoke marble & brushed brass center tables"
    ],
    materialsIncluded: ["Italian Travertine & Marble", "Fluted Charcoal Timber", "Brushed Brass Accents", "Bouclé & Performance Fabrics"],
    tag: "Living Luxury"
  },
  {
    id: "bedroom-interiors",
    title: "Bedroom Interiors",
    subtitle: "Serene Sanctuaries for Rest",
    shortDescription: "Peaceful retreats thoughtfully designed with acoustic headboards, concealed wardrobe zones, and relaxing lighting temperatures.",
    fullDescription: "A sanctuary engineered for deep rejuvenation. We harmonize warm color palettes, soft indirect lighting, ergonomic bedside consoles, and ample concealed storage to keep clutter away from your restful thoughts.",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Floor-to-ceiling upholstered acoustic headboards",
      "Concealed dressing units with vanity illumination",
      "Multi-layered ambient & reading lighting controls",
      "Integrated study or reading nooks"
    ],
    materialsIncluded: ["Natural Walnut Veneer", "Organic Linens & Velvets", "Warm 2700K Dimmable Lighting", "Soft-Touch Matte Laminates"],
    tag: "Private Sanctuaries"
  },
  {
    id: "wardrobes-custom-furniture",
    title: "Wardrobes & Custom Furniture",
    subtitle: "In-House Factory Precision",
    shortDescription: "Floor-to-ceiling sliding & hinged wardrobes, walk-in closets, and bespoke furniture crafted in our Vijayapura factory.",
    fullDescription: "Manufactured at our own KIADB Industrial Area facility in Vijayapura, our custom furniture and wardrobes feature millimeter precision, soft-close dampers, tinted fluted glass, and intelligent modular drawer organizers.",
    imageUrl: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Profile glass doors with integrated warm vertical LED strips",
      "Custom jewelry drawers with velvet compartments",
      "Pull-down clothes hangers and tie/belt organizers",
      "Custom dining tables, credenzas, and consoles"
    ],
    materialsIncluded: ["Tinted Bronze Glass", "Brushed Champagne Aluminum", "E0 Grade Moisture-Resistant Boards", "Suede Lined Trays"],
    tag: "In-House Manufacturing"
  },
  {
    id: "false-ceiling-lighting",
    title: "False Ceiling & Lighting",
    subtitle: "Atmospheric Illumination Concepts",
    shortDescription: "Architectural ceiling designs and layered lighting schemes that transform room height, depth, and nighttime ambiance.",
    fullDescription: "Good lighting defines luxury. We replace harsh glare with architectural perimeter coves, magnetic track lights, recessed spotlights, and statement chandeliers that accentuate the spatial dimensions of your rooms.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Minimalist seamless gypsum ceilings with shadow lines",
      "Magnetic 24V track lighting systems for flexible focus",
      "Warm indirect perimeter LED coves (3000K / 2700K)",
      "Smart scene dimming and automation compatibility"
    ],
    materialsIncluded: ["Saint-Gobain Gyproc Gypsum", "Cob Spotlights & Magnet Tracks", "CRI 90+ LED Warm Strips", "Acoustic Baffles"],
    tag: "Lighting Architecture"
  },
  {
    id: "commercial-interiors",
    title: "Commercial & Office Spaces",
    subtitle: "Brand Identity in Physical Form",
    shortDescription: "Impactful retail showrooms, corporate cabins, reception lounges, and boutique clinics designed for professional prestige.",
    fullDescription: "Designed to reflect brand authority and optimize employee productivity. We handle acoustic ceiling baffles, executive desking, reception desks with sculptural company signage, and client meeting zones.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Executive suites with acoustically isolated partition walls",
      "Reception statement walls with stone and metallic inlays",
      "Heavy-traffic commercial flooring and durable laminates",
      "Wire-free conference desking with concealed power blocks"
    ],
    materialsIncluded: ["Acoustic Fabric Panels", "Toughened Fluted Glass Partitions", "Commercial Grade Laminates", "High-Durability Quartz"],
    tag: "Commercial Excellence"
  },
  {
    id: "complete-interior-solutions",
    title: "Complete Turnkey Solutions",
    subtitle: "From Empty Shell to Move-In Ready",
    shortDescription: "End-to-end design, manufacturing, civil management, and finishing with a single point of accountability.",
    fullDescription: "Experience peace of mind. From the initial 3D design blueprint and structural revisions to on-site carpentry, painting, electrical, deep cleaning, and key handover — Global Interio handles the entire journey under one roof.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dedicated project architect and site supervisor",
      "Weekly milestone updates and transparent material billing",
      "Factory-finished modular components for fast site assembly",
      "Post-handover warranty and dedicated service support"
    ],
    materialsIncluded: ["Complete Integrated Sourcing", "Verified Quality Benchmark", "Branded Hardware Warranties", "Professional Site Cleaning"],
    tag: "Turnkey Peace of Mind"
  }
];
