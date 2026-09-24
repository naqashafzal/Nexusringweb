"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";
import { Layers } from "lucide-react";

// Generates a seamless procedural noise texture for powder-coated matte finish
const generateNoiseTexture = () => {
  if (typeof document === "undefined") return null;
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const imgData = context.createImageData(size, size);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const val = Math.floor(Math.random() * 255);
    imgData.data[i] = val;
    imgData.data[i + 1] = val;
    imgData.data[i + 2] = val;
    imgData.data[i + 3] = 255;
  }
  context.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);
  return texture;
};

interface ModelProps {
  scrollProgress?: MotionValue<number>;
  explodeFactor?: number;
  disableExplode?: boolean;
  scale?: number;
}

function Model({ scrollProgress, explodeFactor, disableExplode }: ModelProps) {
  const gltf = useGLTF("/models/nexus_ring.glb") as any;
  const mainGroupRef = useRef<THREE.Group>(null);
  const partsRef = useRef<{
    [key: string]: { mesh: THREE.Mesh; origPos: THREE.Vector3 };
  }>({});

  const noiseTexture = useMemo(() => generateNoiseTexture(), []);

  // Premium Curated Materials
  const matteAnodizedMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0c111a"),
        roughness: 0.45,
        metalness: 0.65,
        bumpMap: noiseTexture || undefined,
        bumpScale: 0.003,
      }),
    [noiseTexture]
  );

  const totemMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#182232"),
        roughness: 0.25,
        metalness: 0.85,
        bumpMap: noiseTexture || undefined,
        bumpScale: 0.002,
      }),
    [noiseTexture]
  );

  const subtleGlowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#002a18"),
        emissive: new THREE.Color("#00FF9D"),
        emissiveIntensity: 1.8,
        roughness: 0.15,
        metalness: 0.3,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#00FF9D"),
        emissive: new THREE.Color("#00FF9D"),
        emissiveIntensity: 3.2,
        roughness: 0.1,
        toneMapped: false,
      }),
    []
  );

  const pcbHighlightMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#071a10"),
        roughness: 0.35,
        metalness: 0.6,
      }),
    []
  );

  const matteComponentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#111827"),
        roughness: 0.6,
        metalness: 0.35,
      }),
    []
  );

  const textMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffffff"),
        emissive: new THREE.Color("#00FF9D"),
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.2,
      }),
    []
  );

  // Clone scene so we can mutate positions cleanly per instance
  const clonedScene = useMemo(() => {
    if (!gltf?.scene) return null;
    return gltf.scene.clone(true);
  }, [gltf?.scene]);

  // Setup parts mapping and assign materials
  useEffect(() => {
    if (!clonedScene) return;
    const parts: { [key: string]: { mesh: THREE.Mesh; origPos: THREE.Vector3 } } = {};

    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        parts[child.name] = {
          mesh: child,
          origPos: child.position.clone(),
        };

        // Assign curated materials
        if (child.name === "base" || child.name === "lid") {
          child.material = matteAnodizedMaterial;
        } else if (child.name === "totem") {
          child.material = totemMaterial;
        } else if (child.name === "Body8(7)") {
          child.material = subtleGlowMaterial;
        } else if (child.name.includes("LED_Ring") || child.name.includes("Neopixel")) {
          child.material = glowMaterial;
        } else if (child.name.includes("Esp32")) {
          child.material = pcbHighlightMaterial;
        } else if (child.name.includes("Hall_Sensor")) {
          child.material = matteComponentMaterial;
        } else if (child.name.startsWith("Text")) {
          child.material = textMaterial;
        }
      }
    });

    partsRef.current = parts;
  }, [
    clonedScene,
    matteAnodizedMaterial,
    totemMaterial,
    subtleGlowMaterial,
    glowMaterial,
    pcbHighlightMaterial,
    matteComponentMaterial,
    textMaterial,
  ]);

  // ─── Frame Loop: Animated Pulsing Glow + Exploded View Disassembly ───
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Determine explosion factor (0 = assembled, 1 = max exploded)
    let p = 0;
    if (disableExplode) {
      p = 0;
    } else if (explodeFactor !== undefined) {
      p = explodeFactor;
    } else if (scrollProgress) {
      p = Math.max(scrollProgress.get(), 0);
    } else {
      p = 0.85;
    }

    // Main Group Orientation & Continuous 360 Rotation + Gentle Floating
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.x = 0.48 + Math.cos(time * 0.4) * 0.02;
      mainGroupRef.current.rotation.y = time * 0.35 + (scrollProgress ? scrollProgress.get() * Math.PI * 0.5 : 0);
      mainGroupRef.current.position.y = Math.sin(time * 0.8) * 0.18;
    }

    // High-Intensity Pulsing Animated Glow on NeoPixel ring
    if (glowMaterial) {
      glowMaterial.emissiveIntensity = 3.0 + Math.sin(time * 4.5) * 1.5;
    }

    if (subtleGlowMaterial) {
      subtleGlowMaterial.emissiveIntensity = 1.6 + Math.sin(time * 2.5) * 0.8 + p * 1.0;
    }

    const parts = partsRef.current;
    if (!parts || Object.keys(parts).length === 0) return;

    // 1. Totem lifts high in Y
    if (parts["totem"]) {
      parts["totem"].mesh.position.y = parts["totem"].origPos.y + p * 8.5;
    }

    // 2. Top Anodized Housing Lid lifts
    if (parts["lid"]) {
      parts["lid"].mesh.position.y = parts["lid"].origPos.y + p * 5.0;
    }

    // 3. Laser Text Branding lifts with Lid
    ["Text_0", "Text_1", "Text_2", "Text_3", "Text_01"].forEach((name) => {
      if (parts[name]) {
        parts[name].mesh.position.y = parts[name].origPos.y + p * 5.02;
      }
    });

    // 4. Middle Glow Ring Diffuser & NeoPixel LED ring float mid-air
    if (parts["Body8(7)"]) {
      parts["Body8(7)"].mesh.position.y = parts["Body8(7)"].origPos.y + p * 3.4;
    }
    const ledKey = Object.keys(parts).find((k) => k.includes("LED_Ring") || k.includes("Neopixel"));
    if (ledKey && parts[ledKey]) {
      parts[ledKey].mesh.position.y = parts[ledKey].origPos.y + p * 2.5;
    }

    // 5. ESP32-C3 Microcontroller PCB lifts & shifts outwards
    const espKey = Object.keys(parts).find((k) => k.includes("Esp32"));
    if (espKey && parts[espKey]) {
      parts[espKey].mesh.position.y = parts[espKey].origPos.y + p * 1.6;
      parts[espKey].mesh.position.x = parts[espKey].origPos.x - p * 2.0;
    }

    // 6. Hall Effect Sensors separate radially outward
    const hallSensors = Object.keys(parts).filter((k) => k.includes("Hall_Sensor"));
    hallSensors.forEach((name, idx) => {
      const pObj = parts[name];
      pObj.mesh.position.y = pObj.origPos.y + p * 1.2;
      const radX = Math.sign(pObj.origPos.x || (idx % 2 === 0 ? 1 : -1));
      const radZ = Math.sign(pObj.origPos.z || (idx < 2 ? 1 : -1));
      pObj.mesh.position.x = pObj.origPos.x + p * radX * 1.8;
      pObj.mesh.position.z = pObj.origPos.z + p * radZ * 1.8;
    });

    // 7. Base dock anchors firmly at original position
    if (parts["base"]) {
      parts["base"].mesh.position.copy(parts["base"].origPos);
    }
  });

  if (!clonedScene) return null;

  return (
    <group ref={mainGroupRef} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/nexus_ring.glb");

export default function ExplodedRingCanvas({
  scrollProgress,
  centerPosition = false,
  disableExplode = false,
  explodeFactor: externalExplodeFactor,
}: {
  scrollProgress?: MotionValue<number>;
  centerPosition?: boolean;
  disableExplode?: boolean;
  explodeFactor?: number;
}) {
  const [zoom, setZoom] = useState(1);
  const [explodeFactor, setExplodeFactor] = useState(0.85);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Position and Scale tuned for desktop & mobile
  // Model native radius is ~9 units (diameter 18 units)
  const posX = centerPosition ? 0 : isMobile ? 0 : disableExplode ? 4.6 : 5.8;
  const posY = disableExplode ? (isMobile ? -0.6 : 0.2) : (isMobile ? -0.8 : -0.2);
  const baseScale = disableExplode ? (isMobile ? 0.32 : 0.44) : (isMobile ? 0.28 : 0.38);

  return (
    <div className="w-full h-full bg-transparent relative pointer-events-auto">
      {/* Interactive HUD Controls Overlay (Only shown when explosion controls are active) */}
      {!disableExplode && (
        <div className="absolute bottom-6 right-6 z-[120] flex flex-col sm:flex-row items-center gap-3 pointer-events-auto bg-[#070A10]/90 backdrop-blur-md border border-[#151D2A] p-3 rounded-2xl shadow-2xl">
          {/* Explode Amount Slider */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#cbd5e1] px-2">
            <Layers size={14} className="text-[#00FF9D]" />
            <span>DISASSEMBLY:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={explodeFactor}
              onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
              className="w-28 accent-[#00FF9D] cursor-pointer"
            />
            <span className="text-[#00FF9D] font-bold w-10 text-right">
              {Math.round(explodeFactor * 100)}%
            </span>
          </div>

          {/* Quick Explosion Preset Buttons */}
          <div className="flex items-center gap-1.5 border-t sm:border-t-0 sm:border-l border-[#151D2A] pt-2 sm:pt-0 sm:pl-3 font-mono text-[10px]">
            <button
              onClick={() => setExplodeFactor(0)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                explodeFactor === 0
                  ? "border-[#00FF9D] bg-[#00FF9D]/20 text-[#00FF9D]"
                  : "border-[#151D2A] bg-[#030508] text-[#64748b] hover:text-white"
              }`}
            >
              ASSEMBLED
            </button>
            <button
              onClick={() => setExplodeFactor(0.85)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                explodeFactor === 0.85
                  ? "border-[#00FF9D] bg-[#00FF9D]/20 text-[#00FF9D]"
                  : "border-[#151D2A] bg-[#030508] text-[#64748b] hover:text-white"
              }`}
            >
              EXPLODED
            </button>
            <button
              onClick={() => setExplodeFactor(1.0)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                explodeFactor === 1.0
                  ? "border-[#00FF9D] bg-[#00FF9D]/20 text-[#00FF9D]"
                  : "border-[#151D2A] bg-[#030508] text-[#64748b] hover:text-white"
              }`}
            >
              MAX 100%
            </button>
          </div>

          {/* Zoom In/Out Buttons */}
          <div className="flex items-center gap-1.5 border-t sm:border-t-0 sm:border-l border-[#151D2A] pt-2 sm:pt-0 sm:pl-3 font-mono text-xs">
            <button
              onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
              className="w-8 h-8 rounded-lg bg-[#030508] hover:bg-[#00FF9D] hover:text-[#001a0a] border border-[#151D2A] text-white flex items-center justify-center transition-all"
              title="Zoom Out (-)"
            >
              -
            </button>
            <button
              onClick={() => setZoom((z) => Math.min(2.5, z + 0.2))}
              className="w-8 h-8 rounded-lg bg-[#030508] hover:bg-[#00FF9D] hover:text-[#001a0a] border border-[#151D2A] text-white flex items-center justify-center transition-all"
              title="Zoom In (+)"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Simplified Zoom Buttons for Homepage (when disableExplode is true) */}
      {disableExplode && (
        <div className="absolute bottom-6 right-6 z-[120] flex items-center gap-2 pointer-events-auto bg-[#070A10]/90 backdrop-blur-md border border-[#151D2A] p-2 rounded-2xl shadow-2xl font-mono text-xs">
          <button
            onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
            className="w-8 h-8 rounded-lg bg-[#030508] hover:bg-[#00FF9D] hover:text-[#001a0a] border border-[#151D2A] text-white flex items-center justify-center transition-all"
            title="Zoom Out (-)"
          >
            -
          </button>
          <button
            onClick={() => setZoom((z) => Math.min(2.5, z + 0.2))}
            className="w-8 h-8 rounded-lg bg-[#030508] hover:bg-[#00FF9D] hover:text-[#001a0a] border border-[#151D2A] text-white flex items-center justify-center transition-all"
            title="Zoom In (+)"
          >
            +
          </button>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 14, 26], fov: 32 }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          {/* Robust Self-Contained Studio Lighting (100% offline & instant) */}
          <ambientLight intensity={1.6} color="#e0f2fe" />
          <directionalLight position={[12, 18, 12]} intensity={3.0} color="#ffffff" />
          <directionalLight position={[-12, 10, -8]} intensity={2.2} color="#00FF9D" />
          <directionalLight position={[0, -8, 10]} intensity={1.0} color="#00E5FF" />
          <pointLight position={[0, 6, 0]} intensity={2.5} color="#00FF9D" distance={15} />
          <pointLight position={[-4, 2, 4]} intensity={1.8} color="#00E5FF" distance={12} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            enableDamping
            dampingFactor={0.05}
          />

          <group position={[posX, posY, 0]}>
            <Model
              scale={baseScale * zoom}
              scrollProgress={scrollProgress}
              explodeFactor={externalExplodeFactor !== undefined ? externalExplodeFactor : explodeFactor}
              disableExplode={disableExplode}
            />
          </group>

          <EffectComposer>
            <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} intensity={1.2} />
          </EffectComposer>

          <ContactShadows
            position={[posX, posY - 2.2, 0]}
            opacity={0.5}
            scale={22}
            blur={2.5}
            far={6}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
