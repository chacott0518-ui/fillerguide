import type { ClayAccent, ContentClusterId } from "@/types/content";

export type MenuItemConfig = {
  id: ContentClusterId | "home" | "infoHub";
  order: number;
  numberLabel: string;
  title: string;
  description: string;
  iconKey: ContentClusterId | "home" | "infoHub";
  accent: ClayAccent;
  href?: string;
};

/**
 * 신규 키워드 사이트 복제 시 이 설정과 content/pages·faqs만 교체하면 된다.
 */
export const topicConfig = {
  siteName: "필러가이드",
  primaryKeyword: "골반필러",
  logoText: "골반필러",
  defaultCategory: "골반필러 정보",
  operatorName: "필러전문",
  locale: "ko-KR",
  language: "ko",
  theme: {
    accents: {
      cost: "orange" as ClayAccent,
      recovery: "blue" as ClayAccent,
      precautions: "lime" as ClayAccent,
      hospital: "cyan" as ClayAccent,
      reviews: "pink" as ClayAccent,
      faq: "neutral" as ClayAccent,
    },
  },
  menuItems: [
    {
      id: "home",
      order: 0,
      numberLabel: "00",
      title: "골반필러",
      description: "골반필러 정보 홈",
      iconKey: "home",
      accent: "neutral",
      href: "/",
    },
    {
      id: "cost",
      order: 1,
      numberLabel: "01",
      title: "골반필러 가격 및 비용",
      description: "제품, 성분, 용량과 범위별 견적 확인 기준",
      iconKey: "cost",
      accent: "orange",
    },
    {
      id: "reviews",
      order: 2,
      numberLabel: "02",
      title: "골반필러 후기",
      description: "전후 사진과 후기 문맥을 확인하는 기준",
      iconKey: "reviews",
      accent: "cyan",
    },
    {
      id: "precautions",
      order: 3,
      numberLabel: "03",
      title: "골반필러 주의사항",
      description: "시술 전후 확인할 점과 이상 징후 대응 기준",
      iconKey: "precautions",
      accent: "lime",
    },
    {
      id: "hospital",
      order: 4,
      numberLabel: "04",
      title: "골반필러 병원선택",
      description: "제품 정보, 설명 체계, 사후 대응 기준 확인",
      iconKey: "hospital",
      accent: "blue",
    },
    {
      id: "recovery",
      order: 5,
      numberLabel: "05",
      title: "골반필러 유지·회복기간",
      description: "유지기간과 회복 흐름, 활동 재개 시점 확인",
      iconKey: "recovery",
      accent: "pink",
    },
    {
      id: "faq",
      order: 6,
      numberLabel: "06",
      title: "골반필러 FAQ",
      description: "가격, 통증, 붓기, 운동, 제거 관련 질문 정리",
      iconKey: "faq",
      accent: "neutral",
    },
    {
      id: "infoHub",
      order: 7,
      numberLabel: "07",
      title: "의료정보",
      description: "상담·시술·회복·경과·안전 주제별 의료정보 가이드",
      iconKey: "infoHub",
      accent: "neutral",
      href: "/의료정보",
    },
  ] satisfies MenuItemConfig[],
  keywordMap: {
    home: ["골반필러", "힙딥필러", "엉덩이필러", "바디필러"],
    cost: ["골반필러 가격", "골반필러 비용", "힙딥필러 가격"],
    recovery: ["골반필러 유지기간", "골반필러 회복기간", "힙필러 회복"],
    precautions: ["골반필러 주의사항", "골반필러 부작용", "바디필러 주의사항"],
    hospital: ["골반필러 병원", "바디필러 병원", "골반필러 병원선택"],
    reviews: ["골반필러 후기", "힙딥필러 후기", "엉덩이필러 후기"],
    faq: ["골반필러 FAQ", "골반필러 자주 묻는 질문", "골반필러 제거"],
    faqHub: ["골반필러 FAQ", "골반필러 가격", "골반필러 유지기간"],
  },
} as const;
