"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-8 py-6 flex items-center justify-between mix-blend-difference pointer-events-none">
        <Link href="/" className="flex items-center gap-2 pointer-events-auto" onClick={() => setIsOpen(false)}>
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span className="font-semibold tracking-tighter text-sm text-white">NEXUS</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide pointer-events-auto">
          <Link href="/" className="text-white hover:opacity-50 transition-opacity">Overview</Link>
          <Link href="/features" className="text-white hover:opacity-50 transition-opacity">Features</Link>
          <Link href="/hardware" className="text-white hover:opacity-50 transition-opacity">Hardware</Link>
          <Link href="/software" className="text-white hover:opacity-50 transition-opacity">Software</Link>
          <Link href="/research" className="text-white hover:opacity-50 transition-opacity">Research</Link>
          <Link href="/about" className="text-white hover:opacity-50 transition-opacity">Vision</Link>
          <Link href="/campaign" className="text-emerald-400 hover:opacity-50 transition-opacity">Campaign</Link>
          <button
            onClick={() => setShowComingSoon(true)}
            className="text-white hover:text-[#00FF9D] transition-colors cursor-pointer"
          >
            Pre-order
          </button>
          <a
            href="https://discord.gg/Q3tTGhH4k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#5865F2]/40 bg-[#5865F2]/15 hover:bg-[#5865F2]/30 hover:border-[#5865F2] text-white text-xs font-mono transition-all group"
            title="Join the Nexus Ring Discord Community"
          >
            <svg className="w-3.5 h-3.5 fill-[#5865F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Discord</span>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white pointer-events-auto mix-blend-difference"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#030508]/95 backdrop-blur-xl border-b border-[#151D2A] flex flex-col items-center justify-center gap-7"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Overview</Link>
            <Link href="/features" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Features</Link>
            <Link href="/hardware" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Hardware</Link>
            <Link href="/software" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Software</Link>
            <Link href="/research" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Research</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Vision</Link>
            <Link href="/campaign" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-emerald-400">Campaign</Link>
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowComingSoon(true);
              }} 
              className="text-2xl font-medium tracking-tighter text-white hover:text-[#00FF9D] transition-colors"
            >
              Pre-order
            </button>
            <a
              href="https://discord.gg/Q3tTGhH4k"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#5865F2] bg-[#5865F2]/20 text-white text-sm font-mono tracking-wide mt-2"
            >
              <svg className="w-4 h-4 fill-[#5865F2]" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Join Discord</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </>
  );
}
