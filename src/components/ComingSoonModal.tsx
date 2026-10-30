"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Bell, ShieldCheck, AlertCircle } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierName?: string;
  initialEmail?: string;
  initialSubmitted?: boolean;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
  tierName,
  initialEmail = "",
  initialSubmitted = false,
}: ComingSoonModalProps) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#080B12]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="relative w-full max-w-lg rounded-3xl border border-[#283141] bg-[#101723] p-8 sm:p-10 shadow-[0_0_80px_rgba(255,64,90,0.15)] text-left overflow-hidden z-10"
          >
            {/* Top decorative glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#FF405A]/[0.08] blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#172130] border border-[#283141] text-[#A5AFBF] hover:text-white hover:border-[#FF405A]/50 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#283141] bg-[#172130] text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF405A]" />
                  Early Access Waitlist
                </div>

                <div className="space-y-2">
                  <h3 id="waitlist-title" className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                    FOLLOW THE BUILD.
                  </h3>
                  <p className="text-[#A5AFBF] text-sm sm:text-base font-light leading-relaxed">
                    Nexus Ring is in active development. Sign up for prototype updates and launch announcements. No payment required.
                  </p>
                </div>

                {tierName && (
                  <div className="px-4 py-2.5 rounded-xl border border-[#283141] bg-[#080B12] text-xs font-mono text-[#A5AFBF] flex items-center justify-between">
                    <span>SELECTED INTEREST:</span>
                    <span className="text-white font-bold">{tierName}</span>
                  </div>
                )}

                <div className="p-4 rounded-2xl border border-[#283141] bg-[#080B12] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF405A]">
                    <Bell size={14} />
                    <span>PROTOTYPE &amp; LAUNCH UPDATES</span>
                  </div>
                  <p className="text-xs text-[#A5AFBF] font-light leading-relaxed">
                    We share genuine engineering progress, testing milestones, and early bird access before public launch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && (
                    <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle size={14} className="shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      aria-label="Email address"
                      autoComplete="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      className="flex-1 px-4 py-3.5 rounded-xl bg-[#080B12] border border-[#283141] text-white placeholder:text-[#475569] text-sm focus:outline-none focus:border-[#FF405A] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 rounded-xl bg-[#FF405A] hover:bg-[#e0354e] disabled:opacity-60 text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,64,90,0.35)] flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          Join Waitlist <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[#A5AFBF] pt-1 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#35C98A]" />
                      <span>Zero spam. No payment collected.</span>
                    </div>
                    <a
                      href="https://discord.gg/Q3tTGhH4k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A5AFBF] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>Join Discord Community →</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-5 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#35C98A]/10 border border-[#35C98A]/30 text-[#35C98A] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(53,201,138,0.2)]">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2">
                  <h4 id="waitlist-title" className="text-2xl font-display font-bold text-white">
                    You’re on the Waitlist!
                  </h4>
                  <p className="text-sm text-[#A5AFBF] max-w-sm mx-auto font-light leading-relaxed">
                    Thank you for joining. We will share legitimate development milestones and notify you as soon as early access opens.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-[#283141] bg-[#080B12] space-y-3 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A5AFBF]">
                    <span>MAKER &amp; BUILDER COMMUNITY</span>
                  </div>
                  <p className="text-xs text-[#A5AFBF] font-light leading-relaxed">
                    Follow 3D print tests, sensor development, and firmware progress, or chat directly with the creator.
                  </p>
                  <a
                    href="https://discord.gg/Q3tTGhH4k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#172130] hover:bg-[#283141] border border-[#283141] text-white text-xs font-bold font-mono tracking-wide transition-colors"
                  >
                    <span>Join the Discord Server</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-xl border border-[#283141] bg-[#172130] text-sm font-mono text-white hover:border-[#FF405A] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
