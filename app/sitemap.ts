import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fastsavehub.com";
  
  const routes = [
    "",
    "/video-downloader",
    "/audio-downloader",
    "/photo-downloader",
    "/how-it-works",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/dmca",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
