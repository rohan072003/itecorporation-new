"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_DETAILS, PRODUCTS_LIST } from "@/data/itecData";
import { safeScrollTo, withBasePath } from "@/lib/utils";

interface FooterProps {
  onSelectProduct?: (productName: string) => void;
}

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Certifications", href: "#certifications" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#quote-enquiry" },
] as const;

export const Footer: React.FC<FooterProps> = ({ onSelectProduct }) => {
  const handleProductClick = (productName: string) => {
    if (onSelectProduct) onSelectProduct(productName);
    safeScrollTo("#quote-enquiry");
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#0B4EA2]/25 bg-[#071322] text-slate-300">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 40% at 10% 0%, rgba(11,78,162,0.35) 0%, transparent 55%),
              radial-gradient(ellipse 45% 35% at 90% 100%, rgba(56,189,248,0.12) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 pb-28 sm:px-6 sm:py-16 sm:pb-16 lg:px-8">
        {/* Top CTA strip */}
        <div className="font-hero mb-8 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm sm:mb-12 sm:flex-row sm:items-center sm:rounded-[1.25rem] sm:p-7 sm:text-left">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-sky-300 sm:text-[11px]">
              Ready to source from India?
            </div>
            <h3 className="mt-1 text-lg font-semibold text-white sm:text-2xl">
              Talk to the Pune export desk today
            </h3>
          </div>
          <div className="flex w-full gap-2 sm:w-auto sm:flex-wrap">
            <button
              type="button"
              onClick={() => safeScrollTo("#quote-enquiry")}
              className="inline-flex min-h-10 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2 text-[12px] font-semibold text-[#0B1F3A] transition hover:bg-sky-50 sm:min-h-11 sm:flex-none sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Contact us
              <ArrowRight className="h-3.5 w-3.5 text-[#0B4EA2] sm:h-4 sm:w-4" />
            </button>
            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-sky-400/35 bg-[#0B4EA2] px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-[#1A6FD1] sm:min-h-11 sm:flex-none sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="tabular-nums">{CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        <div className="font-hero grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 text-center sm:text-left lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:justify-start"
              aria-label="ITECH Homepage"
            >
              <Image
                src={withBasePath("/logo-itech-footer.png")}
                alt="ITECH — Indian Trading & Exports Corporation"
                width={480}
                height={160}
                className="mx-auto h-12 w-auto max-w-[85%] object-contain sm:mx-0 sm:h-20 md:h-24"
                sizes="480px"
              />
            </Link>
            <p className="mx-auto mt-3 max-w-sm text-[13px] leading-relaxed text-slate-400 sm:mt-4 sm:text-sm lg:mx-0">
              Your India sourcing and export partner for transformers, power
              electronics, and industrial electrical solutions — engineered in Pune
              for global OEMs.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-sky-200 sm:mt-5 sm:text-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
              Partner facility est. 2006 · Pune
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-sky-300 sm:text-[11px]">
              Navigation
            </h4>
            <ul className="mt-3 space-y-0.5 sm:mt-4 sm:space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => safeScrollTo(item.href)}
                    className="block w-full cursor-pointer py-2 text-left text-[13px] text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:py-2.5 sm:text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-sky-300 sm:text-[11px]">
              Key products
            </h4>
            <ul className="mt-3 space-y-0.5 sm:mt-4 sm:space-y-2">
              {PRODUCTS_LIST.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => handleProductClick(p.name)}
                    className="group flex min-h-9 w-full cursor-pointer items-center justify-between gap-1 py-1.5 text-left text-[12px] text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:min-h-11 sm:gap-2 sm:py-2 sm:text-sm"
                  >
                    <span className="truncate">{p.name}</span>
                    <ArrowUpRight className="h-3 w-3 shrink-0 text-slate-600 transition group-hover:text-sky-300 sm:h-3.5 sm:w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.08em] text-sky-300 sm:text-[11px]">
              Export desk
            </h4>
            <ul className="mt-3 space-y-3 text-[13px] sm:mt-4 sm:space-y-3.5 sm:text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0B4EA2]/30 text-sky-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-slate-300">Pune, Maharashtra, India</span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0B4EA2]/30 text-sky-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-medium tabular-nums text-slate-200">
                    {CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0B4EA2]/30 text-sky-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all text-slate-200">{CONTACT_DETAILS.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="font-hero mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center text-[11px] text-slate-500 sm:mt-12 sm:flex-row sm:gap-3 sm:pt-6 sm:text-left sm:text-xs">
          <span>© {new Date().getFullYear()} ITEC — Indian Trading &amp; Exports Corporation. All rights reserved.</span>
          <a
            href="https://itecorporation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-sky-300"
          >
            itecorporation.com
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
