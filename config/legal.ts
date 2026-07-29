import type { LegalConfig } from "@/types/legal";

/**
 * 법률 문서 링크. enabled=true이고 href가 있을 때만 화면·sitemap에 포함한다.
 */
export const LEGAL: LegalConfig = {
  privacyPolicy: {
    enabled: false,
  },
  terms: {
    enabled: false,
  },
  nonCoveredFees: {
    enabled: false,
  },
  operatorDisclosure: {
    enabled: false,
  },
  cookieNotice: {
    enabled: false,
  },
};
