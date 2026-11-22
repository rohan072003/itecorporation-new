"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Car,
  Component,
  Factory,
  Flame,
  FlaskConical,
  GraduationCap,
  Pill,
  Plane,
  Scissors,
  Shield,
  Star,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRIES_LIST, type IndustryItem } from "@/data/itecData";
import { IMAGES } from "@/data/itecImages";
import { safeScrollTo, withBasePath } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Plane,
  Wrench,
  Utensils,
  Car,
  Flame,
  FlaskConical,
  Pill,
  Scissors,
  Shield,
  GraduationCap,
  Component,
  Factory,
};

function IndustryCard({
  industry,
  solid,
}: {
  industry: IndustryItem;
  solid: boolean;
}) {
  const Icon = ICON_MAP[industry.iconName] ?? Factory;
  const initials = industry.title
    .split(/\s+|&/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <article
      className={`font-hero rounded-2xl border p-5 transition ${
        solid
          ? "border-[#0B4EA2]/20 bg-[#0B4EA2] text-white shadow-[0_10px_28px_-14px_rgba(11,78,162,0.55)]"
          : "border-sky-100 bg-white text-[#0B1F3A] shadow-[0_8px_24px_-16px_rgba(11,78,162,0.22)]"
      }`}
    >
      <p
        className={`text-[13px] leading-relaxed sm:text-sm ${
          solid ? "text-sky-100" : "text-slate-600"
        }`}
      >
        {industry.applicationNote}
      </p>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
              solid
                ? "bg-white/15 text-white ring-1 ring-white/25"
                : "bg-[#0B4EA2] text-white"
            }`}
          >
            {initials || industry.number}
          </div>
          <div className="min-w-0">
            <div
              className={`truncate text-sm font-semibold ${
                solid ? "text-white" : "text-[#0B1F3A]"
              }`}
            >
              {industry.title}
            </div>
            <div
              className={`mt-0.5 flex items-center gap-1.5 text-xs ${
                solid ? "text-sky-100/90" : "text-slate-500"
              }`}
            >
              <Icon
                className={`h-3.5 w-3.5 ${solid ? "text-sky-100" : "text-[#0B4EA2]"}`}
                strokeWidth={2}
              />
              Sector {industry.number}
            </div>
          </div>
        </div>
        <span
          className={`hidden shrink-0 text-[10px] font-medium uppercase tracking-wide sm:inline ${
            solid ? "text-sky-200/80" : "text-slate-400"
          }`}
        >
          Industry
        </span>
      </div>
    </article>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration = "42s",
  startSolid = false,
}: {
  items: IndustryItem[];
  direction: "up" | "down";
  duration?: string;
  startSolid?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative h-[380px] flex-1 overflow-hidden sm:h-[480px] md:h-[520px] lg:h-[560px]">
      <div
        className={`flex flex-col gap-4 will-change-transform ${
          direction === "up" ? "animate-industries-up" : "animate-industries-down"
        }`}
        style={{ animationDuration: duration }}
      >
        {loop.map((industry, idx) => (
          <IndustryCard
            key={`${industry.id}-${idx}`}
            industry={industry}
            solid={(idx + (startSolid ? 1 : 0)) % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

export const Industries: React.FC = () => {
  const { colA, colB } = useMemo(() => {
    const a: IndustryItem[] = [];
    const b: IndustryItem[] = [];
    INDUSTRIES_LIST.forEach((item, i) => {
      if (i % 2 === 0) a.push(item);
      else b.push(item);
    });
    return { colA: a, colB: b };
  }, []);

  return (
    <section
      id="industries"
      aria-label="Cross-Sector Deployment"
      className="relative overflow-x-clip border-b border-sky-100 bg-white py-12 sm:py-20"
    >
      {/* Backdrop image across the full component — slight / soft opacity */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={withBasePath(IMAGES.industriesGridPower)}
          alt=""
          fill
          className="object-cover object-center opacity-[0.32]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-[#F7FAFE]/60 to-white/65" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading — site consistency */}
        <div className="font-hero mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2] shadow-sm">
            Cross-Sector Deployment
          </div>
          <h2 className="text-[1.65rem] font-semibold tracking-tight text-[#0B1F3A] sm:text-3xl md:text-[2.15rem]">
            Industries{" "}
            <span className="text-[#1A6FD1]">Served</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-[15px]">
            High-grade electrical equipment trusted across continuous-process lines,
            defense testing complexes, and high-specification manufacturing plants
            worldwide.
          </p>
        </div>

        {/* Unified body — left copy + scrolling sectors as one composition */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="font-hero lg:col-span-5">
            <h3 className="max-w-md text-2xl font-semibold leading-snug tracking-tight text-[#0B1F3A] sm:text-[1.75rem]">
              Trusted across{" "}
              <span className="text-[#1A6FD1]">12 industrial sectors</span>
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              From aviation ground power to pharmaceutical clean rooms — power
              conditioning and winding solutions built for demanding duty cycles and
              export compliance.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-0.5 text-[#0B4EA2]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#0B4EA2] text-[#0B4EA2]" />
                ))}
              </div>
              <span className="font-medium text-[#0B1F3A]">12 sectors</span>
              <span className="text-slate-300">·</span>
              <span>export-ready deployments</span>
            </div>

            <button
              type="button"
              onClick={() => safeScrollTo("#quote-enquiry")}
              className="mt-7 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0B4EA2] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 sm:w-fit"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="flex gap-3 sm:gap-5">
              <MarqueeColumn
                items={colA}
                direction="up"
                duration="38s"
                startSolid={false}
              />
              <div className="hidden min-w-0 flex-1 sm:block">
                <MarqueeColumn
                  items={colB}
                  direction="down"
                  duration="44s"
                  startSolid={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
