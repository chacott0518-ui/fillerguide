import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { FDA_DERMAL_FILLERS, MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const MEDICAL_INFO_CHECK_GUIDE: InfoGuide = {
  id: "medical-info-check",
  slug: "골반필러-의료정보-확인-방법",
  href: ROUTES.medicalInfoCheck,
  categoryLabel: "이해·정보",
  h1: "골반필러 관련 의료정보는 어떻게 확인해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "인터넷에서 '골반필러'로 검색되는 정보는 출처와 작성 목적이 다양합니다. 정보를 참고할 때는 공식 기관의 자료인지, 개인 경험담인지, 광고성 콘텐츠인지 구분해서 보는 것이 도움이 됩니다.",
    "이 글은 특정 정보의 진위를 판정하는 자료가 아니며, 의료정보를 확인할 때 참고할 수 있는 일반적인 기준을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "출처 확인",
      text: "공식 기관, 의료진, 개인 게시물 중 어디에서 나온 정보인지 봅니다.",
    },
    {
      numberLabel: "02",
      title: "작성 시점 확인",
      text: "정보가 최신인지, 오래된 내용은 아닌지 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "개인 상황과의 구분",
      text: "일반 정보와 본인 상황에 맞는 설명을 구분합니다.",
    },
  ],
  sections: [
    {
      id: "info-source",
      order: 1,
      numberLabel: "01",
      heading: "정보의 출처는 왜 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "같은 내용이라도 식품의약품안전처 같은 공식 기관의 안내인지, 개인 후기나 광고성 게시물인지에 따라 신뢰할 수 있는 범위가 다르기 때문에 출처 확인이 중요합니다.",
      paragraphs: [
        "공식 기관의 안전 정보는 일반적인 원칙과 주의사항을 다루는 경우가 많고, 개인의 구체적인 상황에 대한 답은 제공하지 않습니다. 반대로 개인 후기나 커뮤니티 글은 실제 경험을 전할 수 있지만 공식적인 근거 자료로 보기는 어렵습니다.",
        "정보를 인용할 때는 원문 출처를 확인하고, 출처가 불분명한 수치나 단정적인 주장은 그대로 받아들이기보다 다른 자료와 비교해 보는 것이 좋습니다.",
      ],
    },
    {
      id: "info-timing",
      order: 2,
      numberLabel: "02",
      heading: "정보가 최신인지는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "게시일이나 최종 수정일을 확인하고, 제품 허가정보처럼 시점에 따라 달라질 수 있는 내용은 가능한 한 최신 자료를 기준으로 참고하는 것이 좋습니다.",
      paragraphs: [
        "의료기기 허가정보나 안전 안내는 시점에 따라 갱신될 수 있습니다. 오래된 게시물의 내용을 현재 시점의 사실로 받아들이기보다, 최신 정보인지 확인하는 습관이 도움이 됩니다.",
      ],
    },
    {
      id: "info-personal",
      order: 3,
      numberLabel: "03",
      heading: "일반 정보와 내 상황에 맞는 설명은 어떻게 구분하나요?",
      layout: "prose",
      directAnswer:
        "일반적인 의료정보는 대체로 공통 원칙을 설명하는 자료이며, 본인의 건강 상태나 시술 계획에 맞는 구체적인 답은 상담을 통해 의료진에게 직접 확인해야 합니다.",
      paragraphs: [
        "이 글을 포함한 일반 정보 콘텐츠는 상담을 대신할 수 없습니다. 궁금한 점이 있다면 일반 정보로 먼저 이해한 뒤, 본인의 상황에 맞는 부분은 상담 질문으로 정리해 확인하는 방식이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "상담 질문 목록 보기",
    },
  ],
  faqs: [
    {
      id: "medinfo-faq-01",
      order: 1,
      question: "커뮤니티 후기만 보고 판단해도 되나요?",
      answer:
        "커뮤니티 후기는 개인의 경험을 전하는 자료로 참고할 수 있지만, 공식적인 근거 자료로 보기는 어렵습니다. 개인마다 상황과 결과가 다를 수 있으므로, 후기와 함께 공식 정보나 상담을 통한 확인을 병행하는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "medinfo-faq-02",
      order: 2,
      question: "공식 기관 자료만 보면 충분한가요?",
      answer:
        "공식 기관 자료는 일반적인 원칙과 주의사항을 이해하는 데 도움이 되지만, 개인의 구체적인 상황에 대한 답을 제공하지는 않습니다. 본인에게 맞는 설명은 상담을 통해 의료진에게 직접 확인해야 합니다.",
      categories: ["consultation"],
    },
    {
      id: "medinfo-faq-03",
      order: 3,
      question: "해외 자료도 국내 정보처럼 참고해도 되나요?",
      answer:
        "해외 규제기관의 자료는 일반적인 안전 정보로 참고할 수 있지만, 국내 특정 제품의 허가 여부를 대신하는 근거로 사용해서는 안 됩니다. 국내 허가와 관련된 사항은 국내 기관의 정보를 기준으로 확인하는 것이 정확합니다.",
      categories: ["consultation"],
    },
    {
      id: "medinfo-faq-04",
      order: 4,
      question: "오래된 게시물의 정보는 어떻게 다뤄야 하나요?",
      answer:
        "게시일이 오래된 정보는 현재와 다를 수 있다는 점을 감안해서 참고해야 합니다. 특히 제품 허가정보나 안전 안내처럼 시점에 따라 달라질 수 있는 내용은 최신 자료를 기준으로 다시 확인하는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "medinfo-faq-05",
      order: 5,
      question: "이 사이트의 정보도 상담을 대신할 수 있나요?",
      answer:
        "아닙니다. 이 사이트의 정보 역시 일반적인 의료정보 제공을 목적으로 하며, 개인의 진단이나 시술 적합성을 판단하는 자료가 아닙니다. 본인의 상황에 맞는 확인은 반드시 의료진과의 상담을 통해 이뤄져야 합니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-상담-전-확인사항",
      relatedLabel: "상담 전 확인사항 보기",
    },
  ],
  faqTitle: "골반필러 의료정보 확인 방법 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "ad-info", href: ROUTES.adInfoCheck, label: "광고 정보 확인", anchor: "광고 정보 확인 기준" },
    { id: "product", href: ROUTES.productIngredientCheck, label: "제품·성분 확인", anchor: "제품·성분 확인 항목" },
    { id: "faq", href: ROUTES.faq, label: "FAQ", anchor: "자주 묻는 질문 모음" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단이나 시술 적합성을 판단하는 자료가 아닙니다. 본인의 상황에 맞는 확인은 의료진과의 상담을 통해 이뤄져야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY, FDA_DERMAL_FILLERS],
  seo: {
    title: "골반필러 의료정보 확인 방법, 무엇을 봐야 하나요? | 필러가이드",
    description:
      "골반필러 관련 의료정보를 확인할 때 출처, 작성 시점, 개인 상황과의 구분을 어떻게 확인해야 하는지 안내합니다.",
    keywords: ["골반필러 정보 확인", "골반필러 의료정보", "의료정보 신뢰도", "필러 정보 확인"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 의료정보 확인 방법",
    description: "출처, 작성 시점, 개인 상황과의 구분 등 의료정보 확인 기준을 안내합니다.",
    href: ROUTES.medicalInfoCheck,
  },
};
