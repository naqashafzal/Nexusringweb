"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ArrowRight, Bell, ShieldCheck } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  tierName?: string;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
  tierName,
}: ComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
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
            className="relative w-full max-w-lg rounded-3xl border border-[#00FF9D]/40 bg-[#070A10] p-8 sm:p-10 shadow-[0_0_80px_rgba(0,255,157,0.25)] text-left overflow-hidden z-10"
          >
            {/* Top decorative glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#00FF9D]/[0.15] blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#00E5FF]/[0.12] blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#151D2A]/80 border border-[#151D2A] text-[#94A3B8] hover:text-white hover:border-[#00FF9D]/50 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00FF9D]/40 bg-[#00FF9D]/10 text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
                  Coming Soon · Priority Launch
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                    LAUNCHING SOON.
                  </h3>
                  <p className="text-[#94A3B8] text-sm sm:text-base font-light leading-relaxed">
                    We are putting the final touches on the **Nexus Ring V1** campaign. We haven’t opened public crowdfunding pledges just yet.
                  </p>
                </div>

                {tierName && (
                  <div className="px-4 py-2.5 rounded-xl border border-[#151D2A] bg-[#030508] text-xs font-mono text-[#64748B] flex items-center justify-between">
                    <span>SELECTED TIER:</span>
                    <span className="text-[#00FF9D] font-bold">{tierName}</span>
                  </div>
                )}

                <div className="p-4 rounded-2xl border border-[#151D2A] bg-[#030508]/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
                    <Bell size={14} />
                    <span>EARLY ACCESS WAITLIST</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
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
                      className="flex-1 px-4 py-3.5 rounded-xl bg-[#030508] border border-[#151D2A] text-white placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00FF9D] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-[#00FF9D] hover:bg-[#00ffaa] text-[#030508] font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2 shrink-0"
                    >
                      Notify Me <ArrowRight size={16} />
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                    <ShieldCheck size={13} className="text-[#00FF9D]" />
                    <span>Zero spam. Guaranteed early-bird reservation access.</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-5 relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/40 text-[#00FF9D] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(0,255,157,0.3)]">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">
                    You're on the Priority List!
                  </h4>
                  <p className="text-sm text-[#94A3B8] max-w-sm mx-auto font-light">
                    We’ve reserved your spot. As soon as the campaign goes live, we'll send your direct link with guaranteed early-bird access.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-xl border border-[#151D2A] bg-[#030508] text-sm font-mono text-[#00FF9D] hover:border-[#00FF9D]/50 transition-colors"
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
