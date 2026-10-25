export interface ProjectItem {
  id: string;
  title: string;
  category: "Living Rooms" | "Modular Kitchens" | "Bedrooms" | "Wardrobes" | "Residential Interiors" | "Commercial Interiors";
  location: string;
  year: string;
  area: string;
  tagline: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  materials: string[];
  isVerifiedWork: boolean;
  notes?: string;
}

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Living Rooms",
  "Modular Kitchens",
  "Bedrooms",
  "Wardrobes",
  "Residential Interiors",
  "Commercial Interiors"
] as const;

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "patil-residence-living",
    title: "The Solapur Road Residence",
    category: "Living Rooms",
    location: "Solapur Road, Vijayapura",
    year: "2024",
    area: "3,200 sq.ft Villa",
    tagline: "Serene architectural living space with walnut accents and fluted travertine.",
    description: "Designed for a family seeking a calm respite from the bustling city. Features a custom floor-to-ceiling slatted walnut partition, Italian travertine TV console with warm hidden 2700K cove lighting, and low-profile linen seating.",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Smoked Walnut Veneer", "Italian Silver Travertine", "Muted Brass Reveal Channels", "Belgian Linen"],
    isVerifiedWork: true,
    notes: "Showcasing studio living room craftsmanship in Vijayapura."
  },
  {
    id: "jalnagar-contemporary-kitchen",
    title: "Jalnagar Gourmet Modular Kitchen",
    category: "Modular Kitchens",
    location: "Jalnagar, Vijayapura",
    year: "2024",
    area: "240 sq.ft Kitchen",
    tagline: "Anti-fingerprint matte charcoal cabinetry paired with Calacatta quartz countertops.",
    description: "An ergonomic island kitchen engineered for both culinary passion and effortless social entertaining. Featuring Blum servo-drive motorized lift systems, concealed spice pullouts, and heavy-duty marine-grade carcases.",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Anti-Scratch Matte Charcoal Acrylic", "Calacatta Gold Quartz Counter", "Blum Tandembox Intivo", "Under-Cabinet 3000K Strip"],
    isVerifiedWork: true,
    notes: "Manufactured with precision at our Vijayapura KIADB facility."
  },
  {
    id: "haveli-suite-master-bedroom",
    title: "The Heritage Modern Master Suite",
    category: "Bedrooms",
    location: "Near Gol Gumbaz Enclave, Vijayapura",
    year: "2023",
    area: "420 sq.ft Suite",
    tagline: "Acoustic fluted headboard with integrated bedside consoles and ambient perimeter halo.",
    description: "Balancing heritage sensibilities with clean Scandinavian lines. We integrated a velvet upholstered headboard with wireless charging nightstands, concealed dressing vanity, and micro-dimming bedside reading sconces.",
    coverImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Natural White Oak", "Acoustic Sand Velvet", "Brushed Brass Sconces", "Warm Herringbone Timber Floor"],
    isVerifiedWork: true,
    notes: "Custom bedroom furniture manufactured in-house."
  },
  {
    id: "kiadb-glass-walkin-wardrobe",
    title: "Bronze Profile Glass Wardrobe Suite",
    category: "Wardrobes",
    location: "Vijayapura",
    year: "2024",
    area: "180 sq.ft Walk-In Closet",
    tagline: "Tinted bronze profile glass doors with intelligent motion-activated vertical light bars.",
    description: "A tailored walk-in closet featuring floor-to-ceiling bronze anodized aluminum frames, tempered fluted glass, custom suede-lined jewelry display islands, and pull-down pneumatic wardrobe organizers.",
    coverImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Bronze Anodized Aluminum", "Tempered Fluted Glass", "Charcoal Melamine Carcase", "Microfiber Suede Inserts"],
    isVerifiedWork: true,
    notes: "Demonstration of factory wardrobe precision."
  },
  {
    id: "shastri-nagar-villa-interior",
    title: "Shastri Nagar Luxury Villa",
    category: "Residential Interiors",
    location: "Shastri Nagar, Vijayapura",
    year: "2023",
    area: "4,500 sq.ft Full Residence",
    tagline: "End-to-end turnkey architectural interior for a triplex private residence.",
    description: "A cohesive design language flowing across 5 bedrooms, double-height living room, open-concept kitchen, and terrace entertainment lounge. Features customized CNC-routed partitions and custom chandeliers.",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Custom Fluted Oak", "Boticcino Italian Marble", "Seamless Gypsum Ceiling", "Custom Cast Brass Fixtures"],
    isVerifiedWork: true,
    notes: "Full turnkey execution by Global Interio site team."
  },
  {
    id: "corporate-hub-executive-cabin",
    title: "Bijapur Commercial Executive Suite",
    category: "Commercial Interiors",
    location: "Station Road, Vijayapura",
    year: "2024",
    area: "1,800 sq.ft Commercial Space",
    tagline: "Minimalist corporate headquarters featuring sound-dampened meeting pods and acoustic louvers.",
    description: "A modern workspace designed for prestige and seamless collaboration. Includes an executive director cabin with custom walnut waterfall desk, acoustic fabric wall wraps, and concealed cable conduits.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Acoustic Felt Paneling", "Matte Black Aluminum Glass Walls", "Natural Walnut Desk", "Commercial Polyurethane Floor"],
    isVerifiedWork: false,
    notes: "Illustrative commercial design concept for modern offices."
  },
  {
    id: "minimalist-scandi-living",
    title: "The Nordic Sand Penthouse Living",
    category: "Living Rooms",
    location: "Vijayapura",
    year: "2024",
    area: "2,100 sq.ft Apartment",
    tagline: "Airy architectural volume with warm sand hues, boucle seating, and natural limestone.",
    description: "Emphasizing natural daylight and tactile textures. Double-glazed sliding doors open to panoramic skies, complemented by curved plaster niches and bespoke low-slung credenzas.",
    coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Micro-cement Plaster", "Sand Bouclé Fabric", "Bleached Ash Wood", "Blackened Steel"],
    isVerifiedWork: false,
    notes: "Design studio concept showcasing material balance."
  },
  {
    id: "monochrome-island-kitchen",
    title: "Linear Walnut & Slate Island Kitchen",
    category: "Modular Kitchens",
    location: "Vijayapura Outskirts",
    year: "2023",
    area: "310 sq.ft Kitchen",
    tagline: "Architectural monolithic kitchen island with fluted timber and concealed breakfast bar.",
    description: "Features a dramatic 10-foot waterfall island clad in Brazilian slate quartz, integrated induction cooking, pocket door pantry station, and matte black Blum Legrabox drawers.",
    coverImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ],
    materials: ["Natural Walnut Veneer", "Matte Slate Quartz", "Hafele Pocket Door Fittings", "Concealed Downdraft Chimney"],
    isVerifiedWork: false,
    notes: "Design concept for large open-plan villas."
  }
];
