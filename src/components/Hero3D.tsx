import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { RotateCw, Sun, Moon, Compass, Sparkles } from "lucide-react";
import { ThreeErrorBoundary, isWebGLAvailable } from "./ThreeErrorBoundary";

// Material Theme Palettes
export type HeroTheme = "walnut" | "oak" | "charcoal";

interface ThemeColors {
  name: string;
  woodColor: string;
  slatColor: string;
  sofaColor: string;
  cushionColor1: string;
  cushionColor2: string;
  rugColor: string;
  wallColor: string;
  metalColor: string;
}

const THEMES: Record<HeroTheme, ThemeColors> = {
  walnut: {
    name: "Warm Walnut",
    woodColor: "#4E3629",
    slatColor: "#5A4030",
    sofaColor: "#E2DDD3",
    cushionColor1: "#9E6D4D",
    cushionColor2: "#B69A65",
    rugColor: "#EAE4D8",
    wallColor: "#F4EFE6",
    metalColor: "#B69A65"
  },
  oak: {
    name: "Nordic Oak",
    woodColor: "#CBB290",
    slatColor: "#BF9E77",
    sofaColor: "#ECE7DE",
    cushionColor1: "#8C9083",
    cushionColor2: "#D8C6AE",
    rugColor: "#F0ECE3",
    wallColor: "#FAF7F2",
    metalColor: "#C7A76D"
  },
  charcoal: {
    name: "Moody Charcoal",
    woodColor: "#22211F",
    slatColor: "#2F2D2A",
    sofaColor: "#CAC6BF",
    cushionColor1: "#B69A65",
    cushionColor2: "#624B3B",
    rugColor: "#D5CEC2",
    wallColor: "#E5DFD4",
    metalColor: "#D1B27B"
  }
};

/**
 * Procedural Architectural Living Room Scene
 */
