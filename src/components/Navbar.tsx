"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
const ComingSoonModal = dynamic(() => import("@/components/ComingSoonModal"));
const links = [{href: "/#modes", label: "Product"}, {href: "/#how-it-works", label: "How it works"}, {href: "/campaign", label: "Development"}];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [waitlist, setWaitlist] = useState(false);
  return <>
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-vantablack/90 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-white font-display font-semibold tracking-tight"><span className="w-6 h-6 rounded-full border-[5px] border-accent" />NEXUS RING</Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-sm text-slate-300">{links.map(link => <Link key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>)}</nav>
        <div className="flex items-center gap-4"><button onClick={() => {setWaitlist(true); setOpen(false);}} className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-slate-200 transition-colors">Join the Waitlist <ArrowUpRight size={14} className="hidden sm:inline ml-1" /></button><button className="md:hidden text-white" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden px-6 pb-6 flex flex-col gap-5 text-slate-300">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
    </header>
    {waitlist && <ComingSoonModal isOpen={waitlist} onClose={() => setWaitlist(false)} />}
  </>;
}
