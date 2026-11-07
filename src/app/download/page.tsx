"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Download,
  Laptop,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  AlertCircle
} from "lucide-react";

export default function DownloadPage() {
  // Web Serial Live Hardware Test State
  const [serialConnected, setSerialConnected] = useState(false);
  const [activeSlot, setActiveSlot] = useState<string>("UNDOCKED");
  const [connecting, setConnecting] = useState(false);
  const [serialError, setSerialError] = useState<string | null>(null);

  const connectWebSerial = async () => {
    if (typeof window === "undefined") return;
    
    // Check Web Serial support
    if (!("serial" in navigator)) {
      setSerialError("Web Serial is supported on Google Chrome, Microsoft Edge, and Opera.");
      return;
    }

    setConnecting(true);
    setSerialError(null);

    try {
      const port = await (navigator as any).serial.requestPort();
      await port.open({ baudRate: 115200 });
      setSerialConnected(true);
      setConnecting(false);

      const textDecoder = new TextDecoderStream();
      port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();

      // Send initial PING handshake
      const writer = port.writable.getWriter();
      await writer.write(new TextEncoder().encode("PING\n"));
      writer.releaseLock();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          const text = value.trim();
          if (text.includes("MODE_DEEPWORK") || text.includes("DW")) setActiveSlot("DEEPWORK");
          else if (text.includes("MODE_MEETING") || text.includes("MT")) setActiveSlot("MEETING");
          else if (text.includes("MODE_BREAK") || text.includes("BR")) setActiveSlot("BREAK");
          else if (text.includes("MODE_CREATIVE") || text.includes("CR")) setActiveSlot("CREATIVE");
          else if (text.includes("MODE_UNDOCKED")) setActiveSlot("UNDOCKED");
        }
      }
    } catch (err: any) {
      setConnecting(false);
      if (err.name !== "NotFoundError") {
        setSerialError(err.message || "Could not connect to USB serial device.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-28 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* 1. HERO SECTION */}
      <section className="relative page-container mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            Official Release • v0.1.0 Stable
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#1D1D1F]">
            Command your workspace.
          </h1>

          <p className="text-[#6E6E73] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Physical totem focus meets zero-latency desktop automation. Download the local engine for Windows or the Android companion app.
          </p>
        </motion.div>
      </section>

      {/* 2. PRIMARY DOWNLOAD CARDS */}
      <section className="page-container mb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Windows Setup Installer (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-[#1D1D1F] bg-[#FAFAFA] p-8 flex flex-col justify-between shadow-lg overflow-hidden group"
          >
            <div className="absolute top-5 right-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D1D1F] text-white text-[10px] font-mono font-medium uppercase tracking-wider">
                Recommended
              </span>
            </div>

            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#1D1D1F] text-white flex items-center justify-center shadow-md">
                <Laptop size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-[#1D1D1F]">
                  Nexus Core Engine for Windows
                </h3>
                <p className="text-xs text-[#6E6E73] font-mono mt-1">
                  Windows 10 / 11 (64-bit) • Build 0.1.0
                </p>
              </div>

              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Complete desktop daemon with USB auto-handshake, 14-second guardrails countdown, Nexus Flow mission planner, and Sentinel app enforcer.
              </p>

              <ul className="space-y-2 text-xs text-[#48484A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0" />
                  <span>One-click NSIS setup wizard with desktop shortcuts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0" />
                  <span>100% Offline-capable • Zero telemetry or accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0" />
                  <span>Built-in Google Gemini Free-Tier & Local Ollama engines</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <a
                href="/downloads/Nexus-Ring-Setup-x64.exe"
                download="Nexus-Ring-Setup-x64.exe"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#1D1D1F] hover:bg-[#000000] text-white font-medium text-sm flex items-center justify-center gap-2.5 transition-all shadow-md group-hover:shadow-lg active:scale-[0.99]"
              >
                <Download size={16} />
                <span>Download Windows Installer (.exe)</span>
                <span className="text-xs text-[#86868B] font-mono font-normal">5.4 MB</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-[#86868B] px-1">
                <span>Portable standalone build:</span>
                <a
                  href="/downloads/Nexus-Ring-x64.exe"
                  download="Nexus-Ring-x64.exe"
                  className="text-[#1D1D1F] hover:underline font-medium font-mono"
                >
                  Nexus-Ring-x64.exe (19 MB)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Android Companion APK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] p-8 flex flex-col justify-between shadow-xs hover:border-[#D1D1D6] transition-all"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center border border-[#E5E5E7]">
                <Smartphone size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-[#1D1D1F]">
                  Android Mobile Companion
                </h3>
                <p className="text-xs text-[#6E6E73] font-mono mt-1">
                  Android 10+ • Release Build
                </p>
              </div>

              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Connect your phone to your PC via local Wi-Fi auto-discovery. Mutes mobile distractions while allowing VIP emergency dispatches through.
              </p>

              <ul className="space-y-2 text-xs text-[#48484A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0" />
                  <span>Zero-Config mDNS / LAN Auto-Discovery (No manual IP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0" />
                  <span>VIP Emergency dispatch channel with desktop HUD alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#34A853] shrink-0" />
                  <span>100% Local Wi-Fi sync (Works completely offline)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <a
                href="/downloads/nexus-ring-release.apk"
                download="nexus-ring-release.apk"
                className="w-full py-3.5 px-6 rounded-2xl border border-[#E5E5E7] bg-[#F5F5F7] hover:bg-[#EAEAEA] text-[#1D1D1F] font-medium text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.99]"
              >
                <Download size={16} />
                <span>Download Android Package (.apk)</span>
                <span className="text-xs text-[#86868B] font-mono font-normal">94 MB</span>
              </a>

              <p className="text-[11px] text-[#86868B] text-center">
                Sideloadable onto any modern Android smartphone or tablet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE LIVE HARDWARE TEST (WEB SERIAL API) */}
      <section className="page-container mb-24 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-[10px] font-mono font-semibold uppercase">
                <Sparkles size={11} /> Browser Hardware Bridge
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1D1D1F]">
                Test your Nexus Ring online right now.
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73]">
                Plug your ring into any USB port and test live totem rotation in Google Chrome or Microsoft Edge.
              </p>
            </div>

            <button
              onClick={connectWebSerial}
              disabled={connecting || serialConnected}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                serialConnected
                  ? "bg-[#34A853]/15 text-[#34A853] border border-[#34A853]/30"
                  : "bg-[#1D1D1F] hover:bg-black text-white shadow-sm"
              }`}
            >
              {connecting ? (
                <>
                  <RefreshCw size={13} className="animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : serialConnected ? (
                <>
                  <CheckCircle2 size={14} />
                  <span>Connected via USB</span>
                </>
              ) : (
                <>
                  <Zap size={13} />
                  <span>Connect Ring via Web Serial</span>
                </>
              )}
            </button>
          </div>

          {serialError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0" />
              <span>{serialError}</span>
            </div>
          )}

          {/* Live Slot Status Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { id: "DEEPWORK", name: "Deep Work", color: "#EA4335", bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-700" },
              { id: "MEETING", name: "Meeting", color: "#1A73E8", bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-700" },
              { id: "BREAK", name: "Break", color: "#FBBC04", bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-700" },
              { id: "CREATIVE", name: "Creative", color: "#9334E8", bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-700" },
            ].map((slot) => {
              const isActive = activeSlot === slot.id;
              return (
                <div
                  key={slot.id}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    isActive
                      ? `${slot.bg} ${slot.border} ring-2 ring-offset-1`
                      : "bg-[#FFFFFF] border-[#E5E5E7] opacity-60"
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] mb-1">
                    Slot {slot.id === "DEEPWORK" ? "01" : slot.id === "MEETING" ? "02" : slot.id === "BREAK" ? "03" : "04"}
                  </div>
                  <div className="text-xs font-bold text-[#1D1D1F]">
                    {slot.name}
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-[#86868B]">
                    {isActive ? "● DOCKED & ACTIVE" : "Idle"}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-[#86868B] leading-relaxed">
            * Uses the standard Web Serial protocol over 115200 baud. The browser directly communicates with the ring hardware without any third-party plugins.
          </p>
        </div>
      </section>

      {/* 4. THREE-MINUTE SETUP WALKTHROUGH */}
      <section className="page-container mb-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow block mb-2">Getting Started</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1D1D1F]">
            3-Minute Hardware Setup.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#1D1D1F] text-white font-mono text-xs font-bold flex items-center justify-center">
              1
            </div>
            <h4 className="font-bold text-sm text-[#1D1D1F]">Plug in via USB</h4>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Connect your Nexus Ring to your computer using the included USB-C cable. Windows loads the standard built-in CDC driver instantly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#1D1D1F] text-white font-mono text-xs font-bold flex items-center justify-center">
              2
            </div>
            <h4 className="font-bold text-sm text-[#1D1D1F]">Run the Setup</h4>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Launch <code className="font-mono text-black font-semibold">Nexus-Ring-Setup-x64.exe</code>. The daemon installs quietly and auto-locks onto the serial port in under a second.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#1D1D1F] text-white font-mono text-xs font-bold flex items-center justify-center">
              3
            </div>
            <h4 className="font-bold text-sm text-[#1D1D1F]">Dock & Focus</h4>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Rotate your metallic totem into the Deep Work slot. The app initiates your workspace layout and seals away digital distractions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATIONS & SECURITY */}
      <section className="page-container max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[#E5E5E7] p-8 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
            Technical Specifications & Integrity
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#6E6E73]">
            <div className="space-y-1">
              <strong className="text-[#1D1D1F] block">Memory & Footprint:</strong>
              <span>Lightweight Rust Core running with under 45 MB of RAM and negligible CPU impact.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1D1D1F] block">Data Privacy:</strong>
              <span>No telemetry, no tracking pixels, and no cloud synchronization of your keystrokes or open apps.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1D1D1F] block">Credential Protection:</strong>
              <span>API keys (Gemini / OpenAI) are encrypted locally using Windows Credential Manager and SQLite keychain.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1D1D1F] block">Hardware Connection:</strong>
              <span>Standard USB-CDC Serial at 115200 baud, 8-N-1. Driverless plug-and-play across Windows 10/11.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
