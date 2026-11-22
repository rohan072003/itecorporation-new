"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/utils";
import { preloadHeroModel } from "@/lib/modelPreload";

interface IntroSplashProps {
  onComplete: () => void;
}

const INTRO_MS = 3000;

/**
 * Brief white splash with centered, scaled logo.
 * Aggressively preloads + caches the hero GLB during the hold.
 */
export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(false);
  const completedRef = useRef(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setFading(true);
    window.setTimeout(() => onComplete(), 350);
  }, [onComplete]);

  useEffect(() => {
    void preloadHeroModel();
    const show = window.requestAnimationFrame(() => setVisible(true));
    const t = window.setTimeout(finish, INTRO_MS);
    return () => {
      window.cancelAnimationFrame(show);
      window.clearTimeout(t);
    };
  }, [finish]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-[350ms] ease-out ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Loading"
    >
      <div
        className={`flex items-center justify-center px-6 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible
            ? "scale-100 opacity-100"
            : "scale-[0.82] opacity-0"
        }`}
      >
        <Image
          src={withBasePath("/logo-itech.png")}
          alt="ITECH — Indian Trading & Exports Corporation"
          width={720}
          height={200}
          priority
          className="h-20 w-auto max-w-[min(88vw,20rem)] object-contain sm:h-36 sm:max-w-[88vw] md:h-44 lg:h-48"
          sizes="(max-width: 640px) 88vw, 720px"
        />
      </div>
    </div>
  );
};
