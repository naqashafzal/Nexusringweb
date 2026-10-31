"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function SoftwarePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D83A50]" />
            Digital Execution Layer
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            NEXUS COMPANION.<br />
            <span className="text-[#A5AFBD]">THE LOCAL WORKSPACE DAEMON.</span>
          </h1>
          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Nexus Companion translates physical totem events into deliberate workspace changes. It executes native desktop actions locally—muting interruptions and deploying your tools without cloud surveillance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#mode-profiles"
              className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2"
            >
              Explore Mode Profiles <ChevronRight size={16} />
            </a>
            <Link
              href="/hardware"
              className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#11151C] text-white hover:border-[#D83A50] transition-all font-mono text-sm flex items-center gap-2"
            >
              See the Hardware
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. HERO UI MOCKUP */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#303A48] pb-6 md:pb-0 md:pr-6 flex flex-col gap-2">
            <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-wider mb-2">
              Detected Hardware State
            </span>
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

      {/* 3. ARCHITECTURE PIPELINE */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28 text-center">
        <span className="eyebrow block">Flow Diagram</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">
          Physical state in. Digital actions out.
        </h2>
        <div className="flex flex-col items-center justify-center font-mono text-xs text-[#F5F6F8] max-w-sm mx-auto bg-[#11151C] p-8 border border-[#303A48] rounded-3xl space-y-2">
          <div className="py-2.5 px-6 rounded-xl border border-[#303A48] bg-[#080A0E] text-white font-bold w-full">
            NEXUS RING (PHYSICAL TOTEM)
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

      {/* 4. MODE PROFILES */}
      <section id="mode-profiles" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="eyebrow block">Configurable States</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Every physical mode has a profile.
          </h2>
          <p className="text-sm text-[#A5AFBD] font-light">
            A mode profile defines what should happen when the totem moves into a specific position.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#D83A50]/30 bg-[#D83A50]/10">
              Slot 01 Profile
            </span>
            <h3 className="text-2xl font-bold text-white">Deep Work Profile</h3>
            <p className="text-xs text-[#A5AFBD]">Designed for maximum concentration and minimal visual friction.</p>
            <ul className="space-y-2 text-xs text-[#A5AFBD] font-mono pt-2">
              <li>1. Enable OS-level Do Not Disturb</li>
              <li>2. Close nonessential chat applications</li>
              <li>3. Apply configured website domain blocks</li>
              <li>4. Launch target code editor and terminal</li>
              <li>5. Start optional focus countdown timer</li>
            </ul>
          </div>

          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
            <span className="text-[10px] font-mono text-white uppercase tracking-widest px-2.5 py-0.5 rounded border border-white/30 bg-white/10">
              Slot 02 Profile
            </span>
            <h3 className="text-2xl font-bold text-white">Creative Profile</h3>
            <p className="text-xs text-[#A5AFBD]">Permissive exploration without algorithmic feed traps.</p>
            <ul className="space-y-2 text-xs text-[#A5AFBD] font-mono pt-2">
              <li>1. Launch Figma, Blender, or design tools</li>
              <li>2. Open project asset folder</li>
              <li>3. Mute non-priority alerts</li>
              <li>4. Allow design reference and documentation sites</li>
              <li>5. Filter social media feeds</li>
            </ul>
          </div>

          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
            <span className="text-[10px] font-mono text-[#35C98A] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#35C98A]/30 bg-[#35C98A]/10">
              Slot 03 Profile
            </span>
            <h3 className="text-2xl font-bold text-white">Meeting Profile</h3>
            <p className="text-xs text-[#A5AFBD]">Prepare communication tools and silence background audio.</p>
            <ul className="space-y-2 text-xs text-[#A5AFBD] font-mono pt-2">
              <li>1. Open Zoom, Teams, or Meet workspace</li>
              <li>2. Open meeting notes or calendar agenda</li>
              <li>3. Pause active media and background playback</li>
              <li>4. Update team status to In a Call</li>
              <li>5. Soften notification chime volume</li>
            </ul>
          </div>

          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
            <span className="text-[10px] font-mono text-[#F0B35A] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#F0B35A]/30 bg-[#F0B35A]/10">
              Slot 04 Profile
            </span>
            <h3 className="text-2xl font-bold text-white">Break Profile</h3>
            <p className="text-xs text-[#A5AFBD]">Create a deliberate boundary between work and genuine rest.</p>
            <ul className="space-y-2 text-xs text-[#A5AFBD] font-mono pt-2">
              <li>1. Minimize work applications and editor windows</li>
              <li>2. Silence work notifications and messages</li>
              <li>3. Pause active focus timers</li>
              <li>4. Initiate recovery session timer</li>
              <li>5. Restore standard state upon totem replacement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. PRIVACY & LOCAL ARCHITECTURE */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="eyebrow block">Privacy Guarantee</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Local control. Zero surveillance.
          </h2>
          <p className="text-xs sm:text-sm text-[#A5AFBD] font-light">
            Your attention is personal. Nexus Companion runs natively on your machine without routing keystrokes, browser history, or window state to external servers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 border border-[#303A48] bg-[#11151C] rounded-2xl">
            <h4 className="text-[#D83A50] font-bold mb-2 uppercase text-[11px] font-mono tracking-widest">
              Local State Only
            </h4>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Hardware mode detection and profile mapping run entirely on your local machine.
            </p>
          </div>
          <div className="p-6 border border-[#303A48] bg-[#11151C] rounded-2xl">
            <h4 className="text-[#D83A50] font-bold mb-2 uppercase text-[11px] font-mono tracking-widest">
              Native OS Automations
            </h4>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Utilizes native system interfaces and user-defined rules rather than intrusive kernel modifications.
            </p>
          </div>
          <div className="p-6 border border-[#303A48] bg-[#11151C] rounded-2xl">
            <h4 className="text-[#D83A50] font-bold mb-2 uppercase text-[11px] font-mono tracking-widest">
              Optional Network Hooks
            </h4>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Only talks to external APIs (e.g. calendar integrations) when explicitly configured by the user.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OS SUPPORT MATRIX */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-28">
        <h2 className="text-3xl font-display font-bold text-white mb-6 text-center">
          Workstation OS Support Matrix.
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#303A48] bg-[#11151C]">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-[#080A0E] border-b border-[#303A48] text-[#A5AFBD] uppercase text-[10px] tracking-widest">
              <tr>
                <th className="p-4">Feature Target</th>
                <th className="p-4">Windows</th>
                <th className="p-4">macOS</th>
                <th className="p-4">Linux</th>
              </tr>
            </thead>
            <tbody className="text-[#A5AFBD] divide-y divide-[#303A48]">
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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Test early builds of Nexus Companion.
        </h2>
        <p className="text-sm md:text-base text-[#A5AFBD] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Sign up to follow companion software milestones, test daemon releases, and help shape supported profile integrations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] cursor-pointer"
          >
            Join Companion Waitlist
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
