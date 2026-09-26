"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Fingerprint,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Sliders,
  Activity,
  HardDrive,
} from "lucide-react";

// ─── Component Assembly Data ──────────────────────────────────────

const TEARDOWN_COMPONENTS = [
  {
    id: "shell",
    num: "01",
    name: "Precision 3D-Printed V1 Shell",
    tagline: "High-density engineered matte composite with tuned snap-fit internal cavities.",
    accent: "#00FF9D",
    specs: [
      { label: "Material", val: "Engineered Matte PLA-CF" },
      { label: "Tolerance", val: "±0.1mm Micro Snap-Fit" },
      { label: "Profiles", val: "Bambu Lab & Prusa 3MF" },
      { label: "Finish", val: "Smooth Matte Texture" },
    ],
    details:
      "Engineered specifically for maker-first 3D printing with zero messy adhesives or visible fasteners. Custom internal channels lock the Hall-effect sensor array and magnets into sub-millimeter spatial alignment. (CNC aluminum available as Pro stretch tier).",
  },
  {
    id: "sensors",
    num: "02",
    name: "N52 Hall Effect Array",
    tagline: "3D magnetic flux sensing array with sub-1mm position resolution.",
    accent: "#00E5FF",
    specs: [
      { label: "Sensors", val: "4x KY-003 Triple-Axis" },
      { label: "Magnets", val: "N52 Neodymium Core" },
      { label: "Sampling", val: "1000Hz (1ms Polling)" },
      { label: "Magnetic Flux", val: "420mT Field Detection" },
    ],
    details:
      "Detects the exact 3D spatial position and polarity of inserted totems. Uses zero physical contacts or mechanical switches, resulting in infinite cycle lifespan and zero degradation.",
  },
  {
    id: "core",
    num: "03",
    name: "ESP32-C3 RISC-V Core",
    tagline: "Custom FreeRTOS firmware running zero-latency direct webhooks.",
    accent: "#B026FF",
    specs: [
      { label: "Architecture", val: "32-bit RISC-V 160MHz" },
      { label: "Connectivity", val: "Dual Wi-Fi 4 + BLE 5.0" },
      { label: "OS Response", val: "<24ms Direct Interrupt" },
      { label: "Power Draw", val: "0.14W Ultra Low Energy" },
    ],
    details:
      "Embedded hardware daemon executes native OS webhooks without needing cloud servers. Features on-chip hardware encryption (AES-256) for secure local communication.",
  },
  {
    id: "haptics",
    num: "04",
    name: "Ceramic Magnetic Damping",
    tagline: "Engineered acoustic resonance for the perfect tactile snap.",
    accent: "#FF9F1C",
    specs: [
      { label: "Snap Force", val: "4.2N Resonant Lock" },
      { label: "Acoustics", val: "440Hz Low Damped Snap" },
      { label: "Damping", val: "Sub-surface Ceramic Ring" },
      { label: "Tactile Index", val: "Zero Slop Fit" },
    ],
    details:
      "Custom ceramic ring inserts absorb harsh metallic impact, transforming the magnetic attraction into a deep, satisfying tactile thud that locks into your spatial muscle memory.",
  },
];

// ─── Main Component ───────────────────────────────────────────────

