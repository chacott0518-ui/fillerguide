import type { ConsultationPayload } from "@/lib/forms/types";

const MAX_NAME = 50;
const MAX_PHONE = 20;
const MAX_MESSAGE = 2000;

export function validateConsultationPayload(
  payload: ConsultationPayload,
): string | null {
  if (payload.honeypot) {
    return "잘못된 요청입니다.";
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();

  if (!name || name.length > MAX_NAME) {
    return "이름을 확인해 주세요.";
  }

  if (!phone || phone.length > MAX_PHONE) {
    return "연락처를 확인해 주세요.";
  }

  if (!message || message.length > MAX_MESSAGE) {
    return "문의 내용을 확인해 주세요.";
  }

  return null;
}
