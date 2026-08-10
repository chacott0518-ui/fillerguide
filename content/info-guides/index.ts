import { CONSULTATION_CHECKLIST_GUIDE } from "@/content/info-guides/consultation-checklist";
import type { InfoGuide } from "@/types/info-guide";
import { assertOfficialSources } from "@/types/info-guide";

/** 홈 정보 레이어·sitemap·RSS·정적 생성에 사용하는 확장형 정보글 */
export const INFO_GUIDES: InfoGuide[] = [CONSULTATION_CHECKLIST_GUIDE];

for (const guide of INFO_GUIDES) {
  assertOfficialSources(guide);
}

export function getInfoGuideBySlug(slug: string): InfoGuide | undefined {
  const normalized = slug.normalize("NFC");
  return INFO_GUIDES.find((guide) => guide.slug.normalize("NFC") === normalized);
}

export function getInfoGuideById(id: string): InfoGuide | undefined {
  return INFO_GUIDES.find((guide) => guide.id === id);
}

export const INFO_GUIDE_PREVIEWS = INFO_GUIDES.map((guide) => guide.preview);
