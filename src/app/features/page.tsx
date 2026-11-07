"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  Home as HomeIcon,
  Info,
} from "lucide-react";

const ExplodedRingCanvas = dynamic(() => import("@/components/ExplodedRingCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#86868B] gap-2">
      <RefreshCw size={20} className="animate-spin text-[#C93E50]" />
      <span>INITIALIZING 3D CAD MODEL...</span>
    </div>
  ),
});

const MODES_DATA = [
  {
    id: "deep_work",
    name: "Deep Work",
    color: "#C93E50",
    tagline: "Remove everything that does not belong in the session.",
    desc: "Deep Work mode is designed for the moments when you want maximum focus. Place the totem in the Deep Work position and Nexus Companion can automatically prepare a focused workspace using the rules you selected.",
    actions: [
      { text: "Block configured distracting websites (YouTube, social feeds)" },
      { text: "Close entertainment apps and distracting messengers" },
      { text: "Enable OS Do Not Disturb notification profile" },
      { text: "Open primary IDE, terminal, or document workspace" },
      { text: "Start optional 90-minute focus session timer" },
    ],
    status: "Steady crimson glow",
  },
  {
    id: "creative",
    name: "Creative",
    color: "#1D1D1F",
    tagline: "Remove noise without closing the door on exploration.",
    desc: "Creative work is different from Deep Work. You may still need reference imagery, music, and exploratory browsing. Creative mode gives you a more flexible environment while filtering out algorithmic feeds.",
    actions: [
      { text: "Open design and 3D modeling tools (Figma, Blender)" },
      { text: "Open project asset folders and reference boards" },
      { text: "Allow research and design reference platforms" },
      { text: "Trigger creative audio presets" },
      { text: "Silence non-urgent workplace notifications" },
    ],
    status: "Soft white breathing pulse",
  },
  {
    id: "meeting",
    name: "Meeting",
    color: "#34A853",
    tagline: "Prepare for the call without scrambling through settings.",
    desc: "Meeting mode prepares the tools, audio state, and communication settings you normally adjust manually before a call.",
    actions: [
      { text: "Launch Zoom, Teams, or Google Meet workspace" },
      { text: "Open meeting notes or agenda templates" },
      { text: "Pause background music and playback" },
      { text: "Update communication status to In a Call" },
      { text: "Soften ambient notification volume" },
    ],
    status: "Clean steady emerald glow",
  },
  {
    id: "break",
    name: "Break",
    color: "#FBBC04",
    tagline: "Protect recovery with the same intention you protect focus.",
    desc: "A real break should not become five minutes of checking Slack, email, and task boards. Break mode temporarily quiets your work environment so recovery remains separate from work.",
    actions: [
      { text: "Hide work applications and code editors" },
      { text: "Mute work alerts and incoming emails" },
      { text: "Pause active focus countdown timers" },
      { text: "Initiate recovery session countdown" },
      { text: "Restore active state upon totem return" },
    ],
    status: "Soft ambient amber glow",
  },
];

