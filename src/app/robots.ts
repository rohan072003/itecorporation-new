import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/itec";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:4043${basePath}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
