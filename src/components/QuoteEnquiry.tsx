"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Clock3,
  Factory,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/data/itecData";
import { withBasePath } from "@/lib/utils";

interface QuoteEnquiryProps {
  prefilledProduct?: string;
}

type FormState = {
  name: string;
  phone: string;
  message: string;
};

export const QuoteEnquiry: React.FC<QuoteEnquiryProps> = ({
  prefilledProduct = "",
}) => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!prefilledProduct) return;
    setForm((prev) => {
      const alreadyMentions = prev.message
        .toLowerCase()
        .includes(prefilledProduct.toLowerCase());
      if (alreadyMentions && prev.message.trim()) return prev;
      const lead = `Interested in: ${prefilledProduct}`;
      return {
        ...prev,
        message: prev.message.trim()
          ? `${lead}\n${prev.message.trim()}`
          : `${lead}\n`,
      };
    });
  }, [prefilledProduct]);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
      if (submitError) setSubmitError("");
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 7) next.phone = "Please enter a valid phone / WhatsApp number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch(withBasePath("/api/inquiries"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          productOfInterest:
            prefilledProduct || "General Electrical & Export Inquiry",
          company: "Direct Buyer / Inquirer",
          country: "International",
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string; error?: string }
        | null;

      if (!res.ok || data?.success === false) {
        setSubmitError(
          data?.message ||
            data?.error ||
            "Could not send inquiry. Please try WhatsApp or call us."
        );
        return;
      }

      router.push("/thank-you");
    } catch {
      setSubmitError(
        `Network error. Reach us on WhatsApp or ${CONTACT_DETAILS.email}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "min-h-11 w-full rounded-xl border border-sky-100 bg-[#F7FAFE] px-3.5 py-2.5 text-base text-[#0B1F3A] outline-none transition placeholder:text-slate-400 focus:border-[#0B4EA2]/45 focus:bg-white focus:ring-2 focus:ring-[#0B4EA2]/15 sm:px-4 sm:py-3 sm:text-[15px]";

  const trustItems = [
    { icon: Clock3, title: "24h response", text: "Fast RFQ scoping" },
    { icon: Factory, title: "Factory-direct", text: "Pune sourcing" },
    { icon: ShieldCheck, title: "Export-ready", text: "IS / IEC / CE" },
  ] as const;

  return (
    <section
      id="quote-enquiry"
      aria-label="Request a Quick Quote"
      className="relative flex min-h-0 items-center overflow-x-clip border-b border-sky-100 bg-[#F4F8FD] lg:min-h-[calc(100dvh-7.5rem)]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 8% 20%, rgba(147,197,253,0.45) 0%, transparent 55%),
              radial-gradient(ellipse 45% 55% at 92% 75%, rgba(186,230,253,0.4) 0%, transparent 55%),
              linear-gradient(165deg, #F7FAFE 0%, #EEF4FC 50%, #E8F1FB 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-4 py-8 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8">
        {/* Left copy — compact on phone */}
        <div className="font-hero text-center lg:col-span-5 lg:text-left">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.05em] text-[#0B4EA2] shadow-sm sm:mb-4 sm:px-3.5 sm:py-1.5 sm:text-[11px]">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Pune export desk
          </div>

          <h2 className="text-[1.4rem] font-semibold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-[2.55rem] lg:leading-[1.15]">
            Get engineering pricing{" "}
            <span className="text-[#1A6FD1]">without the runaround</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-md text-[13px] leading-relaxed text-slate-500 sm:mt-4 sm:text-[15px] lg:mx-0">
            Share rating, quantity, or market — get a clear technical quote from Pune.
          </p>

          {/* Mobile: compact 3 trust pills side-by-side */}
          <div className="mt-4 grid grid-cols-3 gap-1.5 sm:mt-6 lg:hidden">
            {trustItems.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-1 rounded-xl border border-sky-100 bg-white/90 px-1.5 py-2.5 text-center shadow-sm"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B4EA2] text-white">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-semibold leading-tight text-[#0B1F3A]">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: full list */}
          <ul className="mt-8 hidden space-y-3.5 lg:block">
            {trustItems.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3.5 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B4EA2] text-white shadow-sm shadow-blue-900/15">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0B1F3A]">{title}</div>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="lg:col-span-7">
          <div className="font-hero overflow-hidden rounded-2xl border border-sky-100 bg-white p-4 shadow-[0_20px_50px_-28px_rgba(11,78,162,0.45)] sm:rounded-[1.5rem] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1A6FD1] sm:text-[11px]">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Fast engineering quote
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 sm:px-3 sm:py-1 sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                24h Response
              </span>
            </div>

            <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-[#0B1F3A] sm:mt-3 sm:text-[1.75rem]">
              Request a Quick Quote
            </h3>
            <p className="mt-1 text-[12px] text-slate-500 sm:mt-1.5 sm:text-sm">
              Direct technical pricing from our Pune export desk.
            </p>

            <div className="my-3.5 h-px bg-gradient-to-r from-sky-100 via-sky-200/80 to-transparent sm:my-5" />

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
              <div>
                <label
                  htmlFor="quote-name"
                  className="mb-1 block text-[13px] font-medium text-[#0B1F3A] sm:mb-1.5 sm:text-sm"
                >
                  Full Name <span className="text-[#0B4EA2]">*</span>
                </label>
                <input
                  id="quote-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="e.g. John Miller"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="mb-1 block text-[13px] font-medium text-[#0B1F3A] sm:mb-1.5 sm:text-sm"
                >
                  Phone / WhatsApp <span className="text-[#0B4EA2]">*</span>
                </label>
                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="e.g. +91 78754 97964"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-message"
                  className="mb-1 block text-[13px] font-medium text-[#0B1F3A] sm:mb-1.5 sm:text-sm"
                >
                  Message / Requirement
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Equipment rating (kVA/V), quantity, or specs..."
                  className={`${fieldClass} min-h-[88px] resize-y sm:min-h-[110px]`}
                />
              </div>

              {submitError && (
                <p className="rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B4EA2] to-[#1A6FD1] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-white shadow-lg shadow-blue-900/20 transition hover:from-[#093d82] hover:to-[#0B4EA2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4EA2] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 sm:min-h-12 sm:py-3.5 sm:text-sm"
              >
                {submitting ? "Sending…" : "Submit Inquiry"}
                <Send className="h-4 w-4" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-0.5 text-[11px] text-slate-500 sm:text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  100% Confidential
                </span>
                <span className="text-slate-300" aria-hidden="true">
                  ·
                </span>
                <span>Fast Engineering Turnaround</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
