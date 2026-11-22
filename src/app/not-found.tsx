import React from "react";
import Link from "next/link";
import { ArrowLeft, FileQuestion, PackageCheck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#071322] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A1D36] border border-sky-400/30 rounded-3xl p-8 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-[#38BDF8] flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-widest block mb-2">
          404 · Page Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Equipment Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
          The specification sheet or technical URL you requested might have been updated or moved. Browse our full product portfolio below.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0B4EA2] to-[#1E70D6] hover:from-[#083A7B] hover:to-[#0B4EA2] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#products"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider transition-all cursor-pointer"
          >
            <PackageCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>View 15 Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
