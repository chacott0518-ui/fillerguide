import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const SHAPE_CHANGE_OBSERVATION_GUIDE: InfoGuide = {
  id: "shape-change-observation",
  slug: "골반필러-모양-변화-관찰",
  href: ROUTES.shapeChangeObservation,
  categoryLabel: "경과·유지",
  h1: "골반필러 후 모양 변화는 어떻게 관찰하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "시술 후 모양은 시간이 지나며 붓기가 가라앉고 조직에 자리 잡는 과정을 거쳐 서서히 안정되는 경우가 일반적으로 안내됩니다. 초기 변화만으로 최종 모양을 판단하기는 이를 수 있습니다.",
    "이 글은 특정 기간에 특정 모양이 된다고 보장하는 자료가 아니며, 경과를 관찰할 때 참고할 수 있는 일반적인 기준을 정리한 정보입니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "관찰 시기 구분",
      text: "초기 붓기 시기와 안정화 시기를 구분해 관찰합니다.",
    },
    {
      numberLabel: "02",
      title: "사진 기록 활용",
      text: "동일 조건에서 사진을 기록해 비교에 참고합니다.",
    },
    {
      numberLabel: "03",
      title: "사후 확인 일정 준수",
      text: "안내받은 사후 확인 일정에 맞춰 상담합니다.",
    },
  ],
  sections: [
    {
      id: "shape-timeline",
      order: 1,
      numberLabel: "01",
      heading: "시기별로 모양은 어떻게 달라질 수 있나요?",
      layout: "prose",
      directAnswer:
        "초기에는 붓기로 인해 실제보다 부풀어 보일 수 있고, 이후 붓기가 가라앉으며 점차 안정된 모양으로 변화하는 흐름이 일반적으로 안내됩니다.",
      paragraphs: [
        "이런 흐름은 일반적인 경향을 설명한 것으로, 정확한 기간과 변화 양상은 개인과 제품, 시술 범위에 따라 다를 수 있습니다. 이 글에서 특정 기간을 기준으로 최종 모양을 단정하지 않습니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "유지·회복기간 안내 보기",
    },
    {
      id: "shape-record",
      order: 2,
      numberLabel: "02",
      heading: "사진 기록은 어떻게 활용하면 좋을까요?",
      layout: "checklist",
      directAnswer:
        "같은 조명과 각도, 자세로 일정한 간격을 두고 사진을 기록해 두면 변화를 비교하는 데 참고가 될 수 있습니다.",
      paragraphs: [
        "다만 사진 비교만으로 결과를 최종 판단하기는 어렵습니다. 궁금한 변화가 있다면 사진과 함께 사후 상담에서 의료진에게 직접 확인하는 것이 정확합니다.",
      ],
      bullets: [
        "동일한 조명과 각도로 촬영",
        "같은 자세를 유지해 비교",
        "일정한 간격을 두고 기록",
        "궁금한 변화는 상담에서 함께 확인",
      ],
    },
    {
      id: "shape-followup",
      order: 3,
      numberLabel: "03",
      heading: "사후 확인은 어떻게 진행되나요?",
      layout: "prose",
      directAnswer:
        "안내받은 사후 확인 일정에 맞춰 상담을 진행하며, 그 시점에 모양과 경과를 함께 확인하는 것이 일반적으로 권장됩니다.",
      paragraphs: [
        "사후 확인 일정이나 방법은 의료기관과 개인 계획에 따라 다를 수 있습니다. 확인 계획이 불명확하다면 시술 직후 상담에서 다시 질문해 명확히 해두는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.retouchTiming,
      relatedLabel: "재시술 상담 시점 확인 항목 보기",
    },
  ],
  faqs: [
    {
      id: "shape-obs-faq-01",
      order: 1,
      question: "시술 직후 모양이 부자연스러워 보이면 문제가 있는 건가요?",
      answer:
        "초기에는 붓기로 인해 실제보다 부풀어 보일 수 있어, 이 시기의 모습만으로 문제가 있다고 단정하기는 어렵습니다. 다만 통증이나 다른 이상 증상이 함께 있다면 자가로 판단하지 말고 의료기관에 확인받는 것이 안전합니다.",
      categories: ["precautions"],
    },
    {
      id: "shape-obs-faq-02",
      order: 2,
      question: "최종 모양은 언제쯤 확인할 수 있나요?",
      answer:
        "정확한 시점을 이 글에서 특정할 수 없습니다. 개인과 시술 범위에 따라 안정화되는 속도가 다를 수 있으므로, 안내받은 사후 확인 일정에 맞춰 의료진과 함께 확인하는 것이 정확합니다.",
      categories: ["precautions"],
    },
    {
      id: "shape-obs-faq-03",
      order: 3,
      question: "사진을 찍을 때 특별히 주의할 점이 있나요?",
      answer:
        "같은 조명, 각도, 자세로 촬영해야 비교가 의미 있어집니다. 조건이 다르면 실제 변화가 아니라 촬영 환경 차이로 다르게 보일 수 있으므로, 가능한 한 동일한 조건을 유지하는 것이 좋습니다.",
      categories: ["precautions"],
    },
    {
      id: "shape-obs-faq-04",
      order: 4,
      question: "모양이 기대와 다르면 바로 재시술을 문의해도 되나요?",
      answer:
        "경과가 충분히 안정되기 전이라면 먼저 시간을 두고 지켜보는 것이 일반적으로 권장됩니다. 재시술 여부와 시점은 상담을 통해 결정해야 할 사항으로, 이 글에서 임의로 판단하지 않습니다.",
      categories: ["precautions"],
      relatedSlug: "골반필러-재시술-상담-시점",
      relatedLabel: "재시술 상담 시점 확인 보기",
    },
    {
      id: "shape-obs-faq-05",
      order: 5,
      question: "모양 변화와 함께 딱딱한 느낌이 있으면 어떻게 하나요?",
      answer:
        "촉감의 변화가 함께 느껴진다면 자가로 원인을 판단하기보다 사후 상담에서 확인받는 것이 좋습니다. 개인차와 시간 경과에 따라 느낌이 달라질 수 있어 이 글에서 원인을 단정하지 않습니다.",
      categories: ["precautions"],
    },
  ],
  faqTitle: "골반필러 모양 변화 관찰 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "left-right", href: ROUTES.leftRightDifference, label: "좌우 차이 확인", anchor: "좌우 차이 확인 항목" },
    { id: "retouch", href: ROUTES.retouchTiming, label: "재시술 상담 시점", anchor: "재시술 상담 시점 확인" },
    { id: "recovery", href: ROUTES.recovery, label: "유지·회복기간", anchor: "유지·회복기간 안내" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 모양 변화의 시기나 최종 결과를 보장하는 자료가 아닙니다. 구체적인 확인은 사후 상담을 통해 의료진과 함께 이뤄져야 합니다.",
  officialSources: [MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 모양 변화 관찰, 어떻게 확인하나요? | 필러가이드",
    description:
      "골반필러 시술 후 시기별 모양 변화, 사진 기록 활용, 사후 확인 일정을 어떻게 관찰해야 하는지 안내합니다.",
    keywords: ["골반필러 모양 변화", "골반필러 경과 관찰", "골반필러 사후관리", "필러 모양 변화"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 모양 변화 관찰",
    description: "시기별 모양 변화와 사진 기록, 사후 확인 방법을 안내합니다.",
    href: ROUTES.shapeChangeObservation,
  },
};
