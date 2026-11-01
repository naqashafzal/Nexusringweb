"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const ComingSoonModal = dynamic(() => import("@/components/ComingSoonModal"), {
  ssr: false,
});

const links = [
  { href: "/#modes", label: "Product" },
  { href: "/hardware", label: "Hardware" },
  { href: "/software", label: "Software" },
  { href: "/digital-distraction", label: "Our Mission" },
  { href: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [waitlist, setWaitlist] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#303A48] bg-[#080A0E]/85 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-[#F5F6F8] font-display font-bold tracking-tight text-base group"
          >
            <span className="w-4 h-4 rounded-full border-[2.5px] border-[#D83A50] group-hover:scale-105 transition-transform" />
            <span className="tracking-wider">NEXUS RING</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-[#A5AFBD]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#F5F6F8] transition-colors py-1"
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
              className="rounded-full bg-[#D83A50] hover:bg-[#EB5268] text-[#F5F6F8] px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer flex items-center gap-1.5 shadow-[0_0_20px_rgba(216,58,80,0.25)]"
            >
              <span>Join Early Access</span>
              <ArrowUpRight size={14} className="hidden sm:inline" />
            </button>

            <button
              className="md:hidden text-[#F5F6F8] p-2 rounded-lg hover:bg-[#11151C] transition-colors border border-[#303A48]"
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
            className="md:hidden px-6 pb-6 pt-3 flex flex-col gap-4 text-xs font-mono uppercase tracking-wider text-[#A5AFBD] border-t border-[#303A48] bg-[#080A0E]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#F5F6F8] transition-colors py-2 border-b border-[#303A48]/40"
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
