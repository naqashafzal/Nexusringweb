"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ChevronRight,
  RefreshCw,
  Box,
  Cpu,
} from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

const ExplodedRingCanvas = dynamic(() => import("@/components/ExplodedRingCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#A5AFBD] gap-3">
      <RefreshCw size={20} className="animate-spin text-[#D83A50]" />
      <span className="tracking-widest uppercase">INITIALIZING 3D HARDWARE MODEL...</span>
    </div>
  ),
});

// Component data for the interactive exploded view
const HARDWARE_COMPONENTS = [
  {
    id: "totem",
    name: "Magnetic Totem",
    layer: "01",
    purpose: "Provides deliberate tactile resistance and switches system states when moved.",
    role: "Houses the centered neodymium magnetic core that trips the underlying Hall-effect sensor array.",
    status: "Functional Prototype",
    details: "Billet aluminum / weighted composite prototype with downward-focused magnetic pole alignment.",
  },
  {
    id: "enclosure",
    name: "Dual-Shell Enclosure",
    layer: "02",
    purpose: "Desk chassis anchoring internal electronics and providing 4 radial mode seats.",
    role: "Features alignment detents and a low center of gravity so removing the totem does not drag the device.",
    status: "Prototype (FDM PLA-CF / PETG)",
    details: "3D-printed two-piece enclosure with internal weight pockets and anti-slip silicone desk base.",
  },
  {
    id: "sensors",
    name: "Hall-Effect Sensor Array",
    layer: "03",
    purpose: "Contactless detection of the magnetic totem position without mechanical switch fatigue.",
    role: "4 omnipolar/unipolar magnetic switch sensors situated at 90° intervals (Deep Work, Creative, Meeting, Break).",
    status: "Testing / Validation",
    details: "Connected via digital input pins with hardware debouncing to eliminate false positive triggers.",
  },
  {
    id: "controller",
    name: "ESP32-C3 RISC-V Controller",
    layer: "04",
    purpose: "Hardware logic engine interpreting sensor states and controlling status lights.",
    role: "Maintains hardware state machine and transmits structured mode events over USB serial to companion software.",
    status: "Firmware in Development",
    details: "160MHz 32-bit RISC-V microcontroller with onboard USB-JTAG/Serial interface and native BLE capability.",
  },
  {
    id: "led",
    name: "Ambient 360° LED System",
    layer: "05",
    purpose: "Glanceable state confirmation without adding another screen to the workspace.",
    role: "Radial addressable LEDs paired with an internal light diffuser produce a subtle peripheral glow for each mode.",
    status: "Prototype Tested",
    details: "Multi-element NeoPixel/WS2812 compatible ring driven by hardware RMT peripheral.",
  },
  {
    id: "power",
    name: "Power & Connectivity Subsystem",
    layer: "06",
    purpose: "Continuous power delivery and local host communication.",
    role: "USB Type-C receptacle with ESD protection circuitry and 3.3V low-dropout voltage regulation.",
    status: "Circuit in Development",
    details: "Standard 5V USB bus powered with USB serial data transfer to host operating system.",
  },
];

