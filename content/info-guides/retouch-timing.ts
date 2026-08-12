import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const RETOUCH_TIMING_GUIDE: InfoGuide = {
  id: "retouch-timing",
  slug: "골반필러-재시술-상담-시점",
  href: ROUTES.retouchTiming,
  categoryLabel: "경과·유지",
  h1: "골반필러 재시술은 언제 상담해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "재시술 상담은 시술 부위가 충분히 안정된 이후, 경과와 유지 상태를 함께 확인하며 논의하는 것이 일반적으로 권장됩니다.",
    "이 글은 재시술의 필요성이나 시점을 사이트가 임의로 판단하는 자료가 아니며, 상담을 준비할 때 확인하면 도움이 되는 항목을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "충분한 안정화 여부",
      text: "모양과 붓기가 충분히 안정됐는지 먼저 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "유지 상태 변화",
      text: "시간에 따른 유지 상태 변화를 함께 살펴봅니다.",
    },
    {
      numberLabel: "03",
      title: "이전 시술 기록",
      text: "이전에 사용한 제품과 시술 기록을 준비합니다.",
    },
  ],
  sections: [
    {
      id: "retouch-when",
      order: 1,
      numberLabel: "01",
      heading: "재시술은 언제쯤 상담을 고려하나요?",
      layout: "prose",
      directAnswer:
        "모양과 붓기가 충분히 안정된 이후, 유지 상태의 변화가 느껴질 때 상담을 고려하는 것이 일반적으로 안내됩니다.",
      paragraphs: [
        "안정화되기 전 이른 시점에 재시술을 상담하면 아직 확정되지 않은 상태를 기준으로 판단하게 될 수 있습니다. 이 글에서 구체적인 시점을 특정하지 않으며, 정확한 시점은 개인의 경과에 따라 상담을 통해 판단해야 합니다.",
      ],
      relatedHref: ROUTES.shapeChangeObservation,
      relatedLabel: "모양 변화 관찰 항목 보기",
    },
    {
      id: "retouch-reason",
      order: 2,
      numberLabel: "02",
      heading: "어떤 변화가 있을 때 상담을 고려하나요?",
      layout: "checklist",
      directAnswer:
        "시간이 지나며 느껴지는 볼륨감 변화, 좌우 차이의 지속, 기대와 다른 유지 상태 등이 있을 때 상담을 고려할 수 있습니다.",
      paragraphs: [
        "이런 변화가 있다고 해서 반드시 재시술이 필요하다고 이 글에서 단정하지는 않습니다. 상담을 통해 현재 상태를 확인하고 필요성을 함께 논의하는 것이 정확합니다.",
      ],
      bullets: [
        "충분한 안정화 기간이 지났는지",
        "볼륨감이나 유지 상태의 변화가 느껴지는지",
        "좌우 차이가 지속되고 있는지",
        "이전과 다른 촉감이나 이상 반응은 없는지",
      ],
      relatedHref: ROUTES.leftRightDifference,
      relatedLabel: "좌우 차이 확인 항목 보기",
    },
    {
      id: "retouch-prepare",
      order: 3,
      numberLabel: "03",
      heading: "재시술 상담을 준비할 때 무엇을 챙기면 좋을까요?",
      layout: "prose",
      directAnswer:
        "이전에 사용한 제품명과 시술 시기, 경과 사진, 현재 느끼는 변화를 정리해 가면 상담이 더 구체적으로 진행될 수 있습니다.",
      paragraphs: [
        "이전 시술을 다른 의료기관에서 받았다면 가능한 경우 관련 기록을 준비하는 것도 도움이 됩니다. 기록이 없더라도 기억나는 내용을 최대한 정리해 알리는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.consultationChecklist,
      relatedLabel: "상담 전 확인사항 전체 보기",
    },
  ],
  faqs: [
    {
      id: "retouch-faq-01",
      order: 1,
      question: "재시술은 언제부터 상담할 수 있나요?",
      answer:
        "충분한 안정화 기간이 지난 이후 상담하는 것이 일반적으로 권장되지만, 정확한 시점은 개인의 경과에 따라 다를 수 있어 이 글에서 특정 기간을 제시하지 않습니다. 궁금하다면 사후 확인 상담에서 먼저 질문해 보는 것이 좋습니다.",
      categories: ["consultation"],
    },
    {
      id: "retouch-faq-02",
      order: 2,
      question: "재시술은 반드시 필요한 절차인가요?",
      answer:
        "그렇지 않습니다. 재시술 필요 여부는 개인의 만족도와 경과에 따라 다른 선택의 문제입니다. 이 글에서 재시술을 권장하거나 필요성을 판단하지 않으며, 원한다면 상담을 통해 현재 상태를 확인한 뒤 결정할 수 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "retouch-faq-03",
      order: 3,
      question: "이전 시술 기록이 없으면 재시술 상담이 어려운가요?",
      answer:
        "기록이 없다고 상담이 불가능한 것은 아닙니다. 다만 기억나는 제품명, 시기, 부위 정보를 알릴수록 상담에서 더 구체적인 설명을 들을 수 있습니다. 다른 의료기관에서 시술했다면 가능한 경우 기록을 요청해 보는 것도 방법입니다.",
      categories: ["consultation"],
    },
    {
      id: "retouch-faq-04",
      order: 4,
      question: "재시술 시에도 같은 제품을 사용해야 하나요?",
      answer:
        "반드시 같은 제품을 사용해야 하는 것은 아니며, 이는 상담을 통해 논의할 사항입니다. 제품 선택은 이전 시술 이력, 현재 상태, 목표에 따라 달라질 수 있으므로 이 글에서 특정 제품을 권장하지 않습니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-제품-성분-확인",
      relatedLabel: "제품·성분 확인 항목 보기",
    },
    {
      id: "retouch-faq-05",
      order: 5,
      question: "재시술 상담에서도 위험을 다시 확인해야 하나요?",
      answer:
        "네, 재시술이라 하더라도 첫 시술과 마찬가지로 제품, 부위, 위험과 한계를 다시 확인하는 것이 좋습니다. 이전 경험이 있다고 해서 확인 절차를 생략할 필요는 없으며, 상담 질문 목록을 참고해 준비할 수 있습니다.",
      categories: ["consultation", "precautions"],
      relatedSlug: "골반필러-상담-질문",
      relatedLabel: "상담 질문 목록 보기",
    },
  ],
  faqTitle: "골반필러 재시술 상담 시점 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "shape-observe", href: ROUTES.shapeChangeObservation, label: "모양 변화 관찰", anchor: "모양 변화 관찰 방법" },
    { id: "left-right", href: ROUTES.leftRightDifference, label: "좌우 차이 확인", anchor: "좌우 차이 확인 항목" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 재시술의 필요성이나 시점을 판단하는 자료가 아닙니다. 실제 결정은 상담을 통해 의료진과 함께 이뤄져야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 재시술 상담 시점, 언제가 적절한가요? | 필러가이드",
    description:
      "골반필러 재시술을 언제 상담해야 하는지, 어떤 변화가 있을 때 고려하는지, 상담 준비물은 무엇인지 안내합니다.",
    keywords: ["골반필러 재시술", "골반필러 재시술 시점", "골반필러 경과", "필러 재시술 상담"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 재시술 상담 시점",
    description: "재시술 상담을 고려할 시점과 준비물을 안내합니다.",
    href: ROUTES.retouchTiming,
  },
};
