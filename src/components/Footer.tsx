"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-16 pb-12 border-t border-[#E5E5E7] bg-[#F5F5F7] flex flex-col items-center justify-center pointer-events-auto text-[#6E6E73]">
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#C93E50] group-hover:scale-105 transition-transform" />
            <span className="font-semibold tracking-tight text-sm text-[#1D1D1F]">
              Nexus Ring
            </span>
          </Link>
          <p className="text-xs font-semibold text-[#1D1D1F] tracking-tight">
            Force Your Focus. Engineer Success.
          </p>
          <p className="text-xs font-normal text-[#6E6E73] leading-relaxed max-w-[240px]">
            Physical intent computing designed to help you create an intentional digital workspace.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-2.5">
          <h4 className="text-[#1D1D1F] font-semibold text-xs tracking-tight mb-1">Product</h4>
          <Link href="/#how-it-works" className="text-xs hover:text-[#1D1D1F] transition-colors">How It Works</Link>
          <Link href="/#modes" className="text-xs hover:text-[#1D1D1F] transition-colors">Four Operating Modes</Link>
          <Link href="/hardware" className="text-xs hover:text-[#1D1D1F] transition-colors">Hardware Architecture</Link>
          <Link href="/software" className="text-xs hover:text-[#1D1D1F] transition-colors">Companion Software</Link>
          <Link href="/preorder" className="text-xs hover:text-[#1D1D1F] transition-colors">Early Access Registration</Link>
        </div>

        {/* Engineering & Build Column */}
        <div className="flex flex-col gap-2.5">
          <h4 className="text-[#1D1D1F] font-semibold text-xs tracking-tight mb-1">Engineering</h4>
          <Link href="/campaign" className="text-xs hover:text-[#1D1D1F] transition-colors">Development Milestones</Link>
          <Link href="/campaign#tiers" className="text-xs hover:text-[#1D1D1F] transition-colors">Maker &amp; DIY Edition</Link>
          <Link href="/research" className="text-xs hover:text-[#1D1D1F] transition-colors">Design Research</Link>
          <a href="https://github.com/naqashafzal" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#1D1D1F] transition-colors">
            GitHub Repository
          </a>
        </div>

        {/* Mission & Ideas Column */}
        <div className="flex flex-col gap-2.5">
          <h4 className="text-[#1D1D1F] font-semibold text-xs tracking-tight mb-1">Mission &amp; Ideas</h4>
          <Link href="/digital-distraction" className="text-xs hover:text-[#1D1D1F] transition-colors">Digital Distraction</Link>
          <Link href="/focus" className="text-xs hover:text-[#1D1D1F] transition-colors">Focus Resource Hub</Link>
          <Link href="/journal" className="text-xs hover:text-[#1D1D1F] transition-colors">The Focus Journal</Link>
          <Link href="/about" className="text-xs hover:text-[#1D1D1F] transition-colors">Vision &amp; Philosophy</Link>
          <Link href="/compare" className="text-xs hover:text-[#1D1D1F] transition-colors">Approach Comparison</Link>
        </div>

        {/* Development Status Notice */}
        <div className="flex flex-col gap-2.5">
          <h4 className="text-[#1D1D1F] font-semibold text-xs tracking-tight mb-1">Transparency</h4>
          <p className="text-xs leading-relaxed text-[#6E6E73]">
            Nexus Ring is currently in active prototype development. Hardware specifications and software capabilities will be updated as testing progresses.
          </p>
          <Link href="/campaign" className="text-xs text-[#C93E50] font-medium hover:underline">
            Follow the build →
          </Link>
        </div>

      </div>
      
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center border-t border-[#E5E5E7] pt-6 gap-4 relative z-10 pointer-events-auto">
        <p className="text-[#86868B] text-xs font-normal">
          © {new Date().getFullYear()} Nexus Ring. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          <span className="text-xs font-normal text-[#6E6E73]">In Active Prototype Development</span>
        </div>
      </div>
    </footer>
  );
}
