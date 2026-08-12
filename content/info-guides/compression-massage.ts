import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const COMPRESSION_MASSAGE_GUIDE: InfoGuide = {
  id: "compression-massage",
  slug: "골반필러-압박-마사지",
  href: ROUTES.compressionMassage,
  categoryLabel: "회복·관리",
  h1: "골반필러 시술 후 압박이나 마사지는 어떻게 확인해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "압박 여부와 마사지 방법은 의료기관과 시술 계획에 따라 다르게 안내될 수 있어, 임의로 진행하기보다 안내받은 내용을 그대로 따르는 것이 중요합니다.",
    "이 글은 특정 압박·마사지 방법을 권장하거나 효과를 보장하는 자료가 아니라, 확인이 필요한 일반적인 항목을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "압박 필요 여부",
      text: "압박이 필요한지, 필요하다면 방법을 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "마사지 가능 시점",
      text: "마사지가 가능한지, 가능하다면 시점을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "임의 시행 금지",
      text: "안내 없이 임의로 압박·마사지를 하지 않습니다.",
    },
  ],
  sections: [
    {
      id: "compression-basics",
      order: 1,
      numberLabel: "01",
      heading: "압박은 왜 안내받은 대로 해야 하나요?",
      layout: "prose",
      directAnswer:
        "압박의 필요 여부와 강도, 방법은 시술 부위와 계획에 따라 다를 수 있어 의료기관의 개별 안내를 따르는 것이 중요합니다.",
      paragraphs: [
        "일부 시술 후에는 붓기 관리를 위해 압박이 안내될 수 있지만, 모든 경우에 동일하게 적용된다고 볼 수는 없습니다. 압박 방법이나 도구가 적절하지 않으면 오히려 불편감을 유발할 수 있으므로, 임의로 판단해 압박하지 않는 것이 안전합니다.",
      ],
    },
    {
      id: "compression-massage-timing",
      order: 2,
      numberLabel: "02",
      heading: "마사지는 언제부터 가능한가요?",
      layout: "prose",
      directAnswer:
        "마사지 가능 여부와 시작 시점은 개인의 회복 상태와 시술 계획에 따라 달라질 수 있어 상담을 통해 직접 확인해야 합니다.",
      paragraphs: [
        "이 글에서 특정 시점을 기준으로 마사지가 가능하다고 단정하지 않습니다. 안내 없이 임의로 마사지를 시작하면 회복 경과에 영향을 줄 수 있으므로, 반드시 사전에 확인된 방법과 시점을 따르는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.dailyLifeAfter,
      relatedLabel: "시술 후 일상생활 확인 항목 보기",
    },
    {
      id: "compression-caution",
      order: 3,
      numberLabel: "03",
      heading: "압박·마사지에서 주의할 점은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "강한 압박, 임의의 마사지, 검증되지 않은 도구 사용은 피하고 이상 반응이 있으면 바로 의료기관에 문의하는 것이 좋습니다.",
      paragraphs: [
        "인터넷에서 접하는 방법을 그대로 따라 하기보다, 본인의 시술 계획에 맞는 안내를 의료기관에서 직접 받는 것이 안전합니다.",
      ],
      bullets: [
        "안내받지 않은 강한 압박은 피한다",
        "임의로 마사지 시점을 앞당기지 않는다",
        "검증되지 않은 도구나 방법을 사용하지 않는다",
        "이상 반응이 느껴지면 바로 문의한다",
      ],
      relatedHref: ROUTES.afterSymptoms,
      relatedLabel: "시술 후 이상증상 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "compression-faq-01",
      order: 1,
      question: "붓기를 빨리 빼려고 스스로 압박해도 되나요?",
      answer:
        "안내받지 않은 방법으로 임의로 압박하는 것은 권장되지 않습니다. 압박의 강도나 방법이 적절하지 않으면 오히려 불편감이나 다른 문제를 유발할 수 있습니다. 압박이 필요한지, 필요하다면 어떤 방법인지 의료기관에서 직접 확인해야 합니다.",
      categories: ["precautions"],
    },
    {
      id: "compression-faq-02",
      order: 2,
      question: "마사지는 시술 후 며칠부터 하면 되나요?",
      answer:
        "정해진 일수를 이 글에서 제시하지 않습니다. 마사지 가능 시점은 개인의 회복 상태와 시술 계획에 따라 다를 수 있으므로, 반드시 상담 시 안내받은 시점을 따라야 합니다.",
      categories: ["precautions"],
    },
    {
      id: "compression-faq-03",
      order: 3,
      question: "마사지가 모양을 자연스럽게 만드는 데 도움이 되나요?",
      answer:
        "이 글에서 마사지의 효과를 단정하거나 보장하지 않습니다. 마사지의 필요성과 방법은 개인 상태와 시술 계획에 따라 다르게 안내될 수 있으므로, 효과를 기대하기보다 안내받은 절차를 따르는 것이 중요합니다.",
      categories: ["precautions"],
    },
    {
      id: "compression-faq-04",
      order: 4,
      question: "마사지 도구를 사용해도 되나요?",
      answer:
        "검증되지 않은 도구를 임의로 사용하는 것은 권장되지 않습니다. 도구 사용이 필요한지, 어떤 도구가 적절한지는 의료기관의 안내를 통해 확인해야 하며, 스스로 판단해 사용하지 않는 것이 안전합니다.",
      categories: ["precautions"],
    },
    {
      id: "compression-faq-05",
      order: 5,
      question: "압박 중 통증이 심해지면 어떻게 하나요?",
      answer:
        "통증이 예상보다 심하거나 지속된다면 압박을 멈추고 의료기관에 문의하는 것이 안전합니다. 자가로 원인을 판단하거나 참고 넘기기보다 빠르게 확인받는 것이 바람직합니다.",
      categories: ["precautions"],
      relatedSlug: "골반필러-시술-후-이상증상",
      relatedLabel: "시술 후 이상증상 확인 보기",
    },
  ],
  faqTitle: "골반필러 압박·마사지 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "daily-life", href: ROUTES.dailyLifeAfter, label: "시술 후 일상생활", anchor: "시술 후 일상생활 확인" },
    { id: "after-symptoms", href: ROUTES.afterSymptoms, label: "시술 후 이상증상", anchor: "시술 후 이상증상 확인" },
    { id: "precautions", href: ROUTES.precautions, label: "주의사항", anchor: "시술 전후 주의사항" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 압박·마사지의 효과를 보장하는 자료가 아닙니다. 실제 방법과 시점은 의료기관의 개별 안내를 따라야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 압박·마사지, 어떻게 확인해야 하나요? | 필러가이드",
    description:
      "골반필러 시술 후 압박 필요 여부와 마사지 가능 시점을 임의로 판단하지 않고 확인하는 방법을 안내합니다.",
    keywords: ["골반필러 압박", "골반필러 마사지", "골반필러 시술 후 관리", "필러 마사지"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 압박·마사지 확인",
    description: "압박 필요 여부와 마사지 가능 시점을 임의로 판단하지 않고 확인하는 방법을 안내합니다.",
    href: ROUTES.compressionMassage,
  },
};
