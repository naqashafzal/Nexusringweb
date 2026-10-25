"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Monitor, Smartphone, Home, Terminal, Zap, CheckCircle2, Sliders, PlayCircle, EyeOff, LayoutTemplate } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function SoftwarePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-[11px] font-mono tracking-widest uppercase mb-4">
            The Digital Execution
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            YOUR MIND DECIDES.<br /><span className="text-slate-400">THE MACHINE OBEYS.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            The Nexus Companion software is the silent bodyguard for your attention. It translates your physical intent into absolute digital boundaries—stripping away distractions and deploying the tools you need instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a href="#mode-profiles" className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold text-sm tracking-wide hover:bg-[#00ffaa] transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2">
              Explore Mode Profiles <ChevronRight size={16} />
            </a>
            <Link href="/hardware" className="px-8 py-4 rounded-xl border border-slate bg-matte text-white hover:bg-slate transition-all font-mono text-sm flex items-center gap-2">
              See the Hardware
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. HERO UI MOCKUP */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="rounded-2xl border border-slate bg-matte p-6 shadow-2xl flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 border-r border-slate pr-6 flex flex-col gap-2">
            <span className="text-[10px] font-mono text-slate-500 mb-2">CONCEPT PREVIEW · MODE SELECTOR</span>
            <div className="text-left p-3 rounded-lg bg-accent/10 border border-accent/30 text-accent font-bold">DEEP WORK (Preview)</div>
            <div className="text-left p-3 rounded-lg hover:bg-slate text-slate-400">CREATIVE</div>
            <div className="text-left p-3 rounded-lg hover:bg-slate text-slate-400">MEETING</div>
            <div className="text-left p-3 rounded-lg hover:bg-slate text-slate-400">BREAK</div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-[10px] font-mono text-slate-500 mb-4 block">ACTIVE PROFILE: DEEP WORK</span>
            <div className="space-y-3 font-mono text-sm text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded bg-vantablack border border-slate"><CheckCircle2 size={16} className="text-accent" /> Open VS Code & Terminal</div>
              <div className="flex items-center gap-3 p-3 rounded bg-vantablack border border-slate"><CheckCircle2 size={16} className="text-accent" /> Close Discord</div>
              <div className="flex items-center gap-3 p-3 rounded bg-vantablack border border-slate"><CheckCircle2 size={16} className="text-accent" /> Block selected sites</div>
              <div className="flex items-center gap-3 p-3 rounded bg-vantablack border border-slate"><CheckCircle2 size={16} className="text-accent" /> Enable DND</div>
              <div className="flex items-center gap-3 p-3 rounded bg-vantablack border border-slate"><CheckCircle2 size={16} className="text-accent" /> Start 90-minute timer</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURE DIAGRAM */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16">Physical state in. Digital actions out.</h2>
        <div className="flex flex-col items-center justify-center font-mono text-sm text-slate-300 max-w-sm mx-auto bg-matte p-8 border border-slate rounded-3xl">
          <div className="py-2 px-6 rounded-full border border-slate bg-vantablack text-white font-bold">NEXUS RING</div>
          <div className="h-6 w-px bg-slate my-2" />
          <div className="text-[10px] text-accent">MODE EVENT</div>
          <div className="h-6 w-px bg-slate my-2" />
          <div className="py-2 px-6 rounded-full border border-accent bg-accent/10 text-white font-bold">NEXUS COMPANION</div>
          <div className="h-6 w-px bg-slate my-2" />
          <div className="text-[10px] text-accent">PROFILE ENGINE</div>
          <div className="h-6 w-px bg-slate my-2" />
          <div className="py-2 px-6 rounded border border-slate bg-vantablack text-white font-bold w-full">
            Apps • Websites • Notifications<br/>Timers • Scripts • Integrations
          </div>
        </div>
      </section>

      {/* 4. SOFTWARE EXAMPLES */}
      <section id="mode-profiles" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Every physical mode has a profile.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A mode profile defines what should happen when the totem moves into a specific position.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Deep Work Profile</h3>
            <p className="text-sm text-slate-400 mb-6">Completed in one mode transition.</p>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              <li>1. enable DND</li>
              <li>2. close distracting apps</li>
              <li>3. block selected websites</li>
              <li>4. open primary workspace</li>
              <li>5. start optional timer</li>
              <li>6. update supported status</li>
              <li>7. trigger optional workspace automation</li>
            </ul>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Creative Profile</h3>
            <p className="text-sm text-slate-400 mb-6">Creative mode doesn&apos;t need the same restrictions as Deep Work. Each profile can behave differently.</p>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              <li>- Open Blender & PureRef</li>
              <li>- Open project folder</li>
              <li>- Start music</li>
              <li>- Mute nonessential alerts</li>
              <li>- Allow reference sites</li>
              <li>- Block social feeds</li>
            </ul>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Meeting Profile</h3>
            <p className="text-sm text-slate-400 mb-6">Adjust supported audio settings and prepare communication tools.</p>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              <li>- Open Zoom/Teams & Notes</li>
              <li>- Pause music</li>
              <li>- Enable meeting notification profile</li>
              <li>- Update status</li>
              <li>- Trigger meeting lighting</li>
            </ul>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Break Profile</h3>
            <p className="text-sm text-slate-400 mb-6">Temporarily quiet your work environment so recovery remains separate from work.</p>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
              <li>- Pause work notifications</li>
              <li>- Hide selected work apps</li>
              <li>- Stop focus timer</li>
              <li>- Change status</li>
              <li>- Start break environment</li>
              <li>- Restore normal rules when leaving Break</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. PRIVACY & ARCHITECTURE */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Total privacy. Zero surveillance.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Your attention is your most valuable asset. The Nexus Companion runs entirely locally—no remote servers, no cloud dependencies, and absolutely no surveillance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <h4 className="text-accent font-bold mb-2 uppercase text-[11px] tracking-widest">Core Mode Data</h4>
            <p className="text-white">Processed locally.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <h4 className="text-accent font-bold mb-2 uppercase text-[11px] tracking-widest">Local Automation</h4>
            <p className="text-white">Runs on the user&apos;s machine using native OS automation.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <h4 className="text-accent font-bold mb-2 uppercase text-[11px] tracking-widest">External Integrations</h4>
            <p className="text-white">Only communicate with external services when explicitly enabled.</p>
          </div>
        </div>
      </section>

      {/* 6. OS SUPPORT MATRIX */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Built for the workstation.</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate bg-matte">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-vantablack border-b border-slate text-slate-500 uppercase text-[10px] tracking-widest">
              <tr>
                <th className="p-4">Capability</th>
                <th className="p-4">Windows</th>
                <th className="p-4">macOS</th>
                <th className="p-4">Linux</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 divide-y divide-slate/50">
              <tr><td className="p-4">Mode detection</td><td className="p-4 text-white font-bold">Target</td><td className="p-4 text-white font-bold">Target</td><td className="p-4 text-white font-bold">Target</td></tr>
              <tr><td className="p-4">App launch/close</td><td className="p-4">Yes/Dev</td><td className="p-4">Yes/Dev</td><td className="p-4">Yes/Dev</td></tr>
              <tr><td className="p-4">Website rules</td><td className="p-4">Dev</td><td className="p-4">Dev</td><td className="p-4">Dev</td></tr>
              <tr><td className="p-4">DND control</td><td className="p-4">Dev</td><td className="p-4">Dev</td><td className="p-4">Varies</td></tr>
              <tr><td className="p-4">Custom scripts</td><td className="p-4">Planned</td><td className="p-4">Planned</td><td className="p-4">Planned</td></tr>
              <tr><td className="p-4">Native installer</td><td className="p-4">Dev</td><td className="p-4">Dev</td><td className="p-4">Planned</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. DETAILED FEATURES */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Block only what you choose.</h3>
            <p className="text-sm text-slate-400 mb-4">Users create mode-specific site rules. Deep Work might block YouTube and X but allow Stack Overflow. Creative might allow Pinterest. Meeting might have no restrictions.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Your apps can follow your mode too.</h3>
            <p className="text-sm text-slate-400 mb-4">Open, close, minimize, bring to front, open project files, or launch URLs depending on the active mode.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Reduce interruption.</h3>
            <p className="text-sm text-slate-400 mb-4">Profiles could support Normal, Priority Only, or Do Not Disturb notification states.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Focus when you want a timer.</h3>
            <p className="text-sm text-slate-400 mb-4">Allow No timer, Pomodoro, 50-minute block, 90-minute block, or Custom. Nexus Ring does not force one productivity methodology.</p>
          </div>
        </div>
      </section>

      {/* 8. DEVELOPER PREVIEW / RECIPES */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Power users can go deeper.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Conceptually allow PowerShell, Bash, Python, custom executables, webhooks, REST calls, and local commands. (Advanced automations may require elevated OS permissions.)</p>
        </div>
        <div className="bg-vantablack p-6 rounded-2xl border border-slate font-mono text-sm">
          <span className="text-[10px] text-accent2 block mb-4">DEVELOPER PREVIEW: CONCEPTUAL API EXAMPLE</span>
          <pre className="text-slate-300 overflow-x-auto">
{`mode.changed

mode: deep_work
source: nexus_ring
profile: coding_session

// Actions executed:
enable_dnd
launch_workspace
apply_site_rules
update_status`}
          </pre>
        </div>
      </section>

      {/* 9. AI & TRANSITIONS */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">AI should be optional.</h3>
            <p className="text-sm text-slate-400 mb-2">Nexus Ring does not need AI to detect a physical mode or execute a profile. The core experience is deterministic and user-configured.</p>
            <span className="text-[10px] bg-slate/50 px-2 py-1 rounded">EXPERIMENTAL</span> <span className="text-xs text-slate-500">Future local context models.</span>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Predictable first. Intelligent second.</h3>
            <p className="text-sm text-slate-400">Users should know exactly what a physical mode will do. The core profile engine should be predictable, editable, reversible, and local.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Understand transitions.</h3>
            <p className="text-sm text-slate-400">Moving from Deep Work to Meeting should restore Deep Work-specific rules, keep globally blocked items, and apply Meeting profiles.</p>
          </div>
        </div>
      </section>

      {/* 10. OFFLINE & FAIL-SAFE */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">Focus should still work when the internet doesn&apos;t.</h3>
            <p className="text-slate-400 mb-4">Core local profiles should continue to function without internet. Works offline: mode detection, local app launching/closing, local timers, local scripts, local site rules.</p>
            <p className="text-slate-400">May require internet: Slack status, Spotify, cloud calendar, third-party APIs.</p>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">You stay in control.</h3>
            <ul className="space-y-2 text-slate-400 list-disc list-inside">
              <li>Emergency exit.</li>
              <li>Disable hardware temporarily.</li>
              <li>Restore normal system state.</li>
              <li>Prevent broken scripts from locking the desktop.</li>
              <li>Manual override & Safe startup mode.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. SOFTWARE STATUS MATRIX */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Software Development Status</h2>
        <div className="space-y-2 font-mono text-sm">
          {[
            { f: "Hardware event listener", s: "PROTOTYPE" },
            { f: "Desktop daemon", s: "IN DEVELOPMENT" },
            { f: "Profile engine", s: "IN DEVELOPMENT" },
            { f: "App automation", s: "IN DEVELOPMENT" },
            { f: "Website rules", s: "IN DEVELOPMENT" },
            { f: "Notification control", s: "IN DEVELOPMENT" },
            { f: "Custom scripts", s: "PLANNED" },
            { f: "Home Assistant", s: "PLANNED" },
            { f: "Mobile companion", s: "PLANNED" },
            { f: "Local AI context", s: "EXPERIMENTAL" }
          ].map(row => (
            <div key={row.f} className="flex justify-between p-3 border-b border-slate bg-matte">
              <span className="text-slate-300">{row.f}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] ${row.s.includes('PROTOTYPE') ? 'bg-amber/20 text-amber' : row.s === 'IN DEVELOPMENT' ? 'bg-accent/20 text-accent' : 'bg-slate text-slate-400'}`}>
                {row.s}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Software FAQ</h2>
        <div className="space-y-6">
          {[
            { q: "Does Nexus Companion need the cloud?", a: "Core automation is intended to run locally. Enabled third-party integrations may require internet access." },
            { q: "Does Nexus Ring monitor everything I do?", a: "The core system does not need continuous screen monitoring to detect physical modes or execute profiles." },
            { q: "Is AI required?", a: "No. Core mode automation should remain deterministic and user controlled." },
            { q: "Can I run my own scripts?", a: "Custom local automations are part of the advanced software direction." },
            { q: "Does it work offline?", a: "Core local functions are intended to work offline. Cloud integrations will require connectivity." },
            { q: "Can I undo a mode?", a: "Yes. The software should always provide a manual exit and restore path." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-slate pb-4">
              <h4 className="text-white font-bold mb-2">{faq.q}</h4>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 13. CTA */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-matte border border-slate p-12 md:p-24 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
          STOP FIGHTING YOUR COMPUTER.
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          You have better things to do than manage tabs, notifications, and blockers. Make the decision once.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold tracking-wide hover:bg-[#00ffaa] transition-all">
            Join Early Access
          </button>
          <Link href="/hardware" className="px-8 py-4 rounded-xl border border-slate text-white hover:bg-slate transition-all font-mono text-sm flex items-center gap-2">
            Explore Hardware
          </Link>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
