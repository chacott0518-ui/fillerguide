export const ROUTES = {
  home: "/",
  cost: "/골반필러-가격-비용",
  recovery: "/골반필러-유지-회복기간",
  precautions: "/골반필러-주의사항",
  hospital: "/골반필러-병원선택",
  reviews: "/골반필러-후기",
  faq: "/골반필러-자주묻는질문",
  consultationChecklist: "/골반필러-상담-전-확인사항",
  infoHub: "/의료정보",
  medicationCheck: "/골반필러-시술-전-복용약-확인",
  allergyHistoryCheck: "/골반필러-알레르기-과거병력-확인",
  consultationQuestions: "/골반필러-상담-질문",
  desiredShapeCommunication: "/골반필러-원하는-모양-전달",
  procedureProcess: "/골반필러-시술-과정",
  injectionSiteDecision: "/골반필러-주입-부위-결정",
  designConsultation: "/골반필러-디자인-상담",
  productIngredientCheck: "/골반필러-제품-성분-확인",
  dailyLifeAfter: "/골반필러-시술-후-일상생활",
  compressionMassage: "/골반필러-압박-마사지",
  leftRightDifference: "/골반필러-좌우-차이-확인",
  shapeChangeObservation: "/골반필러-모양-변화-관찰",
  retouchTiming: "/골반필러-재시술-상담-시점",
  afterSymptoms: "/골반필러-시술-후-이상증상",
  adInfoCheck: "/골반필러-광고-정보-확인",
  medicalInfoCheck: "/골반필러-의료정보-확인-방법",
} as const;

/** 기존 구사이트 URL 리디렉션은 사용하지 않는다. */
export const LEGACY_REDIRECTS: Record<string, string> = {};

export type RouteKey = keyof typeof ROUTES;
