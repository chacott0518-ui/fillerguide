export const ROUTES = {
  home: "/",
  cost: "/골반필러-가격-비용",
  recovery: "/골반필러-유지-회복기간",
  precautions: "/골반필러-주의사항",
  hospital: "/골반필러-병원선택",
  reviews: "/골반필러-후기",
  faq: "/골반필러-자주묻는질문",
} as const;

/** 기존 구사이트 URL 리디렉션은 사용하지 않는다. */
export const LEGACY_REDIRECTS: Record<string, string> = {};

export type RouteKey = keyof typeof ROUTES;
