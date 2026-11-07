"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-[#303A48] bg-[#080A0E] flex flex-col items-center justify-center pointer-events-auto text-[#A5AFBD] shadow-2xl">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/branding/nexus-logo-horizontal.png"
              alt="Nexus Ring Logo"
              width={160}
              height={33}
              className="h-7 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-xs font-mono font-bold text-[#F5F6F8] tracking-wider">
            FORCE YOUR FOCUS. ENGINEER SUCCESS.
          </p>
          <p className="text-[11px] font-light text-[#A5AFBD] leading-relaxed max-w-[260px]">
            One physical move. Your workspace follows. Physical intent computing for deliberate, focused work.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">Product</h4>
          <Link href="/#how-it-works" className="text-xs hover:text-[#F5F6F8] transition-colors">How It Works</Link>
          <Link href="/#modes" className="text-xs hover:text-[#F5F6F8] transition-colors">Four Operating Modes</Link>
          <Link href="/hardware" className="text-xs hover:text-[#F5F6F8] transition-colors">Hardware Architecture</Link>
          <Link href="/software" className="text-xs hover:text-[#F5F6F8] transition-colors">Companion Software</Link>
          <Link href="/download" className="text-xs text-[#D83A50] font-semibold hover:text-[#EB5268] transition-colors">Software Beta</Link>
          <Link href="/preorder" className="text-xs hover:text-[#F5F6F8] transition-colors">Early Access Registration</Link>
        </div>

        {/* Engineering & Build Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">Engineering</h4>
          <Link href="/campaign" className="text-xs hover:text-[#F5F6F8] transition-colors">Development Milestones</Link>
          <Link href="/campaign#tiers" className="text-xs hover:text-[#F5F6F8] transition-colors">Maker &amp; DIY Edition</Link>
          <Link href="/research" className="text-xs hover:text-[#F5F6F8] transition-colors">Design Research</Link>
          <a href="https://github.com/naqashafzal" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#F5F6F8] transition-colors">
            GitHub Repository
          </a>
        </div>

        {/* Mission & Ideas Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">Mission &amp; Ideas</h4>
          <Link href="/digital-distraction" className="text-xs hover:text-[#F5F6F8] transition-colors">Digital Distraction</Link>
          <Link href="/focus" className="text-xs hover:text-[#F5F6F8] transition-colors">Focus Resource Hub</Link>
          <Link href="/journal" className="text-xs hover:text-[#F5F6F8] transition-colors">The Focus Journal</Link>
          <Link href="/about" className="text-xs hover:text-[#F5F6F8] transition-colors">Vision &amp; Philosophy</Link>
          <Link href="/compare" className="text-xs hover:text-[#F5F6F8] transition-colors">Approach Comparison</Link>
        </div>

        {/* Development Status Notice */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">Transparency</h4>
          <p className="text-xs leading-relaxed text-[#A5AFBD]">
            Nexus Ring is currently in active hardware and software development. Specifications and timelines will be confirmed as testing progresses.
          </p>
          <Link href="/campaign" className="text-xs text-[#D83A50] font-mono hover:underline">
            Follow the build →
          </Link>
        </div>

      </div>
      
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-[#303A48] pt-8 gap-4 relative z-10 pointer-events-auto">
        <p className="text-[#778292] text-[11px] font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Nexus Ring. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#D83A50] shadow-[0_0_10px_rgba(216,58,80,0.6)]" />
          <span className="text-xs font-mono tracking-widest text-[#D83A50]">IN ACTIVE PROTOTYPE DEVELOPMENT</span>
        </div>
      </div>
    </footer>
  );
}
