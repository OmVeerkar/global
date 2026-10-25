export interface MaterialOption {
  id: string;
  name: string;
  color: string;
  roughness: number;
  metalness: number;
  description: string;
  badge: string;
  accentColor: string;
}

export interface HardwareOption {
  id: string;
  name: string;
  color: string;
  roughness: number;
  metalness: number;
}

export interface LightingOption {
  id: string;
  name: string;
  ambientIntensity: number;
  sunColor: string;
  warmth: string;
  description: string;
}

export const CABINET_MATERIALS: MaterialOption[] = [
  {
    id: "natural-oak",
    name: "Natural Nordic Oak",
    color: "#CBB290",
    roughness: 0.65,
    metalness: 0.05,
    description: "Warm blonde timber with gentle organic grain, creating an open, airy Scandinavian feel.",
    badge: "Popular Classic",
    accentColor: "#B59E7C"
  },
  {
    id: "rich-walnut",
    name: "Smoked American Walnut",
    color: "#543C2E",
    roughness: 0.55,
    metalness: 0.08,
    description: "Deep, chocolate-toned architectural timber exuding quiet luxury, warmth, and grounded presence.",
    badge: "Signature Studio Finish",
    accentColor: "#3F2C20"
  },
  {
    id: "matte-ivory",
    name: "Matte Ivory Lacquer",
    color: "#EDE6D9",
    roughness: 0.35,
    metalness: 0.02,
    description: "Silky, seamless ultra-matte lacquer that bounces ambient light softly without glare.",
    badge: "Architectural Minimal",
    accentColor: "#DED6C7"
  },
  {
    id: "charcoal-noir",
    name: "Charcoal Noir Slate",
    color: "#2C2B29",
    roughness: 0.7,
    metalness: 0.12,
    description: "Moody, tactile architectural stone finish with subtle micro-textures for dramatic contemporary spaces.",
    badge: "Modern Avant-Garde",
    accentColor: "#1F1E1C"
  }
];

export const HARDWARE_OPTIONS: HardwareOption[] = [
  {
    id: "brushed-brass",
    name: "Brushed Muted Brass",
    color: "#B69A65",
    roughness: 0.3,
    metalness: 0.85
  },
  {
    id: "matte-black",
    name: "Matte Black Anodized",
    color: "#222222",
    roughness: 0.45,
    metalness: 0.65
  }
];

export const LIGHTING_MODES: LightingOption[] = [
  {
    id: "warm-glow",
    name: "Warm Studio Glow (2700K)",
    ambientIntensity: 0.85,
    sunColor: "#FFE6C2",
    warmth: "Cozy & Intimate",
    description: "Soft golden illumination mimicking twilight and high-end recessed architectural spotlights."
  },
  {
    id: "crisp-daylight",
    name: "Crisp Morning Light (4500K)",
    ambientIntensity: 1.1,
    sunColor: "#F4F7FB",
    warmth: "Bright & Natural",
    description: "Clear morning daylight streaming through panoramic architectural floor-to-ceiling windows."
  },
  {
    id: "evening-dusk",
    name: "Dusk Ambient (3000K)",
    ambientIntensity: 0.65,
    sunColor: "#FFC89E",
    warmth: "Moody & Dramatic",
    description: "Subtle evening lighting highlighting fluted textures and metallic shadows."
  }
];
