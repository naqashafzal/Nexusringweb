"use client";

import React, { useState } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "framer-motion";
import ExplodedRingCanvas from "@/components/ExplodedRingCanvas";
import { Hexagon, Lock, Fingerprint, Zap, Play } from "lucide-react";

const TRIPLE_LOOP_DATA = [
  {
    title: "Tangible Intent",
    icon: <Fingerprint size={24} className="text-emerald-400" />,
    desc: "Physical action anchors psychological commitment. By manually placing a totem, you signal to your brain that it's time to focus, eliminating the mindless friction of clicking apps.",
    stats: "ESP32-C3 Microcontroller / Hall Effect Array"
  },
  {
    title: "Zero-Touch Automation",
    icon: <Zap size={24} className="text-emerald-400" />,
    desc: "The moment the totem snaps into the dock, your environment shifts. Distracting websites are blocked at the OS level, notification centers are muted, and your flow state apps launch instantly.",
    stats: "Sub-50ms Response / Hardware-Level Execution"
  },
  {
    title: "AI Guardian",
    icon: <Lock size={24} className="text-emerald-400" />,
    desc: "An intelligent, local AI monitors your desktop context. If you attempt to bypass your own rules or get derailed, the Guardian provides gentle, algorithmic nudges to pull you back to the task.",
    stats: "Local Model Processing / Total Privacy"
  }
];

const MODES_DATA = [
  { name: "Deep Work", color: "bg-emerald-500", glow: "shadow-[0_0_40px_rgba(16,185,129,0.5)]", text: "Blocks all social media, mutes Slack, and launches your IDE and research tabs." },
  { name: "Creative", color: "bg-purple-500", glow: "shadow-[0_0_40px_rgba(168,85,247,0.5)]", text: "Opens design tools, starts an ambient focus playlist, and turns off email." },
  { name: "Admin", color: "bg-blue-500", glow: "shadow-[0_0_40px_rgba(59,130,246,0.5)]", text: "Opens email, calendar, and task manager. Sets status to 'Available'." },
  { name: "Disconnect", color: "bg-amber-500", glow: "shadow-[0_0_40px_rgba(245,158,11,0.5)]", text: "Closes all work applications and explicitly blocks work-related domains for mental rest." }
];

