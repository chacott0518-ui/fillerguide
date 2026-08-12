import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const ALLERGY_HISTORY_CHECK_GUIDE: InfoGuide = {
  id: "allergy-history-check",
  slug: "골반필러-알레르기-과거병력-확인",
  href: ROUTES.allergyHistoryCheck,
  categoryLabel: "상담·준비",
  h1: "골반필러 상담 전 알레르기와 과거 병력은 무엇을 확인하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "알레르기 이력, 만성질환, 과거 시술·수술 경험은 상담에서 확인해야 할 항목에 영향을 줄 수 있는 정보입니다. 기억나는 대로 정리해 두면 상담이 더 구체적으로 진행될 수 있습니다.",
    "이 글은 특정 병력이 있으면 시술이 가능하거나 불가능하다고 단정하지 않습니다. 개인 상태에 따라 확인 범위가 달라질 수 있으므로 의료진과 직접 상의해야 합니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "알레르기 이력",
      text: "약물·식품·필러 성분 등 알레르기 경험을 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "만성질환·건강 상태",
      text: "현재 진단받은 질환이나 치료 중인 상태를 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "과거 시술·수술 이력",
      text: "해당 부위나 주변의 이전 시술·수술 경험을 정리합니다.",
    },
  ],
  sections: [
    {
      id: "allergy-why",
      order: 1,
      numberLabel: "01",
      heading: "알레르기 이력은 왜 상담에서 중요하게 다뤄지나요?",
      layout: "prose",
      directAnswer:
        "과거 약물이나 필러 성분에 대한 알레르기 반응 경험이 있다면, 상담에서 확인해야 할 항목과 주의할 부분이 달라질 수 있기 때문에 중요하게 다뤄집니다.",
      paragraphs: [
        "알레르기는 특정 약물, 식품, 이전에 사용한 필러나 보형물 성분에 대한 반응까지 폭넓게 포함될 수 있습니다. 경미하게 지나간 반응이라도 기억나는 대로 알리는 편이 좋습니다.",
        "알레르기 이력이 있다고 해서 이 글에서 시술 가능 여부를 판정하지는 않습니다. 반응의 종류와 정도, 원인 물질에 따라 확인해야 할 사항이 달라질 수 있으므로 의료진의 확인이 필요합니다.",
      ],
    },
    {
      id: "allergy-chronic",
      order: 2,
      numberLabel: "02",
      heading: "만성질환이 있으면 어떻게 알려야 하나요?",
      layout: "checklist",
      directAnswer:
        "현재 진단받아 치료 중인 질환, 정기적으로 병원을 다니는 상태, 임신·수유 여부 등은 상담에서 구체적으로 알리는 것이 좋습니다.",
      paragraphs: [
        "출혈과 관련된 질환, 면역 관련 질환, 피부 관련 질환이 있다면 관련 정보를 정리해 가는 것이 도움이 됩니다. 진단명이 정확히 기억나지 않는다면 진료기록이나 진단서를 참고할 수 있습니다.",
      ],
      bullets: [
        "현재 치료 중인 질환과 진단명",
        "정기적으로 복용하는 약과 연결해 확인",
        "임신·수유 여부",
        "피부 염증·감염이 의심되는 상태",
      ],
      relatedHref: ROUTES.medicationCheck,
      relatedLabel: "복용약 확인 항목 함께 보기",
    },
    {
      id: "allergy-history",
      order: 3,
      numberLabel: "03",
      heading: "과거 시술·수술 이력은 왜 확인이 필요한가요?",
      layout: "prose",
      directAnswer:
        "해당 부위나 주변에 필러, 보형물, 지방이식, 수술을 받은 적이 있다면 그 정보에 따라 상담에서 확인해야 할 사항이 달라질 수 있습니다.",
      paragraphs: [
        "이전에 사용한 제품이나 수술 방식을 정확히 기억하지 못하더라도, 시기와 대략적인 내용을 알리는 것만으로도 상담에 도움이 됩니다. 다른 의료기관에서 시술을 받았다면 가능한 경우 관련 기록을 준비해 가는 것도 방법입니다.",
      ],
      relatedHref: ROUTES.consultationChecklist,
      relatedLabel: "상담 전 확인사항 전체 보기",
    },
  ],
  faqs: [
    {
      id: "allergy-faq-01",
      order: 1,
      question: "예전에 필러 알레르기 반응이 있었는데 골반필러도 상담할 수 있나요?",
      answer:
        "상담 자체는 가능하지만, 과거 반응의 종류와 원인 성분을 의료진에게 구체적으로 알려야 합니다. 반응이 어떤 제품이나 성분 때문이었는지에 따라 확인해야 할 사항이 달라질 수 있습니다. 이 글에서 시술 가능 여부를 판단하지는 않으므로 상담을 통해 직접 확인해야 합니다.",
      categories: ["consultation"],
    },
    {
      id: "allergy-faq-02",
      order: 2,
      question: "가벼운 알레르기 반응도 알려야 하나요?",
      answer:
        "네, 알리는 편이 좋습니다. 당시에는 경미하게 지나갔더라도 원인 물질이나 반응 양상에 대한 정보가 상담에 도움이 될 수 있습니다. 기억나는 시기와 증상을 함께 정리해 가면 더 구체적인 설명을 들을 수 있습니다.",
      categories: ["consultation"],
    },
    {
      id: "allergy-faq-03",
      order: 3,
      question: "만성질환이 있으면 골반필러 시술이 어려운가요?",
      answer:
        "질환의 종류와 현재 상태에 따라 확인해야 할 사항이 달라질 수 있어 이 글에서 일률적으로 답하기는 어렵습니다. 진단명과 치료 현황을 상담에서 구체적으로 알리고, 의료진의 판단을 직접 확인하는 것이 정확합니다.",
      categories: ["consultation", "precautions"],
    },
    {
      id: "allergy-faq-04",
      order: 4,
      question: "임신 중이거나 수유 중이면 상담 시 무엇을 알려야 하나요?",
      answer:
        "임신·수유 여부는 상담 초기에 명확히 알려야 하는 정보입니다. 관련해 확인이 필요한 사항은 개인 상태와 시점에 따라 달라질 수 있으므로, 이 글로 판단하지 말고 의료진과 직접 상의해야 합니다.",
      categories: ["consultation"],
    },
    {
      id: "allergy-faq-05",
      order: 5,
      question: "다른 병원에서 받은 시술 기록이 없으면 어떻게 하나요?",
      answer:
        "기록이 없더라도 기억나는 시기, 부위, 대략적인 내용을 알리는 것만으로 상담에 도움이 됩니다. 정확한 제품명을 모른다면 모른다고 솔직히 알리는 편이 추측성 정보를 전달하는 것보다 안전합니다. 필요한 경우 이전 의료기관에 기록을 요청할 수도 있습니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-상담-전-확인사항",
      relatedLabel: "상담 전 확인사항 보기",
    },
  ],
  faqTitle: "골반필러 알레르기·병력 확인 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "medication", href: ROUTES.medicationCheck, label: "복용약 확인", anchor: "복용약 확인 항목" },
    { id: "consultation-questions", href: ROUTES.consultationQuestions, label: "상담 질문", anchor: "상담에서 확인할 질문" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 알레르기·병력에 따른 시술 적합성을 판단하는 자료가 아닙니다. 구체적인 확인은 의료진과의 상담을 통해 이뤄져야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 상담 전 알레르기·과거병력 확인, 무엇을 알려야 하나요? | 필러가이드",
    description:
      "골반필러 상담 전 알레르기 이력, 만성질환, 과거 시술·수술 이력 중 무엇을 어떻게 알려야 하는지 안내합니다.",
    keywords: ["골반필러 알레르기", "골반필러 병력", "골반필러 상담 준비", "필러 알레르기 확인"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 알레르기·과거병력 확인",
    description: "알레르기 이력과 만성질환, 과거 시술 경험을 상담에서 어떻게 알려야 하는지 안내합니다.",
    href: ROUTES.allergyHistoryCheck,
  },
};
