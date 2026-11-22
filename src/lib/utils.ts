// Utility helper functions

const APP_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/itec";

/**
 * Prefix public asset paths with Next.js basePath for next/image & static URLs.
 * Keeps absolute/remote URLs untouched.
 */
export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  if (path.startsWith(APP_BASE_PATH + "/") || path === APP_BASE_PATH) return path;
  return path.startsWith("/") ? `${APP_BASE_PATH}${path}` : `${APP_BASE_PATH}/${path}`;
}

/**
 * Safely scroll to element by selector with fallback
 */
export function safeScrollTo(selector: string, fallbackSelector?: string): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  let element: Element | null = null;
  try {
    element = document.querySelector(selector);
    if (!element && fallbackSelector) {
      element = document.querySelector(fallbackSelector);
    }
  } catch {
    return false;
  }

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    // If the element has an input, safely focus it after scrolling
    const input = element.querySelector<HTMLInputElement | HTMLTextAreaElement>("input, textarea");
    if (input) {
      setTimeout(() => {
        try {
          input.focus({ preventScroll: true });
        } catch {
          // ignore focus error
        }
      }, 500);
    }
    return true;
  }

  return false;
}

/**
 * Mask sensitive PII for logs (GDPR & privacy safe)
 */
export function maskSensitive(text: string): string {
  if (!text || text.length < 4) return "***";
  return `${text.slice(0, 2)}***${text.slice(-2)}`;
}
