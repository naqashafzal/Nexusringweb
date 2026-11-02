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
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#E5E5E7] bg-[#FFFFFF]/80 backdrop-blur-xl transition-all">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 text-[#1D1D1F] font-semibold tracking-tight text-sm group"
          >
            <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C93E50] group-hover:scale-105 transition-transform" />
            <span className="tracking-tight text-[15px] font-medium">Nexus Ring</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7 text-[13px] font-normal text-[#6E6E73]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#1D1D1F] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setWaitlist(true);
                setOpen(false);
              }}
              className="rounded-full bg-[#1D1D1F] hover:bg-[#000000] text-[#FFFFFF] px-4 py-1.5 text-xs font-medium tracking-tight transition-all duration-150 cursor-pointer flex items-center gap-1 shadow-sm"
            >
              <span>Join Early Access</span>
              <ArrowUpRight size={13} className="hidden sm:inline opacity-70" />
            </button>

            <button
              className="md:hidden text-[#1D1D1F] p-1.5 rounded-lg hover:bg-[#F5F5F7] transition-colors border border-[#E5E5E7]"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-3 text-sm font-normal text-[#6E6E73] border-t border-[#E5E5E7] bg-[#FFFFFF] shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#1D1D1F] transition-colors py-2 border-b border-[#F5F5F7]"
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
