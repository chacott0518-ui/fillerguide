import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const MEDICATION_CHECK_GUIDE: InfoGuide = {
  id: "medication-check",
  slug: "골반필러-시술-전-복용약-확인",
  href: ROUTES.medicationCheck,
  categoryLabel: "상담·준비",
  h1: "골반필러 시술 전 복용약은 어떻게 확인하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "골반필러 상담 전에는 현재 복용 중인 약과 건강기능식품을 목록으로 정리해 두면 상담이 수월해집니다. 항응고제나 항혈소판제처럼 출혈과 관련될 수 있는 약은 특히 빠짐없이 알리는 것이 중요합니다.",
    "이 글은 복용약별 시술 가능 여부를 판정하는 자료가 아닙니다. 실제 확인과 판단은 처방한 의료진, 그리고 시술을 진행하는 의료진의 상담을 통해 이뤄져야 합니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "복용 중인 약 전체 목록",
      text: "처방약, 일반의약품, 건강기능식품을 모두 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "출혈 관련 약물 여부",
      text: "항응고제·항혈소판제 복용 여부를 특히 명확히 알립니다.",
    },
    {
      numberLabel: "03",
      title: "복용 중단 필요 여부",
      text: "약 조절이 필요한지는 처방 의료진과 먼저 상의합니다.",
    },
  ],
  sections: [
    {
      id: "med-why",
      order: 1,
      numberLabel: "01",
      heading: "복용약을 왜 상담에서 알려야 하나요?",
      layout: "prose",
      directAnswer:
        "복용약은 시술 중 출혈이나 멍, 회복 경과에 영향을 줄 수 있는 정보이기 때문에 상담에서 구체적으로 알려야 합니다.",
      paragraphs: [
        "일부 약물은 혈액 응고에 영향을 줄 수 있어 시술 부위의 멍이나 붓기 양상에 영향을 줄 수 있습니다. 이런 이유로 상담에서는 처방약뿐 아니라 평소 복용하는 영양제나 건강기능식품까지 포함해 알리는 것이 도움이 됩니다.",
        "특정 약을 복용한다고 해서 이 글에서 시술 가능 여부를 단정하지는 않습니다. 약의 종류, 복용 목적, 개인의 건강 상태에 따라 확인해야 할 사항이 달라질 수 있으므로 의료진과 직접 상의해야 합니다.",
      ],
      relatedHref: ROUTES.consultationChecklist,
      relatedLabel: "상담 전 확인사항 전체 보기",
    },
    {
      id: "med-list",
      order: 2,
      numberLabel: "02",
      heading: "어떤 약을 목록에 포함해야 하나요?",
      layout: "checklist",
      directAnswer:
        "처방약, 약국에서 구입한 일반의약품, 영양제와 건강기능식품, 최근 중단한 약까지 포함해 정리하는 편이 좋습니다.",
      paragraphs: [
        "약 이름이 기억나지 않는다면 처방전이나 약 봉투, 복용 중인 제품 사진을 상담에 가져가는 것도 방법입니다. 최근에 복용을 중단한 약이 있다면 그 시점도 함께 알리면 상담에 도움이 됩니다.",
      ],
      bullets: [
        "현재 복용 중인 처방약 전체",
        "약국에서 구입한 일반의약품",
        "영양제·건강기능식품",
        "최근 중단한 약과 중단 시점",
      ],
    },
    {
      id: "med-decision",
      order: 3,
      numberLabel: "03",
      heading: "복용 조절이 필요한지는 누가 판단하나요?",
      layout: "prose",
      directAnswer:
        "복용 중단이나 조절 여부는 임의로 결정하지 말고 처방한 의료진과 시술 의료진이 함께 확인해야 하는 사항입니다.",
      paragraphs: [
        "임의로 약 복용을 중단하면 원래 치료 중인 질환에 영향을 줄 수 있습니다. 따라서 복용약 조절이 필요한지는 처방 의료진과 먼저 상의하고, 그 내용을 시술 상담에서도 함께 전달하는 것이 안전합니다.",
        "상담에서 약과 관련해 궁금한 점이 있다면 미리 질문을 정리해 가면 놓치는 부분을 줄일 수 있습니다.",
      ],
      relatedHref: ROUTES.allergyHistoryCheck,
      relatedLabel: "알레르기·과거병력 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "medication-faq-01",
      order: 1,
      question: "영양제도 상담에서 알려야 하나요?",
      answer:
        "네, 알리는 편이 좋습니다. 일부 영양제는 혈액 응고나 다른 약물과의 상호작용에 영향을 줄 수 있습니다. 처방약이 아니더라도 평소 꾸준히 복용하는 제품이 있다면 목록에 포함해 상담에서 알려 주세요. 구체적인 영향 여부는 제품과 개인 상태에 따라 다를 수 있어 의료진의 확인이 필요합니다.",
      categories: ["consultation"],
    },
    {
      id: "medication-faq-02",
      order: 2,
      question: "골반필러 상담 전에 약을 미리 끊어야 하나요?",
      answer:
        "임의로 중단하지 않는 것이 원칙입니다. 약 조절이 필요한지는 처방한 의료진과 시술 의료진이 함께 판단해야 할 사항입니다. 자가 판단으로 복용을 중단하면 기존 치료에 영향을 줄 수 있으므로, 궁금한 점은 상담 과정에서 먼저 질문하는 것이 안전합니다.",
      categories: ["consultation", "precautions"],
    },
    {
      id: "medication-faq-03",
      order: 3,
      question: "약 이름을 정확히 모르면 어떻게 하나요?",
      answer:
        "처방전이나 약 봉투, 복용 중인 제품의 사진을 준비해 가는 방법이 있습니다. 정확한 이름과 용량을 알수록 상담에서 확인할 수 있는 정보가 많아집니다. 기억나는 대로 메모해 가는 것만으로도 상담에 도움이 됩니다.",
      categories: ["consultation"],
    },
    {
      id: "medication-faq-04",
      order: 4,
      question: "골반필러와 관련해 특히 중요하게 보는 약물이 있나요?",
      answer:
        "항응고제나 항혈소판제처럼 출혈과 관련될 수 있는 약물은 상담에서 특히 명확히 확인하는 경우가 많습니다. 다만 이런 약을 복용한다고 해서 시술이 불가능하다고 단정할 수는 없으며, 개인 상태에 따라 확인 범위가 달라질 수 있습니다.",
      categories: ["consultation", "precautions"],
    },
    {
      id: "medication-faq-05",
      order: 5,
      question: "복용약 확인 후 추가로 준비할 것이 있나요?",
      answer:
        "복용약 목록과 함께 알레르기, 과거 시술·수술 이력도 정리해 두면 상담이 더 수월해집니다. 두 정보는 서로 연결되어 확인되는 경우가 많기 때문입니다. 자세한 항목은 알레르기·과거병력 확인 안내에서 함께 확인할 수 있습니다.",
      categories: ["consultation"],
      relatedSlug: "골반필러-알레르기-과거병력-확인",
      relatedLabel: "알레르기·과거병력 확인 보기",
    },
  ],
  faqTitle: "골반필러 복용약 확인 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "allergy", href: ROUTES.allergyHistoryCheck, label: "알레르기·과거병력", anchor: "알레르기·과거병력 확인" },
    { id: "consultation-questions", href: ROUTES.consultationQuestions, label: "상담 질문", anchor: "상담에서 확인할 질문" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 복용약에 대한 시술 가능 여부를 판단하는 자료가 아닙니다. 복용 중인 약과 관련된 확인은 처방 의료진과 시술 의료진에게 직접 문의해야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 시술 전 복용약 확인, 무엇을 알려야 하나요? | 필러가이드",
    description:
      "골반필러 상담 전 복용약과 건강기능식품을 어떻게 정리하고 알려야 하는지, 출혈 관련 약물 확인이 왜 중요한지 안내합니다.",
    keywords: ["골반필러 복용약", "골반필러 상담 전 확인", "필러 시술 전 약", "골반필러 준비"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 시술 전 복용약 확인",
    description: "복용약과 건강기능식품을 상담에서 어떻게 정리하고 알려야 하는지 안내합니다.",
    href: ROUTES.medicationCheck,
  },
};
