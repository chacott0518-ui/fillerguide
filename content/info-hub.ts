import { ROUTES } from "@/config/routes";
import { INFO_GUIDES } from "@/content/info-guides";
import { SITE } from "@/config/site";
import type { PageSeo } from "@/types/content";

export type InfoHubCategoryId =
  | "consultation"
  | "procedure"
  | "recovery"
  | "progress"
  | "safety"
  | "understanding";

export type InfoHubCategory = {
  id: InfoHubCategoryId;
  label: string;
  emoji: string;
  guideIds: string[];
};

/** 허브 카테고리 — InfoGuide id를 그룹핑만 하고 콘텐츠는 그대로 재사용한다 */
export const INFO_HUB_CATEGORIES: InfoHubCategory[] = [
  {
    id: "consultation",
    label: "상담·준비",
    emoji: "🔎",
    guideIds: [
      "consultation-checklist",
      "medication-check",
      "allergy-history-check",
      "consultation-questions",
      "desired-shape-communication",
    ],
  },
  {
    id: "procedure",
    label: "시술 이해",
    emoji: "💉",
    guideIds: [
      "procedure-process",
      "injection-site-decision",
      "design-consultation",
      "product-ingredient-check",
    ],
  },
  {
    id: "recovery",
    label: "회복·관리",
    emoji: "🌿",
    guideIds: ["daily-life-after", "compression-massage"],
  },
  {
    id: "progress",
    label: "경과·유지",
    emoji: "📅",
    guideIds: ["left-right-difference", "shape-change-observation", "retouch-timing"],
  },
  {
    id: "safety",
    label: "안전·주의",
    emoji: "🛡",
    guideIds: ["after-symptoms"],
  },
  {
    id: "understanding",
    label: "이해·정보",
    emoji: "💡",
    guideIds: ["ad-info-check", "medical-info-check"],
  },
];

export type InfoHubEntry = {
  id: string;
  href: string;
  title: string;
  description: string;
  categoryId: InfoHubCategoryId;
};

export function getInfoHubEntries(): InfoHubEntry[] {
  const entries: InfoHubEntry[] = [];

  for (const category of INFO_HUB_CATEGORIES) {
    for (const guideId of category.guideIds) {
      const guide = INFO_GUIDES.find((item) => item.id === guideId);
      if (!guide) continue;
      entries.push({
        id: guide.id,
        href: guide.href,
        title: guide.preview.title,
        description: guide.preview.description,
        categoryId: category.id,
      });
    }
  }

  return entries;
}

export const INFO_HUB_SEO: PageSeo = {
  title: "골반필러 의료정보 | 상담·시술·회복 가이드 탐색 | 필러가이드",
  description:
    "골반필러 상담 준비, 시술 이해, 회복·관리, 경과·유지, 안전·주의, 의료정보 확인까지 주제별로 정리한 골반필러 의료정보 가이드를 탐색하세요.",
  keywords: ["골반필러 의료정보", "골반필러 가이드", "골반필러 정보 모음"],
  ogImage: "/images/og/pelvic-filler-og.png",
  socialImage: "/images/og/pelvic-filler-og.png",
  category: SITE.categoryLabel,
};

export const INFO_HUB_HREF = ROUTES.infoHub;

/** 허브 하단 compact FAQ — 신규 전역 FAQ 10개(guide-faq-01~10)만 노출한다 */
export const INFO_HUB_FAQ_IDS: string[] = [
  "guide-faq-01",
  "guide-faq-02",
  "guide-faq-03",
  "guide-faq-04",
  "guide-faq-05",
  "guide-faq-06",
  "guide-faq-07",
  "guide-faq-08",
  "guide-faq-09",
  "guide-faq-10",
];
