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
            className="fixed inset-0 z-[90] bg-[#030508]/95 backdrop-blur-xl border-b border-[#151D2A] flex flex-col items-center justify-center gap-8"
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
          </motion.div>
        )}
      </AnimatePresence>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </>
  );
}
