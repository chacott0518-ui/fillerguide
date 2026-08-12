import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MEDICAL_LAW_ARTICLE_56 } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const AD_INFO_CHECK_GUIDE: InfoGuide = {
  id: "ad-info-check",
  slug: "골반필러-광고-정보-확인",
  href: ROUTES.adInfoCheck,
  categoryLabel: "이해·정보",
  h1: "골반필러 광고 정보를 볼 때 무엇을 확인해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "인터넷에서 골반필러를 검색하면 다양한 광고와 홍보 정보를 접하게 됩니다. 문구만으로 판단하기보다 실제로 확인 가능한 정보인지, 과장된 표현은 아닌지 살펴보는 것이 도움이 됩니다.",
    "이 글은 특정 광고나 병원을 평가하는 자료가 아니며, 광고 정보를 볼 때 참고할 수 있는 일반적인 확인 기준을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "과장 표현 여부",
      text: "단정적이거나 보장하는 표현이 있는지 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "제품·근거 표시",
      text: "구체적인 제품명과 근거가 함께 표시되는지 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "광고·후기 구분",
      text: "광고성 콘텐츠와 실제 후기를 구분해서 봅니다.",
    },
  ],
  sections: [
    {
      id: "ad-expressions",
      order: 1,
      numberLabel: "01",
      heading: "어떤 표현을 주의 깊게 봐야 하나요?",
      layout: "checklist",
      directAnswer:
        "‘최고’, ‘완벽’, ‘부작용 없음’, ‘100% 효과 보장’처럼 단정적이거나 보장성 표현은 사실 여부와 별개로 신중하게 받아들이는 것이 좋습니다.",
      paragraphs: [
        "의료광고에서는 소비자를 오인하게 할 수 있는 표현이나 근거 없는 단정적 표현이 문제될 수 있다는 점이 관련 법령에서도 다뤄집니다. 광고 문구가 단정적일수록 실제 근거가 무엇인지 확인해 보는 습관이 도움이 됩니다.",
      ],
      bullets: [
        "‘최고’, ‘1위’, ‘가장 안전’ 등 비교 우월 표현",
        "‘완벽’, ‘부작용 없음’, ‘통증 없음’ 등 단정 표현",
        "‘100% 효과 보장’, ‘결과 보장’ 등 보장성 표현",
        "출처나 근거 없이 제시되는 수치",
      ],
    },
    {
      id: "ad-evidence",
      order: 2,
      numberLabel: "02",
      heading: "제품과 근거 정보는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "제품명, 허가정보, 근거 자료가 구체적으로 표시되는지, 아니면 막연한 설명에 그치는지를 비교해서 보는 것이 도움이 됩니다.",
      paragraphs: [
        "구체적인 제품명 없이 ‘특수 필러’, ‘신제품’ 같은 표현만으로 설명하는 경우 어떤 제품인지 확인하기 어렵습니다. 궁금한 정보는 광고만으로 판단하지 말고 실제 상담에서 다시 질문하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.productIngredientCheck,
      relatedLabel: "제품·성분 확인 항목 보기",
    },
    {
      id: "ad-distinguish",
      order: 3,
      numberLabel: "03",
      heading: "광고와 실제 정보를 어떻게 구분하나요?",
      layout: "prose",
      directAnswer:
        "광고·협찬 표시 여부를 확인하고, 홍보 목적의 콘텐츠와 공식 기관의 정보, 의료진의 설명을 구분해서 참고하는 것이 좋습니다.",
      paragraphs: [
        "인터넷에서 접하는 정보는 작성 목적과 신뢰도가 다를 수 있습니다. 궁금한 사항은 광고 문구만으로 결정하지 말고, 상담을 통해 직접 확인하거나 공식 출처를 참고하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.medicalInfoCheck,
      relatedLabel: "의료정보 확인 방법 보기",
    },
  ],
  faqs: [
    {
      id: "ad-faq-01",
      order: 1,
      question: "‘부작용 없는 골반필러’라는 문구를 믿어도 되나요?",
      answer:
        "부작용이 전혀 없다고 단정하는 표현은 신중하게 받아들이는 것이 좋습니다. 모든 시술과 마찬가지로 필러 역시 일반적인 반응이나 이상반응 가능성이 있을 수 있으며, 이는 공식 안전 안내에서도 다뤄지는 내용입니다. 구체적인 위험은 상담에서 직접 확인해야 합니다.",
      categories: ["precautions"],
    },
    {
      id: "ad-faq-02",
      order: 2,
      question: "가격 이벤트 문구는 어떻게 봐야 하나요?",
      answer:
        "이 글에서 특정 가격이나 이벤트의 적절성을 판단하지 않습니다. 다만 가격만 강조되고 제품이나 시술 계획에 대한 설명이 부족하다면, 상담에서 포함 항목과 세부 내용을 다시 확인하는 것이 좋습니다. 자세한 비용 확인 기준은 가격·비용 안내에서 볼 수 있습니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-가격-비용",
      relatedLabel: "가격·비용 확인 기준 보기",
    },
    {
      id: "ad-faq-03",
      order: 3,
      question: "후기와 광고를 구분하기 어려우면 어떻게 하나요?",
      answer:
        "광고·협찬 표시가 있는지 먼저 확인하고, 표시가 없더라도 지나치게 홍보성으로 느껴지는 내용은 참고자료 정도로만 받아들이는 것이 좋습니다. 궁금한 점은 후기보다 실제 상담을 통해 확인하는 것이 정확합니다.",
      categories: ["consultation"],
    },
    {
      id: "ad-faq-04",
      order: 4,
      question: "‘식약처 허가 필러’라는 표현이 있으면 안심해도 되나요?",
      answer:
        "표현 자체보다 실제로 어떤 제품의, 어떤 사용목적에 대한 허가인지 구체적으로 확인하는 것이 중요합니다. 제품별 허가 현황과 사용목적은 상담이나 제품의 공식 표시사항을 통해 직접 확인해야 합니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-제품-성분-확인",
      relatedLabel: "제품·성분 확인 항목 보기",
    },
    {
      id: "ad-faq-05",
      order: 5,
      question: "광고에서 확인한 정보를 상담에서 다시 물어봐도 되나요?",
      answer:
        "네, 오히려 권장되는 방법입니다. 광고에서 접한 내용을 상담에서 다시 확인하면 실제 상황에 맞는 정확한 설명을 들을 수 있습니다. 궁금한 점을 질문으로 미리 정리해 가면 비교하기도 더 수월해집니다.",
      categories: ["consultation"],
    },
  ],
  faqTitle: "골반필러 광고 정보 확인 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "medical-info", href: ROUTES.medicalInfoCheck, label: "의료정보 확인 방법", anchor: "의료정보 확인 방법" },
    { id: "product", href: ROUTES.productIngredientCheck, label: "제품·성분 확인", anchor: "제품·성분 확인 항목" },
    { id: "reviews", href: ROUTES.reviews, label: "후기", anchor: "후기 확인 기준" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 특정 광고나 병원의 적절성을 평가하는 자료가 아닙니다. 구체적인 사실 확인은 상담과 공식 출처를 통해 이뤄져야 합니다.",
  officialSources: [MEDICAL_LAW_ARTICLE_56],
  seo: {
    title: "골반필러 광고 정보 확인, 무엇을 봐야 하나요? | 필러가이드",
    description:
      "골반필러 광고를 볼 때 과장 표현, 제품·근거 표시, 광고와 후기 구분을 어떻게 확인해야 하는지 안내합니다.",
    keywords: ["골반필러 광고", "골반필러 광고 확인", "의료광고 확인", "필러 광고 정보"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 광고 정보 확인",
    description: "광고를 볼 때 과장 표현과 근거 표시, 후기 구분 기준을 안내합니다.",
    href: ROUTES.adInfoCheck,
  },
};
