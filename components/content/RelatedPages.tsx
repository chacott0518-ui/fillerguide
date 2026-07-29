import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ContentClusterId } from "@/types/content";

type RelatedPagesProps = {
  currentId?: ContentClusterId;
  /** 홈: 상세 6개만 / 상세: 메인 + 나머지 5개 */
  showAll?: boolean;
};

type RelatedLink = {
  id: string;
  href: string;
  label: string;
};

/**
 * 관련 콘텐츠 — 한 줄 버튼형 링크만 표시 (이미지·날짜·미리보기 없음).
 */
export function RelatedPages({ currentId, showAll = false }: RelatedPagesProps) {
  const links: RelatedLink[] = [];

  if (showAll) {
    for (const card of CONTENT_CARDS) {
      links.push({ id: card.id, href: card.href, label: card.title });
    }
  } else {
    links.push({
      id: "home",
      href: ROUTES.home,
      label: "골반필러 메인 보기",
    });
    for (const card of CONTENT_CARDS) {
      if (card.id === currentId) continue;
      links.push({ id: card.id, href: card.href, label: card.title });
    }
  }

  if (links.length === 0) return null;

  return (
    <nav className="cg-related-btns" aria-labelledby="related-pages-title">
      <h2 id="related-pages-title" className="cg-related-btns__title">
        관련 콘텐츠
      </h2>
      <ul className="cg-related-btns__list">
        {links.map((item) => (
          <li key={item.id}>
            <Link className="cg-related-btns__row" href={item.href} scroll>
              <span className="cg-related-btns__label">{item.label}</span>
              <span className="cg-related-btns__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
