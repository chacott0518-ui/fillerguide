import type { ConsultationProvider } from "@/types/integrations";

export type ConsultationFieldType =
  | "name"
  | "phone"
  | "contactMethod"
  | "message";

export type ConsultationField = {
  id: ConsultationFieldType;
  label: string;
  required: boolean;
};

export type FormsConfig = {
  enabled: boolean;
  provider: ConsultationProvider;
  mode: "modal" | "page";
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  fields: ConsultationField[];
  privacyConsentRequired: boolean;
  marketingConsentEnabled: boolean;
  collectHealthInformation: boolean;
  endpoint?: string;
  rateLimitEnabled: boolean;
  honeypotEnabled: boolean;
  captchaProvider: "none" | "turnstile" | "recaptcha";
};
