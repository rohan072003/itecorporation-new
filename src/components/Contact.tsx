"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";
import { IndiaMapPuneIllustration } from "./illustrations/LineArtIllustrations";
import { IMAGES } from "@/data/itecImages";
import { safeScrollTo, withBasePath } from "@/lib/utils";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Direct Export Desk & Contact Information"
      className="relative scroll-mt-28 overflow-hidden border-b border-sky-100 bg-white bg-blueprint-grid py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered header */}
        <div className="font-hero mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-[#E8F2FC] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Direct Export Desk &amp; Liaison
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0B1F3A] sm:text-3xl md:text-[2.15rem]">
            Direct Contact &amp;{" "}
            <span className="text-[#1A6FD1]">Pune Headquarters</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-[15px]">
            Reach our export coordination office in Pune for engineering feasibility,
            transparent pricing, and shipment execution — by phone, email, or WhatsApp.
          </p>
        </div>

        {/* Primary contact band */}
        <div className="font-hero mb-8 overflow-hidden rounded-[1.35rem] border border-sky-100 bg-white shadow-[0_16px_44px_-22px_rgba(11,78,162,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#0B4EA2] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                  Official export desk
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Online now
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0B1F3A] sm:text-2xl">
                ITEC Export Coordination
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                Dedicated account managers for overseas OEMs, utilities, and commercial
                EPC contractors — with a guaranteed response window.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                  className="group flex items-start gap-3 rounded-2xl border border-sky-100 bg-[#F7FAFE] p-4 transition hover:border-[#0B4EA2]/30 hover:bg-white"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Phone / WhatsApp
                    </div>
                    <div className="mt-0.5 text-[15px] font-semibold text-[#0B4EA2] group-hover:underline">
                      {CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="group flex items-start gap-3 rounded-2xl border border-sky-100 bg-[#F7FAFE] p-4 transition hover:border-[#0B4EA2]/30 hover:bg-white"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Official email
                    </div>
                    <div className="mt-0.5 break-all text-[15px] font-semibold text-[#0B4EA2] group-hover:underline">
                      {CONTACT_DETAILS.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-[#F7FAFE] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Headquarters
                    </div>
                    <div className="mt-0.5 text-[15px] font-semibold text-[#0B1F3A]">
                      Pune, Maharashtra, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-[#F7FAFE] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Response window
                    </div>
                    <div className="mt-0.5 text-[15px] font-semibold text-[#0B1F3A]">
                      Within 24 business hours
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CONTACT_DETAILS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B4EA2] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => safeScrollTo("#products")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B4EA2] transition hover:border-[#0B4EA2]/40 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
                >
                  Browse products
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative min-h-[260px] lg:col-span-5 lg:min-h-full">
              <Image
                src={withBasePath(IMAGES.contactPuneOffice)}
                alt="ITEC Pune headquarters building exterior"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/80 via-[#071322]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-sky-200 backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  ISO 9001 partner operations
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  Pune HQ · Export Desk &amp; Engineering Liaison
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary row: map + logistics */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="font-hero rounded-[1.35rem] border border-sky-100 bg-white p-6 shadow-[0_12px_36px_-20px_rgba(11,78,162,0.3)] sm:p-7 lg:col-span-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2]">
                Geographic sourcing hub
              </span>
              <span className="rounded-full bg-[#E8F2FC] px-2.5 py-1 text-[10px] font-semibold text-[#0B4EA2]">
                Pune, MH
              </span>
            </div>
            <div className="rounded-2xl border border-sky-50 bg-[#F7FAFE] p-3">
              <IndiaMapPuneIllustration />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              Partner manufacturing corridor established 2006 · Pune, India
            </p>
          </div>

          <div className="font-hero flex flex-col justify-between rounded-[1.35rem] border border-sky-100 bg-white p-6 shadow-[0_12px_36px_-20px_rgba(11,78,162,0.3)] sm:p-7 lg:col-span-7">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2]">
                Export logistics corridor
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[#0B1F3A] sm:text-xl">
                Door-to-port connectivity from Pune
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                Factory audits, FAT witnessing, and ISPM-15 seaworthy packing —
                coordinated for reliable international dispatch.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-sky-100 bg-[#F7FAFE] p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    JNPT Nhava Sheva
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    140 km container corridor for regular global vessel dispatches.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-[#F7FAFE] p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B4EA2] text-white">
                    <Globe2 className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    Mumbai Air Cargo
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    150 km express link for samples and urgent components.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-sky-100 pt-5">
              <p className="text-xs text-slate-500">
                Client visits &amp; live video FAT witnessing available year-round.
              </p>
              <a
                href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B4EA2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#093d82]"
              >
                Call export desk
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
