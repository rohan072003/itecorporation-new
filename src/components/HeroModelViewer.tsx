"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  getHeroModelSrc,
  onHeroModelSrcReady,
  preloadHeroModel,
} from "@/lib/modelPreload";

interface HeroModelViewerProps {
  onModelReady?: () => void;
}

/**
 * Client-only model-viewer mount.
 * Uses the preloaded/cached blob URL when available for instant reveal.
 */
export const HeroModelViewer: React.FC<HeroModelViewerProps> = ({
  onModelReady,
}) => {
  const [mounted, setMounted] = useState(false);
  const [modelSrc, setModelSrc] = useState(getHeroModelSrc);
  const readyFired = useRef(false);
  const onReadyRef = useRef(onModelReady);
  onReadyRef.current = onModelReady;

  const signalReady = () => {
    if (readyFired.current) return;
    readyFired.current = true;
    onReadyRef.current?.();
  };

  useEffect(() => {
    void preloadHeroModel();
    const unsub = onHeroModelSrcReady((src) => setModelSrc(src));

    let cancelled = false;
    const arm = () => {
      if (!cancelled) setMounted(true);
    };

    if (typeof window !== "undefined" && "customElements" in window) {
      customElements.whenDefined("model-viewer").then(arm).catch(arm);
    } else {
      arm();
    }

    const t = window.setTimeout(arm, 1200);
    return () => {
      cancelled = true;
      unsub();
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = document.getElementById("hero-model");
    if (!el) return;

    const onLoad = () => signalReady();
    el.addEventListener("load", onLoad);
    // @ts-expect-error — model-viewer loaded property
    if (el.loaded) signalReady();

    const safety = window.setTimeout(signalReady, 18000);
    return () => {
      el.removeEventListener("load", onLoad);
      window.clearTimeout(safety);
    };
  }, [mounted, modelSrc]);

  if (!mounted) {
    return (
      <div
        className="h-full w-full origin-center scale-100 bg-transparent sm:scale-[1.04] lg:scale-[1.08]"
        aria-hidden="true"
      />
    );
  }

  return (
    <model-viewer
      id="hero-model"
      src={modelSrc}
      alt="VARIAC Variable Autotransformer — ITEC electrical equipment"
      loading="eager"
      reveal="auto"
      camera-controls
      disable-zoom
      disable-tap
      disable-pan
      auto-rotate
      auto-rotate-delay={0}
      rotation-per-second="22deg"
      shadow-intensity="0.85"
      shadow-softness="0.9"
      exposure="1.05"
      environment-image="neutral"
      interaction-prompt="none"
      touch-action="pan-y"
      camera-orbit="25deg 75deg 95%"
      min-camera-orbit="-Infinity 75deg 95%"
      max-camera-orbit="Infinity 75deg 95%"
      field-of-view="26deg"
      min-field-of-view="26deg"
      max-field-of-view="26deg"
      orientation="0deg 0deg 0deg"
      className="h-full w-full origin-center scale-100 bg-transparent sm:scale-[1.04] lg:scale-[1.08]"
      style={{ width: "100%", height: "100%" }}
      suppressHydrationWarning
    />
  );
};
