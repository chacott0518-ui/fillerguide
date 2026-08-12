import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { MFDS_FILLER_SAFE_USE, MFDS_FILLER_SAFETY } from "@/content/info-guides/shared-sources";
import type { InfoGuide } from "@/types/info-guide";

const PUBLISHED = "2026-08-12T00:00:00+09:00";

export const AFTER_SYMPTOMS_GUIDE: InfoGuide = {
  id: "after-symptoms",
  slug: "골반필러-시술-후-이상증상",
  href: ROUTES.afterSymptoms,
  categoryLabel: "안전·주의",
  h1: "골반필러 시술 후 이상증상이 있을 때 무엇을 확인해야 하나요?",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  intro: [
    "시술 후에는 안내받은 일반적인 반응과 구분해, 예상보다 심하거나 지속되는 변화가 있는지 확인하는 것이 중요합니다. 심한 붓기, 지속되는 통증, 피부색 변화, 감염 의심 증상은 자가로 판단하지 말고 의료기관에 확인해야 합니다.",
    "이 글은 이상증상을 자가로 진단하거나 처치하는 방법을 안내하는 자료가 아닙니다. 응급 가능성이 있는 증상은 지체하지 말고 의료기관의 안내를 따라야 합니다.",
  ],
  firstCheckTitle: "먼저 확인할 내용",
  firstCheckItems: [
    {
      numberLabel: "01",
      title: "심한 붓기",
      text: "안내받은 정도를 벗어나 계속 악화되는 붓기를 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "지속되는 통증",
      text: "예상보다 심하거나 시간이 지나도 줄지 않는 통증을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "피부색 변화·감염 의심",
      text: "뚜렷한 피부색 변화, 발열, 감염 의심 증상을 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "재연락 시점",
      text: "의료기관에 다시 연락해야 하는 상황을 미리 알아둡니다.",
    },
  ],
  sections: [
    {
      id: "symptoms-general",
      order: 1,
      numberLabel: "01",
      heading: "일반적인 반응과 이상증상은 어떻게 구분하나요?",
      layout: "prose",
      directAnswer:
        "붓기, 멍, 가벼운 통증, 압통처럼 안내받은 범위의 반응과 달리, 예상보다 심하거나 시간이 지나도 나아지지 않는 변화는 이상증상으로 확인이 필요할 수 있습니다.",
      paragraphs: [
        "시술 후 일정 기간 나타날 수 있는 반응은 상담이나 시술 후 안내에서 설명받는 것이 일반적입니다. 이런 설명과 다르게, 시간이 지나도 나아지지 않거나 오히려 악화되는 변화가 있다면 별도의 확인이 필요합니다.",
        "자가로 원인을 추측하거나 인터넷 정보로 진단을 대신하기보다, 궁금하거나 걱정되는 변화가 있다면 의료기관에 직접 문의하는 것이 안전합니다.",
      ],
    },
    {
      id: "symptoms-list",
      order: 2,
      numberLabel: "02",
      heading: "어떤 증상을 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "심한 붓기, 지속되는 통증, 피부색의 뚜렷한 변화, 감염이 의심되는 변화가 있다면 의료기관에 확인해야 합니다.",
      paragraphs: [
        "아래 항목은 확인이 필요할 수 있는 상황을 정리한 것으로, 모든 경우를 포함하지는 않습니다. 안내받은 내용과 다르게 느껴지는 변화가 있다면 목록에 없더라도 문의하는 것이 안전합니다.",
      ],
      bullets: [
        "시간이 지나도 가라앉지 않거나 악화되는 붓기",
        "진통제로도 줄지 않는 지속적인 통증",
        "피부색이 뚜렷하게 변하는 경우",
        "발열, 진물, 감염이 의심되는 변화",
        "갑자기 나타나는 심한 이상 증상",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "시술 전후 주의사항 보기",
    },
    {
      id: "symptoms-contact",
      order: 3,
      numberLabel: "03",
      heading: "의료기관에는 언제, 어떻게 다시 연락해야 하나요?",
      layout: "prose",
      directAnswer:
        "위에서 설명한 것처럼 예상보다 심하거나 지속되는 변화가 있다면 임의로 대처하지 말고 시술받은 의료기관에 바로 연락해 확인하는 것이 좋습니다.",
      paragraphs: [
        "시술 후 안내에는 대체로 연락 방법과 응급 상황 시 대응 절차가 포함되는 경우가 많습니다. 이 정보를 미리 확인해 두고, 연락이 어려운 응급 상황이라면 가까운 의료기관의 응급 진료를 받는 것이 안전합니다.",
        "공식 안전 안내에서도 필러 관련 중대한 이상반응 가능성을 언급하며 허가사항 준수와 신속한 의료 평가의 중요성을 강조합니다. 증상이 심하다고 느껴진다면 시간을 지체하지 않는 것이 중요합니다.",
      ],
      relatedHref: ROUTES.consultationChecklist,
      relatedLabel: "상담 전 확인사항 전체 보기",
    },
  ],
  faqs: [
    {
      id: "symptoms-faq-01",
      order: 1,
      question: "붓기가 며칠째 계속되면 무조건 이상증상인가요?",
      answer:
        "붓기 지속 기간은 개인차가 있어 이 글에서 특정 일수를 기준으로 이상증상 여부를 단정하지 않습니다. 다만 시간이 지나도 나아지지 않거나 오히려 악화된다면 자가로 판단하지 말고 의료기관에 확인받는 것이 안전합니다.",
      categories: ["precautions"],
    },
    {
      id: "symptoms-faq-02",
      order: 2,
      question: "통증이 심하면 진통제만 먹어도 되나요?",
      answer:
        "진통제 복용 여부와 방법은 안내받은 내용을 따라야 하며, 임의로 판단해 복용하지 않는 것이 좋습니다. 진통제로도 줄지 않는 지속적인 통증이 있다면 의료기관에 연락해 확인하는 것이 안전합니다.",
      categories: ["precautions"],
    },
    {
      id: "symptoms-faq-03",
      order: 3,
      question: "피부색 변화는 어떤 경우에 의료기관에 알려야 하나요?",
      answer:
        "피부색이 뚜렷하게 변하거나 시간이 지나도 회복되지 않는 경우에는 의료기관에 확인받는 것이 좋습니다. 색 변화의 정도와 원인은 개인마다 다를 수 있어 이 글에서 자가로 판단할 기준을 제시하지 않습니다.",
      categories: ["precautions"],
    },
    {
      id: "symptoms-faq-04",
      order: 4,
      question: "감염이 의심되면 바로 응급실에 가야 하나요?",
      answer:
        "발열, 진물, 심한 통증 등 감염이 의심되는 변화가 있다면 지체하지 말고 시술받은 의료기관에 연락하거나, 연락이 어려운 응급 상황이라면 가까운 의료기관의 응급 진료를 받는 것이 안전합니다. 자가로 원인을 판단하고 대응을 미루지 않는 것이 중요합니다.",
      categories: ["precautions"],
    },
    {
      id: "symptoms-faq-05",
      order: 5,
      question: "이상증상이 걱정돼 시술 전에 미리 확인할 수 있나요?",
      answer:
        "네, 상담에서 예상 가능한 이상반응과 응급 상황 시 연락 방법을 미리 질문해 확인해 둘 수 있습니다. 이렇게 준비해 두면 실제로 궁금한 변화가 생겼을 때 더 빠르게 대처할 수 있습니다.",
      categories: ["consultation", "precautions"],
      relatedSlug: "골반필러-상담-질문",
      relatedLabel: "상담 질문 목록 보기",
    },
  ],
  faqTitle: "골반필러 시술 후 이상증상 FAQ",
  relatedLinks: [
    { id: "hub", href: ROUTES.home, label: "골반필러 메인", anchor: "골반필러 전체 안내" },
    { id: "info-hub", href: ROUTES.infoHub, label: "의료정보 허브", anchor: "골반필러 의료정보 전체보기" },
    { id: "precautions", href: ROUTES.precautions, label: "주의사항", anchor: "시술 전후 주의사항" },
    { id: "compression", href: ROUTES.compressionMassage, label: "압박·마사지", anchor: "압박·마사지 확인 항목" },
    { id: "checklist", href: ROUTES.consultationChecklist, label: "상담 전 확인사항", anchor: "상담 전 확인할 내용" },
  ],
  medicalNotice:
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 이상증상을 자가로 진단하거나 처치하는 방법을 안내하는 자료가 아닙니다. 응급 가능성이 있는 증상은 지체하지 말고 의료기관의 안내를 따라야 합니다.",
  officialSources: [MFDS_FILLER_SAFETY, MFDS_FILLER_SAFE_USE],
  seo: {
    title: "골반필러 시술 후 이상증상, 무엇을 확인해야 하나요? | 필러가이드",
    description:
      "골반필러 시술 후 심한 붓기, 지속되는 통증, 피부색 변화, 감염 의심 등 이상증상을 확인하고 의료기관에 연락해야 할 상황을 안내합니다.",
    keywords: ["골반필러 이상증상", "골반필러 부작용", "골반필러 시술 후 통증", "필러 이상반응"],
    ogImage: "/images/og/pelvic-filler-og.png",
    socialImage: "/images/og/pelvic-filler-og.png",
    category: SITE.categoryLabel,
  },
  preview: {
    title: "골반필러 시술 후 이상증상",
    description: "심한 붓기, 통증, 피부색 변화, 감염 의심 등 확인이 필요한 이상증상을 안내합니다.",
    href: ROUTES.afterSymptoms,
  },
};