export default function HardwarePage() {
  const [activeTeardown, setActiveTeardown] = useState(0);
  const [snapSimulated, setSnapSimulated] = useState(false);

  const activeComp = TEARDOWN_COMPONENTS[activeTeardown];

  const handleSimulateSnap = () => {
    setSnapSimulated(true);
    setTimeout(() => setSnapSimulated(false), 1200);
  };

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      {/* Background Dot Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald/30 bg-emerald/[0.06] text-emerald text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
            High-Performance Workspace Artifact · V1 3D-Printed Spec
          </div>

          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            ENGINEERED TO<br />
            <span style={{ background: "linear-gradient(120deg, #FFFFFF, #94A3B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              PERFECTION.
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            The ultimate hardware artifact to lock in your habits and build unbreakable discipline. Engineered with sub-millimeter 3D-printing snap-fit tolerances and ceramic magnetic damping to create an unyielding physical barrier between you and distractions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-6 border-t border-slate">
            {[
              { val: "Matte PLA-CF", label: "V1 Chassis", accent: "#00FF9D" },
              { val: "±0.1mm", label: "Snap Precision", accent: "#00E5FF" },
              { val: "4.2N", label: "Snap Resonance", accent: "#B026FF" },
              { val: "1000Hz", label: "Hall Polling Rate", accent: "#FF9F1C" },
            ].map((st) => (
              <div key={st.label} className="p-3 rounded-xl border border-slate bg-matte">
                <p className="text-lg font-display font-bold" style={{ color: st.accent }}>{st.val}</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE COMPONENT TEARDOWN ═══════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] font-mono tracking-[0.25em] text-electric uppercase border border-electric/20 bg-electric/5 rounded-full inline-block px-3 py-1 mb-4">
            Component Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Exploded Assembly Teardown
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Click through each layer to inspect the internal aerospace hardware stack.
          </p>
        </div>

        {/* Teardown Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {TEARDOWN_COMPONENTS.map((comp, idx) => {
            const isActive = activeTeardown === idx;
            return (
              <button
                key={comp.id}
                onClick={() => setActiveTeardown(idx)}
                className="p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden"
                style={{
                  borderColor: isActive ? comp.accent + "50" : "#151D2A",
                  backgroundColor: isActive ? comp.accent + "0a" : "#070A10",
                  boxShadow: isActive ? `0 0 25px ${comp.accent}20` : "none",
                }}
              >
                <span
                  className="text-[10px] font-mono tracking-widest uppercase block mb-1"
                  style={{ color: isActive ? comp.accent : "#64748b" }}
                >
                  LAYER {comp.num}
                </span>
                <p className="font-display font-bold text-sm sm:text-base text-white truncate">
                  {comp.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComp.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-3xl border p-8 md:p-12 bg-matte relative overflow-hidden"
            style={{
              borderColor: activeComp.accent + "35",
              boxShadow: `0 0 50px ${activeComp.accent}12`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border inline-block mb-3"
                    style={{
                      color: activeComp.accent,
                      borderColor: activeComp.accent + "33",
                      backgroundColor: activeComp.accent + "10",
                    }}
                  >
                    LAYER {activeComp.num} ARCHITECTURE
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                    {activeComp.name}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed font-light mt-2">
                    {activeComp.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed border-l-2 pl-4 py-1" style={{ borderColor: activeComp.accent }}>
                  {activeComp.details}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate">
                  {activeComp.specs.map((sp) => (
                    <div key={sp.label} className="bg-vantablack p-3.5 rounded-xl border border-slate">
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{sp.label}</p>
                      <p className="text-xs font-mono font-bold mt-0.5" style={{ color: activeComp.accent }}>{sp.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Component Blueprint (5 cols) */}
              <div className="lg:col-span-5 bg-vantablack border border-slate rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#475569] uppercase tracking-widest">
                  Blueprint CAD Render
                </div>

                <div className="w-48 h-48 rounded-full border-2 border-dashed flex items-center justify-center relative my-6" style={{ borderColor: activeComp.accent + "60" }}>
                  <motion.div
                    className="w-32 h-32 rounded-full border-4 flex items-center justify-center bg-matte shadow-2xl"
                    style={{ borderColor: activeComp.accent, boxShadow: `0 0 30px ${activeComp.accent}40` }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Layers size={40} style={{ color: activeComp.accent }} />
                  </motion.div>
                </div>

                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Status: <span className="text-white font-bold">VERIFIED AEROSPACE GRADE</span>
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ════════════════ ACOUSTIC & TACTILE SNAP SIMULATOR ════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="rounded-3xl border border-slate bg-matte p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald border border-emerald/20 bg-emerald/10 px-3 py-1 rounded-full">
                Tactile Physics Engine
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Feel the Resonant Magnetic Snap
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                We tuned the magnetic pull force (`4.2 Newtons`) to trigger a natural sensory lock. Click below to test the acoustic waveform and tactile pulse feedback loop.
              </p>

              <button
                onClick={handleSimulateSnap}
                className="px-6 py-3.5 rounded-xl border border-emerald/40 bg-emerald/10 text-emerald hover:bg-emerald/20 font-bold text-sm tracking-wide transition-all flex items-center gap-3"
              >
                <Zap size={18} />
                {snapSimulated ? "Resonance Locked (4.2N Snap)" : "Simulate Magnetic Snap"}
              </button>
            </div>

            {/* Dynamic Waveform Simulation */}
            <div className="lg:col-span-6 bg-vantablack border border-slate rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>ACOUSTIC RESONANCE SPECTRUM</span>
                <span className="text-emerald">440Hz Damped Harmonic</span>
              </div>

              {/* Waveform Equalizer */}
              <div className="h-20 bg-matte rounded-xl border border-slate p-4 flex items-center justify-between gap-1">
                {[15, 30, 70, 95, 100, 85, 40, 20, 10, 5, 2, 0, 0, 0, 0, 0].map((val, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-full"
                    style={{ backgroundColor: "#00FF9D" }}
                    animate={{
                      height: snapSimulated ? [`${val}%`, `${val * 0.2}%`, `${val}%`] : `${val * 0.3}%`,
                    }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                <div className="p-2 bg-matte rounded-lg border border-slate">
                  <p className="text-slate-500">PULL FORCE</p>
                  <p className="text-white font-bold text-xs mt-0.5">4.2N</p>
                </div>
                <div className="p-2 bg-matte rounded-lg border border-slate">
                  <p className="text-slate-500">RESPONSE</p>
                  <p className="text-emerald font-bold text-xs mt-0.5">&lt;12ms</p>
                </div>
                <div className="p-2 bg-matte rounded-lg border border-slate">
                  <p className="text-slate-500">HALL FLUX</p>
                  <p className="text-electric font-bold text-xs mt-0.5">420mT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TECHNICAL SPECIFICATION MATRIX ═══════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] font-mono tracking-[0.25em] text-purple uppercase border border-purple/20 bg-purple/5 rounded-full inline-block px-3 py-1 mb-4">
            Engineering Matrix
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Full Specification Breakdown
          </h2>
        </div>

        <div className="rounded-2xl border border-slate bg-matte overflow-hidden">
          <div className="divide-y divide-slate">
            {[
              { cat: "Enclosure", spec: "CNC Machined 6061-T6 Aluminum Billet", note: "15-micron hard anodized matte finish" },
              { cat: "Microcontroller", spec: "ESP32-C3 RISC-V Single Core @ 160MHz", note: "Custom FreeRTOS firmware with open webhooks" },
              { cat: "Sensor Array", spec: "4x KY-003 Triple-Axis Hall Effect Sensors", note: "Sub-1mm magnetic spatial tracking" },
              { cat: "Totem Damping", spec: "N52 Neodymium + Sub-surface Ceramic Ring", note: "4.2N magnetic lock force with zero click noise" },
              { cat: "Connectivity", spec: "Dual Wi-Fi 802.11 b/g/n + BLE 5.0", note: "Local websocket execution without internet reliance" },
              { cat: "Dimensions", spec: "88mm x 88mm x 22mm (Base Dock)", note: "Weight: 185g heavy desktop anchoring" },
            ].map((row, idx) => (
              <div key={row.cat} className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-vantablack/50 transition-colors">
                <span className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-emerald font-bold">
                  {row.cat}
                </span>
                <span className="md:col-span-5 text-sm font-medium text-white">
                  {row.spec}
                </span>
                <span className="md:col-span-4 text-xs font-mono text-slate-500">
                  {row.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
