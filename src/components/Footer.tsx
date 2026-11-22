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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 pb-28 sm:px-6 sm:py-16 sm:pb-16 lg:px-8">
        {/* Top CTA strip */}
        <div className="font-hero mb-12 flex flex-col items-start justify-between gap-5 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:p-7">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-sky-300">
              Ready to source from India?
            </div>
            <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
              Talk to the Pune export desk today
            </h3>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => safeScrollTo("#quote-enquiry")}
              className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] transition hover:bg-sky-50 sm:w-auto"
            >
              Contact us
              <ArrowRight className="h-4 w-4 text-[#0B4EA2]" />
            </button>
            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-sky-400/35 bg-[#0B4EA2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1A6FD1] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_DETAILS.phoneDisplay || CONTACT_DETAILS.phone}
            </a>
          </div>
        </div>

        <div className="font-hero grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="ITECH Homepage"
            >
              <Image
                src={withBasePath("/logo-itech-footer.png")}
                alt="ITECH — Indian Trading & Exports Corporation"
                width={480}
                height={160}
                className="h-14 w-auto max-w-full object-contain sm:h-20 md:h-24"
                sizes="480px"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Your India sourcing and export partner for transformers, power
              electronics, and industrial electrical solutions — engineered in Pune
              for global OEMs.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-sky-200">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
              Partner facility est. 2006 · Pune
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-300">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => safeScrollTo(item.href)}
                    className="block w-full cursor-pointer py-2.5 text-left text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-300">
              Key products
            </h4>
            <ul className="mt-4 space-y-2">
              {PRODUCTS_LIST.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => handleProductClick(p.name)}
                    className="group flex min-h-11 w-full cursor-pointer items-center justify-between gap-2 py-2 text-left text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <span className="truncate">{p.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-600 transition group-hover:text-sky-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-300">
              Export desk
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm">
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
        <div className="font-hero mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
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
