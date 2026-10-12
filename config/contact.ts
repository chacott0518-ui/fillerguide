import type { ContactConfig } from "@/types/contact";

/**
 * 문의·연락·위치 설정. 헤더, 모바일 하단 바, CTA, 지도에서 이 값을 읽는다.
 * phoneTel은 tel: 링크에만 사용하며 화면 텍스트로 노출하지 않는다.
 *
 * TODO: 실제 제휴 병원 확정 후 병원명/주소/전화/상담 CTA/네이버플레이스/카카오채널/Schema 반영.
 * 현재는 광고·콘텐츠 제휴 문의용이며, 특정 의료기관 예약·진료를 의미하지 않는다.
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
  clinicName: "의료기관 정보 미등록",
  address: "실제 제휴 병원 확정 후 주소·지도가 표시됩니다.",
  locationNote:
    "필러가이드는 정보 사이트입니다. 병원 제휴 확정 전까지 특정 의료기관 위치를 안내하지 않습니다.",
  naverMapUrl: "",
  googleMapsEmbedUrl: "",
};
