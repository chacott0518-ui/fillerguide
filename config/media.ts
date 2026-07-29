import type { ContentClusterId, ContentImage } from "@/types/content";

export type TopicMedia = {
  id: ContentClusterId;
  thumbnail: ContentImage;
  secondaryImage: ContentImage;
  imageAlt: string;
  secondaryImageAlt: string;
  accentColor: string;
  accentHoverColor: string;
  mobileCardDescription: string;
};

function img(src: string, alt: string, w: number, h: number): ContentImage {
  return { src, alt, width: w, height: h };
}

const BASE = "/images/pelvic-filler";
const CARD_W = 800;
const CARD_H = 800;
const BODY_W = 800;
const BODY_H = 800;
const MAIN_W = 1200;
const MAIN_H = 1200;

export const TOPIC_MEDIA: Record<ContentClusterId, TopicMedia> = {
  cost: {
    id: "cost",
    imageAlt: "골반필러 가격 및 비용 안내 이미지",
    secondaryImageAlt: "골반필러 가격 및 비용 본문 이미지",
    accentColor: "#d99500",
    accentHoverColor: "#b77e00",
    mobileCardDescription: "가격과 비용 확인 기준",
    thumbnail: img(
      `${BASE}/골반필러-가격비용.webp`,
      "골반필러 가격 및 비용 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-가격비용.webp`,
      "골반필러 가격 및 비용 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
  recovery: {
    id: "recovery",
    imageAlt: "골반필러 유지 및 회복기간 안내 이미지",
    secondaryImageAlt: "골반필러 유지 및 회복기간 본문 이미지",
    accentColor: "#876d3b",
    accentHoverColor: "#5f4c26",
    mobileCardDescription: "유지 및 회복 흐름 확인",
    thumbnail: img(
      `${BASE}/골반필러-유지회복기간.webp`,
      "골반필러 유지 및 회복기간 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-유지회복기간.webp`,
      "골반필러 유지 및 회복기간 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
  precautions: {
    id: "precautions",
    imageAlt: "골반필러 주의사항 안내 이미지",
    secondaryImageAlt: "골반필러 주의사항 본문 이미지",
    accentColor: "#b6534d",
    accentHoverColor: "#93413d",
    mobileCardDescription: "시술 전후 주의사항 정리",
    thumbnail: img(
      `${BASE}/골반필러-주의사항.webp`,
      "골반필러 주의사항 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-주의사항.webp`,
      "골반필러 주의사항 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
  hospital: {
    id: "hospital",
    imageAlt: "골반필러 병원선택 안내 이미지",
    secondaryImageAlt: "골반필러 병원선택 본문 이미지",
    accentColor: "#367b61",
    accentHoverColor: "#275a47",
    mobileCardDescription: "병원선택 기준 확인",
    thumbnail: img(
      `${BASE}/골반필러-병원선택.webp`,
      "골반필러 병원선택 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-병원선택.webp`,
      "골반필러 병원선택 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
  reviews: {
    id: "reviews",
    imageAlt: "골반필러 후기 확인 안내 이미지",
    secondaryImageAlt: "골반필러 후기 확인 본문 이미지",
    accentColor: "#c9824a",
    accentHoverColor: "#a66434",
    mobileCardDescription: "후기 확인 포인트 정리",
    thumbnail: img(
      `${BASE}/골반필러-후기.webp`,
      "골반필러 후기 확인 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-후기.webp`,
      "골반필러 후기 확인 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
  faq: {
    id: "faq",
    imageAlt: "골반필러 FAQ 안내 이미지",
    secondaryImageAlt: "골반필러 FAQ 본문 이미지",
    accentColor: "#8c6a2d",
    accentHoverColor: "#6a4e21",
    mobileCardDescription: "자주 묻는 질문 모음",
    thumbnail: img(
      `${BASE}/골반필러-FAQ.webp`,
      "골반필러 FAQ 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-FAQ.webp`,
      "골반필러 FAQ 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
  faqHub: {
    id: "faqHub",
    imageAlt: "골반필러 FAQ 안내 이미지",
    secondaryImageAlt: "골반필러 FAQ 본문 이미지",
    accentColor: "#8c6a2d",
    accentHoverColor: "#6a4e21",
    mobileCardDescription: "자주 묻는 질문 모음",
    thumbnail: img(
      `${BASE}/골반필러-FAQ.webp`,
      "골반필러 FAQ 안내 이미지",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${BASE}/골반필러-FAQ.webp`,
      "골반필러 FAQ 본문 이미지",
      BODY_W,
      BODY_H,
    ),
  },
};

export const HOME_FEATURE_IMAGE: ContentImage = img(
  `${BASE}/골반필러-메인썸네일.webp`,
  "골반필러 메인 대표 이미지",
  MAIN_W,
  MAIN_H,
);

export const HOME_OG_IMAGE: ContentImage = img(
  `${BASE}/골반필러-카카오톡-OG.png`,
  "골반필러 필러가이드 공유 이미지",
  1200,
  630,
);

export function getTopicMedia(id: ContentClusterId): TopicMedia {
  return TOPIC_MEDIA[id];
}
