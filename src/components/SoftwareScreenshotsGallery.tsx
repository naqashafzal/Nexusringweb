"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Sliders,
  Cpu,
  BarChart3,
  Flame,
  Laptop,
  LucideIcon,
} from "lucide-react";

export interface ScreenshotItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  src: string;
  description: string;
  keyFeatures: string[];
  icon: LucideIcon;
}

export const SCREENSHOTS_DATA: ScreenshotItem[] = [
  {
    id: "dashboard-deepwork",
    title: "Deep Work Command Center",
    badge: "Primary Controller",
    category: "Active Workspace",
    src: "/screenshots/02_dashboard_deepwork.png",
    icon: Flame,
    description:
      "Real-time companion dashboard active when the physical magnetic totem is seated in Slot 01. Displays the live focus countdown, active desktop applications, and glances at current distraction suppression state.",
    keyFeatures: [
      "Live session countdown synced with hardware LED glow ring",
      "Automatic app orchestration: VS Code, Warp Terminal, and local tools",
      "Host-level distraction suppression with zero cloud telemetry",
    ],
  },
  {
    id: "nexus-flow",
    title: "Nexus Flow Mission Matrix",
    badge: "Intelligent Scheduler",
    category: "Automation Pipeline",
    src: "/screenshots/04_nexus_flow.png",
    icon: Layers,
    description:
      "Visual orchestration canvas mapping every physical totem orientation to a deterministic workspace environment. Define exact apps, terminal scripts, browser tabs, and Spotify focus playlists per quadrant.",
    keyFeatures: [
      "Quadrant-specific app and shell script trigger sequencing",
      "Zero-latency profile switching executed locally via Rust core",
      "Automatic multi-monitor window placement and workspace tiling",
    ],
  },
  {
    id: "focus-modes",
    title: "Quadrant Mode Configurator",
    badge: "Hardware Binding",
    category: "Profile Manager",
    src: "/screenshots/05_focus_modes.png",
    icon: Sliders,
    description:
      "Deep customization of the 4 hardware totem modes: Deep Work, Sync & Standup, Active Recovery, and Strategic Planning. Customize LED ring color hexes, haptic pulse signatures, and timer durations.",
    keyFeatures: [
      "Hardware RGB pulse pattern & intensity calibration",
      "Custom audio chime synthesizer for session boundaries",
      "Profile import/export with standard JSON schemas",
    ],
  },
  {
    id: "nexus-shield",
    title: "Sentinel Host Firewall",
    badge: "Distraction Shield",
    category: "Security & Guardrails",
    src: "/screenshots/06_nexus_shield.png",
    icon: ShieldCheck,
    description:
      "Host-level process interception and domain blocking. When you rotate into Deep Work, social feeds, algorithmic video sites, and notification popups are physically cut off at the loopback driver level.",
    keyFeatures: [
      "Zero-overhead kernel loopback redirection (No heavy browser extensions)",
      "Emergency pass-through override with a deliberate 14-second physical hold",
      "Configurable whitelist for documentation, GitHub, and production logs",
    ],
  },
  {
    id: "daily-debrief",
    title: "Executive Analytics & Debrief",
    badge: "Telemetry Matrix",
    category: "Performance Review",
    src: "/screenshots/09_daily_debrief.png",
    icon: BarChart3,
    description:
      "Daily biometric and behavioral debrief summarizing actual uninterrupted focus blocks versus planned sessions. Compares your velocity across days and highlights distraction leak patterns.",
    keyFeatures: [
      "Accurate ratio of planned vs actual deep work execution",
      "Physical totem dock history timeline with millisecond precision",
      "Encrypted local SQLite storage with zero external tracking pixels",
    ],
  },
  {
    id: "settings-ai",
    title: "AI Co-Pilot & Local Models",
    badge: "Intelligence Engine",
    category: "Local LLM Hub",
    src: "/screenshots/07_settings_ai_models.png",
    icon: Cpu,
    description:
      "Configure your AI focus partner. Connect official Google Gemini 1.5 Pro / Flash APIs, OpenAI keys, or run entirely offline with local Ollama Llama 3 / DeepSeek instances.",
    keyFeatures: [
      "Native local model inference support for offline developer privacy",
      "OTA firmware manager for the ESP32-C3 hardware dock",
      "Custom shell scripts and OS shortcut hooks",
    ],
  },
  {
    id: "totem-primed",
    title: "Totem Primed & Ready State",
    badge: "Hardware Handshake",
    category: "Dock State",
    src: "/screenshots/03_dashboard_totem_primed.png",
    icon: Laptop,
    description:
      "Visual confirmation when the physical magnetic totem is lifted from the dock, priming the system and awaiting your deliberate placement into a designated focus slot.",
    keyFeatures: [
      "Instant Hall-effect sensor detection over high-speed USB-serial",
      "Visual dock orientation guide and slot assignment preview",
      "Smooth hardware-software state synchronization",
    ],
  },
  {
    id: "onboarding",
    title: "Onboarding & Calibration",
    badge: "First Boot",
    category: "Setup Experience",
    src: "/screenshots/11_onboarding_experience.png",
    icon: Sparkles,
    description:
      "Simple 3-minute guided pairing experience. Calibrates the 4 magnetic Hall-effect quadrant sensors, verifies USB communication, and guides you through setting up your first default profile.",
    keyFeatures: [
      "Automated USB hardware discovery and quadrant test",
      "Magnetic field threshold calibration wizard",
      "One-click starter profile templates for developers and designers",
    ],
  },
];

