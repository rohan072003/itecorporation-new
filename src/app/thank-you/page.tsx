import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileCheck2,
  Globe2,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";

export const metadata: Metadata = {
  title: "Inquiry Successfully Logged | ITEC",
  description: "Your electrical equipment sourcing inquiry has been received by our Pune export desk.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#071322] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.04] pointer-events-none" />

      {/* Top Simple Navigation */}
      <header className="border-b border-white/10 bg-[#071322]/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded"
            aria-label="ITEC Homepage"
          >
            <span className="font-extrabold text-2xl tracking-tight text-white leading-none group-hover:text-[#38BDF8] transition-colors">
              <span className="text-[#38BDF8]">I</span>TEC
            </span>
            <span className="text-[10px] tracking-wider text-slate-300 uppercase font-semibold mt-1">
              Indian Trading &amp; Exports Corporation
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Thank You Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 flex flex-col justify-center">
        {/* Success Card */}
        <div className="bg-[#0A1D36]/90 border border-sky-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl glow-blue text-center">
          {/* Success Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 mb-6 shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inquiry Successfully Logged</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Thank You For Your Inquiry!
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed mb-8">
            Your technical request has been directly routed to our <span className="text-white font-semibold">Pune Engineering &amp; Export Coordination Desk</span>. Our team will review your specifications and respond shortly.
          </p>

          {/* Response Guarantee Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left mb-8 max-w-2xl mx-auto">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <Clock className="w-4 h-4 text-[#38BDF8]" />
                <span>24h Response</span>
              </div>
              <p className="text-[11px] text-slate-300">Guaranteed pricing within 1 business day.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <FileCheck2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Technical Review</span>
              </div>
              <p className="text-[11px] text-slate-300">Engineered to IS / IEC / CE standards.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                <Globe2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Export Packaging</span>
              </div>
              <p className="text-[11px] text-slate-300">ISPM-15 seaworthy door-to-port logistics.</p>
            </div>
          </div>

          {/* Need Immediate Support? WhatsApp CTA */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-5 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono mb-1">
                  ⚡ Urgent Engineering Requirement?
                </div>
                <div className="text-sm font-semibold text-white">
                  Chat directly with our Pune export lead on WhatsApp
                </div>
                <div className="text-xs text-slate-300">
                  Instant response for urgent quotes &amp; tender bids: <span className="font-mono text-emerald-300 font-bold">{CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}</span>
                </div>
              </div>

              <a
                href={CONTACT_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/40 shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Navigation CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B4EA2] via-[#1E70D6] to-[#38BDF8] hover:from-[#093d7e] hover:to-[#0B4EA2] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none text-white text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer"
            >
              <PackageCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Browse 15 Products</span>
            </Link>
          </div>
        </div>

        {/* Security & Confidentiality Bar */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs text-slate-300 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>All technical drawings &amp; project specifications are treated strictly under Non-Disclosure Agreements (NDA).</span>
        </div>
      </main>

      {/* Simple Clean Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400 relative z-10">
        <p>© 2026 ITEC – Indian Trading &amp; Exports Corporation · Pune, Maharashtra, India · All Rights Reserved.</p>
      </footer>
    </div>
  );
}
