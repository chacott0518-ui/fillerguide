import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/content/ContentPageView";
import { InfoGuideTemplate } from "@/components/content/InfoGuideTemplate";
import { InfoHubTemplate } from "@/components/content/InfoHubTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { getFaqsByIds } from "@/content/faqs";
import { getInfoGuideBySlug, INFO_GUIDES } from "@/content/info-guides";
import { INFO_HUB_FAQ_IDS, INFO_HUB_SEO } from "@/content/info-hub";
import {
  CONTENT_PAGES,
  getContentPageBySlug,
} from "@/lib/content-registry";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/schema";

const INFO_HUB_SLUG = "의료정보";

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
    { slug: INFO_HUB_SLUG },
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

  if (slug === INFO_HUB_SLUG) {
    return buildPageMetadata({
      seo: INFO_HUB_SEO,
      path: ROUTES.infoHub,
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

  if (slug === INFO_HUB_SLUG) {
    return (
      <>
        <InfoHubTemplate />
        <JsonLd
          data={[
            webPageJsonLd({
              name: "골반필러 의료정보",
              description: INFO_HUB_SEO.description,
              path: ROUTES.infoHub,
              image: INFO_HUB_SEO.socialImage || INFO_HUB_SEO.ogImage,
              type: "WebPage",
            }),
            breadcrumbJsonLd([
              { name: SITE.shortName, path: ROUTES.home },
              { name: "골반필러 의료정보", path: ROUTES.infoHub },
            ]),
            faqPageJsonLd(getFaqsByIds(INFO_HUB_FAQ_IDS), ROUTES.infoHub),
          ]}
        />
      </>
    );
  }

  const guide = getInfoGuideBySlug(slug);
  if (!guide) notFound();

  return <InfoGuideTemplate guide={guide} />;
}
