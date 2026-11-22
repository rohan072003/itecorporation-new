// Input Validation and Sanitization Utility
// Protects against XSS, control characters, header injection, and data corruption

export interface SanitizedInquiryInput {
  name: string;
  phone: string;
  email: string;
  company: string;
  country: string;
  productOfInterest: string;
  quantitySpecs: string | null;
  message: string;
}

export interface ValidationResult<T> {
  isValid: boolean;
  errors: Record<string, string>;
  data?: T;
}

// Strips HTML tags, script markers, and malicious control characters
export function sanitizeString(input: unknown, maxLength = 500): string {
  if (typeof input !== "string") {
    return "";
  }
  return input
    // Strip HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove null bytes and dangerous control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .slice(0, maxLength);
}

// Basic E.164 & international phone number format validator
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  // Most international numbers have between 7 and 15 digits
  return digits.length >= 7 && digits.length <= 16;
}

// RFC 5322 compliant regex for standard email addresses
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  return EMAIL_REGEX.test(email);
}

export function validateInquiryPayload(raw: unknown): ValidationResult<SanitizedInquiryInput> {
  const errors: Record<string, string> = {};

  if (!raw || typeof raw !== "object") {
    return {
      isValid: false,
      errors: { _general: "Invalid JSON request body." },
    };
  }

  const body = raw as Record<string, unknown>;

  const cleanName = sanitizeString(body.name, 100);
  if (!cleanName || cleanName.length < 2) {
    errors.name = "Please provide your full name (minimum 2 characters).";
  }

  const cleanPhone = sanitizeString(body.phone, 30);
  if (!cleanPhone || !isValidPhone(cleanPhone)) {
    errors.phone = "Please provide a valid contact/WhatsApp phone number with area/country code.";
  }

  let cleanEmail = sanitizeString(body.email, 254);
  if (cleanEmail && !isValidEmail(cleanEmail)) {
    errors.email = "Please enter a valid business email address.";
  } else if (!cleanEmail) {
    // Generate fallback email identifier if omitted
    const digits = cleanPhone.replace(/\D/g, "");
    cleanEmail = `inquiry-${digits || Date.now()}@tisnx.com`;
  }

  const cleanCompany = sanitizeString(body.company, 150) || "Direct Buyer / Inquirer";
  const cleanCountry = sanitizeString(body.country, 100) || "International";
  const cleanProduct = sanitizeString(body.productOfInterest, 150) || "General Electrical & Export Inquiry";
  
  const rawSpecs = body.quantitySpecs ? sanitizeString(body.quantitySpecs, 1000) : null;
  const rawMessage = body.message ? sanitizeString(body.message, 3000) : "";
  const cleanMessage = rawMessage || (rawSpecs ? `Requirements / Specs: ${rawSpecs}` : "Quick inquiry submitted via website form.");

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    data: {
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      company: cleanCompany,
      country: cleanCountry,
      productOfInterest: cleanProduct,
      quantitySpecs: rawSpecs,
      message: cleanMessage,
    },
  };
}
