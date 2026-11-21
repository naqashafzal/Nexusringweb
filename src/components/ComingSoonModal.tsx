"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Mail,
  Zap,
  Lock,
  Cpu,
  Sparkles,
} from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierName?: string;
  initialEmail?: string;
  initialSubmitted?: boolean;
}

const emptySubscribe = () => () => {};

export default function ComingSoonModal({
  isOpen,
  onClose,
  tierName,
  initialEmail = "",
  initialSubmitted = false,
}: ComingSoonModalProps) {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [email, setEmail] = useState(initialEmail);
  const [submitted, setSubmitted] = useState(initialSubmitted);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => {
      setEmail(initialEmail);
      setSubmitted(initialSubmitted);
      setError("");
    }, 0);
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(
      () => document.querySelector<HTMLElement>('[role="dialog"] input, [role="dialog"] button')?.focus(),
      50
    );
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const controls = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[role="dialog"] button:not(:disabled), [role="dialog"] input, [role="dialog"] a[href]'
        )
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keyHandler);
      previousFocus?.focus();
    };
  }, [isOpen, initialEmail, initialSubmitted, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          email: email.trim(),
          tier: tierName || "Priority Waitlist",
          source: typeof window !== "undefined" ? window.location.pathname : "/modal",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "We couldn't save your signup. Please try again in a moment.";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setError("");
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  if (!isClient || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop blur with rich obsidian tone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#080A0E]/85 backdrop-blur-2xl"
          />

          {/* Modal Card with subtle halo glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="relative w-full max-w-lg rounded-3xl border border-[#303A48] bg-[#11151C] shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-left overflow-hidden z-10 my-auto"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-[#D83A50]/15 blur-[70px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-[#35C98A]/10 blur-[70px] pointer-events-none" />

            {/* Top Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-[#080A0E]/80 backdrop-blur-md border border-[#303A48] text-[#A5AFBD] hover:text-white hover:border-[#D83A50] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={17} />
            </button>

            {!submitted ? (
              <div className="relative z-10">
                {/* Visual Header Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#303A48] bg-[#080A0E]">
                  <Image
                    src="/images/kickstarter/ks-hero-poster.png"
                    alt="Nexus Ring Command Center"
                    fill
                    priority
                    className="object-cover object-center opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/40 to-transparent" />

                  {/* Header Pill */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-2 flex-wrap">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D83A50]/40 bg-[#D83A50]/15 text-[#D83A50] text-[10px] font-mono tracking-widest uppercase backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D83A50] animate-pulse" />
                      Early Access Waitlist
                    </div>
                    <span className="text-[10px] font-mono text-[#35C98A] tracking-wider uppercase">
                      Est. Delivery Jul 2027
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Headline & Description */}
                  <div className="space-y-2">
                    <h3
                      id="waitlist-title"
                      className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white leading-tight uppercase"
                    >
                      CLAIM YOUR PHYSICAL <span className="text-[#D83A50]">OFF-SWITCH.</span>
                    </h3>
                    <p className="text-[#A5AFBD] text-xs sm:text-sm font-light leading-relaxed">
                      Reserve your priority spot in our first production run. Move your focus into the physical world with lifetime core desktop &amp; mobile companion apps.
                    </p>
                  </div>

                  {/* Tier Highlight (if specified) */}
                  {tierName && (
                    <div className="p-3 rounded-2xl border border-[#303A48] bg-[#080A0E] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <Sparkles size={14} className="text-[#D83A50] shrink-0" />
                        <span className="text-[#778292]">INTEREST:</span>
                        <span className="text-white font-bold">{tierName}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#35C98A] uppercase">Priority Queue</span>
                    </div>
                  )}

                  {/* 3 Core Value Pillars */}
                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div className="p-3 rounded-xl border border-[#303A48]/80 bg-[#080A0E]/60 space-y-1">
                      <Zap size={14} className="text-[#D83A50]" />
                      <p className="text-[11px] font-display font-bold text-white leading-snug">Priority Slot</p>
                      <p className="text-[10px] text-[#778292] leading-tight">First batch allocation</p>
                    </div>
                    <div className="p-3 rounded-xl border border-[#303A48]/80 bg-[#080A0E]/60 space-y-1">
                      <Lock size={14} className="text-[#35C98A]" />
                      <p className="text-[11px] font-display font-bold text-white leading-snug">Zero Sub</p>
                      <p className="text-[10px] text-[#778292] leading-tight">Lifetime core apps</p>
                    </div>
                    <div className="p-3 rounded-xl border border-[#303A48]/80 bg-[#080A0E]/60 space-y-1">
                      <Cpu size={14} className="text-[#A5AFBD]" />
                      <p className="text-[11px] font-display font-bold text-white leading-snug">Build Logs</p>
                      <p className="text-[10px] text-[#778292] leading-tight">Direct updates &amp; CAD</p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                    {error && (
                      <div className="p-3 rounded-xl border border-red-500/40 bg-red-500/10 text-red-200 text-xs flex items-center gap-2">
                        <AlertCircle size={14} className="shrink-0 text-red-400" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#778292] pointer-events-none" />
                      <input
                        aria-label="Email address"
                        autoComplete="email"
                        type="email"
                        required
                        placeholder="Enter your email for priority reservation..."
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080A0E] border border-[#303A48] text-white placeholder:text-[#778292] text-xs sm:text-sm font-mono focus:outline-none focus:border-[#D83A50] focus:ring-1 focus:ring-[#D83A50] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#D83A50] hover:bg-[#EB5268] disabled:opacity-60 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(216,58,80,0.35)] hover:shadow-[0_0_35px_rgba(216,58,80,0.5)] flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:cursor-not-allowed hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Reserving Priority Spot...</span>
                        </>
                      ) : (
                        <>
                          <span>Reserve My Early Access Spot</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#778292] pt-1">
                      <ShieldCheck size={13} className="text-[#35C98A]" />
                      <span>100% Free · No Payment Required · Zero Spam</span>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center space-y-6 relative z-10">
                {/* Celebratory Icon */}
                <div className="relative w-20 h-20 mx-auto">
                  <div className="w-20 h-20 rounded-3xl bg-[#35C98A]/15 border border-[#35C98A]/40 flex items-center justify-center shadow-[0_0_30px_rgba(53,201,138,0.25)]">
                    <CheckCircle2 size={38} className="text-[#35C98A]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#35C98A] font-bold">
                    Reservation Confirmed
                  </span>
                  <h4 id="waitlist-title" className="text-2xl sm:text-3xl font-display font-black text-white">
                    YOU&apos;RE ON THE PRIORITY LIST!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A5AFBD] max-w-sm mx-auto font-light leading-relaxed">
                    We added <span className="font-mono text-white font-semibold">{email}</span> to our early production queue.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#080A0E] text-left space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-[#778292]">
                    <span>STATUS</span>
                    <span className="text-[#35C98A] font-bold">Reserved</span>
                  </div>
                  <div className="flex justify-between text-[#778292]">
                    <span>EDITION</span>
                    <span className="text-white">{tierName || "First Production Run"}</span>
                  </div>
                  <div className="flex justify-between text-[#778292]">
                    <span>EST. DELIVERY</span>
                    <span className="text-white">July 2027</span>
                  </div>
                </div>

                <p className="text-xs text-[#778292] max-w-sm mx-auto font-light">
                  We will email you directly when hardware batches open and downloadable software releases go live.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-xl border border-[#303A48] bg-[#1B222D] text-xs font-mono font-bold text-white hover:border-[#D83A50] hover:bg-[#D83A50]/10 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
