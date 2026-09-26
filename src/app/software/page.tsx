"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Zap,
  Code2,
  Lock,
  Copy,
  Check,
  Eye,
  Cpu,
  Radio,
  Sliders,
  ChevronRight,
} from "lucide-react";

// ─── Webhook Script Snippets ──────────────────────────────────────

const CODE_SNIPPETS = {
  powershell: `# Nexus Ring Local Daemon — Windows PowerShell Kernel Hook
# Triggered directly by ESP32-C3 websocket signal (<24ms)

$Mode = $args[0] # "deep_work", "meeting", "creative", "break"

switch ($Mode) {
    "deep_work" {
        Write-Host "[NEXUS] Enforcing Kernel Firewall..." -ForegroundColor Green
        # Block distraction domains at hosts level
        Set-Content -Path "C:\\Windows\\System32\\drivers\\etc\\hosts" -Value "127.0.0.1 x.com\`n127.0.0.1 discord.com"
        # Launch Workspaces
        Start-Process "code" -ArgumentList "."
        # Mute System Notifications
        Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications" -Name "ToastEnabled" -Value 0
    }
    "meeting" {
        Write-Host "[NEXUS] Muting Audio Micro-relays..." -ForegroundColor Cyan
        # Instant hardware mic disconnect
        & "ncmdump.exe" --mute-all-mics
    }
}`,
  bash: `#!/usr/bin/env bash
# Nexus Ring Daemon — macOS / Linux Zsh Hook
# Executed by local background agent

MODE="$1"

case "$MODE" in
  deep_work)
    echo "⚡ [NEXUS] Activating Deep Work Protocol..."
    sudo pfctl -e -f /etc/pf.nexus_blocklist.conf
    open -a "Visual Studio Code"
    defaults write com.apple.notificationcenterui dndEnabled -bool true
    ;;
  meeting)
    echo "🎙️ [NEXUS] Enforcing Spatial Mic Isolation..."
    osascript -e 'set volume input volume 0'
    open -a "Zoom"
    ;;
esac`,
  python: `# Nexus Local AI Guardian Loop (Local AI Quantized)
import asyncio
from nexus_core import RingDaemon, LocalVisionModel

daemon = RingDaemon(port=8420)
model = LocalVisionModel.load_npu_quantized("local-ai-vision-q4")

@daemon.on_totem_snap
async def handle_snap(slot_id: int, mode_name: str):
    print(f"[NEXUS HARDWARE] Totem Position {slot_id} Synced: {mode_name}")
    if mode_name == "deep_work":
        await model.start_focus_monitoring(
            allowed_apps=["Code", "Terminal", "Notion"],
            air_gapped=True
        )

daemon.run_forever()`,
  json: `{
  "nexus_kernel_version": "2.4.0",
  "totem_event": {
    "slot_position": 1,
    "mode_name": "Deep Work",
    "hall_sensor_flux_mt": 420.5,
    "magnetic_auth": true,
    "latency_ms": 18
  },
  "webhooks": [
    { "target": "local_hosts_blocker", "status": "executed" },
    { "target": "workspace_launcher", "app": "VS Code" },
    { "target": "notification_daemon", "action": "silence_all" }
  ]
}`,
};

