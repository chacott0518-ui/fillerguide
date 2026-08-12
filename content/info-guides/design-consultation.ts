import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const DESIGN_CONSULTATION_GUIDE: InfoGuide = {
  id: "design-consultation",
  slug: "골반필러-디자인-상담",
  href: ROUTES.designConsultation,
  categoryLabel: "시술 이해",
  h1: "골반필러 디자인 상담에서는 무엇을 확인하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "디자인 상담은 원하는 변화와 실제 체형을 맞춰보며 주입 범위와 대략적인 계획을 표시하고 확인하는 과정으로 안내되는 경우가 일반적입니다.",
    "이 글은 디자인 결과를 보장하거나 특정 방법을 권장하는 자료가 아니라, 상담에서 확인하면 도움이 되는 항목을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "표시 방식 확인",
      text: "부위를 어떻게 표시하고 설명하는지 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "좌우 대칭 논의",
      text: "좌우 차이가 있다면 상담에서 미리 논의합니다.",
    },
    {
      numberLabel: "03",
      title: "최종 확인 절차",
      text: "디자인 확정 전 최종 확인 절차를 질문합니다.",
    },
  ],
  sections: [
    {
      id: "design-marking",
      order: 1,
      numberLabel: "01",
      heading: "디자인은 어떻게 표시하고 설명하나요?",
      layout: "prose",
      directAnswer:
        "일반적으로 시술 전 부위에 표시를 하고, 계획한 범위와 방향을 함께 설명하는 절차로 안내되는 경우가 많습니다.",
      paragraphs: [
        "표시된 내용을 보면서 본인이 기대하는 부분과 실제 계획이 맞는지 확인하는 것이 중요합니다. 이해되지 않는 부분이 있다면 그 자리에서 다시 질문하는 것이 좋습니다.",
        "표시 방식과 설명 절차는 의료기관마다 다를 수 있으므로, 이 글에서 특정 방식을 표준으로 제시하지 않습니다.",
      ],
    },
    {
      id: "design-symmetry",
      order: 2,
      numberLabel: "02",
      heading: "좌우 대칭은 상담에서 어떻게 논의되나요?",
      layout: "prose",
      directAnswer:
        "기존에 좌우 차이가 있다면 상담에서 미리 확인하고, 어느 정도까지 조정이 가능한지 논의하는 것이 일반적으로 안내됩니다.",
      paragraphs: [
        "사람마다 원래 골격이나 체형에 좌우 차이가 있을 수 있습니다. 시술 후에도 완전한 대칭을 보장할 수는 없다는 점을 이해하고, 현실적으로 가능한 범위를 상담에서 확인하는 것이 도움이 됩니다.",
      ],
      relatedHref: ROUTES.leftRightDifference,
      relatedLabel: "좌우 차이 확인 항목 보기",
    },
    {
      id: "design-final-check",
      order: 3,
      numberLabel: "03",
      heading: "디자인 확정 전 무엇을 다시 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "표시된 범위, 좌우 균형, 예상 변화에 대한 설명을 다시 한번 확인하고 궁금한 점을 질문한 뒤 진행하는 것이 좋습니다.",
      paragraphs: [
        "디자인이 확정되면 이후 변경이 어려울 수 있으므로, 최종 확인 단계에서 충분히 이해하고 동의한 뒤 다음 절차로 넘어가는 것이 바람직합니다.",
      ],
      bullets: [
        "표시된 범위가 기대한 부분과 일치하는지",
        "좌우 균형에 대한 설명이 이해되는지",
        "궁금한 점을 모두 질문했는지",
        "다음 절차(소독·준비)에 대한 설명을 들었는지",
      ],
      relatedHref: ROUTES.procedureProcess,
      relatedLabel: "시술 과정 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "design-faq-01",
      order: 1,
      question: "디자인 상담과 실제 시술은 같은 날 진행되나요?",
      answer:
        "같은 날 이어서 진행되는 경우도 있고, 별도로 나눠 진행되는 경우도 있습니다. 이는 의료기관과 계획에 따라 달라질 수 있는 사항이므로, 정확한 절차는 상담에서 직접 확인하는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "design-faq-02",
      order: 2,
      question: "표시된 디자인이 마음에 들지 않으면 바꿀 수 있나요?",
      answer:
        "표시 단계에서 의견을 전달하고 조정을 요청할 수 있는 경우가 일반적입니다. 이해되지 않거나 원하는 부분과 다르게 느껴진다면 진행 전에 반드시 이야기하는 것이 좋습니다. 변경 가능 범위는 의료기관과 상황에 따라 다를 수 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "design-faq-03",
      order: 3,
      question: "좌우 대칭을 완벽하게 맞출 수 있나요?",
      answer:
        "완벽한 대칭을 보장한다고 단정할 수 없습니다. 원래 골격이나 체형에 차이가 있을 수 있고, 현실적으로 가능한 범위는 개인마다 다릅니다. 상담에서 본인의 좌우 상태를 확인하고 기대치를 조정하는 것이 도움이 됩니다.",
      categories: ["consultation"],
    },
    {
      id: "design-faq-04",
      order: 4,
      question: "디자인 상담 시간은 얼마나 걸리나요?",
      answer:
        "상담 내용과 확인해야 할 사항에 따라 시간이 달라질 수 있어 이 글에서 일률적으로 답하기 어렵습니다. 충분히 이해될 때까지 질문하는 것이 급하게 진행하는 것보다 중요합니다.",
      categories: ["consultation"],
    },
    {
      id: "design-faq-05",
      order: 5,
      question: "디자인 상담에서 사진을 찍어도 되나요?",
      answer:
        "가능 여부는 의료기관의 방침에 따라 다를 수 있습니다. 참고를 위해 촬영이 필요하다면 상담 시 미리 요청하고 안내를 따르는 것이 좋습니다. 개인정보와 관련된 사항은 해당 의료기관에 직접 확인해야 합니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-원하는-모양-전달",
      relatedLabel: "원하는 모양 전달 방법 보기",
    },
  ],
  faqTitle: "골반필러 디자인 상담 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "left-right", href: ROUTES.leftRightDifference, label: "좌우 차이 확인", anchor: "좌우 차이 확인 항목" },
    { id: "shape", href: ROUTES.desiredShapeCommunication, label: "원하는 모양 전달", anchor: "원하는 모양 전달 방법" },
    { id: "process", href: ROUTES.procedureProcess, label: "시술 과정", anchor: "시술 과정 확인" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 디자인 결과나 좌우 대칭을 보장하는 자료가 아닙니다. 실제 진행은 상담을 통해 의료진과 함께 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY],
  seo: {
    title: "골반필러 디자인 상담, 무엇을 확인하나요? | 필러가이드",
    description:
      "골반필러 디자인 상담에서 표시 방식, 좌우 대칭 논의, 최종 확인 절차를 어떻게 진행하는지 안내합니다.",
    keywords: ["골반필러 디자인", "골반필러 디자인 상담", "골반필러 좌우 대칭", "필러 디자인"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 디자인 상담",
    description: "디자인 상담에서 표시 방식과 좌우 대칭, 최종 확인 절차를 안내합니다.",
    href: ROUTES.designConsultation,
  },
};