export default function Home() {
  // Specific scroll tracker for the explosion animation (covers 250vh of scrolling)
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: explosionProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Keep the Hero text completely visible while the user scrolls and the model explodes.
  // It only fades out at the very end (80% to 100% of the explosion scroll depth).
  const heroOpacity = useTransform(explosionProgress, [0.8, 1], [1, 0]);
  const heroY = useTransform(explosionProgress, [0.8, 1], [0, -50]);

  const [activeTab, setActiveTab] = useState(0);
  const [activeMode, setActiveMode] = useState(0);

  return (
    <main className="bg-[#030303] text-white font-sans selection:bg-white selection:text-black">
      
      {/* Navbar - Ultra Minimal */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between mix-blend-difference pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span className="font-semibold tracking-tighter text-sm">NEXUS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide pointer-events-auto">
          <a href="#" className="text-white hover:opacity-50 transition-opacity">Overview</a>
          <a href="#" className="text-white hover:opacity-50 transition-opacity">Hardware</a>
          <a href="#" className="text-white hover:opacity-50 transition-opacity">Software</a>
          <a href="#" className="text-white hover:opacity-50 transition-opacity">Pre-order</a>
        </nav>
      </header>

      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <ExplodedRingCanvas scrollProgress={explosionProgress} />
      </div>

      {/* Scrollable Content Overlay */}
      <div className="relative z-10 w-full pointer-events-none">
        
        {/* HERO SECTION - Sticky Scrollytelling (200vh height gives enough scroll depth for the explosion to complete) */}
        <section ref={heroRef} className="h-[250vh] w-full">
          <div className="sticky top-0 h-screen w-full flex items-center">
            <motion.div 
              style={{ opacity: heroOpacity, y: heroY }}
              className="w-full max-w-[1400px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 pointer-events-auto"
            >
            <div className="flex flex-col justify-center max-w-xl">
              <h1 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tighter mb-6 text-white leading-[0.95]">
                Stop <br /> Distractions. <br /> Anchor <br /> Your Mind.
              </h1>
              <p className="text-lg text-[#888888] mb-10 font-normal max-w-sm leading-relaxed tracking-tight">
                The physical desktop artifact that automatically locks your OS for deep focus. 
                Local automation meets physical restraint.
              </p>
              <div className="flex items-center gap-6 self-start">
                <button className="rounded-full bg-white px-8 py-3 text-[13px] font-bold text-black hover:bg-[#e0e0e0] transition-colors tracking-wide">
                  Join Waitlist
                </button>
                <button className="text-[13px] font-medium text-[#888888] hover:text-white transition-colors tracking-wide">
                  Watch Film →
                </button>
              </div>
            </div>
          </motion.div>
          </div>
        </section>

        {/* SECTION 1: THE PROBLEM */}
        <section className="min-h-screen w-full flex items-center bg-gradient-to-b from-transparent via-[#030303]/90 to-[#030303] py-32 pointer-events-auto backdrop-blur-sm">
          <div className="w-full max-w-[1400px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tighter mb-8 leading-[1]">
                Is Your Willpower Enough?
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed mb-6 font-light">
                The modern workspace is designed to fracture your focus. You open your browser for research; ten minutes later, you are deep in a social media loop. You need to write; your conferencing app pulses with non-essential messages.
              </p>
              <p className="text-[#888888] text-lg leading-relaxed font-light">
                Fighting digital friction with willpower is a losing battle. Your mind needs a physical ritual to lock in, a tangible boundary that says, <span className="text-white font-medium">"Do not disturb."</span>
              </p>
            </div>
            {/* Cinematic Macro Placeholder */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#222] shadow-2xl flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                <Play className="text-white ml-1" fill="white" size={20} />
              </div>
              <div className="absolute bottom-6 left-6 text-xs tracking-widest text-[#555] uppercase">Macro_View_01.mp4</div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SOLUTION */}
        <section className="min-h-screen w-full flex items-center bg-[#030303] py-32 pointer-events-auto">
          {/* We place the text on the left so it balances the 3D model that is exploding on the right! */}
          <div className="w-full max-w-[1400px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tighter mb-8 leading-[1]">
                A Physical Anchor for Your Digital Mind
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed mb-6 font-light">
                The Nexus Ring is more than a macro pad; it is an intelligent gatekeeper for your cognitive load. It replaces abstract clicking with a meaningful, spatial ritual. 
              </p>
              <p className="text-[#888888] text-lg leading-relaxed font-light">
                When you feel the satisfying magnetic snap of a totem entering the dock, you aren’t just launching an app—you are executing a mental command. It is functional desk art that demands to be touched, bridging the gap between physical intention and flawless digital execution.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS */}
        <section className="min-h-[120vh] w-full flex items-center bg-[#030303] py-32 pointer-events-auto border-t border-[#111]">
          <div className="w-full max-w-[1400px] mx-auto px-12">
            <div className="max-w-3xl mb-24">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tighter mb-6 leading-[1]">
                The Loop of Perfect Focus
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed font-light">
                The Nexus Ring manages your environment using three proprietary, seamless workflows that operate entirely locally.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Interactive Tabs */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {TRIPLE_LOOP_DATA.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-start gap-6 p-6 rounded-2xl border transition-all duration-500 text-left ${
                      activeTab === idx 
                      ? "border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.05)]" 
                      : "border-transparent hover:border-[#222]"
                    }`}
                  >
                    <div className={`mt-1 transition-opacity duration-300 ${activeTab === idx ? "opacity-100" : "opacity-30"}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold tracking-tight mb-2 transition-colors duration-300 ${activeTab === idx ? "text-white" : "text-[#666]"}`}>
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {activeTab === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#888] mt-3 text-sm leading-relaxed font-light">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Diagram Display */}
              <div className="lg:col-span-7 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-lg">
                  {/* Trifold Rings visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {TRIPLE_LOOP_DATA.map((_, idx) => {
                        const angle = (idx * 120 - 90) * (Math.PI / 180);
                        const radius = 40;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        const isActive = activeTab === idx;

                        return (
                          <motion.div
                            key={idx}
                            animate={{
                              x, y,
                              scale: isActive ? 1.1 : 0.9,
                              opacity: isActive ? 1 : 0.2,
                              borderColor: isActive ? '#10b981' : '#333'
                            }}
                            className="absolute inset-0 rounded-full border-2 border-[#333] flex items-center justify-center mix-blend-screen"
                            style={{ transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
                          >
                            {isActive && (
                              <motion.div 
                                initial={{ scale: 0 }} 
                                animate={{ scale: 1 }} 
                                className="w-full h-full rounded-full bg-emerald-500/10 blur-xl"
                              />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Detailed Callout Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#111] border border-[#222] px-6 py-3 rounded-full text-xs font-mono tracking-widest text-[#aaa]"
                    >
                      {TRIPLE_LOOP_DATA[activeTab].stats}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE MODES */}
        <section className="min-h-screen w-full flex flex-col justify-center bg-[#030303] py-32 pointer-events-auto border-t border-[#111] relative overflow-hidden">
          {/* Dynamic Background Glow based on active mode */}
          <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none transition-colors duration-1000">
            <div className={`w-[800px] h-[800px] blur-[150px] rounded-full transition-colors duration-1000 ${MODES_DATA[activeMode].color}`}></div>
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-12 relative z-10 text-center">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tighter mb-6 leading-[1]">
              Master Your Workspace, One Slot at a Time
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed font-light max-w-2xl mx-auto mb-20">
              By assigning meaningful tasks to physical positions, you leverage spatial memory to access flow state instantly. The entire experience shifts based on the totem you choose.
            </p>

            {/* Carousel Interactive */}
            <div className="flex flex-col items-center">
              
              {/* Carousel Buttons */}
              <div className="flex gap-4 mb-16">
                {MODES_DATA.map((mode, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMode(idx)}
                    className={`relative px-6 py-3 rounded-full border transition-all duration-500 flex items-center gap-3 ${
                      activeMode === idx 
                      ? `border-white/20 bg-[#111] text-white` 
                      : `border-transparent text-[#666] hover:text-white`
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${mode.color} ${activeMode === idx ? mode.glow : ''} transition-all duration-500`}></div>
                    <span className="text-sm font-semibold tracking-wide">{mode.name}</span>
                  </button>
                ))}
              </div>

              {/* Mode Description Display */}
              <motion.div 
                key={activeMode}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl shadow-2xl"
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#222] to-[#111] border border-[#333]`}>
                  <Hexagon className={MODES_DATA[activeMode].color.replace('bg-', 'text-')} size={24} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-left">{MODES_DATA[activeMode].name} Protocol</h3>
                <p className="text-[#888] text-left leading-relaxed font-light">
                  {MODES_DATA[activeMode].text}
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-12 border-t border-[#111] bg-[#030303] flex items-center justify-center pointer-events-auto">
          <p className="text-[#444] text-xs font-medium tracking-widest uppercase">© 2026 Nexus Desktop Art. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}
