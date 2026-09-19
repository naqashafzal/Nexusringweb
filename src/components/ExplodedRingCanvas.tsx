import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// ----------------------------------------------------
// UI COMPONENTS: Ultra Minimal Info Pops anchored exactly on parts
// ----------------------------------------------------

// ----------------------------------------------------
// UI COMPONENTS REMOVED AS REQUESTED
// ----------------------------------------------------

// Generates a seamless procedural noise texture for the "powder coated" bump map effect
const generateNoiseTexture = () => {
  if (typeof document === 'undefined') return null;
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return null;
  
  const imgData = context.createImageData(size, size);
  for (let i = 0; i < imgData.data.length; i += 4) {
    // Generate fine noise
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
  // Repeat the texture so the "pebbles" are extremely tiny
  texture.repeat.set(10, 10); 
  return texture;
};

function Model(props: any) {
  const { nodes } = useGLTF("/models/nexus_ring.glb") as any;
  const { scrollProgress } = props;
  
  // Model Refs
  const mainGroupRef = useRef<THREE.Group>(null);
  const totemRef = useRef<THREE.Mesh>(null);
  const lidGroupRef = useRef<THREE.Group>(null);
  const baseRef = useRef<THREE.Mesh>(null);

  // ----------------------------------------------------
  // PREMIUM MATERIALS (Studio realistic)
  // ----------------------------------------------------
  
  // Generate the noise texture once
  const noiseTexture = useMemo(() => generateNoiseTexture(), []);

  // Photorealistic powder-coated matte black metallic (shiny)
  const darkMetalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0d0d0d', 
    roughness: 0.35, // Lower roughness = much shinier!
    metalness: 0.8,  // Highly metallic
    envMapIntensity: 1.5,
    bumpMap: noiseTexture || undefined,
    bumpScale: 0.002, // Keep the pebble subtle
  }), [noiseTexture]);

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
    const offset = scrollProgress ? scrollProgress.get() : 0;
    
    // Only auto-rotate if the model is fully assembled (0) or fully exploded (1).
    // If the user is currently scrolling through the explosion, pause rotation.
    const isExploding = offset > 0.001 && offset < 0.999;
    if (mainGroupRef.current && !isExploding) {
      mainGroupRef.current.rotation.y += delta * 0.1;
    }
    
    // Exploded view positions
    if (totemRef.current) totemRef.current.position.z = THREE.MathUtils.lerp(0, 10, offset);
    if (lidGroupRef.current) lidGroupRef.current.position.y = THREE.MathUtils.lerp(2.208, 2.208 + 8, offset);
    if (baseRef.current) baseRef.current.position.z = THREE.MathUtils.lerp(0, -6, offset);
  });

  return (
    // Model pushed further to the right
    <group ref={mainGroupRef} {...props} dispose={null} position={[4, -0.5, 0]}>
      <group>
        {/* Lid */}
        <group ref={lidGroupRef} name="Cloner" position={[0, 2.208, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="lid" geometry={nodes.lid.geometry} material={darkMetalMaterial} position={[0, 0, -2.208]} />

          {/* Restored embedded 3D Text Meshes with highly visible silver metal */}
          <mesh name="Text_0" geometry={nodes.Text_0.geometry} material={textMaterial} position={[-0.161, 4.8, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Text_1" geometry={nodes.Text_1.geometry} material={textMaterial} position={[4.8, 0.169, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Text_2" geometry={nodes.Text_2.geometry} material={textMaterial} position={[0.151, -4.8, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh name="Text_3" geometry={nodes.Text_3.geometry} material={textMaterial} position={[-4.8, -0.161, 0]} rotation={[Math.PI / 2, 0, 0]} />
        </group>

        {/* Main Body Group */}
        <group name="Untitledstep" rotation={[-Math.PI / 2, 0, 0]}>
          
          <mesh ref={baseRef} name="base" geometry={nodes.base.geometry} material={darkMetalMaterial} />

          <mesh ref={totemRef} name="totem" geometry={nodes.totem.geometry} material={darkMetalMaterial} />

          <mesh name="Esp32-C3_mini_v1" geometry={nodes['Esp32-C3_mini_v1'].geometry} material={pcbHighlightMaterial} position={[-5.644, 5.681, 0.426]}>
            <pointLight distance={8} intensity={1} color="#00ff88" />
          </mesh>

          <mesh name="LED_Ring_WS2812_5V_-_likeNeopixel_v1" geometry={nodes['LED_Ring_WS2812_5V_-_likeNeopixel_v1'].geometry} material={glowMaterial} position={[0.008, 0.006, 1.854]} />
          
          <mesh name="Body8(7)" geometry={nodes['Body8(7)'].geometry} material={subtleGlowMaterial} position={[0, 0, 2.053]} />

          <mesh name="Hall_Sensor_v1_v1(1)" geometry={nodes['Hall_Sensor_v1_v1(1)'].geometry} material={matteComponentMaterial} position={[8.052, -0.832, 0.9]} />
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
  const [zoom, setZoom] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full bg-transparent relative">
      
      {/* Zoom UI Overlay */}
      <div className="absolute bottom-12 right-12 z-[100] flex gap-2 pointer-events-auto">
        <button 
          onClick={() => setZoom(z => Math.max(0.5, z - 0.2))}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors"
        >
          -
        </button>
        <button 
          onClick={() => setZoom(z => Math.min(2.5, z + 0.2))}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors"
        >
          +
        </button>
      </div>

      <Canvas camera={{ position: [0, 14, 18], fov: 45 }} className="pointer-events-auto">
        {/* Photorealistic Lighting Setup */}
        <ambientLight intensity={0.5} />
        {/* Soft, natural directional light instead of harsh spotlights */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#aaccff" />
        
        {/* HDRI Environment mapping is the secret to photorealism */}
        <Environment preset="city" environmentIntensity={0.8} />
        
        {/* Full navigation controls: allow free rotation and panning without snapback */}
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} enableDamping dampingFactor={0.05} />

        {/* Responsive Positioning: Center and lower on mobile, shift right on desktop */}
        <group position={isMobile ? [0, -3, 0] : [3, 0, 0]}>
          <Model scale={(isMobile ? 0.5 : 0.75) * zoom} scrollProgress={scrollProgress} />
        </group>

        <EffectComposer>
          {/* Gentle, cinematic bloom with smoothing */}
          <Bloom luminanceThreshold={1.0} luminanceSmoothing={0.9} intensity={1.0} opacity={0.5} />
        </EffectComposer>

        {/* Crisp subtle shadow */}
        <ContactShadows position={[3.5, -4, 0]} opacity={0.4} scale={30} blur={2} far={6} color="#000000" />
      </Canvas>
    </div>
  );
}
