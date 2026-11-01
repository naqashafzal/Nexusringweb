"use client";

import React, { useState } from "react";
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
    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#A5AFBD] gap-2">
      <RefreshCw size={20} className="animate-spin text-[#D83A50]" />
      <span>INITIALIZING 3D CAD MODEL...</span>
    </div>
  ),
});

const MODES_DATA = [
  {
    id: "deep_work",
    name: "Deep Work",
    color: "#D83A50",
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
    color: "#F5F6F8",
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
    color: "#35C98A",
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
    color: "#F0B35A",
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
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D83A50]" />
            Feature Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            ONE PHYSICAL MOVE.<br />
            <span className="text-[#A5AFBD]">DELIBERATE DIGITAL CLARITY.</span>
          </h1>

          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Place the weighted magnetic totem into position. Nexus reads the physical mode and enforces your workspace profile—closing distractions, launching tools, and establishing clear boundaries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#interactive-modes"
              className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2"
            >
              Explore the Modes <ChevronRight size={16} />
            </a>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#11151C] text-white hover:border-[#D83A50] font-mono text-xs tracking-wider transition-all cursor-pointer"
            >
              Join Early Access
            </button>
          </div>
        </motion.div>

        {/* Overview Badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 text-left max-w-4xl mx-auto">
          {[
            { t: "4 Physical Positions", d: "Deep Work · Creative · Meeting · Break" },
            { t: "Local-First Architecture", d: "Automation profiles execute directly on your host machine." },
            { t: "Configurable Profiles", d: "Define which tools, filters, and timers each mode controls." },
            { t: "Screen-Free Feedback", d: "Glanceable ambient glow without another demanding display." },
          ].map((item) => (
            <div key={item.t} className="p-5 border border-[#303A48] bg-[#11151C] rounded-2xl">
              <h4 className="text-white font-bold text-sm mb-1">{item.t}</h4>
              <p className="text-xs text-[#A5AFBD] leading-relaxed font-light">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. INTERACTIVE MODE DEMONSTRATION */}
      <section id="interactive-modes" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 3D Canvas with overlay */}
          <div className="h-[520px] rounded-3xl border border-[#303A48] bg-[#11151C] relative overflow-hidden flex flex-col justify-end p-6">
            <div className="absolute top-6 left-6 z-20 text-[10px] font-mono text-[#A5AFBD] tracking-widest uppercase bg-[#080A0E]/80 px-3 py-1.5 rounded-full border border-[#303A48]">
              Interactive 3D Hardware Model
            </div>
            <div className="absolute inset-0 z-10">
              <ExplodedRingCanvas disableExplode={true} centerPosition={true} />
            </div>

            {/* Mode selection buttons overlay */}
            <div className="relative z-20 flex gap-2 justify-center w-full bg-[#080A0E]/90 backdrop-blur-md p-2 rounded-2xl border border-[#303A48]">
              {MODES_DATA.map((mode, idx) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveModeIdx(idx)}
                  className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${activeModeIdx === idx
                      ? "bg-white text-black shadow-lg"
                      : "text-[#A5AFBD] hover:text-white"
                    }`}
                >
                  {mode.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mode Details Panel */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMode.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-3xl border border-[#303A48] bg-[#11151C] relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentMode.color }} />
                  <span className="font-mono text-xs tracking-widest uppercase text-white font-bold">
                    {currentMode.name} Active
                  </span>
                  <span className="text-[10px] font-mono text-[#A5AFBD] ml-auto">
                    {currentMode.status}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">{currentMode.name}</h3>
                <p className="text-sm text-[#A5AFBD] mb-6 font-light">{currentMode.tagline}</p>

                <div className="space-y-2.5 font-mono text-xs">
                  {currentMode.actions.map((action, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#303A48] bg-[#080A0E] text-[#F5F6F8]"
                    >
                      <CheckCircle2 size={15} style={{ color: currentMode.color }} />
                      <span>{action.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#303A48] flex items-center gap-2 text-xs text-[#A5AFBD]">
                  <Info size={14} className="text-[#D83A50] shrink-0" />
                  <span>Configurable profile actions in active companion development.</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM ECOSYSTEM */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-12 space-y-2">
          <span className="eyebrow block">Target Environments</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Ecosystem Vision.
          </h2>
          <p className="text-xs sm:text-sm text-[#A5AFBD]">
            Nexus begins at your desk with direct desktop operating system integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2">
            <Monitor className="text-[#D83A50] mb-3" size={28} />
            <h4 className="text-lg font-bold text-white">Desktop (Core)</h4>
            <span className="text-[10px] font-mono bg-[#D83A50]/10 text-[#D83A50] px-2 py-0.5 rounded border border-[#D83A50]/30 inline-block">
              Primary Platform
            </span>
            <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2">
              Windows, macOS, and Linux support. Manages local apps, website filters, notifications, timers, and shell scripts.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2">
            <Smartphone className="text-[#A5AFBD] mb-3" size={28} />
            <h4 className="text-lg font-bold text-white">Mobile Companion</h4>
            <span className="text-[10px] font-mono bg-[#1B222D] text-[#A5AFBD] px-2 py-0.5 rounded border border-[#303A48] inline-block">
              Planned
            </span>
            <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2">
              Potential state sync for mobile Focus modes and notification rules via supported iOS/Android system APIs.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2">
            <HomeIcon className="text-[#A5AFBD] mb-3" size={28} />
            <h4 className="text-lg font-bold text-white">Workspace IoT</h4>
            <span className="text-[10px] font-mono bg-[#1B222D] text-[#A5AFBD] px-2 py-0.5 rounded border border-[#303A48] inline-block">
              Planned
            </span>
            <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2">
              Future webhook integration for smart desk lighting, Home Assistant routines, and external hardware status indicators.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#11151C] border border-[#303A48] p-12 md:p-20 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase tracking-tight">
          Your attention deserves an off-switch.
        </h2>
        <p className="text-[#A5AFBD] text-sm md:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Deep work shouldn&apos;t begin with fighting distractions. A break shouldn&apos;t be interrupted by work notifications. Nexus Ring turns those boundaries into something physical.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] cursor-pointer"
          >
            Join the Waitlist
          </button>
          <Link
            href="/hardware"
            className="px-8 py-4 rounded-xl border border-[#303A48] text-white hover:border-[#D83A50] transition-all font-mono text-sm"
          >
            Explore Hardware Details
          </Link>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
