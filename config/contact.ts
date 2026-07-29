import type { ContactConfig } from "@/types/contact";

/**
 * 문의·연락·위치 설정. 헤더, 모바일 하단 바, CTA, 지도에서 이 값을 읽는다.
 * phoneTel은 tel: 링크에만 사용하며 화면 텍스트로 노출하지 않는다.
 */
export const CONTACT: ContactConfig = {
  enabled: true,
  mode: "partnership",
  kakaoEnabled: true,
  kakaoUrl:
    process.env.NEXT_PUBLIC_KAKAO_AD_URL?.trim() ||
    "http://pf.kakao.com/_DSgxfb/chat",
  kakaoLabel: "카카오톡 제휴문의",
  phoneTel:
    process.env.NEXT_PUBLIC_PHONE_TEL?.trim() || "02-739-5415",
  formEnabled: false,
  formLabel: "문의하기",
  clinicName: "제휴 의료기관",
  address: "제휴 의료기관 위치 정보는 확인 후 업데이트됩니다.",
  locationNote:
    "의료기관 제휴 및 정보 등록은 필러가이드 제휴문의를 이용해 주세요.",
  naverMapUrl: "",
  googleMapsEmbedUrl: "",
};
