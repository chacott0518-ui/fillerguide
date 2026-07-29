import { CONTACT } from "@/config/contact";

/**
 * 문의·제휴 CTA 설정.
 * mode: partnership(기본) | sponsor(광고주 확정 후)
 */
export const ADVERTISING = {
  mode: "partnership" as "partnership" | "sponsor",
  top: {
    label: "필러가이드 정보 콘텐츠",
    headline: "골반필러 관련 콘텐츠 제휴를 검토하고 계신가요?",
    description:
      "필러가이드 콘텐츠 제휴와 의료기관 정보 등록에 관한 문의를 접수합니다.",
    kakaoButton: "제휴문의",
  },
  bottom: {
    label: "필러가이드 정보 콘텐츠",
    headline: "골반필러 관련 콘텐츠 제휴를 검토하고 계신가요?",
    description:
      "필러가이드 콘텐츠 제휴와 의료기관 정보 등록에 관한 문의를 접수합니다.",
    kakaoButton: "제휴문의",
  },
  get ctaUrl() {
    return CONTACT.kakaoUrl;
  },
  desktopLabel: "카카오톡 제휴문의",
  get desktopUrl() {
    return CONTACT.kakaoUrl;
  },
  mobileKakaoLabel: "카카오톡 제휴문의",
} as const;
