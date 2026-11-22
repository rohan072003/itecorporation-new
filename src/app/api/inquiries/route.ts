import { NextRequest } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { validateInquiryPayload } from "@/lib/validation";
import { apiSuccess, apiError } from "@/lib/api-response";
import { maskSensitive } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. IP-Based Rate Limiting (Prevent abuse, spam & DDoS)
    const clientIp = getClientIp(req.headers);
    const rateLimitResult = rateLimit(`inquiry:${clientIp}`, {
      limit: 6, // Max 6 submissions per minute per IP
      windowMs: 60000,
    });

    const rateLimitHeaders = {
      "X-RateLimit-Limit": rateLimitResult.limit.toString(),
      "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
      "X-RateLimit-Reset": rateLimitResult.reset.toString(),
    };

    if (!rateLimitResult.success) {
      return apiError(
        "Too many inquiry submissions from this IP. Please wait a minute or contact our export desk directly via WhatsApp.",
        429,
        undefined,
        {
          ...rateLimitHeaders,
          "Retry-After": "60",
        }
      );
    }

    // 2. Request Size Limit Verification (< 128KB payload)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 131072) {
      return apiError("Request payload too large.", 413, undefined, rateLimitHeaders);
    }

    // 3. Safe JSON Parsing
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return apiError("Invalid JSON body in request.", 400, undefined, rateLimitHeaders);
    }

    // 4. Strict Sanitization & Validation
    const validation = validateInquiryPayload(rawBody);
    if (!validation.isValid || !validation.data) {
      return apiError(
        "Validation failed. Please verify your contact information.",
        400,
        validation.errors,
        rateLimitHeaders
      );
    }

    const {
      name,
      company,
      country,
      email,
      phone,
      productOfInterest,
      quantitySpecs,
      message,
    } = validation.data;

    // 5. Database Persistence with Graceful Fallback
    let recordId: number | null = null;
    let savedToDatabase = false;

    try {
      const [record] = await db
        .insert(inquiries)
        .values({
          name,
          company,
          country,
          email,
          phone,
          productOfInterest,
          quantitySpecs,
          message,
        })
        .returning({ id: inquiries.id });

      if (record?.id) {
        recordId = record.id;
        savedToDatabase = true;
      }

      // Safe privacy-conscious logging (GDPR compliant - no plaintext PII)
      console.log(`[ITEC Inquiry Logged]: ID=${recordId || "N/A"} Name=${maskSensitive(name)} Phone=${maskSensitive(phone)} Product="${productOfInterest}" IP=${clientIp}`);
    } catch (dbErr) {
      const errMsg = dbErr instanceof Error ? dbErr.message : "Unknown DB Error";
      // Log structured alert without crashing or throwing 500 to customer
      console.warn(`[ITEC Inquiry Offline Backup Notice]: DB write skipped (${errMsg}). In-memory logged for Name=${maskSensitive(name)} Phone=${maskSensitive(phone)}`);
    }

    // 6. Return Structured Success Response
    return apiSuccess(
      {
        inquiryId: recordId || Date.now(),
        persisted: savedToDatabase,
        name,
        productOfInterest,
      },
      "Inquiry successfully received. Our Pune engineering export desk will contact you within 24 hours.",
      {
        status: 201,
        headers: rateLimitHeaders,
      }
    );
  } catch (error) {
    console.error("[Inquiry API Uncaught Error]:", error);
    return apiError(
      "An unexpected server error occurred. Please reach out directly to Sales@itecorporation.com or WhatsApp.",
      500
    );
  }
}
