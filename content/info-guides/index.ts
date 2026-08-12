import { AD_INFO_CHECK_GUIDE } from "@/content/info-guides/ad-info-check";
import { AFTER_SYMPTOMS_GUIDE } from "@/content/info-guides/after-symptoms";
import { ALLERGY_HISTORY_CHECK_GUIDE } from "@/content/info-guides/allergy-history-check";
import { COMPRESSION_MASSAGE_GUIDE } from "@/content/info-guides/compression-massage";
import { CONSULTATION_CHECKLIST_GUIDE } from "@/content/info-guides/consultation-checklist";
import { CONSULTATION_QUESTIONS_GUIDE } from "@/content/info-guides/consultation-questions";
import { DAILY_LIFE_AFTER_GUIDE } from "@/content/info-guides/daily-life-after";
import { DESIGN_CONSULTATION_GUIDE } from "@/content/info-guides/design-consultation";
import { DESIRED_SHAPE_COMMUNICATION_GUIDE } from "@/content/info-guides/desired-shape-communication";
import { INJECTION_SITE_DECISION_GUIDE } from "@/content/info-guides/injection-site-decision";
import { LEFT_RIGHT_DIFFERENCE_GUIDE } from "@/content/info-guides/left-right-difference";
import { MEDICAL_INFO_CHECK_GUIDE } from "@/content/info-guides/medical-info-check";
import { MEDICATION_CHECK_GUIDE } from "@/content/info-guides/medication-check";
import { PRODUCT_INGREDIENT_CHECK_GUIDE } from "@/content/info-guides/product-ingredient-check";
import { PROCEDURE_PROCESS_GUIDE } from "@/content/info-guides/procedure-process";
import { RETOUCH_TIMING_GUIDE } from "@/content/info-guides/retouch-timing";
import { SHAPE_CHANGE_OBSERVATION_GUIDE } from "@/content/info-guides/shape-change-observation";
import type { InfoGuide } from "@/types/info-guide";
import { assertOfficialSources } from "@/types/info-guide";

/** 홈 정보 레이어·sitemap·RSS·정적 생성에 사용하는 확장형 정보글 */
export const INFO_GUIDES: InfoGuide[] = [
  CONSULTATION_CHECKLIST_GUIDE,
  MEDICATION_CHECK_GUIDE,
  ALLERGY_HISTORY_CHECK_GUIDE,
  CONSULTATION_QUESTIONS_GUIDE,
  DESIRED_SHAPE_COMMUNICATION_GUIDE,
  PROCEDURE_PROCESS_GUIDE,
  INJECTION_SITE_DECISION_GUIDE,
  DESIGN_CONSULTATION_GUIDE,
  PRODUCT_INGREDIENT_CHECK_GUIDE,
  DAILY_LIFE_AFTER_GUIDE,
  COMPRESSION_MASSAGE_GUIDE,
  LEFT_RIGHT_DIFFERENCE_GUIDE,
  SHAPE_CHANGE_OBSERVATION_GUIDE,
  RETOUCH_TIMING_GUIDE,
  AFTER_SYMPTOMS_GUIDE,
  AD_INFO_CHECK_GUIDE,
  MEDICAL_INFO_CHECK_GUIDE,
];

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

const MAX_RELATED_GUIDES = 6;

/**
 * 상세페이지 하단 "다른 골반필러 의료정보" 카드용.
 * relatedSlugs(id) 우선, 부족하면 같은 categoryLabel에서 자동 보충. 최대 6개, 중복·자기 자신 제외.
 */
export function getRelatedInfoGuides(guide: InfoGuide): InfoGuide[] {
  const result: InfoGuide[] = [];
  const seen = new Set<string>([guide.id]);

  for (const id of guide.relatedSlugs ?? []) {
    if (seen.has(id)) continue;
    const related = getInfoGuideById(id);
    if (!related) continue;
    result.push(related);
    seen.add(related.id);
    if (result.length >= MAX_RELATED_GUIDES) return result;
  }

  for (const candidate of INFO_GUIDES) {
    if (result.length >= MAX_RELATED_GUIDES) break;
    if (seen.has(candidate.id)) continue;
    if (candidate.categoryLabel !== guide.categoryLabel) continue;
    result.push(candidate);
    seen.add(candidate.id);
  }

  for (const candidate of INFO_GUIDES) {
    if (result.length >= MAX_RELATED_GUIDES) break;
    if (seen.has(candidate.id)) continue;
    result.push(candidate);
    seen.add(candidate.id);
  }

  return result;
}
