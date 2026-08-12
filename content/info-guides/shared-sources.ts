import type { OfficialSource } from "@/types/info-guide";

/**
 * 신규 InfoGuide 16개가 공통으로 재사용하는 공식 출처.
 * 새 URL을 임의로 만들지 않고 사양서 allowlist만 사용한다.
 */
export const MFDS_FILLER_SAFETY: OfficialSource = {
  id: "mfds-filler-safety",
  title: "성형용 필러 의료기기 안전성정보",
  publisher: "식품의약품안전처",
  url: "https://mfds.go.kr/brd/m_550/view.do?company_cd=&company_nm=&itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&page=11&seq=200&srchFr=&srchTo=&srchTp=&srchWord=",
  note: "허가사항 준수와 허가된 사용목적 확인의 중요성, 필러 관련 중대한 이상반응 가능성에 대한 일반 안내입니다. 제품별 최신 허가정보는 별도로 확인해야 합니다.",
};

export const MFDS_FILLER_SAFE_USE: OfficialSource = {
  id: "mfds-filler-safe-use",
  title: "성형용 필러 안전사용 안내",
  publisher: "식품의약품안전처",
  url: "https://www.mfds.go.kr/brd/m_465/view.do?company_cd=&company_nm=&itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&page=1&seq=27164&srchFr=&srchTo=&srchTp=&srchWord=",
  note: "필러 시술 전후 확인이 필요한 일반적인 안전 수칙과 이상반응 대응에 대한 공식 안내입니다.",
};

export const MEDICAL_LAW_ARTICLE_56: OfficialSource = {
  id: "medical-law-article-56",
  title: "의료법 제56조(의료광고의 금지 등)",
  publisher: "국가법령정보센터",
  url: "https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032849723",
  note: "의료광고에서 금지되는 표현과 확인이 필요한 사항에 대한 법적 근거입니다. 광고 정보를 확인할 때 참고할 수 있습니다.",
};

export const FDA_DERMAL_FILLERS: OfficialSource = {
  id: "fda-dermal-fillers",
  title: "Dermal Fillers (Soft Tissue Fillers)",
  publisher: "U.S. Food and Drug Administration",
  url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers",
  note: "필러 일반 위험과 시술 전 확인의 중요성, 제품별 허가 목적 확인 필요성 등 일반 안전 안내입니다. FDA 자료를 대한민국 특정 제품의 허가 근거로 사용하지 않습니다.",
};