export default function FeaturesPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [activeModeIdx, setActiveModeIdx] = useState(0);

  const currentMode = MODES_DATA[activeModeIdx];

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-28 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* 1. HERO SECTION (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-5 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Feature Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#1D1D1F]">
            One physical move.<br />Deliberate digital clarity.
          </h1>

          <p className="text-[#6E6E73] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Place the weighted magnetic totem into position. Nexus reads the physical mode and enforces your workspace profile — closing distractions, launching tools, and establishing clear boundaries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#interactive-modes"
              className="px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white font-medium text-sm hover:bg-[#000000] transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore the Modes</span>
              <ChevronRight size={14} />
            </a>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3.5 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EAEAEA] text-sm font-medium transition-all cursor-pointer"
            >
              Join Early Access
            </button>
          </div>
        </motion.div>

        {/* Overview Badges (Expanded Across Page Container) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
          {[
            { t: "4 Physical Positions", d: "Deep Work · Creative · Meeting · Break" },
            { t: "Local-First Architecture", d: "Automation profiles execute directly on your host machine." },
            { t: "Configurable Profiles", d: "Define which tools, filters, and timers each mode controls." },
            { t: "Screen-Free Feedback", d: "Glanceable ambient glow without another demanding display." },
          ].map((item) => (
            <div key={item.t} className="p-6 md:p-7 border border-[#E5E5E7] bg-[#F8F9FA] rounded-3xl shadow-xs">
              <h4 className="text-[#1D1D1F] font-bold text-sm mb-1">{item.t}</h4>
              <p className="text-xs text-[#6E6E73] leading-relaxed font-light">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. INTERACTIVE MODE DEMONSTRATION (PAGE CONTAINER 1440PX) */}
      <section id="interactive-modes" className="relative page-container mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 3D Canvas with overlay (7 cols) */}
          <div className="lg:col-span-7 h-[540px] sm:h-[620px] rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] relative overflow-hidden flex flex-col justify-end p-6 shadow-sm">
            <div className="absolute top-6 left-6 z-20 text-[10px] font-mono text-[#6E6E73] tracking-widest uppercase bg-[#FFFFFF]/90 px-3.5 py-1.5 rounded-full border border-[#E5E5E7] backdrop-blur-md shadow-xs">
              Interactive 3D Hardware Model
            </div>
            <div className="absolute inset-0 z-10">
              <ExplodedRingCanvas disableExplode={true} centerPosition={true} />
            </div>

            {/* Mode selection buttons overlay */}
            <div className="relative z-20 flex gap-2 justify-center w-full bg-[#FFFFFF]/90 backdrop-blur-md p-2.5 rounded-2xl border border-[#E5E5E7] shadow-sm">
              {MODES_DATA.map((mode, idx) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveModeIdx(idx)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeModeIdx === idx
                      ? "bg-[#1D1D1F] text-white shadow-sm"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  {mode.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mode Details Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMode.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 md:p-10 rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] relative overflow-hidden shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentMode.color }} />
                  <span className="font-mono text-xs tracking-widest uppercase text-[#1D1D1F] font-bold">
                    {currentMode.name} Active
                  </span>
                  <span className="text-[10px] font-mono text-[#86868B] ml-auto">
                    {currentMode.status}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-bold text-[#1D1D1F] mb-2">{currentMode.name}</h3>
                <p className="text-sm text-[#6E6E73] mb-6 font-light">{currentMode.tagline}</p>

                <div className="space-y-3 text-xs sm:text-sm text-[#1D1D1F]">
                  {currentMode.actions.map((action, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#E5E5E7] bg-[#F8F9FA]"
                    >
                      <CheckCircle2 size={16} style={{ color: currentMode.color }} className="shrink-0" />
                      <span>{action.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E5E7] flex items-center gap-2 text-xs text-[#86868B]">
                  <Info size={14} className="text-[#C93E50] shrink-0" />
                  <span>Configurable profile actions in active companion development.</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2.5 REAL SOFTWARE INTERFACES */}
      <section className="relative page-container mb-28">
        <div className="text-center mb-12 space-y-3">
          <span className="eyebrow block">Software Interface Preview</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1D1D1F]">
            The screen behind the physical dock.
          </h2>
          <p className="text-[#6E6E73] text-base sm:text-lg font-light max-w-2xl mx-auto">
            High-resolution native desktop interfaces coordinating mode transitions, app execution, and distraction suppression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Focus Modes Configurator */}
          <div className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E5E7] bg-[#F8F9FA]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[11px] text-[#6E6E73]">
                    Focus Modes &amp; Profile Setup
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#C93E50] font-semibold bg-[#FDF2F4] px-2 py-0.5 rounded-full border border-[#C93E50]/20">
                  SLOT ASSIGNMENT
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] w-full bg-[#0E1015]">
                <Image
                  src="/screenshots/05_focus_modes.png"
                  alt="Nexus Companion Focus Modes Configuration Screenshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-2">
                <h4 className="text-xl font-display font-bold text-[#1D1D1F]">
                  Granular Mode Customization
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-light leading-relaxed">
                  Configure custom applications, terminal scripts, and website suppression for Deep Work, Creative, Meeting, and Break.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#E5E5E7] bg-[#F8F9FA] flex items-center justify-between">
              <span className="text-xs font-mono text-[#6E6E73]">Ultradian Cycle Pacing</span>
              <Link
                href="/software#interface-tour"
                className="text-xs font-medium text-[#C93E50] hover:underline flex items-center gap-1"
              >
                <span>View Full Screen</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: Nexus Shield */}
          <div className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E5E7] bg-[#F8F9FA]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[11px] text-[#6E6E73]">
                    Nexus Shield — Local Host Blocker
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#34A853] font-semibold bg-[#34A853]/10 px-2 py-0.5 rounded-full border border-[#34A853]/20">
                  ZERO CLOUD LEAKS
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] w-full bg-[#0E1015]">
                <Image
                  src="/screenshots/06_nexus_shield.png"
                  alt="Nexus Shield Website Suppression Screenshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-2">
                <h4 className="text-xl font-display font-bold text-[#1D1D1F]">
                  Local Distraction Suppression
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-light leading-relaxed">
                  Suppress algorithmic social loops, endless video feeds, and notifications locally without sending your private browsing history to external servers.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#E5E5E7] bg-[#F8F9FA] flex items-center justify-between">
              <span className="text-xs font-mono text-[#6E6E73]">Host-Level Enforcement</span>
              <Link
                href="/software#interface-tour"
                className="text-xs font-medium text-[#C93E50] hover:underline flex items-center gap-1"
              >
                <span>View Full Screen</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/software#interface-tour"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium text-sm bg-[#1D1D1F] text-white hover:bg-[#000000] transition-colors shadow-sm"
          >
            <span>Explore All 8 Desktop Interfaces</span>
            <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* 3. PLATFORM ECOSYSTEM (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container mb-28">
        <div className="text-center mb-12 space-y-2">
          <span className="eyebrow block">Target Environments</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1D1D1F]">
            Ecosystem Vision.
          </h2>
          <p className="text-sm text-[#6E6E73] font-light max-w-xl mx-auto">
            Nexus begins at your desk with direct desktop operating system integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-8 md:p-10 rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] space-y-3 shadow-xs">
            <Monitor className="text-[#C93E50] mb-2" size={32} />
            <h4 className="text-xl font-bold text-[#1D1D1F]">Desktop (Core)</h4>
            <span className="text-[10px] font-mono bg-[#FDF2F4] text-[#C93E50] px-3 py-1 rounded-full border border-[#C93E50]/20 inline-block font-semibold">
              Primary Platform
            </span>
            <p className="text-xs text-[#6E6E73] leading-relaxed pt-1 font-light">
              Windows, macOS, and Linux support. Manages local apps, website filters, notifications, timers, and shell scripts.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] space-y-3 shadow-xs">
            <Smartphone className="text-[#6E6E73] mb-2" size={32} />
            <h4 className="text-xl font-bold text-[#1D1D1F]">Mobile Companion</h4>
            <span className="text-[10px] font-mono bg-[#F5F5F7] text-[#6E6E73] px-3 py-1 rounded-full border border-[#E5E5E7] inline-block font-semibold">
              Planned
            </span>
            <p className="text-xs text-[#6E6E73] leading-relaxed pt-1 font-light">
              Potential state sync for mobile Focus modes and notification rules via supported iOS/Android system APIs.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] space-y-3 shadow-xs">
            <HomeIcon className="text-[#6E6E73] mb-2" size={32} />
            <h4 className="text-xl font-bold text-[#1D1D1F]">Workspace IoT</h4>
            <span className="text-[10px] font-mono bg-[#F5F5F7] text-[#6E6E73] px-3 py-1 rounded-full border border-[#E5E5E7] inline-block font-semibold">
              Planned
            </span>
            <p className="text-xs text-[#6E6E73] leading-relaxed pt-1 font-light">
              Future webhook integration for smart desk lighting, Home Assistant routines, and external hardware status indicators.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container text-center bg-[#F5F5F7] border border-[#E5E5E7] p-12 md:p-20 rounded-3xl shadow-xs">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1D1D1F] mb-4 tracking-tight">
          Your attention deserves an off-switch.
        </h2>
        <p className="text-[#6E6E73] text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Deep work shouldn&apos;t begin with fighting distractions. A break shouldn&apos;t be interrupted by work notifications. Nexus Ring turns those boundaries into something physical.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white font-medium text-sm hover:bg-[#000000] transition-all shadow-sm cursor-pointer"
          >
            Join the Waitlist
          </button>
          <Link
            href="/hardware"
            className="px-8 py-3.5 rounded-full border border-[#E5E5E7] bg-[#FFFFFF] text-[#1D1D1F] hover:bg-[#EAEAEA] transition-all text-sm font-medium"
          >
            Explore Hardware Details
          </Link>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
