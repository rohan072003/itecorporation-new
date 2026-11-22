"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  FileSearch,
  MessageSquare,
  RefreshCw,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { PRODUCTS_LIST, ProductItem } from "@/data/itecData";
import { safeScrollTo, withBasePath } from "@/lib/utils";

interface ProductsProps {
  onEnquireProduct: (productName: string) => void;
}

/** Canonical 9 categories — order for 5 + 4 centered rows */
const CATEGORY_ORDER = [
  "Voltage Regulation",
  "Power Conversion",
  "Uninterruptible Power",
  "DC Systems",
  "Switchgear & Control",
  "Winding Components",
  "Power Conditioning",
  "Testing & Validation",
  "Industrial Enclosures",
] as const;

type CategoryName = (typeof CATEGORY_ORDER)[number];

function categoryThumb(category: string): string {
  const match = PRODUCTS_LIST.find((p) => p.category === category);
  return match?.image ?? PRODUCTS_LIST[0].image;
}

export const Products: React.FC<ProductsProps> = ({ onEnquireProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement | null>(null);

  const categories = useMemo(
    () =>
      CATEGORY_ORDER.map((name) => ({
        name,
        image: categoryThumb(name),
        count: PRODUCTS_LIST.filter((p) => p.category === name).length,
      })),
    []
  );

  useEffect(() => {
    if (!activeModalProduct) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalCloseBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProduct]);

  const cleanQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = PRODUCTS_LIST.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      !cleanQuery ||
      product.name.toLowerCase().includes(cleanQuery) ||
      product.shortDesc.toLowerCase().includes(cleanQuery) ||
      product.category.toLowerCase().includes(cleanQuery) ||
      (product.standardRating &&
        product.standardRating.toLowerCase().includes(cleanQuery));
    return matchesCategory && matchesSearch;
  });

  const handleEnquireClick = (productName: string) => {
    onEnquireProduct(productName);
    setActiveModalProduct(null);
    safeScrollTo("#quote-enquiry");
  };

  const selectCategory = (name: string) => {
    setSelectedCategory((prev) => (prev === name ? "All" : name));
    // Bring product listing into view (just below categories)
    requestAnimationFrame(() => {
      const el = document.getElementById("product-listing");
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const CategoryCircle = ({
    name,
    image,
    count,
  }: {
    name: CategoryName | string;
    image: string;
    count: number;
  }) => {
    const isActive = selectedCategory === name;
    return (
      <button
        type="button"
        onClick={() => selectCategory(name)}
        aria-pressed={isActive}
        className="font-hero group flex min-w-[5.25rem] max-w-[7.25rem] flex-1 basis-[5.25rem] cursor-pointer flex-col items-center gap-1.5 focus-visible:outline-none sm:min-w-0 sm:max-w-none sm:basis-0"
      >
        <span
          className={`relative mx-auto flex aspect-square w-[min(100%,5.75rem)] items-center justify-center rounded-full transition-all duration-300 sm:w-[82%] sm:max-w-[6.5rem] ${
            isActive
              ? "bg-[#0B4EA2]/15 shadow-[0_0_0_5px_rgba(11,78,162,0.12),0_10px_24px_-8px_rgba(11,78,162,0.4)]"
              : "bg-transparent"
          }`}
        >
          <span
            className={`relative aspect-square w-[88%] overflow-hidden rounded-full border-[2.5px] bg-white p-1 transition-colors sm:border-[3px] ${
              isActive
                ? "border-[#0B4EA2]"
                : "border-slate-200 group-hover:border-[#0B4EA2]/50"
            }`}
          >
            <Image
              src={withBasePath(image)}
              alt=""
              fill
              sizes="96px"
              className="object-contain p-1"
            />
          </span>
        </span>
        <span
          className={`w-full px-0.5 text-center text-[10px] leading-snug transition-colors sm:text-[11px] md:text-[12px] lg:text-[13px] ${
            isActive ? "font-semibold text-[#0B4EA2]" : "font-medium text-[#0B1F3A]"
          }`}
        >
          {name}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors sm:px-2.5 sm:text-[11px] ${
            isActive
              ? "bg-[#0B4EA2] text-white"
              : "border border-sky-200 bg-white text-[#0B4EA2] group-hover:border-[#0B4EA2]/40"
          }`}
        >
          {count}
        </span>
      </button>
    );
  };

  return (
    <section
      id="products"
      aria-label="Product Portfolio"
      className="relative overflow-hidden border-b border-sky-100 bg-white py-16 sm:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-2 sm:px-3 md:px-4 lg:px-5">
        {/* Header */}
        <div className="font-hero mx-auto mb-10 max-w-3xl px-2 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-[#E8F2FC] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4EA2]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0B4EA2] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0B4EA2]" />
            </span>
            15 Industrial Equipment Lines
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0B1F3A] sm:text-3xl md:text-[2.15rem]">
            Complete Product Portfolio &amp; Equipment Range
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-[15px]">
            Pick a category below, then browse equipment or send an enquiry to our
            Pune export desk.
          </p>
        </div>

        {/* Category circles — single row using full width; wrap only when no space left */}
        <div className="mb-12" role="group" aria-label="Product categories">
          <div className="flex w-full flex-wrap items-start justify-center gap-x-1 gap-y-5 sm:flex-nowrap sm:justify-between sm:gap-x-1.5 md:gap-x-2 lg:gap-x-2.5">
            {categories.map((cat) => (
              <CategoryCircle key={cat.name} {...cat} />
            ))}
          </div>
          {selectedCategory !== "All" && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="font-hero inline-flex cursor-pointer items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-[13px] font-medium text-[#0B4EA2] transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Show all categories
              </button>
            </div>
          )}
        </div>

        {/* Search + filter bar */}
        <div
          id="product-listing"
          role="region"
          aria-label="Product search and filters"
          className="font-hero mb-10 scroll-mt-28 flex flex-col gap-3 rounded-2xl border border-sky-100 bg-[#F7FAFE] p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`cursor-pointer rounded-full px-4 py-2 text-[13px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] ${
                selectedCategory === "All"
                  ? "bg-[#0B4EA2] text-white shadow-md shadow-blue-900/15"
                  : "border border-sky-200 bg-white text-slate-600 hover:border-[#0B4EA2]/35 hover:text-[#0B4EA2]"
              }`}
            >
              All ({PRODUCTS_LIST.length})
            </button>
            <span className="hidden text-xs text-slate-400 sm:inline">
              {selectedCategory === "All"
                ? "Browsing full portfolio"
                : `Filtered: ${selectedCategory}`}
            </span>
          </div>

          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              aria-label="Search equipment by name, category, or rating"
              placeholder="Search equipment, rating, or keyword…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-sky-200 bg-white py-2.5 pl-10 pr-10 text-sm text-[#0B1F3A] placeholder:text-slate-400 shadow-sm transition focus:border-[#0B4EA2] focus:outline-none focus:ring-2 focus:ring-[#0B4EA2]/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 text-slate-400 hover:bg-sky-50 hover:text-[#0B4EA2]"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty / grid */}
        {filteredProducts.length === 0 ? (
          <div className="font-hero mx-auto mb-12 max-w-lg rounded-2xl border border-sky-100 bg-white p-10 text-center shadow-sm">
            <FileSearch className="mx-auto mb-3 h-11 w-11 text-slate-300" />
            <h3 className="text-base font-semibold text-[#0B1F3A]">No matching equipment</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try another keyword or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0B4EA2] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82]"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="font-hero group flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-[0_10px_30px_-18px_rgba(11,78,162,0.28)] transition hover:-translate-y-0.5 hover:border-[#0B4EA2]/25 hover:shadow-[0_16px_40px_-16px_rgba(11,78,162,0.35)]"
              >
                <div className="relative flex h-56 items-center justify-center bg-[#F7FAFE] p-5 sm:h-60">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#0B1F3A] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
                    {product.category}
                  </span>
                  <div className="relative h-full w-full">
                    <Image
                      src={withBasePath(product.image)}
                      alt={`${product.name} — industrial equipment`}
                      fill
                      loading="lazy"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-semibold leading-snug text-[#0B1F3A] transition group-hover:text-[#0B4EA2] sm:text-base">
                    {product.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                    {product.shortDesc}
                  </p>
                  {product.standardRating && (
                    <p className="mt-3 text-[12px] font-medium text-[#0B4EA2]">
                      {product.standardRating}
                    </p>
                  )}

                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <button
                      type="button"
                      onClick={() => handleEnquireClick(product.name)}
                      className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#0B4EA2] px-4 py-2.5 text-[13px] font-medium text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Enquire
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-sky-200 bg-white px-4 py-2.5 text-[13px] font-medium text-[#0B4EA2] transition hover:border-[#0B4EA2]/40 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom trust strip */}
        <div className="font-hero flex flex-col items-start justify-between gap-5 rounded-2xl border border-sky-100 bg-[#F7FAFE] p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B4EA2] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#0B1F3A]">
                Custom engineering &amp; export-grade QA
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-500">
                IS / IEC / CE aligned builds, factory test reports, and single-window
                export handling from Pune.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => safeScrollTo("#quote-enquiry")}
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#0B4EA2] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2"
          >
            Request custom RFQ
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Quick view modal */}
      {activeModalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F3A]/55 p-4 backdrop-blur-sm sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProduct(null);
          }}
        >
          <div className="font-hero flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-sky-100 px-5 py-4 sm:px-6">
              <span className="rounded-full bg-[#E8F2FC] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#0B4EA2]">
                {activeModalProduct.category}
              </span>
              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="cursor-pointer rounded-full p-2 text-slate-400 transition hover:bg-sky-50 hover:text-[#0B4EA2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
                aria-label="Close quick view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-6">
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                <div className="relative h-56 rounded-2xl border border-sky-100 bg-[#F7FAFE] md:col-span-5 md:h-64">
                  <Image
                    src={withBasePath(activeModalProduct.image)}
                    alt={activeModalProduct.name}
                    fill
                    sizes="400px"
                    className="object-contain p-4"
                  />
                </div>
                <div className="md:col-span-7">
                  <h2
                    id="modal-product-title"
                    className="text-xl font-semibold text-[#0B1F3A] sm:text-2xl"
                  >
                    {activeModalProduct.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {activeModalProduct.shortDesc}
                  </p>
                  {activeModalProduct.standardRating && (
                    <p className="mt-3 inline-flex rounded-full bg-[#E8F2FC] px-3 py-1.5 text-xs font-medium text-[#0B4EA2]">
                      {activeModalProduct.standardRating}
                    </p>
                  )}
                  {activeModalProduct.compliance && (
                    <p className="mt-3 text-xs text-slate-500">
                      <span className="font-medium text-[#0B1F3A]">Standards: </span>
                      {activeModalProduct.compliance}
                    </p>
                  )}
                  <p className="mt-3 rounded-xl border border-sky-100 bg-[#F7FAFE] p-3 text-xs leading-relaxed text-slate-600">
                    <span className="mb-1 block font-semibold text-[#0B1F3A]">
                      Applications
                    </span>
                    {activeModalProduct.applications}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-sky-100 pt-5">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0B4EA2]">
                  Key specifications
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeModalProduct.keySpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 rounded-xl border border-sky-100 bg-white p-2.5 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0B4EA2]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-sky-100 bg-[#F7FAFE] px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="cursor-pointer rounded-full border border-sky-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleEnquireClick(activeModalProduct.name)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0B4EA2] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-900/15 transition hover:bg-[#093d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2"
              >
                Enquire
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
