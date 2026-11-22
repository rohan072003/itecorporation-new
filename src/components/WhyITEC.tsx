"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Factory,
  FileCheck2,
  Globe2,
  Truck,
} from "lucide-react";
import { withBasePath } from "@/lib/utils";

const HIGHLIGHTS = [
  {
    icon: Factory,
    title: "Precision Custom Manufacturing",
    subtitle: "Pune Manufacturing Cluster",
    description:
      "Direct access to vetted facility in Pune with automated winding, class H/F insulation, and electrolytic 99.9% pure copper coils. Built to exact OEM and overseas electrical specs.",
    points: [
      "1 kVA to 3000 kVA custom capacity",
      "VPI (Vacuum Pressure Impregnation) curing",
      "Custom voltages, frequencies (50Hz / 60Hz / 400Hz)",
    ],
    badge: "Partner Est. 2006",
    image: "/images/transformer-manufacturing.jpg",
    imageAlt: "Copper winding and transformer manufacturing in Pune",
  },
  {
    icon: FileCheck2,
    title: "100% Quality & FAT Reports",
    subtitle: "Zero-Defect Verification",
    description:
      "Every transformer, stabilizer, and power panel undergoes routine and type testing before dispatch. We provide complete factory acceptance documentation with every order.",
    points: [
      "High-voltage dielectric breakdown tests",
      "No-load & full-load loss verification",
      "Harmonic analysis & temperature rise clearance",
    ],
    badge: "FAT Verified",
    image: "/images/voltage-stabilizer-testing.jpg",
    imageAlt: "Factory acceptance testing and instrumentation",
  },
  {
    icon: Award,
    title: "International Standards & Certs",
    subtitle: "Global Compliance Dossier",
    description:
      "Engineered strictly in conformity with international benchmarks for seamless utility and industrial deployment across Middle East, Africa, Europe, and Asia.",
    points: [
      "ISO 9001:2015 certified partner operations",
      "Conformity to IS / IEC / CE export standards",
      "EEPC India & IEC registered export liaison",
    ],
    badge: "IEC / CE / ISO",
    image: "/images/certifications-compliance.jpg",
    imageAlt: "ISO and export compliance documentation",
  },
  {
    icon: Truck,
    title: "Door-to-Port Export Logistics",
    subtitle: "JNPT Nhava Sheva Corridor",
    description:
      "Located 140 km from JNPT container terminal. Export orders are crated in treated ISPM-15 export-grade seaworthy wooden packaging with moisture barriers.",
    points: [
      "ISPM-15 phytosanitary stamped wood packing",
      "FOB, CFR, and CIF delivery terms worldwide",
      "150 km express link to Mumbai Air Cargo",
    ],
    badge: "Global Dispatch",
    image: "/images/container-ship-port.jpg",
    imageAlt: "Container ship and port export logistics",
  },
] as const;

export const WhyITEC: React.FC = () => {
  return (
    <section
      id="capabilities"
      aria-label="Why Choose ITEC"
      className="relative scroll-mt-20 overflow-hidden border-b border-sky-100 bg-[#F7FAFE] py-16 sm:py-20"
    >
      <div id="why-itec" className="absolute -top-20" />

      {/* Soft map / atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(11,78,162,0.18) 1px, transparent 0)
            `,
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 70% 18%, black 10%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 70% 18%, black 10%, transparent 70%)",
          }}
        />
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="font-hero mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2] shadow-sm">
            <Globe2 className="h-3.5 w-3.5" strokeWidth={2} />
            Global Capabilities
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#0B1F3A] sm:text-3xl md:text-[2.15rem]">
            Proven Manufacturing &amp;{" "}
            <span className="relative inline-block text-[#1A6FD1]">
              Global Export
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#1A6FD1]/35"
                aria-hidden="true"
              />
            </span>{" "}
            Standards
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-[15px]">
            Eliminating overseas procurement friction. Direct engineering liaison,
            certified stage-wise quality checks, and seaworthy logistics from Pune,
            India.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="font-hero group flex flex-col overflow-hidden rounded-[1.25rem] border border-sky-100/90 bg-white shadow-[0_12px_36px_-18px_rgba(11,78,162,0.32)] transition duration-300 hover:-translate-y-1 hover:border-[#0B4EA2]/25 hover:shadow-[0_18px_44px_-16px_rgba(11,78,162,0.38)]"
              >
                <div className="flex flex-1 flex-col p-5 pb-4 sm:p-5">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B4EA2] text-white shadow-md shadow-blue-900/20">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-semibold leading-snug text-[#0B1F3A] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-[#1A6FD1]">
                    {item.subtitle}
                  </p>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-500">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-[12px] leading-snug text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B4EA2]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Curved bottom image */}
                <div className="relative mt-auto h-28 overflow-hidden sm:h-32">
                  <div
                    className="absolute inset-x-0 -top-6 h-10 bg-white"
                    style={{
                      borderRadius: "0 0 50% 50% / 0 0 100% 100%",
                    }}
                    aria-hidden="true"
                  />
                  <Image
                    src={withBasePath(item.image)}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/25 to-transparent" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
