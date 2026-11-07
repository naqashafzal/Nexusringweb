"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  CheckCircle2,
  Zap,
  RefreshCw,
  Sparkles,
  AlertCircle
} from "lucide-react";

interface SerialPort {
  open: (options: { baudRate: number }) => Promise<void>;
  readable: ReadableStream<BufferSource>;
  writable: WritableStream<BufferSource>;
}

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
      const navWithSerial = navigator as unknown as { serial?: { requestPort: () => Promise<SerialPort> } };
      if (!navWithSerial.serial) throw new Error("Serial API not available");
      const port = await navWithSerial.serial.requestPort();
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
    } catch (err: unknown) {
      setConnecting(false);
      const message = err instanceof Error ? err.message : String(err);
      const name = err instanceof Error ? err.name : "";
      if (name !== "NotFoundError") {
        setSerialError(message || "Could not connect to USB serial device.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/25 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative page-container mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Nexus Ring Emblem"
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain"
            />
            <span>Official Release • v0.1.0 Stable</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#F5F6F8]">
            Command your workspace.
          </h1>

          <p className="text-[#A5AFBD] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
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
            className="relative rounded-3xl border-2 border-[#D83A50] bg-[#11151C] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(216,58,80,0.15)] overflow-hidden group"
          >
            <div className="absolute top-5 right-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D83A50] text-[#F5F6F8] text-[10px] font-mono font-medium uppercase tracking-wider">
                Recommended
              </span>
            </div>

            <div className="space-y-5">
              <div className="relative w-14 h-14 rounded-2xl bg-[#1B222D] border border-[#303A48] p-2 flex items-center justify-center shadow-lg">
                <Image
                  src="/branding/nexus-app-icon.png"
                  alt="Nexus Companion Icon"
                  width={44}
                  height={44}
                  className="rounded-xl object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-[#F5F6F8]">
                  Nexus Core Engine for Windows
                </h3>
                <p className="text-xs text-[#778292] font-mono mt-1">
                  Windows 10 / 11 (64-bit) • Build 0.1.0
                </p>
              </div>

              <p className="text-sm text-[#A5AFBD] leading-relaxed">
                Complete desktop daemon with USB auto-handshake, 14-second guardrails countdown, Nexus Flow mission planner, and Sentinel app enforcer.
              </p>

              <ul className="space-y-2 text-xs text-[#A5AFBD]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#35C98A] shrink-0" />
                  <span>One-click NSIS setup wizard with desktop shortcuts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#35C98A] shrink-0" />
                  <span>100% Offline-capable • Zero telemetry or accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#35C98A] shrink-0" />
                  <span>Built-in Google Gemini Free-Tier & Local Ollama engines</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <a
                href="/downloads/Nexus-Ring-Setup-x64.exe"
                download="Nexus-Ring-Setup-x64.exe"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#D83A50] hover:bg-[#EB5268] text-[#F5F6F8] font-medium text-sm flex items-center justify-center gap-2.5 transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(216,58,80,0.35)] active:scale-[0.99]"
              >
                <Download size={16} />
                <span>Download Windows Installer (.exe)</span>
                <span className="text-xs text-white/70 font-mono font-normal">5.4 MB</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-[#778292] px-1">
                <span>Portable standalone build:</span>
                <a
                  href="/downloads/Nexus-Ring-x64.exe"
                  download="Nexus-Ring-x64.exe"
                  className="text-[#F5F6F8] hover:text-[#D83A50] hover:underline font-medium font-mono"
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
            className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 flex flex-col justify-between shadow-lg hover:border-[#A5AFBD] transition-all"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#1B222D] text-[#F5F6F8] flex items-center justify-center border border-[#303A48]">
                <Smartphone size={24} className="text-[#35C98A]" />
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-[#F5F6F8]">
                  Android Mobile Companion
                </h3>
                <p className="text-xs text-[#778292] font-mono mt-1">
                  Android 10+ • Release Build
                </p>
              </div>

              <p className="text-sm text-[#A5AFBD] leading-relaxed">
                Connect your phone to your PC via local Wi-Fi auto-discovery. Mutes mobile distractions while allowing VIP emergency dispatches through.
              </p>

              <ul className="space-y-2 text-xs text-[#A5AFBD]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#35C98A] shrink-0" />
                  <span>Zero-Config mDNS / LAN Auto-Discovery (No manual IP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#35C98A] shrink-0" />
                  <span>VIP Emergency dispatch channel with desktop HUD alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#35C98A] shrink-0" />
                  <span>100% Local Wi-Fi sync (Works completely offline)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <a
                href="/downloads/nexus-ring-release.apk"
                download="nexus-ring-release.apk"
                className="w-full py-3.5 px-6 rounded-2xl border border-[#303A48] bg-[#1B222D] hover:bg-[#303A48] text-[#F5F6F8] font-medium text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.99]"
              >
                <Download size={16} />
                <span>Download Android Package (.apk)</span>
                <span className="text-xs text-[#A5AFBD] font-mono font-normal">94 MB</span>
              </a>

              <p className="text-[11px] text-[#778292] text-center">
                Sideloadable onto any modern Android smartphone or tablet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE LIVE HARDWARE TEST (WEB SERIAL API) */}
      <section className="page-container mb-24 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D83A50]/15 text-[#D83A50] text-[10px] font-mono font-semibold uppercase">
                <Sparkles size={11} /> Browser Hardware Bridge
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F6F8]">
                Test your Nexus Ring online right now.
              </h3>
              <p className="text-xs sm:text-sm text-[#A5AFBD]">
                Plug your ring into any USB port and test live totem rotation in Google Chrome or Microsoft Edge.
              </p>
            </div>

            <button
              onClick={connectWebSerial}
              disabled={connecting || serialConnected}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                serialConnected
                  ? "bg-[#35C98A]/15 text-[#35C98A] border border-[#35C98A]/30"
                  : "bg-[#D83A50] hover:bg-[#EB5268] text-[#F5F6F8] shadow-sm"
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
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0 text-red-400" />
              <span>{serialError}</span>
            </div>
          )}

          {/* Live Slot Status Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { id: "DEEPWORK", name: "Deep Work", color: "#D83A50", bg: "bg-red-500/15", border: "border-red-500/40", text: "text-red-400" },
              { id: "MEETING", name: "Meeting", color: "#3B82F6", bg: "bg-blue-500/15", border: "border-blue-500/40", text: "text-blue-400" },
              { id: "BREAK", name: "Break", color: "#F0B35A", bg: "bg-amber-500/15", border: "border-amber-500/40", text: "text-amber-400" },
              { id: "CREATIVE", name: "Creative", color: "#A855F7", bg: "bg-purple-500/15", border: "border-purple-500/40", text: "text-purple-400" },
            ].map((slot) => {
              const isActive = activeSlot === slot.id;
              return (
                <div
                  key={slot.id}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    isActive
                      ? `${slot.bg} ${slot.border} ring-2 ring-[#D83A50] ring-offset-1 ring-offset-[#080A0E]`
                      : "bg-[#1B222D] border-[#303A48] opacity-70"
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#778292] mb-1">
                    Slot {slot.id === "DEEPWORK" ? "01" : slot.id === "MEETING" ? "02" : slot.id === "BREAK" ? "03" : "04"}
                  </div>
                  <div className="text-xs font-bold text-[#F5F6F8]">
                    {slot.name}
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-[#A5AFBD]">
                    {isActive ? "● DOCKED & ACTIVE" : "Idle"}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-[#778292] leading-relaxed">
            * Uses the standard Web Serial protocol over 115200 baud. The browser directly communicates with the ring hardware without any third-party plugins.
          </p>
        </div>
      </section>

      {/* 4. THREE-MINUTE SETUP WALKTHROUGH */}
      <section className="page-container mb-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow block mb-2">Getting Started</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F6F8]">
            3-Minute Hardware Setup.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#11151C] border border-[#303A48] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#1B222D] border border-[#303A48] text-[#D83A50] font-mono text-xs font-bold flex items-center justify-center">
              1
            </div>
            <h4 className="font-bold text-sm text-[#F5F6F8]">Plug in via USB</h4>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Connect your Nexus Ring to your computer using the included USB-C cable. Windows loads the standard built-in CDC driver instantly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#11151C] border border-[#303A48] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#1B222D] border border-[#303A48] text-[#D83A50] font-mono text-xs font-bold flex items-center justify-center">
              2
            </div>
            <h4 className="font-bold text-sm text-[#F5F6F8]">Run the Setup</h4>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Launch <code className="font-mono text-[#F5F6F8] bg-[#1B222D] px-1 py-0.5 rounded border border-[#303A48]">Nexus-Ring-Setup-x64.exe</code>. The daemon installs quietly and auto-locks onto the serial port in under a second.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#11151C] border border-[#303A48] space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#1B222D] border border-[#303A48] text-[#D83A50] font-mono text-xs font-bold flex items-center justify-center">
              3
            </div>
            <h4 className="font-bold text-sm text-[#F5F6F8]">Dock & Focus</h4>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Rotate your metallic totem into the Deep Work slot. The app initiates your workspace layout and seals away digital distractions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATIONS & SECURITY */}
      <section className="page-container max-w-4xl mx-auto">
        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5F6F8] font-mono">
            Technical Specifications & Integrity
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A5AFBD]">
            <div className="space-y-1">
              <strong className="text-[#F5F6F8] block">Memory & Footprint:</strong>
              <span>Lightweight Rust Core running with under 45 MB of RAM and negligible CPU impact.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#F5F6F8] block">Data Privacy:</strong>
              <span>No telemetry, no tracking pixels, and no cloud synchronization of your keystrokes or open apps.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#F5F6F8] block">Credential Protection:</strong>
              <span>API keys (Gemini / OpenAI) are encrypted locally using Windows Credential Manager and SQLite keychain.</span>
            </div>
            <div className="space-y-1">
              <strong className="text-[#F5F6F8] block">Hardware Connection:</strong>
              <span>Standard USB-CDC Serial at 115200 baud, 8-N-1. Driverless plug-and-play across Windows 10/11.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