function LivingRoomScene({
  theme,
  isDusk,
  isInteracting
}: {
  theme: HeroTheme;
  isDusk: boolean;
  isInteracting: boolean;
}) {
  const currentTheme = THEMES[theme];
  const groupRef = useRef<THREE.Group>(null);

  // Subtle floating/drifting motion when user is not manually orbiting
  useFrame((state) => {
    if (groupRef.current && !isInteracting) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.03;
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Lighting Rig */}
      <ambientLight intensity={isDusk ? 0.6 : 0.9} color={isDusk ? "#FFDDB3" : "#FFFFFF"} />

      {/* Main architectural sunlight through window */}
      <directionalLight
        position={[6, 7, 4]}
        intensity={isDusk ? 1.4 : 2.2}
        color={isDusk ? "#FFB067" : "#FFF7EB"}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={20}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />

      {/* Secondary fill light */}
      <pointLight
        position={[-3, 4, -1]}
        intensity={isDusk ? 0.8 : 0.5}
        color={isDusk ? "#FFA352" : "#EAF0F8"}
      />

      {/* Warm Floor Lamp light */}
      <pointLight
        position={[-2.4, 1.8, -0.8]}
        intensity={isDusk ? 2.2 : 1.2}
        color="#FFCC88"
        distance={4.5}
        decay={2}
      />

      {/* ================= FLOOR & WALLS ================= */}
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial
          color={currentTheme.woodColor}
          roughness={0.4}
          metalness={0.08}
        />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 3.5, -4]} receiveShadow>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color={currentTheme.wallColor} roughness={0.8} />
      </mesh>

      {/* Left Wall with Window Cutout Effect */}
      <mesh position={[-6, 3.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial color={currentTheme.wallColor} roughness={0.8} />
      </mesh>

      {/* Architectural Ceiling with Recessed Cove */}
      <mesh position={[0, 5.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>

      {/* ================= SLATTED TIMBER ACCENT WALL ================= */}
      <group position={[0.8, 2.2, -3.9]}>
        {/* Slat backing plate */}
        <mesh position={[0, 0, -0.05]} receiveShadow>
          <boxGeometry args={[4.2, 4.4, 0.06]} />
          <meshStandardMaterial color="#1C1B19" roughness={0.9} />
        </mesh>
        {/* Vertical Wooden Slats */}
        {Array.from({ length: 24 }).map((_, i) => (
          <mesh key={i} position={[-1.95 + i * 0.17, 0, 0.03]} castShadow receiveShadow>
            <boxGeometry args={[0.07, 4.35, 0.08]} />
            <meshStandardMaterial
              color={currentTheme.slatColor}
              roughness={0.5}
              metalness={0.05}
            />
          </mesh>
        ))}
        {/* Soft Warm Backlight strip behind panel */}
        <pointLight position={[0, 0, 0.1]} intensity={isDusk ? 1.8 : 0.8} color="#FFBA7A" distance={3.5} />
      </group>

      {/* ================= ABSTRACT WALL ART ================= */}
      <group position={[-2.8, 2.4, -3.92]}>
        {/* Frame */}
        <mesh castShadow>
          <boxGeometry args={[1.8, 2.4, 0.05]} />
          <meshStandardMaterial color={currentTheme.metalColor} metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Canvas */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.7, 2.3]} />
          <meshStandardMaterial color="#EDE7DB" roughness={0.85} />
        </mesh>
        {/* Abstract Minimalist Geometric Forms on Art */}
        <mesh position={[-0.2, 0.2, 0.04]}>
          <circleGeometry args={[0.45, 32]} />
          <meshStandardMaterial color={currentTheme.woodColor} roughness={0.7} />
        </mesh>
        <mesh position={[0.25, -0.3, 0.04]}>
          <planeGeometry args={[0.65, 0.9]} />
          <meshStandardMaterial color="#B69A65" roughness={0.4} metalness={0.4} />
        </mesh>
      </group>

      {/* ================= FLOATING MEDIA CONSOLE ================= */}
      <group position={[0.8, 0.45, -3.6]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.4, 0.45, 0.65]} />
          <meshStandardMaterial
            color={currentTheme.woodColor}
            roughness={0.4}
            metalness={0.05}
          />
        </mesh>
        {/* Brass trim reveal line */}
        <mesh position={[0, -0.22, 0.33]}>
          <boxGeometry args={[4.4, 0.02, 0.02]} />
          <meshStandardMaterial color={currentTheme.metalColor} metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* ================= DESIGNER LUXURY SOFA ================= */}
      <group position={[-0.4, 0, -0.6]}>
        {/* Main Base */}
        <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.32, 1.3]} />
          <meshStandardMaterial color="#2B2824" roughness={0.8} />
        </mesh>

        {/* Modular Seat Cushions */}
        <mesh position={[-0.75, 0.42, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.3, 1.15]} />
          <meshStandardMaterial color={currentTheme.sofaColor} roughness={0.7} />
        </mesh>
        <mesh position={[0.75, 0.42, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.3, 1.15]} />
          <meshStandardMaterial color={currentTheme.sofaColor} roughness={0.7} />
        </mesh>

        {/* Chaise Extension */}
        <mesh position={[1.7, 0.42, 0.45]} castShadow receiveShadow>
          <boxGeometry args={[0.95, 0.3, 1.95]} />
          <meshStandardMaterial color={currentTheme.sofaColor} roughness={0.7} />
        </mesh>

        {/* Backrest Structure */}
        <mesh position={[0, 0.72, -0.48]} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.58, 0.32]} />
          <meshStandardMaterial color={currentTheme.sofaColor} roughness={0.7} />
        </mesh>
        {/* Chaise Right Backrest */}
        <mesh position={[1.7, 0.72, -0.48]} castShadow receiveShadow>
          <boxGeometry args={[0.95, 0.58, 0.32]} />
          <meshStandardMaterial color={currentTheme.sofaColor} roughness={0.7} />
        </mesh>

        {/* Left Armrest */}
        <mesh position={[-1.6, 0.58, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 0.5, 1.25]} />
          <meshStandardMaterial color={currentTheme.sofaColor} roughness={0.7} />
        </mesh>

        {/* Throw Cushions */}
        <mesh position={[-1.1, 0.65, -0.25]} rotation={[0.15, 0.2, 0]} castShadow>
          <boxGeometry args={[0.45, 0.45, 0.16]} />
          <meshStandardMaterial color={currentTheme.cushionColor1} roughness={0.65} />
        </mesh>
        <mesh position={[-0.4, 0.65, -0.28]} rotation={[0.1, -0.1, 0]} castShadow>
          <boxGeometry args={[0.42, 0.42, 0.15]} />
          <meshStandardMaterial color={currentTheme.cushionColor2} roughness={0.65} />
        </mesh>
        <mesh position={[1.4, 0.65, -0.25]} rotation={[0.15, -0.2, 0]} castShadow>
          <boxGeometry args={[0.45, 0.45, 0.16]} />
          <meshStandardMaterial color={currentTheme.cushionColor1} roughness={0.65} />
        </mesh>
      </group>

      {/* ================= AREA RUG ================= */}
      <mesh position={[0, 0.015, 0.4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4.8, 3.8]} />
        <meshStandardMaterial color={currentTheme.rugColor} roughness={0.95} />
      </mesh>

      {/* ================= COFFEE TABLE (MARBLE & BRASS) ================= */}
      <group position={[-0.4, 0, 1.1]}>
        {/* Marble Tabletop */}
        <mesh position={[0, 0.38, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.72, 0.72, 0.05, 48]} />
          <meshStandardMaterial color="#F7F6F2" roughness={0.15} metalness={0.08} />
        </mesh>
        {/* Brass Bevel Rim */}
        <mesh position={[0, 0.36, 0]}>
          <cylinderGeometry args={[0.73, 0.73, 0.03, 48]} />
          <meshStandardMaterial color={currentTheme.metalColor} metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Table Pedestal */}
        <mesh position={[0, 0.18, 0]} castShadow>
          <cylinderGeometry args={[0.26, 0.32, 0.34, 32]} />
          <meshStandardMaterial color={currentTheme.metalColor} metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Small Coffee Table Ceramic Vase with Dried Grass Stems */}
        <mesh position={[0.2, 0.46, 0.1]} castShadow>
          <cylinderGeometry args={[0.08, 0.11, 0.18, 24]} />
          <meshStandardMaterial color="#8B7B6B" roughness={0.8} />
        </mesh>
        {/* Architectural Design Book */}
        <mesh position={[-0.15, 0.42, -0.08]} rotation={[0, 0.4, 0]} castShadow>
          <boxGeometry args={[0.28, 0.03, 0.38]} />
          <meshStandardMaterial color="#1E1E1E" roughness={0.6} />
        </mesh>
      </group>

      {/* ================= SCULPTURAL ARCHITECTURAL FLOOR LAMP ================= */}
      <group position={[-2.4, 0, -0.9]}>
        {/* Base */}
        <mesh position={[0, 0.03, 0]} castShadow>
          <cylinderGeometry args={[0.24, 0.26, 0.05, 32]} />
          <meshStandardMaterial color={currentTheme.metalColor} metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Slender Pole */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 2.1, 16]} />
          <meshStandardMaterial color={currentTheme.metalColor} metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Elegant Conical Lampshade */}
        <mesh position={[0, 2.05, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.38, 0.32, 32, 1, true]} />
          <meshStandardMaterial
            color="#FFF4DD"
            roughness={0.4}
            side={THREE.DoubleSide}
            emissive="#FFB55E"
            emissiveIntensity={isDusk ? 0.9 : 0.4}
          />
        </mesh>
      </group>

      {/* ================= TALL POTTED MONSTERA / FICUS PLANT ================= */}
      <group position={[2.7, 0, -1.8]}>
        {/* Charcoal Fluted Ceramic Pot */}
        <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.34, 0.26, 0.85, 32]} />
          <meshStandardMaterial color="#2E2C29" roughness={0.7} />
        </mesh>
        {/* Soil */}
        <mesh position={[0, 0.86, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.04, 24]} />
          <meshStandardMaterial color="#36281E" roughness={0.9} />
        </mesh>
        {/* Sculptural Stems and Leaves */}
        {[
          { pos: [0, 1.15, 0], rot: [0.1, 0.3, 0.2], scale: [0.4, 0.02, 0.6] },
          { pos: [-0.15, 1.4, 0.1], rot: [-0.2, 0.6, -0.3], scale: [0.45, 0.02, 0.7] },
          { pos: [0.18, 1.6, -0.1], rot: [0.3, -0.5, 0.4], scale: [0.5, 0.02, 0.75] },
          { pos: [0.05, 1.85, 0.05], rot: [-0.1, 0.1, 0.1], scale: [0.52, 0.02, 0.8] },
          { pos: [-0.2, 1.25, -0.15], rot: [-0.3, -0.4, -0.2], scale: [0.42, 0.02, 0.65] }
        ].map((leaf, index) => (
          <mesh
            key={index}
            position={leaf.pos as [number, number, number]}
            rotation={leaf.rot as [number, number, number]}
            castShadow
          >
            <boxGeometry args={leaf.scale as [number, number, number]} />
            <meshStandardMaterial color="#354B35" roughness={0.45} />
          </mesh>
        ))}
      </group>

      {/* Architectural Window Horizon Gradient Light */}
      <group position={[-5.8, 3.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh>
          <planeGeometry args={[10, 6]} />
          <meshBasicMaterial
            color={isDusk ? "#ECA172" : "#D4E8F8"}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Controller to handle smooth camera resets
 */
function CameraRig({ isResetting, onResetComplete }: { isResetting: boolean; onResetComplete: () => void }) {
  useFrame((state) => {
    if (isResetting) {
      state.camera.position.lerp(new THREE.Vector3(0, 2.2, 5.8), 0.08);
      state.camera.lookAt(0, 0.7, 0);
      if (state.camera.position.distanceTo(new THREE.Vector3(0, 2.2, 5.8)) < 0.05) {
        onResetComplete();
      }
    }
  });
  return null;
}

export function Hero3D() {
  const [theme, setTheme] = useState<HeroTheme>("walnut");
  const [isDusk, setIsDusk] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResetCamera = () => {
    setIsResetting(true);
  };

  // High quality architectural fallback image if WebGL fails
  const fallbackUI = (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden bg-brand-charcoal">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
        alt="Global Interio Luxury Architectural Living Room"
        className="w-full h-full object-cover object-center opacity-85 scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
      <div className="absolute bottom-10 left-8 md:left-16 text-white max-w-lg">
        <span className="text-xs uppercase tracking-widest text-brand-brass font-medium">Bespoke Architectural Spaces</span>
        <h3 className="font-serif text-3xl md:text-4xl mt-1 text-brand-ivory">Living Room Craftsmanship</h3>
        <p className="text-brand-sand text-sm mt-2">Engineered with fluted walnut, ambient cove lighting, and tailored comfort in Vijayapura.</p>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-[88vh] min-h-[620px] max-h-[960px] bg-brand-charcoal overflow-hidden select-none">
      {/* 3D Canvas or Fallback */}
      {webGLSupported ? (
        <ThreeErrorBoundary fallback={fallbackUI}>
          <Canvas
            shadows={!isMobile}
            dpr={isMobile ? [1, 1.2] : [1, 1.8]}
            camera={{ position: [0, 2.2, 5.8], fov: isMobile ? 52 : 44 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            onPointerDown={() => setIsInteracting(true)}
            onPointerUp={() => setIsInteracting(false)}
          >
            <Suspense fallback={null}>
              <LivingRoomScene
                theme={theme}
                isDusk={isDusk}
                isInteracting={isInteracting}
              />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3.4}
                maxPolarAngle={Math.PI / 2.05}
                minAzimuthAngle={-Math.PI / 3.5}
                maxAzimuthAngle={Math.PI / 3.5}
                rotateSpeed={0.5}
                dampingFactor={0.08}
              />
              <CameraRig
                isResetting={isResetting}
                onResetComplete={() => setIsResetting(false)}
              />
            </Suspense>
          </Canvas>
        </ThreeErrorBoundary>
      ) : (
        fallbackUI
      )}

      {/* Subtle Cinematic Vignette & Contrast Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-brand-charcoal/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-transparent to-brand-charcoal/30" />

      {/* Floating Interactive 3D Controls Bar */}
      <div className="absolute top-28 right-4 md:right-8 z-20 flex flex-col items-end gap-2.5">
        {/* Interaction Hint */}
        <div className="hidden sm:flex items-center gap-2 bg-brand-charcoal/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-sand/20 text-xs text-brand-ivory/90 shadow-luxury">
          <Compass className="w-3.5 h-3.5 text-brand-brass animate-spin" style={{ animationDuration: "12s" }} />
          <span>Interactive 3D Room • Drag to explore</span>
        </div>

        {/* Theme Finish Switcher */}
        <div className="bg-brand-charcoal/85 backdrop-blur-md p-1.5 rounded-2xl border border-brand-sand/20 shadow-luxury flex items-center gap-1.5">
          {(["walnut", "oak", "charcoal"] as HeroTheme[]).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                theme === t
                  ? "bg-brand-brass text-white shadow-sm"
                  : "text-brand-sand/80 hover:text-brand-ivory hover:bg-white/5"
              }`}
            >
              {THEMES[t].name}
            </button>
          ))}
        </div>

        {/* Lighting & Reset Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDusk(!isDusk)}
            className="flex items-center gap-1.5 bg-brand-charcoal/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-brand-sand/20 text-xs text-brand-ivory hover:border-brand-brass/50 transition-all shadow-luxury"
            title="Toggle Dusk / Daylight Ambience"
          >
            {isDusk ? (
              <>
                <Moon className="w-3.5 h-3.5 text-brand-brass" />
                <span className="hidden sm:inline">Dusk Mode</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-brand-gold" />
                <span className="hidden sm:inline">Daylight</span>
              </>
            )}
          </button>

          <button
            onClick={handleResetCamera}
            className="p-1.5 bg-brand-charcoal/85 backdrop-blur-md rounded-xl border border-brand-sand/20 text-brand-sand hover:text-brand-ivory hover:border-brand-brass/50 transition-all shadow-luxury"
            title="Reset Perspective"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Text Content & CTAs */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 sm:pb-16 px-6 sm:px-12 md:px-16 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 bg-brand-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-brass/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-brass animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-brand-brass uppercase">
              INTERIOR DESIGN • VIJAYAPURA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white leading-[1.08] tracking-tight drop-shadow-md">
            Spaces That <span className="italic font-light text-brand-sand">Feel Like You.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-4 text-base sm:text-lg text-brand-ivory/85 leading-relaxed font-light max-w-xl drop-shadow-sm">
            Thoughtfully designed interiors. Beautifully crafted details. Spaces made for the way you live.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-brand-brass text-white font-medium text-sm tracking-editorial uppercase hover:bg-brand-gold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover transform hover:-translate-y-0.5 rounded-none"
            >
              Explore Our Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-brand-ivory/10 hover:bg-brand-ivory/20 text-brand-ivory border border-brand-ivory/30 font-medium text-sm tracking-editorial uppercase backdrop-blur-md transition-all duration-300 rounded-none"
            >
              Start Your Design Journey
            </a>
          </div>

          {/* Studio Badges */}
          <div className="mt-8 flex items-center gap-6 text-xs text-brand-sand/75 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Domino's Bldg Experience Centre</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-brass" />
              <span>KIADB Furniture Factory</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-8 sm:right-16 hidden lg:flex flex-col items-center gap-2 text-brand-sand/70 text-xs pointer-events-auto">
          <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-brand-brass to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
