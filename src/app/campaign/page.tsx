"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Zap, Target, Box, Code2, PlayCircle, Settings, HardDrive } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function CampaignPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-[11px] font-mono tracking-widest uppercase mb-4">
            The Mission
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            JOIN THE REBELLION<br /><span className="text-slate-400">AGAINST DISTRACTION.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            We are bringing the Nexus Ring into reality. This isn't just about launching a product; it's about reclaiming our time, our focus, and our minds. Back the project and secure your lifeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold text-sm tracking-wide hover:bg-[#00ffaa] transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2">
              Join Launch List <ChevronRight size={16} />
            </button>
            <a href="#demo" className="px-8 py-4 rounded-xl border border-slate bg-matte text-white hover:bg-slate transition-all font-mono text-sm flex items-center gap-2">
              <PlayCircle size={16} /> Watch Prototype Demo
            </a>
          </div>
          <p className="text-[10px] font-mono text-slate-500 mt-4">No payment required today.</p>
        </motion.div>
      </section>

      {/* 2. DEMO & STORY */}
      <section id="demo" className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="aspect-video bg-matte border border-slate rounded-3xl flex flex-col items-center justify-center shadow-2xl mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
          <PlayCircle size={64} className="text-white opacity-80 z-20 group-hover:scale-110 transition-transform cursor-pointer" />
          <p className="mt-4 font-mono text-sm text-slate-300 z-20">See the idea working.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Why we are fighting back.</h2>
            <p className="text-slate-400 mb-4">The problem isn't your discipline. The problem is that billion-dollar companies have spent decades figuring out how to hijack the exact same screens you use to do your life's work.</p>
            <p className="text-slate-400 mb-4">Nexus Ring is our physical counter-measure. A concrete boundary between what you intend to do, and the digital noise trying to stop you.</p>
            <p className="text-white font-bold">You decide. The totem enforces it.</p>
          </div>
          <div className="p-6 bg-matte border border-slate rounded-2xl flex flex-col items-center justify-center font-mono text-sm text-center">
            <span className="text-white font-bold">MOVE TOTEM</span>
            <span className="text-slate-500 my-1">↓</span>
            <span className="text-accent">SELECT MODE (Deep Work, Creative, Meeting, Break)</span>
            <span className="text-slate-500 my-1">↓</span>
            <span className="text-white">NEXUS COMPANION RECEIVES MODE</span>
            <span className="text-slate-500 my-1">↓</span>
            <span className="text-accent2">PROFILE RUNS</span>
            <span className="text-slate-500 my-1">↓</span>
            <span className="text-white font-bold">YOUR ENVIRONMENT CHANGES</span>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT STATUS */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Where the project stands today.</h2>
        <div className="space-y-2 font-mono text-sm">
          {[
            { f: "Product concept", s: "COMPLETE", c: "bg-slate text-slate-300" },
            { f: "Industrial design", s: "PROTOTYPE", c: "bg-amber/20 text-amber" },
            { f: "3D-printable enclosure", s: "PROTOTYPE", c: "bg-amber/20 text-amber" },
            { f: "Hall sensor testing", s: "TESTING", c: "bg-amber/20 text-amber" },
            { f: "ESP32 firmware", s: "IN DEVELOPMENT", c: "bg-accent/20 text-accent" },
            { f: "Custom PCB", s: "IN DEVELOPMENT", c: "bg-accent/20 text-accent" },
            { f: "Desktop companion", s: "IN DEVELOPMENT", c: "bg-accent/20 text-accent" },
            { f: "Mobile companion", s: "PLANNED", c: "bg-slate/50 text-slate-400" },
            { f: "Manufacturing validation", s: "PLANNED", c: "bg-slate/50 text-slate-400" },
            { f: "Campaign production", s: "PRE-LAUNCH", c: "bg-purple/20 text-purple font-bold" }
          ].map(row => (
            <div key={row.f} className="flex justify-between p-3 border-b border-slate bg-matte">
              <span className="text-slate-300">{row.f}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] ${row.c}`}>{row.s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CROWDFUNDING TIERS */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white">Choose your tier.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Maker Tier */}
          <div className="p-8 border border-slate bg-matte rounded-3xl relative overflow-hidden hover:border-accent/50 transition-colors">
            <span className="absolute top-4 right-4 bg-slate/20 text-slate-400 px-2 py-1 rounded text-[10px] font-mono tracking-widest">DIGITAL</span>
            <h3 className="text-2xl font-bold text-white mb-2">MAKER</h3>
            <div className="text-4xl font-display font-black text-white mb-4">$15</div>
            <p className="text-accent font-bold mb-4">Print your own Nexus Ring.</p>
            <p className="text-sm text-slate-400 mb-6 min-h-[40px]">Target: 3D printing enthusiasts and DIY builders.</p>
            <ul className="space-y-2 text-sm text-slate-300 mb-8 list-disc list-inside">
              <li>Digital enclosure files</li>
              <li>Print profiles</li>
              <li>Bill of materials</li>
              <li>Assembly guide</li>
              <li>Build documentation</li>
              <li>Firmware/software access</li>
            </ul>
            <p className="text-[10px] text-slate-500 font-mono mb-4 text-center">Estimated delivery: campaign delivery schedule</p>
            <button className="w-full py-3 rounded-lg border border-slate bg-vantablack text-white font-bold hover:bg-slate transition-colors">Select Tier</button>
          </div>

          {/* Hacker Tier */}
          <div className="p-8 border border-accent/40 bg-matte rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(0,255,157,0.1)]">
            <span className="absolute top-4 right-4 bg-accent/20 text-accent px-2 py-1 rounded text-[10px] font-mono tracking-widest">DIY HARDWARE</span>
            <h3 className="text-2xl font-bold text-white mb-2">HACKER</h3>
            <div className="text-4xl font-display font-black text-white mb-4">$49</div>
            <p className="text-accent font-bold mb-4">We supply the electronics. You build the body.</p>
            <p className="text-sm text-slate-400 mb-6 min-h-[40px]">Target: users with a 3D printer who do not want to source every component.</p>
            <ul className="space-y-2 text-sm text-slate-300 mb-8 list-disc list-inside">
              <li>Official electronics package</li>
              <li>Hall sensor components</li>
              <li>Magnets & LED components</li>
              <li>Digital Maker files</li>
              <li>Software access</li>
            </ul>
            <p className="text-[10px] text-slate-500 font-mono mb-4 text-center">Shipping/taxes calculated at checkout. Assembly required.</p>
            <button className="w-full py-3 rounded-lg bg-accent text-[#001a0a] font-bold hover:bg-[#00ffaa] transition-colors">Select Tier</button>
          </div>

          {/* Pro Tier */}
          <div className="p-8 border border-slate bg-matte rounded-3xl relative overflow-hidden hover:border-purple/50 transition-colors">
            <span className="absolute top-4 right-4 bg-purple/20 text-purple px-2 py-1 rounded text-[10px] font-mono tracking-widest">FULLY ASSEMBLED</span>
            <h3 className="text-2xl font-bold text-white mb-2">PRO</h3>
            <div className="text-4xl font-display font-black text-white mb-4">$129</div>
            <p className="text-purple font-bold mb-4">Fully assembled. Ready to use.</p>
            <p className="text-sm text-slate-400 mb-6 min-h-[40px]">Target: developers, designers, founders, and non-makers.</p>
            <ul className="space-y-2 text-sm text-slate-300 mb-8 list-disc list-inside">
              <li>Assembled Nexus Ring</li>
              <li>Weighted magnetic totem</li>
              <li>USB-C cable</li>
              <li>Packaging & setup guide</li>
              <li>Software access</li>
            </ul>
            <p className="text-[10px] text-slate-500 font-mono mb-4 text-center">Shipping/taxes calculated at checkout.</p>
            <button className="w-full py-3 rounded-lg border border-slate bg-vantablack text-white font-bold hover:bg-slate transition-colors">Select Tier</button>
          </div>

        </div>
      </section>

      {/* 5. MANUFACTURING & ROADMAP */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Designed to scale in stages.</h2>
            <div className="space-y-4">
              <p className="text-slate-400"><strong>Maker tier</strong> has no physical manufacturing risk.</p>
              <p className="text-slate-400"><strong>Hacker tier</strong> requires electronics procurement.</p>
              <p className="text-slate-400"><strong>Pro tier</strong> requires enclosure manufacturing, assembly, QA, packaging, and shipping.</p>
              <p className="text-slate-400 mt-4 italic">The Pro version is exploring a premium material combination with a natural wood base, aluminum totem and light diffuser. Final production materials will be locked after manufacturing quotes, durability testing and prototype validation.</p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Where campaign funding goes.</h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
              <span className="px-3 py-1 bg-matte border border-slate rounded">Custom PCB manufacturing</span>
              <span className="px-3 py-1 bg-matte border border-slate rounded">Electronic components</span>
              <span className="px-3 py-1 bg-matte border border-slate rounded">Prototype refinement</span>
              <span className="px-3 py-1 bg-matte border border-slate rounded">Production tooling</span>
              <span className="px-3 py-1 bg-matte border border-slate rounded">Packaging</span>
              <span className="px-3 py-1 bg-matte border border-slate rounded">Software development</span>
              <span className="px-3 py-1 bg-matte border border-slate rounded">Shipping prep</span>
            </div>
          </div>
          
          <div className="bg-matte border border-slate rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Production Roadmap</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate before:to-transparent">
              {[
                { s: "Phase 01 — Prototype Validation", d: "Hardware testing, sensor alignment, firmware reliability, software interaction." },
                { s: "Phase 02 — Design for Manufacturing", d: "PCB revision, enclosure optimization, supplier selection, assembly process." },
                { s: "Phase 03 — Pilot Batch", d: "Small manufacturing run, quality control, software onboarding." },
                { s: "Phase 04 — Backer Production", d: "Manufacturing, QA, packaging." },
                { s: "Phase 05 — Fulfillment", d: "Shipping, support, firmware/software updates." }
              ].map((phase, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="text-[10px] font-bold">{i+1}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate bg-vantablack shadow">
                    <h4 className="font-bold text-white text-sm mb-1">{phase.s}</h4>
                    <p className="text-xs text-slate-400">{phase.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RISKS & CHALLENGES */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">What still needs to go right.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { t: "Sensor Alignment", d: "Magnets and Hall sensors need reliable repeatable detection." },
            { t: "PCB Production", d: "Custom hardware may require revision after pilot manufacturing." },
            { t: "Cross-Platform Software", d: "Windows, macOS and Linux expose different controls." },
            { t: "Mobile Restrictions", d: "iOS and Android limit what third-party apps can automate." },
            { t: "Manufacturing", d: "Final enclosure choice affects tooling, cost and lead time." },
            { t: "Supply Chain & Shipping", d: "International fulfillment introduces taxes/delays. Component availability can change." }
          ].map((r,i) => (
            <div key={i} className="p-4 border border-slate bg-matte rounded-xl">
              <strong className="text-white block mb-1">{r.t}</strong>
              <span className="text-sm text-slate-400">{r.d}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-accent font-bold">We will communicate changes openly rather than hiding delays behind marketing language.</p>
      </section>

      {/* 7. COMMUNITY & WHO IT'S FOR */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-matte border border-slate rounded-3xl">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Build it with us.</h2>
            <p className="text-slate-400 mb-6">Backers should not disappear into a mailing list after funding. Nexus Ring should maintain a public development trail.</p>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a href="https://discord.gg/Q3tTGhH4k" className="px-4 py-2 bg-vantablack border border-slate rounded-lg hover:text-white" target="_blank" rel="noopener noreferrer">Discord</a>
              <a href="https://github.com/naqashafzal" className="px-4 py-2 bg-vantablack border border-slate rounded-lg hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://makerworld.com" className="px-4 py-2 bg-vantablack border border-slate rounded-lg hover:text-white" target="_blank" rel="noopener noreferrer">MakerWorld</a>
            </div>
            
            <h3 className="text-xl font-bold text-white mt-12 mb-4">Stretch Goals</h3>
            <ul className="space-y-2 text-slate-400 text-sm list-disc list-inside">
              <li>Open Automation SDK</li>
              <li>Mobile Companion</li>
              <li>Home Assistant Integration</li>
              <li>Community Profile Library</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Who Nexus Ring is for.</h2>
            <div className="space-y-4">
              <div className="p-4 border border-slate bg-matte rounded-xl flex justify-between items-center">
                <span className="text-white font-bold">Developers</span> <span className="text-sm text-slate-400">Deep Work profiles.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl flex justify-between items-center">
                <span className="text-white font-bold">Designers</span> <span className="text-sm text-slate-400">Creative workflows.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl flex justify-between items-center">
                <span className="text-white font-bold">Founders</span> <span className="text-sm text-slate-400">Focus + meeting transitions.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl flex justify-between items-center">
                <span className="text-white font-bold">Students</span> <span className="text-sm text-slate-400">Study sessions.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl flex justify-between items-center">
                <span className="text-white font-bold">Makers</span> <span className="text-sm text-slate-400">Build/customize the hardware.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Campaign FAQ</h2>
        <div className="space-y-6">
          {[
            { q: "Is the product finished?", a: "No. Nexus Ring is currently in active hardware and software development. The campaign is intended to fund the transition from validated prototypes toward production." },
            { q: "Does the $15 Maker tier include hardware?", a: "No. It is intended for users who want the digital files and build documentation." },
            { q: "Does the $49 Hacker tier include the enclosure?", a: "No. It is intended for users who will print/build the enclosure themselves." },
            { q: "Is the $129 version assembled?", a: "Yes. The Pro tier is intended to be the fully assembled version." },
            { q: "Does it work offline?", a: "Core local automations are being designed to work without mandatory cloud connectivity. External integrations may require internet access." },
            { q: "When will it ship?", a: "Shipping dates will be established once supplier estimates and pilot manufacturing are validated." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-slate pb-4">
              <h4 className="text-white font-bold mb-2">{faq.q}</h4>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-matte border border-slate p-12 md:p-24 rounded-3xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Take your mind back.
        </h2>
        <div className="text-slate-400 text-lg mb-12 space-y-4 max-w-2xl mx-auto">
          <p>We are exhausted by the digital noise. We are tired of fighting algorithms to do our work. And we believe the only way to win is to step out of the screen.</p>
          <p>We are building the hardware, software, and community to make focus physical again.</p>
          <p className="text-white font-bold">Stand with us. Join the waitlist for Batch 01.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold tracking-wide hover:bg-[#00ffaa] transition-all">
            Join Launch List
          </button>
          <button className="px-8 py-4 rounded-xl border border-slate text-white hover:bg-slate transition-all font-mono text-sm">
            Follow Development
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