export default function HardwarePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedCompId, setSelectedCompId] = useState<string>("totem");

  const selectedComp = HARDWARE_COMPONENTS.find((c) => c.id === selectedCompId) || HARDWARE_COMPONENTS[0];

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/20 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ SECTION 1: HERO ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Nexus Ring Emblem"
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain"
            />
            <span>Hardware Engineering &amp; Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F5F6F8] uppercase">
            ENGINEERED FOR INTENTION.
          </h1>
          <p className="text-[#A5AFBD] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            An exploration of the physical architecture behind Nexus Ring.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#exploded-view"
              className="px-8 py-3.5 rounded-full bg-[#D83A50] text-[#F5F6F8] font-semibold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_20px_rgba(216,58,80,0.25)] flex items-center gap-2"
            >
              Explore Exploded View <ChevronRight size={15} />
            </a>
            <Link
              href="/software"
              className="px-8 py-3.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#F5F6F8] hover:border-[#A5AFBD] transition-all font-mono text-sm flex items-center gap-2"
            >
              See Companion Software
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 2: HOW THE HARDWARE WORKS ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="eyebrow block">Functional Pipeline</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            From movement to mode.
          </h2>
          <p className="text-sm md:text-base text-[#A5AFBD] font-light">
            How a physical movement translates through magnetic sensing and firmware into desktop workspace automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            {
              step: "01",
              title: "Physical Totem Shift",
              desc: "The user manually moves the weighted magnetic totem into one of four radial mode positions.",
              badge: "User Action",
            },
            {
              step: "02",
              title: "Magnetic Flux Shift",
              desc: "The permanent magnet changes magnetic flux density over the quadrant's Hall-effect sensor.",
              badge: "Physics",
            },
            {
              step: "03",
              title: "Controller Mapping",
              desc: "The ESP32-C3 samples sensor inputs, debounces state, and updates ambient mode lighting.",
              badge: "Firmware",
            },
            {
              step: "04",
              title: "Event Transmission",
              desc: "The controller sends a lightweight structured mode event to the host over USB serial connection.",
              badge: "Hardware Comms",
            },
            {
              step: "05",
              title: "Companion Execution",
              desc: "Nexus Companion receives the event and applies the user's configured workspace automations.",
              badge: "Software Layer",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="relative z-10 p-6 rounded-2xl border border-[#303A48] bg-[#11151C] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#080A0E] border border-[#D83A50] flex items-center justify-center text-[#D83A50] font-mono text-xs font-bold">
                    {item.step}
                  </span>
                  <span className="text-[9px] font-mono text-[#A5AFBD] uppercase px-2 py-0.5 rounded bg-[#1B222D] border border-[#303A48]">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#303A48] text-[10px] font-mono text-[#A5AFBD]">
                {i < 3 ? "Prototype Verified" : "Integration in Progress"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ SECTION 3: INTERACTIVE EXPLODED VIEW ════════════════ */}
      <section id="exploded-view" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="eyebrow block">Interactive CAD Disassembly</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Exploded Engineering View.
          </h2>
          <p className="text-sm md:text-base text-[#A5AFBD] font-light">
            Examine the physical stacking order of the actual CAD model. Select a component below to inspect its purpose and confirmed engineering details.
          </p>
        </div>

        {/* 3D Canvas Box */}
        <div className="h-[520px] sm:h-[600px] rounded-3xl border border-[#303A48] bg-[#11151C] relative overflow-hidden shadow-2xl mb-8">
          <div className="absolute top-6 left-6 z-20 text-[10px] font-mono text-[#A5AFBD] tracking-widest uppercase bg-[#080A0E]/80 px-3 py-1.5 rounded-full border border-[#303A48] backdrop-blur-md">
            Interactive CAD Stacking · Select Component Below
          </div>
          <ExplodedRingCanvas
            disableExplode={false}
            centerPosition={true}
            selectedComponent={selectedCompId}
          />
        </div>

        {/* Selectable Component Carousel / Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {HARDWARE_COMPONENTS.map((comp) => {
            const isSelected = selectedCompId === comp.id;
            return (
              <button
                key={comp.id}
                type="button"
                onClick={() => setSelectedCompId(comp.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "border-[#D83A50] bg-[#1B222D] shadow-[0_0_15px_rgba(255,64,90,0.2)]"
                    : "border-[#303A48] bg-[#11151C] hover:border-[#A5AFBD]/40"
                }`}
              >
                <span className="text-[9px] font-mono text-[#D83A50] block uppercase">Layer {comp.layer}</span>
                <p className="text-xs font-bold text-white truncate mt-0.5">{comp.name}</p>
              </button>
            );
          })}
        </div>

        {/* Active Component Specification Panel */}
        <div className="p-6 md:p-8 rounded-3xl border border-[#303A48] bg-[#1B222D] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 space-y-2">
              <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest px-2 py-0.5 rounded border border-[#D83A50]/30 bg-[#D83A50]/10">
                Layer {selectedComp.layer} Detail
              </span>
              <h3 className="text-2xl font-display font-bold text-white">{selectedComp.name}</h3>
              <p className="text-xs font-mono text-[#A5AFBD]">
                Status: <span className="text-white font-semibold">{selectedComp.status}</span>
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-[#303A48] bg-[#080A0E] space-y-1">
                <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-widest block">Engineering Purpose</span>
                <p className="text-[#F5F6F8] leading-relaxed">{selectedComp.purpose}</p>
              </div>
              <div className="p-4 rounded-xl border border-[#303A48] bg-[#080A0E] space-y-1">
                <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-widest block">Role in Assembly</span>
                <p className="text-[#F5F6F8] leading-relaxed">{selectedComp.role}</p>
              </div>
              <div className="p-4 rounded-xl border border-[#303A48] bg-[#080A0E] sm:col-span-2 space-y-1">
                <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-widest block">Confirmed Technical Details</span>
                <p className="text-[#F5F6F8] leading-relaxed font-mono text-[11px]">{selectedComp.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 4: DETAILED ARCHITECTURE SCHEMATICS ════════════════ */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-32 space-y-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="eyebrow block">Subsystem Breakdown</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Engineering Behind Nexus Ring.
          </h2>
          <p className="text-sm md:text-base text-[#A5AFBD] font-light">
            Verified hardware layers and architecture schematics based on genuine prototype CAD models and firmware code.
          </p>
        </div>

        {/* Layer 01: Enclosure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest border border-[#D83A50]/30 bg-[#D83A50]/10 px-2.5 py-1 rounded-full">
              Layer 01 · Structural Base
            </span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-3">The Physical Base</h3>
            <p className="text-[#A5AFBD] text-sm leading-relaxed mb-4">
              The Nexus chassis integrates the internal electronics, four radial totem docking positions, magnetic sensing zones, and ambient optical diffuser into a single cohesive desk object.
            </p>
            <p className="text-xs text-[#A5AFBD] italic mb-6">
              Prototype enclosures are being fabricated for FDM additive manufacturing using carbon-fiber reinforced filaments (PLA-CF / PETG) for dimensional stability and matte surface texture.
            </p>
            <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-2xl space-y-2">
              <h4 className="text-white font-bold text-xs flex items-center gap-2">
                <Box size={16} className="text-[#D83A50]" />
                Designed for maker reproducibility
              </h4>
              <p className="text-xs text-[#A5AFBD] leading-relaxed">
                The enclosure was engineered from inception so the custom electronics fit into a printable chassis without requiring multi-thousand dollar injection-molding tooling for initial validation.
              </p>
            </div>

            {/* Real Prototype Desk Photo Highlight */}
            <div className="mt-6 rounded-2xl border border-[#303A48] overflow-hidden bg-[#080A0E]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/prototype-desk-angle-lit.jpg"
                  alt="Real Nexus Ring physical prototype on desk"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-[#11151C] border-t border-[#303A48] flex justify-between text-[10px] font-mono text-[#A5AFBD]">
                <span>BENCH PROTOTYPE REV 03</span>
                <span className="text-[#D83A50]">REAL HARDWARE ON DESK</span>
              </div>
            </div>
          </div>

          {/* Schematic SVG 1: Enclosure Cross Section */}
          <div className="aspect-square bg-[#11151C] border border-[#303A48] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AFBD]">
              <span>SCHEMATIC 01 // CHASSIS STACK</span>
              <span className="text-[#D83A50]">DWG-ENC-01</span>
            </div>
            <div className="my-auto flex items-center justify-center">
              <svg viewBox="0 0 320 200" className="w-full max-w-[280px] stroke-[#A5AFBD] fill-none" strokeWidth="1.5">
                {/* Upper Housing Lid */}
                <rect x="40" y="30" width="240" height="35" rx="6" className="stroke-[#D83A50]" strokeDasharray="3 3" />
                <text x="160" y="52" fill="#D83A50" stroke="none" fontSize="10" fontFamily="monospace" textAnchor="middle">ANODIZED UPPER LID (FDM / ALLOY)</text>
                
                {/* Totem Receptacle Well */}
                <rect x="110" y="20" width="100" height="45" rx="4" className="stroke-white" strokeWidth="2" />
                <text x="160" y="32" fill="#FFFFFF" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">TOTEM SEAT WELL</text>
                
                {/* Middle Optical Diffuser */}
                <rect x="50" y="75" width="220" height="20" rx="3" className="stroke-[#35C98A]" />
                <text x="160" y="89" fill="#35C98A" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">360° OPTICAL LIGHT GUIDE</text>
                
                {/* PCB & Electronics Chamber */}
                <rect x="50" y="105" width="220" height="40" rx="4" className="stroke-white" />
                <circle cx="90" cy="125" r="8" className="stroke-[#D83A50]" />
                <circle cx="230" cy="125" r="8" className="stroke-[#D83A50]" />
                <rect x="130" y="115" width="60" height="20" rx="2" className="stroke-[#F0B35A]" />
                <text x="160" y="129" fill="#F0B35A" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">ESP32-C3 PCB</text>
                
                {/* Base Deck */}
                <rect x="30" y="155" width="260" height="25" rx="4" className="stroke-[#A5AFBD]" />
                <text x="160" y="171" fill="#A5AFBD" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">WEIGHTED BASE PLATE + RUBBER PAD</text>
              </svg>
            </div>
            <div className="text-[10px] font-mono text-[#A5AFBD] border-t border-[#303A48] pt-2 flex justify-between">
              <span>DUAL-SHELL ASSEMBLY</span>
              <span>PLA-CF / BILLET 6061</span>
            </div>
          </div>
        </div>

        {/* Layer 02: Magnetic Totem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest border border-[#D83A50]/30 bg-[#D83A50]/10 px-2.5 py-1 rounded-full">
              Layer 02 · Interactive Totem
            </span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-3">The Magnetic Totem</h3>
            <p className="text-[#A5AFBD] text-sm leading-relaxed mb-4">
              The totem is the primary tactile contact point. Moving it represents a deliberate cognitive commitment. Its weight, material texture, and magnetic resistance are engineered to feel substantial rather than accidental.
            </p>
            <p className="text-xs text-[#A5AFBD] italic mb-6">
              Current prototype direction pairs an anodized aluminum upper totem with an embedded neodymium permanent magnet core and non-scratch contact face.
            </p>
            <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-2xl space-y-1">
              <span className="text-xs font-bold text-white block">Deliberate Physical Action</span>
              <p className="text-xs text-[#A5AFBD]">
                Unlike digital switches that can be closed in a split second of impulsivity, moving a physical totem requires deliberate focus.
              </p>
            </div>
          </div>

          {/* Schematic SVG 2: Totem Core Schematic */}
          <div className="md:order-1 aspect-square bg-[#11151C] border border-[#303A48] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AFBD]">
              <span>SCHEMATIC 02 // TOTEM FLUX CORE</span>
              <span className="text-[#D83A50]">DWG-TOT-02</span>
            </div>
            <div className="my-auto flex items-center justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-[240px] stroke-[#A5AFBD] fill-none" strokeWidth="1.5">
                {/* Outer Totem Shell */}
                <path d="M 60 190 L 75 50 Q 120 40 165 50 L 180 190 Z" className="stroke-white" strokeWidth="2" />
                {/* Chamfer Top Grip */}
                <line x1="75" y1="50" x2="165" y2="50" className="stroke-[#D83A50]" strokeWidth="2" />
                <text x="120" y="32" fill="#D83A50" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">TACTILE INDEX NOTCH</text>
                
                {/* Internal Weight / Core Cavity */}
                <rect x="85" y="80" width="70" height="90" rx="4" className="stroke-[#303A48]" fill="#080A0E" />
                
                {/* Neodymium Magnet */}
                <rect x="95" y="130" width="50" height="35" rx="2" className="stroke-[#D83A50]" fill="#D83A5020" />
                <text x="120" y="148" fill="#FFFFFF" stroke="none" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">N-POLE</text>
                <text x="120" y="160" fill="#A5AFBD" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">NdFeB MAGNET</text>
                
                {/* Magnetic Flux Lines */}
                <path d="M 95 165 Q 60 210 120 220 Q 180 210 145 165" className="stroke-[#D83A50]" strokeDasharray="3 3" />
                <text x="120" y="235" fill="#D83A50" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">DOWNWARD FLUX VECTOR</text>
              </svg>
            </div>
            <div className="text-[10px] font-mono text-[#A5AFBD] border-t border-[#303A48] pt-2 flex justify-between">
              <span>WEIGHT: ~85g PROTOTYPE</span>
              <span>GRADE: N52 TARGET</span>
            </div>
          </div>
        </div>

        {/* Layer 03: Hall Sensors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest border border-[#D83A50]/30 bg-[#D83A50]/10 px-2.5 py-1 rounded-full">
              Layer 03 · Contactless Sensing
            </span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-3">Hall-Effect Quadrant Array</h3>
            <p className="text-[#A5AFBD] text-sm leading-relaxed mb-4">
              Nexus Ring replaces mechanical click switches with magnetic Hall-effect sensors positioned under each mode quadrant. When the magnetic totem enters a slot, the magnetic flux shifts the sensor output voltage.
            </p>
            <p className="text-xs text-[#A5AFBD] italic mb-6">
              Eliminates moving electrical contacts, dust vulnerability, and switch wear over thousands of daily focus cycles.
            </p>
            <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-2xl text-xs space-y-1">
              <span className="text-white font-bold block">Digital Interrupt State Machine</span>
              <p className="text-[#A5AFBD]">
                Sensors are sampled via hardware debounced interrupts to guarantee rapid mode transitions without false firing.
              </p>
            </div>
          </div>

          {/* Schematic SVG 3: Hall Sensor Array Top View */}
          <div className="aspect-square bg-[#11151C] border border-[#303A48] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AFBD]">
              <span>SCHEMATIC 03 // SENSOR QUADRANT</span>
              <span className="text-[#D83A50]">DWG-HAL-03</span>
            </div>
            <div className="my-auto flex items-center justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-[240px] stroke-[#A5AFBD] fill-none" strokeWidth="1.5">
                {/* Radial Quadrant Ring */}
                <circle cx="120" cy="120" r="90" className="stroke-[#303A48]" />
                <circle cx="120" cy="120" r="50" className="stroke-[#303A48]" />
                <line x1="120" y1="20" x2="120" y2="220" className="stroke-[#303A48]" strokeDasharray="3 3" />
                <line x1="20" y1="120" x2="220" y2="120" className="stroke-[#303A48]" strokeDasharray="3 3" />

                {/* Slot 01: Deep Work (Top) */}
                <rect x="108" y="40" width="24" height="18" rx="2" className="stroke-[#D83A50]" fill="#D83A5020" />
                <text x="120" y="52" fill="#D83A50" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">H1</text>
                <text x="120" y="30" fill="#FFFFFF" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">01 DEEP WORK</text>

                {/* Slot 02: Creative (Right) */}
                <rect x="178" y="111" width="18" height="24" rx="2" className="stroke-white" fill="#FFFFFF20" />
                <text x="187" y="126" fill="#FFFFFF" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">H2</text>
                <text x="187" y="148" fill="#A5AFBD" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">02 CREATIVE</text>

                {/* Slot 03: Meeting (Bottom) */}
                <rect x="108" y="180" width="24" height="18" rx="2" className="stroke-[#35C98A]" fill="#35C98A20" />
                <text x="120" y="192" fill="#35C98A" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">H3</text>
                <text x="120" y="212" fill="#35C98A" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">03 MEETING</text>

                {/* Slot 04: Break (Left) */}
                <rect x="42" y="111" width="18" height="24" rx="2" className="stroke-[#F0B35A]" fill="#F0B35A20" />
                <text x="51" y="126" fill="#F0B35A" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">H4</text>
                <text x="51" y="148" fill="#F0B35A" stroke="none" fontSize="9" fontFamily="monospace" textAnchor="middle">04 BREAK</text>

                <circle cx="120" cy="120" r="16" className="stroke-[#D83A50]" strokeDasharray="2 2" />
                <text x="120" y="123" fill="#A5AFBD" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">CORE</text>
              </svg>
            </div>
            <div className="text-[10px] font-mono text-[#A5AFBD] border-t border-[#303A48] pt-2 flex justify-between">
              <span>QUADRATURE SENSING</span>
              <span>4X HALL IC CHANNELS</span>
            </div>
          </div>
        </div>

        {/* Layer 04: Microcontroller / Custom PCB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest border border-[#D83A50]/30 bg-[#D83A50]/10 px-2.5 py-1 rounded-full">
              Layer 04 · Onboard Controller
            </span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-3">ESP32-C3 RISC-V Architecture</h3>
            <p className="text-[#A5AFBD] text-sm leading-relaxed mb-4">
              The microcontroller reads magnetic sensor inputs, maintains the device state machine, generates glanceable ambient lighting, and transmits mode transitions directly to the local companion software.
            </p>
            <p className="text-xs text-[#A5AFBD] italic mb-6">
              Custom PCB routing is in active development to consolidate wiring, integrate ESD protection, and streamline assembly into the printable base.
            </p>
            <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-2xl text-xs space-y-1">
              <span className="text-white font-bold flex items-center gap-2">
                <Cpu size={14} className="text-[#D83A50]" /> Local State Management
              </span>
              <p className="text-[#A5AFBD]">
                Runs dedicated firmware written in C++/ESP-IDF with deterministic hardware interrupts and local USB serial transmission.
              </p>
            </div>

            {/* Custom Silicon Architecture Visual */}
            <div className="mt-6 rounded-2xl border border-[#303A48] overflow-hidden bg-[#080A0E]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/hardware-custom-silicon.jpg"
                  alt="Bespoke Architecture - Custom silicon engineered purely for human peace"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-[#11151C] border-t border-[#303A48] flex justify-between text-[10px] font-mono text-[#A5AFBD]">
                <span>BESPOKE ARCHITECTURE</span>
                <span className="text-[#35C98A]">RISC-V SILICON LOGIC</span>
              </div>
            </div>
          </div>

          {/* Schematic SVG 4: ESP32-C3 PCB Layout */}
          <div className="md:order-1 aspect-square bg-[#11151C] border border-[#303A48] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AFBD]">
              <span>SCHEMATIC 04 // PCB TOPOLOGY</span>
              <span className="text-[#D83A50]">DWG-PCB-04</span>
            </div>
            <div className="my-auto flex items-center justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-[240px] stroke-[#A5AFBD] fill-none" strokeWidth="1.5">
                {/* PCB Outline */}
                <rect x="25" y="25" width="190" height="190" rx="14" className="stroke-white" fill="#0d1b14" />
                
                {/* Mounting Holes */}
                <circle cx="45" cy="45" r="5" className="stroke-[#A5AFBD]" fill="#080A0E" />
                <circle cx="195" cy="45" r="5" className="stroke-[#A5AFBD]" fill="#080A0E" />
                <circle cx="45" cy="195" r="5" className="stroke-[#A5AFBD]" fill="#080A0E" />
                <circle cx="195" cy="195" r="5" className="stroke-[#A5AFBD]" fill="#080A0E" />

                {/* ESP32-C3 SoC Module */}
                <rect x="75" y="70" width="90" height="90" rx="4" className="stroke-[#D83A50]" fill="#080A0E" strokeWidth="2" />
                <text x="120" y="105" fill="#FFFFFF" stroke="none" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ESP32-C3</text>
                <text x="120" y="120" fill="#A5AFBD" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">32-bit RISC-V</text>
                <text x="120" y="132" fill="#D83A50" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">160MHz CORE</text>

                {/* USB-C Receptacle */}
                <rect x="95" y="195" width="50" height="20" rx="3" className="stroke-white" fill="#1B222D" />
                <text x="120" y="208" fill="#FFFFFF" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">USB-C</text>

                {/* Traces */}
                <path d="M 120 70 L 120 40" className="stroke-[#35C98A]" strokeDasharray="2 2" />
                <path d="M 75 115 L 45 115" className="stroke-[#35C98A]" strokeDasharray="2 2" />
                <path d="M 165 115 L 195 115" className="stroke-[#35C98A]" strokeDasharray="2 2" />
              </svg>
            </div>
            <div className="text-[10px] font-mono text-[#A5AFBD] border-t border-[#303A48] pt-2 flex justify-between">
              <span>PCB: 2-LAYER CUSTOM</span>
              <span>ESP32-C3 RISC-V ARCH</span>
            </div>
          </div>
        </div>

        {/* Layer 05: Ambient LED Ring */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest border border-[#D83A50]/30 bg-[#D83A50]/10 px-2.5 py-1 rounded-full">
              Layer 05 · Optical Feedback
            </span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-3">Ambient Optical Diffuser</h3>
            <p className="text-[#A5AFBD] text-sm leading-relaxed mb-4">
              Nexus Ring intentionally avoids a screen. Adding another tiny display demanding eye contact defeats the purpose of calm computing. State is communicated through an internal 360° light ring and frosted optical diffuser.
            </p>
            <ul className="space-y-2 text-xs text-[#A5AFBD] font-mono mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D83A50]" />
                <strong className="text-white">Deep Work:</strong> Steady focused crimson glow
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <strong className="text-white">Creative:</strong> Soft breathing studio light
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#35C98A]" />
                <strong className="text-white">Meeting:</strong> Steady calm emerald light
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F0B35A]" />
                <strong className="text-white">Break:</strong> Warm low-intensity amber glow
              </li>
            </ul>

            {/* Macro Diffuser Photo from Real Prototype */}
            <div className="rounded-2xl border border-[#303A48] overflow-hidden bg-[#080A0E]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/prototype-glow-deep-mode-macro.jpg"
                  alt="Nexus Ring prototype red LED macro diffuse glow"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-[#11151C] border-t border-[#303A48] flex justify-between text-[10px] font-mono text-[#A5AFBD]">
                <span>LAB TEST: DEEP WORK GLOW</span>
                <span className="text-[#D83A50]">360° CONTINUOUS PERIPHERAL HALO</span>
              </div>
            </div>
          </div>

          {/* Schematic SVG 5: Diffuser Optical Path */}
          <div className="aspect-square bg-[#11151C] border border-[#303A48] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AFBD]">
              <span>SCHEMATIC 05 // OPTICAL DIFFUSION</span>
              <span className="text-[#D83A50]">DWG-OPT-05</span>
            </div>
            <div className="my-auto flex items-center justify-center">
              <svg viewBox="0 0 240 240" className="w-full max-w-[240px] stroke-[#A5AFBD] fill-none" strokeWidth="1.5">
                {/* 360 Ring */}
                <circle cx="120" cy="120" r="95" className="stroke-[#303A48]" />
                <circle cx="120" cy="120" r="80" className="stroke-[#D83A50]" strokeWidth="3" opacity="0.8" />
                <circle cx="120" cy="120" r="65" className="stroke-[#303A48]" />

                {/* LED Nodes */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = Number((120 + 80 * Math.cos(rad)).toFixed(2));
                  const y = Number((120 + 80 * Math.sin(rad)).toFixed(2));
                  return (
                    <circle key={deg} cx={x} cy={y} r="3" fill="#D83A50" stroke="none" />
                  );
                })}

                {/* Diffused Light Rays */}
                <circle cx="120" cy="120" r="105" className="stroke-[#D83A50]" strokeDasharray="3 4" opacity="0.4" />
                <text x="120" y="115" fill="#FFFFFF" stroke="none" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">360° DIFFUSER</text>
                <text x="120" y="130" fill="#A5AFBD" stroke="none" fontSize="8" fontFamily="monospace" textAnchor="middle">RADIAL HALO EFFECT</text>
              </svg>
            </div>
            <div className="text-[10px] font-mono text-[#A5AFBD] border-t border-[#303A48] pt-2 flex justify-between">
              <span>DIFFUSER: FROSTED OPTIC</span>
              <span>WS2812 COMPATIBLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 5: HARDWARE SPECIFICATION TABLE ════════════════ */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-10 space-y-2">
          <span className="eyebrow block">Technical Data</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Hardware Specifications.
          </h2>
          <p className="text-xs text-[#A5AFBD]">
            Confirmed prototype parameters and planned manufacturing targets. Unconfirmed specifications are marked truthfully.
          </p>
        </div>

        <div className="rounded-2xl border border-[#303A48] bg-[#11151C] overflow-hidden">
          {[
            { label: "Controller Architecture", value: "ESP32-C3 RISC-V SoC (32-bit, 160MHz)", status: "Validated in Prototype" },
            { label: "Position Detection Method", value: "4x Contactless Hall-effect magnetic sensors", status: "Functional Testing" },
            { label: "Selectable Operating Modes", value: "4 dedicated positions (Deep Work, Creative, Meeting, Break)", status: "Confirmed Architecture" },
            { label: "Power Interface", value: "USB Type-C (5V DC input)", status: "Confirmed" },
            { label: "Host Communication", value: "USB Serial (CDC) / Bluetooth LE (BLE)", status: "USB Validated / BLE In Dev" },
            { label: "Status Indication Method", value: "360° diffuse addressable LED ring", status: "Functional Prototype" },
            { label: "Prototype Enclosure", value: "Carbon-fiber composite FDM (PLA-CF / PETG)", status: "Prototype Validated" },
            { label: "Production Enclosure Target", value: "Billet anodized aluminum totem / weighted base", status: "Under Manufacturing Review" },
            { label: "Dimensions & Weight", value: "Diameter ~95mm, Height ~38mm, Weight ~140g target", status: "Provisional (CAD Estimates)" },
            { label: "Manufacturing Status", value: "Functional prototype stage (Pre-tooling)", status: "In Active Development" },
          ].map((row, idx) => (
            <div
              key={row.label}
              className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#303A48] ${
                idx % 2 === 0 ? "bg-[#11151C]" : "bg-[#1B222D]"
              }`}
            >
              <div>
                <span className="text-xs font-bold text-white block">{row.label}</span>
                <span className="text-xs font-mono text-[#A5AFBD]">{row.value}</span>
              </div>
              <span className="text-[10px] font-mono text-[#D83A50] px-2.5 py-1 rounded bg-[#080A0E] border border-[#303A48] shrink-0 self-start sm:self-auto">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ SECTION 6: DEVELOPMENT STATUS ════════════════ */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
          What is real today.
        </h2>
        <div className="space-y-2 font-mono text-xs">
          {[
            { f: "Product concept & 4-mode layout", s: "VALIDATED" },
            { f: "Industrial CAD modeling (GLB/STEP)", s: "VALIDATED" },
            { f: "3D-printed chassis test units", s: "PROTOTYPE" },
            { f: "Magnetic totem tactile positioning", s: "PROTOTYPE" },
            { f: "Hall sensor quadrant detection", s: "TESTING" },
            { f: "ESP32-C3 firmware state machine", s: "IN DEVELOPMENT" },
            { f: "Custom PCB layout & integration", s: "IN DEVELOPMENT" },
            { f: "Nexus Companion desktop daemon", s: "IN DEVELOPMENT" },
            { f: "Production tooling & CNC fixtures", s: "PLANNED" },
            { f: "Mass manufacturing & assembly", s: "PLANNED" },
          ].map((row) => (
            <div key={row.f} className="flex justify-between items-center p-3.5 border-b border-[#303A48] bg-[#11151C] rounded-lg">
              <span className="text-[#F5F6F8]">{row.f}</span>
              <span
                className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                  row.s === "VALIDATED"
                    ? "bg-[#35C98A]/20 text-[#35C98A]"
                    : row.s === "PROTOTYPE" || row.s === "TESTING"
                    ? "bg-[#F0B35A]/20 text-[#F0B35A]"
                    : row.s === "IN DEVELOPMENT"
                    ? "bg-[#D83A50]/20 text-[#D83A50]"
                    : "bg-[#303A48] text-[#A5AFBD]"
                }`}
              >
                {row.s}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ SECTION 7: MAKER ECOSYSTEM ════════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
            <span className="eyebrow block mb-1">Maker Philosophy</span>
            <h3 className="text-2xl font-bold text-white">Open to inspect, build, and modify.</h3>
            <p className="text-sm text-[#A5AFBD] leading-relaxed font-light">
              Nexus Ring began on 3D printers and breadboards. We want the hardware to be understandable rather than a black-box sealed gadget.
            </p>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              We plan to release digital CAD files, assembly guides, and bill of materials so 3D printing enthusiasts and DIY builders can construct their own chassis.
            </p>
          </div>

          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
            <span className="eyebrow block mb-1">Planned Editions</span>
            <h3 className="text-2xl font-bold text-white">Three planned ways to get it.</h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <strong className="text-white block">Maker Edition:</strong>
                <span className="text-[#A5AFBD]">Digital 3D CAD files (STEP/STL), BOM, and build guide for 3D printer owners.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <strong className="text-white block">Hacker Hardware Kit:</strong>
                <span className="text-[#A5AFBD]">Official custom PCB, ESP32-C3 module, sensors, magnets, and LEDs. You print the body.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <strong className="text-white block">Pro Desk Set:</strong>
                <span className="text-[#A5AFBD]">Fully assembled, tested hardware controller with weighted totem and USB-C cable.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Showcase Poster */}
        <div className="mt-12 rounded-3xl border border-[#303A48] bg-[#11151C] overflow-hidden shadow-2xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/product-showcase-poster.jpg"
              alt="Nexus Ring - Made to Take Your Mind Back"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 bg-[#080A0E] border-t border-[#303A48] flex flex-wrap items-center justify-between text-xs font-mono text-[#A5AFBD] gap-3">
            <span className="text-white font-bold">NEXUS RING ARCHITECTURE</span>
            <span className="text-[#D83A50]">PHYSICAL ANCHOR · SILENT ORBIT · TACTILE AUTHORITY</span>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 8: BOTTOM CTA ════════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-[#11151C] border border-[#303A48] p-12 md:p-20 rounded-3xl">
        <div className="flex justify-center mb-6">
          <Image
            src="/branding/nexus-logo-vertical.png"
            alt="Nexus Ring Vertical Mark"
            width={64}
            height={56}
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4 uppercase tracking-tight">
          Hardware detects the state.<br />
          <span className="text-[#A5AFBD]">Software makes it useful.</span>
        </h2>
        <p className="text-[#A5AFBD] text-base md:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          See how Nexus Companion connects each physical mode to your applications, website filters, notifications, and desktop workflows.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/software"
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_20px_rgba(255,64,90,0.35)]"
          >
            Explore Companion Software
          </Link>
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-4 rounded-xl border border-[#303A48] text-white hover:border-[#D83A50] transition-all font-mono text-sm cursor-pointer"
          >
            Join Early Access
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
