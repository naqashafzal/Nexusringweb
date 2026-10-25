"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  RefreshCw,
  ChevronRight,
  Layers,
  Settings,
  ShieldCheck,
  Zap,
  MonitorSmartphone,
  CheckCircle2,
  XCircle,
  EyeOff,
  Sliders,
  Cpu,
  Monitor,
  Smartphone,
  Home,
  Code2,
  Terminal,
  Activity,
  Box,
  Fingerprint,
  Server,
  Globe
} from "lucide-react";

// Dynamically import 3D Exploded Ring Canvas for SSR safety
const ExplodedRingCanvas = dynamic(() => import("@/components/ExplodedRingCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-accent gap-2">
      <RefreshCw size={20} className="animate-spin text-accent" />
      <span>INITIALIZING 3D CAD SHADER...</span>
    </div>
  ),
});

const MODES_DATA = [
  {
    id: "deep_work",
    name: "Deep Work",
    color: "#FF3366",
    tagline: "Remove everything that doesn't belong in the session.",
    desc: "Deep Work mode is designed for the moments when you want maximum focus. Place the totem in the Deep Work position and Nexus Companion can automatically prepare a focused workspace using the rules you selected.",
    actions: [
      { type: "block", text: "Block distracting websites (YouTube, Reddit)" },
      { type: "close", text: "Close Discord & entertainment apps" },
      { type: "dnd", text: "Enable Do Not Disturb" },
      { type: "open", text: "Open VS Code & Terminal" },
      { type: "timer", text: "Start 90-minute focus timer" }
    ],
    status: "Solid crimson glow"
  },
  {
    id: "creative",
    name: "Creative",
    color: "#B026FF",
    tagline: "Remove noise without closing the door on exploration.",
    desc: "Creative work is different from Deep Work. You may still need references, music, visual inspiration and multiple tools. Creative mode gives you a more flexible environment while filtering the distractions that break your flow.",
    actions: [
      { type: "open", text: "Open Blender & Figma" },
      { type: "open", text: "Open PureRef & project folders" },
      { type: "allow", text: "Allow research & reference sites" },
      { type: "music", text: "Start Creative playlist" },
      { type: "dnd", text: "Mute Slack & social feeds" }
    ],
    status: "Slow breathing purple pulse"
  },
  {
    id: "meeting",
    name: "Meeting",
    color: "#00E5FF",
    tagline: "Prepare for the call without scrambling through settings.",
    desc: "Meeting mode can prepare the tools and communication settings you normally adjust manually before a call.",
    actions: [
      { type: "open", text: "Open Zoom / Teams / Meet" },
      { type: "open", text: "Open Notion meeting notes" },
      { type: "music", text: "Pause background music" },
      { type: "status", text: "Update communication status" },
      { type: "light", text: "Activate meeting lighting preset" }
    ],
    status: "Clean steady blue glow"
  },
  {
    id: "break",
    name: "Break",
    color: "#FF9F1C",
    tagline: "Protect recovery with the same intention you protect focus.",
    desc: "A real break should not become five minutes of rest followed by checking Slack, email and project boards. Break mode can temporarily quiet your work environment so recovery remains separate from work.",
    actions: [
      { type: "hide", text: "Hide work applications" },
      { type: "mute", text: "Silence email & Slack alerts" },
      { type: "pause", text: "Pause focus timers" },
      { type: "music", text: "Open break playlist" },
      { type: "light", text: "Relaxed lighting scene" }
    ],
    status: "Soft ambient amber glow"
  }
];

