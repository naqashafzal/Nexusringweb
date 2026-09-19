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
  Zap,
  Terminal,
  Pause,
  Play,
  Radio,
  SlidersHorizontal,
  LucideIcon,
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
  actions: { text: string; category: string; active: boolean }[];
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
    tagline: "Total distraction lockdown at the OS kernel level.",
    accent: "#00FF9D",
    glow: "rgba(0,255,157,0.35)",
    border: "rgba(0,255,157,0.35)",
    bg: "rgba(0,255,157,0.04)",
    icon: ShieldAlert,
    angle: 0,
    specs: [
      { label: "Trigger Latency", value: "24ms" },
      { label: "App Blocker", value: "Kernel Ring-0" },
      { label: "Magnetic Sensor", value: "N52 Hall Effect" },
      { label: "Slack Status", value: "Auto-Focused" },
    ],
    actions: [
      { text: "Blocks X, Reddit, Discord & news domains", category: "Network", active: true },
      { text: "Launches VS Code workspace & terminal", category: "Workspace", active: true },
      { text: "Enforces 90-minute focus session loop", category: "Timer", active: true },
      { text: "Silences all system notifications & badges", category: "OS Control", active: true },
    ],
    osData: {
      title: "FOCUS KERNEL LOCKDOWN",
      statusBadge: "ENFORCING",
      logMessage: "00:42:19 | Blocked 14 network distraction requests",
      blockedDomains: ["x.com", "discord.com", "reddit.com", "youtube.com"],
      activeApps: ["VS Code v1.92", "Warp Terminal", "Nexus Local AI"],
    },
  },
  {
    id: "meeting",
    slot: "SLOT 02",
    name: "Meeting Mode",
    tagline: "Hardware-enforced spatial privacy & instant mic isolation.",
    accent: "#00E5FF",
    glow: "rgba(0,229,255,0.35)",
    border: "rgba(0,229,255,0.35)",
    bg: "rgba(0,229,255,0.04)",
    icon: MicOff,
    angle: 90,
    specs: [
      { label: "Mute Speed", value: "<12ms Direct" },
      { label: "Audio Bus", value: "Hardware Mute" },
      { label: "Screen Sync", value: "Auto DND" },
      { label: "Noise Filter", value: "AI Spatial Mute" },
    ],
    actions: [
      { text: "Instant hardware microphone mute toggle", category: "Audio", active: true },
      { text: "Launches Zoom / Meet with screen clear", category: "App Launch", active: true },
      { text: "Glows solid cyan ring beam for ambient DND", category: "LED Beam", active: true },
      { text: "Suppresses popups & background alerts", category: "Privacy", active: true },
    ],
    osData: {
      title: "MEETING PRIVACY SUITE",
      statusBadge: "HARDWARE MUTED",
      logMessage: "Mic Bus disconnected | Encrypted 24-bit Spatial Passthrough",
      volumeLevel: "Muted (Hardware Switch)",
      activeApps: ["Zoom HD Workspace", "Notion Meeting Notes"],
    },
  },
  {
    id: "creative",
    slot: "SLOT 03",
    name: "Creative Mode",
    tagline: "Unrestricted high-speed flow with ambient audio spectrum.",
    accent: "#B026FF",
    glow: "rgba(176,38,255,0.35)",
    border: "rgba(176,38,255,0.35)",
    bg: "rgba(176,38,255,0.04)",
    icon: Sparkles,
    angle: 180,
    specs: [
      { label: "GPU Profile", value: "Performance" },
      { label: "Filter State", value: "Unrestricted" },
      { label: "Audio Stream", value: "Lo-Fi Spatial Wave" },
      { label: "Workspace", value: "Multi-Canvas" },
    ],
    actions: [
      { text: "Launches Figma, Spline 3D & Blender", category: "Suite", active: true },
      { text: "Lifts all network blocks for asset research", category: "Network", active: true },
      { text: "Streams high-bitrate generative synth audio", category: "Audio", active: true },
      { text: "Sets dynamic ambient ring aura light", category: "Lighting", active: true },
    ],
    osData: {
      title: "CREATIVE PIPELINE ACTIVE",
      statusBadge: "FULL PERFORMANCE",
      logMessage: "GPU Acceleration 100% | Generative Synth Synthesizer streaming",
      equalizer: true,
      activeApps: ["Figma Enterprise", "Spline 3D Editor", "Ableton Live"],
    },
  },
  {
    id: "break",
    slot: "SLOT 04",
    name: "Break Mode",
    tagline: "Tactile Pomodoro recovery. Stashed workspace state.",
    accent: "#FF9F1C",
    glow: "rgba(255,159,28,0.35)",
    border: "rgba(255,159,28,0.35)",
    bg: "rgba(255,159,28,0.04)",
    icon: Coffee,
    angle: 270,
    specs: [
      { label: "Recovery Timer", value: "15:00 Radial" },
      { label: "RAM Stash", value: "State Saved" },
      { label: "Display Dim", value: "Warm 3000K" },
      { label: "Haptic Pulse", value: "Subtle Chime" },
    ],
    actions: [
      { text: "Triggers 15-minute countdown pomodoro loop", category: "Timer", active: true },
      { text: "Safely stashes active tabs into RAM buffer", category: "OS Memory", active: true },
      { text: "Dims monitor color temperature to 3000K", category: "Display", active: true },
      { text: "Gentle tactile haptic pulses when break ends", category: "Haptics", active: true },
    ],
    osData: {
      title: "RECOVERY & POMODORO TIMER",
      statusBadge: "BREAK IN PROGRESS",
      logMessage: "RAM workspace stashed | Screen warmed to 3000K",
      timerDefault: 900, // 15 mins in seconds
      activeApps: ["Mindfulness Breath", "Casual Reading"],
    },
  },
];

