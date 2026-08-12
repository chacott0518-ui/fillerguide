import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const INJECTION_SITE_DECISION_GUIDE: InfoGuide = {
  id: "injection-site-decision",
  slug: "골반필러-주입-부위-결정",
  href: ROUTES.injectionSiteDecision,
  categoryLabel: "시술 이해",
  h1: "골반필러 주입 부위는 어떻게 결정하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "주입 부위는 기대하는 변화, 체형과 골격 상태, 제품의 허가된 사용목적을 함께 고려해 상담 과정에서 결정되는 것이 일반적으로 안내됩니다.",
    "이 글은 특정 부위의 적합성을 사이트가 임의로 판단하는 자료가 아니며, 실제 결정은 상담을 통해 의료진과 함께 이뤄져야 합니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "기대하는 변화와 부위",
      text: "어떤 변화를 기대하는지, 어느 부위인지 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "체형·골격 상태 확인",
      text: "상담에서 체형과 골격 상태를 함께 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "제품 허가사항과의 연결",
      text: "부위와 제품의 허가된 사용목적을 함께 확인합니다.",
    },
  ],
  sections: [
    {
      id: "site-basis",
      order: 1,
      numberLabel: "01",
      heading: "주입 부위는 무엇을 기준으로 결정되나요?",
      layout: "prose",
      directAnswer:
        "기대하는 변화, 체형과 골격 상태, 제품의 허가된 사용목적을 종합적으로 고려해 상담에서 결정되는 것이 일반적으로 안내됩니다.",
      paragraphs: [
        "같은 ‘골반필러’라는 표현을 쓰더라도 실제로 고려하는 부위와 범위는 사람마다 다를 수 있습니다. 상담에서는 본인이 어떤 부분을 신경 쓰고 있는지 구체적으로 설명하는 것이 중요합니다.",
        "부위 결정은 사이트가 임의로 제시할 수 없는 정보입니다. 체형과 골격에 대한 확인은 실제 진찰을 통해서만 가능하므로, 이 글은 상담에서 확인할 수 있는 일반적인 기준만 안내합니다.",
      ],
      relatedHref: ROUTES.desiredShapeCommunication,
      relatedLabel: "원하는 모양 전달 방법 보기",
    },
    {
      id: "site-body",
      order: 2,
      numberLabel: "02",
      heading: "체형과 골격 상태는 왜 함께 확인하나요?",
      layout: "prose",
      directAnswer:
        "동일한 부위라도 체형과 골격 상태에 따라 확인해야 할 사항과 가능한 범위가 달라질 수 있기 때문에 상담에서 함께 확인합니다.",
      paragraphs: [
        "체지방 분포나 피부 상태, 좌우 골격의 차이 등은 상담 중 육안 확인이나 촉진을 통해 파악되는 경우가 많습니다. 이런 확인 과정 없이 사진만으로 부위를 단정하기는 어렵습니다.",
      ],
    },
    {
      id: "site-product",
      order: 3,
      numberLabel: "03",
      heading: "제품의 허가사항은 부위 결정과 어떤 관련이 있나요?",
      layout: "prose",
      directAnswer:
        "제품마다 허가된 사용목적과 권장 부위가 다를 수 있으므로, 계획하는 부위가 사용할 제품의 허가사항과 맞는지 상담에서 확인해야 합니다.",
      paragraphs: [
        "허가사항을 벗어난 사용 여부를 이 글에서 판단하지는 않습니다. 제품별 허가정보와 사용목적은 의료진의 설명과 제품의 공식 표시사항을 통해 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.productIngredientCheck,
      relatedLabel: "제품·성분 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "site-faq-01",
      order: 1,
      question: "원하는 부위를 자유롭게 정할 수 있나요?",
      answer:
        "기대하는 부위를 상담에서 전달할 수는 있지만, 실제 결정은 체형과 골격 상태, 제품의 허가된 사용목적을 종합적으로 확인한 뒤 이뤄집니다. 이 글에서 특정 부위의 가능 여부를 임의로 판단하지 않으므로, 상담을 통해 확인해야 합니다.",
      categories: ["consultation"],
    },
    {
      id: "site-faq-02",
      order: 2,
      question: "좌우를 다르게 계획할 수도 있나요?",
      answer:
        "좌우 상태에 차이가 있다면 상담에서 이를 확인하고 계획에 반영할 수 있습니다. 다만 구체적인 계획은 개인의 체형과 상태에 따라 달라질 수 있어, 이 글로 결과를 단정할 수 없습니다. 상담에서 좌우 상태를 함께 확인해 보는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "site-faq-03",
      order: 3,
      question: "부위 결정에 시간이 오래 걸릴 수 있나요?",
      answer:
        "체형 확인과 논의 과정에 따라 상담 시간이 달라질 수 있습니다. 급하게 결정하기보다 충분히 질문하고 이해한 뒤 결정하는 것이 좋으며, 필요하다면 추가 상담을 요청할 수도 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "site-faq-04",
      order: 4,
      question: "골반필러 부위를 사진만 보고 미리 알 수 있나요?",
      answer:
        "사진만으로 정확한 부위와 범위를 판단하기는 어렵습니다. 체지방 분포, 골격, 피부 상태는 실제 확인이 필요한 경우가 많아 상담을 통한 진찰이 함께 이뤄지는 것이 일반적입니다.",
      categories: ["consultation"],
    },
    {
      id: "site-faq-05",
      order: 5,
      question: "부위별로 위험도가 다르게 안내되나요?",
      answer:
        "부위와 계획에 따라 확인해야 할 위험 요소가 달라질 수 있습니다. 구체적인 위험은 개인 상태와 제품에 따라 다르므로, 상담에서 해당 부위와 관련된 위험을 직접 질문해 확인하는 것이 정확합니다.",
      categories: ["consultation", "precautions"],
      relatedSlug: "골반필러-주의사항",
      relatedLabel: "주의사항 확인 보기",
    },
  ],
  faqTitle: "골반필러 주입 부위 결정 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "shape", href: ROUTES.desiredShapeCommunication, label: "원하는 모양 전달", anchor: "원하는 모양 전달 방법" },
    { id: "design", href: ROUTES.designConsultation, label: "디자인 상담", anchor: "디자인 상담 확인 항목" },
    { id: "process", href: ROUTES.procedureProcess, label: "시술 과정", anchor: "시술 과정 흐름 확인" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 주입 부위 적합성을 판단하는 자료가 아닙니다. 실제 결정은 상담과 진찰을 통해 의료진과 함께 이뤄져야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY],
  seo: {
    title: "골반필러 주입 부위 결정, 무엇을 기준으로 하나요? | 필러가이드",
    description:
      "골반필러 주입 부위가 체형, 골격, 제품 허가사항을 어떻게 함께 고려해 상담에서 결정되는지 안내합니다.",
    keywords: ["골반필러 부위", "골반필러 주입 부위", "골반필러 상담", "필러 부위 결정"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 주입 부위 결정",
    description: "주입 부위가 체형과 제품 허가사항을 고려해 어떻게 결정되는지 안내합니다.",
    href: ROUTES.injectionSiteDecision,
  },
};
