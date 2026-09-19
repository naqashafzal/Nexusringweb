import React from "react";
import Navbar from "@/components/Navbar";

export default function HardwarePage() {
  return (
    <main className="bg-[#030303] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <div className="pt-40 px-12 max-w-[1400px] mx-auto pb-32">
        <h1 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter mb-6 leading-[0.95]">
          Machined to <br /> Perfection.
        </h1>
        <p className="text-xl text-[#888888] mb-16 font-light max-w-2xl leading-relaxed tracking-tight">
          Every Nexus Ring is precision CNC-machined from a single block of aerospace-grade aluminum, bead-blasted, and finished with a deep matte anodization. It’s engineered to feel substantial—a physical anchor for your digital life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#111] pt-16">
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-3">Tactile Feedback</h3>
            <p className="text-[#888] font-light leading-relaxed">
              Proprietary magnetic damping ensures the totem snaps into place with a satisfying, heavy resonance. No clicks, just pure mechanical intention.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-3">ESP32-C3 Core</h3>
            <p className="text-[#888] font-light leading-relaxed">
              Powered by a high-efficiency microcontroller running a custom RTOS. Sub-50ms latency from physical drop to digital execution.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-3">Hall-Effect Array</h3>
            <p className="text-[#888] font-light leading-relaxed">
              An array of precision Hall-effect sensors reads the exact magnetic signature of the inserted totem, instantly triggering the correct protocol.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
