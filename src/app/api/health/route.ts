import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const startTime = Date.now();
  let dbStatus = "healthy";
  let dbLatencyMs = 0;

  let timer: NodeJS.Timeout | null = null;
  try {
    const dbPromise = db.execute(sql`SELECT 1`);
    const timeoutPromise = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error("DB Timeout")), 3000);
    });

    await Promise.race([dbPromise, timeoutPromise]);
    dbLatencyMs = Date.now() - startTime;
  } catch (err) {
    dbStatus = err instanceof Error ? err.message : "unavailable";
  } finally {
    if (timer) clearTimeout(timer);
  }

  const isHealthy = dbStatus === "healthy";
  const status = isHealthy ? 200 : 503;

  return NextResponse.json(
    {
      status: isHealthy ? "operational" : "degraded",
      timestamp: new Date().toISOString(),
      service: "itec-industrial-web",
      uptime: process.uptime(),
      checks: {
        database: {
          status: dbStatus,
          latencyMs: dbLatencyMs,
        },
      },
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
