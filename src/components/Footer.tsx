"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { KICKSTARTER_URL } from "@/lib/kickstarter-data";

export default function Footer() {
  return (
    <footer className="relative z-[100] w-full pt-20 pb-12 border-t border-[#303A48] bg-[#080A0E] flex flex-col items-center justify-center pointer-events-auto text-[#A5AFBD] shadow-2xl">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 relative z-10 pointer-events-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/branding/nexus-emblem.svg"
              alt="Nexus Ring Emblem"
              width={26}
              height={26}
              className="w-6 h-6 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-nexus-brand font-bold tracking-wider text-base text-[#F5F6F8]">
              NEXUS RING
            </span>
          </Link>
          <p className="text-xs font-mono font-bold text-[#F5F6F8] tracking-wider">
            THE PHYSICAL OFF-SWITCH FOR DISTRACTIONS
          </p>
          <p className="text-[11px] font-light text-[#A5AFBD] leading-relaxed max-w-[260px]">
            Drop the magnetic totem to launch your work apps and silence distractions across PC, Mac, Linux, Android &amp; iOS. No subscription.
          </p>
        </div>

        {/* Product Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">
            Product
          </h4>
          <Link href="/#how-it-works" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Choose. Dock. Work.
          </Link>
          <Link href="/#modes" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Four Operating Modes
          </Link>
          <Link href="/hardware" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Hardware Architecture
          </Link>
          <Link href="/software" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Companion Apps &amp; Flow
          </Link>
          <Link
            href="/download"
            className="text-xs text-[#D83A50] font-semibold hover:text-[#EB5268] transition-colors"
          >
            Software Download
          </Link>
          <Link href="/preorder" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Choose Your Tier
          </Link>
        </div>

        {/* Kickstarter Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">
            Kickstarter
          </h4>
          <a
            href={KICKSTARTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#35C98A] font-semibold hover:underline transition-colors"
          >
            View Kickstarter Campaign →
          </a>
          <Link href="/campaign" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Full Campaign Story
          </Link>
          <Link href="/campaign#tiers" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Rewards ($39 – $199)
          </Link>
          <Link href="/press" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Press Kit &amp; Media Assets
          </Link>
          <Link href="/research" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Design Research
          </Link>
          <a
            href="https://github.com/naqashafzal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-[#F5F6F8] transition-colors"
          >
            GitHub Repository
          </a>
        </div>

        {/* Mission & Ideas Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">
            Mission &amp; Ideas
          </h4>
          <Link href="/digital-distraction" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Digital Distraction
          </Link>
          <Link href="/focus" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Focus Resource Hub
          </Link>
          <Link href="/journal" className="text-xs hover:text-[#F5F6F8] transition-colors">
            The Focus Journal
          </Link>
          <Link href="/about" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Creator &amp; Vision
          </Link>
          <Link href="/compare" className="text-xs hover:text-[#F5F6F8] transition-colors">
            Approach Comparison
          </Link>
        </div>

        {/* Campaign Status Notice */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#F5F6F8] font-mono font-bold text-xs uppercase tracking-widest mb-2">
            First Production Run
          </h4>
          <p className="text-xs leading-relaxed text-[#A5AFBD]">
            Nexus Ring is built and tested, launching our first production run on Kickstarter (US$ 10,000 goal · Jul 2027 estimated delivery).
          </p>
          <a
            href={KICKSTARTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#D83A50] font-mono hover:underline"
          >
            Back on Kickstarter →
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-[#303A48] pt-8 gap-4 relative z-10 pointer-events-auto">
        <p className="text-[#778292] text-[11px] font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Nexus Ring · Created by Naqash Afzal Zakria
        </p>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#35C98A] shadow-[0_0_10px_rgba(53,201,138,0.6)]" />
          <span className="text-xs font-mono tracking-widest text-[#35C98A]">
            BUILT, TESTED &amp; ON KICKSTARTER
          </span>
        </div>
      </div>
    </footer>
  );
}
