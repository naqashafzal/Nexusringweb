"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  MicOff,
  Sparkles,
  Coffee,
  CheckCircle2,
  Lock,
  Pause,
  Play,
  SlidersHorizontal,
  LucideIcon,
  Info,
} from "lucide-react";

interface ModeDetail {
  id: string;
  slot: string;
  name: string;
  tagline: string;
  accent: string;
  glow: string;
  border: string;
  bg: string;
  icon: LucideIcon;
  angle: number;
  specs: { label: string; value: string }[];
  actions: { text: string; category: string; active: boolean; status: "Validated" | "Preview" | "Planned" }[];
  osData: {
    title: string;
    statusBadge: string;
    logMessage: string;
    blockedDomains?: string[];
    activeApps?: string[];
    volumeLevel?: string;
    timerDefault?: number;
    equalizer?: boolean;
  };
}

const MODES_DATA: ModeDetail[] = [
  {
    id: "deep-work",
    slot: "SLOT 01",
    name: "Deep Work",
    tagline: "Designed for distraction-free concentration.",
    accent: "#D83A50",
    glow: "rgba(216,58,80,0.15)",
    border: "rgba(216,58,80,0.3)",
    bg: "rgba(216,58,80,0.04)",
    icon: ShieldAlert,
    angle: 0,
    specs: [
      { label: "Notification Gate", value: "Do Not Disturb" },
      { label: "Website Filter", value: "Selected Sites Blocked" },
      { label: "Focus Session", value: "Optional 90m Timer" },
      { label: "State Indication", value: "Subtle Crimson Glow" },
    ],
    actions: [
      { text: "Blocks distracting social and news sites", category: "Network", active: true, status: "Validated" },
      { text: "Enables OS-level Do Not Disturb", category: "OS Control", active: true, status: "Validated" },
      { text: "Launches primary workspace (VS Code / Terminal)", category: "App Launch", active: true, status: "Preview" },
      { text: "Starts a focus session timer", category: "Timer", active: true, status: "Preview" },
    ],
    osData: {
      title: "DEEP WORK AUTOMATION PROFILE",
      statusBadge: "DEVELOPMENT PREVIEW",
      logMessage: "Totem Position 01 detected | Do Not Disturb enabled | Network filters applied",
      blockedDomains: ["x.com", "reddit.com", "youtube.com", "instagram.com"],
      activeApps: ["VS Code", "Warp Terminal"],
    },
  },
  {
    id: "creative",
    slot: "SLOT 02",
    name: "Creative Mode",
    tagline: "Prepare a workspace for designing, exploring, and building.",
    accent: "#F5F6F8",
    glow: "rgba(245,246,248,0.12)",
    border: "rgba(245,246,248,0.2)",
    bg: "rgba(245,246,248,0.03)",
    icon: Sparkles,
    angle: 90,
    specs: [
      { label: "Workspace Tools", value: "Design / CAD Apps" },
      { label: "Filter State", value: "Selective Research" },
      { label: "Audio Profile", value: "Creative Presets" },
      { label: "State Indication", value: "Soft White Ambient" },
    ],
    actions: [
      { text: "Launches design applications (Figma / Blender)", category: "Apps", active: true, status: "Preview" },
      { text: "Allows research & reference platforms", category: "Network", active: true, status: "Validated" },
      { text: "Filters feed distractions without blocking assets", category: "Filters", active: true, status: "Preview" },
      { text: "Opens active project directories", category: "Workspace", active: true, status: "Planned" },
    ],
    osData: {
      title: "CREATIVE PIPELINE PROFILE",
      statusBadge: "DEVELOPMENT PREVIEW",
      logMessage: "Totem Position 02 detected | Design workspace prepared | Research access active",
      equalizer: true,
      activeApps: ["Figma", "PureRef", "Blender 3D"],
    },
  },
  {
    id: "meeting",
    slot: "SLOT 03",
    name: "Meeting Mode",
    tagline: "Switch into a communication-focused setup.",
    accent: "#35C98A",
    glow: "rgba(53,201,138,0.15)",
    border: "rgba(53,201,138,0.3)",
    bg: "rgba(53,201,138,0.04)",
    icon: MicOff,
    angle: 180,
    specs: [
      { label: "Meeting Apps", value: "Zoom / Meet / Teams" },
      { label: "Background Audio", value: "Auto-Pause Media" },
      { label: "Status Alert", value: "Busy / In a Call" },
      { label: "State Indication", value: "Calm Green Glow" },
    ],
    actions: [
      { text: "Opens preferred meeting software", category: "App Launch", active: true, status: "Preview" },
      { text: "Pauses active background audio and playback", category: "Audio", active: true, status: "Validated" },
      { text: "Updates team status to In a Call", category: "Status", active: true, status: "Planned" },
      { text: "Opens meeting agenda or note templates", category: "Workspace", active: true, status: "Preview" },
    ],
    osData: {
      title: "MEETING PREPARATION PROFILE",
      statusBadge: "DEVELOPMENT PREVIEW",
      logMessage: "Totem Position 03 detected | Background media paused | Meeting notes ready",
      volumeLevel: "Media Paused",
      activeApps: ["Zoom Video", "Notion Meeting Notes"],
    },
  },
  {
    id: "break",
    slot: "SLOT 04",
    name: "Break Mode",
    tagline: "Create a deliberate boundary between work and recovery.",
    accent: "#F0B35A",
    glow: "rgba(240,179,90,0.15)",
    border: "rgba(240,179,90,0.3)",
    bg: "rgba(240,179,90,0.04)",
    icon: Coffee,
    angle: 270,
    specs: [
      { label: "Work Windows", value: "Temporarily Hidden" },
      { label: "Work Alerts", value: "Silenced" },
      { label: "Recovery Timer", value: "15m Break Period" },
      { label: "State Indication", value: "Warm Amber Glow" },
    ],
    actions: [
      { text: "Minimizes work applications and code editors", category: "Apps", active: true, status: "Validated" },
      { text: "Silences work alerts, emails, and channels", category: "OS Control", active: true, status: "Validated" },
      { text: "Initiates a dedicated recovery countdown", category: "Timer", active: true, status: "Preview" },
      { text: "Restores previous state upon totem return", category: "Workflow", active: true, status: "Planned" },
    ],
    osData: {
      title: "RECOVERY BOUNDARY PROFILE",
      statusBadge: "DEVELOPMENT PREVIEW",
      logMessage: "Totem Position 04 detected | Work notifications silenced | Break timer active",
      timerDefault: 900,
    },
  },
];

