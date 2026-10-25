"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-slate bg-vantablack flex flex-col items-center justify-center pointer-events-auto text-slate-400 shadow-2xl">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3.5 h-3.5 bg-accent rounded-full shadow-[0_0_10px_rgba(255,51,79,0.8)]"></div>
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-accent transition-colors">NEXUS RING</span>
          </Link>
          <p className="text-xs font-light mt-1 text-slate-400 leading-relaxed max-w-[260px]">
            Physical Intent. Digital Execution.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Product</h4>
          <Link href="/#how-it-works" className="text-xs hover:text-accent transition-colors">How It Works</Link>
          <Link href="/#modes" className="text-xs hover:text-accent transition-colors">Modes</Link>
          <Link href="/hardware" className="text-xs hover:text-accent transition-colors">Hardware</Link>
          <Link href="/software" className="text-xs hover:text-accent transition-colors">Software</Link>
          <Link href="/preorder" className="text-xs hover:text-accent transition-colors">Early Access</Link>
        </div>

        {/* Build Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Build</h4>
          <Link href="/campaign" className="text-xs hover:text-accent transition-colors">Development</Link>
          <Link href="/campaign#tiers" className="text-xs hover:text-accent transition-colors">Maker Edition</Link>
          <a href="https://github.com/naqashafzal" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-accent transition-colors">GitHub</a>
          <Link href="/research" className="text-xs hover:text-accent transition-colors">Research</Link>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Company</h4>
          <Link href="/about" className="text-xs hover:text-accent transition-colors">Vision</Link>
          <Link href="/about#founder" className="text-xs hover:text-accent transition-colors">Founder</Link>
          <Link href="/privacy" className="text-xs hover:text-accent transition-colors">Privacy</Link>
          <a
            href="https://discord.gg/Q3tTGhH4k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5865F2] hover:text-white transition-colors font-medium"
          >
            Discord
          </a>
        </div>

        <div className="flex flex-col gap-3"><h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Stay informed</h4><p className="text-xs leading-relaxed">Nexus Ring is in development. Specifications and launch details will be confirmed as the project progresses.</p><Link href="/campaign" className="text-xs text-accent">Follow the build</Link></div>

      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-slate pt-8 gap-4 relative z-10 pointer-events-auto">
        <p className="text-slate-500 text-[11px] font-mono tracking-widest uppercase">© Nexus Desktop Art Inc. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(255,51,79,0.8)] animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest text-accent">IN DEVELOPMENT</span>
        </div>
      </div>
    </footer>
  );
}
