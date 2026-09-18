import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// ----------------------------------------------------
// UI COMPONENTS: Ultra Minimal Info Pops anchored exactly on parts
// ----------------------------------------------------

const InfoPop = ({ labelRef, text, offset = [0, 0, 0] }: { labelRef: any, text: string, offset?: [number, number, number] }) => (
  // Positioned EXACTLY at the [0,0,0] origin of the mesh it's attached to, with optional manual offset to prevent clipping
  <Html position={offset} center zIndexRange={[100, 0]}>
    <div ref={labelRef} className="flex items-center gap-0 opacity-0 transition-opacity duration-500 pointer-events-none drop-shadow-xl">
      {/* Ultra-minimalist precision dot */}
      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      {/* Fine connecting line */}
      <div className="w-6 h-[1px] bg-white/40"></div>
      {/* Sharp, clean typography with no background bubble */}
      <div className="text-[10px] font-semibold font-sans tracking-[0.2em] text-white uppercase whitespace-nowrap pl-2">
        {text}
      </div>
    </div>
  </Html>
);

function Model(props: any) {
  const { nodes } = useGLTF("/models/nexus_ring.glb") as any;
  const { scrollProgress } = props;
  
  // Model Refs
  const mainGroupRef = useRef<THREE.Group>(null);
  const totemRef = useRef<THREE.Mesh>(null);
  const lidGroupRef = useRef<THREE.Group>(null);
  const baseRef = useRef<THREE.Mesh>(null);

  // Info Pop Refs
  const totemLabelRef = useRef<HTMLDivElement>(null);
  const lidLabelRef = useRef<HTMLDivElement>(null);
  const ringLabelRef = useRef<HTMLDivElement>(null);
  const espLabelRef = useRef<HTMLDivElement>(null);
  const baseLabelRef = useRef<HTMLDivElement>(null);
  const sensorLabelRef = useRef<HTMLDivElement>(null);

  // ----------------------------------------------------
  // PREMIUM MATERIALS (Studio realistic)
  // ----------------------------------------------------
  
  // Photorealistic matte black metallic (high metalness, but rough surface to avoid mirror look)
  const darkMetalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#121212', 
    roughness: 0.55,
    metalness: 0.85,
    envMapIntensity: 1.2,
  }), []);

  // Crisp, matte laser-etched text (no glare)
  const textMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.9,
    metalness: 0.1,
    envMapIntensity: 0.5,
  }), []);

  const matteComponentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.9,
    metalness: 0.1,
    emissive: '#000000',
  }), []);

  const pcbHighlightMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#047857',
    roughness: 0.5,
    metalness: 0.8,
    emissive: '#064e3b',
    emissiveIntensity: 0.2,
  }), []);

  // Neon LED material
  const glowMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#00ff88'),
    emissive: new THREE.Color('#00ff88'),
    emissiveIntensity: 2.0, // Restored to a sensible value
    toneMapped: false
  }), []);

  // Subtle glow specifically for the small inner ring
  const subtleGlowMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#00ff88'),
    emissive: new THREE.Color('#00ff88'),
    emissiveIntensity: 1.0, 
    toneMapped: false
  }), []);

  useFrame((state, delta) => {
    // Read the scroll progress from framer-motion (0 to 1)
    // Map it completely 1:1 with the page scroll so it fully animates top to bottom
    const offset = scrollProgress ? scrollProgress.get() : 0;
    
    // Only auto-rotate if the user is NOT actively scrolling (velocity is near 0)
    const scrollVelocity = scrollProgress ? Math.abs(scrollProgress.getVelocity()) : 0;
    if (mainGroupRef.current && scrollVelocity < 0.05) {
      mainGroupRef.current.rotation.y += delta * 0.1;
    }
    
    // Exploded view positions
    if (totemRef.current) totemRef.current.position.z = THREE.MathUtils.lerp(0, 10, offset);
    if (lidGroupRef.current) lidGroupRef.current.position.y = THREE.MathUtils.lerp(2.208, 2.208 + 8, offset);
    if (baseRef.current) baseRef.current.position.z = THREE.MathUtils.lerp(0, -6, offset);

    // Fade in info pops early
    const opacity = THREE.MathUtils.smoothstep(offset, 0.05, 0.2);
    [totemLabelRef, lidLabelRef, ringLabelRef, espLabelRef, baseLabelRef, sensorLabelRef].forEach(ref => {
      if (ref.current) ref.current.style.opacity = opacity.toString();
    });
  });

  return (
    // Model pushed further to the right
    <group ref={mainGroupRef} {...props} dispose={null} position={[4, -0.5, 0]}>
      <group>
        {/* Lid */}
        <group ref={lidGroupRef} name="Cloner" position={[0, 2.208, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="lid" geometry={nodes.lid.geometry} material={darkMetalMaterial} position={[0, 0, -2.208]}>
            {/* Offset slightly up in local Z so it sits on top of the lid */}
            <InfoPop labelRef={lidLabelRef} text="Dock Cover" offset={[0, 0, 2.5]} />
          </mesh>

          {/* Restored embedded 3D Text Meshes with highly visible silver metal */}
          <mesh name="Text_0" geometry={nodes.Text_0.geometry} material={textMaterial} position={[-0.161, 4.8, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Text_1" geometry={nodes.Text_1.geometry} material={textMaterial} position={[4.8, 0.169, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Text_2" geometry={nodes.Text_2.geometry} material={textMaterial} position={[0.151, -4.8, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Text_3" geometry={nodes.Text_3.geometry} material={textMaterial} position={[-4.8, -0.161, 0]} rotation={[Math.PI / 2, 0, 0]} />
        </group>

        {/* Main Body Group */}
        <group name="Untitledstep" rotation={[-Math.PI / 2, 0, 0]}>
          
          <mesh ref={baseRef} name="base" geometry={nodes.base.geometry} material={darkMetalMaterial}>
            <InfoPop labelRef={baseLabelRef} text="Aluminum Chassis" offset={[0, -5, 0]} />
          </mesh>

          <mesh ref={totemRef} name="totem" geometry={nodes.totem.geometry} material={darkMetalMaterial}>
            <InfoPop labelRef={totemLabelRef} text="Modular Totem" offset={[0, 0, 2.5]} />
          </mesh>

          <mesh name="Esp32-C3_mini_v1" geometry={nodes['Esp32-C3_mini_v1'].geometry} material={pcbHighlightMaterial} position={[-5.644, 5.681, 0.426]}>
            <pointLight distance={8} intensity={1} color="#00ff88" />
            <InfoPop labelRef={espLabelRef} text="Processing Unit" offset={[0, 0, 1.5]} />
          </mesh>

          <mesh name="LED_Ring_WS2812_5V_-_likeNeopixel_v1" geometry={nodes['LED_Ring_WS2812_5V_-_likeNeopixel_v1'].geometry} material={glowMaterial} position={[0.008, 0.006, 1.854]}>
            <InfoPop labelRef={ringLabelRef} text="Visual Feedback" offset={[0, 0, 0.5]} />
          </mesh>
          <mesh name="Body8(7)" geometry={nodes['Body8(7)'].geometry} material={subtleGlowMaterial} position={[0, 0, 2.053]} />

          <mesh name="Hall_Sensor_v1_v1(1)" geometry={nodes['Hall_Sensor_v1_v1(1)'].geometry} material={matteComponentMaterial} position={[8.052, -0.832, 0.9]}>
            <InfoPop labelRef={sensorLabelRef} text="Sensor Array" offset={[2, 0, 0]} />
          </mesh>
          <mesh name="Hall_Sensor_v1_v1(2)" geometry={nodes['Hall_Sensor_v1_v1(2)'].geometry} material={matteComponentMaterial} position={[0.832, 8.052, 0.9]} />
          <mesh name="Hall_Sensor_v1_v1(3)" geometry={nodes['Hall_Sensor_v1_v1(3)'].geometry} material={matteComponentMaterial} position={[-8.052, 0.832, 0.9]} />
          <mesh name="Hall_Sensor_v1_v1(4)" geometry={nodes['Hall_Sensor_v1_v1(4)'].geometry} material={matteComponentMaterial} position={[-0.832, -8.052, 0.9]} />
          
          <mesh name="Text_01" geometry={nodes.Text_01.geometry} material={textMaterial} position={[-0.18, -0.387, 2.206]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/nexus_ring.glb");

export default function ExplodedRingCanvas({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  return (
    <div className="w-full h-full bg-transparent cursor-grab active:cursor-grabbing">
      {/* Raised Y from 8 to 14, reduced Z from 20 to 18 for a more top-down perspective */}
      <Canvas camera={{ position: [0, 14, 18], fov: 45 }} className="pointer-events-auto">
        {/* Photorealistic Lighting Setup */}
        <ambientLight intensity={0.5} />
        {/* Soft, natural directional light instead of harsh spotlights */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#aaccff" />
        
        {/* HDRI Environment mapping is the secret to photorealism */}
        <Environment preset="city" environmentIntensity={0.8} />
        
        {/* Interactive controls allowing user to rotate the model freely */}
        <PresentationControls 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 3, Math.PI / 3]}
        >
          <Model scale={0.75} scrollProgress={scrollProgress} />
        </PresentationControls>

        <EffectComposer disableNormalPass>
          {/* Gentle, cinematic bloom with smoothing */}
          <Bloom luminanceThreshold={1.0} luminanceSmoothing={0.9} intensity={1.0} opacity={0.5} />
        </EffectComposer>

        {/* Crisp subtle shadow */}
        <ContactShadows position={[3.5, -4, 0]} opacity={0.4} scale={30} blur={2} far={6} color="#000000" />
      </Canvas>
    </div>
  );
}
