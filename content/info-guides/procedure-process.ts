import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const PROCEDURE_PROCESS_GUIDE: InfoGuide = {
  id: "procedure-process",
  slug: "골반필러-시술-과정",
  href: ROUTES.procedureProcess,
  categoryLabel: "시술 이해",
  h1: "골반필러 시술 과정은 어떻게 확인해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "시술 과정은 상담, 디자인 표시, 소독과 준비, 주입, 마무리 확인의 흐름으로 진행되는 경우가 일반적으로 안내됩니다. 다만 세부 절차와 소요 시간은 의료기관과 개인 계획에 따라 달라질 수 있습니다.",
    "이 글은 시술을 상세히 재현하거나 특정 결과를 안내하는 자료가 아니라, 사전에 어떤 흐름을 확인하면 좋은지 정리한 일반 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "전체 진행 흐름",
      text: "상담부터 마무리까지 어떤 단계로 진행되는지 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "마취·통증 관리 방식",
      text: "마취 여부와 통증 관리 방법을 미리 질문합니다.",
    },
    {
      numberLabel: "03",
      title: "소요 시간과 당일 안내",
      text: "예상 소요 시간과 당일 주의사항을 확인합니다.",
    },
  ],
  sections: [
    {
      id: "process-flow",
      order: 1,
      numberLabel: "01",
      heading: "일반적으로 시술 과정은 어떤 단계로 진행되나요?",
      layout: "steps",
      directAnswer:
        "상담과 디자인 확인, 소독과 준비, 주입, 마무리 확인 순서로 진행된다고 안내되는 경우가 일반적이지만, 세부 절차는 의료기관마다 다를 수 있습니다.",
      paragraphs: [
        "당일 상담에서는 이전 상담 내용을 다시 확인하고, 계획한 부위와 범위를 최종적으로 점검하는 과정이 포함될 수 있습니다. 이후 소독과 준비 과정을 거쳐 주입이 진행되고, 마무리 단계에서 부위를 확인하는 절차로 안내되는 경우가 있습니다.",
      ],
      steps: [
        { label: "상담·재확인", text: "이전 상담 내용과 계획을 다시 확인합니다." },
        { label: "디자인 표시", text: "주입 부위와 범위를 표시하고 점검합니다." },
        { label: "소독·준비", text: "시술 부위를 소독하고 준비합니다." },
        { label: "주입·마무리", text: "계획에 따라 주입을 진행하고 상태를 확인합니다." },
      ],
      relatedHref: ROUTES.injectionSiteDecision,
      relatedLabel: "주입 부위 결정 항목 보기",
    },
    {
      id: "process-anesthesia",
      order: 2,
      numberLabel: "02",
      heading: "마취와 통증 관리는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "마취 여부와 방식, 통증 관리 계획은 시술 전 상담에서 미리 질문해 확인하는 것이 좋습니다.",
      paragraphs: [
        "마취를 사용하는지, 어떤 방식으로 통증을 관리하는지는 의료기관과 계획에 따라 다를 수 있습니다. ‘통증이 전혀 없다’와 같은 단정적인 설명보다는, 예상되는 느낌과 관리 방법을 구체적으로 설명받는 것이 좋습니다.",
        "통증에 대한 개인차가 있을 수 있으므로, 시술 중 불편감이 있을 때 알릴 수 있는 방법도 미리 확인해 두면 도움이 됩니다.",
      ],
    },
    {
      id: "process-duration",
      order: 3,
      numberLabel: "03",
      heading: "소요 시간과 당일 준비는 무엇을 확인하나요?",
      layout: "checklist",
      directAnswer:
        "예상 소요 시간, 당일 복장이나 준비물, 시술 직후 안내사항을 상담에서 미리 확인해 두면 도움이 됩니다.",
      paragraphs: [
        "당일 일정에 여유를 두고, 시술 후 바로 확인해야 할 사항이 있는지도 함께 질문해 보는 것이 좋습니다.",
      ],
      bullets: [
        "예상 소요 시간은 어느 정도인가요?",
        "당일 준비하거나 피해야 할 것이 있나요?",
        "시술 직후 바로 확인할 사항이 있나요?",
        "귀가 후 첫날 특별히 주의할 점이 있나요?",
      ],
      relatedHref: ROUTES.dailyLifeAfter,
      relatedLabel: "시술 후 일상생활 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "process-faq-01",
      order: 1,
      question: "골반필러 시술은 하루 만에 끝나나요?",
      answer:
        "일반적으로 시술 자체는 하루 안에 진행되는 경우가 많다고 안내되지만, 계획한 범위와 의료기관에 따라 소요 시간은 다를 수 있습니다. 정확한 소요 시간은 상담에서 계획을 확인할 때 함께 질문하는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "process-faq-02",
      order: 2,
      question: "시술 중 통증이 전혀 없다고 봐도 되나요?",
      answer:
        "통증을 전혀 느끼지 않는다고 단정할 수는 없습니다. 마취나 통증 관리 방법에 따라 느끼는 정도가 달라질 수 있으며 개인차도 있습니다. 통증 관리 방식은 상담에서 구체적으로 질문해 확인하는 것이 정확합니다.",
      categories: ["consultation", "precautions"],
    },
    {
      id: "process-faq-03",
      order: 3,
      question: "시술 당일 디자인을 바꿀 수 있나요?",
      answer:
        "가능 여부는 의료기관과 상황에 따라 다를 수 있어 이 글에서 일률적으로 답하기 어렵습니다. 사전 상담에서 정한 계획과 당일 변경 가능 범위를 미리 질문해 두면 혼선을 줄일 수 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "process-faq-04",
      order: 4,
      question: "시술 과정에서 위험 상황이 생기면 어떻게 대응하나요?",
      answer:
        "이상반응이나 위험 상황에 대한 대응 절차는 의료기관의 안내를 따라야 합니다. 상담에서 미리 대응 절차를 질문해 확인해 두는 것이 도움이 되며, 자세한 이상증상 대응은 시술 후 이상증상 안내에서 확인할 수 있습니다.",
      categories: ["consultation", "precautions"],
      relatedSlug: "골반필러-시술-후-이상증상",
      relatedLabel: "시술 후 이상증상 확인 보기",
    },
    {
      id: "process-faq-05",
      order: 5,
      question: "골반필러도 주입 부위를 여러 번 나눠 시술하나요?",
      answer:
        "부위를 나눠 진행할지 여부는 계획과 개인 상태에 따라 달라질 수 있는 사항입니다. 이 글에서 일률적인 방식을 제시하지는 않으며, 계획 수립은 상담을 통해 의료진과 함께 결정해야 합니다.",
      categories: ["consultation"],
    },
  ],
  faqTitle: "골반필러 시술 과정 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "injection-site", href: ROUTES.injectionSiteDecision, label: "주입 부위 결정", anchor: "주입 부위 결정 기준" },
    { id: "daily-life", href: ROUTES.dailyLifeAfter, label: "시술 후 일상생활", anchor: "시술 후 일상생활 확인" },
    { id: "precautions", href: ROUTES.precautions, label: "주의사항", anchor: "시술 전후 주의사항" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 실제 시술 과정을 상세히 재현하거나 특정 결과를 안내하는 자료가 아닙니다. 세부 절차는 의료기관과 상담을 통해 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 시술 과정, 무엇을 확인해야 하나요? | 필러가이드",
    description:
      "골반필러 시술 과정의 일반적인 흐름과 마취·통증 관리, 소요 시간을 상담에서 어떻게 확인해야 하는지 안내합니다.",
    keywords: ["골반필러 시술 과정", "골반필러 시술 방법", "골반필러 마취", "필러 시술 흐름"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 시술 과정",
    description: "시술의 일반적인 흐름과 마취, 소요 시간을 상담에서 확인하는 방법을 안내합니다.",
    href: ROUTES.procedureProcess,
  },
};