export default function HardwareModesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [toggles, setToggles] = useState<Record<string, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState(900);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const currentMode = MODES_DATA[activeIdx];
  const ActiveIcon = currentMode.icon;

  // Timer simulation for Break Mode
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleAction = (text: string) => {
    setToggles((prev) => ({ ...prev, [text]: prev[text] !== undefined ? !prev[text] : false }));
  };

  const isActionActive = (text: string) => toggles[text] ?? true;

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full">
      {/* ── Mode Selector Bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {MODES_DATA.map((mode, i) => {
          const Icon = mode.icon;
          const isActive = activeIdx === i;
          return (
            <button
              key={mode.id}
              onClick={() => {
                setActiveIdx(i);
                if (mode.id === "break") {
                  setIsTimerRunning(true);
                } else {
                  setIsTimerRunning(false);
                }
              }}
              className="relative group p-4 rounded-2xl border text-left transition-all duration-300 overflow-hidden"
              style={{
                borderColor: isActive ? mode.border : "#151D2A",
                backgroundColor: isActive ? mode.bg : "#070A10",
                boxShadow: isActive ? `0 0 30px ${mode.glow}` : "none",
              }}
            >
              {/* Active ambient glow clip */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${mode.accent}, transparent 70%)`,
                  }}
                />
              )}

              <div className="flex items-center justify-between mb-3 relative z-10">
                <span
                  className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border"
                  style={{
                    color: isActive ? mode.accent : "#64748B",
                    borderColor: isActive ? mode.accent + "40" : "#151D2A",
                    backgroundColor: isActive ? mode.accent + "10" : "transparent",
                  }}
                >
                  {mode.slot}
                </span>
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? mode.accent : "#334155",
                    boxShadow: isActive ? `0 0 10px ${mode.accent}` : "none",
                  }}
                />
              </div>

              <div className="flex items-center gap-2.5 relative z-10">
                <Icon
                  size={18}
                  style={{ color: isActive ? mode.accent : "#64748B" }}
                  className="transition-colors duration-300"
                />
                <span
                  className="font-display font-bold text-sm sm:text-base tracking-tight"
                  style={{ color: isActive ? "#FFFFFF" : "#94A3B8" }}
                >
                  {mode.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Main Interactive Canvas & OS Simulation Split Panel ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMode.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border p-6 md:p-10 bg-[#070A10] relative overflow-hidden"
          style={{
            borderColor: currentMode.border,
            boxShadow: `0 0 65px ${currentMode.glow}`,
          }}
        >
          {/* Top subtle radial aura */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none rounded-full blur-[100px] opacity-15"
            style={{ backgroundColor: currentMode.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
            {/* ── LEFT: Hardware Dock & Dial Controller (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[11px] font-mono tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      color: currentMode.accent,
                      borderColor: currentMode.accent + "40",
                      backgroundColor: currentMode.accent + "15",
                    }}
                  >
                    Totem Dock Synced
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                    Hall Effect Active
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-display font-black tracking-tighter mb-3"
                  style={{ color: currentMode.accent }}
                >
                  {currentMode.name}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed font-light mb-6">
                  {currentMode.tagline}
                </p>

                {/* Interactive Rotating Hardware Ring Visualizer */}
                <div className="relative w-full aspect-square max-w-[260px] mx-auto my-4 flex items-center justify-center">
                  {/* Outer Orbit Ring */}
                  <div
                    className="absolute inset-0 rounded-full border border-dashed transition-colors duration-700"
                    style={{ borderColor: currentMode.accent + "40" }}
                  />

                  {/* Rotating Ring Rotor */}
                  <motion.div
                    className="absolute inset-4 rounded-full border-2 flex items-center justify-center transition-colors duration-500"
                    animate={{ rotate: currentMode.angle }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    style={{ borderColor: currentMode.accent + "80" }}
                  >
                    {/* Magnetic Notch Nodes (0, 90, 180, 270) */}
                    {[0, 90, 180, 270].map((deg, idx) => (
                      <div
                        key={deg}
                        className="absolute w-4 h-4 rounded-full border flex items-center justify-center bg-[#030508]"
                        style={{
                          transform: `rotate(${deg}deg) translate(95px) rotate(-${deg}deg)`,
                          borderColor: MODES_DATA[idx].accent,
                          boxShadow: currentMode.angle === deg ? `0 0 12px ${MODES_DATA[idx].accent}` : "none",
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: currentMode.angle === deg ? MODES_DATA[idx].accent : "#334155",
                          }}
                        />
                      </div>
                    ))}

                    {/* Active Totem Core Pin */}
                    <div
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-[#030508] shadow-2xl relative"
                      style={{
                        borderColor: currentMode.accent,
                        boxShadow: `0 0 30px ${currentMode.accent}`,
                      }}
                    >
                      <ActiveIcon size={24} style={{ color: currentMode.accent }} />
                    </div>
                  </motion.div>

                  {/* Center Magnetic Signal Pulse Waves */}
                  <div
                    className="absolute w-28 h-28 rounded-full pointer-events-none animate-ping opacity-15"
                    style={{ backgroundColor: currentMode.accent }}
                  />
                </div>
              </div>

              {/* Hardware Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-[#151D2A]">
                {currentMode.specs.map((s) => (
                  <div key={s.label} className="bg-[#030508] rounded-xl p-3 border border-[#151D2A]">
                    <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-xs font-mono font-semibold" style={{ color: currentMode.accent }}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Simulated Sci-Fi OS Terminal & Action Hooks (7 cols) ── */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Simulated Desktop Window UI */}
              <div className="rounded-2xl border border-[#151D2A] bg-[#030508] overflow-hidden flex flex-col shadow-2xl">
                {/* OS Window Title Bar */}
                <div className="px-4 py-3 bg-[#070A10] border-b border-[#151D2A] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                    <span className="text-[11px] font-mono text-[#64748B] ml-2 flex items-center gap-1.5">
                      <Terminal size={12} className="text-[#00FF9D]" />
                      nexus_kernel_v2.4 — {currentMode.osData.title}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                    style={{
                      color: currentMode.accent,
                      backgroundColor: currentMode.accent + "18",
                      border: `1px solid ${currentMode.accent}33`,
                    }}
                  >
                    {currentMode.osData.statusBadge}
                  </span>
                </div>

                {/* OS Dynamic Content Panel */}
                <div className="p-5 font-mono text-xs space-y-4">
                  {/* Status Banner */}
                  <div
                    className="p-3 rounded-xl border flex items-center gap-3"
                    style={{
                      borderColor: currentMode.accent + "25",
                      backgroundColor: currentMode.accent + "0a",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full animate-ping shrink-0"
                      style={{ backgroundColor: currentMode.accent }}
                    />
                    <span className="text-[#CBD5E1] font-mono text-[11px] truncate">
                      {currentMode.osData.logMessage}
                    </span>
                  </div>

                  {/* Mode-Specific Interactive Visuals */}
                  {/* 1. Deep Work Blocked Domains */}
                  {currentMode.osData.blockedDomains && (
                    <div className="space-y-2">
                      <p className="text-[10px] text-[#64748B] uppercase tracking-widest">
                        Kernel Network Firewalls (Live Enforced):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentMode.osData.blockedDomains.map((domain) => (
                          <span
                            key={domain}
                            className="px-2.5 py-1 rounded-lg border border-[#FF5F56]/30 bg-[#FF5F56]/10 text-[#FF5F56] text-[11px] flex items-center gap-1.5"
                          >
                            <Lock size={10} /> {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 2. Audio Mute Indicator */}
                  {currentMode.osData.volumeLevel && (
                    <div className="p-4 rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/[0.04] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                          <MicOff size={18} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-xs">Spatial Audio Gate</p>
                          <p className="text-[11px] text-[#64748B]">Hardware Micro-relays Open</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#00E5FF]/20 text-[#00E5FF] font-bold">
                        MUTED
                      </span>
                    </div>
                  )}

                  {/* 3. Creative Audio Equalizer */}
                  {currentMode.osData.equalizer && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#64748B] uppercase tracking-widest flex items-center gap-1.5">
                          <Radio size={12} className="text-[#B026FF]" /> Ambient Lo-Fi Generative Stream
                        </span>
                        <span className="text-[10px] text-[#B026FF]">96kHz / 24-bit</span>
                      </div>
                      <div className="h-10 rounded-xl bg-[#030508] border border-[#B026FF]/30 p-2 flex items-end gap-1 justify-between">
                        {[60, 45, 85, 30, 95, 70, 40, 90, 65, 80, 50, 75, 90, 40, 60, 85].map((h, i) => (
                          <motion.div
                            key={i}
                            className="w-full rounded-sm"
                            style={{ backgroundColor: "#B026FF" }}
                            animate={{ height: [`${h}%`, `${100 - h}%`, `${h}%`] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              delay: i * 0.08,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4. Break Pomodoro Timer */}
                  {currentMode.id === "break" && (
                    <div className="p-4 rounded-xl border border-[#FF9F1C]/30 bg-[#FF9F1C]/[0.04] flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-[#FF9F1C] uppercase tracking-widest font-mono mb-1">
                          Pomodoro Countdown
                        </p>
                        <p className="text-3xl font-display font-bold text-white tracking-wider">
                          {formatTimer(timerSeconds)}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className="px-4 py-2.5 rounded-xl border border-[#FF9F1C]/40 bg-[#FF9F1C]/20 text-[#FF9F1C] font-bold text-xs flex items-center gap-2 hover:bg-[#FF9F1C]/30 transition-all"
                      >
                        {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
                        {isTimerRunning ? "PAUSE" : "RESUME"}
                      </button>
                    </div>
                  )}

                  {/* Active Workspace Apps */}
                  {currentMode.osData.activeApps && (
                    <div className="pt-2 border-t border-[#151D2A]">
                      <p className="text-[10px] text-[#64748B] uppercase tracking-widest mb-1.5">
                        Automated App Orchestration:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {currentMode.osData.activeApps.map((app) => (
                          <span
                            key={app}
                            className="px-2 py-0.5 rounded bg-[#151D2A]/80 text-[#CBD5E1] text-[10px] border border-[#151D2A]"
                          >
                            ✓ {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Hooks List with Interactive Toggles */}
              <div className="space-y-2">
                <p className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                  <SlidersHorizontal size={12} style={{ color: currentMode.accent }} />
                  Active Protocol Webhooks (Toggle to Preview):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentMode.actions.map((act) => {
                    const active = isActionActive(act.text);
                    return (
                      <button
                        key={act.text}
                        onClick={() => toggleAction(act.text)}
                        className="p-3 rounded-xl border text-left transition-all duration-200 flex items-start justify-between gap-3 group"
                        style={{
                          borderColor: active ? currentMode.accent + "40" : "#151D2A",
                          backgroundColor: active ? currentMode.accent + "0a" : "#030508",
                        }}
                      >
                        <div className="space-y-0.5 flex-grow">
                          <span
                            className="text-[9px] font-mono tracking-widest uppercase px-1.5 py-0.2 rounded border inline-block mb-1"
                            style={{
                              color: active ? currentMode.accent : "#64748B",
                              borderColor: active ? currentMode.accent + "30" : "#151D2A",
                              backgroundColor: active ? currentMode.accent + "10" : "transparent",
                            }}
                          >
                            {act.category}
                          </span>
                          <p
                            className="text-[12px] leading-snug transition-colors"
                            style={{ color: active ? "#F8FAFC" : "#64748B" }}
                          >
                            {act.text}
                          </p>
                        </div>
                        <div
                          className="w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                          style={{
                            borderColor: active ? currentMode.accent : "#334155",
                            backgroundColor: active ? currentMode.accent : "transparent",
                          }}
                        >
                          {active && <CheckCircle2 size={12} className="text-[#030508]" />}
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
