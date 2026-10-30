"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const ComingSoonModal = dynamic(() => import("@/components/ComingSoonModal"), {
  ssr: false,
});

const links = [
  { href: "/hardware", label: "Hardware" },
  { href: "/software", label: "Software" },
  { href: "/digital-distraction", label: "Distraction" },
  { href: "/focus", label: "Focus Hub" },
  { href: "/journal", label: "Journal" },
  { href: "/campaign", label: "Development" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [waitlist, setWaitlist] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#283141] bg-[#080B12]/85 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white font-display font-bold tracking-tight text-base group"
          >
            <span className="w-5 h-5 rounded-full border-[3px] border-[#FF405A] group-hover:scale-105 transition-transform" />
            <span className="tracking-wider">NEXUS RING</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-[#A5AFBF]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setWaitlist(true);
                setOpen(false);
              }}
              className="rounded-full bg-white text-black px-5 py-2.5 text-xs font-bold tracking-wide hover:bg-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Join Waitlist</span>
              <ArrowUpRight size={14} className="hidden sm:inline" />
            </button>

            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-[#101723] transition-colors"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 text-sm font-mono uppercase tracking-wider text-[#A5AFBF] border-t border-[#283141] bg-[#080B12]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition-colors py-1.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {waitlist && (
        <ComingSoonModal isOpen={waitlist} onClose={() => setWaitlist(false)} />
      )}
    </>
  );
}
