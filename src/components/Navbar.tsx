"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DiscordIcon from '@/components/DiscordIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-8 py-6 flex items-center justify-between mix-blend-difference pointer-events-none">
        <Link href="/" className="flex items-center gap-2 pointer-events-auto" onClick={() => setIsOpen(false)}>
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span className="font-semibold tracking-tighter text-sm text-white">NEXUS</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium tracking-wide pointer-events-auto">
          <Link href="/" className="text-white hover:opacity-50 transition-opacity">Overview</Link>
          <Link href="/features" className="text-white hover:opacity-50 transition-opacity">Features</Link>
          <Link href="/hardware" className="text-white hover:opacity-50 transition-opacity">Hardware</Link>
          <Link href="/software" className="text-white hover:opacity-50 transition-opacity">Software</Link>
          <Link href="/research" className="text-white hover:opacity-50 transition-opacity">Research</Link>
          <Link href="/about" className="text-white hover:opacity-50 transition-opacity">Vision</Link>
          <Link href="/campaign" className="text-emerald-400 hover:opacity-50 transition-opacity">Campaign</Link>
          <Link href="/preorder" className="text-white hover:opacity-50 transition-opacity">Pre-order</Link>
          <a
            href="https://discord.gg/N82CpZtGu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5865F2]/20 hover:bg-[#5865F2]/40 border border-[#5865F2]/60 text-white text-xs font-semibold tracking-tight transition-all duration-200 shadow-[0_0_15px_rgba(88,101,242,0.3)] hover:shadow-[0_0_25px_rgba(88,101,242,0.6)]"
          >
            <DiscordIcon className="w-3.5 h-3.5 text-[#5865F2]" />
            <span>Join Discord</span>
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
            className="fixed inset-0 z-[90] bg-[#030508]/95 backdrop-blur-xl border-b border-[#151D2A] flex flex-col items-center justify-center gap-6"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Overview</Link>
            <Link href="/features" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Features</Link>
            <Link href="/hardware" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Hardware</Link>
            <Link href="/software" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Software</Link>
            <Link href="/research" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Research</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Vision</Link>
            <Link href="/campaign" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-emerald-400">Campaign</Link>
            <Link href="/preorder" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tighter text-white">Pre-order</Link>
            <a
              href="https://discord.gg/N82CpZtGu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-lg font-bold tracking-tight shadow-[0_0_25px_rgba(88,101,242,0.5)] transition-all"
            >
              <DiscordIcon className="w-5 h-5" />
              <span>Join Discord</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
