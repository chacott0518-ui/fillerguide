import Link from "next/link";

import { ROUTES } from "@/config/routes";
import type { InfoGuide } from "@/types/info-guide";

type RelatedInfoGuidesProps = {
  guides: InfoGuide[];
};

/**
 * 상세페이지 하단 — 다른 골반필러 의료정보 카드 (최대 6개) + 허브 복귀 링크.
 */
export function RelatedInfoGuides({ guides }: RelatedInfoGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <nav
      className="cg-related-guides"
      aria-labelledby="related-guides-title"
    >
      <h2 id="related-guides-title" className="cg-related-guides__title">
        다른 골반필러 의료정보
      </h2>
      <ul className="cg-related-guides__grid">
        {guides.map((guide) => (
          <li key={guide.id}>
            <Link href={guide.href} className="cg-related-guides__card">
              <span className="cg-related-guides__card-title">
                {guide.preview.title}
              </span>
              <span className="cg-related-guides__card-desc">
                {guide.preview.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={ROUTES.infoHub} className="cg-related-guides__back">
        ← 골반필러 의료정보 전체보기
      </Link>
    </nav>
  );
}
