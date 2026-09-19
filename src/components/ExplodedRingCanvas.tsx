"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";
import { Layers, RotateCcw, Maximize2, Sliders } from "lucide-react";

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

function Model(props: any) {
  const gltf = useGLTF("/models/nexus_ring.glb") as any;
  const nodes = gltf?.nodes || {};
  const scene = gltf?.scene;
  const { scrollProgress, explodeFactor, disableExplode } = props;

  // Model Sub-component Refs for Exploded View Animations
  const mainGroupRef = useRef<THREE.Group>(null);
  const totemRef = useRef<THREE.Mesh>(null);
  const lidGroupRef = useRef<THREE.Group>(null);
  const espRef = useRef<THREE.Mesh>(null);
  const ledRingRef = useRef<THREE.Mesh>(null);
  const glowBodyRef = useRef<THREE.Mesh>(null);
  const hall1Ref = useRef<THREE.Mesh>(null);
  const hall2Ref = useRef<THREE.Mesh>(null);
  const hall3Ref = useRef<THREE.Mesh>(null);
  const hall4Ref = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  const noiseTexture = useMemo(() => generateNoiseTexture(), []);

  // Scene Traversal Backup for Fallback Explosion
  const sceneMeshes = useMemo(() => {
    if (!scene) return [];
    const list: Array<{ mesh: THREE.Mesh; origPos: THREE.Vector3; index: number }> = [];
    let idx = 0;
    scene.traverse((child: any) => {
      if (child.isMesh) {
        list.push({
          mesh: child,
          origPos: child.position.clone(),
          index: idx++,
        });
      }
    });
    return list;
  }, [scene]);

  // Materials
  const matteAnodizedMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#10141d"),
        roughness: 0.85,
        metalness: 0.15,
        bumpMap: noiseTexture || undefined,
        bumpScale: 0.003,
      }),
    [noiseTexture]
  );

  const darkMetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#181f2c"),
        roughness: 0.4,
        metalness: 0.8,
      }),
    []
  );

  // Middle Glow Ring Material (Breathing subtle aura)
  const subtleGlowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#001a0e"),
        emissive: new THREE.Color("#00FF9D"),
        emissiveIntensity: 1.8,
        roughness: 0.2,
        metalness: 0.5,
        toneMapped: false,
      }),
    []
  );

  // Small Middle Ring NeoPixel Material (High-intensity pulsing neon glow)
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
        color: new THREE.Color("#0a2416"),
        roughness: 0.3,
        metalness: 0.6,
      }),
    []
  );

  const matteComponentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0f172a"),
        roughness: 0.7,
        metalness: 0.3,
      }),
    []
  );

  const textMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e2e8f0"),
        roughness: 0.5,
        metalness: 0.5,
      }),
    []
  );

  // ─── Frame Loop: Animated Pulsing Glow + Exploded View Disassembly ───
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Determine explosion factor (0 = assembled, 1 = max exploded)
    let p = 0;
    if (disableExplode) {
      p = 0; // Forced assembled state (No explosion)
    } else if (explodeFactor !== undefined) {
      p = explodeFactor;
    } else if (scrollProgress) {
      p = Math.max(scrollProgress.get(), 0);
    } else {
      p = 0.8;
    }

    // Main Group Orientation & Continuous 360 Rotation + Gentle Floating
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.x = 0.6 + Math.cos(time * 0.3) * 0.03;
      mainGroupRef.current.rotation.y = time * 0.35 + (scrollProgress ? scrollProgress.get() * Math.PI * 0.5 : 0);
      mainGroupRef.current.position.y = Math.sin(time * 0.6) * 0.12;
    }

    // High-Intensity Pulsing Animated Glow on Small Middle Ring
    if (glowMaterial) {
      glowMaterial.emissiveIntensity = 2.8 + Math.sin(time * 4.5) * 1.8;
    }

    if (subtleGlowMaterial) {
      subtleGlowMaterial.emissiveIntensity = 1.6 + Math.sin(time * 2.5) * 0.9 + p * 1.2;
    }

    // 1. Totem lifts high in Z & Y axis
    if (totemRef.current) {
      totemRef.current.position.z = p * 12.5;
      totemRef.current.position.y = p * 2.8;
    }

    // 2. Top Anodized Housing Lid lifts
    if (lidGroupRef.current) {
      lidGroupRef.current.position.z = p * 7.5;
    }

    // 3. Middle Glow Ring & NeoPixel LED ring float mid-air
    if (glowBodyRef.current) {
      glowBodyRef.current.position.z = 2.053 + p * 4.8;
    }

    if (ledRingRef.current) {
      ledRingRef.current.position.z = 1.854 + p * 3.6;
    }

    // 4. ESP32-C3 Microcontroller PCB lifts & shifts outwards
    if (espRef.current) {
      espRef.current.position.z = 0.426 + p * 3.2;
      espRef.current.position.x = -5.644 - p * 3.5;
    }

    // 5. Hall Effect Sensors separate radially along Z & X/Y
    if (hall1Ref.current) {
      hall1Ref.current.position.z = 0.9 + p * 2.2;
      hall1Ref.current.position.x = 8.052 + p * 2.5;
    }
    if (hall2Ref.current) {
      hall2Ref.current.position.z = 0.9 + p * 2.2;
      hall2Ref.current.position.y = 8.052 + p * 2.5;
    }
    if (hall3Ref.current) {
      hall3Ref.current.position.z = 0.9 + p * 2.2;
      hall3Ref.current.position.x = -8.052 - p * 2.5;
    }
    if (hall4Ref.current) {
      hall4Ref.current.position.z = 0.9 + p * 2.2;
      hall4Ref.current.position.y = -8.052 - p * 2.5;
    }

    // 6. Laser Text Branding lifts with Totem Lid
    if (textRef.current) {
      textRef.current.position.z = 2.206 + p * 7.8;
    }

    // Fallback Explosion for generic scene meshes
    if (sceneMeshes.length > 0) {
      sceneMeshes.forEach(({ mesh, origPos, index }) => {
        const offsetDirection = (index % 2 === 0 ? 1 : -1) * (index + 1) * 1.5;
        mesh.position.z = origPos.z + p * offsetDirection;
      });
    }
  });

  const hasNamedNodes = nodes && nodes["Body1(1)"] && nodes["Body1(1)"].geometry;

  return (
    <group ref={mainGroupRef} dispose={null}>
      {hasNamedNodes ? (
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            {nodes["Body1(1)"]?.geometry && (
              <mesh name="Body1(1)" geometry={nodes["Body1(1)"].geometry} material={matteAnodizedMaterial} />
            )}

            {nodes["Body7(1)"]?.geometry && (
              <group ref={lidGroupRef}>
                <mesh name="Body7(1)" geometry={nodes["Body7(1)"].geometry} material={matteAnodizedMaterial} />
              </group>
            )}

            {nodes.totem?.geometry && (
              <mesh ref={totemRef} name="totem" geometry={nodes.totem.geometry} material={darkMetalMaterial} />
            )}

            {nodes["Esp32-C3_mini_v1"]?.geometry && (
              <mesh
                ref={espRef}
                name="Esp32-C3_mini_v1"
                geometry={nodes["Esp32-C3_mini_v1"].geometry}
                material={pcbHighlightMaterial}
                position={[-5.644, 5.681, 0.426]}
              >
                <pointLight distance={8} intensity={1} color="#00ff88" />
              </mesh>
            )}

            {nodes["LED_Ring_WS2812_5V_-_likeNeopixel_v1"]?.geometry && (
              <mesh
                ref={ledRingRef}
                name="LED_Ring_WS2812_5V_-_likeNeopixel_v1"
                geometry={nodes["LED_Ring_WS2812_5V_-_likeNeopixel_v1"].geometry}
                material={glowMaterial}
                position={[0.008, 0.006, 1.854]}
              />
            )}

            {nodes["Body8(7)"]?.geometry && (
              <mesh
                ref={glowBodyRef}
                name="Body8(7)"
                geometry={nodes["Body8(7)"].geometry}
                material={subtleGlowMaterial}
                position={[0, 0, 2.053]}
              />
            )}

            {nodes["Hall_Sensor_v1_v1(1)"]?.geometry && (
              <mesh
                ref={hall1Ref}
                name="Hall_Sensor_v1_v1(1)"
                geometry={nodes["Hall_Sensor_v1_v1(1)"].geometry}
                material={matteComponentMaterial}
                position={[8.052, -0.832, 0.9]}
              />
            )}
            {nodes["Hall_Sensor_v1_v1(2)"]?.geometry && (
              <mesh
                ref={hall2Ref}
                name="Hall_Sensor_v1_v1(2)"
                geometry={nodes["Hall_Sensor_v1_v1(2)"].geometry}
                material={matteComponentMaterial}
                position={[0.832, 8.052, 0.9]}
              />
            )}
            {nodes["Hall_Sensor_v1_v1(3)"]?.geometry && (
              <mesh
                ref={hall3Ref}
                name="Hall_Sensor_v1_v1(3)"
                geometry={nodes["Hall_Sensor_v1_v1(3)"].geometry}
                material={matteComponentMaterial}
                position={[-8.052, 0.832, 0.9]}
              />
            )}
            {nodes["Hall_Sensor_v1_v1(4)"]?.geometry && (
              <mesh
                ref={hall4Ref}
                name="Hall_Sensor_v1_v1(4)"
                geometry={nodes["Hall_Sensor_v1_v1(4)"].geometry}
                material={matteComponentMaterial}
                position={[-0.832, -8.052, 0.9]}
              />
            )}

            {nodes.Text_01?.geometry && (
              <mesh
                ref={textRef}
                name="Text_01"
                geometry={nodes.Text_01.geometry}
                material={textMaterial}
                position={[-0.18, -0.387, 2.206]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            )}
          </group>
        </group>
      ) : scene ? (
        <primitive object={scene} />
      ) : null}
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
  const [explodeFactor, setExplodeFactor] = useState(0.85); // Default 85% Exploded State for interactive mode
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Position and Scale tuned for desktop & mobile to fit comfortably on screen
  const posX = centerPosition ? 0 : isMobile ? 0 : disableExplode ? 5.5 : 6.8;
  const baseScale = disableExplode ? (isMobile ? 0.18 : 0.21) : (isMobile ? 0.22 : 0.27);
  const posY = disableExplode ? (isMobile ? -0.5 : -0.2) : (isMobile ? -0.8 : -0.4);

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
        camera={{ position: [0, 18, 28], fov: 30 }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={1.6} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.4} color="#aaccff" />

          <Environment preset="city" environmentIntensity={0.8} />

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
            <Bloom luminanceThreshold={1.0} luminanceSmoothing={0.9} intensity={1.4} opacity={0.6} />
          </EffectComposer>

          <ContactShadows
            position={[posX, -2.5, 0]}
            opacity={0.4}
            scale={16}
            blur={2}
            far={6}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
