import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import {
  CABINET_MATERIALS,
  HARDWARE_OPTIONS,
  LIGHTING_MODES,
  MaterialOption,
  HardwareOption,
  LightingOption
} from "../data/materials";
import { getWhatsAppUrl } from "../data/config";
import { RotateCw, Check, Sparkles, SlidersHorizontal, Eye, ArrowRight } from "lucide-react";
import { ThreeErrorBoundary, isWebGLAvailable } from "./ThreeErrorBoundary";

/**
 * 3D Bespoke Credenza / Modular Cabinet Model
 */
function ModularCredenzaModel({
  selectedMaterial,
  selectedHardware,
  lighting,
  cameraTarget
}: {
  selectedMaterial: MaterialOption;
  selectedHardware: HardwareOption;
  lighting: LightingOption;
  cameraTarget: [number, number, number];
}) {
  const modelRef = useRef<THREE.Group>(null);

  // Subtle breathing idle animation
  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();
      modelRef.current.position.y = Math.sin(t * 0.8) * 0.015;
    }
  });

  return (
    <group ref={modelRef} position={[0, -0.2, 0]}>
      {/* Lighting Rig tailored for material reflection inspection */}
      <ambientLight intensity={lighting.ambientIntensity} color={lighting.sunColor} />
      
      {/* Key spotlight casting directional shadow on fluted textures */}
      <directionalLight
        position={[3, 4, 3]}
        intensity={1.8}
        color={lighting.sunColor}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      {/* Fill light from back-left */}
      <pointLight position={[-3, 2, -2]} intensity={0.6} color="#FFE6C2" />

      {/* Internal warm LED cove inside the display cubby */}
      <pointLight position={[0.7, 0.45, 0.1]} intensity={1.5} color="#FFBA7A" distance={1.2} />

      {/* ================= PEDESTAL / BASE ================= */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.7, 0.1, 0.7]} />
        <meshStandardMaterial
          color={selectedHardware.color}
          roughness={selectedHardware.roughness}
          metalness={selectedHardware.metalness}
        />
      </mesh>

      {/* ================= MAIN CABINET CARCASE ================= */}
      <mesh position={[-0.45, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.9, 0.72]} />
        <meshStandardMaterial
          color={selectedMaterial.color}
          roughness={selectedMaterial.roughness}
          metalness={selectedMaterial.metalness}
        />
      </mesh>

      {/* Fluted Texture Slats on Left Doors */}
      {Array.from({ length: 18 }).map((_, i) => (
        <mesh
          key={i}
          position={[-1.3 + i * 0.095, 0.55, 0.37]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.045, 0.84, 0.02]} />
          <meshStandardMaterial
            color={selectedMaterial.accentColor}
            roughness={selectedMaterial.roughness}
            metalness={selectedMaterial.metalness}
          />
        </mesh>
      ))}

      {/* ================= OPEN DISPLAY CUBBY (RIGHT SIDE) ================= */}
      <mesh position={[0.8, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.9, 0.72]} />
        <meshStandardMaterial
          color="#1C1B19"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Thin Horizontal Shelf inside Cubby */}
      <mesh position={[0.8, 0.55, 0]} castShadow>
        <boxGeometry args={[0.86, 0.03, 0.68]} />
        <meshStandardMaterial
          color={selectedMaterial.color}
          roughness={selectedMaterial.roughness}
          metalness={selectedMaterial.metalness}
        />
      </mesh>

      {/* Sculptural Ceramic Sphere inside Cubby */}
      <mesh position={[0.65, 0.75, 0.1]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#FAF5EE" roughness={0.2} metalness={0.05} />
      </mesh>

      {/* Minimalist Art Book inside Cubby */}
      <mesh position={[0.92, 0.22, 0.05]} rotation={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[0.22, 0.04, 0.28]} />
        <meshStandardMaterial color="#9E6D4D" roughness={0.6} />
      </mesh>

      {/* ================= CALACATTA MARBLE TOP COUNTER ================= */}
      <mesh position={[0, 1.025, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.74, 0.05, 0.76]} />
        <meshStandardMaterial
          color="#F5F3ED"
          roughness={0.12}
          metalness={0.08}
        />
      </mesh>

      {/* Brass Shadow Reveal Line under marble */}
      <mesh position={[0, 1.0, 0.37]}>
        <boxGeometry args={[2.7, 0.015, 0.02]} />
        <meshStandardMaterial
          color={selectedHardware.color}
          roughness={selectedHardware.roughness}
          metalness={selectedHardware.metalness}
        />
      </mesh>

      {/* ================= HARDWARE HANDLES ================= */}
      {/* Left Door Vertical Handle */}
      <mesh position={[-0.45, 0.55, 0.39]} castShadow>
        <cylinderGeometry args={[0.012, 0.012, 0.38, 16]} />
        <meshStandardMaterial
          color={selectedHardware.color}
          roughness={selectedHardware.roughness}
          metalness={selectedHardware.metalness}
        />
      </mesh>

      {/* ================= DECOR ON TOP COUNTER ================= */}
      {/* Architectural Fluted Stone Vase */}
      <mesh position={[-0.8, 1.25, -0.05]} castShadow>
        <cylinderGeometry args={[0.11, 0.14, 0.4, 24]} />
        <meshStandardMaterial color="#786D61" roughness={0.85} />
      </mesh>

      {/* Small Dried Botanical Branch */}
      <mesh position={[-0.8, 1.55, -0.05]} rotation={[0.1, 0.2, 0.1]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
        <meshStandardMaterial color="#4A3728" roughness={0.9} />
      </mesh>

      {/* Minimalist Brass Sculptural Ring */}
      <mesh position={[-0.2, 1.22, 0.1]} rotation={[0, 0.35, 0]} castShadow>
        <torusGeometry args={[0.16, 0.02, 16, 32]} />
        <meshStandardMaterial
          color={selectedHardware.color}
          roughness={selectedHardware.roughness}
          metalness={selectedHardware.metalness}
        />
      </mesh>

      {/* Contact Shadow Plane */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[5, 4]} />
        <shadowMaterial opacity={0.25} />
      </mesh>
    </group>
  );
}

