import React from "react";
import Navbar from "@/components/Navbar";

export default function SoftwarePage() {
  return (
    <main className="bg-[#030303] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <div className="pt-40 px-12 max-w-[1400px] mx-auto pb-32">
        <h1 className="text-[3rem] md:text-[5rem] font-bold tracking-tighter mb-6 leading-[0.95]">
          A Local <br /> Guardian AI.
        </h1>
        <p className="text-xl text-[#888888] mb-16 font-light max-w-2xl leading-relaxed tracking-tight">
          The hardware is just the key. The Nexus Guardian is a lightweight, local-first application that runs entirely on your machine. It monitors your context, enforces your boundaries, and never phones home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#111] pt-16">
          <div className="bg-[#0a0a0a] border border-[#222] p-10 rounded-2xl">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Total Blackout Protocol</h3>
            <p className="text-[#888] font-light leading-relaxed mb-6">
              When the Deep Work totem is active, the Guardian intercepts network requests to known distraction domains at the OS level. It cannot be bypassed by simply opening an incognito tab. 
            </p>
            <ul className="text-sm text-[#666] space-y-2 font-mono tracking-wide">
              <li>&gt; blocklist_enforced: true</li>
              <li>&gt; notification_center: muted</li>
              <li>&gt; local_dns_override: active</li>
            </ul>
          </div>

          <div className="bg-[#0a0a0a] border border-[#222] p-10 rounded-2xl">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Context-Aware Nudges</h3>
            <p className="text-[#888] font-light leading-relaxed mb-6">
              Using a highly-quantized local LLM, the Guardian analyzes active window titles. If you deviate from your stated objective, the Nexus Ring pulses amber, gently breaking your distraction loop.
            </p>
            <ul className="text-sm text-[#666] space-y-2 font-mono tracking-wide">
              <li>&gt; local_model: loaded</li>
              <li>&gt; privacy_mode: absolute</li>
              <li>&gt; telemetry: zero</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
