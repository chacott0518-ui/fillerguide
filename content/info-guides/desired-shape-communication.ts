import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const DESIRED_SHAPE_COMMUNICATION_GUIDE: InfoGuide = {
  id: "desired-shape-communication",
  slug: "골반필러-원하는-모양-전달",
  href: ROUTES.desiredShapeCommunication,
  categoryLabel: "상담·준비",
  h1: "골반필러 상담에서 원하는 모양은 어떻게 전달하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "원하는 변화를 구체적으로 전달할수록 상담에서 논의할 수 있는 내용이 명확해집니다. 사진이나 참고 이미지를 활용하면 이해를 돕는 데 도움이 될 수 있습니다.",
    "다만 이 글은 특정 결과를 보장하거나 모양을 사이트가 임의로 제안하는 자료가 아닙니다. 실제로 가능한 범위와 방법은 의료진의 설명을 통해 확인해야 합니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "기대하는 변화의 우선순위",
      text: "어떤 부분을 가장 우선하는지 먼저 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "참고 자료 준비",
      text: "설명에 도움이 되는 사진이나 이미지를 준비합니다.",
    },
    {
      numberLabel: "03",
      title: "현실적인 범위 확인",
      text: "가능한 범위와 한계를 상담에서 함께 확인합니다.",
    },
  ],
  sections: [
    {
      id: "shape-express",
      order: 1,
      numberLabel: "01",
      heading: "원하는 변화를 어떻게 구체적으로 표현하나요?",
      layout: "prose",
      directAnswer:
        "‘자연스럽게’, ‘볼륨 있게’ 같은 표현보다 어느 부위를, 어느 정도로, 어떤 느낌으로 바꾸고 싶은지 구체적으로 설명하는 것이 도움이 됩니다.",
      paragraphs: [
        "같은 표현이라도 사람마다 떠올리는 이미지가 다를 수 있습니다. 우선순위를 정해 어떤 부분을 가장 중요하게 생각하는지 먼저 말하면 상담에서 논의가 더 구체적으로 진행될 수 있습니다.",
        "상담 중에는 사이트나 사진에서 본 사례를 그대로 재현해 달라고 요청하기보다, 본인이 느끼는 불편함이나 기대하는 방향을 설명하는 방식이 의료진과의 소통에 도움이 됩니다.",
      ],
    },
    {
      id: "shape-reference",
      order: 2,
      numberLabel: "02",
      heading: "참고 사진은 어떻게 활용하면 좋을까요?",
      layout: "checklist",
      directAnswer:
        "참고 사진은 원하는 느낌을 전달하는 보조 수단으로 활용할 수 있지만, 동일한 결과를 보장하는 근거로 받아들여서는 안 됩니다.",
      paragraphs: [
        "체형과 골격, 피부 상태가 다르기 때문에 같은 참고 사진이라도 결과는 사람마다 다르게 나타날 수 있습니다. 사진은 방향을 전달하는 참고자료로 활용하고, 실제로 가능한 범위는 상담에서 별도로 확인해야 합니다.",
      ],
      bullets: [
        "선호하는 느낌을 보여주는 참고 사진 준비",
        "동일한 결과를 기대하기보다 방향성 전달 목적으로 활용",
        "체형·골격 차이에 따라 결과가 달라질 수 있음을 이해",
      ],
      relatedHref: ROUTES.designConsultation,
      relatedLabel: "디자인 상담 확인 항목 보기",
    },
    {
      id: "shape-realistic",
      order: 3,
      numberLabel: "03",
      heading: "현실적인 범위는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "기대하는 변화가 실제로 가능한 범위인지, 어떤 제한이 있는지는 상담에서 의료진의 설명을 통해 확인해야 합니다.",
      paragraphs: [
        "이 글에서는 특정 모양이나 결과를 사이트가 판단해 제시하지 않습니다. 개인의 체형, 골격, 피부 상태, 제품의 허가된 사용목적에 따라 가능한 범위가 달라질 수 있으므로, 상담에서 현실적으로 가능한 부분과 한계를 함께 질문하는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "상담 질문 목록 보기",
    },
  ],
  faqs: [
    {
      id: "shape-faq-01",
      order: 1,
      question: "참고 사진과 똑같은 결과를 요청해도 되나요?",
      answer:
        "참고 사진은 원하는 느낌을 전달하는 용도로 활용할 수 있지만, 체형과 골격이 다르기 때문에 동일한 결과가 보장되지는 않습니다. 상담에서는 참고 사진의 어떤 부분이 마음에 들었는지 구체적으로 설명하고, 본인의 상태에서 가능한 범위를 의료진에게 확인하는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "shape-faq-02",
      order: 2,
      question: "원하는 모양을 말로 설명하기 어려우면 어떻게 하나요?",
      answer:
        "사진이나 이미지를 활용하는 것도 방법이지만, 평소 느끼는 불편함이나 신경 쓰이는 부위를 구체적으로 설명하는 것도 도움이 됩니다. 완벽하게 표현하지 못하더라도 상담 과정에서 의료진과 대화를 통해 방향을 좁혀갈 수 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "shape-faq-03",
      order: 3,
      question: "골반필러 후 원하는 모양이 나오지 않으면 어떻게 하나요?",
      answer:
        "이 글에서는 특정 결과를 보장하지 않으며, 모양에 대한 만족도는 개인차가 있을 수 있습니다. 시술 후 느끼는 변화나 궁금한 점은 사후 확인 과정에서 의료진에게 문의하는 것이 적절하며, 자가로 원인을 판단하기보다 상담을 통해 확인하는 것이 좋습니다.",
      categories: ["consultation", "precautions"],
    },
    {
      id: "shape-faq-04",
      order: 4,
      question: "좌우 모양을 다르게 요청할 수 있나요?",
      answer:
        "원하는 방향을 구체적으로 전달할 수는 있지만, 실제로 가능한 범위는 개인의 체형과 상태에 따라 다를 수 있습니다. 좌우 차이에 대한 기대치가 있다면 상담에서 미리 이야기하고, 어떤 부분이 자연스러운 범위인지 함께 확인하는 것이 도움이 됩니다.",
      categories: ["consultation"],
    },
    {
      id: "shape-faq-05",
      order: 5,
      question: "디자인 상담은 시술 당일에도 진행되나요?",
      answer:
        "상담 절차는 의료기관마다 다를 수 있어 이 글에서 일률적으로 답하기는 어렵습니다. 사전 상담과 시술 당일 최종 확인이 어떻게 나뉘어 진행되는지는 상담 시 직접 질문해 확인하는 것이 정확합니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-디자인-상담",
      relatedLabel: "디자인 상담 확인 항목 보기",
    },
  ],
  faqTitle: "골반필러 원하는 모양 전달 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "design", href: ROUTES.designConsultation, label: "디자인 상담", anchor: "디자인 상담 확인 항목" },
    { id: "questions", href: ROUTES.consultationQuestions, label: "상담 질문", anchor: "상담에서 확인할 질문" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 특정 모양이나 결과를 보장하지 않습니다. 실제로 가능한 범위는 의료진과의 상담을 통해 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY],
  seo: {
    title: "골반필러 원하는 모양 전달, 상담에서 어떻게 설명하나요? | 필러가이드",
    description:
      "골반필러 상담에서 원하는 변화를 구체적으로 전달하는 방법과 참고 사진 활용, 현실적인 범위 확인 방법을 안내합니다.",
    keywords: ["골반필러 모양", "골반필러 상담 설명", "골반필러 디자인", "필러 원하는 모양"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 원하는 모양 전달",
    description: "상담에서 원하는 변화를 구체적으로 전달하는 방법과 확인할 점을 안내합니다.",
    href: ROUTES.desiredShapeCommunication,
  },
};
