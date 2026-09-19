"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

export default function PreorderPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="bg-[#030303] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center px-12">
        <div className="w-full max-w-md bg-[#0a0a0a] border border-[#222] p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold tracking-tighter mb-2">Reserve Your Unit</h1>
            <p className="text-[#888] mb-8 font-light leading-relaxed">
              Batch 01 is strictly limited to 500 units. Enter your email to secure your spot in line.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center text-sm font-medium tracking-wide">
                You're on the list. We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    required
                    className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-black font-bold tracking-wide py-3 rounded-xl hover:bg-[#e0e0e0] transition-colors"
                >
                  Join the Waitlist
                </button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-[#222]">
              <p className="text-xs text-[#555] text-center font-mono tracking-widest uppercase">
                Expected Shipping: Q4 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
