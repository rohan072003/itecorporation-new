"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ClipboardCheck, FileText, Sliders, ShieldCheck } from "lucide-react";
import { QUALITY_COMMITMENTS, QUALITY_PROCESS_CARDS } from "@/data/itecData";
import { IMAGES } from "@/data/itecImages";

export const QualityProcess: React.FC = () => {
  const getCardIcon = (id: string) => {
    switch (id) {
      case "checks":
        return <ClipboardCheck className="w-6 h-6 text-[#0B4EA2]" />;
      case "testing":
        return <FileText className="w-6 h-6 text-[#0B4EA2]" />;
      case "customisation":
        return <Sliders className="w-6 h-6 text-[#0B4EA2]" />;
      default:
        return <ClipboardCheck className="w-6 h-6 text-[#0B4EA2]" />;
    }
  };

  return (
    <section id="quality" className="py-20 bg-slate-50 border-b border-slate-200 relative bg-diagonal-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-100/80 border border-blue-200 text-[#0B4EA2] text-xs font-semibold tracking-wider uppercase mb-3">
            Quality Verification Framework
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Quality, Testing &amp; Customisation
          </h2>
          <p className="mt-4 text-base text-slate-700 leading-relaxed font-normal">
            ITEC coordinates quality checks, testing documentation and application-specific customisation with established Indian manufacturing partners for reliable, fit-for-purpose supply.
          </p>
          <div className="w-16 h-1 bg-[#0B4EA2] mx-auto mt-4 rounded" />
        </div>

        <div className="mb-14 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[250px] md:min-h-[300px] bg-slate-900 group">
            <Image
              src={IMAGES.qualityInspectionLab}
              alt="Quality control electrical engineer performing routine dielectric tests"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                DIELECTRIC &amp; LOAD TESTING
              </span>
              <p className="text-xs font-semibold">
                Partner Laboratory Calibrated to IS / IEC Export Standards
              </p>
            </div>
          </div>

          <div className="relative min-h-[250px] md:min-h-[300px] bg-slate-900 group">
            <Image
              src={IMAGES.voltageStabilizerTesting}
              alt="Voltage stabilizer and frequency converter test benches"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-[10px] font-mono text-[#38BDF8] uppercase font-bold tracking-wider">
                FULL LOAD VALIDATION
              </span>
              <p className="text-xs font-semibold">
                Dynamic Harmonic &amp; Temperature Rise Verification Before Dispatch
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {QUALITY_PROCESS_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="group relative bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#0B4EA2] transition-all corner-triangle-badge"
            >
              <div className="absolute top-2 right-2 text-white font-mono text-[11px] font-bold z-10 pr-1 select-none">
                0{idx + 1}
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#0B4EA2] group-hover:text-white transition-colors">
                  {getCardIcon(card.id)}
                </div>

                <div className="text-[11px] font-mono text-[#0B4EA2] uppercase font-bold tracking-wider mb-1">
                  {card.subtitle}
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] group-hover:text-[#0B4EA2] transition-colors mb-3">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider mb-2">
                  Verification Scope:
                </div>
                <ul className="space-y-1.5">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B4EA2] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs mb-10">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B4EA2]">
              Manufacturing Rigor
            </span>
            <h3 className="text-xl font-bold text-[#0B1F3A]">
              Our Four Quality Commitments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_COMMITMENTS.map((qc, index) => (
              <div
                key={qc.title}
                className="p-4 rounded-lg bg-slate-50 border border-slate-150 hover:border-blue-300 transition-colors"
              >
                <div className="text-xs font-mono text-[#0B4EA2] font-bold mb-1">
                  COMMITMENT 0{index + 1}
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] mb-2">{qc.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
