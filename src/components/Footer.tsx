"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-[#283141] bg-[#080B12] flex flex-col items-center justify-center pointer-events-auto text-[#A5AFBF] shadow-2xl">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#FF405A] group-hover:scale-110 transition-transform"></div>
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-[#FF405A] transition-colors">
              NEXUS RING
            </span>
          </Link>
          <p className="text-xs font-light text-[#A5AFBF] leading-relaxed max-w-[260px]">
            One physical move. Your workspace follows.
          </p>
          <p className="text-[11px] font-mono text-[#A5AFBF]/70">
            Physical intent computing for deliberate, focused work.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Product</h4>
          <Link href="/#how-it-works" className="text-xs hover:text-white transition-colors">How It Works</Link>
          <Link href="/#modes" className="text-xs hover:text-white transition-colors">Four Operating Modes</Link>
          <Link href="/hardware" className="text-xs hover:text-white transition-colors">Hardware Architecture</Link>
          <Link href="/software" className="text-xs hover:text-white transition-colors">Companion Software</Link>
          <Link href="/preorder" className="text-xs hover:text-white transition-colors">Early Access Registration</Link>
        </div>

        {/* Engineering & Build Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Engineering</h4>
          <Link href="/campaign" className="text-xs hover:text-white transition-colors">Development Milestones</Link>
          <Link href="/campaign#tiers" className="text-xs hover:text-white transition-colors">Maker &amp; DIY Edition</Link>
          <Link href="/research" className="text-xs hover:text-white transition-colors">Design Research</Link>
          <a href="https://github.com/naqashafzal" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">
            GitHub Repository
          </a>
        </div>

        {/* Project & Vision Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Project</h4>
          <Link href="/about" className="text-xs hover:text-white transition-colors">Vision &amp; Philosophy</Link>
          <Link href="/about#founder" className="text-xs hover:text-white transition-colors">Founder &amp; Creator</Link>
          <Link href="/compare" className="text-xs hover:text-white transition-colors">Approach Comparison</Link>
          <a
            href="https://discord.gg/Q3tTGhH4k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5865F2] hover:text-white transition-colors font-medium"
          >
            Discord Community
          </a>
        </div>

        {/* Development Status Notice */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Transparency</h4>
          <p className="text-xs leading-relaxed text-[#A5AFBF]">
            Nexus Ring is currently in active hardware and software development. Specifications and timelines will be confirmed as testing progresses.
          </p>
          <Link href="/campaign" className="text-xs text-[#FF405A] font-mono hover:underline">
            Follow the build →
          </Link>
        </div>

      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-[#283141] pt-8 gap-4 relative z-10 pointer-events-auto">
        <p className="text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Nexus Ring. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF405A] shadow-[0_0_10px_rgba(255,64,90,0.8)] animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest text-[#FF405A]">IN ACTIVE PROTOTYPE DEVELOPMENT</span>
        </div>
      </div>
    </footer>
  );
}
