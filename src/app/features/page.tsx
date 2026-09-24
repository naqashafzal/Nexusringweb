"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  Cpu,
  Fingerprint,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  ChevronRight,
  Terminal,
  Lock,
  Eye,
  Activity,
  Code2,
  Sliders,
  CheckCircle2,
  VolumeX,
  Globe,
  Radio,
  HardDrive,
  Maximize2,
  RefreshCw,
  Server,
  Wifi,
  Disc,
  RotateCcw,
  Move,
} from "lucide-react";

// Dynamically import 3D Exploded Ring Canvas for SSR safety
const ExplodedRingCanvas = dynamic(() => import("@/components/ExplodedRingCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#00FF9D] gap-2">
      <RefreshCw size={20} className="animate-spin text-[#00FF9D]" />
      <span>INITIALIZING 3D CAD SHADER...</span>
    </div>
  ),
});

// ─── SPATIAL MEMORY MODES DATA ────────────────────────────────────

const MODES = [
  {
    id: "deep_work",
    name: "Deep Work Protocol",
    tagline: "Total distraction destruction & kernel-level focus lock.",
    color: "#00FF9D",
    bgAlpha: "rgba(0, 255, 157, 0.08)",
    borderAlpha: "rgba(0, 255, 157, 0.4)",
    glowShadow: "0 0 30px rgba(0, 255, 157, 0.25)",
    badge: "EMERALD GLOW",
    specs: [
      { label: "Target State", val: "90-Min Flow Lock" },
      { label: "Network", val: "Hosts Firewall Enforced" },
      { label: "Apps", val: "Kills Slack, Discord & X" },
      { label: "Haptics", val: "Subtle 440Hz Damped Pulse" },
    ],
    codeSnippet: `# Deep Work OS Webhook Execution
Stop-Process -Name "Slack", "Discord" -ErrorAction SilentlyContinue
Set-Content "C:\\Windows\\System32\\drivers\\etc\\hosts" "127.0.0.1 twitter.com\`n127.0.0.1 x.com"
Start-Process "code" -ArgumentList "."
Write-Host "[NEXUS KERNEL] Deep Work Locked — 90:00 Timer Active" -ForegroundColor Green`,
  },
  {
    id: "meeting",
    name: "Spatial Meeting Mode",
    tagline: "Instant hardware microphone isolation & conferencing workspace.",
    color: "#00E5FF",
    bgAlpha: "rgba(0, 229, 255, 0.08)",
    borderAlpha: "rgba(0, 229, 255, 0.4)",
    glowShadow: "0 0 30px rgba(0, 229, 255, 0.25)",
    badge: "ELECTRIC BLUE GLOW",
    specs: [
      { label: "Audio Relay", val: "Hardware Mic Sever" },
      { label: "Workspace", val: "Launches Zoom & Notion" },
      { label: "Notifications", val: "Mutes Non-Calendar Alerts" },
      { label: "Latency", val: "<12ms Hardware Interrupt" },
    ],
    codeSnippet: `// Meeting Mode Local Daemon Hook
osascript -e 'set volume input volume 0'
open -a "Zoom.app"
open -a "Notion.app"
console.log("[NEXUS HARDWARE] Audio Micro-relay Muted. Conferencing Active.");`,
  },
  {
    id: "creative",
    name: "Creative Sandbox",
    tagline: "Maximizes GPU allocation & opens high-fidelity design tools.",
    color: "#B026FF",
    bgAlpha: "rgba(176, 38, 255, 0.08)",
    borderAlpha: "rgba(176, 38, 255, 0.4)",
    glowShadow: "0 0 30px rgba(176, 38, 255, 0.25)",
    badge: "ROYAL PURPLE GLOW",
    specs: [
      { label: "GPU Mode", val: "VRAM High-Priority" },
      { label: "Suite", val: "Opens Figma, Blender, VS Code" },
      { label: "Analytics", val: "Minimizes Metrics & Dashboards" },
      { label: "Illumination", val: "Ambient Purple Waveform" },
    ],
    codeSnippet: `# Creative Sandbox Initialization
open -a "Figma"
open -a "Blender"
systemctl --user stop telemetry-daemon
echo "🎨 [NEXUS] Creative Environment Loaded. Analytical Apps Muted."`,
  },
  {
    id: "break",
    name: "Restoration Break",
    tagline: "Lifts network blocks & sends gentle ambient relaxation pulse.",
    color: "#FF9F1C",
    bgAlpha: "rgba(255, 159, 28, 0.08)",
    borderAlpha: "rgba(255, 159, 28, 0.4)",
    glowShadow: "0 0 30px rgba(255, 159, 28, 0.25)",
    badge: "AMBER GLOW",
    specs: [
      { label: "Restrictions", val: "All Network Blocks Lifted" },
      { label: "Browser", val: "Opens Casual Reading Tabs" },
      { label: "Timer", val: "15-Min Circadian Recharge" },
      { label: "LED Array", val: "Warm Amber Breathing Light" },
    ],
    codeSnippet: `# Restoration Mode Reset
Clear-Content "C:\\Windows\\System32\\drivers\\etc\\hosts"
Start-Process "https://news.ycombinator.com"
Write-Host "[NEXUS] Network Restrictions Lifted. 15-Minute Recharge Initiated." -ForegroundColor Yellow`,
  },
];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Scroll Progress tracking for 3D Exploded Model Disassembly
  const explodedSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: explodedSectionRef,
    offset: ["start end", "end start"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const currentMode = MODES[activeTab];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentMode.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#030508] text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#00FF9D]/30 selection:text-white">
      {/* Background Dot Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Top Glow Spheres */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF9D]/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-10 w-[500px] h-[300px] bg-[#00E5FF]/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* ════════════════ 1. HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/[0.06] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
            Flow State Catalyst · Distraction Elimination System
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            ENGINEERING PURE<br />
            <span style={{ background: "linear-gradient(120deg, #FFFFFF, #94A3B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              DISCIPLINE.
            </span>
          </h1>

          <p className="text-[#94a3b8] text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            The Nexus Ring is an intelligent gatekeeper for your attention. By fusing custom 3D-printed hardware, local OS automation, and generative AI, it acts as a physical anchor for your mental state—protecting your time and focus so you can do your best work.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-4 rounded-xl bg-[#00FF9D] text-[#001a0a] font-bold text-sm tracking-wide hover:bg-[#00ffaa] transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2 cursor-pointer"
            >
              Reserve Batch 01 <ChevronRight size={16} />
            </button>
            <a
              href="#3d-exploded-view"
              className="px-8 py-4 rounded-xl border border-[#151D2A] bg-[#070A10] text-white hover:bg-[#151D2A] font-mono text-xs tracking-wider transition-all flex items-center gap-2"
            >
              <Layers size={15} className="text-[#00E5FF]" /> View 3D Exploded Model
            </a>
          </div>
        </motion.div>

        {/* ── Macro PCB Render Visual Container ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-[#151D2A] bg-[#070A10] p-6 sm:p-10 relative overflow-hidden shadow-2xl"
        >
          {/* HUD Overlay Frame */}
          <div className="absolute top-4 left-6 flex items-center gap-3 text-[10px] font-mono text-[#64748b] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse" />
            ESP32-C3 MACRO PCB BLUEPRINT v2.4
          </div>
          <div className="absolute top-4 right-6 text-[10px] font-mono text-[#00E5FF] tracking-widest uppercase border border-[#00E5FF]/20 bg-[#00E5FF]/10 px-3 py-0.5 rounded-full">
            AIR-GAPPED SYSTEM
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            {/* Left Diagram Description */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-4 rounded-2xl border border-[#00FF9D]/30 bg-[#00FF9D]/[0.04] space-y-2">
                <span className="text-[10px] font-mono text-[#00FF9D] uppercase tracking-widest font-bold">01. Central Micro-Kernel</span>
                <h4 className="text-white font-display font-bold text-lg">ESP32-C3 RISC-V Engine</h4>
                <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
                  Single-core 32-bit RISC-V processor operating at 160MHz. Direct local websocket interrupts with &lt;24ms response latency.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.04] space-y-2">
                <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest font-bold">02. Magnetic Flux Array</span>
                <h4 className="text-white font-display font-bold text-lg">4x KY-003 Hall Array</h4>
                <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
                  Sub-1mm 3D spatial magnetic sensing detects totem orientation and polarity without mechanical buttons or contact degradation.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#B026FF]/30 bg-[#B026FF]/[0.04] space-y-2">
                <span className="text-[10px] font-mono text-[#B026FF] uppercase tracking-widest font-bold">03. Addressable Optics</span>
                <h4 className="text-white font-display font-bold text-lg">NeoPixel RGB Ring</h4>
                <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
                  16-LED addressable matrix bleeding context-aware ambient glow through the Voronoi exoskeleton.
                </p>
              </div>
            </div>

            {/* Right Macro PCB Circuit Render Simulation */}
            <div className="lg:col-span-8 bg-[#030508] border border-[#151D2A] rounded-2xl p-8 min-h-[380px] flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Dynamic Circuit Traces Glow */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,#151D2A_1px,transparent_1px),linear-gradient(180deg,#151D2A_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Glowing Core Chip Graphic */}
              <div className="relative z-10 w-44 h-44 rounded-2xl border-2 border-[#00FF9D] bg-[#070A10] flex flex-col items-center justify-center p-4 shadow-[0_0_50px_rgba(0,255,157,0.3)] transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(0,255,157,0.5)]">
                <Cpu size={48} className="text-[#00FF9D] animate-pulse mb-2" />
                <span className="font-mono text-xs font-bold text-white tracking-widest">ESP32-C3</span>
                <span className="font-mono text-[9px] text-[#00FF9D] tracking-wider uppercase mt-1">160MHz RISC-V</span>

                {/* Animated Pulsing Signal Rings */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-[#00FF9D]/40 pointer-events-none"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Surrounding Hall Effect Sensor Pinouts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full relative z-10">
                {[
                  { label: "HALL_SENSOR_01", status: "420mT FLUX", color: "#00FF9D" },
                  { label: "HALL_SENSOR_02", status: "420mT FLUX", color: "#00E5FF" },
                  { label: "HALL_SENSOR_03", status: "420mT FLUX", color: "#B026FF" },
                  { label: "HALL_SENSOR_04", status: "420mT FLUX", color: "#FF9F1C" },
                ].map((s) => (
                  <div key={s.label} className="p-3 bg-[#070A10] border border-[#151D2A] rounded-xl text-center">
                    <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: s.color }} />
                    <p className="text-[9px] font-mono text-[#64748b] uppercase">{s.label}</p>
                    <p className="text-xs font-mono font-bold mt-0.5 text-white">{s.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ 2. INTERACTIVE 3D EXPLODED MODEL SHOWCASE ═══ */}
      <section id="3d-exploded-view" ref={explodedSectionRef} className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00FF9D] uppercase border border-[#00FF9D]/20 bg-[#00FF9D]/5 rounded-full inline-block px-3 py-1 mb-4">
            Real-Time 3D Disassembly
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Interactive 3D Exploded View
          </h2>
          <p className="text-[#94a3b8] text-sm md:text-base mt-3 font-light">
            Drag to rotate the 3D model in real time. Scroll down to trigger the physical disassembly of the aerospace shell, Hall sensors, and ESP32-C3 PCB.
          </p>
        </div>

        <div className="h-[550px] w-full rounded-3xl border border-[#151D2A] bg-[#070A10] relative overflow-hidden shadow-2xl group">
          {/* HUD Status Overlay */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-3 text-[10px] font-mono text-[#64748b] tracking-widest uppercase pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            3D INTERACTIVE CAD MODEL • DRAG TO ROTATE
          </div>
          <div className="absolute top-6 right-6 z-20 text-[10px] font-mono text-[#00E5FF] tracking-widest uppercase border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-3 py-1 rounded-full pointer-events-none">
            REAL-TIME SHADER ACTIVE
          </div>

          {/* 3D Canvas */}
          <ExplodedRingCanvas scrollProgress={smoothScrollProgress} centerPosition={true} />

          {/* Drag Instruction Banner */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[10px] font-mono text-[#cbd5e1] pointer-events-none">
            <Move size={12} className="text-[#00FF9D]" /> Click & Drag to Orbit 360°
          </div>
        </div>
      </section>

      {/* ════════════════ 3. HARDWARE ARCHITECTURE (BENTO GRID) ═════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00E5FF] uppercase border border-[#00E5FF]/20 bg-[#00E5FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Hardware Architecture
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Precision Machined Hardware Stack
          </h2>
          <p className="text-[#94a3b8] text-sm md:text-base mt-3 font-light">
            Engineered with zero mechanical friction, zero physical contact wear, and sub-millisecond local response times.
          </p>
        </div>

        {/* Bento Grid (4 Tech-Focused Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: The ESP32-C3 Brain (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 relative overflow-hidden group hover:border-[#00FF9D]/50 transition-all duration-500 shadow-lg"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF9D]/[0.04] blur-3xl rounded-full pointer-events-none group-hover:bg-[#00FF9D]/[0.08] transition-colors" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#00FF9D] px-3 py-1 rounded-full border border-[#00FF9D]/20 bg-[#00FF9D]/10">
                CORE PROCESSOR
              </span>
              <Cpu size={24} className="text-[#00FF9D]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              The ESP32-C3 Brain
            </h3>

            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light mb-6">
              Powered by a high-performance 32-bit RISC-V core operating at 160MHz. Features dual Wi-Fi 4 and BLE 5.0 wireless stacks to communicate directly with your OS daemon via zero-latency local sockets.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#151D2A] font-mono text-xs">
              <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                <p className="text-[#64748b] text-[10px] uppercase">CLOCK SPEED</p>
                <p className="text-[#00FF9D] font-bold mt-1">160MHz RISC-V</p>
              </div>
              <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                <p className="text-[#64748b] text-[10px] uppercase">LATENCY</p>
                <p className="text-white font-bold mt-1">&lt;24ms Exec</p>
              </div>
              <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                <p className="text-[#64748b] text-[10px] uppercase">WIRELESS</p>
                <p className="text-[#00E5FF] font-bold mt-1">Wi-Fi + BLE 5.0</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: KY-003 Hall Effect Sensors (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 relative overflow-hidden group hover:border-[#00E5FF]/50 transition-all duration-500 shadow-lg"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/[0.04] blur-3xl rounded-full pointer-events-none group-hover:bg-[#00E5FF]/[0.08] transition-colors" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#00E5FF] px-3 py-1 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/10">
                PROXIMITY ARRAY
              </span>
              <Fingerprint size={24} className="text-[#00E5FF]" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-3">
              KY-003 Hall Effect Sensors
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed font-light mb-6">
              Buttonless 3D magnetic proximity detection array. Identifies docked totem slots with sub-1mm spatial accuracy and infinite mechanical cycle lifespan.
            </p>

            <div className="p-4 bg-[#030508] rounded-xl border border-[#151D2A] space-y-1 font-mono text-xs">
              <div className="flex justify-between text-[#64748b]">
                <span>SAMPLING RATE</span>
                <span className="text-[#00E5FF] font-bold">1000Hz (1ms)</span>
              </div>
              <div className="flex justify-between text-[#64748b]">
                <span>MAGNETIC FLUX</span>
                <span className="text-white font-bold">420mT Detection</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Neodymium Coupling (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 relative overflow-hidden group hover:border-[#B026FF]/50 transition-all duration-500 shadow-lg"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B026FF]/[0.04] blur-3xl rounded-full pointer-events-none group-hover:bg-[#B026FF]/[0.08] transition-colors" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#B026FF] px-3 py-1 rounded-full border border-[#B026FF]/20 bg-[#B026FF]/10">
                TACTILE MECHANIC
              </span>
              <Zap size={24} className="text-[#B026FF]" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-3">
              Neodymium Coupling
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed font-light mb-6">
              Engineered with 6mm N52 Neodymium rare-earth magnetic cores. Delivers a tuned 4.2 Newton magnetic snap that triggers instant tactile feedback.
            </p>

            <div className="p-4 bg-[#030508] rounded-xl border border-[#151D2A] space-y-1 font-mono text-xs">
              <div className="flex justify-between text-[#64748b]">
                <span>SNAP FORCE</span>
                <span className="text-[#B026FF] font-bold">4.2N Resonant Lock</span>
              </div>
              <div className="flex justify-between text-[#64748b]">
                <span>DAMPING RING</span>
                <span className="text-white font-bold">Sub-surface Ceramic</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: NeoPixel Illumination (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 relative overflow-hidden group hover:border-[#FF9F1C]/50 transition-all duration-500 shadow-lg"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9F1C]/[0.04] blur-3xl rounded-full pointer-events-none group-hover:bg-[#FF9F1C]/[0.08] transition-colors" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF9F1C] px-3 py-1 rounded-full border border-[#FF9F1C]/20 bg-[#FF9F1C]/10">
                AMBIENT OPTICS
              </span>
              <Sparkles size={24} className="text-[#FF9F1C]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              NeoPixel Illumination
            </h3>

            <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed font-light mb-6">
              Context-aware addressable RGB lighting array. Seamlessly diffuses mode status telemetry through the Voronoi exoskeleton mesh for real-time visual feedback.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#151D2A] font-mono text-xs">
              <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                <p className="text-[#64748b] text-[10px] uppercase">LED MATRIX</p>
                <p className="text-[#FF9F1C] font-bold mt-1">16x Addressable</p>
              </div>
              <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                <p className="text-[#64748b] text-[10px] uppercase">DIFFUSION</p>
                <p className="text-white font-bold mt-1">Voronoi Exoskeleton</p>
              </div>
              <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                <p className="text-[#64748b] text-[10px] uppercase">PWM SPECTRUM</p>
                <p className="text-[#00FF9D] font-bold mt-1">24-Bit RGB</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════ 4. ZERO-TOUCH OS AUTOMATION ═════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 space-y-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00E5FF] uppercase border border-[#00E5FF]/20 bg-[#00E5FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Zero-Touch OS Automation
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Physical Intent to OS Execution
          </h2>
        </div>

        {/* Section A: Native Integration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF9D] uppercase tracking-widest">
              <Terminal size={16} /> Section A · Native Integration
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Zero Menus. Zero Clicking. Direct Kernel Interrupts.
            </h3>
            <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed font-light">
              Docking a physical totem instantly fires local webhooks and PowerShell or Zsh scripts. Your workstation transforms mode within 24 milliseconds without needing to open app menus or toggle software switches.
            </p>
            <ul className="space-y-3 font-mono text-xs text-[#cbd5e1]">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00FF9D]" /> Direct hardware-to-socket event routing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00FF9D]" /> Custom user-defined PowerShell & Zsh scripts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00FF9D]" /> Automated workspace app layout launches
              </li>
            </ul>
          </div>

          {/* Terminal Code Mockup */}
          <div className="lg:col-span-6 rounded-3xl border border-[#151D2A] bg-[#070A10] overflow-hidden shadow-2xl">
            <div className="px-6 py-4 bg-[#030508] border-b border-[#151D2A] flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748b]">daemon_webhook_listener.ps1</span>
              <span className="text-[10px] font-mono text-[#00FF9D]">STATUS: LISTENING</span>
            </div>
            <div className="p-6 font-mono text-xs text-[#cbd5e1] leading-relaxed overflow-x-auto bg-[#070A10]">
              <p className="text-[#64748b]"># Executed via ESP32-C3 Websocket Event</p>
              <p className="text-[#00FF9D]">Write-Host "[NEXUS] Totem 01 Snap Detected" -ForegroundColor Green</p>
              <p className="mt-2">Start-Process "code" -ArgumentList "."</p>
              <p>Set-ItemProperty -Path "HKCU:\Software\..." -Name "ToastEnabled" -Value 0</p>
              <p className="text-[#00E5FF] mt-2">&gt; Kernel interrupts dispatched in 18ms.</p>
            </div>
          </div>
        </motion.div>

        {/* Section B: Network-Level Blocking */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00E5FF] uppercase tracking-widest">
              <ShieldCheck size={16} /> Section B · Network-Level Firewall
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Ruthless Host-File Domain Interception
            </h3>
            <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed font-light">
              Digital app blockers can easily be closed or bypassed with a single click. The Nexus daemon rewrites local system hosts files and configures OS socket firewall rules, making distraction sites unreachable even in browser incognito mode.
            </p>
            <ul className="space-y-3 font-mono text-xs text-[#cbd5e1]">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF]" /> Hardened OS kernel socket blocking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF]" /> Bypasses browser incognito loopholes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00E5FF]" /> Automatic restoration upon totem removal
              </li>
            </ul>
          </div>

          {/* Firewall Status Mockup */}
          <div className="lg:col-span-6 lg:order-1 rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#151D2A]">
              <span className="text-xs font-mono text-[#64748b]">KERNEL FIREWALL RULEBOOK</span>
              <span className="text-[10px] font-mono text-[#FF5F56] px-2.5 py-0.5 rounded bg-[#FF5F56]/10 border border-[#FF5F56]/20">
                ACTIVE BLOCKLIST
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              {[
                { domain: "x.com", status: "127.0.0.1 (DROPPED)", latency: "<1ms" },
                { domain: "discord.com", status: "127.0.0.1 (DROPPED)", latency: "<1ms" },
                { domain: "youtube.com", status: "127.0.0.1 (DROPPED)", latency: "<1ms" },
                { domain: "reddit.com", status: "127.0.0.1 (DROPPED)", latency: "<1ms" },
              ].map((row) => (
                <div key={row.domain} className="p-3 bg-[#030508] rounded-xl border border-[#151D2A] flex justify-between items-center">
                  <span className="text-white font-bold">{row.domain}</span>
                  <span className="text-[#FF5F56] font-bold">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ 5. THE AI GUARDIAN (LOCAL AI) ═════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-[#B026FF]/30 bg-[#070A10] p-8 md:p-12 relative overflow-hidden shadow-[0_0_60px_rgba(176,38,255,0.08)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B026FF]/30 bg-[#B026FF]/10 text-[#B026FF] text-[10px] font-mono tracking-widest uppercase">
                <Eye size={14} /> Local NPU Vision Model · Local AI Quantized
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                The AI Guardian Loop
              </h2>

              <p className="text-[#94a3b8] text-base leading-relaxed font-light">
                The Nexus Guardian runs an optimized 4-bit quantized <strong className="text-white font-semibold">Local AI</strong> vision model locally in your GPU/NPU VRAM. Every 10 seconds during focus sessions, the Guardian scans active window titles.
              </p>

              <div className="p-5 rounded-2xl border border-[#151D2A] bg-[#030508] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00FF9D] font-bold">
                  <ShieldCheck size={16} /> 100% AIR-GAPPED PRIVACY GUARANTEE
                </div>
                <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
                  Zero screen pixels or telemetry data leave your machine. Frame buffer samples are processed directly in local RAM and overwritten instantly.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                  <p className="text-[#64748b] text-[10px]">SCAN INTERVAL</p>
                  <p className="text-[#B026FF] font-bold mt-0.5">Every 10 Seconds</p>
                </div>
                <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A]">
                  <p className="text-[#64748b] text-[10px]">UNAUTHORIZED ACTION</p>
                  <p className="text-[#FF5F56] font-bold mt-0.5">Auto-Termination</p>
                </div>
              </div>
            </div>

            {/* Visual AI Scan Loop Box */}
            <div className="lg:col-span-5 bg-[#030508] border border-[#151D2A] rounded-2xl p-6 flex flex-col items-center justify-center space-y-6 relative overflow-hidden">
              <div className="w-36 h-36 rounded-full border-2 border-dashed border-[#B026FF] flex items-center justify-center relative">
                <motion.div
                  className="w-24 h-24 rounded-full border-4 border-[#B026FF] bg-[#070A10] flex items-center justify-center shadow-[0_0_30px_rgba(176,38,255,0.4)]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Eye size={36} className="text-[#B026FF]" />
                </motion.div>
              </div>

              <div className="text-center font-mono text-xs space-y-1">
                <p className="text-white font-bold">LOCAL VRAM INFERENCE</p>
                <p className="text-[#64748b] text-[10px]">local-ai-vision-q4.bin</p>
                <p className="text-[#00FF9D] text-[10px] pt-2">0 BYTES TRANSMITTED TO CLOUD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ 6. THE SPATIAL MEMORY MODES (INTERACTIVE TABS) ═ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#B026FF] uppercase border border-[#B026FF]/20 bg-[#B026FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Spatial Memory System
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            4 Physical Focus Modes
          </h2>
          <p className="text-[#94a3b8] text-sm md:text-base mt-3 font-light">
            Select a mode tab below to preview the active lighting spectrum, OS actions, and script webhooks.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {MODES.map((mode, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(idx)}
                className="p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden"
                style={{
                  borderColor: isActive ? mode.color : "#151D2A",
                  backgroundColor: isActive ? mode.bgAlpha : "#070A10",
                  boxShadow: isActive ? mode.glowShadow : "none",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: mode.color }} />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#64748b]">
                    MODE 0{idx + 1}
                  </span>
                </div>
                <p className="font-display font-bold text-sm sm:text-base text-white truncate">
                  {mode.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMode.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl border p-8 md:p-12 bg-[#070A10] relative overflow-hidden shadow-2xl"
            style={{
              borderColor: currentMode.borderAlpha,
              boxShadow: currentMode.glowShadow,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border inline-block mb-3"
                    style={{
                      color: currentMode.color,
                      borderColor: currentMode.color + "40",
                      backgroundColor: currentMode.color + "10",
                    }}
                  >
                    {currentMode.badge}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                    {currentMode.name}
                  </h3>
                  <p className="text-[#94a3b8] text-base leading-relaxed font-light mt-2">
                    {currentMode.tagline}
                  </p>
                </div>

                {/* Mode Specs Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {currentMode.specs.map((sp) => (
                    <div key={sp.label} className="p-3.5 bg-[#030508] rounded-xl border border-[#151D2A]">
                      <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">{sp.label}</p>
                      <p className="text-xs font-mono font-bold mt-1" style={{ color: currentMode.color }}>
                        {sp.val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols): Script Code Preview */}
              <div className="lg:col-span-5 bg-[#030508] border border-[#151D2A] rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b] border-b border-[#151D2A] pb-3">
                  <span>DISPATCH_HOOK.ps1</span>
                  <button
                    onClick={handleCopyCode}
                    className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    {copiedCode ? <CheckCircle2 size={12} className="text-[#00FF9D]" /> : null}
                    {copiedCode ? "COPIED" : "COPY HOOK"}
                  </button>
                </div>

                <pre className="font-mono text-xs text-[#cbd5e1] leading-relaxed overflow-x-auto p-2">
                  <code>{currentMode.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
