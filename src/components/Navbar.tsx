"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";
import { safeScrollTo, withBasePath } from "@/lib/utils";

interface NavbarProps {
  onSelectProduct?: (productName: string) => void;
}

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Certifications", href: "#certifications" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#quote-enquiry" },
] as const;

const TICKER_ITEMS = [
  `Call export desk · ${CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}`,
  "100% factory-tested · CE / IS / IEC ready",
  "Direct Pune sourcing for Europe & global OEMs",
  "Custom transformers · Servo stabilisers · UPS",
  "24h engineering quote response",
  `Talk to ITEC · ${CONTACT_DETAILS.phone}`,
] as const;

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const goTo = (href: string) => {
    setMobileOpen(false);
    safeScrollTo(href);
  };

  const handleRequestQuoteClick = () => {
    setMobileOpen(false);
    safeScrollTo("#quote-enquiry");
  };

  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="sticky top-0 z-50">
      {/* Running CTA strip */}
      <div className="overflow-hidden bg-[#0B4EA2] text-white">
        <div className="flex w-max animate-nav-ticker whitespace-nowrap py-1.5 text-[12px] font-medium tracking-wide sm:text-[13px]">
          {tickerLoop.map((item, i) => (
            <span key={`${item}-${i}`} className="font-hero inline-flex items-center">
              <span className="px-4 sm:px-6">{item}</span>
              <span className="text-sky-200/80" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main navbar — logo left | menus center | CTAs right */}
      <header
        className={`rounded-b-2xl border border-t-0 border-sky-100/90 bg-white transition-all duration-200 sm:rounded-b-3xl ${
          isScrolled
            ? "py-2 shadow-[0_14px_36px_-16px_rgba(11,78,162,0.4)] sm:py-2.5"
            : "py-2.5 shadow-[0_8px_24px_-18px_rgba(11,78,162,0.28)] sm:py-3"
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1.5 sm:gap-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4">
            {/* Left: Logo image only — no crop box */}
            <div className="justify-self-start">
              <Link
                href="/"
                className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
                aria-label="ITECH - Indian Trading & Exports Corporation Homepage"
              >
                <Image
                  src={withBasePath("/logo-itech.png")}
                  alt="ITECH — Indian Trading & Exports Corporation"
                  width={360}
                  height={88}
                  priority
                  className="h-9 w-auto max-w-[min(42vw,9.25rem)] object-contain transition group-hover:opacity-90 sm:h-12 sm:max-w-[12rem] md:h-14 md:max-w-none lg:h-16"
                  sizes="(max-width: 640px) 42vw, 360px"
                />
              </Link>
            </div>

            {/* Center: Menus */}
            <nav
              aria-label="Primary"
              className="font-hero hidden items-center justify-center gap-0.5 justify-self-center lg:flex"
            >
              {NAV_LINKS.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goTo(item.href)}
                  className="cursor-pointer whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-semibold text-[#0B1F3A] transition-colors hover:bg-[#E8F2FC] hover:text-[#0B4EA2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] xl:px-3.5 xl:text-[15px]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right: CTA pills — flush right, single-line text */}
            <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end">
              <a
                href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                aria-label={`Call ITEC at ${CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}`}
                className="font-hero hidden max-w-none shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-[#0B4EA2]/25 bg-[#E8F2FC] px-3.5 py-2 text-[13px] font-semibold leading-none text-[#0B4EA2] transition hover:border-[#0B4EA2] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] md:inline-flex"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span className="whitespace-nowrap tabular-nums tracking-wide">
                  {CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}
                </span>
              </a>

              <button
                type="button"
                onClick={handleRequestQuoteClick}
                className="font-hero inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0B4EA2] px-3 py-2 text-[12px] font-semibold leading-none text-white shadow-md shadow-blue-900/20 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 sm:px-5 sm:text-[14px]"
              >
                <span className="whitespace-nowrap sm:hidden">Quote</span>
                <span className="hidden whitespace-nowrap sm:inline">Request Quote</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </button>

              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-[#0B4EA2]/20 bg-[#E8F2FC] text-[#0B4EA2] transition hover:border-[#0B4EA2] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] lg:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="font-hero mt-3 border-t border-sky-100 bg-white lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6"
            >
              {NAV_LINKS.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goTo(item.href)}
                  className="cursor-pointer rounded-full px-4 py-3 text-left text-[15px] font-semibold text-[#0B1F3A] transition hover:bg-[#E8F2FC] hover:text-[#0B4EA2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                className="mt-1 inline-flex items-center gap-2 rounded-full border-2 border-[#0B4EA2]/20 bg-[#E8F2FC] px-4 py-3 text-[15px] font-semibold text-[#0B4EA2] md:hidden"
              >
                <Phone className="h-4 w-4" />
                {CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};
