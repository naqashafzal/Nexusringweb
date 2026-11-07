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
      <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#86868B] gap-3">
        <div className="w-6 h-6 border-2 border-[#C93E50] border-t-transparent rounded-full animate-spin" />
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
    <main className="bg-[#FFFFFF] text-[#1D1D1F] font-sans overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* ════════════════ SECTION A: APPLE/GOOGLE PRODUCT HERO (EXPANDED SHOWCASE) ════════════════ */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 pb-16 showcase-container overflow-hidden">
        {/* Subtle warm lighting gradient backdrop */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,62,80,0.04)_0%,rgba(245,245,247,0.85)_60%,transparent_80%)] pointer-events-none blur-3xl z-0" />

        {/* ── TOP: Clean Centered Typography with Refined Sizing ── */}
        <div className="relative z-20 text-center max-w-4xl mx-auto space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            NEXUS RING · PHYSICAL WORKSPACE CONTROLLER
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-[#1D1D1F] leading-[1.02]">
              Reclaim your attention.
            </h1>
            <p className="text-xl sm:text-3xl font-display font-medium text-[#6E6E73] tracking-tight">
              A more intentional way to work.
            </p>
          </div>

          <p className="text-[#6E6E73] text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Nexus Ring is a physical workspace controller being developed to help you switch between focused working modes through one deliberate movement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#how-it-works"
              className="px-8 py-3.5 rounded-full font-medium text-sm text-white bg-[#1D1D1F] hover:bg-[#000000] transition-all duration-150 shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>Explore Nexus Ring</span>
              <ChevronDown size={14} />
            </Link>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3.5 rounded-full font-medium text-sm text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#EAEAEA] border border-[#E5E5E7] transition-all duration-150 cursor-pointer flex items-center gap-2"
            >
              <span>Join Early Access</span>
              <ChevronRight size={14} className="text-[#6E6E73]" />
            </button>
          </div>

          <p className="text-[12px] font-mono text-[#86868B] tracking-wider">
            Currently in active development · Free community waitlist
          </p>
        </div>

        {/* ── CENTER: Substantial 3D Centerpiece Stage (Expanded Width up to 1600px) ── */}
        <div className="relative z-10 w-full h-[540px] sm:h-[620px] lg:h-[720px] my-10 rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Subtle Studio Lighting Backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(245,245,247,0.7)_70%)] pointer-events-none" />

          {/* Floating Engineering Callout Left */}
          <div className="hidden lg:flex flex-col gap-1 absolute left-8 top-8 z-30 p-4.5 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF]/90 backdrop-blur-md shadow-sm max-w-[240px] text-left pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C93E50] font-semibold">
              01 // SENSING
            </span>
            <span className="text-sm font-display font-semibold text-[#1D1D1F]">
              Radial Hall-Effect Array
            </span>
            <p className="text-xs text-[#6E6E73] font-light leading-snug">
              Contactless magnetic quadrant detection without mechanical fatigue.
            </p>
          </div>

          {/* Floating Engineering Callout Right */}
          <div className="hidden lg:flex flex-col gap-1 absolute right-8 top-8 z-30 p-4.5 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF]/90 backdrop-blur-md shadow-sm max-w-[240px] text-left pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#34A853] font-semibold">
              02 // LOCAL ENGINE
            </span>
            <span className="text-sm font-display font-semibold text-[#1D1D1F]">
              ESP32-C3 RISC-V
            </span>
            <p className="text-xs text-[#6E6E73] font-light leading-snug">
              Instant hardware debouncing transmitting USB serial events.
            </p>
          </div>

          {/* Interaction Hint Badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full border border-[#E5E5E7] bg-[#FFFFFF]/90 backdrop-blur-md text-xs font-mono text-[#6E6E73] flex items-center gap-2 pointer-events-none shadow-sm">
            <Rotate3D size={14} className="text-[#C93E50]" />
            <span>Interactive 3D Hardware · Drag to Rotate</span>
          </div>

          {/* 3D Canvas Stage */}
          <div className="w-full h-full">
            <ExplodedRingCanvas disableExplode={true} centerPosition={true} />
          </div>

          {/* Bottom Engineering Tag */}
          <div className="absolute bottom-5 left-8 z-20 text-[11px] font-mono text-[#86868B] uppercase tracking-widest pointer-events-none">
            CAD REV 2.4 · ANODIZED ALUMINUM &amp; SOLID BRASS TOTEM
          </div>
        </div>

        {/* ── BOTTOM: Architectural Spec Strip (Span Full Showcase Width) ── */}
        <div className="relative z-20 w-full grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#E5E5E7]">
          <div className="space-y-1 text-left">
            <p className="text-sm font-semibold text-[#1D1D1F]">
              Four Operating Modes
            </p>
            <p className="text-xs text-[#6E6E73]">
              Deep Work · Creative · Meeting · Break
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-sm font-semibold text-[#1D1D1F]">
              Contactless Sensing
            </p>
            <p className="text-xs text-[#6E6E73]">
              Radial Hall-Effect Magnetics
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-sm font-semibold text-[#1D1D1F]">
              Local-First Automation
            </p>
            <p className="text-xs text-[#6E6E73]">
              Private Companion Engine
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-sm font-semibold text-[#1D1D1F]">
              Peripheral Lighting
            </p>
            <p className="text-xs text-[#6E6E73]">
              360° Glanceable Status Ring
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION B: HOW IT WORKS (PAGE CONTAINER 1440PX) ════════════════ */}
      <section id="how-it-works" className="relative z-20 bg-[#F5F5F7] py-24 md:py-32 border-y border-[#E5E5E7]">
        <div className="page-container">
          <Reveal className="max-w-3xl mb-14">
            <span className="eyebrow block">The Workflow</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1D1D1F] mb-4">
              One simple movement. A different workspace.
            </h2>
            <p className="text-[#6E6E73] text-lg leading-relaxed font-light">
              Software switches live inside the very screens that interrupt you. Nexus Ring shifts the decision out into the physical world through three clear steps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                <div className="p-8 md:p-10 rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] h-full flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-display font-bold text-[#1D1D1F]">
                        {s.step}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-[#6E6E73] uppercase border border-[#E5E5E7] px-3 py-1 rounded-full bg-[#F5F5F7]">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#1D1D1F] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E5E5E7] text-xs font-mono text-[#86868B]">
                    {idx === 2 ? "Integrations in active development" : "Firmware prototype demonstrated"}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 2: THE PROBLEM / MANIFESTO (EDITORIAL 800PX) ════════════════ */}
      <section className="relative z-20 bg-[#FFFFFF] py-24 md:py-32 border-b border-[#E5E5E7]">
        <div className="editorial-container text-center space-y-8">
          <Reveal>
            <span className="eyebrow block">Attention Ecology</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#1D1D1F] mb-6">
              Your attention deserves better.
            </h2>
            <div className="space-y-4 text-[#6E6E73] text-base sm:text-lg leading-relaxed text-left pt-2">
              <p className="border-b border-[#E5E5E7] pb-3">Every notification wants a response.</p>
              <p className="border-b border-[#E5E5E7] pb-3">Every feed wants another scroll.</p>
              <p className="border-b border-[#E5E5E7] pb-3">Every advertisement wants another moment.</p>
              <p className="border-b border-[#E5E5E7] pb-3">Every recommendation algorithm wants to keep you endlessly engaged.</p>
              <p className="text-[#1D1D1F] font-medium pt-2">But your goals need that attention too.</p>
              <p>Your ambitions need time. Your creativity needs space. Your most meaningful work requires calm intention.</p>
              <div className="text-[#1D1D1F] bg-[#F8F9FA] p-6 rounded-2xl border border-[#E5E5E7]">
                <p className="text-base leading-relaxed">
                  We believe technology should support human purpose, not constantly compete against it. Discipline becomes easier when our physical environment supports our decisions. Distraction should be a choice, not the default.
                </p>
              </div>
              <div className="pt-2 text-[#1D1D1F] space-y-1">
                <p className="font-semibold text-lg">That is why we are building Nexus Ring.</p>
                <p className="text-sm text-[#6E6E73] font-light">A physical interface designed to transform a deliberate decision into a focused change in your digital workspace.</p>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-xs font-mono tracking-widest text-[#86868B] uppercase">
                YOUR ATTENTION. YOUR TIME. YOUR DECISION.
              </p>
              <p className="text-xl font-display font-bold text-[#1D1D1F] pt-1">
                NEXUS RING — FORCE YOUR FOCUS. ENGINEER SUCCESS.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/digital-distraction"
                className="px-6 py-3 rounded-full text-xs font-mono text-[#C93E50] border border-[#C93E50]/30 hover:bg-[#C93E50]/10 transition-colors flex items-center gap-2"
              >
                <span>Read Why Digital Distraction Competes for Your Time</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION C: FOUR OPERATING MODES (PAGE CONTAINER 1440PX) ════════════════ */}
      <section id="modes" className="relative z-20 bg-[#F5F5F7] py-24 md:py-32">
        <div className="page-container">
          <Reveal className="max-w-3xl mb-12">
            <span className="eyebrow block">The Operating Modes</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1D1D1F] mb-4">
              A mode for every moment.
            </h2>
            <p className="text-[#6E6E73] text-lg leading-relaxed font-light">
              Your workday is not one uniform state. Nexus Ring provides dedicated physical anchors for the distinct modes of modern technical and creative work.
            </p>
          </Reveal>

          <HardwareModesShowcase />
        </div>
      </section>

      {/* ════════════════ SECTION D: PRODUCT HARDWARE PREVIEW (ASIDE/GRID 1440PX) ════════════════ */}
      <section className="relative z-20 bg-[#FFFFFF] py-24 md:py-32 border-y border-[#E5E5E7]">
        <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 space-y-6">
            <span className="eyebrow block">Hardware Architecture</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1D1D1F] leading-tight">
              Thoughtfully engineered.
            </h2>
            <p className="text-[#6E6E73] text-lg leading-relaxed font-light">
              Nexus Ring is designed as a substantial desk object. A weighted magnetic totem provides tactile resistance, seating into precision Hall-sensor quadrants connected to an ESP32 microcontroller.
            </p>
            <p className="text-sm text-[#6E6E73] leading-relaxed border-l-2 border-[#C93E50] pl-4">
              No screens, no notifications, and no micro-menus. Status is communicated through diffuse ambient light that you can read from the corner of your eye.
            </p>
            <div className="pt-2">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-sm bg-[#F5F5F7] border border-[#E5E5E7] text-[#1D1D1F] hover:bg-[#EAEAEA] transition-colors"
              >
                <span>Explore the Engineering</span>
                <ArrowRight size={15} className="text-[#C93E50]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-7 rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] space-y-3 shadow-xs">
                <Cpu size={24} className="text-[#C93E50]" />
                <h4 className="font-display font-bold text-[#1D1D1F] text-base">Local Controller</h4>
                <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
                  ESP32-C3 architecture reading Hall-effect sensor inputs and managing LED ring state locally without cloud dependence.
                </p>
              </div>
              <div className="p-7 rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] space-y-3 shadow-xs">
                <Compass size={24} className="text-[#34A853]" />
                <h4 className="font-display font-bold text-[#1D1D1F] text-base">Contactless Sensing</h4>
                <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
                  Magnetic field detection replaces fragile mechanical switches with smooth, repeatable, fatigue-free positioning.
                </p>
              </div>
              <div className="p-7 rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] space-y-3 shadow-xs">
                <Layers size={24} className="text-[#1D1D1F]" />
                <h4 className="font-display font-bold text-[#1D1D1F] text-base">Weighted Totem</h4>
                <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
                  Engineered with deliberate heft so mode transitions require an intentional, mindful physical action.
                </p>
              </div>
              <div className="p-7 rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] space-y-3 shadow-xs">
                <ShieldCheck size={24} className="text-[#FBBC04]" />
                <h4 className="font-display font-bold text-[#1D1D1F] text-base">Screen-Free Feedback</h4>
                <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
                  360° diffuse light ring provides glanceable state confirmation without adding another glowing display to your workspace.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION E: LOCAL-FIRST SOFTWARE & PHILOSOPHY (PAGE CONTAINER 1440PX) ════════════════ */}
      <section className="relative z-20 bg-[#F5F5F7] py-24 md:py-32">
        <div className="page-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 space-y-6">
            <span className="eyebrow block">Software &amp; Architecture</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#1D1D1F] leading-tight">
              Hardware and software,<br />working together.
            </h2>
            <p className="text-[#6E6E73] text-lg leading-relaxed font-light">
              We believe a productivity controller should serve you, not collect behavioral metrics. Core mode switching runs locally on your computer via Nexus Companion.
            </p>
            <div className="space-y-3 text-sm text-[#6E6E73]">
              <div className="flex items-start gap-3">
                <HardDrive size={18} className="text-[#34A853] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1D1D1F]">Local-First Automations:</strong> Mode triggers, local scripts, and app launching execute directly on your host machine.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CloudOff size={18} className="text-[#6E6E73] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1D1D1F]">Clear Network Boundaries:</strong> No cloud connection is needed for basic operation. Only optional integrations (such as calendar sync) require external network access.
                </span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/software"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-sm bg-[#1D1D1F] text-white hover:bg-[#000000] transition-colors shadow-sm"
              >
                <span>Tour All 8 Companion Screens</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7 space-y-6">
            {/* Desktop Window Frame Preview */}
            <Link
              href="/software"
              className="block rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden group hover:border-[#1D1D1F]/30 hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* Window Chrome Titlebar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E5E7] bg-[#F8F9FA]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[11px] text-[#6E6E73]">
                    Nexus Companion — Deep Work Dashboard
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#34A853]/10 text-[#34A853] border border-[#34A853]/20">
                  4K PREVIEW
                </span>
              </div>

              {/* Screenshot Image Container */}
              <div className="relative aspect-[16/9] w-full bg-[#0E1015] overflow-hidden">
                <Image
                  src="/screenshots/02_dashboard_deepwork.png"
                  alt="Nexus Companion Deep Work Dashboard Screenshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="text-white text-xs font-medium flex items-center gap-2">
                    <span>Click to explore full desktop tour</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-5 py-3.5 bg-[#FFFFFF] border-t border-[#E5E5E7] flex items-center justify-between text-xs text-[#6E6E73]">
                <span className="font-mono text-[11px]">Active Session Countdown &amp; Workspace Orchestration</span>
                <span className="text-[#C93E50] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Explore Software</span>
                  <ChevronRight size={14} />
                </span>
              </div>
            </Link>

            {/* Quick Links Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/hardware"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF] hover:border-[#1D1D1F] hover:shadow-xs transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C93E50] block font-semibold">
                    Hardware Dock
                  </span>
                  <span className="text-sm font-bold text-[#1D1D1F]">Physical Architecture</span>
                </div>
                <ChevronRight size={16} className="shrink-0 text-[#6E6E73]" />
              </Link>

              <Link
                href="/software"
                className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF] hover:border-[#1D1D1F] hover:shadow-xs transition-all"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#34A853] block font-semibold">
                    Local Daemon
                  </span>
                  <span className="text-sm font-bold text-[#1D1D1F]">Mode Profiles &amp; Rules</span>
                </div>
                <ChevronRight size={16} className="shrink-0 text-[#6E6E73]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION F: DEVELOPMENT TRANSPARENCY (PAGE CONTAINER 1440PX) ════════════════ */}
      <section id="development" className="relative z-20 bg-[#FFFFFF] py-24 md:py-32 border-t border-[#E5E5E7]">
        <div className="page-container">
          <Reveal className="p-8 md:p-14 rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] flex flex-col lg:flex-row gap-10 lg:items-center justify-between shadow-sm">
            <div className="max-w-2xl space-y-4">
              <span className="eyebrow block">Development Stage</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#1D1D1F]">
                A new way to focus is taking shape.
              </h2>
              <p className="text-[#6E6E73] text-sm md:text-base leading-relaxed font-light">
                Nexus Ring is not a mass-produced product yet. We are actively refining 3D chassis designs, testing Hall sensor PCB layouts, and writing Companion software. Follow every milestone honestly.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#6E6E73] pt-2">
                <span className="px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5E7]">Industrial CAD: Validated</span>
                <span className="px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5E7]">Magnetic Totem: Functional Prototype</span>
                <span className="px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5E7]">ESP32 Firmware: In Testing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/campaign"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D1D1F] hover:bg-[#000000] text-white px-8 py-3.5 text-sm font-medium transition-colors shadow-sm"
              >
                <span>View Development Roadmap</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE FAQ (EDITORIAL 800PX) ════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative z-10 bg-[#F5F5F7] py-24 md:py-32 border-t border-[#E5E5E7]"
      >
        <div className="editorial-container">
          <Reveal className="text-center mb-14 space-y-3">
            <span className="eyebrow block">Questions &amp; Answers</span>
            <h2
              id="faq-title"
              className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#1D1D1F]"
            >
              Frequently Asked Questions.
            </h2>
            <p className="text-[#6E6E73] text-sm font-light">
              Clear facts about the product, architecture, and development status.
            </p>
          </Reveal>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={item.q} delay={idx * 0.04}>
                  <div className="rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF] overflow-hidden transition-all shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-[#1D1D1F] font-medium text-sm sm:text-base hover:text-[#6E6E73] transition-colors gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#86868B] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#C93E50]" : ""
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
                          <div className="px-6 pb-6 pt-2 text-[#6E6E73] text-sm leading-relaxed border-t border-[#E5E5E7] font-light">
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

      {/* ════════════════ SECTION G: FINAL WAITLIST CTA (EDITORIAL 800PX) ════════════════ */}
      <section className="relative z-10 bg-[#FFFFFF] py-28 md:py-36 text-center overflow-hidden border-t border-[#E5E5E7]">
        <Reveal className="relative z-10 editorial-container space-y-6">
          <span className="eyebrow block">Early Access</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[#1D1D1F] leading-tight">
            Make room for what matters.
          </h2>
          <p className="text-[#6E6E73] text-base md:text-lg font-light max-w-md mx-auto leading-relaxed">
            Follow Nexus Ring&apos;s development, get prototype updates, and hear when early access becomes available.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="inline-flex items-center gap-3 px-9 py-3.5 rounded-full font-medium text-sm text-white bg-[#1D1D1F] hover:bg-[#000000] transition-all duration-150 shadow-sm cursor-pointer"
            >
              <span>Join Early Access</span>
              <ChevronRight size={16} />
            </button>
          </div>
          <p className="text-[#86868B] text-xs font-mono tracking-wider pt-2">
            Currently in development · Free non-binding waitlist
          </p>
        </Reveal>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
