import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { CONTACT } from "@/config/contact";
import { ROUTES } from "@/config/routes";
import { topicConfig } from "@/config/topic";
import { CONTENT_CARDS } from "@/lib/content-registry";

type MegaMenuProps = {
  onNavigate: () => void;
  activePath?: string;
};

const ACCENT_COLORS: Record<string, string> = {
  home:       "#F3E9D2",
  cost:       "#F9E0D2",
  reviews:    "#DCEFF5",
  precautions:"#E8F0CF",
  hospital:   "#D9EEE7",
  recovery:   "#E9E0F5",
  faq:        "#F7EDC9",
  infoHub:    "#E4EEF7",
};

function resolveMenuHref(id: string, href?: string): string {
  if (href) return href;
  if (id === "home") return ROUTES.home;
  const card = CONTENT_CARDS.find((item) => item.id === id);
  return card?.href ?? ROUTES.home;
}

export function MegaMenu({ onNavigate, activePath }: MegaMenuProps) {
  return (
    <div
      className="cg-mega"
      role="region"
      aria-label={`${topicConfig.siteName} 콘텐츠 메뉴`}
    >
      <div className="cg-mega__inner">
        <div className="cg-mega__layout">
          {/* 좌측: 메뉴 목록 */}
          <div className="cg-mega__list">
            {topicConfig.menuItems.map((menuItem) => {
              const href = resolveMenuHref(menuItem.id, menuItem.href);
              const isActive = activePath === href;
              const accentBg = ACCENT_COLORS[menuItem.id] ?? "#F3E9D2";

              return (
                <Link
                  key={menuItem.id}
                  href={href}
                  scroll
                  className={`cg-mega__item${isActive ? " is-active" : ""}`}
                  onClick={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className="cg-mega__num"
                    style={{ background: accentBg }}
                    aria-hidden="true"
                  >
                    {menuItem.numberLabel}
                  </span>
                  <span
                    className="cg-mega__icon"
                    style={{ background: accentBg }}
                    aria-hidden="true"
                  >
                    <MenuIcon iconKey={menuItem.iconKey} size={16} />
                  </span>
                  <span className="cg-mega__item-body">
                    <strong className="cg-mega__item-title">
                      {menuItem.title}
                    </strong>
                    <span className="cg-mega__item-desc">
                      {menuItem.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* 우측: 코드형 문의 배너 */}
          <aside
            className="cg-mega__ad"
            aria-label="필러가이드 제휴문의"
          >
            <a
              className="cg-mega__ad-link"
              href={CONTACT.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cg-mega__ad-copy">노출문의</span>
              <span className="cg-mega__panel-btn">문의하기</span>
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
