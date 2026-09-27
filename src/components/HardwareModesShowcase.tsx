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
    tagline: "Protect the work that matters.",
    accent: "#00FF9D",
    glow: "rgba(0,255,157,0.35)",
    border: "rgba(0,255,157,0.35)",
    bg: "rgba(0,255,157,0.04)",
    icon: ShieldAlert,
    angle: 0,
    specs: [
      { label: "App Blocker", value: "Local Enforcement" },
      { label: "Notification", value: "Do Not Disturb" },
      { label: "Timer", value: "Focus Session" },
      { label: "Slack Status", value: "Auto-Focused" },
    ],
    actions: [
      { text: "Blocks configured websites (social, news, etc)", category: "Network", active: true },
      { text: "Closes distracting applications", category: "Apps", active: true },
      { text: "Starts a focus session timer", category: "Timer", active: true },
      { text: "Opens your preferred workspace tools", category: "Workspace", active: true },
    ],
    osData: {
      title: "DEEP WORK AUTOMATION",
      statusBadge: "ENFORCING",
      logMessage: "00:42:19 | Blocked network distraction requests",
      blockedDomains: ["x.com", "discord.com", "reddit.com", "youtube.com"],
      activeApps: ["VS Code v1.92", "Warp Terminal"],
    },
  },
  {
    id: "meeting",
    slot: "SLOT 02",
    name: "Meeting Mode",
    tagline: "Prepare your workspace before the call starts.",
    accent: "#00E5FF",
    glow: "rgba(0,229,255,0.35)",
    border: "rgba(0,229,255,0.35)",
    bg: "rgba(0,229,255,0.04)",
    icon: MicOff,
    angle: 90,
    specs: [
      { label: "App Launch", value: "Zoom/Teams" },
      { label: "Audio", value: "Pause Media" },
      { label: "Status", value: "In Meeting" },
      { label: "Notes", value: "Auto-Open" },
    ],
    actions: [
      { text: "Launches Zoom, Meet or Teams", category: "App Launch", active: true },
      { text: "Pauses active background media", category: "Audio", active: true },
      { text: "Changes communication status to In a Call", category: "Status", active: true },
      { text: "Opens relevant meeting notes", category: "Workspace", active: true },
    ],
    osData: {
      title: "MEETING PREPARATION",
      statusBadge: "READY",
      logMessage: "Communication status updated | Background media paused",
      volumeLevel: "Media Paused",
      activeApps: ["Zoom HD Workspace", "Notion Meeting Notes"],
    },
  },
  {
    id: "creative",
    slot: "SLOT 03",
    name: "Creative Mode",
    tagline: "Remove noise without removing possibility.",
    accent: "#B026FF",
    glow: "rgba(176,38,255,0.35)",
    border: "rgba(176,38,255,0.35)",
    bg: "rgba(176,38,255,0.04)",
    icon: Sparkles,
    angle: 180,
    specs: [
      { label: "Filter State", value: "Relaxed" },
      { label: "Audio Profile", value: "Creative Presets" },
      { label: "Notifications", value: "Softer Profile" },
      { label: "Workspace", value: "Design Tools" },
    ],
    actions: [
      { text: "Opens Blender, Figma, Adobe or IDEs", category: "Apps", active: true },
      { text: "Allows selected research websites", category: "Network", active: true },
      { text: "Blocks distracting feeds", category: "Filters", active: true },
      { text: "Triggers creative lighting/music presets", category: "Environment", active: true },
    ],
    osData: {
      title: "CREATIVE PIPELINE ACTIVE",
      statusBadge: "FLOW STATE",
      logMessage: "Creative applications launched | Softer notification profile set",
      equalizer: true,
      activeApps: ["Figma Enterprise", "Spline 3D Editor", "Ableton Live"],
    },
  },
  {
    id: "break",
    slot: "SLOT 04",
    name: "Break Mode",
    tagline: "Recovery should be protected too.",
    accent: "#FF9F1C",
    glow: "rgba(255,159,28,0.35)",
    border: "rgba(255,159,28,0.35)",
    bg: "rgba(255,159,28,0.04)",
    icon: Coffee,
    angle: 270,
    specs: [
      { label: "Work Apps", value: "Hidden" },
      { label: "Work Alerts", value: "Paused" },
      { label: "Timers", value: "Stopped" },
      { label: "Environment", value: "Relaxed" },
    ],
    actions: [
      { text: "Hides work applications from view", category: "Apps", active: true },
      { text: "Pauses work notifications & alerts", category: "OS Control", active: true },
      { text: "Stops active focus timers", category: "Timer", active: true },
      { text: "Triggers a relaxed lighting environment", category: "Environment", active: true },
    ],
    osData: {
      title: "RECOVERY MODE ACTIVE",
      statusBadge: "DISCONNECTED",
      logMessage: "Work apps hidden | Focus timers stopped",
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
          className="rounded-3xl border p-6 md:p-10 bg-matte relative overflow-hidden"
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
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Hall Effect Active
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-display font-black tracking-tighter mb-3"
                  style={{ color: currentMode.accent }}
                >
                  {currentMode.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
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
                        className="absolute w-4 h-4 rounded-full border flex items-center justify-center bg-vantablack"
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
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-vantablack shadow-2xl relative"
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
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate">
                {currentMode.specs.map((s) => (
                  <div key={s.label} className="bg-vantablack rounded-xl p-3 border border-slate">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">
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
              <div className="rounded-2xl border border-slate bg-vantablack overflow-hidden flex flex-col shadow-2xl">
                {/* OS Window Title Bar */}
                <div className="px-4 py-3 bg-matte border-b border-slate flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2 flex items-center gap-1.5">
                      <Terminal size={12} className="text-accent" />
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
                    <span className="text-slate-300 font-mono text-[11px] truncate">
                      {currentMode.osData.logMessage}
                    </span>
                  </div>

                  {/* Mode-Specific Interactive Visuals */}
                  {/* 1. Deep Work Blocked Domains */}
                  {currentMode.osData.blockedDomains && (
                    <div className="space-y-2">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">
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
                    <div className="p-4 rounded-xl border border-accent2/30 bg-accent2/[0.04] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-accent2/10 border border-accent2/30 flex items-center justify-center text-accent2">
                          <MicOff size={18} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-xs">Spatial Audio Gate</p>
                          <p className="text-[11px] text-slate-500">Hardware Micro-relays Open</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-accent2/20 text-accent2 font-bold">
                        MUTED
                      </span>
                    </div>
                  )}

                  {/* 3. Creative Audio Equalizer */}
                  {currentMode.osData.equalizer && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                          <Radio size={12} className="text-purple" /> Ambient Lo-Fi Generative Stream
                        </span>
                        <span className="text-[10px] text-purple">96kHz / 24-bit</span>
                      </div>
                      <div className="h-10 rounded-xl bg-vantablack border border-purple/30 p-2 flex items-end gap-1 justify-between">
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
                    <div className="p-4 rounded-xl border border-amber/30 bg-amber/[0.04] flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-amber uppercase tracking-widest font-mono mb-1">
                          Pomodoro Countdown
                        </p>
                        <p className="text-3xl font-display font-bold text-white tracking-wider">
                          {formatTimer(timerSeconds)}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className="px-4 py-2.5 rounded-xl border border-amber/40 bg-amber/20 text-amber font-bold text-xs flex items-center gap-2 hover:bg-amber/30 transition-all"
                      >
                        {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
                        {isTimerRunning ? "PAUSE" : "RESUME"}
                      </button>
                    </div>
                  )}

                  {/* Active Workspace Apps */}
                  {currentMode.osData.activeApps && (
                    <div className="pt-2 border-t border-slate">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">
                        Automated App Orchestration:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {currentMode.osData.activeApps.map((app) => (
                          <span
                            key={app}
                            className="px-2 py-0.5 rounded bg-slate/80 text-slate-300 text-[10px] border border-slate"
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
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
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
                          {active && <CheckCircle2 size={12} className="text-vantablack" />}
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

      {/* ── Customization Banner ── */}
      <div className="mt-8 p-4 md:p-5 rounded-2xl border border-accent/20 bg-accent/5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between shadow-lg">
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-1">Make It Yours</h4>
          <p className="text-slate-400 text-sm">
            These are just the 4 default presets. With the Nexus Desktop App, you can completely customize every slot. Build the perfect environment for <strong className="text-slate-200">Gaming, Video Editing, 3D Rendering, Day Trading</strong>, or anything else you do.
          </p>
        </div>
        <div className="shrink-0">
          <span className="px-4 py-2 rounded-lg bg-accent text-vantablack font-bold text-xs uppercase tracking-widest">
            Fully Configurable
          </span>
        </div>
      </div>
    </div>
  );
}
