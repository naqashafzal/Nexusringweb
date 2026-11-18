"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Download, Sun, Moon } from "lucide-react";
import { KICKSTARTER_URL } from "@/lib/kickstarter-data";

const links = [
  { href: "/#modes", label: "Product" },
  { href: "/campaign", label: "Kickstarter" },
  { href: "/hardware", label: "Hardware" },
  { href: "/software", label: "Software" },
  { href: "/download", label: "Download" },
  { href: "/digital-distraction", label: "Our Mission" },
  { href: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"day" | "night">("night");

  useEffect(() => {
    const saved =
      document.documentElement.dataset.theme === "day" ? "day" : "night";
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "night" ? "day" : "night";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("nexus-theme", next);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#303A48] bg-[#080A0E]/85 backdrop-blur-xl transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 text-[#F5F6F8] font-display font-bold tracking-tight text-base group shrink-0"
        >
          <div className="relative w-6 h-6 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Nexus Ring Emblem"
              width={24}
              height={24}
              priority
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="tracking-wider">NEXUS RING</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-[#A5AFBD]"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors py-1 ${
                link.href === "/download"
                  ? "text-[#F5F6F8] font-semibold hover:text-[#EB5268] flex items-center gap-1.5"
                  : "hover:text-[#F5F6F8]"
              }`}
            >
              {link.href === "/download" && (
                <Download size={13} className="text-[#D83A50]" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Day / Night Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "night" ? "Day" : "Night"} mode`}
            title={`Switch to ${theme === "night" ? "Day (Light)" : "Night (Dark)"} mode`}
            className="rounded-full border border-[#303A48] bg-[#11151C] hover:border-[#D83A50] text-[#F5F6F8] px-3 py-2 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
          >
            {theme === "day" ? (
              <>
                <Sun size={13} className="text-[#F0B35A]" />
                <span>Day</span>
              </>
            ) : (
              <>
                <Moon size={13} className="text-[#A5AFBD]" />
                <span>Night</span>
              </>
            )}
          </button>

          <a
            href={KICKSTARTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#D83A50] hover:bg-[#EB5268] text-[#F5F6F8] px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer flex items-center gap-1.5 shadow-[0_0_20px_rgba(216,58,80,0.25)] shrink-0"
          >
            <span>Back on Kickstarter</span>
            <ArrowUpRight size={14} className="hidden sm:inline" />
          </a>

          <button
            className="lg:hidden text-[#F5F6F8] p-2 rounded-lg hover:bg-[#11151C] transition-colors border border-[#303A48]"
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
          className="lg:hidden px-6 pb-6 pt-3 flex flex-col gap-4 text-xs font-mono uppercase tracking-wider text-[#A5AFBD] border-t border-[#303A48] bg-[#080A0E]"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#F5F6F8] transition-colors py-2 border-b border-[#303A48]/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {link.href === "/download" && (
                <Download size={14} className="text-[#D83A50]" />
              )}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