/**
 * Camera View Inspector Controller
 */
function CameraController({
  viewMode,
  isResetting,
  onResetComplete
}: {
  viewMode: "full" | "doors" | "top";
  isResetting: boolean;
  onResetComplete: () => void;
}) {
  useFrame((state) => {
    let targetPos = new THREE.Vector3(0, 0.9, 3.2);
    let lookTarget = new THREE.Vector3(0, 0.5, 0);

    if (viewMode === "doors") {
      targetPos = new THREE.Vector3(-0.5, 0.6, 1.9);
      lookTarget = new THREE.Vector3(-0.45, 0.55, 0.2);
    } else if (viewMode === "top") {
      targetPos = new THREE.Vector3(0, 1.7, 1.8);
      lookTarget = new THREE.Vector3(0, 0.9, 0);
    }

    if (isResetting) {
      targetPos = new THREE.Vector3(0, 0.9, 3.2);
      lookTarget = new THREE.Vector3(0, 0.5, 0);
    }

    state.camera.position.lerp(targetPos, 0.06);
    state.camera.lookAt(lookTarget);

    if (isResetting && state.camera.position.distanceTo(targetPos) < 0.05) {
      onResetComplete();
    }
  });

  return null;
}

export function Signature3D() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(CABINET_MATERIALS[0]);
  const [selectedHardware, setSelectedHardware] = useState<HardwareOption>(HARDWARE_OPTIONS[0]);
  const [selectedLighting, setSelectedLighting] = useState<LightingOption>(LIGHTING_MODES[0]);
  const [viewMode, setViewMode] = useState<"full" | "doors" | "top">("full");
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  const handleCustomQuote = () => {
    const msg = `Hello Global Interio, I am interested in custom furniture with the ${selectedMaterial.name} finish and ${selectedHardware.name} hardware viewed on your 3D visualizer. Could you share details on pricing and timeline?`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="signature-3d" className="py-24 bg-brand-linen border-y border-brand-sand/30 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 bg-brand-sand/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-brass" />
              <span className="text-xs font-semibold tracking-widest text-brand-walnut uppercase">
                Interactive Material Customizer
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-charcoal font-normal">
              Explore the <span className="italic font-light">Details.</span>
            </h2>
            <p className="mt-3 text-brand-charcoal/70 text-base max-w-xl font-light">
              Experience the tactile luxury of our custom furniture crafted at our Vijayapura factory.
              Rotate, zoom, and test architectural finishes in real time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setViewMode("full");
                setIsResetting(true);
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-white border border-brand-sand/50 text-brand-charcoal hover:border-brand-brass transition-all rounded-none shadow-sm"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Reset 3D View</span>
            </button>
          </div>
        </div>

        {/* 3D Visualizer & Customizer Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Center: 3D Viewport (7 Cols) */}
          <div className="lg:col-span-7 relative h-[520px] bg-brand-ivory rounded-none border border-brand-sand/40 overflow-hidden shadow-luxury">
            {webGLSupported ? (
              <ThreeErrorBoundary
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-brand-sand/10 text-center">
                    <img
                      src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80"
                      alt="Custom Furniture Finish"
                      className="w-48 h-48 object-cover rounded shadow mb-4"
                    />
                    <h4 className="font-serif text-xl text-brand-charcoal">Custom Furniture Preview</h4>
                    <p className="text-sm text-brand-charcoal/70 mt-1 max-w-sm">
                      {selectedMaterial.name} with {selectedHardware.name}
                    </p>
                  </div>
                }
              >
                <Canvas
                  shadows
                  dpr={[1, 1.8]}
                  camera={{ position: [0, 0.9, 3.2], fov: 45 }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <Suspense fallback={null}>
                    <ModularCredenzaModel
                      selectedMaterial={selectedMaterial}
                      selectedHardware={selectedHardware}
                      lighting={selectedLighting}
                      cameraTarget={[0, 0.5, 0]}
                    />
                    <OrbitControls
                      enablePan={false}
                      minDistance={1.8}
                      maxDistance={4.5}
                      minPolarAngle={Math.PI / 4}
                      maxPolarAngle={Math.PI / 2.05}
                      dampingFactor={0.08}
                    />
                    <CameraController
                      viewMode={viewMode}
                      isResetting={isResetting}
                      onResetComplete={() => setIsResetting(false)}
                    />
                  </Suspense>
                </Canvas>
              </ThreeErrorBoundary>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80"
                  alt="Custom Furniture Finish"
                  className="max-h-full object-contain"
                />
              </div>
            )}

            {/* Quick Perspective Switcher Badges */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md p-1 border border-brand-sand/40 text-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-brass px-2 flex items-center gap-1">
                <Eye className="w-3 h-3" /> View:
              </span>
              <button
                onClick={() => setViewMode("full")}
                className={`px-2.5 py-1 text-xs transition-colors ${
                  viewMode === "full" ? "bg-brand-charcoal text-white" : "text-brand-charcoal/70 hover:text-black"
                }`}
              >
                Full Unit
              </button>
              <button
                onClick={() => setViewMode("doors")}
                className={`px-2.5 py-1 text-xs transition-colors ${
                  viewMode === "doors" ? "bg-brand-charcoal text-white" : "text-brand-charcoal/70 hover:text-black"
                }`}
              >
                Fluted Doors
              </button>
              <button
                onClick={() => setViewMode("top")}
                className={`px-2.5 py-1 text-xs transition-colors ${
                  viewMode === "top" ? "bg-brand-charcoal text-white" : "text-brand-charcoal/70 hover:text-black"
                }`}
              >
                Marble & Brass
              </button>
            </div>

            {/* Live Model Badge */}
            <div className="absolute bottom-4 left-4 z-10 bg-brand-charcoal/85 backdrop-blur-md px-3 py-1.5 text-xs text-brand-ivory border border-brand-brass/30">
              <span className="text-brand-brass font-medium">Selected Finish: </span>
              {selectedMaterial.name} • {selectedHardware.name}
            </div>
          </div>

          {/* Right: Interactive Configuration Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 border border-brand-sand/40 shadow-luxury flex flex-col justify-between">
            <div>
              {/* Finish Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest font-semibold text-brand-charcoal">
                    1. Cabinet & Paneling Material
                  </span>
                  <span className="text-xs text-brand-brass font-medium">{selectedMaterial.badge}</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {CABINET_MATERIALS.map((mat) => {
                    const isSelected = selectedMaterial.id === mat.id;
                    return (
                      <button
                        key={mat.id}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`flex items-center gap-3 p-3 text-left border transition-all ${
                          isSelected
                            ? "border-brand-brass bg-brand-ivory/60 ring-1 ring-brand-brass"
                            : "border-brand-sand/40 hover:border-brand-sand bg-white"
                        }`}
                      >
                        <span
                          className="w-6 h-6 rounded-full border border-black/10 shrink-0 shadow-inner"
                          style={{ backgroundColor: mat.color }}
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-brand-charcoal truncate">{mat.name}</div>
                          <div className="text-[10px] text-brand-charcoal/60 truncate">{mat.badge}</div>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-brass ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2.5 text-xs text-brand-charcoal/70 font-light leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>

              {/* Hardware Selection */}
              <div className="mb-6 pt-5 border-t border-brand-sand/30">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-charcoal block mb-3">
                  2. Hardware & Metal Accents
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {HARDWARE_OPTIONS.map((hw) => {
                    const isSelected = selectedHardware.id === hw.id;
                    return (
                      <button
                        key={hw.id}
                        onClick={() => setSelectedHardware(hw)}
                        className={`flex items-center gap-2.5 p-2.5 text-left border transition-all ${
                          isSelected
                            ? "border-brand-brass bg-brand-ivory/60 ring-1 ring-brand-brass"
                            : "border-brand-sand/40 hover:border-brand-sand bg-white"
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shrink-0 shadow-inner"
                          style={{ backgroundColor: hw.color }}
                        />
                        <span className="text-xs font-medium text-brand-charcoal truncate">{hw.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-brass ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lighting Ambience */}
              <div className="mb-6 pt-5 border-t border-brand-sand/30">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-charcoal block mb-3">
                  3. Room Lighting Ambience
                </span>
                <div className="flex flex-col gap-2">
                  {LIGHTING_MODES.map((lm) => {
                    const isSelected = selectedLighting.id === lm.id;
                    return (
                      <button
                        key={lm.id}
                        onClick={() => setSelectedLighting(lm)}
                        className={`flex items-center justify-between p-2.5 text-left border text-xs transition-all ${
                          isSelected
                            ? "border-brand-brass bg-brand-ivory/60 font-medium text-brand-charcoal"
                            : "border-brand-sand/40 text-brand-charcoal/70 hover:border-brand-sand"
                        }`}
                      >
                        <span>{lm.name}</span>
                        <span className="text-[10px] text-brand-brass">{lm.warmth}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* WhatsApp Quote Action */}
            <div className="pt-5 border-t border-brand-sand/40 mt-2">
              <button
                onClick={handleCustomQuote}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-charcoal text-brand-ivory hover:bg-brand-brass transition-all duration-300 text-xs uppercase tracking-widest font-medium"
              >
                <span>Enquire With This 3D Configuration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-brand-charcoal/60 text-center mt-2">
                Customized & manufactured in Vijayapura. Dimensions tailored to your room plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
