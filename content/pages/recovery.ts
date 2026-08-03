import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const RECOVERY_PAGE: ContentPage = {
  id: "recovery",
  order: 2,
  numberLabel: "02",
  slug: "골반필러-유지-회복기간",
  href: ROUTES.recovery,
  navLabel: "유지·회복기간",
  categoryLabel: SITE.categoryLabel,
  h1: "골반필러 유지기간과 회복기간은 얼마나 걸릴까요?",
  heading: "골반필러 유지기간과 회복기간은 얼마나 걸릴까요?",
  intro: [
    "골반필러의 유지기간과 회복기간은 제품, 주입량, 시술 범위, 개인 대사와 생활 습관에 따라 달라질 수 있습니다.",
    "모든 사람에게 동일한 기간을 제시하기보다 시술 직후, 초기 회복, 경과 관찰, 형태 평가 시점을 나눠 이해하는 편이 좋습니다.",
  ],
  publishedAt: "2026-07-28",
  updatedAt: "2026-07-28",
  faqIds: ["recovery-01", "recovery-02", "recovery-03", "recovery-04"],
  faqTitle: "골반필러 유지·회복 FAQ",
  conclusion: [
    "골반필러 회복은 시술 직후 반응, 초기 생활 조절, 경과 관찰, 최종 형태 평가 시점으로 나눠 보는 편이 이해하기 쉽습니다.",
    "유지기간과 회복기간을 고정값으로 받아들이기보다 제품과 개인 상태에 맞는 설명을 우선해 확인하세요.",
  ],
  thumbnail: TOPIC_MEDIA.recovery.thumbnail,
  topImages: [TOPIC_MEDIA.recovery.thumbnail],
  bodyImage: TOPIC_MEDIA.recovery.secondaryImage,
  heroImage: TOPIC_MEDIA.recovery.thumbnail,
  secondaryImage: TOPIC_MEDIA.recovery.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.recovery.secondaryImage,
  accentColor: TOPIC_MEDIA.recovery.accentColor,
  accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "시술 직후", text: "붓기와 압통, 눌림감을 먼저 관찰합니다." },
    { numberLabel: "02", title: "초기 회복", text: "운동과 압박은 안내 범위 안에서 조절합니다." },
    { numberLabel: "03", title: "경과 관찰", text: "제품과 개인 상태에 따라 변화 속도가 다를 수 있습니다." },
    { numberLabel: "04", title: "유지기간", text: "제품, 주입량, 생활 습관에 따라 달라질 수 있습니다." },
  ],
  hubContextLink: {
    before: "제품과 용량, 가격, 시술 전후 주의사항은 ",
    anchor: "골반필러 전체 안내",
    after: "에서 함께 확인할 수 있습니다.",
    href: "/",
  },
  seo: {
    title: "골반필러 유지기간과 회복기간은 얼마나 걸릴까요? | 필러가이드",
    description: "골반필러 유지기간과 회복기간에 영향을 주는 제품, 주입량, 개인 상태와 시술 후 활동 관련 확인사항을 안내합니다.",
    keywords: ["골반필러 유지기간", "골반필러 회복기간", "힙딥필러 유지기간"],
    ogImage: TOPIC_MEDIA.recovery.thumbnail.src,
    socialImage: TOPIC_MEDIA.recovery.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "recovery-timeline",
      order: 1,
      numberLabel: "01",
      heading: "회복 흐름은 어떻게 나눠서 보면 좋을까요?",
      layout: "timeline",
      directAnswer:
        "회복 흐름은 시술 직후, 초기 회복, 경과 관찰, 형태 평가 시점으로 나눠 이해하면 도움이 됩니다.",
      paragraphs: ["시술 직후 촉감과 부기, 압통이 남아 있을 수 있어 최종 평가 시점과 구분해서 보는 편이 좋습니다."],
      timeline: [
        { label: "시술 직후", text: "붓기와 압통, 눌림감을 관찰합니다." },
        { label: "초기 회복", text: "일상 활동은 가능할 수 있으나 압박과 운동은 조절합니다." },
        { label: "경과 관찰", text: "촉감과 모양의 변화가 서서히 안정될 수 있습니다." },
        { label: "형태 평가", text: "초기 부기가 가라앉은 뒤 형태를 다시 확인합니다." },
      ],
    },
    {
      id: "recovery-factors",
      order: 2,
      numberLabel: "02",
      heading: "유지기간에 영향을 주는 요소는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "유지기간에는 제품, 주입량, 주입 범위, 개인 대사와 생활 습관 등이 영향을 줄 수 있습니다.",
      paragraphs: ["힙딥필러 유지기간처럼 검색되는 표현도 결국 제품과 범위에 따라 설명이 달라질 수 있습니다."],
      infoBlocks: [
        { label: "제품", text: "성분과 특성 차이" },
        { label: "주입량", text: "총 용량과 분배 방식" },
        { label: "범위", text: "골반 측면과 힙딥 범위 차이" },
        { label: "개인 상태", text: "대사와 생활 습관 차이" },
      ],
    },
    {
      id: "recovery-activity",
      order: 3,
      numberLabel: "03",
      heading: "운동과 압박은 어떻게 봐야 할까요?",
      layout: "comparison",
      directAnswer:
        "운동과 압박은 회복에 영향을 줄 수 있으므로 의료진 안내 범위 안에서 단계적으로 재개하는 편이 좋습니다.",
      paragraphs: ["목욕, 사우나, 장시간 압박, 고강도 운동 재개 시점은 모든 사람에게 같지 않을 수 있습니다."],
      comparison: {
        left: { label: "회복 초반", text: "열 자극과 장시간 압박, 무리한 운동을 줄입니다." },
        right: { label: "활동 재개", text: "경과를 보면서 운동과 일상 활동을 단계적으로 늘립니다." },
      },
    },
    {
      id: "recovery-evaluate",
      order: 4,
      numberLabel: "04",
      heading: "최종 형태 평가는 언제쯤 생각하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "최종 형태 평가는 시술 직후보다 초기 부기와 압통이 가라앉은 뒤 경과를 보며 판단하는 편이 좋습니다.",
      paragraphs: [
        "회복 속도와 촉감 변화는 제품과 개인 상태에 따라 다를 수 있으므로, 불편감이 지속되면 시술 의료기관의 진료를 받아야 합니다.",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "골반필러 FAQ 보기",
    },
  ],
};
