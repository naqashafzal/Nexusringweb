"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

interface WaitlistFormProps {
  tierName?: string;
  source?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  onSuccess?: () => void;
}

export default function WaitlistForm({
  tierName = "Homepage Waitlist",
  source = "/",
  buttonText = "Join Waitlist",
  placeholder = "Enter your email address...",
  className = "",
  onSuccess,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          email: email.trim(),
          tier: tierName,
          source,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Could not register email. Please try again.");
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`p-6 sm:p-7 rounded-3xl border border-[#35C98A]/40 bg-[#11151C] text-center space-y-4 shadow-xl ${className}`}>
        <div className="w-12 h-12 rounded-full bg-[#35C98A]/20 text-[#35C98A] flex items-center justify-center mx-auto">
          <CheckCircle2 size={24} />
        </div>
        <div className="space-y-1">
          <h4 className="font-display font-bold text-xl text-[#F5F6F8]">
            You&apos;re on the early access waitlist!
          </h4>
          <p className="text-xs sm:text-sm text-[#A5AFBD] max-w-md mx-auto leading-relaxed font-light">
            Thank you for joining. We have recorded your email and will notify you as soon as production milestones and reservation slots open.
          </p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setEmail("");
            }}
            className="px-6 py-2.5 rounded-full border border-[#303A48] bg-[#080A0E] text-xs font-mono text-[#F5F6F8] hover:border-[#D83A50] transition-colors cursor-pointer"
          >
            Register another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-xl mx-auto space-y-3 ${className}`}>
      {error && (
        <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 text-xs flex items-center gap-2 text-left">
          <AlertCircle size={14} className="shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="email"
          required
          aria-label="Email address for waitlist"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className="flex-1 px-5 py-3.5 rounded-full bg-[#080A0E] border border-[#303A48] text-[#F5F6F8] placeholder:text-[#778292] text-sm focus:outline-none focus:border-[#D83A50] shadow-inner transition-colors"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-7 py-3.5 rounded-full bg-[#D83A50] hover:bg-[#EB5268] disabled:opacity-60 text-[#F5F6F8] font-semibold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(216,58,80,0.3)] flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <ArrowRight size={14} />
            </>
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#778292] pt-0.5 px-2">
        <ShieldCheck size={13} className="text-[#35C98A]" />
        <span>Free early access waitlist · Zero spam · Unsubscribe anytime</span>
      </div>
    </div>
  );
}

