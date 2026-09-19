import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between mix-blend-difference pointer-events-none">
      <Link href="/" className="flex items-center gap-2 pointer-events-auto">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <span className="font-semibold tracking-tighter text-sm text-white">NEXUS</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide pointer-events-auto">
        <Link href="/" className="text-white hover:opacity-50 transition-opacity">Overview</Link>
        <Link href="/hardware" className="text-white hover:opacity-50 transition-opacity">Hardware</Link>
        <Link href="/software" className="text-white hover:opacity-50 transition-opacity">Software</Link>
        <Link href="/preorder" className="text-white hover:opacity-50 transition-opacity">Pre-order</Link>
      </nav>
    </header>
  );
}
