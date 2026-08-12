import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { FDA_DERMAL_FILLERS, MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const PRODUCT_INGREDIENT_CHECK_GUIDE: InfoGuide = {
  id: "product-ingredient-check",
  slug: "골반필러-제품-성분-확인",
  href: ROUTES.productIngredientCheck,
  categoryLabel: "시술 이해",
  h1: "골반필러 제품과 성분을 확인할 때 무엇을 봐야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "필러는 제품마다 성분과 허가된 사용목적, 주의사항이 다를 수 있어 ‘필러’라는 범주로만 이해하기보다 실제 사용할 제품을 특정해 확인하는 것이 중요합니다.",
    "이 글은 특정 제품을 추천하거나 비교 우위를 안내하는 자료가 아니며, 제품 확인 시 참고할 수 있는 일반적인 항목을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "제품명·제조사",
      text: "정확한 제품명과 제조사를 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "성분·허가정보",
      text: "주요 성분과 의료기기 허가정보를 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "허가된 사용목적",
      text: "허가된 사용목적과 주의사항을 함께 확인합니다.",
    },
  ],
  sections: [
    {
      id: "product-name",
      order: 1,
      numberLabel: "01",
      heading: "제품명과 제조사는 왜 먼저 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "제품마다 성분과 허가사항이 다를 수 있어, 정확한 제품명과 제조사를 알아야 이후 정보를 구체적으로 확인할 수 있습니다.",
      paragraphs: [
        "‘필러’라는 표현만으로는 어떤 제품을 사용하는지 알기 어렵습니다. 상담에서 정확한 제품명을 확인하면 이후 성분이나 허가정보를 구체적으로 찾아보거나 질문하는 데 도움이 됩니다.",
      ],
    },
    {
      id: "product-ingredient",
      order: 2,
      numberLabel: "02",
      heading: "성분과 허가정보는 어떻게 확인하나요?",
      layout: "info-grid",
      directAnswer:
        "주요 성분, 의료기기 허가·신고 관련 정보는 제품의 공식 표시사항이나 의료진의 설명을 통해 확인할 수 있습니다.",
      paragraphs: [
        "국내에서 유통되는 의료기기는 관련 법령에 따라 허가나 신고 절차를 거치는 것이 일반적입니다. 다만 개별 제품의 정확한 허가 현황은 시점에 따라 달라질 수 있으므로, 이 글에서 특정 제품의 허가 여부를 단정하지 않습니다.",
      ],
      infoBlocks: [
        { label: "제품명", text: "정확한 제품 이름" },
        { label: "제조사", text: "제조사 및 유통 정보" },
        { label: "주요 성분", text: "성분명과 구성" },
        { label: "허가·신고 정보", text: "의료기기 허가·신고 관련 사항" },
      ],
    },
    {
      id: "product-purpose",
      order: 3,
      numberLabel: "03",
      heading: "허가된 사용목적은 왜 함께 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "제품별로 허가된 사용목적과 권장 부위가 다를 수 있으므로, 계획하는 부위와 목적이 해당 제품의 허가사항과 맞는지 확인하는 것이 중요합니다.",
      paragraphs: [
        "해외 규제기관의 자료는 국내 특정 제품의 허가를 대신하는 근거가 아닙니다. 예를 들어 미국 식품의약국의 일반 안내를 국내 허가와 동일하게 해석해서는 안 되며, 국내에서 확인이 필요할 때는 해당 제품의 국내 허가정보를 기준으로 봐야 합니다.",
      ],
      relatedHref: ROUTES.consultationChecklist,
      relatedLabel: "상담 전 확인사항 전체 보기",
    },
  ],
  faqs: [
    {
      id: "product-faq-01",
      order: 1,
      question: "제품명을 알려주지 않으면 어떻게 해야 하나요?",
      answer:
        "사용할 제품의 정확한 이름을 알려달라고 요청하는 것이 좋습니다. 제품명은 성분과 허가사항을 확인하는 기본 정보이기 때문에, 명확히 안내받지 못한 채로 진행 여부를 결정하지 않는 것이 안전합니다.",
      categories: ["consultation"],
    },
    {
      id: "product-faq-02",
      order: 2,
      question: "모든 필러 제품이 골반 부위에 허가되어 있나요?",
      answer:
        "제품마다 허가된 사용목적과 권장 부위가 다를 수 있어 이 글에서 일률적으로 답할 수 없습니다. 계획하는 부위가 사용할 제품의 허가사항과 맞는지는 제품의 공식 표시사항과 의료진의 설명을 통해 확인해야 합니다.",
      categories: ["consultation", "precautions"],
    },
    {
      id: "product-faq-03",
      order: 3,
      question: "해외 인증을 받은 제품이면 국내에서도 허가된 건가요?",
      answer:
        "그렇게 단정할 수 없습니다. 해외 규제기관의 인증이나 안내는 국내 허가와 별개의 절차입니다. 국내에서 사용되는 제품의 허가 여부는 국내 관련 기관의 허가정보를 기준으로 확인해야 합니다.",
      categories: ["consultation"],
    },
    {
      id: "product-faq-04",
      order: 4,
      question: "제품별로 유지기간이 다르게 안내되나요?",
      answer:
        "제품과 개인 상태에 따라 차이가 있을 수 있는 사항입니다. 이 글에서 특정 유지기간을 단정해 제시하지 않으며, 정확한 정보는 제품의 공식 표시사항과 의료진의 설명을 통해 확인해야 합니다. 유지·회복기간에 대한 일반적인 확인 기준은 관련 안내에서 볼 수 있습니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-유지-회복기간",
      relatedLabel: "유지·회복기간 확인 보기",
    },
    {
      id: "product-faq-05",
      order: 5,
      question: "성분이 궁금하면 어디서 확인할 수 있나요?",
      answer:
        "제품의 공식 표시사항이나 첨부문서, 상담 시 의료진의 설명을 통해 확인할 수 있습니다. 인터넷 검색 결과만으로 성분 정보를 단정하기보다, 실제 사용할 제품을 기준으로 확인하는 것이 정확합니다.",
      categories: ["consultation"],
    },
  ],
  faqTitle: "골반필러 제품·성분 확인 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "questions", href: ROUTES.consultationQuestions, label: "상담 질문", anchor: "상담에서 확인할 질문" },
    { id: "medical-info", href: ROUTES.medicalInfoCheck, label: "의료정보 확인 방법", anchor: "의료정보 확인 방법" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 특정 제품을 추천하거나 허가 여부를 단정하는 자료가 아닙니다. 제품별 정확한 정보는 공식 표시사항과 의료진의 설명을 통해 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY, FDA_DERMAL_FILLERS],
  seo: {
    title: "골반필러 제품·성분 확인, 무엇을 봐야 하나요? | 필러가이드",
    description:
      "골반필러 제품명, 성분, 허가정보, 허가된 사용목적을 상담에서 어떻게 확인해야 하는지 안내합니다.",
    keywords: ["골반필러 제품", "골반필러 성분", "골반필러 허가정보", "필러 제품 확인"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 제품·성분 확인",
    description: "제품명, 성분, 허가정보와 허가된 사용목적을 확인하는 방법을 안내합니다.",
    href: ROUTES.productIngredientCheck,
  },
};
