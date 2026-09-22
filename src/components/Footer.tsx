import React from 'react';
import Link from 'next/link';
import DiscordIcon from '@/components/DiscordIcon';

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-[#151D2A] bg-[#030508] flex flex-col items-center justify-center pointer-events-auto text-[#94a3b8] shadow-2xl">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10 pointer-events-auto">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-3.5 h-3.5 bg-[#00FF9D] rounded-full shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-[#00FF9D] transition-colors">NEXUS RING</span>
          </Link>
          <p className="text-xs font-light mt-1 text-[#64748b] leading-relaxed max-w-[220px]">
            Stop Distractions. Anchor Your Mind with Tactile Hardware & Local AI.
          </p>
          <a
            href="https://discord.gg/N82CpZtGu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/40 text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 text-xs font-mono font-bold w-fit shadow-[0_0_15px_rgba(88,101,242,0.2)] mt-1"
          >
            <DiscordIcon className="w-4 h-4" />
            <span>Join Discord Server</span>
          </a>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Product</h4>
          <Link href="/features" className="text-xs hover:text-[#00FF9D] transition-colors">Feature Matrix</Link>
          <Link href="/campaign" className="text-xs hover:text-[#00FF9D] transition-colors">Crowdfunding Campaign</Link>
          <Link href="/hardware" className="text-xs hover:text-[#00FF9D] transition-colors">Hardware Architecture</Link>
          <Link href="/software" className="text-xs hover:text-[#00FF9D] transition-colors">Software & Local AI</Link>
          <Link href="/preorder" className="text-xs hover:text-[#00FF9D] transition-colors">Reserve Batch 01</Link>
        </div>

        {/* Vision & Community Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Vision & Community</h4>
          <Link href="/about" className="text-xs hover:text-[#00FF9D] transition-colors">Vision & Founders</Link>
          <a href="https://discord.gg/N82CpZtGu" target="_blank" rel="noopener noreferrer" className="text-xs text-[#5865F2] hover:text-white font-semibold transition-colors flex items-center gap-1.5">
            <DiscordIcon className="w-3.5 h-3.5" />
            <span>Join Discord Community</span>
          </a>
          <Link href="/research" className="text-xs hover:text-[#00FF9D] transition-colors">Cognitive White Paper</Link>
          <Link href="/campaign" className="text-xs hover:text-[#00FF9D] transition-colors">Campaign FAQ</Link>
          <Link href="/hardware" className="text-xs hover:text-[#00FF9D] transition-colors">Assembly Blueprint</Link>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-2">Legal & Privacy</h4>
          <Link href="/software" className="text-xs hover:text-[#00FF9D] transition-colors">100% Air-Gapped Privacy Policy</Link>
          <Link href="/preorder" className="text-xs hover:text-[#00FF9D] transition-colors">Terms of Service</Link>
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-[#151D2A] pt-8 gap-4 relative z-10 pointer-events-auto">
        <p className="text-[#64748b] text-[11px] font-mono tracking-widest uppercase">© 2026 NEXUS DESKTOP ART INC. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://discord.gg/N82CpZtGu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#5865F2] hover:text-white transition-colors"
          >
            <DiscordIcon className="w-3.5 h-3.5" />
            <span>discord.gg/N82CpZtGu</span>
          </a>
          <div className="flex items-center gap-2 border-l border-[#151D2A] pl-4">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.8)] animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest text-[#00FF9D]">SYSTEM: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
