import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const LEFT_RIGHT_DIFFERENCE_GUIDE: InfoGuide = {
  id: "left-right-difference",
  slug: "골반필러-좌우-차이-확인",
  href: ROUTES.leftRightDifference,
  categoryLabel: "경과·유지",
  h1: "골반필러 후 좌우 차이가 느껴질 때 무엇을 확인하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "시술 후 일정 기간 동안 붓기가 가라앉는 속도가 좌우로 다르게 느껴질 수 있습니다. 이 시기의 차이를 최종 결과로 단정하기보다 경과를 지켜보는 것이 일반적으로 안내됩니다.",
    "이 글은 좌우 차이의 원인을 임의로 진단하는 자료가 아니며, 확인이 필요한 상황과 관찰 방법을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "경과 시점 확인",
      text: "붓기가 가라앉는 초기 단계인지 먼저 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "원래 체형과 비교",
      text: "시술 전에도 좌우 차이가 있었는지 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "지속 여부 관찰",
      text: "시간이 지나도 차이가 지속되는지 관찰합니다.",
    },
  ],
  sections: [
    {
      id: "lr-early",
      order: 1,
      numberLabel: "01",
      heading: "시술 직후 느껴지는 좌우 차이는 왜 생길 수 있나요?",
      layout: "prose",
      directAnswer:
        "시술 직후에는 붓기가 가라앉는 속도가 좌우로 다를 수 있어, 이 시기의 차이만으로 최종 결과를 판단하기는 이르다고 안내되는 경우가 일반적입니다.",
      paragraphs: [
        "주입 후 초기에는 부위별로 붓기와 반응이 다르게 나타날 수 있습니다. 이런 이유로 많은 안내에서는 일정 기간이 지난 후 경과를 확인하도록 권장합니다. 정확한 관찰 기간은 개인 상태에 따라 다를 수 있어 이 글에서 특정 일수를 단정하지 않습니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "유지·회복기간 안내 보기",
    },
    {
      id: "lr-original",
      order: 2,
      numberLabel: "02",
      heading: "원래 체형의 좌우 차이도 영향을 줄 수 있나요?",
      layout: "prose",
      directAnswer:
        "네, 시술 전부터 존재하던 골격이나 체형의 좌우 차이가 시술 후에도 함께 나타날 수 있습니다.",
      paragraphs: [
        "완전한 대칭을 타고난 사람은 드물기 때문에, 시술 전 상담에서 본인의 좌우 상태를 미리 확인해 두면 시술 후 변화를 이해하는 데 도움이 됩니다. 디자인 상담 단계에서 이 부분을 논의했다면 그 내용을 참고할 수 있습니다.",
      ],
      relatedHref: ROUTES.designConsultation,
      relatedLabel: "디자인 상담 확인 항목 보기",
    },
    {
      id: "lr-monitor",
      order: 3,
      numberLabel: "03",
      heading: "차이가 계속되면 어떻게 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "일정 기간이 지나도 차이가 뚜렷하게 지속되거나 점점 커진다면 자가로 판단하지 말고 의료기관에 경과를 확인받는 것이 좋습니다.",
      paragraphs: [
        "사진으로 스스로 비교해보는 것도 참고가 될 수 있지만, 정확한 평가는 의료진의 확인을 통해 이뤄져야 합니다.",
      ],
      bullets: [
        "붓기가 가라앉는 초기 단계인지 먼저 고려",
        "시술 전 원래 체형 차이와 비교",
        "일정 기간 후에도 차이가 지속되는지 관찰",
        "지속되거나 커지면 의료기관에 확인",
      ],
      relatedHref: ROUTES.shapeChangeObservation,
      relatedLabel: "모양 변화 관찰 항목 보기",
    },
  ],
  faqs: [
    {
      id: "lr-faq-01",
      order: 1,
      question: "시술 직후 좌우가 다르게 느껴지는 것은 정상인가요?",
      answer:
        "시술 직후에는 붓기가 가라앉는 속도가 좌우로 다르게 느껴질 수 있다고 일반적으로 안내됩니다. 다만 이를 정상 또는 비정상으로 이 글에서 단정하지는 않으며, 경과를 지켜보면서 궁금한 점은 의료기관에 문의하는 것이 안전합니다.",
      categories: ["precautions"],
    },
    {
      id: "lr-faq-02",
      order: 2,
      question: "얼마나 기다려야 좌우 차이를 판단할 수 있나요?",
      answer:
        "특정 일수를 이 글에서 기준으로 제시하지 않습니다. 회복 속도는 개인차가 있으므로, 상담에서 안내받은 경과 확인 일정을 따르고 그 시점에 맞춰 확인하는 것이 정확합니다.",
      categories: ["precautions"],
    },
    {
      id: "lr-faq-03",
      order: 3,
      question: "원래도 좌우가 달랐다면 시술 후 더 신경 써야 하나요?",
      answer:
        "시술 전 좌우 차이가 있었다면 상담에서 미리 이야기하고, 이후 변화도 그 맥락에서 함께 살펴보는 것이 도움이 됩니다. 이 글에서 특정 관리 방법을 제시하지는 않으며, 궁금한 점은 사후 상담에서 확인하는 것이 좋습니다.",
      categories: ["precautions", "consultation"],
    },
    {
      id: "lr-faq-04",
      order: 4,
      question: "좌우 차이를 재시술로 바로 조정할 수 있나요?",
      answer:
        "가능 여부와 시점은 개인 상태와 경과에 따라 다를 수 있어 이 글에서 단정할 수 없습니다. 재시술 상담이 필요한 시점과 방법은 별도 안내에서 확인할 수 있으며, 먼저 의료기관과 경과를 상의하는 것이 우선입니다.",
      categories: ["precautions"],
      relatedSlug: "골반필러-재시술-상담-시점",
      relatedLabel: "재시술 상담 시점 확인 보기",
    },
    {
      id: "lr-faq-05",
      order: 5,
      question: "좌우 차이가 통증을 동반하면 어떻게 하나요?",
      answer:
        "차이와 함께 통증이나 다른 이상 증상이 있다면 자가로 원인을 판단하지 말고 의료기관에 바로 문의하는 것이 안전합니다. 관련 확인 기준은 시술 후 이상증상 안내에서 함께 볼 수 있습니다.",
      categories: ["precautions"],
      relatedSlug: "골반필러-시술-후-이상증상",
      relatedLabel: "시술 후 이상증상 확인 보기",
    },
  ],
  faqTitle: "골반필러 좌우 차이 확인 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "shape-observe", href: ROUTES.shapeChangeObservation, label: "모양 변화 관찰", anchor: "모양 변화 관찰 방법" },
    { id: "retouch", href: ROUTES.retouchTiming, label: "재시술 상담 시점", anchor: "재시술 상담 시점 확인" },
    { id: "recovery", href: ROUTES.recovery, label: "유지·회복기간", anchor: "유지·회복기간 안내" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 좌우 차이의 원인을 진단하거나 결과를 단정하는 자료가 아닙니다. 지속되는 차이는 의료기관에서 직접 확인해야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 좌우 차이 확인, 무엇을 봐야 하나요? | 필러가이드",
    description:
      "골반필러 시술 후 좌우 차이가 느껴질 때 경과 시점, 원래 체형과의 비교, 지속 여부를 확인하는 방법을 안내합니다.",
    keywords: ["골반필러 좌우 차이", "골반필러 비대칭", "골반필러 경과", "필러 좌우 차이"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 좌우 차이 확인",
    description: "시술 후 좌우 차이가 느껴질 때 경과와 지속 여부를 확인하는 방법을 안내합니다.",
    href: ROUTES.leftRightDifference,
  },
};
