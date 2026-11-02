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
  selectedComponent?: string | null;
}

function Model({ scrollProgress, explodeFactor, disableExplode, selectedComponent }: ModelProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gltf = useGLTF("/models/nexus_ring.glb") as any;
  const mainGroupRef = useRef<THREE.Group>(null);
  const partsRef = useRef<{
    [key: string]: { mesh: THREE.Mesh; origPos: THREE.Vector3 };
  }>({});

  const noiseTexture = useMemo(() => generateNoiseTexture(), []);

  // Material references to avoid mutating memoized values in render loops (React 19 compiler safety)
  const materialsRef = useRef<{
    matteAnodized: THREE.MeshStandardMaterial;
    totem: THREE.MeshStandardMaterial;
    subtleGlow: THREE.MeshStandardMaterial;
    glow: THREE.MeshStandardMaterial;
    pcb: THREE.MeshStandardMaterial;
    component: THREE.MeshStandardMaterial;
    text: THREE.MeshStandardMaterial;
    highlight: THREE.MeshStandardMaterial;
  }>({
    matteAnodized: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#24272D"),
      roughness: 0.42,
      metalness: 0.65,
      bumpMap: noiseTexture || undefined,
      bumpScale: 0.0015,
    }),
    totem: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1A1D23"),
      roughness: 0.22,
      metalness: 0.88,
      bumpMap: noiseTexture || undefined,
      bumpScale: 0.0015,
    }),
    subtleGlow: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#111317"),
      emissive: new THREE.Color("#C93E50"),
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.9,
    }),
    glow: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C93E50"),
      emissive: new THREE.Color("#C93E50"),
      emissiveIntensity: 1.6,
      roughness: 0.2,
      toneMapped: false,
    }),
    pcb: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#0f1c16"),
      roughness: 0.45,
      metalness: 0.45,
    }),
    component: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#20242B"),
      roughness: 0.5,
      metalness: 0.3,
    }),
    text: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#F5F5F7"),
      emissive: new THREE.Color("#C93E50"),
      emissiveIntensity: 0.15,
      roughness: 0.35,
      metalness: 0.2,
    }),
    highlight: new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C93E50"),
      emissive: new THREE.Color("#C93E50"),
      emissiveIntensity: 1.2,
      roughness: 0.25,
      metalness: 0.5,
    }),
  });

  // Clone scene so we can mutate positions cleanly per instance
  const scene = gltf?.scene;
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return scene.clone(true);
  }, [scene]);

  // Setup parts mapping and assign materials
  useEffect(() => {
    if (!clonedScene) return;
    const parts: { [key: string]: { mesh: THREE.Mesh; origPos: THREE.Vector3 } } = {};
    const mats = materialsRef.current;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        parts[child.name] = {
          mesh: child,
          origPos: child.position.clone(),
        };

        // Assign curated materials with optional selection highlight
        const isSelected =
          (selectedComponent === "enclosure" && (child.name === "base" || child.name === "lid")) ||
          (selectedComponent === "totem" && child.name === "totem") ||
          (selectedComponent === "controller" && child.name.includes("Esp32")) ||
          (selectedComponent === "sensors" && child.name.includes("Hall_Sensor")) ||
          (selectedComponent === "led" && (child.name.includes("LED_Ring") || child.name === "Body8(7)"));

        if (isSelected) {
          child.material = mats.highlight;
        } else if (child.name === "base" || child.name === "lid") {
          child.material = mats.matteAnodized;
        } else if (child.name === "totem") {
          child.material = mats.totem;
        } else if (child.name === "Body8(7)") {
          child.material = mats.subtleGlow;
        } else if (child.name.includes("LED_Ring") || child.name.includes("Neopixel")) {
          child.material = mats.glow;
        } else if (child.name.includes("Esp32")) {
          child.material = mats.pcb;
        } else if (child.name.includes("Hall_Sensor")) {
          child.material = mats.component;
        } else if (child.name.startsWith("Text")) {
          child.material = mats.text;
        }
      }
    });

    partsRef.current = parts;
  }, [clonedScene, selectedComponent]);

  // ─── Frame Loop: Animated Disassembly + Gentle Floating ───
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

    // Main Group Orientation & Continuous 360 Rotation + Floating
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.x = 0.42 + Math.cos(time * 0.4) * 0.02;
      mainGroupRef.current.rotation.y = time * 0.35 + (scrollProgress ? scrollProgress.get() * Math.PI * 0.5 : 0);
      mainGroupRef.current.position.y = Math.sin(time * 0.8) * 0.18;
    }

    // Gentle pulsing emissive on glow elements
    const mats = materialsRef.current;
    if (mats.glow) {
      mats.glow.emissiveIntensity = 2.4 + Math.sin(time * 3.5) * 0.8;
    }
    if (mats.subtleGlow) {
      mats.subtleGlow.emissiveIntensity = 1.2 + Math.sin(time * 2.0) * 0.4 + p * 0.5;
    }

    const parts = partsRef.current;
    if (!parts || Object.keys(parts).length === 0) return;

    // 1. Totem lifts high in Y
    if (parts["totem"]) {
      parts["totem"].mesh.position.y = parts["totem"].origPos.y + p * 12.0;
    }

    // 2. Top Anodized Housing Lid lifts
    if (parts["lid"]) {
      parts["lid"].mesh.position.y = parts["lid"].origPos.y + p * 8.0;
    }

    // 3. Laser Text Branding lifts with Lid
    ["Text_0", "Text_1", "Text_2", "Text_3", "Text_01"].forEach((name) => {
      if (parts[name]) {
        parts[name].mesh.position.y = parts[name].origPos.y + p * 8.02;
      }
    });

    // 4. Middle Glow Ring Diffuser & NeoPixel LED ring float mid-air
    if (parts["Body8(7)"]) {
      parts["Body8(7)"].mesh.position.y = parts["Body8(7)"].origPos.y + p * 5.5;
    }
    const ledKey = Object.keys(parts).find((k) => k.includes("LED_Ring") || k.includes("Neopixel"));
    if (ledKey && parts[ledKey]) {
      parts[ledKey].mesh.position.y = parts[ledKey].origPos.y + p * 4.0;
    }

    // 5. ESP32-C3 Microcontroller PCB lifts purely upward
    const espKey = Object.keys(parts).find((k) => k.includes("Esp32"));
    if (espKey && parts[espKey]) {
      parts[espKey].mesh.position.y = parts[espKey].origPos.y + p * 2.8;
    }

    // 6. Hall Effect Sensors lift purely upward
    const hallSensors = Object.keys(parts).filter((k) => k.includes("Hall_Sensor"));
    hallSensors.forEach((name) => {
      const pObj = parts[name];
      if (pObj) {
        pObj.mesh.position.y = pObj.origPos.y + p * 1.5;
      }
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
  selectedComponent,
}: {
  scrollProgress?: MotionValue<number>;
  centerPosition?: boolean;
  disableExplode?: boolean;
  explodeFactor?: number;
  selectedComponent?: string | null;
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

  const posX = centerPosition ? 0 : isMobile ? 0 : disableExplode ? 4.6 : 5.8;
  const posY = disableExplode ? (isMobile ? 0.0 : 0.6) : isMobile ? -0.8 : -0.2;
  const baseScale = disableExplode ? (isMobile ? 0.40 : 0.56) : isMobile ? 0.28 : 0.38;

  return (
    <div className="w-full h-full bg-transparent relative pointer-events-auto">
      {/* Interactive HUD Controls Overlay */}
      {!disableExplode && (
        <div className="absolute bottom-6 right-6 z-[120] flex flex-col sm:flex-row items-center gap-3 pointer-events-auto bg-[#11151C]/90 backdrop-blur-md border border-[#303A48] p-3 rounded-2xl shadow-2xl">
          {/* Explode Amount Slider */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#A5AFBD] px-2">
            <Layers size={14} className="text-[#D83A50]" />
            <span>DISASSEMBLY:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={explodeFactor}
              onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
              className="w-24 sm:w-28 accent-[#D83A50] cursor-pointer"
            />
            <span className="text-[#D83A50] font-bold w-10 text-right">
              {Math.round(explodeFactor * 100)}%
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 border-t sm:border-t-0 sm:border-l border-[#303A48] pt-2 sm:pt-0 sm:pl-3 font-mono text-[10px]">
            <button
              type="button"
              onClick={() => setExplodeFactor(0)}
              className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                explodeFactor === 0
                  ? "border-[#D83A50] bg-[#D83A50]/20 text-[#D83A50]"
                  : "border-[#303A48] bg-[#080A0E] text-[#A5AFBD] hover:text-[#F5F6F8]"
              }`}
            >
              ASSEMBLED
            </button>
            <button
              type="button"
              onClick={() => setExplodeFactor(0.85)}
              className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                explodeFactor === 0.85
                  ? "border-[#D83A50] bg-[#D83A50]/20 text-[#D83A50]"
                  : "border-[#303A48] bg-[#080A0E] text-[#A5AFBD] hover:text-[#F5F6F8]"
              }`}
            >
              EXPLODED
            </button>
          </div>

          {/* Zoom Buttons */}
          <div className="flex items-center gap-1.5 border-t sm:border-t-0 sm:border-l border-[#303A48] pt-2 sm:pt-0 sm:pl-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
              className="w-7 h-7 rounded-lg bg-[#080A0E] hover:bg-[#D83A50] hover:text-white border border-[#303A48] text-[#F5F6F8] flex items-center justify-center transition-all cursor-pointer"
              title="Zoom Out (-)"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(2.5, z + 0.2))}
              className="w-7 h-7 rounded-lg bg-[#080A0E] hover:bg-[#D83A50] hover:text-white border border-[#303A48] text-[#F5F6F8] flex items-center justify-center transition-all cursor-pointer"
              title="Zoom In (+)"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Simplified Zoom for Homepage */}
      {disableExplode && (
        <div className="absolute bottom-6 right-6 z-[120] flex items-center gap-2 pointer-events-auto bg-[#11151C]/90 backdrop-blur-md border border-[#303A48] p-2 rounded-2xl shadow-xl font-mono text-xs">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
            className="w-7 h-7 rounded-lg bg-[#080A0E] hover:bg-[#D83A50] hover:text-[#F5F6F8] border border-[#303A48] text-[#F5F6F8] flex items-center justify-center transition-all cursor-pointer"
            title="Zoom Out (-)"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2.5, z + 0.2))}
            className="w-7 h-7 rounded-lg bg-[#080A0E] hover:bg-[#D83A50] hover:text-[#F5F6F8] border border-[#303A48] text-[#F5F6F8] flex items-center justify-center transition-all cursor-pointer"
            title="Zoom In (+)"
          >
            +
          </button>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 10, 22], fov: 36 }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.4} color="#e2e8f0" />
          <directionalLight position={[10, 18, 14]} intensity={2.6} color="#ffffff" />
          <directionalLight position={[-12, 12, -8]} intensity={1.2} color="#D83A50" />
          <directionalLight position={[0, -6, 10]} intensity={0.6} color="#94a3b8" />
          <pointLight position={[0, 6, 0]} intensity={1.8} color="#D83A50" distance={14} />

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
              selectedComponent={selectedComponent}
            />
          </group>

          <EffectComposer>
            <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.8} intensity={0.6} />
          </EffectComposer>

          <ContactShadows
            position={[posX, posY - 2.0, 0]}
            opacity={0.55}
            scale={24}
            blur={2.2}
            far={6}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
