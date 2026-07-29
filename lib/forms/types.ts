export type { ConsultationField, FormsConfig } from "@/types/forms";
export type { ConsultationProvider } from "@/types/integrations";

export type ConsultationPayload = {
  name?: string;
  phone?: string;
  contactMethod?: string;
  message?: string;
  honeypot?: string;
};

export type ConsultationResult =
  | { ok: true }
  | { ok: false; error: string };
