import type { Metadata } from "next";

import { HOME_OG_IMAGE } from "@/config/media";
import { SITE, VERIFICATION } from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";
import type { PageSeo } from "@/types/content";

/** 공유용 기본 OG 이미지 */
export const DEFAULT_OG_IMAGE = HOME_OG_IMAGE.src;
export const DEFAULT_OG_IMAGE_WIDTH = HOME_OG_IMAGE.width;
export const DEFAULT_OG_IMAGE_HEIGHT = HOME_OG_IMAGE.height;
export const DEFAULT_OG_IMAGE_ALT = HOME_OG_IMAGE.alt;

type BuildMetadataOptions = {
  seo: PageSeo;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

function buildVerification(): Metadata["verification"] | undefined {
  if (!VERIFICATION.google && !VERIFICATION.naver && !VERIFICATION.bing) {
    return undefined;
  }

  return {
    google: VERIFICATION.google,
    other: {
      ...(VERIFICATION.naver
        ? { "naver-site-verification": VERIFICATION.naver }
        : {}),
      ...(VERIFICATION.bing
        ? { "msvalidate.01": VERIFICATION.bing }
        : {}),
    },
  };
}

function buildOgImages(alt: string) {
  return [
    {
      url: absoluteUrl(DEFAULT_OG_IMAGE),
      width: DEFAULT_OG_IMAGE_WIDTH,
      height: DEFAULT_OG_IMAGE_HEIGHT,
      alt,
    },
  ];
}

export function buildPageMetadata({
  seo,
  path,
  type = "article",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogAlt = DEFAULT_OG_IMAGE_ALT;
  const ogImages = buildOgImages(ogAlt);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    category: seo.category,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.shortName,
      title: seo.title,
      description: seo.description,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    verification: buildVerification(),
  };
}
