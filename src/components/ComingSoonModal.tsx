"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            className="fixed inset-0 bg-[#080A0E]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="relative w-full max-w-lg rounded-3xl border border-[#303A48] bg-[#11151C] p-8 sm:p-10 shadow-2xl text-left overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1B222D] border border-[#303A48] text-[#A5AFBD] hover:text-[#F5F6F8] hover:border-[#D83A50] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#303A48] bg-[#1B222D] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
                  <Image
                    src="/branding/nexus-emblem.svg"
                    alt="Nexus Ring Emblem"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  Early Access Waitlist
                </div>

                <div className="space-y-2">
                  <h3 id="waitlist-title" className="text-2xl sm:text-3xl font-display font-black tracking-tight text-[#F5F6F8] uppercase">
                    BE THERE WHEN INTENTION BECOMES HARDWARE.
                  </h3>
                  <p className="text-[#A5AFBD] text-xs sm:text-sm font-light leading-relaxed">
                    Nexus Ring is in active prototype development. Join early access for engineering milestones, CAD releases, and crowdfunding launch alerts. No payment required.
                  </p>
                </div>

                {tierName && (
                  <div className="px-4 py-2.5 rounded-xl border border-[#303A48] bg-[#080A0E] text-xs font-mono text-[#A5AFBD] flex items-center justify-between">
                    <span>SELECTED INTEREST:</span>
                    <span className="text-[#F5F6F8] font-bold">{tierName}</span>
                  </div>
                )}

                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#080A0E] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D83A50]">
                    <Bell size={13} />
                    <span className="font-semibold">PROTOTYPE &amp; PRODUCTION UPDATES</span>
                  </div>
                  <p className="text-xs text-[#778292] font-light leading-relaxed">
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
                      className="flex-1 px-4 py-3 rounded-full bg-[#080A0E] border border-[#303A48] text-[#F5F6F8] placeholder:text-[#778292] text-xs sm:text-sm focus:outline-none focus:border-[#D83A50] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-full bg-[#D83A50] hover:bg-[#EB5268] disabled:opacity-60 text-[#F5F6F8] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(216,58,80,0.25)] flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          Join Early Access <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[#778292] pt-1 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#35C98A]" />
                      <span>Zero spam. No payment collected.</span>
                    </div>
                    <a
                      href="https://discord.gg/Q3tTGhH4k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A5AFBD] hover:text-[#F5F6F8] transition-colors flex items-center gap-1"
                    >
                      <span>Join Discord Community →</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-5 relative z-10">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <Image
                    src="/branding/nexus-app-icon.png"
                    alt="Nexus App Icon"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-2xl shadow-[0_0_30px_rgba(216,58,80,0.35)] border border-[#303A48]"
                  />
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#35C98A] text-[#080A0E] flex items-center justify-center border-2 border-[#11151C]">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h4 id="waitlist-title" className="text-xl sm:text-2xl font-display font-bold text-[#F5F6F8]">
                    You’re on the Early Access List!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A5AFBD] max-w-sm mx-auto font-light leading-relaxed">
                    Thank you for following Nexus Ring. We will share authentic engineering milestones and notify you as soon as backer slots open.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#080A0E] space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A5AFBD]">
                    <span>MAKER &amp; BUILDER COMMUNITY</span>
                  </div>
                  <p className="text-xs text-[#778292] font-light leading-relaxed">
                    Follow 3D print tests, sensor development, and firmware progress, or chat directly with the creator.
                  </p>
                  <a
                    href="https://discord.gg/Q3tTGhH4k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#1B222D] hover:bg-[#303A48] border border-[#303A48] text-[#F5F6F8] text-xs font-semibold font-mono tracking-wide transition-colors"
                  >
                    <span>Join the Discord Server</span>
                    <ArrowRight size={13} />
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full border border-[#303A48] bg-[#1B222D] text-xs font-mono text-[#F5F6F8] hover:border-[#D83A50] transition-colors cursor-pointer"
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
