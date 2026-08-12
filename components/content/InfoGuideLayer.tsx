import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { INFO_GUIDES } from "@/content/info-guides";

/** 메인에 노출할 대표 정보가이드 id (최대 4개) */
const HOME_INFO_LAYER_IDS = [
  "consultation-checklist",
  "consultation-questions",
  "after-symptoms",
  "retouch-timing",
];

/**
 * 홈: 기존 핵심 카드 직후, 다음 주요 콘텐츠 전에 표시하는 정보 레이어.
 * GNB·핵심 카드 배열에는 포함하지 않는다. 전체 목록은 /의료정보 허브에서 확인한다.
 */
export function InfoGuideLayer() {
  const previews = HOME_INFO_LAYER_IDS.map((id) =>
    INFO_GUIDES.find((guide) => guide.id === id),
  ).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  if (previews.length === 0) return null;

  return (
    <section className="cg-info-layer" aria-labelledby="info-layer-title">
      <div className="cg-info-layer__head">
        <h2 id="info-layer-title" className="cg-info-layer__title">
          골반필러 관련 정보
        </h2>
        <p className="cg-info-layer__desc">
          상담 전에 확인할 사항과 필러 관련 의료정보를 주제별로 정리합니다.
        </p>
      </div>
      <ul className="cg-info-layer__list">
        {previews.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href} className="cg-info-layer__card">
              <span className="cg-info-layer__card-title">
                {guide.preview.title}
              </span>
              <span className="cg-info-layer__card-desc">
                {guide.preview.description}
              </span>
              <span className="cg-info-layer__card-more" aria-hidden="true">
                자세히 보기 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={ROUTES.infoHub} className="cg-info-layer__all">
        골반필러 의료정보 전체보기 →
      </Link>
    </section>
  );
}
