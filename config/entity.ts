import type { OptionalEntity, SiteEntity } from "@/types/seo";
import { topicConfig } from "@/config/topic";
import { getSiteUrl } from "@/lib/site-url";

export const siteEntity: SiteEntity = {
  name: "필러가이드",
  type: "WebSite",
  description:
    "골반필러 가격 및 비용, 후기 확인 기준, 주의사항, 병원선택, 유지 및 회복기간과 FAQ를 제공하는 독립 정보 사이트",
  logo: "/icon.svg",
  language: topicConfig.locale,
};

/** 실제 운영 주체가 확정될 때만 enabled=true */
export const operatorEntity: OptionalEntity = {
  enabled: true,
  name: "필러전문",
};

/** 광고주 확정 시에만 enabled=true */
export const sponsorEntity: OptionalEntity = {
  enabled: false,
};

/** 실제 의료진 검수가 있을 때만 enabled=true */
export const reviewerEntity: OptionalEntity = {
  enabled: false,
};

export const SITE = {
  name: siteEntity.name,
  shortName: topicConfig.siteName,
  tagline: siteEntity.description,
  locale: topicConfig.locale.replace("-", "_"),
  categoryLabel: topicConfig.defaultCategory,
  primaryKeyword: topicConfig.primaryKeyword,
  operatorName: topicConfig.operatorName,
  get url() {
    return getSiteUrl();
  },
  publisher: {
    name: siteEntity.name,
    type: "Organization" as const,
  },
} as const;

export const VERIFICATION = {
  naver: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || undefined,
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined,
} as const;
