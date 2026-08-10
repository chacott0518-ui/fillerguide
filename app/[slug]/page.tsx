import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/content/ContentPageView";
import { InfoGuideTemplate } from "@/components/content/InfoGuideTemplate";
import { getInfoGuideBySlug, INFO_GUIDES } from "@/content/info-guides";
import {
  CONTENT_PAGES,
  getContentPageBySlug,
} from "@/lib/content-registry";
import { buildPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function normalizeSlug(rawSlug: string): string {
  try {
    return decodeURIComponent(rawSlug).normalize("NFC");
  } catch {
    return rawSlug.normalize("NFC");
  }
}

export function generateStaticParams() {
  return [
    ...CONTENT_PAGES.map((page) => ({ slug: page.slug })),
    ...INFO_GUIDES.map((guide) => ({ slug: guide.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = normalizeSlug((await params).slug);
  const contentPage = getContentPageBySlug(slug);

  if (contentPage) {
    return buildPageMetadata({
      seo: contentPage.seo,
      path: contentPage.href,
      publishedTime: contentPage.publishedAt,
      modifiedTime: contentPage.updatedAt,
    });
  }

  const guide = getInfoGuideBySlug(slug);
  if (!guide) return {};

  return buildPageMetadata({
    seo: guide.seo,
    path: guide.href,
    type: "article",
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt,
  });
}

export default async function ContentSlugPage({ params }: PageProps) {
  const slug = normalizeSlug((await params).slug);
  const contentPage = getContentPageBySlug(slug);

  if (contentPage) {
    return <ContentPageView page={contentPage} />;
  }

  const guide = getInfoGuideBySlug(slug);
  if (!guide) notFound();

  return <InfoGuideTemplate guide={guide} />;
}
