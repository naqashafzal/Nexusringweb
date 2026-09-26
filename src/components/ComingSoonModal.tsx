"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ArrowRight, Bell, ShieldCheck } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialEmail/initialSubmitted when modal opens
  React.useEffect(() => {
    if (isOpen) {
      if (initialEmail) setEmail(initialEmail);
      if (initialSubmitted) setSubmitted(true);
    }
  }, [isOpen, initialEmail, initialSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          email,
          tier: tierName || "Priority Waitlist",
          source: typeof window !== "undefined" ? window.location.pathname : "/modal",
        }),
      });
    } catch (err) {
      console.error("Error submitting waitlist email:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
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
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-3xl border border-emerald/40 bg-matte p-8 sm:p-10 shadow-[0_0_80px_rgba(0,255,157,0.25)] text-left overflow-hidden z-10"
          >
            {/* Top decorative glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-emerald/[0.15] blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-electric/[0.12] blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate/80 border border-slate text-slate-400 hover:text-white hover:border-emerald/50 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald/40 bg-emerald/10 text-emerald text-[11px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
                  Coming Soon · Priority Launch
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                    LAUNCHING SOON.
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                    We are putting the final touches on the **Nexus Ring V1** campaign. We haven’t opened public crowdfunding pledges just yet.
                  </p>
                </div>

                {tierName && (
                  <div className="px-4 py-2.5 rounded-xl border border-slate bg-vantablack text-xs font-mono text-slate-500 flex items-center justify-between">
                    <span>SELECTED TIER:</span>
                    <span className="text-emerald font-bold">{tierName}</span>
                  </div>
                )}

                <div className="p-4 rounded-2xl border border-slate bg-vantablack/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-electric">
                    <Bell size={14} />
                    <span>EARLY ACCESS WAITLIST</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Enter your email to receive an exclusive instant invite 1 hour before public launch to lock in **limited Early Adopter pricing**.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3.5 rounded-xl bg-vantablack border border-slate text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 rounded-xl bg-emerald hover:bg-[#00ffaa] disabled:opacity-60 text-vantablack font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-vantablack border-t-transparent rounded-full animate-spin" />
                          <span>Reserving...</span>
                        </>
                      ) : (
                        <>
                          Notify Me <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-500 pt-1 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-emerald" />
                      <span>Zero spam. Early-bird reservation.</span>
                    </div>
                    <a
                      href="https://discord.gg/Q3tTGhH4k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5865F2] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>Join Discord ➔</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-5 relative z-10">
                <div className="w-16 h-16 rounded-full bg-emerald/10 border border-emerald/40 text-emerald flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(0,255,157,0.3)]">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">
                    You're on the Priority List!
                  </h4>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto font-light">
                    We’ve reserved your spot. As soon as the campaign goes live, we'll send your direct link with guaranteed early-bird access.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-[#5865F2]/40 bg-[#5865F2]/10 space-y-3 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#5865F2]">
                    <svg className="w-4 h-4 fill-[#5865F2]" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <span>FOUNDER &amp; BUILDER COMMUNITY</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Join the official Discord to see daily 3D print builds, test early firmware hooks, and chat with founder Naqash Afzal.
                  </p>
                  <a
                    href="https://discord.gg/Q3tTGhH4k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold font-mono tracking-wide transition-colors shadow-lg"
                  >
                    <span>Join Official Discord Server</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-xl border border-slate bg-vantablack text-sm font-mono text-emerald hover:border-emerald/50 transition-colors"
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