export default function SoftwarePage() {
  const [activeCodeTab, setActiveCodeTab] = useState<keyof typeof CODE_SNIPPETS>("powershell");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      {/* Background Dot Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-electric/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/[0.06] text-electric text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-ping" />
            Distraction Elimination System · 100% Air-Gapped Local Daemon
          </div>

          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            A LOCAL GUARDIAN.<br />
            <span style={{ background: "linear-gradient(120deg, #FFFFFF, #94A3B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ZERO TELEMETRY.
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            More output, less friction: a physical barrier between you and the distractions costing you time and money. Lightweight kernel daemons enforce focus in under 24ms with zero cloud telemetry.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-6 border-t border-slate">
            {[
              { val: "0 Bytes", label: "Sent to Cloud", accent: "#00FF9D" },
              { val: "<24ms", label: "Kernel Webhook", accent: "#00E5FF" },
              { val: "Local AI", label: "Quantized NPU", accent: "#B026FF" },
              { val: "Open SDK", label: "Custom Hooks", accent: "#FF9F1C" },
            ].map((st) => (
              <div key={st.label} className="p-3 rounded-xl border border-slate bg-matte">
                <p className="text-lg font-display font-bold" style={{ color: st.accent }}>{st.val}</p>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE CODE & HOOK GENERATOR ═══════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] font-mono tracking-[0.25em] text-emerald uppercase border border-emerald/20 bg-emerald/5 rounded-full inline-block px-3 py-1 mb-4">
            Open Webhook SDK
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Native OS Daemon Webhooks
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Inspect the exact scripts executed at kernel level when totems snap into position.
          </p>
        </div>

        {/* Code Terminal Box */}
        <div className="rounded-3xl border border-slate bg-vantablack overflow-hidden shadow-2xl">
          {/* Top Bar with Language Tabs */}
          <div className="px-6 py-4 bg-matte border-b border-slate flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              <span className="text-xs font-mono text-slate-500 ml-2 flex items-center gap-1.5">
                <Terminal size={14} className="text-emerald" />
                nexus_daemon_hooks
              </span>
            </div>

            <div className="flex items-center gap-2">
              {(["powershell", "bash", "python", "json"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveCodeTab(lang)}
                  className="px-3 py-1 rounded-lg text-xs font-mono transition-colors"
                  style={{
                    backgroundColor: activeCodeTab === lang ? "#00E5FF20" : "transparent",
                    color: activeCodeTab === lang ? "#00E5FF" : "#64748b",
                    border: `1px solid ${activeCodeTab === lang ? "#00E5FF40" : "transparent"}`,
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}

              <button
                onClick={handleCopy}
                className="ml-2 px-3 py-1 rounded-lg border border-slate bg-matte hover:bg-slate text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="p-6 md:p-8 font-mono text-xs md:text-sm overflow-x-auto text-slate-300 leading-relaxed bg-vantablack">
            <pre>
              <code>{CODE_SNIPPETS[activeCodeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ════════════════ AIR-GAPPED VISION ARCHITECTURE ═══════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="rounded-3xl border border-slate bg-matte p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-purple border border-purple/20 bg-purple/10 px-3 py-1 rounded-full">
              Privacy Architecture
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-3">
              How the Local AI Guardian Works
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light mt-2">
              Unlike cloud-based AI tools that upload screen images, Nexus runs a quantized local AI model in local VRAM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "STEP 01",
                title: "Local Frame Sample",
                desc: "Every 15s during focus mode, an on-chip screenshot is captured into RAM.",
                accent: "#00FF9D",
                icon: Eye,
              },
              {
                num: "STEP 02",
                title: "On-Device Quantization",
                desc: "Quantized 4-bit vision model evaluates window titles & active task context locally.",
                accent: "#00E5FF",
                icon: Cpu,
              },
              {
                num: "STEP 03",
                title: "Hardware Pulse Feedback",
                desc: "If context strays, the ring pulses warm amber to gently nudge you back without shame.",
                accent: "#FF9F1C",
                icon: Zap,
              },
            ].map((st) => (
              <div key={st.num} className="p-6 rounded-2xl border border-slate bg-vantablack space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest" style={{ color: st.accent }}>
                    {st.num}
                  </span>
                  <st.icon size={20} style={{ color: st.accent }} />
                </div>
                <h4 className="text-lg font-display font-bold text-white">{st.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CORE PROTOCOL BLACKOUT CARDS ═════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] font-mono tracking-[0.25em] text-amber uppercase border border-amber/20 bg-amber/5 rounded-full inline-block px-3 py-1 mb-4">
            Security & Boundary Modules
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Uncompromised OS Control Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate bg-matte p-8 space-y-4">
            <span className="text-[10px] font-mono text-emerald uppercase tracking-widest px-2.5 py-1 rounded bg-emerald/10 border border-emerald/20 inline-block">
              Kernel Firewall Engine
            </span>
            <h3 className="text-2xl font-display font-bold text-white">Total Blackout Protocol</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              When Deep Work totem is active, the Guardian intercepts network requests to known distraction domains at OS kernel socket level. It cannot be bypassed by simply opening an incognito browser tab.
            </p>
          </div>

          <div className="rounded-2xl border border-slate bg-matte p-8 space-y-4">
            <span className="text-[10px] font-mono text-electric uppercase tracking-widest px-2.5 py-1 rounded bg-electric/10 border border-electric/20 inline-block">
              Hardware Relay Isolation
            </span>
            <h3 className="text-2xl font-display font-bold text-white">Spatial Mic & Camera Isolation</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Instantly opens or severs spatial microphone input streams during meetings. Prevents hot-mic accidents and provides physical reassurance during confidential calls.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
