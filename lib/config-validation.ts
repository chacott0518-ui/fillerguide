import { CONTACT } from "@/config/contact";
import { FORMS } from "@/config/forms";
import { LEGAL } from "@/config/legal";
import { getSiteUrl, isLocalhostUrl } from "@/lib/site-url";

export type ConfigValidationIssue = {
  level: "error" | "warning";
  message: string;
};

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * production 배포 전 설정 안전 검증.
 * 개발 환경에서는 경고만 출력할 수 있다.
 */
export function validateSiteConfig(): ConfigValidationIssue[] {
  const issues: ConfigValidationIssue[] = [];

  if (FORMS.enabled && FORMS.provider === "none") {
    issues.push({
      level: "error",
      message: "상담폼이 활성화됐지만 provider가 none입니다.",
    });
  }

  if (FORMS.enabled && !FORMS.privacyConsentRequired) {
    issues.push({
      level: "error",
      message: "상담폼 활성화 시 개인정보 수집 동의가 필요합니다.",
    });
  }

  if (FORMS.enabled && !LEGAL.privacyPolicy.enabled) {
    issues.push({
      level: "error",
      message: "상담폼 활성화 시 개인정보 처리방침을 활성화해야 합니다.",
    });
  }

  if (FORMS.enabled && FORMS.provider === "google-sheets") {
    if (!process.env.GOOGLE_SHEETS_WEB_APP_URL?.trim()) {
      issues.push({
        level: "error",
        message: "Google Sheets provider에 GOOGLE_SHEETS_WEB_APP_URL이 필요합니다.",
      });
    }
  }

  if (FORMS.enabled && FORMS.provider === "supabase") {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()) {
      issues.push({
        level: "error",
        message: "Supabase provider에 NEXT_PUBLIC_SUPABASE_URL이 필요합니다.",
      });
    }
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()) {
      issues.push({
        level: "error",
        message: "Supabase provider에 SUPABASE_SERVICE_ROLE_KEY가 필요합니다.",
      });
    }
  }

  try {
    const siteUrl = getSiteUrl();
    if (!isValidUrl(siteUrl)) {
      issues.push({
        level: "error",
        message: "Site URL 형식이 올바르지 않습니다.",
      });
    }
    if (process.env.VERCEL_ENV === "production" && isLocalhostUrl(siteUrl)) {
      issues.push({
        level: "error",
        message:
          "Vercel production에서 Site URL이 localhost입니다. NEXT_PUBLIC_SITE_URL을 실제 운영 도메인으로 설정하세요.",
      });
    }
  } catch (error) {
    issues.push({
      level: "error",
      message:
        error instanceof Error
          ? error.message
          : "Site URL을 결정할 수 없습니다.",
    });
  }

  if (CONTACT.kakaoEnabled && CONTACT.kakaoUrl && !isValidUrl(CONTACT.kakaoUrl)) {
    issues.push({
      level: "error",
      message: "카카오 문의 URL 형식이 올바르지 않습니다.",
    });
  }

  return issues;
}

export function assertProductionConfig(): void {
  if (process.env.NODE_ENV !== "production") return;

  const errors = validateSiteConfig().filter((i) => i.level === "error");
  if (errors.length > 0) {
    throw new Error(
      `설정 오류:\n${errors.map((e) => `- ${e.message}`).join("\n")}`,
    );
  }
}
