"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";
import { Layers } from "lucide-react";

interface ModelProps {
  scrollProgress?: MotionValue<number>;
  explodeFactor?: number;
  disableExplode?: boolean;
  scale?: number;
  selectedComponent?: string | null;
}

function Model({ scrollProgress, explodeFactor, disableExplode, scale = 1, selectedComponent }: ModelProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gltf = useGLTF("/models/nexus_ring.glb") as any;
  const mainGroupRef = useRef<THREE.Group>(null);
  const partsRef = useRef<{
    [key: string]: { mesh: THREE.Mesh; origPos: THREE.Vector3 };
  }>({});

  // Clone scene so we can mutate positions cleanly per instance
  const scene = gltf?.scene;
  const { clonedScene, autoScale, centerOffset } = useMemo(() => {
    if (!scene) return { clonedScene: null, autoScale: 1, centerOffset: new THREE.Vector3() };
    const cloned = scene.clone(true);

    // Compute bounding box to automatically calculate proper scale factor regardless of meters/mm units
    const bbox = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bbox.getSize(size);
    bbox.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    // Target dimension of the ring in Three.js units (~13.5 units for commanding hero presence)
    const targetSize = 13.5;
    const computedScale = maxDim > 0 ? targetSize / maxDim : 1;

    return {
      clonedScene: cloned,
      autoScale: computedScale,
      centerOffset: center.clone().negate(),
    };
  }, [scene]);

  // Setup parts mapping and highlight materials
  useEffect(() => {
    if (!clonedScene) return;
    const parts: { [key: string]: { mesh: THREE.Mesh; origPos: THREE.Vector3 } } = {};

    const highlightMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#D83A50"),
      emissive: new THREE.Color("#D83A50"),
      emissiveIntensity: 1.2,
      roughness: 0.25,
      metalness: 0.5,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        parts[child.name] = {
          mesh: child,
          origPos: child.position.clone(),
        };

        // Component selection highlight support for both old and new GLB node naming
        const isSelected =
          (selectedComponent === "enclosure" && (child.name === "base" || child.name === "lid")) ||
          (selectedComponent === "totem" && (child.name === "totem" || child.name.startsWith("totem_"))) ||
          (selectedComponent === "controller" && (child.name.includes("Esp32") || child.name.includes("controller"))) ||
          (selectedComponent === "sensors" && child.name.includes("Hall_Sensor")) ||
          (selectedComponent === "led" && (child.name.includes("LED_Ring") || child.name === "Body8(7)" || child.name === "led_cover" || child.name === "totem_light_ring"));

        if (isSelected) {
          child.material = highlightMat;
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

    const parts = partsRef.current;
    if (!parts || Object.keys(parts).length === 0) return;

    // Relative lift scalar in native model coordinates (normalized to 10% model height per unit)
    const liftUnit = 0.012;

    // 1. Totem lifts highest in Y
    ["totem", "totem_main", "totem_base", "totem_light_ring", "Decal_Totem_Dish"].forEach((name) => {
      if (parts[name]) {
        parts[name].mesh.position.y = parts[name].origPos.y + p * liftUnit * 10;
      }
    });

    // 2. Top Housing Lid lifts with all mode decals & logos
    ["lid", "Decal_Middle_Logo", "Decal_Mode_Break", "Decal_Mode_Creative", "Decal_Mode_Deep", "Decal_Mode_Meeting", "Text_0", "Text_1", "Text_2", "Text_3", "Text_01"].forEach((name) => {
      if (parts[name]) {
        parts[name].mesh.position.y = parts[name].origPos.y + p * liftUnit * 6.5;
      }
    });

    // 3. LED cover / diffuser ring floats mid-air
    ["led_cover", "Body8(7)"].forEach((name) => {
      if (parts[name]) {
        parts[name].mesh.position.y = parts[name].origPos.y + p * liftUnit * 4.0;
      }
    });

    const ledKey = Object.keys(parts).find((k) => k.includes("LED_Ring") || k.includes("Neopixel"));
    if (ledKey && parts[ledKey]) {
      parts[ledKey].mesh.position.y = parts[ledKey].origPos.y + p * liftUnit * 3.0;
    }

    // 4. ESP32-C3 Microcontroller PCB lifts
    const espKey = Object.keys(parts).find((k) => k.includes("Esp32"));
    if (espKey && parts[espKey]) {
      parts[espKey].mesh.position.y = parts[espKey].origPos.y + p * liftUnit * 2.2;
    }

    // 5. Hall Effect Sensors lift
    const hallSensors = Object.keys(parts).filter((k) => k.includes("Hall_Sensor"));
    hallSensors.forEach((name) => {
      const pObj = parts[name];
      if (pObj) {
        pObj.mesh.position.y = pObj.origPos.y + p * liftUnit * 1.4;
      }
    });

    // 6. Base dock remains anchored
    if (parts["base"]) {
      parts["base"].mesh.position.copy(parts["base"].origPos);
    }
  });

  if (!clonedScene) return null;

  const finalScale = autoScale * scale;

  return (
    <group ref={mainGroupRef} dispose={null} scale={finalScale}>
      <group position={[centerOffset.x, centerOffset.y, centerOffset.z]}>
        <primitive object={clonedScene} />
      </group>
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
  const posY = disableExplode ? (isMobile ? 0.0 : 0.4) : isMobile ? -0.8 : -0.2;
  const baseScale = disableExplode ? (isMobile ? 0.55 : 0.72) : isMobile ? 0.40 : 0.52;

  return (
    <div className="w-full h-full bg-transparent relative pointer-events-auto">
      {/* Interactive HUD Controls Overlay */}
      {!disableExplode && (
        <div className="absolute bottom-6 right-6 z-[120] flex flex-col sm:flex-row items-center gap-3 pointer-events-auto bg-[#080A0E]/90 backdrop-blur-md border border-[#303A48] p-3 rounded-2xl shadow-xl">
          {/* Explode Amount Slider */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#A5AFBD] px-2">
            <Layers size={14} className="text-[#D83A50]" />
            <span className="text-[11px] font-medium tracking-wide">DISASSEMBLY:</span>
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
              className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                explodeFactor === 0
                  ? "border-[#D83A50] bg-[#D83A50]/20 text-[#D83A50]"
                  : "border-[#303A48] bg-[#11151C] text-[#A5AFBD] hover:text-[#F5F6F8] hover:bg-[#1B222D]"
              }`}
            >
              ASSEMBLED
            </button>
            <button
              type="button"
              onClick={() => setExplodeFactor(0.85)}
              className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                explodeFactor === 0.85
                  ? "border-[#D83A50] bg-[#D83A50]/20 text-[#D83A50]"
                  : "border-[#303A48] bg-[#11151C] text-[#A5AFBD] hover:text-[#F5F6F8] hover:bg-[#1B222D]"
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
              className="w-7 h-7 rounded-lg bg-[#11151C] hover:bg-[#1B222D] hover:text-white border border-[#303A48] text-[#A5AFBD] flex items-center justify-center transition-all cursor-pointer font-bold"
              title="Zoom Out (-)"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(2.5, z + 0.2))}
              className="w-7 h-7 rounded-lg bg-[#11151C] hover:bg-[#1B222D] hover:text-white border border-[#303A48] text-[#A5AFBD] flex items-center justify-center transition-all cursor-pointer font-bold"
              title="Zoom In (+)"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Simplified Zoom for Homepage */}
      {disableExplode && (
        <div className="absolute bottom-6 right-6 z-[120] flex items-center gap-2 pointer-events-auto bg-[#080A0E]/90 backdrop-blur-md border border-[#303A48] p-2 rounded-2xl shadow-xl font-mono text-xs">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
            className="w-7 h-7 rounded-lg bg-[#11151C] hover:bg-[#1B222D] hover:text-white border border-[#303A48] text-[#A5AFBD] flex items-center justify-center transition-all cursor-pointer font-bold"
            title="Zoom Out (-)"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2.5, z + 0.2))}
            className="w-7 h-7 rounded-lg bg-[#11151C] hover:bg-[#1B222D] hover:text-white border border-[#303A48] text-[#A5AFBD] flex items-center justify-center transition-all cursor-pointer font-bold"
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
            position={[posX, posY - 2.8, 0]}
            opacity={0.35}
            scale={48}
            blur={2.8}
            far={10}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
