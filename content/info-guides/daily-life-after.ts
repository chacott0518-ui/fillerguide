import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const DAILY_LIFE_AFTER_GUIDE: InfoGuide = {
  id: "daily-life-after",
  slug: "골반필러-시술-후-일상생활",
  href: ROUTES.dailyLifeAfter,
  categoryLabel: "회복·관리",
  h1: "골반필러 시술 후 일상생활에서 무엇을 확인해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "시술 직후에는 앉기, 눕기, 이동 같은 기본적인 활동부터 옷차림, 외부 자극 관리까지 안내받은 내용을 따르는 것이 일반적으로 권장됩니다.",
    "이 글은 회복 기간을 단정하거나 특정 행동을 반드시 금지·허용한다고 안내하는 자료가 아니며, 일상생활에서 확인하면 도움이 되는 항목을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "당일 활동 범위",
      text: "당일 이동, 앉기, 눕는 자세 관련 안내를 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "복장·자극 관리",
      text: "조이는 옷이나 외부 자극을 피하는 방법을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "활동 재개 시점",
      text: "운동이나 일상 복귀 시점을 상담에서 확인합니다.",
    },
  ],
  sections: [
    {
      id: "daily-first-day",
      order: 1,
      numberLabel: "01",
      heading: "시술 당일에는 어떤 점을 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "이동 방법, 앉거나 눕는 자세, 시술 부위에 가해지는 압박을 안내받은 내용에 따라 확인하는 것이 좋습니다.",
      paragraphs: [
        "귀가 방법이나 당일 활동 범위는 의료기관에서 개별적으로 안내하는 내용을 따르는 것이 안전합니다. 안내받은 내용이 불명확하다면 시술 당일 다시 질문해 확인하는 것이 좋습니다.",
      ],
      bullets: [
        "귀가 시 이동 방법과 자세",
        "앉거나 눕는 자세에 대한 안내",
        "당일 시술 부위에 가해지는 압박 여부",
        "당일 다시 병원에 연락해야 하는 경우",
      ],
    },
    {
      id: "daily-clothing",
      order: 2,
      numberLabel: "02",
      heading: "복장이나 외부 자극은 어떻게 관리하나요?",
      layout: "prose",
      directAnswer:
        "시술 부위를 조이거나 마찰이 생기는 복장, 강한 외부 자극은 안내받은 기간 동안 피하는 것이 일반적으로 권장됩니다.",
      paragraphs: [
        "구체적으로 어떤 복장이나 활동을 피해야 하는지는 개인의 시술 범위와 의료기관의 안내에 따라 다를 수 있습니다. 이 글에서 일률적인 기준을 제시하지 않으므로, 안내받은 내용을 우선으로 따르는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.compressionMassage,
      relatedLabel: "압박·마사지 확인 항목 보기",
    },
    {
      id: "daily-return",
      order: 3,
      numberLabel: "03",
      heading: "운동이나 일상 활동은 언제부터 재개하나요?",
      layout: "prose",
      directAnswer:
        "운동이나 격렬한 활동 재개 시점은 개인의 회복 상태와 시술 범위에 따라 다를 수 있어 상담에서 직접 확인하는 것이 정확합니다.",
      paragraphs: [
        "이 글에서 특정 일수를 기준으로 재개 시점을 단정하지 않습니다. 유지·회복기간과 관련된 일반적인 흐름은 관련 안내에서 함께 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "유지·회복기간 안내 보기",
    },
  ],
  faqs: [
    {
      id: "daily-faq-01",
      order: 1,
      question: "시술 당일 바로 앉아서 이동해도 되나요?",
      answer:
        "당일 자세와 이동 방법은 의료기관에서 개별적으로 안내하는 내용을 따르는 것이 안전합니다. 시술 부위와 범위에 따라 확인해야 할 사항이 다를 수 있으므로, 이 글로 단정하지 말고 당일 안내를 우선으로 확인해 주세요.",
      categories: ["precautions"],
    },
    {
      id: "daily-faq-02",
      order: 2,
      question: "일상 활동은 며칠 후부터 가능한가요?",
      answer:
        "회복 속도는 개인차가 있어 특정 일수로 단정하기 어렵습니다. 안내받은 주의사항을 따르면서 경과를 지켜보고, 궁금한 점은 사후 확인 일정에서 의료진에게 질문하는 것이 정확합니다.",
      categories: ["precautions"],
    },
    {
      id: "daily-faq-03",
      order: 3,
      question: "일상복 중에 특별히 피해야 할 옷이 있나요?",
      answer:
        "시술 부위를 조이거나 마찰이 생기는 복장은 안내받은 기간 동안 피하는 것이 일반적으로 권장됩니다. 구체적인 기준은 개인 상태와 의료기관 안내에 따라 다를 수 있으므로 상담에서 확인하는 것이 좋습니다.",
      categories: ["precautions"],
    },
    {
      id: "daily-faq-04",
      order: 4,
      question: "시술 후 바로 출근하거나 등교해도 되나요?",
      answer:
        "직업이나 활동의 성격에 따라 확인해야 할 사항이 달라질 수 있습니다. 오래 앉아 있거나 신체 활동이 많은 경우라면 상담에서 미리 안내를 받아 두는 것이 도움이 됩니다.",
      categories: ["precautions"],
    },
    {
      id: "daily-faq-05",
      order: 5,
      question: "일상생활 중 이상한 느낌이 들면 어떻게 하나요?",
      answer:
        "예상보다 심한 통증이나 붓기, 피부색 변화 등이 느껴진다면 자가로 판단하지 말고 의료기관에 문의하는 것이 안전합니다. 관련 이상증상 확인 기준은 시술 후 이상증상 안내에서 함께 확인할 수 있습니다.",
      categories: ["precautions"],
      relatedSlug: "골반필러-시술-후-이상증상",
      relatedLabel: "시술 후 이상증상 확인 보기",
    },
  ],
  faqTitle: "골반필러 시술 후 일상생활 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "compression", href: ROUTES.compressionMassage, label: "압박·마사지", anchor: "압박·마사지 확인 항목" },
    { id: "after-symptoms", href: ROUTES.afterSymptoms, label: "시술 후 이상증상", anchor: "시술 후 이상증상 확인" },
    { id: "recovery", href: ROUTES.recovery, label: "유지·회복기간", anchor: "유지·회복기간 안내" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 회복 기간이나 활동 재개 시점을 단정하는 자료가 아닙니다. 구체적인 사항은 의료기관의 안내와 상담을 통해 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 시술 후 일상생활, 무엇을 확인해야 하나요? | 필러가이드",
    description:
      "골반필러 시술 후 당일 활동 범위, 복장 관리, 운동 재개 시점을 일상생활에서 어떻게 확인해야 하는지 안내합니다.",
    keywords: ["골반필러 시술 후", "골반필러 일상생활", "골반필러 회복", "필러 시술 후 생활"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 시술 후 일상생활",
    description: "시술 후 당일 활동, 복장 관리, 활동 재개 시점 확인 방법을 안내합니다.",
    href: ROUTES.dailyLifeAfter,
  },
};
