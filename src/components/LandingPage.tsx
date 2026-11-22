"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { IntroSplash } from "./IntroSplash";
import { MotionReveal } from "./MotionReveal";
import { safeScrollTo } from "@/lib/utils";

// Dynamically import below-the-fold components to maximize performance & reduce Initial JS Execution
const QuoteEnquiry = dynamic(
  () => import("./QuoteEnquiry").then((mod) => mod.QuoteEnquiry),
  { ssr: true }
);

const Products = dynamic(
  () => import("./Products").then((mod) => mod.Products),
  { ssr: true }
);

const WhyITEC = dynamic(
  () => import("./WhyITEC").then((mod) => mod.WhyITEC),
  { ssr: true }
);

const Certifications = dynamic(
  () => import("./Certifications").then((mod) => mod.Certifications),
  { ssr: true }
);

const Industries = dynamic(
  () => import("./Industries").then((mod) => mod.Industries),
  { ssr: true }
);

const CTA = dynamic(
  () => import("./CTA").then((mod) => mod.CTA),
  { ssr: true }
);

const Contact = dynamic(
  () => import("./Contact").then((mod) => mod.Contact),
  { ssr: true }
);

const Footer = dynamic(
  () => import("./Footer").then((mod) => mod.Footer),
  { ssr: true }
);

const FloatingWhatsApp = dynamic(
  () => import("./FloatingWhatsApp").then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export const LandingPage: React.FC = () => {
  const [prefilledProduct, setPrefilledProduct] = useState<string>("");
  const [showIntro, setShowIntro] = useState(true);

  const handleSelectProduct = (productName: string) => {
    setPrefilledProduct(productName);
    safeScrollTo("#quote-enquiry");
  };

  const handleRequestQuote = () => {
    safeScrollTo("#quote-enquiry");
  };

  const handleViewProducts = () => {
    safeScrollTo("#products");
  };

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}

      {/* Site mounts under the intro so the 3D model can load in parallel */}
      {/* 1. Header Navigation */}
      <Navbar onSelectProduct={handleSelectProduct} />

      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* 2. Hero with flowing bg + instant 3D model */}
        <Hero
          prefilledProduct={prefilledProduct}
          onRequestQuoteClick={handleRequestQuote}
          onViewProductsClick={handleViewProducts}
        />

        {/* 3. Quick quote / enquiry form */}
        <QuoteEnquiry prefilledProduct={prefilledProduct} />

        {/* 4. 15 Key Products Portfolio */}
        <MotionReveal>
          <Products onEnquireProduct={handleSelectProduct} />
        </MotionReveal>

        {/* 4. Why Choose ITEC (4 Manufacturing, Quality & Export Pillars) */}
        <MotionReveal>
          <WhyITEC />
        </MotionReveal>

        {/* 5. Statutory & Technical Compliance Dossier */}
        <MotionReveal>
          <Certifications />
        </MotionReveal>

        {/* 6. Cross-Sector Industrial Deployment (12 Sectors) */}
        <MotionReveal>
          <Industries />
        </MotionReveal>

        {/* 7. Direct Technical Engagement CTA */}
        <MotionReveal>
          <CTA onTalkToITEC={handleRequestQuote} />
        </MotionReveal>

        {/* 8. Direct Contact & Pune Export Desk */}
        <MotionReveal>
          <Contact />
        </MotionReveal>
      </main>

      {/* 9. Comprehensive Footer */}
      <Footer onSelectProduct={handleSelectProduct} />

      {/* 10. Floating WhatsApp Support Button */}
      <FloatingWhatsApp />
    </div>
  );
};
