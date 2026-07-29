import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_PAGE: ContentPage = {
  id: "hospital",
  order: 4,
  numberLabel: "04",
  slug: "골반필러-병원선택",
  href: ROUTES.hospital,
  navLabel: "병원선택",
  categoryLabel: SITE.categoryLabel,
  h1: "골반필러 병원은 어떤 기준으로 선택해야 할까요?",
  heading: "골반필러 병원은 어떤 기준으로 선택해야 할까요?",
  intro: [
    "골반필러 병원선택에서는 화려한 전후 이미지보다 제품 정보, 주입 계획, 의료진 설명, 이상 반응 대응 체계를 함께 확인하는 편이 도움이 됩니다.",
    "초음파 장비 사용 여부는 주변 구조와 주입층 확인을 위한 보조 항목으로 참고할 수 있지만, 그 자체를 안전 보장 표현으로 이해하면 안 됩니다.",
  ],
  publishedAt: "2026-07-28",
  updatedAt: "2026-07-28",
  faqIds: ["hospital-01", "hospital-02", "hospital-03", "hospital-04"],
  faqTitle: "골반필러 병원선택 FAQ",
  conclusion: [
    "골반필러 병원은 제품 정보와 설명 체계, 정품·정량 확인 절차, 사후 대응 체계를 함께 비교하는 편이 좋습니다.",
    "과한 효과 보장 광고보다 제품과 용량, 회복 계획을 현실적으로 설명하는지를 우선해 보세요.",
  ],
  thumbnail: TOPIC_MEDIA.hospital.thumbnail,
  topImages: [TOPIC_MEDIA.hospital.thumbnail],
  bodyImage: TOPIC_MEDIA.hospital.secondaryImage,
  heroImage: TOPIC_MEDIA.hospital.thumbnail,
  secondaryImage: TOPIC_MEDIA.hospital.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.hospital.secondaryImage,
  accentColor: TOPIC_MEDIA.hospital.accentColor,
  accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "제품 정보", text: "제품명과 허가사항을 설명하는지 봅니다." },
    { numberLabel: "02", title: "주입 계획", text: "예상 용량과 범위를 구체적으로 말하는지 확인합니다." },
    { numberLabel: "03", title: "대응 체계", text: "이상 반응 시 대응 방법이 있는지 봅니다." },
    { numberLabel: "04", title: "사후 경과", text: "재확인 일정과 정품·정량 절차를 확인합니다." },
  ],
  seo: {
    title: "골반필러 병원은 어떤 기준으로 선택해야 할까요? | 필러가이드",
    description: "골반필러 병원선택 시 제품 정보, 의료진 설명, 주입 계획, 이상 반응 대응과 사후관리 체계를 확인하는 기준을 안내합니다.",
    keywords: ["골반필러 병원", "바디필러 병원", "골반필러 병원선택"],
    ogImage: TOPIC_MEDIA.hospital.thumbnail.src,
    socialImage: TOPIC_MEDIA.hospital.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "hospital-product",
      order: 1,
      numberLabel: "01",
      heading: "제품명과 허가정보는 어떻게 확인하나요?",
      layout: "checklist",
      directAnswer:
        "상담에서는 제품명, 성분, 허가된 사용목적과 예상 주입 범위를 직접 질문해 확인하는 편이 좋습니다.",
      paragraphs: ["바디필러라는 표현이 넓게 쓰여도 실제 허가 범위는 제품별로 다를 수 있습니다."],
      bullets: [
        "제품명과 성분",
        "허가된 사용목적",
        "예상 주입 범위",
        "정품 확인 절차",
      ],
    },
    {
      id: "hospital-plan",
      order: 2,
      numberLabel: "02",
      heading: "주입 계획 설명은 어떤 방식이 좋을까요?",
      layout: "info-grid",
      directAnswer:
        "의료진이 목표 범위, 예상 용량, 양쪽 균형과 회복 중 주의점까지 구체적으로 설명해 주는지 확인하는 편이 좋습니다.",
      paragraphs: ["제품 설명 없이 결과만 강조하는 상담보다는 주입 계획과 한계를 함께 말해 주는 상담이 비교에 도움이 됩니다."],
      infoBlocks: [
        { label: "범위 설명", text: "골반 측면인지 힙딥 중심인지 구분" },
        { label: "예상 용량", text: "양쪽 합산 기준인지 확인" },
        { label: "균형 계획", text: "좌우 차이를 어떻게 볼지 설명" },
        { label: "회복 안내", text: "활동과 압박 관련 주의점 설명" },
      ],
    },
    {
      id: "hospital-ultrasound",
      order: 3,
      numberLabel: "03",
      heading: "초음파 장비 사용 여부는 어떻게 봐야 하나요?",
      layout: "prose",
      directAnswer:
        "초음파 장비 사용 여부는 주변 구조와 주입층 확인을 위한 보조 항목으로 참고할 수 있지만, 사용 자체가 안전을 보장한다고 보기는 어렵습니다.",
      paragraphs: [
        "장비 사용 여부보다 제품 정보 설명, 주입 계획, 이상 반응 대응 체계가 함께 갖춰져 있는지를 같이 보는 편이 좋습니다.",
      ],
    },
    {
      id: "hospital-response",
      order: 4,
      numberLabel: "04",
      heading: "이상 반응 대응과 사후관리 체계는 무엇을 보면 좋을까요?",
      layout: "responsive-table",
      directAnswer:
        "이상 반응 대응과 사후관리에서는 연락 방법, 경과 확인 일정, 정품·정량 확인 절차, 추가 방문 기준을 함께 확인하는 편이 좋습니다.",
      paragraphs: ["골반필러 병원과 바디필러 병원을 비교할 때도 결국 사후 대응 체계가 분명한지가 중요한 기준이 됩니다."],
      table: {
        caption: "병원선택 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인 내용" },
        ],
        rows: [
          { item: "연락 체계", check: "이상 반응 시 연락 방법 안내 여부" },
          { item: "경과 확인", check: "재방문 일정과 확인 포인트 안내 여부" },
          { item: "정품·정량", check: "제품 확인 절차와 용량 설명 여부" },
          { item: "추가 방문", check: "추가 비용 조건과 재평가 기준 안내 여부" },
        ],
      },
      relatedHref: ROUTES.recovery,
      relatedLabel: "골반필러 유지 및 회복기간 보기",
    },
  ],
};