interface Props {
  initialIndex?: number;
  showAllThumbnails?: boolean;
}

export default function SoftwareScreenshotsGallery({
  initialIndex = 0,
  showAllThumbnails = true,
}: Props) {
  const [activeIdx, setActiveIdx] = useState(initialIndex);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeItem = SCREENSHOTS_DATA[activeIdx];

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev + 1) % SCREENSHOTS_DATA.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev - 1 + SCREENSHOTS_DATA.length) % SCREENSHOTS_DATA.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="w-full space-y-8">
      {/* ── Pill Tab Selector ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {SCREENSHOTS_DATA.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIdx;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer border shrink-0 ${
                isActive
                  ? "bg-[#D83A50] text-[#F5F6F8] border-[#D83A50] shadow-[0_0_15px_rgba(216,58,80,0.35)]"
                  : "bg-[#11151C] text-[#A5AFBD] border-[#303A48] hover:text-[#F5F6F8] hover:bg-[#1B222D]"
              }`}
            >
              <Icon size={14} className={isActive ? "text-[#F5F6F8]" : "text-[#778292]"} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* ── Desktop Window Frame Showcase ── */}
      <div className="rounded-3xl border border-[#303A48] bg-[#11151C] shadow-[0_12px_50px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Window Chrome Titlebar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#303A48] bg-[#080A0E]">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D83A50] border border-[#EB5268]/40" />
            <span className="w-3 h-3 rounded-full bg-[#F0B35A] border border-[#F0B35A]/40" />
            <span className="w-3 h-3 rounded-full bg-[#35C98A] border border-[#35C98A]/40" />
            <span className="ml-3 font-mono text-[11px] text-[#778292] hidden sm:inline">
              Nexus Companion v0.4.2 — {activeItem.title}
            </span>
          </div>

          {/* Right Status Badge & Fullscreen Trigger */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#35C98A]/10 text-[#35C98A] text-[10px] font-mono font-semibold border border-[#35C98A]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C98A] animate-pulse" />
              LOCAL ENGINE ACTIVE
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#303A48] bg-[#1B222D] hover:bg-[#303A48] text-[#F5F6F8] text-xs font-mono transition-colors cursor-pointer"
              title="View in full resolution (4K)"
            >
              <Maximize2 size={13} className="text-[#A5AFBD]" />
              <span className="hidden sm:inline">Expand 4K</span>
            </button>
          </div>
        </div>

        {/* Screenshot Viewport Container */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[16/9] w-full bg-[#080A0E] cursor-pointer group overflow-hidden"
        >
          <Image
            src={activeItem.src}
            alt={`Nexus Companion — ${activeItem.title}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1360px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-[#11151C]/90 text-white font-medium text-xs backdrop-blur-md flex items-center gap-2 shadow-lg border border-[#303A48]">
              <Maximize2 size={14} className="text-[#D83A50]" />
              <span>Click to view full 4K resolution</span>
            </span>
          </div>

          {/* Bottom Floating Mode Badge */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-[#080A0E]/85 backdrop-blur-md border border-[#303A48] text-[#F5F6F8] text-[11px] font-mono tracking-wider uppercase">
              {activeItem.category} · {activeItem.badge}
            </span>
          </div>
        </div>

        {/* ── Feature Description & Key Takeaways Panel ── */}
        <div className="p-6 sm:p-8 bg-[#11151C] border-t border-[#303A48] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#D83A50]/30 bg-[#D83A50]/10 text-[#D83A50] text-[10px] font-mono uppercase tracking-wider font-semibold">
              {activeItem.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F6F8]">
              {activeItem.title}
            </h3>
            <p className="text-sm text-[#A5AFBD] font-light leading-relaxed">
              {activeItem.description}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-2.5">
            <span className="text-[11px] font-mono text-[#778292] uppercase tracking-wider font-semibold block">
              Key Capabilities
            </span>
            <div className="space-y-2">
              {activeItem.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#080A0E] border border-[#303A48] text-xs text-[#F5F6F8]"
                >
                  <CheckCircle2 size={16} className="text-[#35C98A] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Thumbnail Strip Selector ── */}
      {showAllThumbnails && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-[#A5AFBD]">
            <span className="font-mono uppercase tracking-wider text-[11px] font-semibold">
              All 8 Software Interfaces ({activeIdx + 1} of {SCREENSHOTS_DATA.length})
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev - 1 + SCREENSHOTS_DATA.length) % SCREENSHOTS_DATA.length)
                }
                className="p-1.5 rounded-lg border border-[#303A48] bg-[#11151C] hover:bg-[#1B222D] text-[#F5F6F8] transition-colors cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev + 1) % SCREENSHOTS_DATA.length)}
                className="p-1.5 rounded-lg border border-[#303A48] bg-[#11151C] hover:bg-[#1B222D] text-[#F5F6F8] transition-colors cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {SCREENSHOTS_DATA.map((item, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer group text-left ${
                    isSelected
                      ? "border-[#D83A50] shadow-[0_0_12px_rgba(216,58,80,0.4)] scale-[1.02]"
                      : "border-[#303A48] opacity-70 hover:opacity-100 hover:border-[#A5AFBD]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="180px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-2">
                    <span className="text-[10px] text-[#F5F6F8] font-mono line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Lightbox Modal for 4K Detail Inspection ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-[250] flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-8">
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between text-white z-20 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D83A50]" />
                <span className="text-sm font-semibold tracking-tight font-display">
                  {activeItem.title}
                </span>
                <span className="text-xs font-mono text-[#778292] hidden sm:inline">
                  — 4K Native Resolution ({activeIdx + 1} / {SCREENSHOTS_DATA.length})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx((prev) => (prev - 1 + SCREENSHOTS_DATA.length) % SCREENSHOTS_DATA.length)
                  }
                  className="p-2 rounded-full bg-[#11151C] hover:bg-[#1B222D] border border-[#303A48] text-white transition-colors cursor-pointer"
                  title="Previous image (Left Arrow)"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % SCREENSHOTS_DATA.length)}
                  className="p-2 rounded-full bg-[#11151C] hover:bg-[#1B222D] border border-[#303A48] text-white transition-colors cursor-pointer"
                  title="Next image (Right Arrow)"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-full bg-[#11151C] hover:bg-[#D83A50] border border-[#303A48] text-white transition-colors cursor-pointer ml-2"
                  title="Close lightbox (Escape)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Lightbox Image Viewport */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative flex-1 w-full max-h-[82vh] my-auto flex items-center justify-center overflow-hidden rounded-2xl border border-[#303A48]"
            >
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Lightbox Footer Caption */}
            <div className="pt-4 text-center text-xs text-[#778292] font-mono z-20 flex items-center justify-between">
              <span>{activeItem.badge} · {activeItem.category}</span>
              <span className="hidden sm:inline">Press Esc to exit · Arrow keys to navigate</span>
              <span className="text-[#F5F6F8]">{activeItem.title}</span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
