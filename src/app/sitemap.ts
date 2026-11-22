import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/itec";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:4043${basePath}`;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
