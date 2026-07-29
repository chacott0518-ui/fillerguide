export type ConsultationProvider = "none" | "google-sheets" | "supabase";

export type IntegrationsConfig = {
  googleAnalyticsId?: string;
  metaPixelId?: string;
  naverAnalyticsId?: string;
};
