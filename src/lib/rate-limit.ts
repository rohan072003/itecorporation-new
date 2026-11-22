// Production In-Memory Sliding-Window Rate Limiter
// Designed for serverless and edge/Node.js runtimes without external dependencies

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Periodically clean up stale entries to prevent memory leaks
if (typeof setInterval !== "undefined") {
  const CLEANUP_INTERVAL_MS = 60000; // 1 minute
  const cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      // Remove timestamps older than 10 minutes
      const validTimestamps = record.timestamps.filter((ts) => now - ts < 600000);
      if (validTimestamps.length === 0) {
        rateLimitStore.delete(key);
      } else {
        record.timestamps = validTimestamps;
      }
    }
  }, CLEANUP_INTERVAL_MS);
  if (typeof cleanupTimer.unref === "function") {
    cleanupTimer.unref();
  }
}

export interface RateLimitOptions {
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { limit: 10, windowMs: 60000 }
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - options.windowMs;

  const record = rateLimitStore.get(identifier) || { timestamps: [] };
  // Filter out timestamps outside the active window
  const activeTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (activeTimestamps.length >= options.limit) {
    const oldestTimestamp = activeTimestamps[0] || now;
    const resetTime = Math.ceil((oldestTimestamp + options.windowMs) / 1000);
    return {
      success: false,
      limit: options.limit,
      remaining: 0,
      reset: resetTime,
    };
  }

  activeTimestamps.push(now);
  rateLimitStore.set(identifier, { timestamps: activeTimestamps });

  const remaining = Math.max(0, options.limit - activeTimestamps.length);
  const resetTime = Math.ceil((now + options.windowMs) / 1000);

  return {
    success: true,
    limit: options.limit,
    remaining,
    reset: resetTime,
  };
}

export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ips = forwardedFor.split(",").map((ip) => ip.trim());
    if (ips[0]) return ips[0];
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  return "127.0.0.1";
}
