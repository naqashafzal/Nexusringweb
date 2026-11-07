"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import HardwareModesShowcase from "@/components/HardwareModesShowcase";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ChevronRight,
  Rotate3D,
  ChevronDown,
  ArrowRight,
  Cpu,
  Layers,
  ShieldCheck,
  Compass,
  HardDrive,
  CloudOff,
} from "lucide-react";

const ExplodedRingCanvas = dynamic(
  () => import("@/components/ExplodedRingCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#A5AFBD] gap-3">
        <div className="w-6 h-6 border-2 border-[#D83A50] border-t-transparent rounded-full animate-spin" />
        <span className="tracking-widest uppercase text-[10px]">Loading 3D Hardware Model...</span>
      </div>
    ),
  }
);

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const FAQ_ITEMS = [
  {
    q: "What is Nexus Ring?",
    a: "Nexus Ring is a desk-based physical interface designed to connect deliberate physical actions with digital workspace automation. A user moves a magnetic totem into one of four designated positions to select their intended working mode.",
  },
  {
    q: "How does the magnetic totem communicate with software?",
    a: "When the totem is placed into a slot, internal Hall-effect sensors detect the magnetic field change without requiring physical push-buttons. The onboard controller interprets the selected position and transmits the mode event to Nexus Companion software running on your computer.",
  },
  {
    q: "Can I customize what happens in each mode?",
    a: "Yes. In the product vision for Nexus Companion, users will be able to customize profile rules for each mode position—such as website filters, notification silencing, application launches, or project setup scripts.",
  },
  {
    q: "Is Nexus Ring available to purchase today?",
    a: "Nexus Ring is currently in active hardware and software development. We have opened a non-binding waitlist so interested builders, makers, and focus enthusiasts can receive genuine prototype milestones and early notice when production batches open. No payment is required.",
  },
  {
    q: "What does local-first mean for privacy?",
    a: "Core mode switching and workspace automation rules are designed to execute locally on your machine. We believe basic tool switching should not require external cloud routing or telemetry to function.",
  },
  {
    q: "What editions will be available?",
    a: "We are designing three paths: a Maker Edition for 3D-printing enthusiasts with CAD files and BOM; a Hacker Kit supplying the custom PCB and electronics; and a fully assembled Pro Desk Set.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="bg-[#080A0E] text-[#F5F6F8] font-sans overflow-x-hidden selection:bg-[#D83A50]/20 selection:text-white">
      {/* ════════════════ SECTION A: CINEMATIC FULL-BLEED HERO ════════════════ */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 max-w-[1500px] mx-auto overflow-hidden">
        {/* Subtle radial ambient backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,58,80,0.12)_0%,rgba(17,21,28,0.05)_50%,transparent_75%)] pointer-events-none blur-3xl z-0" />
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* ── TOP: High-Impact Editorial Typography ── */}
        <div className="relative z-20 text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C]/90 backdrop-blur-md text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase shadow-lg">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Nexus Ring Emblem"
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain"
            />
            NEXUS RING / PHYSICAL WORKSPACE CONTROL
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.92] text-[#F5F6F8] uppercase">
              RECLAIM YOUR ATTENTION.
            </h1>
            <p className="text-lg sm:text-2xl font-display font-bold text-[#D83A50] tracking-wider uppercase">
              FORCE YOUR FOCUS. ENGINEER SUCCESS.
            </p>
          </div>

          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            In a digital world competing for your attention, Nexus Ring is being developed to help you create a more intentional workspace through a simple physical interaction.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#how-it-works"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-[#F5F6F8] bg-[#D83A50] hover:bg-[#EB5268] transition-all duration-150 shadow-[0_0_25px_rgba(216,58,80,0.35)] cursor-pointer flex items-center gap-2"
            >
              <span>Explore Nexus Ring</span>
              <ChevronDown size={14} />
            </Link>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3.5 rounded-full font-medium text-sm text-[#F5F6F8] hover:text-white border border-[#303A48] bg-[#11151C]/80 hover:border-[#A5AFBD] transition-all duration-150 cursor-pointer flex items-center gap-2 backdrop-blur-sm"
            >
              <span>Join Early Access</span>
              <ChevronRight size={15} />
            </button>
          </div>

          <p className="text-[11px] font-mono text-[#778292] tracking-wider">
            Currently in development.
          </p>
        </div>

        {/* ── CENTER: Dramatic 3D Centerpiece Stage ── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto h-[480px] sm:h-[540px] lg:h-[600px] my-10 rounded-3xl border border-[#303A48] bg-[#11151C]/60 backdrop-blur-md shadow-2xl overflow-hidden">
          {/* Floating Telemetry Callout Left */}
          <div className="hidden lg:flex flex-col gap-1 absolute left-6 top-8 z-30 p-4 rounded-2xl border border-[#303A48] bg-[#080A0E]/85 backdrop-blur-md shadow-2xl max-w-[220px] text-left pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D83A50] font-semibold">
              01 // SENSING
            </span>
            <span className="text-xs font-display font-bold text-[#F5F6F8]">
              Hall-Effect Array
            </span>
            <p className="text-[11px] text-[#A5AFBD] font-light leading-snug">
              Contactless magnetic quadrant detection without mechanical fatigue.
            </p>
          </div>

          {/* Floating Telemetry Callout Right */}
          <div className="hidden lg:flex flex-col gap-1 absolute right-6 top-8 z-30 p-4 rounded-2xl border border-[#303A48] bg-[#080A0E]/85 backdrop-blur-md shadow-2xl max-w-[220px] text-left pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#35C98A] font-semibold">
              02 // LOCAL ENGINE
            </span>
            <span className="text-xs font-display font-bold text-[#F5F6F8]">
              ESP32-C3 RISC-V
            </span>
            <p className="text-[11px] text-[#A5AFBD] font-light leading-snug">
              Instant hardware debouncing transmitting USB serial events.
            </p>
          </div>

          {/* Interaction Hint Badge */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#080A0E]/90 backdrop-blur-md text-xs font-mono text-[#A5AFBD] flex items-center gap-2 pointer-events-none shadow-xl">
            <Rotate3D size={14} className="text-[#D83A50] animate-spin" style={{ animationDuration: "12s" }} />
            <span>Interactive 3D Controller · Drag to Rotate</span>
          </div>

          {/* 3D Canvas Stage */}
          <div className="w-full h-full">
            <ExplodedRingCanvas disableExplode={true} centerPosition={true} />
          </div>

          {/* Bottom Engineering Tag */}
          <div className="absolute bottom-4 left-6 z-20 text-[10px] font-mono text-[#778292] uppercase tracking-widest pointer-events-none">
            CAD REV 2.4 · DUAL-SHELL ANODIZED PROTOTYPE
          </div>
        </div>

        {/* ── BOTTOM: Architectural Spec Strip ── */}
        <div className="relative z-20 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#303A48]/80 max-w-5xl mx-auto">
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">
              Four Operating Modes
            </p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              Deep Work · Creative · Meeting · Break
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">
              Contactless Sensing
            </p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              Radial Hall-Effect Magnetics
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">
              Local-First Automation
            </p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              Zero Cloud Surveillance
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">
              Peripheral Lighting
            </p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              360° Glanceable Ambient Ring
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION B: HOW IT WORKS ════════════════ */}
      <section id="how-it-works" className="relative z-20 bg-[#11151C] py-28 border-y border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow block">The Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] mb-4">
              From intention to action.
            </h2>
            <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
              Software switches live inside the very screens that interrupt you. Nexus Ring shifts the decision out into the physical world through three clear steps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose your work mode",
                desc: "Identify what kind of work you intend to do: focused deep work, open exploration, team communication, or rest.",
                tag: "Cognitive Intention",
              },
              {
                step: "02",
                title: "Move the magnetic totem",
                desc: "Place the weighted totem into the corresponding position. Contactless Hall-effect sensors detect the position change without mechanical wear.",
                tag: "Physical Trigger",
              },
              {
                step: "03",
                title: "Nexus Companion responds",
                desc: "The local companion software executes the matching profile, adjusting website filters, muting alerts, and opening target tools.",
                tag: "Workspace Automation",
              },
            ].map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl border border-[#303A48] bg-[#1B222D] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-display font-black text-[#D83A50]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#778292] uppercase border border-[#303A48] px-2.5 py-1 rounded-full bg-[#080A0E]">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#F5F6F8] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#A5AFBD] leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#303A48] text-[11px] font-mono text-[#778292]">
                    {idx === 2 ? "Integrations in active development" : "Firmware prototype demonstrated"}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ BRAND MANIFESTO ════════════════ */}
      <section className="relative z-20 bg-[#080A0E] py-24 border-b border-[#303A48]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center space-y-6">
          <Reveal>
            <span className="eyebrow block">Brand Manifesto</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#F5F6F8] uppercase mb-6">
              The World is Fighting for Your Attention.
            </h2>
            <div className="space-y-4 text-[#A5AFBD] text-base sm:text-lg leading-relaxed text-left max-w-2xl mx-auto">
              <p className="border-b border-[#303A48] pb-3">Every notification wants a response.</p>
              <p className="border-b border-[#303A48] pb-3">Every feed wants another scroll.</p>
              <p className="border-b border-[#303A48] pb-3">Every advertisement wants another moment.</p>
              <p className="border-b border-[#303A48] pb-3">Every recommendation system wants to predict what will keep you engaged.</p>
              <p className="text-[#F5F6F8] font-medium pt-2">But your goals need that attention too.</p>
              <p>Your ambitions need time. Your creativity needs space. Your most meaningful work requires intention.</p>
              <p className="text-[#F5F6F8] bg-[#11151C] p-4 rounded-2xl border border-[#303A48]">
                We believe technology should support human purpose, not constantly compete against it. We believe discipline becomes easier to practice when our environments support our decisions. We believe distraction should be a choice, not the default.
              </p>
              <div className="pt-2 text-[#F5F6F8] space-y-1">
                <p className="font-semibold text-lg">That is why we are building Nexus Ring.</p>
                <p className="text-sm text-[#A5AFBD] font-light">A physical interface designed to transform a deliberate decision into a change in your digital workspace.</p>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-xs font-mono tracking-widest text-[#778292] uppercase">
                YOUR ATTENTION. YOUR TIME. YOUR DECISION.
              </p>
              <p className="text-xl font-display font-bold text-[#F5F6F8] pt-1">
                NEXUS RING — FORCE YOUR FOCUS. ENGINEER SUCCESS.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/digital-distraction"
                className="px-6 py-3 rounded-full text-xs font-mono text-[#D83A50] border border-[#D83A50]/40 hover:bg-[#D83A50]/10 transition-colors flex items-center gap-2"
              >
                <span>Read Why Digital Distraction Competes for Your Time</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION C: FOUR OPERATING MODES ════════════════ */}
      <section id="modes" className="relative z-20 bg-[#080A0E] py-28 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow block">The Modes</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] mb-4">
              Four modes. Built for purpose.
            </h2>
            <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
              Your workday is not one uniform state. Nexus Ring provides dedicated physical anchors for the distinct modes of modern technical and creative work.
            </p>
          </Reveal>

          <HardwareModesShowcase />
        </div>
      </section>

      {/* ════════════════ SECTION D: PRODUCT HARDWARE PREVIEW ════════════════ */}
      <section className="relative z-20 bg-[#11151C] py-28 border-y border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 space-y-6">
            <span className="eyebrow block">Industrial Architecture</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] leading-tight">
              Engineered for intention.
            </h2>
            <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
              Nexus Ring is designed as a substantial desk object. A weighted magnetic totem provides tactile resistance, seating into precision Hall-sensor quadrants connected to an ESP32 microcontroller.
            </p>
            <p className="text-sm text-[#A5AFBD] leading-relaxed border-l-2 border-[#D83A50] pl-4">
              No screens, no notifications, and no micro-menus. Status is communicated through diffuse ambient light that you can read from the corner of your eye.
            </p>
            <div className="pt-2">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#1B222D] border border-[#303A48] text-[#F5F6F8] hover:border-[#D83A50] transition-colors"
              >
                <span>Explore the Engineering</span>
                <ArrowRight size={15} className="text-[#D83A50]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-[#303A48] bg-[#1B222D] space-y-3">
                <Cpu size={22} className="text-[#D83A50]" />
                <h4 className="font-display font-bold text-[#F5F6F8] text-base">Local Controller</h4>
                <p className="text-xs text-[#A5AFBD] leading-relaxed">
                  ESP32-C3 architecture reading Hall-effect sensor inputs and managing LED ring state locally.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#303A48] bg-[#1B222D] space-y-3">
                <Compass size={22} className="text-[#35C98A]" />
                <h4 className="font-display font-bold text-[#F5F6F8] text-base">Contactless Sensing</h4>
                <p className="text-xs text-[#A5AFBD] leading-relaxed">
                  Magnetic field detection replaces fragile mechanical switches with smooth, repeatable positioning.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#303A48] bg-[#1B222D] space-y-3">
                <Layers size={22} className="text-[#F5F6F8]" />
                <h4 className="font-display font-bold text-[#F5F6F8] text-base">Weighted Totem</h4>
                <p className="text-xs text-[#A5AFBD] leading-relaxed">
                  Engineered with deliberate heft so mode transitions require intentional physical action.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#303A48] bg-[#1B222D] space-y-3">
                <ShieldCheck size={22} className="text-[#F0B35A]" />
                <h4 className="font-display font-bold text-[#F5F6F8] text-base">Screen-Free Feedback</h4>
                <p className="text-xs text-[#A5AFBD] leading-relaxed">
                  360° light ring provides glanceable state confirmation without adding another glowing display.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION E: LOCAL-FIRST PHILOSOPHY ════════════════ */}
      <section className="relative z-20 bg-[#080A0E] py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-6">
            <span className="eyebrow block">Architecture Principle</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] leading-tight">
              Your workspace.<br />Your rules.
            </h2>
            <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
              We believe a productivity controller should serve you, not collect behavioral metrics. Core mode switching runs locally on your computer via Nexus Companion.
            </p>
            <div className="space-y-3 text-sm text-[#A5AFBD]">
              <div className="flex items-start gap-3">
                <HardDrive size={18} className="text-[#35C98A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F6F8]">Local-First Automations:</strong> Mode triggers, local scripts, and app launching execute directly on your host machine.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CloudOff size={18} className="text-[#778292] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F6F8]">Clear Network Boundaries:</strong> No cloud connection is needed for basic operation. Only optional integrations (such as calendar sync) require external network access.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="space-y-4">
            <Link
              href="/hardware"
              className="flex items-center justify-between gap-6 p-6 rounded-2xl border border-[#303A48] bg-[#11151C] hover:border-[#D83A50] hover:bg-[#1B222D] transition-all duration-150"
            >
              <div>
                <span className="eyebrow block mb-1">Hardware Engineering</span>
                <span className="text-lg font-bold text-[#F5F6F8]">Physical Dock Architecture</span>
                <span className="block text-xs text-[#A5AFBD] mt-1.5">
                  Examine the controller, Hall-effect sensors, magnetic totem, and printable chassis.
                </span>
              </div>
              <ChevronRight className="shrink-0 text-[#D83A50]" />
            </Link>

            <Link
              href="/software"
              className="flex items-center justify-between gap-6 p-6 rounded-2xl border border-[#303A48] bg-[#11151C] hover:border-[#D83A50] hover:bg-[#1B222D] transition-all duration-150"
            >
              <div>
                <span className="eyebrow block mb-1">Software Companion</span>
                <span className="text-lg font-bold text-[#F5F6F8]">Nexus Companion Profiles</span>
                <span className="block text-xs text-[#A5AFBD] mt-1.5">
                  Discover how physical mode triggers connect to local operating system automations.
                </span>
              </div>
              <ChevronRight className="shrink-0 text-[#D83A50]" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION F: DEVELOPMENT TRANSPARENCY ════════════════ */}
      <section id="development" className="relative z-20 bg-[#11151C] py-28 border-t border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="p-8 md:p-12 rounded-3xl border border-[#303A48] bg-[#1B222D] flex flex-col md:flex-row gap-10 md:items-center justify-between">
            <div className="max-w-xl space-y-4">
              <span className="eyebrow block">Built In The Open</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#F5F6F8]">
                Built in the open. Developed with purpose.
              </h2>
              <p className="text-[#A5AFBD] text-sm md:text-base leading-relaxed font-light">
                Nexus Ring is not a mass-produced product yet. We are actively refining 3D chassis designs, testing Hall sensor PCB layouts, and writing Companion software. Follow every milestone honestly.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#778292] pt-2">
                <span className="px-2.5 py-1 rounded bg-[#080A0E] border border-[#303A48]">Industrial CAD: Validated</span>
                <span className="px-2.5 py-1 rounded bg-[#080A0E] border border-[#303A48]">Magnetic Totem: Functional Prototype</span>
                <span className="px-2.5 py-1 rounded bg-[#080A0E] border border-[#303A48]">ESP32 Firmware: In Testing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/campaign"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#080A0E] border border-[#303A48] hover:border-[#D83A50] text-[#F5F6F8] px-6 py-3.5 text-xs font-mono tracking-wider uppercase transition-colors"
              >
                <span>View Development Roadmap</span>
                <ChevronRight size={14} className="text-[#D83A50]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE FAQ ════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative z-10 bg-[#080A0E] py-28 border-t border-[#303A48]"
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16 space-y-3">
            <span className="eyebrow block">Questions &amp; Answers</span>
            <h2
              id="faq-title"
              className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#F5F6F8]"
            >
              Frequently Asked Questions.
            </h2>
            <p className="text-[#A5AFBD] text-sm font-light">
              Clear facts about the product, architecture, and development status.
            </p>
          </Reveal>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={item.q} delay={idx * 0.04}>
                  <div className="rounded-2xl border border-[#303A48] bg-[#11151C] overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-[#F5F6F8] font-medium text-sm sm:text-base hover:text-[#A5AFBD] transition-colors gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#778292] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#D83A50]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-[#A5AFBD] text-xs sm:text-sm leading-relaxed border-t border-[#303A48]">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION G: FINAL WAITLIST CTA ════════════════ */}
      <section className="relative z-10 bg-[#11151C] py-32 text-center overflow-hidden border-t border-[#303A48]">
        <Reveal className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 space-y-6">
          <div className="flex justify-center mb-2">
            <Image
              src="/branding/nexus-logo-vertical.png"
              alt="Nexus Ring Vertical Mark"
              width={72}
              height={64}
              className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <span className="eyebrow block">Early Access</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#F5F6F8] leading-tight">
            Build a more intentional workspace.
          </h2>
          <p className="text-[#A5AFBD] text-base md:text-lg font-light max-w-md mx-auto leading-relaxed">
            Follow Nexus Ring&apos;s development, get prototype updates, and hear when early access becomes available.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-sm tracking-wide text-[#F5F6F8] bg-[#D83A50] hover:bg-[#EB5268] transition-all duration-150 shadow-[0_0_20px_rgba(216,58,80,0.3)] cursor-pointer"
            >
              <span>Join Early Access</span>
              <ChevronRight size={16} />
            </button>
          </div>
          <p className="text-[#778292] text-xs font-mono tracking-widest pt-2">
            Currently in development · No payment required
          </p>
        </Reveal>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
