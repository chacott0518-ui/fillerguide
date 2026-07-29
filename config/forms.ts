import type { FormsConfig } from "@/types/forms";

/**
 * 상담폼 설정. 현재 비활성. 활성화 시 docs/CONSULTATION-FORM-INTEGRATION.md 참고.
 */
export const FORMS: FormsConfig = {
  enabled: false,
  provider: "none",
  mode: "modal",
  title: "문의하기",
  description: "문의 내용을 남겨 주시면 연락드리겠습니다.",
  submitLabel: "보내기",
  successMessage: "문의가 접수되었습니다.",
  fields: [
    { id: "name", label: "이름 또는 호칭", required: true },
    { id: "phone", label: "연락처", required: true },
    { id: "contactMethod", label: "선호 연락 방법", required: false },
    { id: "message", label: "문의 내용", required: true },
  ],
  privacyConsentRequired: true,
  marketingConsentEnabled: false,
  collectHealthInformation: false,
  rateLimitEnabled: true,
  honeypotEnabled: true,
  captchaProvider: "none",
};
