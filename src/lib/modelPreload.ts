import { withBasePath } from "@/lib/utils";

const MODEL_PATH = withBasePath("/model.glb");
const CACHE_NAME = "itech-hero-glb-v1";

let preloadPromise: Promise<string> | null = null;
let cachedBlobUrl: string | null = null;
const readyListeners = new Set<(src: string) => void>();

function notifyReady(src: string) {
  readyListeners.forEach((fn) => {
    try {
      fn(src);
    } catch {
      /* ignore */
    }
  });
}

/** Subscribe when a warm blob/src becomes available for the hero model. */
export function onHeroModelSrcReady(fn: (src: string) => void): () => void {
  readyListeners.add(fn);
  if (cachedBlobUrl) fn(cachedBlobUrl);
  return () => {
    readyListeners.delete(fn);
  };
}

/**
 * High-priority full download of the hero GLB into Cache API + memory blob
 * so <model-viewer> can bind a warm src and avoid a blank stage.
 */
export function preloadHeroModel(): Promise<string> {
  if (typeof window === "undefined") return Promise.resolve(MODEL_PATH);
  if (cachedBlobUrl) return Promise.resolve(cachedBlobUrl);
  if (preloadPromise) return preloadPromise;

  preloadPromise = (async () => {
    try {
      let response: Response | undefined;

      if ("caches" in window) {
        const cache = await caches.open(CACHE_NAME);
        const hit = await cache.match(MODEL_PATH);
        if (hit) {
          response = hit;
        } else {
          const network = await fetch(MODEL_PATH, {
            credentials: "same-origin",
            mode: "cors",
            priority: "high",
            cache: "force-cache",
          });
          if (network.ok) {
            await cache.put(MODEL_PATH, network.clone());
            response = network;
          }
        }
      } else {
        const network = await fetch(MODEL_PATH, {
          credentials: "same-origin",
          mode: "cors",
          priority: "high",
          cache: "force-cache",
        });
        if (network.ok) response = network;
      }

      if (!response?.ok) return MODEL_PATH;

      const buffer = await response.arrayBuffer();
      const blob = new Blob([buffer], { type: "model/gltf-binary" });
      if (cachedBlobUrl) URL.revokeObjectURL(cachedBlobUrl);
      cachedBlobUrl = URL.createObjectURL(blob);
      notifyReady(cachedBlobUrl);
      return cachedBlobUrl;
    } catch {
      return MODEL_PATH;
    }
  })();

  return preloadPromise;
}

export function getHeroModelSrc(): string {
  return cachedBlobUrl || MODEL_PATH;
}
