"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";
import { safeScrollTo } from "@/lib/utils";
import { HeroModelViewer } from "@/components/HeroModelViewer";

interface HeroProps {
  onRequestQuoteClick?: () => void;
  onViewProductsClick?: () => void;
  prefilledProduct?: string;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onViewProductsClick }) => {
  return (
    <section
      id="hero"
      aria-label="Electrical Equipment & Power Electronics Supplier"
      className="relative flex min-h-0 items-start overflow-x-clip overflow-y-visible border-b border-sky-100/80 sm:min-h-[calc(100dvh-7.5rem)] lg:min-h-dvh lg:items-center"
    >
      {/* Soft flowing blue background — matches mockup blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#F4F8FD]" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 70% at 92% 8%, rgba(147, 197, 253, 0.55) 0%, transparent 60%),
              radial-gradient(ellipse 50% 55% at 78% 42%, rgba(186, 230, 253, 0.4) 0%, transparent 55%),
              radial-gradient(ellipse 70% 75% at 88% 95%, rgba(96, 165, 250, 0.55) 0%, transparent 58%),
              radial-gradient(ellipse 45% 50% at 55% 100%, rgba(147, 197, 253, 0.35) 0%, transparent 50%),
              linear-gradient(165deg, #F7FAFE 0%, #EEF4FC 45%, #E8F1FB 100%)
            `,
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroFlowA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#60A5FA" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient id="heroFlowB" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="heroFlowC" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {/* Top-right soft wash */}
          <path
            fill="url(#heroFlowB)"
            d="M980,-40 C1120,20 1280,80 1480,40 L1480,320 C1320,380 1180,300 1040,260 C920,230 860,120 980,-40 Z"
          />
          {/* Main sweeping ribbon under the model */}
          <path
            fill="url(#heroFlowA)"
            d="M520,920 C680,720 820,640 980,600 C1140,560 1280,540 1480,620 L1480,980 L520,980 Z"
          />
          {/* Lower-right curved pool */}
          <path
            fill="url(#heroFlowC)"
            d="M760,980 C900,780 1080,700 1280,720 C1380,730 1480,780 1480,780 L1480,980 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 lg:pb-14 lg:pt-2">
        <div className="grid w-full translate-y-0 grid-cols-1 items-center gap-8 sm:-translate-y-6 sm:gap-10 lg:-translate-y-14 lg:grid-cols-12 lg:gap-8">
          {/* Left copy */}
          <div className="font-hero flex flex-col justify-center not-italic lg:col-span-6 xl:col-span-6">
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-200/80 bg-[#E8F2FC] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.05em] text-[#0B4EA2] shadow-[0_1px_2px_rgba(11,78,162,0.06)] sm:mb-5 sm:px-3.5 sm:text-[11px] sm:tracking-[0.06em]">
              <Zap className="h-3.5 w-3.5 shrink-0 fill-[#0B4EA2]/15 text-[#0B4EA2]" strokeWidth={2.25} />
              <span className="min-w-0 leading-snug">Direct India Sourcing &amp; Export Partner</span>
            </div>

            <h1 className="mb-4 max-w-xl text-[1.75rem] font-semibold not-italic leading-[1.18] text-[#0B1F3A] sm:mb-5 sm:text-4xl md:text-[2.55rem] lg:text-[2.65rem]">
              Electrical Equipment &amp;{" "}
              <span className="font-semibold text-[#1A6FD1]">Power Electronics Supplier</span>{" "}
              for Europe
            </h1>

            <p className="mb-6 max-w-lg text-[15px] font-normal not-italic leading-[1.7] text-slate-500 sm:mb-8 sm:text-[15.5px]">
              Source transformers, electrical components, voltage stabilisers, UPS
              systems and power electronics through ITEC. 100% factory-tested,
              CE-compliant, and export-ready for European OEMs and distributors.
            </p>

            <div className="mb-8 flex w-full flex-col gap-3 sm:mb-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => {
                  if (onViewProductsClick) onViewProductsClick();
                  else safeScrollTo("#products");
                }}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0B4EA2] px-6 py-2.5 text-sm font-medium not-italic text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 sm:w-auto"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={CONTACT_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-2.5 text-sm font-medium not-italic text-[#0B4EA2] shadow-sm transition hover:border-[#0B4EA2]/40 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 sm:w-auto"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-3.5 py-3 shadow-[0_8px_24px_-12px_rgba(11,78,162,0.28)] ring-1 ring-[#0B4EA2]/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white shadow-sm shadow-blue-900/20">
                  <BarChart3 className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="min-w-0 text-sm leading-snug not-italic">
                  <div className="font-semibold text-[#0B1F3A]">Pune Cluster</div>
                  <div className="font-normal text-slate-500">Maharashtra Hub</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-3.5 py-3 shadow-[0_8px_24px_-12px_rgba(11,78,162,0.28)] ring-1 ring-[#0B4EA2]/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white shadow-sm shadow-blue-900/20">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="min-w-0 text-sm leading-snug not-italic">
                  <div className="font-semibold text-[#0B1F3A]">100% Tested</div>
                  <div className="font-normal text-slate-500">IS / IEC / CE Reports</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-3.5 py-3 shadow-[0_8px_24px_-12px_rgba(11,78,162,0.28)] ring-1 ring-[#0B4EA2]/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white shadow-sm shadow-blue-900/20">
                  <Globe2 className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="min-w-0 text-sm leading-snug not-italic">
                  <div className="font-semibold text-[#0B1F3A]">Global Export</div>
                  <div className="font-normal text-slate-500">35+ Markets</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Model Viewer */}
          <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto h-[min(68vw,320px)] w-full max-w-[560px] sm:h-[min(70vw,480px)] sm:max-w-[640px] lg:ml-auto lg:h-[min(72vh,640px)] lg:max-w-none lg:w-full">
              {/* Soft ground glow under model */}
              <div
                className="pointer-events-none absolute inset-x-[10%] bottom-[4%] h-[18%] rounded-[50%] bg-sky-300/35 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-[20%] bottom-[8%] h-[10%] rounded-[50%] bg-white/70 blur-md"
                aria-hidden="true"
              />

              <HeroModelViewer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
