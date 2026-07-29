import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/content/ContentPageView";
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
  return CONTENT_PAGES.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const page = getContentPageBySlug(normalizeSlug(rawSlug));

  if (!page) return {};

  return buildPageMetadata({
    seo: page.seo,
    path: page.href,
    publishedTime: page.publishedAt,
    modifiedTime: page.updatedAt,
  });
}

export default async function ContentSlugPage({ params }: PageProps) {
  const { slug: rawSlug } = await params;
  const page = getContentPageBySlug(normalizeSlug(rawSlug));

  if (!page) notFound();

  return <ContentPageView page={page} />;
}
