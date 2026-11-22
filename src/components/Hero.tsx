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

const StatCard = ({
  icon: Icon,
  title,
  subtitle,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  className?: string;
}) => (
  <div
    className={`flex items-center gap-2 rounded-xl border border-sky-100 bg-white px-2.5 py-2 shadow-[0_6px_18px_-10px_rgba(11,78,162,0.28)] ring-1 ring-[#0B4EA2]/5 sm:gap-3 sm:rounded-2xl sm:px-3.5 sm:py-3 ${className}`}
  >
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0B4EA2] text-white shadow-sm shadow-blue-900/20 sm:h-10 sm:w-10 sm:rounded-xl">
      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
    </div>
    <div className="min-w-0 text-[11px] leading-snug not-italic sm:text-sm">
      <div className="font-semibold text-[#0B1F3A]">{title}</div>
      <div className="font-normal text-slate-500">{subtitle}</div>
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onViewProductsClick }) => {
  return (
    <section
      id="hero"
      aria-label="Electrical Equipment & Power Electronics Supplier"
      className="relative flex min-h-0 items-start overflow-x-clip border-b border-sky-100/80 lg:min-h-dvh lg:items-center"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#F4F8FD]" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 70% at 92% 8%, rgba(147, 197, 253, 0.55) 0%, transparent 60%),
              radial-gradient(ellipse 50% 55% at 78% 42%, rgba(186, 230, 253, 0.4) 0%, transparent 55%),
              radial-gradient(ellipse 70% 75% at 88% 95%, rgba(96, 165, 250, 0.55) 0%, transparent 58%),
              linear-gradient(165deg, #F7FAFE 0%, #EEF4FC 45%, #E8F1FB 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-3 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 lg:pb-14 lg:pt-2">
        {/*
          Mobile order: copy → 3D → CTAs → stats
          Desktop: copy+CTAs+stats left, model right
        */}
        <div className="font-hero grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8 lg:-translate-y-10">
          {/* Eyebrow + headline + intro */}
          <div className="order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <div className="mb-2.5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-sky-200/80 bg-[#E8F2FC] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.04em] text-[#0B4EA2] sm:mb-4 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[11px] sm:tracking-[0.06em]">
              <Zap className="h-3 w-3 shrink-0 fill-[#0B4EA2]/15 text-[#0B4EA2] sm:h-3.5 sm:w-3.5" strokeWidth={2.25} />
              <span className="min-w-0 leading-snug">India Sourcing &amp; Export Partner</span>
            </div>

            <h1 className="mb-2.5 max-w-xl text-[1.45rem] font-semibold not-italic leading-[1.2] text-[#0B1F3A] sm:mb-4 sm:text-4xl md:text-[2.55rem] lg:text-[2.65rem]">
              Electrical Equipment &amp;{" "}
              <span className="font-semibold text-[#1A6FD1]">Power Electronics Supplier</span>{" "}
              for Europe
            </h1>

            <p className="max-w-lg text-[13px] font-normal not-italic leading-relaxed text-slate-500 sm:text-[15.5px] sm:leading-[1.7]">
              Source transformers, electrical components, voltage stabilisers, UPS
              systems and power electronics through ITEC. 100% factory-tested,
              CE-compliant, and export-ready for European OEMs.
            </p>
          </div>

          {/* 3D model — above CTAs on phone */}
          <div className="order-2 lg:col-span-6 lg:col-start-7 lg:row-span-3 lg:row-start-1">
            <div className="relative mx-auto h-[min(58vw,240px)] w-full max-w-[420px] sm:h-[min(70vw,480px)] sm:max-w-[640px] lg:ml-auto lg:h-[min(72vh,640px)] lg:max-w-none">
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

          {/* CTA pills — compact side-by-side on phone */}
          <div className="order-3 lg:col-span-6 lg:col-start-1 lg:row-start-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  if (onViewProductsClick) onViewProductsClick();
                  else safeScrollTo("#products");
                }}
                className="inline-flex min-h-10 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#0B4EA2] px-3 py-2 text-[12px] font-medium not-italic text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 sm:min-h-11 sm:flex-none sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>

              <a
                href={CONTACT_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-2 text-[12px] font-medium not-italic text-[#0B4EA2] shadow-sm transition hover:border-[#0B4EA2]/40 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 sm:min-h-11 sm:flex-none sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Stats — 2 side by side, 3rd centered below on phone */}
          <div className="order-4 lg:col-span-6 lg:col-start-1 lg:row-start-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              <StatCard icon={BarChart3} title="Pune Cluster" subtitle="Maharashtra Hub" />
              <StatCard icon={ShieldCheck} title="100% Tested" subtitle="IS / IEC / CE" />
              <StatCard
                icon={Globe2}
                title="Global Export"
                subtitle="35+ Markets"
                className="col-span-2 mx-auto w-[calc(50%-0.25rem)] sm:col-span-1 sm:mx-0 sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
