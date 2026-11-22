"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Anchor,
  CheckCircle2,
  FileCheck2,
  Ship,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { EXPORT_STEPS } from "@/data/itecData";
import { IMAGES } from "@/data/itecImages";
import { ExportShippingIllustration } from "@/components/illustrations/LineArtIllustrations";

export const ExportExecution: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"schematic" | "photography">("photography");

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-4 h-4" />;
      case 1:
        return <Truck className="w-4 h-4" />;
      case 2:
        return <FileCheck2 className="w-4 h-4" />;
      case 3:
        return <FileCheck2 className="w-4 h-4" />;
      case 4:
        return <ShieldCheck className="w-4 h-4" />;
      case 5:
        return <Ship className="w-4 h-4" />;
      case 6:
        return <Anchor className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="export-process" className="py-20 bg-slate-50 border-b border-slate-200 relative bg-diagonal-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-100/80 border border-blue-200 text-[#0B4EA2] text-xs font-semibold tracking-wider uppercase mb-3">
            Seamless Global Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            End-to-End Export Execution
          </h2>
          <p className="mt-4 text-base text-slate-700 leading-relaxed font-normal">
            An integrated model that minimises delays, ensures compliance and lets overseas buyers source from India.
          </p>
          <div className="w-16 h-1 bg-[#0B4EA2] mx-auto mt-4 rounded" />
        </div>

        <div className="mb-16 bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-150 gap-2 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5 text-[#0B4EA2] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              PORT LOGISTICS: NHAVA SHEVA (JNPT) &amp; MUMBAI AIR TERMINALS
            </span>

            <div className="flex items-center bg-slate-100 rounded p-0.5 border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode("schematic")}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${viewMode === "schematic"
                  ? "bg-[#0B4EA2] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Line-Art Schematic
              </button>
              <button
                type="button"
                onClick={() => setViewMode("photography")}
                className={`px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors ${viewMode === "photography"
                  ? "bg-[#0B4EA2] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Harbor Photos
              </button>
            </div>
          </div>

          {viewMode === "schematic" ? (
            <ExportShippingIllustration className="w-full" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
              <div className="relative h-64 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 group">
                <Image
                  src={IMAGES.exportCratesCargo}
                  alt="Industrial transformers packed in wooden seaworthy crates for export"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 group">
                <Image
                  src={IMAGES.containerShipPort}
                  alt="Ocean vessel container terminal loading in commercial dock"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mb-12">
          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:grid grid-cols-7 gap-3 relative">
            {EXPORT_STEPS.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left relative cursor-pointer rounded-lg p-3.5 border transition-all flex flex-col justify-between ${activeStep === idx
                  ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md -translate-y-1"
                  : "bg-white text-slate-800 border-slate-200 hover:border-[#0B4EA2] hover:bg-blue-50/40"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {step.step}
                    </span>
                    <div className={activeStep === idx ? "text-[#38BDF8]" : "text-[#0B4EA2]"}>
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  <h4 className="text-xs font-bold leading-tight mb-1">{step.title}</h4>
                  <p className="text-[11px] line-clamp-3 leading-snug text-slate-500">{step.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Highlight Card */}
          <div className="mt-4 p-5 rounded-xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#0B1F3A] text-white">
                  Step {EXPORT_STEPS[activeStep]?.step}
                </span>
                <span className="text-sm font-bold text-[#0B1F3A]">
                  {EXPORT_STEPS[activeStep]?.title}
                </span>
                <span className="text-xs text-slate-500">
                  — {EXPORT_STEPS[activeStep]?.subtitle}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                {EXPORT_STEPS[activeStep]?.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 bg-white text-[#0B4EA2] rounded border border-blue-200 shadow-2xs">
                Action: {EXPORT_STEPS[activeStep]?.keyAction}
              </span>
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden mt-6 space-y-3">
            {EXPORT_STEPS.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left cursor-pointer bg-white border rounded-lg p-4 shadow-2xs transition-colors ${activeStep === idx ? "border-[#0B4EA2] bg-blue-50/30" : "border-slate-200"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded bg-[#0B1F3A] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#0B1F3A]">{step.title}</h4>
                    <span className="text-xs text-[#0B4EA2] font-medium">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-10 mb-2">
                  {step.description}
                </p>
                <div className="pl-10 text-[11px] font-mono text-[#0B4EA2] font-semibold">
                  Key Action: {step.keyAction}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
