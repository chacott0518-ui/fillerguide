export type ContactMode = "partnership" | "medical" | "disabled";

export type ContactConfig = {
  enabled: boolean;
  mode: ContactMode;
  kakaoEnabled: boolean;
  kakaoUrl: string;
  kakaoLabel: string;
  /** tel: 링크 전용. 화면 문구로 노출하지 않는다. */
  phoneTel: string;
  formEnabled: boolean;
  formLabel: string;
  clinicName: string;
  address: string;
  locationNote: string;
  naverMapUrl: string;
  googleMapsEmbedUrl: string;
};
