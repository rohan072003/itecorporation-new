"use client";

import React from "react";
import {
  ArrowRight,
  Clock3,
  Globe2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";
import { safeScrollTo } from "@/lib/utils";

interface CTAProps {
  onTalkToITEC?: () => void;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const CTA: React.FC<CTAProps> = ({ onTalkToITEC }) => {
  const handleClick = () => {
    if (onTalkToITEC) onTalkToITEC();
    else safeScrollTo("#quote-enquiry");
  };

  return (
    <section
      aria-label="Direct Technical Engagement"
      className="relative overflow-x-clip border-y border-[#0B4EA2]/30 bg-[#071322] py-12 text-white sm:py-20"
    >
      {/* Dark theme atmosphere — aligned with new site language */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 55% at 15% 20%, rgba(11,78,162,0.45) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 88% 80%, rgba(56,189,248,0.18) 0%, transparent 50%),
              linear-gradient(165deg, #071322 0%, #0A1D36 45%, #071B33 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(147,197,253,0.55) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="font-hero text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-sky-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            Direct Technical Engagement
          </div>

          <h2 className="text-[1.75rem] font-semibold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            Connect. Collaborate.{" "}
            <span className="text-sky-300">Grow Together.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-normal leading-relaxed text-slate-300 sm:text-[15px]">
            Whether you are an overseas OEM sourcing custom-wound transformers or an
            EPC contractor securing export-compliant voltage stabilizers, ITEC
            coordinates direct technical feasibility, transparent pricing, and
            dependable shipment execution.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { icon: Clock3, label: "24h quote response" },
              { icon: ShieldCheck, label: "FAT & CE ready" },
              { icon: Globe2, label: "Pune export desk" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-sky-300" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-7 flex w-full flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-3">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex min-h-10 flex-[1_1_42%] cursor-pointer items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2.5 text-[12px] font-semibold text-[#0B1F3A] shadow-lg shadow-black/20 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071322] sm:min-h-11 sm:flex-none sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
            >
              Talk to ITEC
              <ArrowRight className="h-3.5 w-3.5 text-[#0B4EA2] sm:h-4 sm:w-4" />
            </button>

            <a
              href={CONTACT_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instant WhatsApp Chat with ITEC"
              className="inline-flex min-h-10 flex-[1_1_42%] items-center justify-center gap-1.5 rounded-full border border-sky-400/35 bg-[#0B4EA2] px-3 py-2.5 text-[12px] font-semibold text-white shadow-md shadow-blue-950/40 transition hover:bg-[#1A6FD1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071322] sm:min-h-11 sm:flex-none sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              WhatsApp
            </a>

            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[12px] font-semibold text-sky-100 backdrop-blur-sm transition hover:border-sky-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:min-h-11 sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 text-sky-300 sm:h-4 sm:w-4" />
              {CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
