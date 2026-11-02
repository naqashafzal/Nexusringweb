"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function SoftwarePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-28 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* 1. HERO SECTION */}
      <section className="relative page-container mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Local Workspace Daemon
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#1D1D1F]">
            Nexus Companion.
          </h1>
          <p className="text-[#6E6E73] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Nexus Companion translates physical totem events into deliberate workspace changes. It executes native desktop actions locally — muting interruptions and deploying your tools without cloud surveillance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#mode-profiles"
              className="px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white font-medium text-sm hover:bg-[#000000] transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore Mode Profiles</span>
              <ChevronRight size={14} />
            </a>
            <Link
              href="/hardware"
              className="px-8 py-3.5 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EAEAEA] transition-all text-sm font-medium flex items-center gap-2"
            >
              <span>See the Hardware</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. HERO UI MOCKUP (EXPANDED TO FULL PAGE CONTAINER 1440PX) */}
      <section className="relative page-container mb-28">
        <div className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Detected Hardware State */}
          <div className="w-full lg:w-4/12 border-b lg:border-b-0 lg:border-r border-[#E5E5E7] pb-6 lg:pb-0 lg:pr-8 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-[#6E6E73] uppercase tracking-wider mb-2 font-semibold">
              Detected Hardware State
            </span>
            <div className="text-left p-4 rounded-2xl bg-[#FDF2F4] border border-[#C93E50]/30 text-[#C93E50] font-bold text-sm flex items-center justify-between shadow-xs">
              <span className="tracking-wide">DEEP WORK</span>
              <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#C93E50] text-white">ACTIVE</span>
            </div>
            <div className="text-left p-4 rounded-2xl border border-[#E5E5E7] bg-[#F8F9FA] text-[#6E6E73] text-sm font-medium hover:bg-[#FFFFFF] transition-colors">
              CREATIVE
            </div>
            <div className="text-left p-4 rounded-2xl border border-[#E5E5E7] bg-[#F8F9FA] text-[#6E6E73] text-sm font-medium hover:bg-[#FFFFFF] transition-colors">
              MEETING
            </div>
            <div className="text-left p-4 rounded-2xl border border-[#E5E5E7] bg-[#F8F9FA] text-[#6E6E73] text-sm font-medium hover:bg-[#FFFFFF] transition-colors">
              BREAK
            </div>
          </div>

          {/* Right Column: Active Profile Rules & Real-time Logs */}
          <div className="w-full lg:w-8/12 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#6E6E73] uppercase tracking-wider font-semibold">
                Active Profile Rules (Deep Work)
              </span>
              <span className="text-[11px] font-mono text-[#34A853] bg-[#34A853]/10 px-3 py-1 rounded-full border border-[#34A853]/20 font-semibold">
                Local Execution
              </span>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#1D1D1F]">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7]">
                <CheckCircle2 size={18} className="text-[#34A853] shrink-0" />
                <span className="font-medium">Launch primary workspace: VS Code &amp; Warp Terminal</span>
              </div>
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7]">
                <CheckCircle2 size={18} className="text-[#34A853] shrink-0" />
                <span className="font-medium">Silence notifications (OS Do Not Disturb Profile)</span>
              </div>
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7]">
                <CheckCircle2 size={18} className="text-[#34A853] shrink-0" />
                <span className="font-medium">Apply selective domain filters to local browsers (x.com, youtube.com blocked)</span>
              </div>
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7]">
                <CheckCircle2 size={18} className="text-[#34A853] shrink-0" />
                <span className="font-medium">Initiate 90-minute focus session timer with glanceable status ring sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURE PIPELINE (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container mb-28 text-center">
        <span className="eyebrow block">Flow Diagram</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1D1D1F] mb-12">
          Physical state in. Digital actions out.
        </h2>
        <div className="flex flex-col items-center justify-center font-mono text-xs text-[#1D1D1F] max-w-md mx-auto bg-[#F8F9FA] p-8 border border-[#E5E5E7] rounded-3xl space-y-3 shadow-xs">
          <div className="py-3 px-6 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF] text-[#1D1D1F] font-bold w-full shadow-xs">
            NEXUS RING (PHYSICAL TOTEM)
          </div>
          <div className="text-[11px] text-[#C93E50] font-semibold">↓ HARDWARE EVENT OVER USB</div>
          <div className="py-3 px-6 rounded-2xl border border-[#C93E50]/30 bg-[#FDF2F4] text-[#C93E50] font-bold w-full shadow-xs">
            NEXUS COMPANION (LOCAL DAEMON)
          </div>
          <div className="text-[11px] text-[#34A853] font-semibold">↓ PROFILE ORCHESTRATION</div>
          <div className="py-4 px-6 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF] text-[#6E6E73] w-full text-center leading-relaxed font-sans text-xs shadow-xs">
            Apps • Site Rules • Alerts<br />Timers • Scripts • Workspaces
          </div>
        </div>
      </section>

      {/* 4. MODE PROFILES (PAGE CONTAINER 1440PX) */}
      <section id="mode-profiles" className="relative page-container mb-28 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="eyebrow block">Configurable States</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1D1D1F]">
            Every physical mode has a profile.
          </h2>
          <p className="text-base text-[#6E6E73] font-light">
            A mode profile defines what should happen when the totem moves into a specific position.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-8 md:p-10 border border-[#E5E5E7] bg-[#FFFFFF] rounded-3xl space-y-4 shadow-xs">
            <span className="text-[10px] font-mono text-[#C93E50] uppercase tracking-widest px-3 py-1 rounded-full border border-[#C93E50]/20 bg-[#FDF2F4] font-semibold">
              Slot 01 Profile
            </span>
            <h3 className="text-2xl font-bold text-[#1D1D1F]">Deep Work Profile</h3>
            <p className="text-xs text-[#6E6E73] font-light">Designed for maximum concentration and minimal visual friction.</p>
            <ul className="space-y-2.5 text-xs text-[#6E6E73] font-mono pt-2">
              <li className="flex items-center gap-2"><span>1.</span> Enable OS-level Do Not Disturb</li>
              <li className="flex items-center gap-2"><span>2.</span> Close nonessential chat applications</li>
              <li className="flex items-center gap-2"><span>3.</span> Apply configured website domain blocks</li>
              <li className="flex items-center gap-2"><span>4.</span> Launch target code editor and terminal</li>
              <li className="flex items-center gap-2"><span>5.</span> Start optional focus countdown timer</li>
            </ul>
          </div>

          <div className="p-8 md:p-10 border border-[#E5E5E7] bg-[#FFFFFF] rounded-3xl space-y-4 shadow-xs">
            <span className="text-[10px] font-mono text-[#1D1D1F] uppercase tracking-widest px-3 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] font-semibold">
              Slot 02 Profile
            </span>
            <h3 className="text-2xl font-bold text-[#1D1D1F]">Creative Profile</h3>
            <p className="text-xs text-[#6E6E73] font-light">Permissive exploration without algorithmic feed traps.</p>
            <ul className="space-y-2.5 text-xs text-[#6E6E73] font-mono pt-2">
              <li className="flex items-center gap-2"><span>1.</span> Launch Figma, Blender, or design tools</li>
              <li className="flex items-center gap-2"><span>2.</span> Open project asset folder</li>
              <li className="flex items-center gap-2"><span>3.</span> Mute non-priority alerts</li>
              <li className="flex items-center gap-2"><span>4.</span> Allow design reference and documentation sites</li>
              <li className="flex items-center gap-2"><span>5.</span> Filter social media feeds</li>
            </ul>
          </div>

          <div className="p-8 md:p-10 border border-[#E5E5E7] bg-[#FFFFFF] rounded-3xl space-y-4 shadow-xs">
            <span className="text-[10px] font-mono text-[#34A853] uppercase tracking-widest px-3 py-1 rounded-full border border-[#34A853]/20 bg-[#E6F4EA] font-semibold">
              Slot 03 Profile
            </span>
            <h3 className="text-2xl font-bold text-[#1D1D1F]">Meeting Profile</h3>
            <p className="text-xs text-[#6E6E73] font-light">Prepare communication tools and silence background audio.</p>
            <ul className="space-y-2.5 text-xs text-[#6E6E73] font-mono pt-2">
              <li className="flex items-center gap-2"><span>1.</span> Open Zoom, Teams, or Meet workspace</li>
              <li className="flex items-center gap-2"><span>2.</span> Open meeting notes or calendar agenda</li>
              <li className="flex items-center gap-2"><span>3.</span> Pause active media and background playback</li>
              <li className="flex items-center gap-2"><span>4.</span> Update team status to In a Call</li>
              <li className="flex items-center gap-2"><span>5.</span> Soften notification chime volume</li>
            </ul>
          </div>

          <div className="p-8 md:p-10 border border-[#E5E5E7] bg-[#FFFFFF] rounded-3xl space-y-4 shadow-xs">
            <span className="text-[10px] font-mono text-[#FBBC04] uppercase tracking-widest px-3 py-1 rounded-full border border-[#FBBC04]/20 bg-[#FEF7E0] font-semibold">
              Slot 04 Profile
            </span>
            <h3 className="text-2xl font-bold text-[#1D1D1F]">Break Profile</h3>
            <p className="text-xs text-[#6E6E73] font-light">Create a deliberate boundary between work and genuine rest.</p>
            <ul className="space-y-2.5 text-xs text-[#6E6E73] font-mono pt-2">
              <li className="flex items-center gap-2"><span>1.</span> Minimize work applications and editor windows</li>
              <li className="flex items-center gap-2"><span>2.</span> Silence work notifications and messages</li>
              <li className="flex items-center gap-2"><span>3.</span> Pause active focus timers</li>
              <li className="flex items-center gap-2"><span>4.</span> Initiate recovery session timer</li>
              <li className="flex items-center gap-2"><span>5.</span> Restore standard state upon totem replacement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. PRIVACY & LOCAL ARCHITECTURE (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="eyebrow block">Privacy Guarantee</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1D1D1F]">
            Local control. Zero surveillance.
          </h2>
          <p className="text-sm text-[#6E6E73] font-light">
            Your attention is personal. Nexus Companion runs natively on your machine without routing keystrokes, browser history, or window state to external servers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-8 border border-[#E5E5E7] bg-[#F8F9FA] rounded-3xl shadow-xs space-y-2">
            <h4 className="text-[#C93E50] font-bold uppercase text-[11px] font-mono tracking-widest">
              Local State Only
            </h4>
            <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
              Hardware mode detection and profile mapping run entirely on your local machine without mandatory cloud routing.
            </p>
          </div>
          <div className="p-8 border border-[#E5E5E7] bg-[#F8F9FA] rounded-3xl shadow-xs space-y-2">
            <h4 className="text-[#C93E50] font-bold uppercase text-[11px] font-mono tracking-widest">
              Native OS Automations
            </h4>
            <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
              Utilizes native system interfaces and user-defined rules rather than intrusive kernel modifications.
            </p>
          </div>
          <div className="p-8 border border-[#E5E5E7] bg-[#F8F9FA] rounded-3xl shadow-xs space-y-2">
            <h4 className="text-[#C93E50] font-bold uppercase text-[11px] font-mono tracking-widest">
              Optional Network Hooks
            </h4>
            <p className="text-xs text-[#6E6E73] leading-relaxed font-light">
              Only talks to external APIs (e.g. calendar integrations) when explicitly configured and authorized by the user.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OS SUPPORT MATRIX (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container mb-28">
        <h2 className="text-3xl font-display font-bold text-[#1D1D1F] mb-6 text-center">
          Workstation OS Support Matrix.
        </h2>
        <div className="overflow-x-auto rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] shadow-sm max-w-5xl mx-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-[#F8F9FA] border-b border-[#E5E5E7] text-[#6E6E73] uppercase text-[10px] tracking-widest">
              <tr>
                <th className="p-4 sm:p-5">Feature Target</th>
                <th className="p-4 sm:p-5">Windows</th>
                <th className="p-4 sm:p-5">macOS</th>
                <th className="p-4 sm:p-5">Linux</th>
              </tr>
            </thead>
            <tbody className="text-[#6E6E73] divide-y divide-[#E5E5E7]">
              <tr>
                <td className="p-4 sm:p-5 text-[#1D1D1F] font-bold">Hardware USB Detection</td>
                <td className="p-4 sm:p-5 text-[#34A853] font-semibold">Supported</td>
                <td className="p-4 sm:p-5 text-[#34A853] font-semibold">Supported</td>
                <td className="p-4 sm:p-5 text-[#34A853] font-semibold">Supported</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-[#1D1D1F] font-bold">App Launch / Close</td>
                <td className="p-4 sm:p-5">In Development</td>
                <td className="p-4 sm:p-5">In Development</td>
                <td className="p-4 sm:p-5">In Development</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-[#1D1D1F] font-bold">Website Filter Rules</td>
                <td className="p-4 sm:p-5">In Development</td>
                <td className="p-4 sm:p-5">In Development</td>
                <td className="p-4 sm:p-5">In Development</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-[#1D1D1F] font-bold">Do Not Disturb Sync</td>
                <td className="p-4 sm:p-5">In Development</td>
                <td className="p-4 sm:p-5">In Development</td>
                <td className="p-4 sm:p-5">Planned</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-[#1D1D1F] font-bold">Custom Shell Scripts</td>
                <td className="p-4 sm:p-5">PowerShell</td>
                <td className="p-4 sm:p-5">Zsh / Bash</td>
                <td className="p-4 sm:p-5">Bash / Python</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. CTA (PAGE CONTAINER 1440PX) */}
      <section className="relative page-container text-center bg-[#F5F5F7] border border-[#E5E5E7] p-12 md:p-20 rounded-3xl shadow-xs">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1D1D1F] mb-4">
          Test early builds of Nexus Companion.
        </h2>
        <p className="text-sm md:text-base text-[#6E6E73] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Sign up to follow companion software milestones, test daemon releases, and help shape supported profile integrations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white font-medium text-sm hover:bg-[#000000] transition-all shadow-sm cursor-pointer"
          >
            Join Companion Waitlist
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
