import type { ArticleSection, PageSeo } from "@/types/content";
import type { FaqItem } from "@/types/faq";

export type OfficialSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  note?: string;
};

export type InfoGuideRelatedLink = {
  id: string;
  href: string;
  label: string;
  /** 앵커 문장에 쓸 표현 (중복 exact 앵커 방지) */
  anchor: string;
};

export type InfoGuidePreview = {
  title: string;
  description: string;
  href: string;
};

/**
 * 신버전 정보형 아티클.
 * officialSources는 비어 있을 수 없다.
 */
export type InfoGuide = {
  id: string;
  slug: string;
  href: `/${string}`;
  categoryLabel: string;
  h1: string;
  /** 화면·스키마 공통 */
  publishedAt: string;
  updatedAt: string;
  intro: string[];
  firstCheckTitle: string;
  firstCheckItems: Array<{
    numberLabel: string;
    title: string;
    text: string;
  }>;
  sections: ArticleSection[];
  faqs: FaqItem[];
  faqTitle: string;
  relatedLinks: InfoGuideRelatedLink[];
  medicalNotice: string;
  /**
   * 공식 출처 — 신규 InfoGuide에서는 최소 1개 이상 필수.
   * 빈 배열이면 빌드/렌더 단계에서 오류를 낸다.
   */
  officialSources: [OfficialSource, ...OfficialSource[]];
  seo: PageSeo;
  preview: InfoGuidePreview;
};

export function assertOfficialSources(
  guide: InfoGuide,
): asserts guide is InfoGuide {
  if (!guide.officialSources || guide.officialSources.length === 0) {
    throw new Error(
      `[InfoGuide] "${guide.id}" officialSources가 비어 있습니다. 공식 출처는 필수입니다.`,
    );
  }
}
