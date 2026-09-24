"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-[#151D2A] bg-[#030508] flex flex-col items-center justify-center pointer-events-auto text-[#94a3b8] shadow-2xl">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3.5 h-3.5 bg-[#00FF9D] rounded-full shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-[#00FF9D] transition-colors">NEXUS RING</span>
          </Link>
          <p className="text-xs font-light mt-1 text-[#94a3b8] leading-relaxed max-w-[260px]">
            The intelligent gatekeeper built to bridge the gap between physical intention and digital execution. Force your focus, save your time, and protect your potential.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
              Batch 01 Launching Soon
            </span>
          </div>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Discipline Engine</h4>
          <Link href="/features" className="text-xs hover:text-[#00FF9D] transition-colors">Flow State Modes & Matrix</Link>
          <Link href="/campaign" className="text-xs hover:text-[#00FF9D] transition-colors">Crowdfunding Campaign</Link>
          <Link href="/hardware" className="text-xs hover:text-[#00FF9D] transition-colors">V1 Hardware Architecture</Link>
          <Link href="/software" className="text-xs hover:text-[#00FF9D] transition-colors">Software & Kernel Daemon</Link>
          <Link href="/preorder" className="text-xs hover:text-[#00FF9D] transition-colors">Priority Waitlist Queue</Link>
        </div>

        {/* Comparisons Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Comparisons</h4>
          <Link href="/compare" className="text-xs hover:text-[#00FF9D] transition-colors font-medium text-white">Compare Hub & Matrix</Link>
          <Link href="/compare/nexus-ring-vs-opal-app" className="text-xs hover:text-[#00FF9D] transition-colors">Nexus Ring vs. Opal App</Link>
          <Link href="/compare/nexus-ring-vs-freedom-blocker" className="text-xs hover:text-[#00FF9D] transition-colors">Nexus Ring vs. Freedom.to</Link>
          <Link href="/compare/nexus-ring-vs-pomodoro-timer" className="text-xs hover:text-[#00FF9D] transition-colors">Nexus Ring vs. Pomodoro</Link>
          <Link href="/compare/nexus-ring-vs-brick-device" className="text-xs hover:text-[#00FF9D] transition-colors">Nexus Ring vs. Brick</Link>
        </div>

        {/* Community & AI Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Community & AI</h4>
          <a
            href="https://discord.gg/Q3tTGhH4k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5865F2] hover:text-white transition-colors flex items-center gap-1.5 font-medium group"
          >
            <svg className="w-3.5 h-3.5 fill-[#5865F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Discord Community</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#5865F2]/20 text-[#5865F2] font-bold">JOIN</span>
          </a>
          <Link href="/research" className="text-xs hover:text-[#00FF9D] transition-colors">Cognitive Science Whitepaper</Link>
          <Link href="/about" className="text-xs hover:text-[#00FF9D] transition-colors">Vision & Founder</Link>
          <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="text-xs text-[#00FF9D] hover:underline flex items-center gap-1">
            <span>AI Knowledge Base (llms.txt)</span>
            <span className="text-[9px] font-mono bg-[#00FF9D]/15 px-1 rounded">GEO</span>
          </a>
          <a href="/feed.xml" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#00FF9D] transition-colors">
            RSS Syndication Feed
          </a>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#00FF9D] transition-colors">
            XML Sitemap
          </a>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Security & Privacy</h4>
          <Link href="/software" className="text-xs hover:text-[#00FF9D] transition-colors">100% Air-Gapped Local Privacy</Link>
          <Link href="/preorder" className="text-xs hover:text-[#00FF9D] transition-colors">Terms of Pre-Order</Link>
          <p className="text-[11px] text-[#64748b] leading-snug pt-1">
            Zero cloud telemetry. Zero screen capture transmissions. All AI models execute locally on-device.
          </p>
        </div>
      </div>

      {/* SEO & Semantic Keyword Index Bar */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-4 mb-4 border-t border-[#151D2A]/60 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#64748b]">
        <span>CORE ENTITIES:</span>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span className="text-[#94a3b8]">Success & Discipline Engine</span>
          <span className="text-[#64748b]">·</span>
          <span className="text-[#94a3b8]">Time & Focus Optimization</span>
          <span className="text-[#64748b]">·</span>
          <span className="text-[#94a3b8]">Distraction Elimination System</span>
          <span className="text-[#64748b]">·</span>
          <span className="text-[#94a3b8]">Flow State Catalyst</span>
          <span className="text-[#64748b]">·</span>
          <span className="text-[#94a3b8]">High-Performance Workspace Artifact</span>
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-[#151D2A] pt-8 gap-4 relative z-10 pointer-events-auto">
        <p className="text-[#64748b] text-[11px] font-mono tracking-widest uppercase">© 2026 NEXUS DESKTOP ART INC. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.8)] animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest text-[#00FF9D]">DISCIPLINE ENGINE: ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
