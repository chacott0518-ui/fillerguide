import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const REVIEW_PAGE: ContentPage = {
  id: "reviews",
  order: 5,
  numberLabel: "05",
  slug: "골반필러-후기",
  href: ROUTES.reviews,
  navLabel: "후기",
  categoryLabel: SITE.categoryLabel,
  h1: "골반필러 후기는 어떤 기준으로 확인해야 할까요?",
  heading: "골반필러 후기는 어떤 기준으로 확인해야 할까요?",
  intro: [
    "골반필러 후기는 개인 체형과 목표 범위, 제품, 주입량, 회복 경과가 모두 다를 수 있어 그대로 결과를 기대하기는 어렵습니다.",
    "촬영 시점, 조명과 자세, 사진 보정 여부, 광고 또는 제휴 표시, 사후 대응 경험이 함께 적혀 있는지 확인하는 편이 도움이 됩니다.",
  ],
  publishedAt: "2026-07-28",
  updatedAt: "2026-07-28",
  faqIds: ["review-01", "review-02", "review-03", "review-04"],
  faqTitle: "골반필러 후기 FAQ",
  conclusion: [
    "후기는 참고 자료이므로 시술 직후 사진만으로 판단하기보다 안정화 이후 경과와 사후 대응 경험을 함께 보는 편이 좋습니다.",
    "특정 결과를 보장하는 후기보다는 촬영 시점과 보정 여부, 체형 유사성을 솔직하게 드러내는 정보를 우선해 확인하세요.",
  ],
  thumbnail: TOPIC_MEDIA.reviews.thumbnail,
  topImages: [TOPIC_MEDIA.reviews.thumbnail],
  bodyImage: TOPIC_MEDIA.reviews.secondaryImage,
  heroImage: TOPIC_MEDIA.reviews.thumbnail,
  secondaryImage: TOPIC_MEDIA.reviews.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.reviews.secondaryImage,
  accentColor: TOPIC_MEDIA.reviews.accentColor,
  accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    { numberLabel: "01", title: "촬영 시점", text: "직후 사진인지 안정화 이후인지 먼저 확인합니다." },
    { numberLabel: "02", title: "체형 유사성", text: "본인과 비슷한 체형과 목표 범위인지 확인합니다." },
    { numberLabel: "03", title: "보정 여부", text: "조명, 자세, 필터가 결과를 과장하지 않는지 봅니다." },
    { numberLabel: "04", title: "사후 대응", text: "불편감과 경과 확인 경험이 적혀 있는지 확인합니다." },
  ],
  hubContextLink: {
    before: "후기만으로 판단하지 말고 제품과 가격, 주의사항 및 회복 과정을 정리한 ",
    anchor: "골반필러 안내",
    after: "를 함께 확인하세요.",
    href: "/",
  },
  seo: {
    title: "골반필러 후기는 어떤 기준으로 확인해야 할까요? | 필러가이드",
    description: "골반필러 후기와 전후 사진을 확인할 때 촬영 시점, 체형 유사성, 보정 여부와 회복 과정에서 확인할 기준을 안내합니다.",
    keywords: ["골반필러 후기", "힙딥필러 후기", "엉덩이필러 후기"],
    ogImage: TOPIC_MEDIA.reviews.thumbnail.src,
    socialImage: TOPIC_MEDIA.reviews.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "review-what",
      order: 1,
      numberLabel: "01",
      heading: "후기에서 가장 먼저 볼 항목은 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "후기를 볼 때는 촬영 시점, 제품 정보, 회복 경과, 체형 유사성처럼 실제 비교가 가능한 정보가 있는지 먼저 확인하는 편이 좋습니다.",
      paragraphs: [
        "전후 사진만 강하게 보여 주는 후기보다 언제 촬영했는지, 어떤 범위와 목표였는지 설명하는 후기가 참고하기 쉽습니다.",
      ],
      infoBlocks: [
        { label: "촬영 시점", text: "직후 사진인지 안정화 이후인지" },
        { label: "체형 유사성", text: "본인과 비슷한 체형인지" },
        { label: "보정 여부", text: "조명, 자세, 필터 사용 여부" },
        { label: "사후 대응", text: "불편감과 경과 확인 경험" },
      ],
    },
    {
      id: "review-good-bad",
      order: 2,
      numberLabel: "02",
      heading: "광고성 후기와 참고 가능한 후기는 어떻게 구분하나요?",
      layout: "compare-table",
      directAnswer:
        "촬영 시점과 회복 경과, 개인차를 함께 설명하는 후기는 참고 가치가 높고, 결과만 강조하거나 광고 여부가 불분명한 글은 신중히 구분해야 합니다.",
      paragraphs: [
        "협찬, 제휴, 광고 표기가 있는지와 함께 사후관리, 회복 중 불편, 보정 여부를 함께 언급하는지를 확인하세요.",
      ],
      compareHeaders: ["참고 가능한 후기", "주의해서 볼 후기"],
      compareRows: [
        { criterion: "촬영 시점", left: "언제 찍었는지 명확함", right: "시점이 불분명함" },
        { criterion: "개인차 언급", left: "체형과 경과 차이를 설명함", right: "누구나 비슷하다고 암시함" },
        { criterion: "과정 설명", left: "회복과 사후관리 경험이 적힘", right: "결과만 반복 강조함" },
        { criterion: "광고 표시", left: "광고·제휴 여부가 보임", right: "상업성 여부가 불분명함" },
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "골반필러 병원선택 기준 보기",
    },
    {
      id: "review-photo",
      order: 3,
      numberLabel: "03",
      heading: "전후 사진은 어떻게 읽어야 할까요?",
      layout: "checklist",
      directAnswer:
        "전후 사진은 촬영 각도, 자세, 조명, 보정 여부와 함께 시술 직후인지 안정화 이후인지 구분해서 읽는 것이 좋습니다.",
      paragraphs: [
        "같은 사람이라도 자세와 조명만 달라져 보이는 경우가 있어, 사진만으로 결과를 단정하지 않는 편이 좋습니다.",
        "골반필러 후기와 힙딥필러·엉덩이필러 후기를 비교할 때는 시술 부위와 주입 범위, 촬영 각도, 조명, 보정 여부가 같은지 먼저 확인해야 합니다.",
      ],
      bullets: [
        "촬영 시점이 명시되어 있는지",
        "같은 자세와 각도인지",
        "조명과 필터 차이가 큰지",
        "본인과 체형이 비슷한지",
        "설명 텍스트가 과장되지 않는지",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "골반필러 주의사항 보기",
    },
    {
      id: "review-consult",
      order: 4,
      numberLabel: "04",
      heading: "후기를 본 뒤 상담에서는 무엇을 확인해야 하나요?",
      layout: "steps",
      directAnswer:
        "후기를 본 뒤에는 제품명, 허가사항, 예상 주입량, 사후관리 계획과 이상 반응 대응 체계를 상담에서 직접 확인해야 합니다.",
      paragraphs: [
        "후기로 궁금해진 내용을 질문 목록으로 정리해 상담에서 확인하면 비교가 쉬워집니다.",
      ],
      steps: [
        { label: "01 후기 기준 정리", text: "촬영 시점과 체형 유사성, 회복 내용 메모" },
        { label: "02 제품 질문", text: "제품명과 허가사항, 성분 확인" },
        { label: "03 계획 확인", text: "예상 용량과 범위, 사후관리 일정 질문" },
        { label: "04 대응 체계 확인", text: "이상 반응 발생 시 대응 방법 확인" },
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "골반필러 가격 및 비용 보기",
    },
  ],
};
