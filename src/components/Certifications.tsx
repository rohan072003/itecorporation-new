"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  FileCheck,
  FileText,
  Info,
  ShieldCheck,
} from "lucide-react";
import { FURNISHED_DOCUMENTS, MANUFACTURING_CERTIFICATIONS } from "@/data/itecData";
import { IMAGES } from "@/data/itecImages";
import { withBasePath } from "@/lib/utils";

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Statutory and Technical Compliance"
      className="relative overflow-x-clip border-b border-sky-100 bg-white py-12 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="font-hero mx-auto mb-8 max-w-3xl text-center sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-[#E8F2FC] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.05em] text-[#0B4EA2] sm:mb-4 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[11px]">
            <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
            Statutory &amp; Technical Compliance
          </div>
          <h2 className="text-[1.4rem] font-semibold tracking-tight text-[#0B1F3A] sm:text-3xl md:text-[2.15rem]">
            Certifications &amp;{" "}
            <span className="text-[#1A6FD1]">Documentation</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[13px] font-normal leading-relaxed text-slate-500 sm:mt-3 sm:text-[15px]">
            Clear compliance proof for customs, insurance, and engineering acceptance —
            structured and ready for export review.
          </p>
        </div>

        {/* Intro visual + summary */}
        <div className="font-hero mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-sky-100 bg-[#F7FAFE] shadow-[0_14px_40px_-22px_rgba(11,78,162,0.35)] sm:mb-12 sm:rounded-[1.35rem] lg:grid-cols-12">
          <div className="relative min-h-[140px] sm:min-h-[220px] lg:col-span-5 lg:min-h-full">
            <Image
              src={withBasePath(IMAGES.certificationsCompliance)}
              alt="Technical compliance dossiers and ISO documentation"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/55 via-[#0B1F3A]/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0B1F3A]/10 lg:to-[#0B1F3A]/40" />
          </div>
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <div>
              <span className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#0B4EA2]">
                Export compliance dossier
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#0B1F3A] sm:text-2xl">
                Audited certificates of conformity &amp; FAT reports
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                Every shipment is backed by verified manufacturer test certificates
                aligned with customs classifications and electrical performance
                benchmarks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                `${MANUFACTURING_CERTIFICATIONS.length} partner accreditations`,
                `${FURNISHED_DOCUMENTS.length} furnishable documents`,
                "Pune · Active audit",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-white px-3 py-1.5 text-xs font-medium text-[#0B1F3A]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0B4EA2]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Partner certifications */}
        <div className="mb-12">
          <div className="font-hero mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2]">
                <Award className="h-3.5 w-3.5" />
                Partner accreditation
              </div>
              <h3 className="text-lg font-semibold text-[#0B1F3A] sm:text-xl">
                Certifications &amp; registrations held by our manufacturing partner
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-400">
              Facility audit · Current &amp; active · Pune, India
            </span>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-stretch gap-2.5 sm:max-w-none sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {MANUFACTURING_CERTIFICATIONS.map((cert) => (
              <article
                key={cert.id}
                className="font-hero group flex h-full flex-col rounded-xl border border-sky-100 bg-white p-3 text-center shadow-[0_10px_28px_-18px_rgba(11,78,162,0.28)] transition hover:-translate-y-0.5 hover:border-[#0B4EA2]/25 hover:shadow-[0_16px_36px_-16px_rgba(11,78,162,0.35)] sm:rounded-2xl sm:p-5 sm:text-left"
              >
                <div className="mb-2 flex flex-col items-center gap-2 sm:mb-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B4EA2] text-white shadow-sm shadow-blue-900/20 sm:h-10 sm:w-10 sm:rounded-xl">
                    <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-600 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {cert.badge}
                  </span>
                </div>
                <h4 className="text-[12px] font-semibold leading-snug text-[#0B1F3A] sm:text-[15px]">
                  {cert.title}
                </h4>
                <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-slate-500 sm:mt-2 sm:text-[12.5px]">
                  {cert.scope}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Furnished documents */}
        <div className="font-hero rounded-[1.35rem] border border-sky-100 bg-[#F7FAFE] p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2]">
                <FileText className="h-3.5 w-3.5" />
                Technical &amp; customs pack
              </div>
              <h3 className="text-lg font-semibold text-[#0B1F3A] sm:text-xl">
                Product-specific documents that can be furnished
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Supplied as PDF or notarized hard copy according to the selected
                product, specs, and destination-market requirements.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-[#0B4EA2] px-3.5 py-1.5 text-xs font-medium text-white">
              {FURNISHED_DOCUMENTS.length} standard assets
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-3 xl:grid-cols-4">
            {FURNISHED_DOCUMENTS.map((doc) => (
              <div
                key={doc}
                className="flex items-start gap-1.5 rounded-xl border border-sky-100 bg-white px-2.5 py-2.5 text-[11px] text-[#0B1F3A] shadow-sm transition hover:border-[#0B4EA2]/30 sm:gap-2.5 sm:px-3.5 sm:py-3 sm:text-[13px]"
              >
                <FileCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4EA2] sm:h-4 sm:w-4" />
                <span className="font-medium leading-snug">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="font-hero mt-6 flex items-start gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3.5 sm:px-5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0B4EA2]" />
          <p className="text-sm leading-relaxed text-slate-600">
            <span className="font-semibold text-[#0B1F3A]">Note: </span>
            Documents are furnished according to the selected product, technical
            specifications, and destination-market requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
