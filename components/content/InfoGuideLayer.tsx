import Link from "next/link";

import { INFO_GUIDE_PREVIEWS } from "@/content/info-guides";

/**
 * 홈: 기존 핵심 카드 직후, 다음 주요 콘텐츠 전에 표시하는 정보 레이어.
 * GNB·핵심 카드 배열에는 포함하지 않는다.
 */
export function InfoGuideLayer() {
  if (INFO_GUIDE_PREVIEWS.length === 0) return null;

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
        {INFO_GUIDE_PREVIEWS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="cg-info-layer__card">
              <span className="cg-info-layer__card-title">{item.title}</span>
              <span className="cg-info-layer__card-desc">{item.description}</span>
              <span className="cg-info-layer__card-more" aria-hidden="true">
                자세히 보기 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
