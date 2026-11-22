// Centralized API Response Helper
import { NextResponse } from "next/server";

export interface ApiResponseOptions {
  status?: number;
  headers?: Record<string, string>;
}

export function apiSuccess<T>(data: T, message?: string, options: ApiResponseOptions = {}) {
  const { status = 200, headers = {} } = options;
  return NextResponse.json(
    {
      success: true,
      timestamp: new Date().toISOString(),
      ...(message ? { message } : {}),
      data,
    },
    {
      status,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    }
  );
}

export function apiError(
  message: string,
  statusCode = 400,
  errors?: Record<string, string>,
  headers?: Record<string, string>
) {
  return NextResponse.json(
    {
      success: false,
      timestamp: new Date().toISOString(),
      error: message,
      ...(errors ? { details: errors } : {}),
    },
    {
      status: statusCode,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    }
  );
}
