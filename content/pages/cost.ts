import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const COST_PAGE: ContentPage = {
  id: "cost",
  order: 1,
  numberLabel: "01",
  slug: "골반필러-가격-비용",
  href: ROUTES.cost,
  navLabel: "가격 및 비용",
  categoryLabel: SITE.categoryLabel,
  h1: "골반필러 가격과 비용은 어떻게 결정될까요?",
  heading: "골반필러 가격과 비용은 어떻게 결정될까요?",
  intro: [
    "골반필러 가격은 제품과 성분, 예상 주입량, 시술 범위, 사후관리 구성에 따라 달라질 수 있습니다. 힙딥필러나 엉덩이필러처럼 비슷하게 보이는 표현도 실제 범위가 다르면 견적 비교 기준이 달라집니다.",
    "광고 문구의 총액만 보기보다 양쪽 합산 용량인지, 추가 비용과 사후 경과 확인이 포함되는지까지 함께 확인하는 편이 좋습니다.",
  ],
  publishedAt: "2026-07-28",
  updatedAt: "2026-07-28",
  faqIds: ["cost-01", "cost-02", "cost-03", "cost-04"],
  faqTitle: "골반필러 가격 FAQ",
  conclusion: [
    "골반필러 비용은 제품, 용량, 범위, 사후관리 구성에 따라 달라질 수 있으므로 단일 금액만으로 판단하기 어렵습니다.",
    "견적을 비교할 때는 제품명과 허가사항, 예상 용량, 포함 항목과 추가 비용 가능성까지 함께 확인하세요.",
  ],
  thumbnail: TOPIC_MEDIA.cost.thumbnail,
  topImages: [TOPIC_MEDIA.cost.thumbnail],
  bodyImage: TOPIC_MEDIA.cost.secondaryImage,
  heroImage: TOPIC_MEDIA.cost.thumbnail,
  secondaryImage: TOPIC_MEDIA.cost.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.cost.secondaryImage,
  accentColor: TOPIC_MEDIA.cost.accentColor,
  accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "제품과 성분", text: "제품 종류와 허가된 사용목적에 따라 비용 구조가 달라질 수 있습니다." },
    { numberLabel: "02", title: "주입량", text: "양쪽 합산 기준인지, 범위별 예상 용량이 어떻게 달라지는지 확인합니다." },
    { numberLabel: "03", title: "시술 범위", text: "골반 측면과 힙딥 중심 범위는 견적이 같지 않을 수 있습니다." },
    { numberLabel: "04", title: "추가 비용", text: "사후관리, 재확인, 추가 처치 포함 여부를 구분해 확인합니다." },
  ],
  seo: {
    title: "골반필러 가격과 비용은 어떻게 결정될까요? | 필러가이드",
    description: "골반필러 가격과 비용에 영향을 주는 제품, 성분, 예상 주입량, 시술 범위와 견적 확인 기준을 안내합니다.",
    keywords: ["골반필러 가격", "골반필러 비용", "힙딥필러 가격", "바디필러 가격"],
    ogImage: TOPIC_MEDIA.cost.thumbnail.src,
    socialImage: TOPIC_MEDIA.cost.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "cost-why",
      order: 1,
      numberLabel: "01",
      heading: "골반필러 가격을 바꾸는 요소는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "비용은 제품과 성분, 예상 주입량, 시술 범위, 사후관리 구성 등 여러 요소에 따라 달라질 수 있습니다.",
      paragraphs: [
        "총액만 보면 서로 다른 견적을 같은 기준으로 비교하기 어렵습니다. 제품명, 용량, 시술 범위와 포함 항목을 나눠서 확인해야 차이를 읽기 쉽습니다.",
        "전국 공통 가격처럼 단정하기보다 제품 설명과 예상 용량을 기준으로 비교하는 편이 정확합니다.",
      ],
      infoBlocks: [
        { label: "제품과 성분", text: "브랜드와 성분 설명 여부" },
        { label: "예상 주입량", text: "양쪽 합산 용량 기준 확인" },
        { label: "시술 범위", text: "골반 측면 전체인지 힙딥 중심인지" },
        { label: "사후관리", text: "재확인과 추가 비용 포함 여부" },
      ],
    },
    {
      id: "cost-exam-method",
      order: 2,
      numberLabel: "02",
      heading: "제품과 용량 설명은 어떻게 들어야 할까요?",
      layout: "compare-table",
      directAnswer:
        "비용 설명에서는 제품명과 성분, 허가된 사용목적, 예상 용량과 범위를 함께 확인해야 실제 비교가 가능합니다.",
      paragraphs: [
        "단순히 몇 cc인지보다 어느 부위에 어떻게 나눠 주입하는지, 양쪽 합산인지 편측 기준인지까지 확인해야 해석이 쉬워집니다.",
        "바디필러, 힙필러, Hip filler 같은 표현이 함께 사용되더라도 실제 계획은 의료진 설명을 기준으로 구분하는 편이 좋습니다.",
      ],
      compareHeaders: ["확인할 표현", "함께 물어볼 내용"],
      compareRows: [
        { criterion: "제품명", left: "브랜드명과 성분", right: "허가된 사용목적 확인" },
        { criterion: "용량", left: "예상 총 용량", right: "양쪽 합산인지 여부" },
        { criterion: "범위", left: "골반 측면 또는 힙딥", right: "주입 범위 설명 방식" },
        { criterion: "사후관리", left: "경과 확인 포함 여부", right: "추가 방문 비용 조건" },
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "골반필러 유지 및 회복기간 보기",
    },
    {
      id: "cost-before-compare",
      order: 3,
      numberLabel: "03",
      heading: "견적 비교 전에 체크할 항목은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "총액 비교에 앞서 제품명, 양쪽 합산 용량, 사후관리 포함 범위, 추가 비용 가능성을 정리해 두면 오해를 줄일 수 있습니다.",
      paragraphs: [
        "같은 금액이라도 포함 범위가 다르면 실제 판단이 달라질 수 있습니다. 포함·제외 항목을 문서나 메시지로 정리해 받으면 비교가 쉬워집니다.",
      ],
      bullets: [
        "제품명과 성분을 확인했는지",
        "양쪽 합산 용량인지 확인했는지",
        "사후관리 포함 여부를 들었는지",
        "추가 비용 조건이 있는지",
        "시술 범위를 명확히 설명받았는지",
      ],
    },
    {
      id: "cost-consult-check",
      order: 4,
      numberLabel: "04",
      heading: "병원 상담 시 어떤 질문을 하면 좋을까요?",
      layout: "responsive-table",
      directAnswer:
        "상담에서는 제품 정보, 주입 계획, 포함 항목, 사후관리 일정과 추가 비용 조건을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "금액만 듣고 결정하기보다 예상 용량과 사후관리, 이상 반응 대응 체계를 질문해 두면 이후 비교가 쉬워집니다.",
      ],
      table: {
        caption: "골반필러 상담 시 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인할 내용" },
        ],
        rows: [
          { item: "제품", check: "제품명과 허가사항을 설명하는지" },
          { item: "용량", check: "양쪽 합산 기준과 범위 설명이 있는지" },
          { item: "비용", check: "포함 항목과 추가 비용 조건을 구분하는지" },
          { item: "사후관리", check: "경과 확인 일정과 대응 체계가 있는지" },
        ],
      },
      relatedHref: ROUTES.hospital,
      relatedLabel: "골반필러 병원선택 기준 보기",
    },
  ],
};
