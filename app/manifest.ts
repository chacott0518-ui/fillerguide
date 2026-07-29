import type { MetadataRoute } from "next";

import { SITE } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf2",
    theme_color: "#f3b61f",
    lang: "ko-KR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
