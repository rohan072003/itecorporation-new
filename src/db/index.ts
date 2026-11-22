import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, PoolConfig } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __itecPostgresqlPool?: Pool;
};

function createPool(): Pool {
  const isProduction = process.env.NODE_ENV === "production";

  const config: PoolConfig = {
    connectionString: databaseUrl || (isProduction ? undefined : "postgresql://postgres:postgres@127.0.0.1:5432/app_db"),
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    allowExitOnIdle: true,
  };

  // Add SSL if required by database provider
  if (databaseUrl && (databaseUrl.includes("sslmode=require") || databaseUrl.includes("supabase") || databaseUrl.includes("neon.tech"))) {
    config.ssl = { rejectUnauthorized: false };
  }

  const poolInstance = new Pool(config);

  // Critical for Node.js reliability: Catch unexpected idle client errors so the process doesn't terminate
  poolInstance.on("error", (err) => {
    console.error("[PostgreSQL Pool Unexpected Error]:", err.message);
  });

  return poolInstance;
}

export const pool = globalForDb.__itecPostgresqlPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalForDb.__itecPostgresqlPool = pool;
}

export const db = drizzle(pool);
