import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const CAUTION_PAGE: ContentPage = {
  id: "precautions",
  order: 3,
  numberLabel: "03",
  slug: "골반필러-주의사항",
  href: ROUTES.precautions,
  navLabel: "주의사항",
  categoryLabel: SITE.categoryLabel,
  h1: "골반필러 시술 전후 무엇을 주의해야 할까요?",
  heading: "골반필러 시술 전후 무엇을 주의해야 할까요?",
  intro: [
    "골반필러는 시술 전 제품과 허가사항, 복용 약, 건강 상태, 피부 상태를 충분히 설명한 뒤 진행 여부를 판단하는 편이 좋습니다.",
    "시술 후에는 붓기, 멍, 통증, 눌림감처럼 일반적으로 나타날 수 있는 반응과 빠르게 확인이 필요한 이상 징후를 구분해 안내받아야 합니다.",
  ],
  publishedAt: "2026-07-28",
  updatedAt: "2026-07-28",
  faqIds: ["caution-01", "caution-02", "caution-03", "caution-04"],
  faqTitle: "골반필러 주의사항 FAQ",
  conclusion: [
    "골반필러 주의사항은 시술 전 확인사항, 시술 후 활동, 일반적인 반응과 이상 징후를 나눠서 보는 편이 이해하기 쉽습니다.",
    "정해진 기간을 단정하기보다 제품과 범위, 개인 상태에 맞는 의료진 안내를 우선해 따르세요.",
  ],
  thumbnail: TOPIC_MEDIA.precautions.thumbnail,
  topImages: [TOPIC_MEDIA.precautions.thumbnail],
  bodyImage: TOPIC_MEDIA.precautions.secondaryImage,
  heroImage: TOPIC_MEDIA.precautions.thumbnail,
  secondaryImage: TOPIC_MEDIA.precautions.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.precautions.secondaryImage,
  accentColor: TOPIC_MEDIA.precautions.accentColor,
  accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "시술 전 고지", text: "복용 약, 알레르기, 건강 상태와 목표 범위를 설명합니다." },
    { numberLabel: "02", title: "허가사항 확인", text: "제품명과 허가된 사용목적을 먼저 확인합니다." },
    { numberLabel: "03", title: "활동 주의", text: "압박, 운동, 열 자극 관련 안내를 확인합니다." },
    { numberLabel: "04", title: "반응 구분", text: "일반 반응과 이상 징후를 나눠 안내받습니다." },
  ],
  seo: {
    title: "골반필러 시술 전후 무엇을 주의해야 할까요? | 필러가이드",
    description: "골반필러 시술 전후 확인사항, 예상 가능한 반응, 주의가 필요한 이상 징후와 제품 허가사항 확인 기준을 안내합니다.",
    keywords: ["골반필러 주의사항", "골반필러 부작용", "바디필러 주의사항"],
    ogImage: TOPIC_MEDIA.precautions.thumbnail.src,
    socialImage: TOPIC_MEDIA.precautions.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "caution-before",
      order: 1,
      numberLabel: "01",
      heading: "시술 전에는 무엇을 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "시술 전에는 제품명과 허가사항, 복용 약과 건강 상태, 알레르기, 피부 상태와 목표 범위를 먼저 설명하고 확인하는 편이 좋습니다.",
      paragraphs: [
        "가슴필러나 어깨필러처럼 다른 바디 부위 시술과 골반필러는 목적과 범위가 다를 수 있으므로 같은 기준으로 보지 않는 편이 좋습니다.",
      ],
      bullets: [
        "제품명과 허가된 사용목적",
        "복용 약과 건강 상태",
        "알레르기와 피부 상태",
        "목표 범위와 예상 주입 계획",
      ],
    },
    {
      id: "caution-after",
      order: 2,
      numberLabel: "02",
      heading: "시술 후에는 어떤 활동을 조절해야 하나요?",
      layout: "comparison",
      directAnswer:
        "시술 후에는 압박, 무리한 운동, 열 자극처럼 회복에 영향을 줄 수 있는 활동을 의료진 안내 범위 안에서 조절하는 편이 좋습니다.",
      paragraphs: [
        "목욕, 사우나, 운동 재개 시점은 개인 상태와 시술 범위에 따라 다를 수 있으므로 고정 기간으로 단정하지 않는 편이 좋습니다.",
      ],
      comparison: {
        left: { label: "초기 회복", text: "압박을 줄이고 붓기와 통증, 눌림감을 관찰합니다." },
        right: { label: "활동 재개", text: "운동과 열 자극, 장시간 압박은 의료진 안내 후 단계적으로 재개합니다." },
      },
    },
    {
      id: "caution-normal",
      order: 3,
      numberLabel: "03",
      heading: "일반적으로 나타날 수 있는 반응은 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "멍, 붓기, 압통, 단단한 촉감이나 눌림감은 시술 후 일정 기간 느껴질 수 있으나 정도와 지속 기간은 개인차가 있습니다.",
      paragraphs: ["정상 범위를 스스로 단정하기보다 안내받은 경과 설명과 비교하는 편이 좋습니다."],
      infoBlocks: [
        { label: "붓기", text: "초기 부기 변화는 개인차가 있습니다." },
        { label: "멍", text: "색과 범위가 서서히 달라질 수 있습니다." },
        { label: "압통", text: "눌렀을 때 민감함이 느껴질 수 있습니다." },
        { label: "촉감", text: "단단함이나 이물감이 일시적으로 느껴질 수 있습니다." },
      ],
    },
    {
      id: "caution-alert",
      order: 4,
      numberLabel: "04",
      heading: "빠르게 확인이 필요한 이상 징후는 무엇인가요?",
      layout: "callout",
      directAnswer:
        "심한 통증, 열감, 피부 색 변화, 급격한 부기 악화처럼 평소와 다른 증상이 나타나면 시술 의료기관 또는 의료진의 진료를 받아야 합니다.",
      paragraphs: [
        "초음파는 주변 구조와 주입층 확인을 위한 보조수단으로 활용될 수 있지만 안전을 보장하는 표현으로 이해하면 안 됩니다.",
      ],
      callout: "이상 징후가 의심되면 온라인 후기보다 시술 의료기관의 안내와 진료를 우선하세요.",
      relatedHref: ROUTES.hospital,
      relatedLabel: "골반필러 병원선택 기준 보기",
    },
  ],
};
