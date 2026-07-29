import type { MetadataRoute } from "next";

import { CONTENT_PAGES } from "@/content/pages";
import { absoluteUrl } from "@/lib/site-url";

const HOME_LAST_MODIFIED = "2026-07-28";

/** 색인 대상: 홈 + 대표 콘텐츠 6개(총 7). redirect·칼럼 URL 제외 */
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(HOME_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const pages: MetadataRoute.Sitemap = CONTENT_PAGES.map((page) => ({
    url: absoluteUrl(page.href),
    lastModified: new Date(page.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...home, ...pages];
}
