import { FORMS } from "@/config/forms";
import type { ConsultationPayload, ConsultationResult } from "@/lib/forms/types";
import { validateConsultationPayload } from "@/lib/forms/validation";

/**
 * 상담폼 provider 라우터. 현재 비활성 — 활성화 시 API route에서 호출.
 */
export async function submitConsultation(
  payload: ConsultationPayload,
): Promise<ConsultationResult> {
  if (!FORMS.enabled) {
    return { ok: false, error: "상담폼이 비활성화되어 있습니다." };
  }

  const validationError = validateConsultationPayload(payload);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  switch (FORMS.provider) {
    case "google-sheets":
      return { ok: false, error: "Google Sheets provider가 아직 연결되지 않았습니다." };
    case "supabase":
      return { ok: false, error: "Supabase provider가 아직 연결되지 않았습니다." };
    default:
      return { ok: false, error: "지원하지 않는 provider입니다." };
  }
}
