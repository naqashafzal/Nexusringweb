"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Download } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";
import SoftwareScreenshotsGallery from "@/components/SoftwareScreenshotsGallery";

export default function SoftwarePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Nexus Ring Emblem"
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain"
            />
            <span>Digital Execution Layer</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            NEXUS COMPANION.<br />
            <span className="text-[#A5AFBD]">THE LOCAL WORKSPACE DAEMON.</span>
          </h1>
          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Nexus Companion translates physical totem events into deliberate workspace changes. It executes native desktop actions locally—muting interruptions and deploying your tools without cloud surveillance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/download"
              className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2"
            >
              <Download size={16} />
              <span>Download Core Daemon</span>
            </Link>
            <a
              href="#mode-profiles"
              className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#11151C] text-white hover:border-[#D83A50] transition-all font-mono text-sm flex items-center gap-2"
            >
              Explore Profiles <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. LIVE INTERFACE SHOWCASE (SCREENSHOTS GALLERY) */}
      <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-10 space-y-2">
          <span className="eyebrow block">Native UI Showcase</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Designed for zero cognitive overhead.
          </h2>
          <p className="text-[#A5AFBD] text-sm md:text-base max-w-xl mx-auto font-light">
            Explore high-resolution captures of the active companion app, configuration matrices, and AI engine interfaces.
          </p>
        </div>
        <SoftwareScreenshotsGallery />
      </section>

      {/* 3. HERO UI MOCKUP */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#303A48] pb-6 md:pb-0 md:pr-6 flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/branding/nexus-app-icon.png"
                alt="Nexus App Icon"
                width={28}
                height={28}
                className="rounded-lg object-contain"
              />
              <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-wider">
                Nexus Daemon v0.4.2
              </span>
            </div>
            <div className="text-left p-3.5 rounded-xl bg-[#1B222D] border border-[#D83A50] text-white font-bold text-xs flex items-center justify-between">
              <span>DEEP WORK</span>
              <span className="text-[9px] font-mono text-[#D83A50]">ACTIVE</span>
            </div>
            <div className="text-left p-3.5 rounded-xl border border-[#303A48] text-[#A5AFBD] text-xs">
              CREATIVE
            </div>
            <div className="text-left p-3.5 rounded-xl border border-[#303A48] text-[#A5AFBD] text-xs">
              MEETING
            </div>
            <div className="text-left p-3.5 rounded-xl border border-[#303A48] text-[#A5AFBD] text-xs">
              BREAK
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-wider">
                Active Profile Rules (Deep Work)
              </span>
              <span className="text-[10px] font-mono text-[#35C98A] bg-[#35C98A]/10 px-2 py-0.5 rounded border border-[#35C98A]/30">
                Local Execution
              </span>
            </div>
            <div className="space-y-2.5 font-mono text-xs text-[#F5F6F8]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <CheckCircle2 size={15} className="text-[#35C98A]" />
                <span>Launch primary workspace: VS Code &amp; Warp Terminal</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <CheckCircle2 size={15} className="text-[#35C98A]" />
                <span>Silence notifications (OS Do Not Disturb)</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <CheckCircle2 size={15} className="text-[#35C98A]" />
                <span>Apply selective domain filters to local browsers</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#080A0E] border border-[#303A48]">
                <CheckCircle2 size={15} className="text-[#35C98A]" />
                <span>Initiate 90-minute focus session timer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE PIPELINE */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28 text-center">
        <span className="eyebrow block">Flow Diagram</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">
          Physical state in. Digital actions out.
        </h2>
        <div className="flex flex-col items-center justify-center font-mono text-xs text-[#F5F6F8] max-w-sm mx-auto bg-[#11151C] p-8 border border-[#303A48] rounded-3xl space-y-2">
          <div className="py-2.5 px-6 rounded-xl border border-[#303A48] bg-[#080A0E] text-white font-bold w-full flex items-center justify-center gap-2">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Totem Emblem"
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain"
            />
            <span>NEXUS RING (PHYSICAL TOTEM)</span>
          </div>
          <div className="text-[10px] text-[#D83A50]">↓ HARDWARE EVENT OVER USB</div>
          <div className="py-2.5 px-6 rounded-xl border border-[#D83A50] bg-[#D83A50]/10 text-white font-bold w-full">
            NEXUS COMPANION (LOCAL DAEMON)
          </div>
          <div className="text-[10px] text-[#35C98A]">↓ PROFILE ORCHESTRATION</div>
          <div className="py-3 px-6 rounded-xl border border-[#303A48] bg-[#080A0E] text-[#A5AFBD] w-full text-center leading-relaxed">
            Apps • Site Rules • Alerts<br />Timers • Scripts • Workspaces
          </div>
        </div>
      </section>

      {/* 5. MODE PROFILES */}
      <section id="mode-profiles" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-16">
          <span className="eyebrow block">Profiles</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Four Operating Profiles
          </h2>
          <p className="text-[#A5AFBD] text-base max-w-xl mx-auto mt-4 font-light">
            Each physical position triggers an associated profile. Each profile configures your digital environment to match that mode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-4">
            <div className="text-xs font-mono text-[#D83A50] font-bold">SLOT 01 // DEEP WORK</div>
            <h3 className="text-xl font-display font-bold text-white">Uninterrupted Creation</h3>
            <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">
              Launches priority dev tools or creative suites. Mutes all incoming notifications, blocks distracting domains, and tracks uninterrupted focus duration.
            </p>
          </div>
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-4">
            <div className="text-xs font-mono text-[#35C98A] font-bold">SLOT 02 // CREATIVE</div>
            <h3 className="text-xl font-display font-bold text-white">Exploratory Flow</h3>
            <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">
              Launches inspiration tools, browser research workspaces, and ambient audio playlists without hard domain blocking.
            </p>
          </div>
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-4">
            <div className="text-xs font-mono text-[#F0B35A] font-bold">SLOT 03 // MEETING</div>
            <h3 className="text-xl font-display font-bold text-white">Communication Mode</h3>
            <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">
              Opens calendar views and video conferencing tools while keeping background apps suppressed to minimize in-call distraction.
            </p>
          </div>
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-4">
            <div className="text-xs font-mono text-[#778292] font-bold">SLOT 04 // BREAK</div>
            <h3 className="text-xl font-display font-bold text-white">Deliberate Rest</h3>
            <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">
              Dims screen brightness, pauses time logging, and triggers gentle stretch or eye-rest interval reminders.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OS SUPPORT TABLE */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-12">
          <span className="eyebrow block">Compatibility</span>
          <h2 className="text-3xl font-display font-bold text-white">
            Operating System Support
          </h2>
        </div>
        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#303A48] text-[#778292]">
                <th className="p-4">CAPABILITY</th>
                <th className="p-4">WINDOWS 10/11</th>
                <th className="p-4">MACOS (VENTURA+)</th>
                <th className="p-4">LINUX (UBUNTU/FEDORA)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#303A48] text-[#A5AFBD]">
              <tr>
                <td className="p-4 text-white font-bold">Hardware USB Detection</td>
                <td className="p-4 text-[#35C98A]">Supported</td>
                <td className="p-4 text-[#35C98A]">Supported</td>
                <td className="p-4 text-[#35C98A]">Supported</td>
              </tr>
              <tr>
                <td className="p-4 text-white font-bold">App Launch / Close</td>
                <td className="p-4">In Development</td>
                <td className="p-4">In Development</td>
                <td className="p-4">In Development</td>
              </tr>
              <tr>
                <td className="p-4 text-white font-bold">Website Filter Rules</td>
                <td className="p-4">In Development</td>
                <td className="p-4">In Development</td>
                <td className="p-4">In Development</td>
              </tr>
              <tr>
                <td className="p-4 text-white font-bold">Do Not Disturb Sync</td>
                <td className="p-4">In Development</td>
                <td className="p-4">In Development</td>
                <td className="p-4">Planned</td>
              </tr>
              <tr>
                <td className="p-4 text-white font-bold">Custom Shell Scripts</td>
                <td className="p-4">PowerShell</td>
                <td className="p-4">Zsh / Bash</td>
                <td className="p-4">Bash / Python</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#11151C] border border-[#303A48] p-12 md:p-20 rounded-3xl">
        <div className="flex justify-center mb-6">
          <Image
            src="/branding/nexus-logo-vertical.png"
            alt="Nexus Ring Vertical Mark"
            width={64}
            height={56}
            className="h-14 w-auto object-contain opacity-90"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Test early builds of Nexus Companion.
        </h2>
        <p className="text-sm md:text-base text-[#A5AFBD] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Sign up to follow companion software milestones, test daemon releases, and help shape supported profile integrations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/download"
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2 cursor-pointer"
          >
            <Download size={16} />
            <span>Download Companion v0.1.0</span>
          </Link>
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#1B222D] text-[#F5F6F8] hover:border-[#D83A50] transition-colors font-mono text-sm cursor-pointer"
          >
            Join Early Access
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
