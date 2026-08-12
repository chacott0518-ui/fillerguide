import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const CONSULTATION_QUESTIONS_GUIDE: InfoGuide = {
  id: "consultation-questions",
  slug: "골반필러-상담-질문",
  href: ROUTES.consultationQuestions,
  categoryLabel: "상담·준비",
  h1: "골반필러 상담에서는 어떤 내용을 질문해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "상담에서 질문을 미리 정리해 가면 제품, 부위, 위험, 사후 확인까지 필요한 정보를 빠짐없이 확인하기 쉬워집니다. 같은 답변이라도 구체적으로 질문할수록 더 명확한 설명을 들을 수 있습니다.",
    "이 글은 질문 예시를 정리한 자료이며, 개인 상태와 상담 내용에 따라 추가로 필요한 질문이 있을 수 있습니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "제품·허가 관련 질문",
      text: "제품명, 성분, 허가된 사용목적을 질문으로 준비합니다.",
    },
    {
      numberLabel: "02",
      title: "부위·계획 관련 질문",
      text: "적용 부위와 계획을 구체적으로 확인하는 질문을 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "위험·사후관리 질문",
      text: "이상반응 가능성과 사후 확인 방법을 질문으로 준비합니다.",
    },
  ],
  sections: [
    {
      id: "cq-product",
      order: 1,
      numberLabel: "01",
      heading: "제품에 대해서는 어떤 질문이 필요한가요?",
      layout: "checklist",
      directAnswer:
        "제품명, 제조사, 성분, 허가된 사용목적, 이 부위에 사용하는 이유를 구체적으로 질문하는 것이 도움이 됩니다.",
      paragraphs: [
        "필러는 제품마다 성분과 허가사항이 다를 수 있어, ‘필러’라는 범주로만 이해하면 정확한 정보를 확인하기 어렵습니다. 상담에서는 실제 사용할 제품을 특정해 질문하는 것이 중요합니다.",
      ],
      bullets: [
        "사용할 제품의 정확한 이름은 무엇인가요?",
        "이 제품의 허가된 사용목적은 무엇인가요?",
        "이 부위에 사용하는 이유는 무엇인가요?",
        "제품별 특성 차이를 설명해 주실 수 있나요?",
      ],
      relatedHref: ROUTES.productIngredientCheck,
      relatedLabel: "제품·성분 확인 항목 보기",
    },
    {
      id: "cq-plan",
      order: 2,
      numberLabel: "02",
      heading: "시술 계획에 대해서는 어떤 질문이 필요한가요?",
      layout: "checklist",
      directAnswer:
        "주입 부위와 범위, 예상 과정, 소요 시간, 마취 여부 등 시술 계획과 관련된 사항을 구체적으로 질문할 수 있습니다.",
      paragraphs: [
        "계획을 구체적으로 질문하면 상담 후 진행 여부를 판단하는 데 필요한 정보를 더 명확하게 얻을 수 있습니다. 답변이 모호하다면 다시 한번 구체적으로 확인해 보는 것이 좋습니다.",
      ],
      bullets: [
        "이번에 계획하는 부위와 범위는 어디까지인가요?",
        "시술 과정은 어떻게 진행되나요?",
        "예상 소요 시간은 어느 정도인가요?",
        "필요한 경우 다음 상담 일정은 언제인가요?",
      ],
      relatedHref: ROUTES.procedureProcess,
      relatedLabel: "시술 과정 확인 항목 보기",
    },
    {
      id: "cq-safety",
      order: 3,
      numberLabel: "03",
      heading: "위험과 사후관리는 어떻게 질문하면 좋을까요?",
      layout: "checklist",
      directAnswer:
        "예상 가능한 이상반응, 심각한 이상반응 발생 시 대응 방법, 사후 확인 일정을 구체적으로 질문하는 것이 좋습니다.",
      paragraphs: [
        "위험에 대한 설명은 과장되거나 축소되지 않고 구체적으로 제공되는지 확인하는 것이 중요합니다. 사후 확인 계획이 명확한지도 함께 질문해 보세요.",
      ],
      bullets: [
        "예상할 수 있는 이상반응은 무엇인가요?",
        "심한 이상반응이 생기면 어떻게 연락하나요?",
        "다음 확인은 언제, 어떤 방식으로 하나요?",
        "이상 증상이 있을 때 확인할 창구는 어디인가요?",
      ],
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "시술 후 이상증상 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "cq-faq-01",
      order: 1,
      question: "상담에서 질문을 너무 많이 하면 실례가 될까요?",
      answer:
        "아닙니다. 제품, 부위, 위험, 사후관리에 대한 질문은 상담 과정에서 자연스러운 절차입니다. 오히려 구체적으로 질문할수록 필요한 정보를 명확히 확인할 수 있습니다. 답변이 이해되지 않으면 다시 설명을 요청하는 것도 좋은 방법입니다.",
      categories: ["consultation"],
    },
    {
      id: "cq-faq-02",
      order: 2,
      question: "골반필러 상담 질문은 미리 적어가야 하나요?",
      answer:
        "미리 정리해 가는 것을 권장합니다. 상담 현장에서는 놓치는 질문이 생기기 쉽기 때문에, 궁금한 점을 목록으로 준비해 가면 빠짐없이 확인할 수 있습니다. 제품, 부위, 위험, 사후관리 순으로 정리하면 편리합니다.",
      categories: ["consultation"],
    },
    {
      id: "cq-faq-03",
      order: 3,
      question: "답변이 모호하면 어떻게 해야 하나요?",
      answer:
        "다시 한번 구체적으로 질문해 명확한 답변을 요청하는 것이 좋습니다. 제품명이나 위험에 대한 설명이 애매하게 느껴진다면, 문서나 자료로 확인할 수 있는지 물어볼 수도 있습니다. 이해되지 않은 채로 진행 여부를 결정하지 않는 것이 안전합니다.",
      categories: ["consultation"],
    },
    {
      id: "cq-faq-04",
      order: 4,
      question: "여러 병원에서 상담을 받아도 되나요?",
      answer:
        "여러 곳에서 상담을 받고 비교하는 것 자체는 개인의 선택입니다. 다만 이 글에서 특정 병원을 추천하거나 비교 우위를 판단하지는 않습니다. 각 상담에서 같은 질문 목록을 사용하면 설명을 비교하기 더 쉬워질 수 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "cq-faq-05",
      order: 5,
      question: "골반필러 상담 후 바로 결정하지 않아도 되나요?",
      answer:
        "네, 상담 후 시간을 두고 결정할 수 있습니다. 질문에 대한 답변과 설명을 충분히 이해한 뒤 결정하는 것이 좋으며, 특정 시점까지 결정을 강요받는다고 느낀다면 그 부분도 짚어볼 필요가 있습니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-상담-전-확인사항",
      relatedLabel: "상담 전 확인사항 보기",
    },
  ],
  faqTitle: "골반필러 상담 질문 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "product", href: ROUTES.productIngredientCheck, label: "제품·성분 확인", anchor: "제품과 성분 확인 항목" },
    { id: "shape", href: ROUTES.desiredShapeCommunication, label: "원하는 모양 전달", anchor: "원하는 모양 전달 방법" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 상담에서 활용할 수 있는 질문 예시를 정리한 자료입니다. 실제 답변과 판단은 상담을 진행하는 의료진을 통해 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY],
  seo: {
    title: "골반필러 상담 질문, 무엇을 물어봐야 하나요? | 필러가이드",
    description:
      "골반필러 상담에서 제품, 시술 계획, 위험과 사후관리에 대해 어떤 질문을 준비하면 좋은지 예시로 안내합니다.",
    keywords: ["골반필러 상담 질문", "골반필러 상담 준비", "필러 상담 질문 목록"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 상담 질문",
    description: "상담에서 준비하면 도움이 되는 제품·계획·위험·사후관리 질문 예시를 안내합니다.",
    href: ROUTES.consultationQuestions,
  },
};
