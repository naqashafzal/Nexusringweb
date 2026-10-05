"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight, RefreshCw, Box, Zap, Cpu, Fingerprint, Layers, EyeOff, LayoutGrid, Monitor, ShieldCheck, Bluetooth, Network } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

const ExplodedRingCanvas = dynamic(() => import("@/components/ExplodedRingCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex flex-col items-center justify-center font-mono text-xs text-accent gap-2 border border-slate bg-matte rounded-3xl">
      <RefreshCw size={20} className="animate-spin text-accent" />
      <span>INITIALIZING 3D CAD SHADER...</span>
    </div>
  ),
});

export default function HardwarePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO SECTION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-[11px] font-mono tracking-widest uppercase mb-4">
            The Physical Anchor
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            BUILT AROUND ONE<br /><span className="text-slate-400">DELIBERATE DECISION.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            You cannot fight algorithms with willpower alone. You need a physical boundary. The Nexus Ring uses heavy magnetic resistance, Hall-effect sensing, and local computing to anchor your attention in the physical world.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a href="#interactive-3d" className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold text-sm tracking-wide hover:bg-[#00ffaa] transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2">
              Explore the Hardware <ChevronRight size={16} />
            </a>
            <Link href="/software" className="px-8 py-4 rounded-xl border border-slate bg-matte text-white hover:bg-slate transition-all font-mono text-sm flex items-center gap-2">
              See the Software Layer
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. HERO VISUAL & FACTS */}
      <section id="interactive-3d" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="h-[600px] rounded-3xl border border-slate bg-matte relative overflow-hidden shadow-2xl mb-12">
          <div className="absolute top-6 left-6 z-20 text-[10px] font-mono text-slate-500 tracking-widest uppercase bg-black/50 p-2 rounded backdrop-blur">
            INTERACTIVE HARDWARE VIEW
          </div>
          <ExplodedRingCanvas disableExplode={false} centerPosition={true} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
          {[
            { t: "4 Mode Positions", d: "Deep Work · Creative · Meeting · Break" },
            { t: "Magnetic Detection", d: "Hall-effect sensing detects the selected physical position." },
            { t: "Local Controller", d: "ESP32-based controller handles mode detection and communication." },
            { t: "Screen-Free", d: "Ambient light communicates state without creating another display." }
          ].map(f => (
            <div key={f.t} className="p-5 border border-slate bg-matte rounded-2xl">
              <h4 className="text-white font-bold mb-2">{f.t}</h4>
              <p className="text-sm text-slate-400">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW HARDWARE WORKS */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">From movement to mode.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate -translate-y-1/2 z-0" />
          {[
            { s: "01", t: "You move the totem", d: "The weighted magnetic totem is placed into a mode position." },
            { s: "02", t: "Magnetic field changes", d: "Hall-effect sensors detect the new position." },
            { s: "03", t: "Controller identifies mode", d: "The onboard controller maps that sensor state to Deep Work, Creative, Meeting, or Break." },
            { s: "04", t: "Nexus Companion receives event", d: "The selected mode is sent to the local software layer, which runs the corresponding automation profile." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 p-6 rounded-2xl border border-slate bg-matte text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-vantablack border border-accent flex items-center justify-center text-accent font-mono text-sm mb-4">{item.s}</div>
              <h4 className="text-white font-bold mb-2">{item.t}</h4>
              <p className="text-xs text-slate-400">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPLODED HARDWARE ARCHITECTURE */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 space-y-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">A sanctuary. Not a gadget.</h2>
        </div>

        {/* Enclosure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/30 bg-accent/10 px-2 py-1 rounded">Layer 01</span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-4">The Physical Base</h3>
            <p className="text-slate-400 mb-6">The Nexus base holds the electronics, mode positions, magnetic sensing system and ambient-light components in a single desk object.</p>
            <p className="text-sm text-slate-500 italic">Prototype enclosures are being developed for FDM printing using materials such as PLA-CF and PETG.</p>
            <div className="mt-6 p-4 border border-accent/20 bg-accent/5 rounded-xl">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Box size={16} className="text-accent" /> Designed to be buildable.</h4>
              <p className="text-sm text-slate-400">Nexus Ring began with maker-friendly fabrication in mind. The enclosure architecture is being developed so the electronics can fit into a printable chassis without requiring complex tooling.</p>
            </div>
          </div>
          <div className="aspect-square bg-matte border border-slate rounded-3xl flex items-center justify-center p-8 text-center text-slate-500">
             [3D RENDER: ENCLOSURE]
          </div>
        </div>

        {/* Totem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/30 bg-accent/10 px-2 py-1 rounded">Layer 02</span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-4">The Physical Intent Object</h3>
            <p className="text-slate-400 mb-6">The totem is the object the user physically moves when changing digital state. Its weight, material and magnetic interaction are important because Nexus Ring is designed to make mode changes feel deliberate rather than accidental.</p>
            <p className="text-sm text-slate-500 italic">Current premium design direction: natural wood base with a matte aluminum totem and integrated light diffuser. Final production materials remain subject to manufacturing validation.</p>
          </div>
          <div className="md:order-1 aspect-square bg-matte border border-slate rounded-3xl flex items-center justify-center p-8 text-center text-slate-500">
             [3D RENDER: MAGNETIC TOTEM]
          </div>
        </div>

        {/* Hall-Effect Detection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/30 bg-accent/10 px-2 py-1 rounded">Layer 03</span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-4">Contactless Mode Detection</h3>
            <p className="text-slate-400 mb-6">Nexus Ring uses magnetic sensing rather than relying on a conventional push button for every mode. When the totem enters a position, the sensor state changes and the controller can identify the selected mode.</p>
            <p className="text-sm text-slate-500 italic">Prototype Hall switch modules. Final Hall sensor architecture under validation.</p>
          </div>
          <div className="aspect-square bg-matte border border-slate rounded-3xl flex items-center justify-center p-8 text-center text-slate-500">
             [3D RENDER: HALL SENSORS]
          </div>
        </div>

        {/* Controller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/30 bg-accent/10 px-2 py-1 rounded">Layer 04</span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-4">The Local Hardware Brain</h3>
            <p className="text-slate-400 mb-6">The microcontroller reads the magnetic sensors, manages the device state, controls LED feedback and communicates mode changes to Nexus Companion.</p>
            <p className="text-sm text-slate-500 italic">ESP32-C3 prototype architecture.</p>
            <div className="mt-6 p-4 border border-slate bg-vantablack rounded-xl">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Cpu size={16} className="text-slate-400" /> Custom PCB Evolution</h4>
              <p className="text-xs text-slate-400">The custom PCB is being developed to reduce wiring, improve assembly consistency and integrate the controller, sensors, LED control and power system into a cleaner internal architecture.</p>
            </div>
          </div>
          <div className="md:order-1 aspect-square bg-matte border border-slate rounded-3xl flex items-center justify-center p-8 text-center text-slate-500">
             [3D RENDER: ESP32 / PCB]
          </div>
        </div>

        {/* LED Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/30 bg-accent/10 px-2 py-1 rounded">Layer 05</span>
            <h3 className="text-3xl font-display font-bold text-white mt-4 mb-4">Information without another screen</h3>
            <p className="text-slate-400 mb-6">Nexus Ring intentionally avoids a small display. The product should communicate state without becoming another screen demanding attention.</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="text-white font-bold">Deep Work:</span> Steady focused glow</li>
              <li><span className="text-white font-bold">Creative:</span> Slow breathing glow</li>
              <li><span className="text-white font-bold">Meeting:</span> Clean steady light</li>
              <li><span className="text-white font-bold">Break:</span> Soft warm glow</li>
            </ul>
          </div>
          <div className="aspect-square bg-matte border border-slate rounded-3xl flex items-center justify-center p-8 text-center text-slate-500">
             [3D RENDER: LED RING]
          </div>
        </div>
      </section>

      {/* 5. INTERACTION & DESIGN PRINCIPLES */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <EyeOff size={32} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">No screen by design.</h3>
            <p className="text-sm text-slate-400 mb-4"><strong>Less visual noise:</strong> The product reduces interface clutter rather than adding another display.</p>
            <p className="text-sm text-slate-400 mb-4"><strong>Faster recognition:</strong> A simple ambient state can be understood at a glance.</p>
            <p className="text-sm text-slate-400"><strong>Better physical identity:</strong> Nexus Ring feels like a physical control object, not another mini-computer.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <Fingerprint size={32} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">The interaction matters.</h3>
            <p className="text-sm text-slate-400">The human brain needs a clear boundary. There is a profound difference between clicking a digital toggle and physically slamming a weighted magnetic totem into place to protect your time.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <Layers size={32} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Built to stay on the desk.</h3>
            <p className="text-sm text-slate-400">The base needs enough mass and grip that removing the magnetic totem does not move the entire device. Exploring weighted internal bases, steel plates, and low center of gravity.</p>
          </div>
        </div>
      </section>

      {/* 6. CONNECTIVITY & VERSIONS */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Simple power and connectivity</h3>
            <p className="text-slate-400 mb-6">USB-C provides the primary power connection. Depending on the final architecture, desktop communication may use USB, Bluetooth or local network connectivity.</p>
            <h3 className="text-2xl font-bold text-white mb-4">Local communication first.</h3>
            <p className="text-slate-400">Nexus hardware communicates local-first to the Nexus Companion.</p>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">One system. Different ways to build it.</h3>
            <div className="space-y-4">
              <div><strong className="text-white">Maker:</strong> <span className="text-sm text-slate-400">3D-printing users. Digital enclosure files, BOM, assembly guide.</span></div>
              <div><strong className="text-white">Hacker:</strong> <span className="text-sm text-slate-400">Makers who want official electronics. PCB, sensors, magnets, LEDs.</span></div>
              <div><strong className="text-white">Pro:</strong> <span className="text-sm text-slate-400">Non-makers. Fully assembled hardware, premium totem, USB-C.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HARDWARE STATUS */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">What is real today.</h2>
        <div className="space-y-2 font-mono text-sm">
          {[
            { f: "Industrial design", s: "PROTOTYPE" },
            { f: "3D-printed chassis", s: "PROTOTYPE" },
            { f: "Magnetic mode interaction", s: "PROTOTYPE" },
            { f: "Hall sensor detection", s: "PROTOTYPE / TESTING" },
            { f: "ESP32 firmware", s: "IN DEVELOPMENT" },
            { f: "Custom PCB", s: "IN DEVELOPMENT" },
            { f: "Premium production enclosure", s: "PLANNED" },
            { f: "Mass manufacturing", s: "PLANNED" },
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

      {/* 8. CTA */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-matte border border-slate p-12 md:p-24 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
          Hardware detects the state.<br />Software makes it useful.
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          See how Nexus Companion turns each physical mode into apps, website rules, notifications, timers and workspace automations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/software" className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold tracking-wide hover:bg-[#00ffaa] transition-all">
            Explore Nexus Companion
          </Link>
          <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl border border-slate text-white hover:bg-slate transition-all font-mono text-sm">
            Join Early Access
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
