"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-[#151D2A] bg-[#030508] flex flex-col items-center justify-center pointer-events-auto text-[#94a3b8] shadow-2xl">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3.5 h-3.5 bg-[#00FF9D] rounded-full shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-[#00FF9D] transition-colors">NEXUS RING</span>
          </Link>
          <p className="text-xs font-light mt-1 text-[#94a3b8] leading-relaxed max-w-[260px]">
            The physical discipline engine built to accelerate your personal success. Force your focus, save your time, and protect your potential.
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

        {/* Vision & Resources Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Research & AI</h4>
          <Link href="/research" className="text-xs hover:text-[#00FF9D] transition-colors">Cognitive Science Whitepaper</Link>
          <Link href="/about" className="text-xs hover:text-[#00FF9D] transition-colors">Vision & Founder</Link>
          <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="text-xs text-[#00FF9D] hover:underline flex items-center gap-1">
            <span>AI Knowledge Base (llms.txt)</span>
            <span className="text-[9px] font-mono bg-[#00FF9D]/15 px-1 rounded">GEO</span>
          </a>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[#00FF9D] transition-colors">
            XML Sitemap
          </a>
          <Link href="/campaign#faq" className="text-xs hover:text-[#00FF9D] transition-colors">Campaign FAQ</Link>
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
