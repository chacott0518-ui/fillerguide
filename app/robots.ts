import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site-url";

const ALLOWED_BOTS = [
  "*",
  "Yeti",
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_BOTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