export default function FeaturesPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [activeModeIdx, setActiveModeIdx] = useState(0);

  const currentMode = MODES_DATA[activeModeIdx];

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-accent/30 selection:text-white">
      {/* Background Dot Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ 1. HERO SECTION ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-[11px] font-mono tracking-widest uppercase mb-4">
            The Physical Anchor
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            ONE PHYSICAL MOVE.<br />
            <span className="text-slate-400">TOTAL DIGITAL CLARITY.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Place the heavy magnetic totem into position. Nexus reads the physical mode and instantly enforces your digital boundaries—closing distractions, opening workspaces, and shielding your attention from the chaos.
          </p>

          <p className="text-white text-lg font-medium">
            No hunting through menus. No fighting your own willpower.<br/>
            You make the decision once. Nexus protects it.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a href="#interactive-modes" className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold text-sm tracking-wide hover:bg-[#00ffaa] transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2">
              Explore the Modes <ChevronRight size={16} />
            </a>
            <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl border border-slate bg-matte text-white hover:bg-slate font-mono text-xs tracking-wider transition-all flex items-center gap-2">
              Join Early Access
            </button>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 text-left"
        >
          <div className="p-5 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">4 Physical Modes</h4>
            <p className="text-sm text-slate-400">Deep Work · Creative · Meeting · Break</p>
          </div>
          <div className="p-5 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">Local-First</h4>
            <p className="text-sm text-slate-400">Core desktop automations are designed to run locally.</p>
          </div>
          <div className="p-5 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">Configurable</h4>
            <p className="text-sm text-slate-400">Decide what each mode opens, blocks or changes.</p>
          </div>
          <div className="p-5 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">Cross-Device Vision</h4>
            <p className="text-sm text-slate-400">Desktop first, with mobile and workspace integrations expanding over time.</p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ 2. INTERACTIVE MODE DEMONSTRATION ════════════════ */}
      <section id="interactive-modes" className="relative max-w-[1400px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Model placeholder for interaction (In reality, would use ExplodedRingCanvas with mode props) */}
          <div className="h-[600px] rounded-3xl border border-slate bg-matte relative overflow-hidden flex flex-col justify-end p-6 group">
            <div className="absolute top-6 left-6 z-20 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
              INTERACTIVE MODE PREVIEW
            </div>
            {/* The 3D Canvas */}
            <div className="absolute inset-0 z-10">
              <ExplodedRingCanvas disableExplode={true} centerPosition={true} />
            </div>

            {/* Mode selection buttons overlay */}
            <div className="relative z-20 flex gap-2 justify-center w-full bg-vantablack/80 backdrop-blur p-2 rounded-2xl border border-slate">
              {MODES_DATA.map((mode, idx) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveModeIdx(idx)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-mono font-bold transition-all ${activeModeIdx === idx ? 'bg-white text-black' : 'text-slate-400 hover:text-white'}`}
                  style={activeModeIdx === idx ? { boxShadow: `0 0 20px ${mode.color}40` } : {}}
                >
                  {mode.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Automation Panel */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10 rounded-3xl border bg-matte relative overflow-hidden"
                style={{ borderColor: currentMode.color + "40" }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: currentMode.color }} />
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: currentMode.color }} />
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: currentMode.color }}>
                    {currentMode.name} ACTIVE
                  </span>
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-2">{currentMode.name}</h3>
                <p className="text-slate-400 mb-8">{currentMode.tagline}</p>

                <div className="space-y-3 font-mono text-sm">
                  {currentMode.actions.map((action, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate/50 bg-vantablack text-slate-300">
                      <CheckCircle2 size={16} style={{ color: currentMode.color }} />
                      {action.text}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate">
                  <p className="text-xs text-slate-500 italic">*Availability depends on supported platform integrations.</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════ 3. HOW NEXUS WORKS ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">From intention to action in one second.</h2>
          <p className="text-slate-400">
            Nexus Ring bridges the gap between what you want to do and actually doing it. You choose the state physically; the software enforces the boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate -translate-y-1/2 z-0" />
          
          {[
            { step: "01", title: "Choose your mode", desc: "Move the magnetic totem into one of four physical positions." },
            { step: "02", title: "Nexus detects position", desc: "Hall-effect sensors detect the mode and send the event to Nexus Companion." },
            { step: "03", title: "Your profile runs", desc: "The software checks what actions you configured for that mode." },
            { step: "04", title: "Environment changes", desc: "Apps, websites, notifications, timers and integrations respond automatically." },
          ].map((s, i) => (
            <div key={i} className="relative z-10 p-6 rounded-2xl border border-slate bg-matte text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-vantablack border border-accent flex items-center justify-center text-accent font-mono text-sm mb-4">
                {s.step}
              </div>
              <h4 className="text-white font-bold mb-2">{s.title}</h4>
              <p className="text-xs text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ 4. FOUR CORE MODES DETAILS ════════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 space-y-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Four physical modes.<br/>Four different digital environments.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Each mode is a configurable profile. Nexus Ring doesn&apos;t decide how you work — you decide what each physical position means.
          </p>
        </div>

        {MODES_DATA.map((mode, idx) => (
          <div key={mode.id} className="pt-8 border-t border-slate">
            <h3 className="text-5xl font-display font-black text-white mb-2">{mode.name}</h3>
            <p className="text-xl font-medium mb-6" style={{ color: mode.color }}>{mode.tagline}</p>
            <p className="text-slate-300 mb-8 leading-relaxed">{mode.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-matte border border-slate">
                <h4 className="text-white font-bold mb-4 font-mono uppercase tracking-wider text-sm">Example Actions</h4>
                <ul className="space-y-3 font-mono text-xs text-slate-400">
                  {mode.actions.map((act, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-white">-</span> {act.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-vantablack border border-slate flex flex-col justify-center">
                <h4 className="text-white font-bold mb-4 font-mono uppercase tracking-wider text-sm">Integration Status</h4>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded bg-slate text-[10px] font-mono text-white mr-2">DESKTOP AUTOMATION - CORE</span>
                  <span className="inline-block px-3 py-1 rounded bg-slate/50 text-[10px] font-mono text-slate-400 mr-2">MOBILE - IN DEVELOPMENT</span>
                  <span className="inline-block px-3 py-1 rounded bg-slate/50 text-[10px] font-mono text-slate-400">SMART WORKSPACE - PLANNED</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ════════════════ 5. CUSTOM MODE PROFILES ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Your modes. Your rules.</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Every mode can be customized. A developer&apos;s Deep Work setup may look completely different from a designer&apos;s, founder&apos;s or student&apos;s.
            </p>
            <div className="space-y-4">
              {[
                { title: "Apps", items: "Open, Close, Minimize, Launch workspace" },
                { title: "Websites", items: "Allow list, Block list, Temporary restrictions" },
                { title: "Notifications", items: "Normal, Priority only, Do Not Disturb" },
                { title: "Communication", items: "Update supported statuses (Slack, Teams)" },
                { title: "Timers", items: "Start timer, Stop timer, Run custom session" },
                { title: "Scripts", items: "PowerShell, Zsh, Python, custom webhooks" }
              ].map(cat => (
                <div key={cat.title} className="border-b border-slate pb-2">
                  <span className="font-bold text-white">{cat.title}:</span> <span className="text-slate-400 text-sm">{cat.items}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl border border-slate bg-matte p-6 shadow-2xl">
            <div className="border-b border-slate pb-4 mb-4 flex justify-between items-center">
              <h4 className="font-mono text-white">Deep Work Profile</h4>
              <span className="px-2 py-1 bg-accent/20 text-accent text-[10px] rounded">CONFIGURING</span>
            </div>
            <div className="space-y-3 font-mono text-sm text-slate-300">
              <label className="flex items-center gap-3"><input type="checkbox" checked readOnly className="accent-accent" /> Open VS Code</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked readOnly className="accent-accent" /> Open project folder</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked readOnly className="accent-accent" /> Block YouTube & Reddit</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked readOnly className="accent-accent" /> Close Discord</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked readOnly className="accent-accent" /> Enable DND</label>
              <label className="flex items-center gap-3"><input type="checkbox" checked readOnly className="accent-accent" /> Start 90-minute timer</label>
            </div>
            <button onClick={() => setShowComingSoon(true)} className="w-full mt-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors">
              Get companion updates
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════ 6. LOCAL-FIRST & PRIVACY ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-4xl font-display font-bold text-white mb-6">A sanctuary, not a surveillance tool.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          We don&apos;t want your data. Your focus is your own. The core Nexus automation runs completely locally on your machine—no cloud permissions required.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl border border-slate bg-matte">
            <ShieldCheck className="text-accent mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Local Mode Detection</h4>
            <p className="text-sm text-slate-400">The selected physical mode is processed locally.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate bg-matte">
            <Server className="text-accent mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">No Mandatory Cloud</h4>
            <p className="text-sm text-slate-400">Core desktop mode changes should continue without dependence on a remote server.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate bg-matte">
            <Globe className="text-accent mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">Integrations Are Explicit</h4>
            <p className="text-sm text-slate-400">External services only become involved when the user enables an integration that requires them.</p>
          </div>
        </div>
      </section>

      {/* ════════════════ 7. CROSS-DEVICE ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">One physical state. More than one screen.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The long-term Nexus ecosystem is designed to let a single physical mode coordinate the devices around you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-slate bg-matte">
            <Monitor className="mb-4 text-white" size={32} />
            <h4 className="text-xl font-bold text-white mb-2">Desktop</h4>
            <span className="text-[10px] font-mono bg-accent/20 text-accent px-2 py-1 rounded">CORE PLATFORM</span>
            <p className="text-sm text-slate-400 mt-4">Windows, macOS, Linux target support. Controls apps, websites, notifications, scripts, and timers.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate bg-matte">
            <Smartphone className="mb-4 text-white" size={32} />
            <h4 className="text-xl font-bold text-white mb-2">Mobile</h4>
            <span className="text-[10px] font-mono bg-slate text-slate-300 px-2 py-1 rounded">IN DEVELOPMENT / PLANNED</span>
            <p className="text-sm text-slate-400 mt-4">Potential behaviors: Focus mode, notification rules, app restrictions, dependent on iOS/Android API exposure.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate bg-matte">
            <Home className="mb-4 text-white" size={32} />
            <h4 className="text-xl font-bold text-white mb-2">Smart Workspace</h4>
            <span className="text-[10px] font-mono bg-slate text-slate-300 px-2 py-1 rounded">PLANNED</span>
            <p className="text-sm text-slate-400 mt-4">Potential integrations: Home Assistant, lights, music, desk devices, IoT routines.</p>
          </div>
        </div>
      </section>

      {/* ════════════════ 8. MORE THAN A BLOCKER ════════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Blocking is only one action.</h2>
          <p className="text-slate-400">
            Traditional blockers focus on saying &quot;no.&quot; Nexus Ring is designed around transitions. It can remove distractions, but it can also prepare the tools, settings and environment you actually need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-vantablack border border-slate rounded-2xl text-center text-slate-300">
            <h4 className="text-white font-bold mb-4">Blocking</h4>
            <p>Close distracting apps</p>
            <p>Block websites</p>
            <p>Mute notifications</p>
          </div>
          <div className="p-8 bg-matte border border-slate rounded-2xl text-center text-slate-300">
            <h4 className="text-white font-bold mb-4">Preparing</h4>
            <p>Open project & tools</p>
            <p>Start music & scripts</p>
            <p>Adjust environment</p>
          </div>
        </div>
        <p className="text-center text-white text-lg font-bold mt-8">
          The goal isn&apos;t simply to prevent distraction.<br/>The goal is to make the right state easier to enter.
        </p>
      </section>

      {/* ════════════════ 9. DEVELOPMENT MATRIX ════════════════ */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">What we&apos;re building now.</h2>
        <div className="space-y-2 font-mono text-sm">
          {[
            { f: "Physical mode detection", s: "PROTOTYPE" },
            { f: "3D-printed enclosure", s: "PROTOTYPE" },
            { f: "ESP32 firmware", s: "IN DEVELOPMENT" },
            { f: "Desktop companion", s: "IN DEVELOPMENT" },
            { f: "Custom mode profiles", s: "IN DEVELOPMENT" },
            { f: "Website & App blocking", s: "IN DEVELOPMENT" },
            { f: "Mobile companion", s: "PLANNED" },
            { f: "Smart-home integrations", s: "PLANNED" },
            { f: "Local context AI", s: "EXPERIMENTAL" }
          ].map(row => (
            <div key={row.f} className="flex justify-between p-3 border-b border-slate bg-matte">
              <span className="text-slate-300">{row.f}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] ${row.s === 'PROTOTYPE' ? 'bg-amber/20 text-amber' : row.s === 'IN DEVELOPMENT' ? 'bg-accent/20 text-accent' : 'bg-slate text-slate-400'}`}>
                {row.s}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ 10. FAQ ════════════════ */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "Can I customize what each mode does?", a: "Yes. Nexus Ring is designed around configurable mode profiles so the same physical mode can behave differently for different users." },
            { q: "Does Nexus Ring need the internet?", a: "Core desktop automation is being designed to operate locally. External integrations may require an internet connection." },
            { q: "Can it block websites and close applications?", a: "Website restrictions and application automation are part of the planned desktop companion feature set, driven by user-defined rules." },
            { q: "Does Nexus Ring use AI?", a: "AI-assisted context awareness is being explored as an optional local-first feature. Core Nexus functionality does not need AI to detect modes or execute automations." }
          ].map((faq, i) => (
            <div key={i} className="border-b border-slate pb-4">
              <h4 className="text-white font-bold mb-2">{faq.q}</h4>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ 11. CLOSING CTA ════════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-matte border border-slate p-12 md:p-24 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
          YOUR ATTENTION HAS AN OFF SWITCH.
        </h2>
        <p className="text-slate-400 text-lg mb-4 max-w-2xl mx-auto">
          You don&apos;t lack discipline. You lack a boundary. Deep Work shouldn&apos;t begin with fighting distractions. A break shouldn&apos;t be interrupted by work notifications.
        </p>
        <p className="text-white font-bold text-xl mb-12">
          Nexus Ring turns those transitions into something physical.<br/><br/>
          Make the decision once.<br/>Nexus protects it.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold tracking-wide hover:bg-[#00ffaa] transition-all">
            Get Early Access
          </button>
          <Link href="/campaign" className="px-8 py-4 rounded-xl border border-slate text-white hover:bg-slate transition-all font-mono text-sm flex items-center gap-2">
            View Campaign
          </Link>
        </div>
        <p className="text-xs text-slate-500 mt-4 font-mono">No payment required today.</p>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
