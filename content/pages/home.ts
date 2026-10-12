import { HOME_FEATURE_IMAGE, TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type {
  ArticleSection,
  ContentCard,
  HomeIndexItem,
  HomeIntro,
  PageSeo,
} from "@/types/content";

export const HOME_SEO: PageSeo = {
  title: "골반필러 | 가격·후기·주의사항·병원선택 - 필러가이드",
  description:
    "골반필러 가격·후기·주의사항·병원선택·유지/회복기간을 한 페이지에서 정리합니다. 힙딥·골반 라인·좌우 차이와 FAQ를 안내합니다.",
  /** NAVER CONTROLLED TEST: 대표·띄어쓰기·관련 바디 표현만 유지. Google 랭킹 신호로 주장하지 않음. */
  keywords: ["골반필러", "골반 필러", "힙딥필러", "엉덩이필러", "바디필러"],
  ogImage: "/images/og/pelvic-filler-og.png",
  socialImage: "/images/og/pelvic-filler-og.png",
  category: SITE.categoryLabel,
};

export const HOME_INTRO: HomeIntro = {
  h1: "골반필러",
  subtitle: "가격 및 비용, 후기 확인 기준, 주의사항, 병원선택, 유지 및 회복기간과 FAQ를 정리한 독립 정보 사이트",
  heading: "골반필러는 어떤 시술이며 무엇을 확인해야 할까요?",
  featureImage: HOME_FEATURE_IMAGE,
  paragraphs: [
    "골반필러를 알아볼 때는 골반 라인, 힙딥, 좌우 차이, 제품·용량·주입 범위, 후기 사진 조건, 병원 선택 기준을 함께 확인하는 편이 좋습니다.",
    "골반필러는 골반 측면의 꺼짐이나 힙딥 부위의 볼륨·윤곽을 확인하려는 목적에서 검색되는 주입 시술을 가리키는 표현입니다. 검색에서는 골반 필러처럼 띄어 쓰기도 하고, 힙딥필러·힙필러처럼 비슷한 표현이 함께 쓰이기도 합니다.",
    "엉덩이필러나 바디필러 문맥으로 이어지기도 하지만, 실제 부위와 사용 가능 여부는 제품별 허가사항과 상담 내용에 따라 달라질 수 있습니다. 같은 말로 단정하지 않고 범위부터 구분하는 편이 좋습니다.",
    "시술을 검토할 때는 가격과 비용 구성, 주의사항과 부작용, 회복기간과 유지기간까지 함께 확인하는 편이 좋습니다. 필러가이드는 골반필러 상담 전 확인할 정보를 정리하며, 실제 시술 가능 여부와 적합성은 의료기관 상담을 통해 확인해야 합니다.",
  ],
  summary: "제품별 허가사항과 개인 상태, 시술 범위에 따라 확인할 내용이 달라질 수 있습니다.",
  keySummary: [
    { numberLabel: "01", title: "시술 위치 구분", text: "골반필러와 힙딥·엉덩이 부위 표현은 문맥이 겹칠 수 있으나 시술 위치와 범위는 상담을 통해 구분해야 합니다." },
    { numberLabel: "02", title: "비용 확인", text: "가격은 제품, 성분, 주입량, 시술 범위와 사후관리 항목에 따라 달라질 수 있습니다." },
    { numberLabel: "03", title: "후기 판단", text: "후기는 촬영 시점, 보정 여부와 체형 유사성을 함께 확인해야 합니다." },
    { numberLabel: "04", title: "허가사항 확인", text: "제품별 허가된 사용목적과 예상 가능한 이상 반응을 확인해야 합니다." },
    { numberLabel: "05", title: "회복과 유지", text: "회복과 유지기간은 개인 상태와 제품에 따라 달라질 수 있습니다." },
  ],
};

export const HOME_EXAM_NOTICE =
  "본 콘텐츠는 일반적인 정보 제공을 목적으로 하며 필러가이드는 의료기관이 아닙니다. 실제 시술 가능 여부와 관리 계획은 의료진의 설명과 진료를 통해 확인해야 합니다.";

export const HOME_CONCLUSION = [
  "골반필러는 가격만이 아니라 제품 정보, 주입 계획, 후기의 신뢰도, 이상 반응 대응 체계까지 함께 확인해야 비교가 쉬워집니다.",
  "특정 결과를 보장하는 표현이나 고정된 유지기간 안내보다는, 본인 상태와 제품 특성에 맞춘 설명이 충분한지 살펴보는 편이 도움이 됩니다.",
];

/** 06 FAQ 섹션 도입문 (실제 Q&A는 동일 섹션의 FAQ 아코디언에 포함) */
export const HOME_FAQ_INTRO = [
  "골반필러 FAQ에서는 통증, 이동감, 제거·녹이기 가능 여부, 지방이식과의 차이, 운동과 목욕, 병원선택 기준처럼 자주 묻는 질문을 묶어 확인하는 것이 효율적입니다.",
  "하나의 답으로 모든 상황을 설명하기 어려우므로, 제품 특성과 본인 체형, 주입 범위에 따라 달라질 수 있다는 점을 함께 보아야 합니다.",
];

export const HOME_INDEX: HomeIndexItem[] = [
  { order: 1, numberLabel: "01", title: "골반필러 가격 및 비용", description: "가격·비용·용량과 견적 확인 기준", href: ROUTES.cost },
  { order: 2, numberLabel: "02", title: "골반필러 후기", description: "후기·전후사진 확인 기준", href: ROUTES.reviews },
  { order: 3, numberLabel: "03", title: "골반필러 주의사항 및 부작용", description: "부작용·주의사항과 이상 징후 확인", href: ROUTES.precautions },
  { order: 4, numberLabel: "04", title: "골반필러 병원선택", description: "병원선택 시 확인 기준", href: ROUTES.hospital },
  { order: 5, numberLabel: "05", title: "골반필러 유지 및 회복기간", description: "회복·유지·붓기·활동 재개 기준", href: ROUTES.recovery },
  { order: 6, numberLabel: "06", title: "골반필러 FAQ", description: "제거·리터치·지방이식 등 질문 정리", href: ROUTES.faq },
];

/** 본문 목차 6개만. FAQ Q&A는 06 섹션에 포함하므로 07번 중복 금지. */
export const HOME_TOC = [
  { id: "home-cost", numberLabel: "01", label: "골반필러 가격 및 비용", description: "가격을 볼 때 먼저 확인할 기준" },
  { id: "home-review", numberLabel: "02", label: "골반필러 후기", description: "전후 사진과 후기 문맥 읽기" },
  { id: "home-precautions", numberLabel: "03", label: "골반필러 주의사항 및 부작용", description: "시술 전후 확인할 점" },
  { id: "home-hospital", numberLabel: "04", label: "골반필러 병원선택", description: "제품과 설명 체계 확인" },
  { id: "home-recovery", numberLabel: "05", label: "골반필러 유지 및 회복기간", description: "고정값이 아닌 경과 흐름" },
  { id: "home-faq", numberLabel: "06", label: "골반필러 FAQ", description: "자주 묻는 질문과 답변" },
];

/** 01~05 본문. 06 FAQ는 page.tsx에서 Q&A와 함께 렌더. */
export const HOME_SECTIONS: ArticleSection[] = [
  {
    id: "home-cost",
    order: 1,
    numberLabel: "01",
    heading: "골반필러 가격 및 비용",
    layout: "info-grid",
    directAnswer:
      "골반필러 가격은 제품과 성분, 예상 주입량, 시술 범위, 추가 관리 항목에 따라 달라질 수 있으며 인터넷에 보이는 단일 금액만으로 비교하기는 어렵습니다.",
    paragraphs: [
      "힙딥필러처럼 비슷한 표현이 함께 쓰여도 실제 비용 비교에서는 부위 범위와 양쪽 합산 용량을 먼저 확인해야 합니다.",
      "견적을 볼 때는 제품명과 성분, 1cc·총용량 기준, 사후 경과 확인 포함 여부까지 분리해서 보는 편이 도움이 됩니다.",
    ],
    infoBlocks: [
      { label: "제품과 성분", text: "허가된 사용목적과 성분 종류, 브랜드 설명 여부" },
      { label: "주입량", text: "양쪽 합산 기준인지, 예상 용량 범위가 어떻게 잡히는지" },
      { label: "시술 범위", text: "골반 측면인지 힙딥 중심인지 범위 차이 확인" },
      { label: "추가 비용", text: "사후관리, 재확인, 추가 처치가 포함되는지" },
    ],
    relatedHref: ROUTES.cost,
    relatedLabel: "골반필러 가격 및 비용 자세히 보기",
  },
  {
    id: "home-review",
    order: 2,
    numberLabel: "02",
    heading: "골반필러 후기",
    layout: "info-blocks",
    directAnswer:
      "골반필러 후기는 시술 직후 사진만 볼 것이 아니라 촬영 시점, 조명과 자세, 사진 보정 여부, 본인과 체형이 비슷한지까지 함께 확인하는 편이 좋습니다.",
    paragraphs: [
      "전후사진 확인에서는 같은 각도·자세인지와 광고 표시 여부까지 함께 보는 편이 좋습니다. 편한 부분만 강조된 후기는 참고 범위를 보수적으로 잡으세요.",
    ],
    infoBlocks: [
      { label: "촬영 시점", text: "직후, 며칠 후, 안정화 이후인지 구분" },
      { label: "체형 유사성", text: "본인과 체형이나 목표 범위가 유사한지 확인" },
      { label: "보정 여부", text: "조명, 자세, 필터, 보정 여부를 함께 보기" },
      { label: "사후 대응", text: "불편감 발생 시 어떤 대응을 받았는지 확인" },
    ],
    relatedHref: ROUTES.reviews,
    relatedLabel: "골반필러 후기 확인 기준 보기",
  },
  {
    id: "home-precautions",
    order: 3,
    numberLabel: "03",
    heading: "골반필러 주의사항 및 부작용",
    layout: "comparison",
    directAnswer:
      "골반필러는 시술 전후 확인해야 할 사항이 분명하며, 일반적으로 나타날 수 있는 반응과 빠르게 확인이 필요한 이상 징후를 구분해서 안내받는 것이 중요합니다.",
    paragraphs: [
      "제품별 허가된 사용목적 확인, 복용 약과 건강 상태 고지, 시술 후 압박과 활동 제한 범위를 충분히 설명받아야 합니다.",
    ],
    comparison: {
      left: {
        label: "시술 전",
        text: "제품명, 허가사항, 복용 약, 알레르기, 피부 상태와 목표 범위를 설명받고 확인합니다.",
      },
      right: {
        label: "시술 후",
        text: "멍, 붓기, 통증, 눌림감처럼 일반적으로 나타날 수 있는 반응과 심한 통증, 열감, 피부 색 변화 같은 이상 징후를 구분해 확인합니다.",
      },
    },
    relatedHref: ROUTES.precautions,
    relatedLabel: "골반필러 주의사항 확인하기",
  },
  {
    id: "home-hospital",
    order: 4,
    numberLabel: "04",
    heading: "골반필러 병원선택",
    layout: "checklist",
    directAnswer:
      "골반필러 병원선택에서는 과한 전후 비교보다 제품 정보 확인, 설명 체계, 이상 반응 대응 계획, 사후 경과 확인 절차를 함께 보는 편이 도움이 됩니다.",
    paragraphs: [
      "검색어로 ‘잘하는 곳’이나 ‘추천’이 나와도 이 사이트는 특정 병원을 순위화하지 않습니다. 초음파 장비 사용 여부는 보조 항목으로만 참고하고, 설명 방식을 함께 확인하세요.",
    ],
    bullets: [
      "제품명과 허가된 사용목적을 설명하는지",
      "주입 성분과 예상 용량을 구체적으로 말하는지",
      "시술 범위와 계획을 그림이나 사진으로 설명하는지",
      "이상 반응 발생 시 대응 방법과 연락 체계가 있는지",
      "정품과 정량 확인 절차, 사후 경과 확인 일정이 있는지",
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "골반필러 병원선택 기준 확인하기",
  },
  {
    id: "home-recovery",
    order: 5,
    numberLabel: "05",
    heading: "골반필러 유지 및 회복기간",
    layout: "timeline",
    directAnswer:
      "골반필러의 유지기간과 회복기간은 제품, 주입량, 범위, 개인 대사와 활동 수준에 따라 달라질 수 있어 고정된 기간으로 단정하기 어렵습니다.",
    paragraphs: [
      "붓기·앉기·운동, 목욕, 사우나, 장시간 압박처럼 회복에 영향을 줄 수 있는 생활 요소는 의료진 안내를 우선하는 편이 좋습니다.",
    ],
    timeline: [
      { label: "시술 직후", text: "붓기와 압통, 촉감 변화를 관찰하면서 무리한 압박을 피합니다." },
      { label: "초기 회복", text: "일상 활동은 가능할 수 있으나 운동과 열 자극은 안내 범위를 우선합니다." },
      { label: "경과 관찰", text: "제품 자리잡음과 부기 변화가 개인차를 보일 수 있습니다." },
      { label: "형태 평가", text: "최종 형태 평가는 초기 붓기와 압통이 가라앉은 뒤 보는 편이 좋습니다." },
    ],
    relatedHref: ROUTES.recovery,
    relatedLabel: "골반필러 유지 및 회복기간 확인하기",
  },
];

export const HOME_FAQ_IDS = [
  "main-01",
  "main-02",
  "main-03",
  "main-04",
  "main-05",
  "main-06",
  "main-07",
  "main-08",
  "main-09",
  "main-10",
] as const;

export const CARD_PUBLISHED_AT = "2026.07.28";

/**
 * HOME 6카드 = ItemList 1:1.
 * 순서: 가격 → 후기 → 주의사항 → 병원선택 → 유지·회복 → FAQ
 */
export const CONTENT_CARDS: ContentCard[] = [
  {
    id: "cost",
    order: 1,
    numberLabel: "01",
    href: ROUTES.cost,
    slug: "골반필러-가격-비용",
    title: "골반필러 가격 및 비용",
    cardTitle: "골반필러 가격 및 비용",
    shortTitle: "가격 및 비용",
    cardMetaLabel: "가격 및 비용",
    iconKey: "cost",
    description: "제품, 성분, 1cc·총용량과 견적 확인 기준",
    cardDescription: "제품·성분, 1cc와 총용량, 양쪽 합산·시술 범위와 추가 비용을 구분해 견적을 확인하는 기준을 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.cost.mobileCardDescription,
    accent: "orange",
    accentColor: TOPIC_MEDIA.cost.accentColor,
    accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["cost-01", "cost-02", "cost-03", "cost-04", "cost-05"],
    image: TOPIC_MEDIA.cost.thumbnail,
    heroImage: TOPIC_MEDIA.cost.thumbnail,
    inlineImage: TOPIC_MEDIA.cost.thumbnail,
  },
  {
    id: "reviews",
    order: 2,
    numberLabel: "02",
    href: ROUTES.reviews,
    slug: "골반필러-후기",
    title: "골반필러 후기",
    cardTitle: "골반필러 후기",
    shortTitle: "후기",
    cardMetaLabel: "후기",
    iconKey: "reviews",
    description: "후기·전후사진 확인 기준",
    cardDescription: "촬영 시점, 보정 여부, 용량·범위 표기, 광고 표시와 사후 대응 경험을 함께 읽는 기준을 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.reviews.mobileCardDescription,
    accent: "cyan",
    accentColor: TOPIC_MEDIA.reviews.accentColor,
    accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["review-01", "review-02", "review-03", "review-04"],
    image: TOPIC_MEDIA.reviews.thumbnail,
    heroImage: TOPIC_MEDIA.reviews.thumbnail,
    inlineImage: TOPIC_MEDIA.reviews.thumbnail,
  },
  {
    id: "precautions",
    order: 3,
    numberLabel: "03",
    href: ROUTES.precautions,
    slug: "골반필러-주의사항",
    title: "골반필러 주의사항 및 부작용",
    cardTitle: "골반필러 주의사항 및 부작용",
    shortTitle: "주의사항",
    cardMetaLabel: "주의사항",
    iconKey: "precautions",
    description: "시술 전후 확인할 점과 이상 징후 대응 기준",
    cardDescription: "시술 전 확인사항부터 회복 중 반응, 빠르게 확인이 필요한 징후까지 항목별로 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.precautions.mobileCardDescription,
    accent: "lime",
    accentColor: TOPIC_MEDIA.precautions.accentColor,
    accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["caution-01", "caution-02", "caution-03", "caution-04"],
    image: TOPIC_MEDIA.precautions.thumbnail,
    heroImage: TOPIC_MEDIA.precautions.thumbnail,
    inlineImage: TOPIC_MEDIA.precautions.thumbnail,
  },
  {
    id: "hospital",
    order: 4,
    numberLabel: "04",
    href: ROUTES.hospital,
    slug: "골반필러-병원선택",
    title: "골반필러 병원선택",
    cardTitle: "골반필러 병원선택",
    shortTitle: "병원선택",
    cardMetaLabel: "병원선택",
    iconKey: "hospital",
    description: "제품 정보, 설명 체계, 사후 대응 기준 확인",
    cardDescription: "제품 정보, 주입 계획, 의료진 설명, 이상 반응 대응과 사후 경과 확인 기준을 안내합니다.",
    mobileCardDescription: TOPIC_MEDIA.hospital.mobileCardDescription,
    accent: "blue",
    accentColor: TOPIC_MEDIA.hospital.accentColor,
    accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["hospital-01", "hospital-02", "hospital-03", "hospital-04"],
    image: TOPIC_MEDIA.hospital.thumbnail,
    heroImage: TOPIC_MEDIA.hospital.thumbnail,
    inlineImage: TOPIC_MEDIA.hospital.thumbnail,
  },
  {
    id: "recovery",
    order: 5,
    numberLabel: "05",
    href: ROUTES.recovery,
    slug: "골반필러-유지-회복기간",
    title: "골반필러 유지 및 회복기간",
    cardTitle: "골반필러 유지 및 회복기간",
    shortTitle: "유지·회복기간",
    cardMetaLabel: "유지·회복기간",
    iconKey: "recovery",
    description: "회복·유지·붓기와 활동 재개 기준",
    cardDescription: "시술 직후부터 붓기·앉기·운동, 유지기간과 리터치·재시술 상담 시점을 순서대로 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.recovery.mobileCardDescription,
    accent: "pink",
    accentColor: TOPIC_MEDIA.recovery.accentColor,
    accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: ["recovery-01", "recovery-02", "recovery-03", "recovery-04", "recovery-05"],
    image: TOPIC_MEDIA.recovery.thumbnail,
    heroImage: TOPIC_MEDIA.recovery.thumbnail,
    inlineImage: TOPIC_MEDIA.recovery.thumbnail,
  },
  {
    id: "faq",
    order: 6,
    numberLabel: "06",
    href: ROUTES.faq,
    slug: "골반필러-자주묻는질문",
    title: "골반필러 FAQ",
    cardTitle: "골반필러 FAQ",
    shortTitle: "FAQ",
    cardMetaLabel: "FAQ",
    iconKey: "faq",
    description: "제거·지방이식·리터치 등 질문 정리",
    cardDescription: "가격·용량, 통증·앉기·운동, 제거·녹이기, 지방이식 차이와 병원선택 관련 질문을 주제별로 정리합니다.",
    mobileCardDescription: TOPIC_MEDIA.faq.mobileCardDescription,
    accent: "neutral",
    accentColor: TOPIC_MEDIA.faq.accentColor,
    accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds: [...HOME_FAQ_IDS],
    image: TOPIC_MEDIA.faq.thumbnail,
    heroImage: TOPIC_MEDIA.faq.thumbnail,
    inlineImage: TOPIC_MEDIA.faq.thumbnail,
  },
];
