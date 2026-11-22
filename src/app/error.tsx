"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, RefreshCw, MessageSquare } from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error details without leaking sensitive client info
    console.error("[Application Error Caught]:", error?.message || error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#071322] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A1D36] border border-red-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto mb-5">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Temporary Technical Hiccup
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          We encountered an unexpected condition while loading this page. Our engineering team has been notified.
        </p>

        {error?.digest && (
          <div className="text-[11px] font-mono text-slate-400 bg-white/5 py-1 px-2 rounded mb-6 inline-block">
            Error ID: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0B4EA2] to-[#1E70D6] hover:from-[#083A7B] hover:to-[#0B4EA2] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
          <span>Need immediate assistance? </span>
          <a
            href={CONTACT_DETAILS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38BDF8] hover:underline inline-flex items-center gap-1 font-semibold"
          >
            <MessageSquare className="w-3 h-3" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
