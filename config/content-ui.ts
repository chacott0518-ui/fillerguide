import { ROUTES } from "@/config/routes";

/**
 * 상세 페이지 UI 기본값.
 * 컴포넌트에 주제별 키워드를 하드코딩하지 않고 여기서 관리한다.
 */
export const contentUiConfig = {
  showArticleEyebrow: false,
  mobileShowMenuNumber: true,
  /** 상세 페이지에서 본문 중간 반복 이미지를 기본적으로 쓰지 않는다 */
  repeatImageBeforeSectionNumber: null as string | null,
} as const;

export type FaqHubCardConfig = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

/** 상세 페이지 하단 FAQ 허브 카드 (대표 FAQ 페이지로 연결) */
export const FAQ_HUB_CARD: FaqHubCardConfig = {
  title: "더 많은 질문이 있으신가요?",
  description:
    "가격, 후기, 주의사항과 유지·회복기간 관련 질문을 한곳에서 확인하세요.",
  linkLabel: "골반필러 FAQ 전체 보기 →",
  href: ROUTES.faq,
};