export default function HardwareModesShowcase() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [activeActions, setActiveActions] = useState<{ [key: string]: boolean }>({});
  const [timerSeconds, setTimerSeconds] = useState(900);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const currentMode = MODES_DATA[activeModeIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleAction = (text: string) => {
    setActiveActions((prev) => ({
      ...prev,
      [text]: prev[text] === undefined ? false : !prev[text],
    }));
  };

  const isActionActive = (text: string) => {
    return activeActions[text] === undefined ? true : activeActions[text];
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full">
      {/* ── 4 Mode Selection Tabs ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {MODES_DATA.map((mode, idx) => {
          const isActive = activeModeIndex === idx;
          const ModeIcon = mode.icon;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveModeIndex(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-150 relative overflow-hidden cursor-pointer ${
                isActive
                  ? "border-[#D83A50] bg-[#1B222D] shadow-lg"
                  : "border-[#303A48] bg-[#11151C] hover:border-[#A5AFBD]"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#778292] uppercase">
                  {mode.slot}
                </span>
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: isActive ? mode.accent + "20" : "#080A0E",
                    color: isActive ? mode.accent : "#A5AFBD",
                  }}
                >
                  <ModeIcon size={16} />
                </div>
              </div>
              <h3 className="font-display font-bold text-base text-[#F5F6F8] mb-1">{mode.name}</h3>
              <p className="text-xs text-[#A5AFBD] font-light line-clamp-2">{mode.tagline}</p>
            </button>
          );
        })}
      </div>

      {/* ── Active Mode Dashboard & Simulation ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-[#303A48] bg-[#11151C] p-6 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Mode Concept & Hardware Spec (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#303A48] bg-[#080A0E] text-[10px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentMode.accent }} />
                  <span style={{ color: currentMode.accent }}>{currentMode.slot} Active</span>
                </div>
                <h3 className="text-3xl font-display font-black text-[#F5F6F8]">{currentMode.name}</h3>
                <p className="text-sm text-[#A5AFBD] font-light leading-relaxed">{currentMode.tagline}</p>
              </div>

              {/* Hardware Parameters */}
              <div className="p-5 rounded-2xl border border-[#303A48] bg-[#080A0E] space-y-3">
                <span className="text-[10px] font-mono text-[#778292] uppercase tracking-widest block">
                  Configuration Targets
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {currentMode.specs.map((s) => (
                    <div key={s.label} className="space-y-0.5">
                      <p className="text-[10px] font-mono text-[#778292]">{s.label}</p>
                      <p className="text-xs font-semibold text-[#F5F6F8]">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#303A48] bg-[#1B222D] text-xs text-[#A5AFBD] flex items-start gap-2.5">
                <Info size={16} className="text-[#D83A50] shrink-0 mt-0.5" />
                <span>
                  Actions labeled <strong>Validated</strong> represent confirmed prototype capabilities. Features labeled <strong>Preview</strong> or <strong>Planned</strong> are currently undergoing testing in Nexus Companion.
                </span>
              </div>
            </div>

            {/* Right Column: Simulated OS Companion Response (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="rounded-2xl border border-[#303A48] bg-[#080A0E] p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#303A48] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-xs font-mono font-bold text-[#F5F6F8] ml-2">
                      {currentMode.osData.title}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#303A48] bg-[#1B222D] text-[#A5AFBD]">
                    {currentMode.osData.statusBadge}
                  </span>
                </div>

                <p className="text-xs font-mono text-[#A5AFBD] border-l-2 border-[#D83A50] pl-3 py-0.5">
                  {currentMode.osData.logMessage}
                </p>

                {/* Simulated Mode Specific Visuals */}
                {currentMode.osData.blockedDomains && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono text-[#778292] uppercase tracking-wider block">
                      Configured Domain Filters (Simulation)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentMode.osData.blockedDomains.map((dom) => (
                        <span
                          key={dom}
                          className="px-2.5 py-1 rounded-lg border border-[#303A48] bg-[#11151C] text-[#A5AFBD] font-mono text-xs flex items-center gap-1.5"
                        >
                          <Lock size={11} className="text-[#D83A50]" />
                          <span>{dom}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentMode.id === "break" && (
                  <div className="p-4 rounded-xl border border-[#303A48] bg-[#11151C] flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#778292] uppercase tracking-widest font-mono mb-0.5">
                        Recovery Session Timer
                      </p>
                      <p className="text-2xl font-display font-bold text-[#F5F6F8] tracking-wider">
                        {formatTimer(timerSeconds)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="px-4 py-2 rounded-xl border border-[#303A48] bg-[#1B222D] text-[#F5F6F8] text-xs font-mono font-semibold flex items-center gap-2 hover:border-[#D83A50] transition-colors cursor-pointer"
                    >
                      {isTimerRunning ? <Pause size={13} /> : <Play size={13} />}
                      {isTimerRunning ? "PAUSE" : "START"}
                    </button>
                  </div>
                )}

                {currentMode.osData.activeApps && (
                  <div className="pt-2 border-t border-[#303A48]">
                    <span className="text-[10px] font-mono text-[#778292] uppercase tracking-wider block mb-2">
                      Target Workspace Applications:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentMode.osData.activeApps.map((app) => (
                        <span
                          key={app}
                          className="px-2.5 py-1 rounded-lg border border-[#303A48] bg-[#1B222D] text-[#F5F6F8] text-xs font-mono"
                        >
                          ✓ {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Webhook Toggles */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#A5AFBD] uppercase tracking-wider flex items-center gap-1.5">
                  <SlidersHorizontal size={12} className="text-[#D83A50]" />
                  <span>Configurable Profile Hooks (Click to toggle):</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentMode.actions.map((act) => {
                    const active = isActionActive(act.text);
                    return (
                      <button
                        key={act.text}
                        type="button"
                        onClick={() => toggleAction(act.text)}
                        className={`p-3 rounded-xl border text-left transition-all duration-150 flex items-start justify-between gap-3 cursor-pointer ${
                          active
                            ? "border-[#303A48] bg-[#080A0E] hover:border-[#D83A50]/50"
                            : "border-[#303A48]/50 bg-[#080A0E]/50 opacity-60"
                        }`}
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded border border-[#303A48] bg-[#11151C] text-[#A5AFBD]">
                              {act.category}
                            </span>
                            <span className="text-[9px] font-mono text-[#778292]">
                              {act.status}
                            </span>
                          </div>
                          <p className="text-xs text-[#F5F6F8] leading-snug">{act.text}</p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            active
                              ? "border-[#D83A50] bg-[#D83A50] text-white"
                              : "border-[#303A48] bg-transparent text-transparent"
                          }`}
                        >
                          {active && <CheckCircle2 size={12} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
