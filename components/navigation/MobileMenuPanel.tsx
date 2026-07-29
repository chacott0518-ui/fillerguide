import Link from "next/link";

import { MenuIcon } from "@/components/icons/MenuIcon";
import { contentUiConfig } from "@/config/content-ui";
import { ROUTES } from "@/config/routes";
import { topicConfig } from "@/config/topic";
import { CONTENT_CARDS } from "@/lib/content-registry";

type MobileMenuPanelProps = {
  onNavigate: () => void;
  activePath?: string;
};

function resolveMenuHref(id: string, href?: string): string {
  if (href) return href;
  if (id === "home") return ROUTES.home;
  const card = CONTENT_CARDS.find((item) => item.id === id);
  return card?.href ?? ROUTES.home;
}

export function MobileMenuPanel({
  onNavigate,
  activePath,
}: MobileMenuPanelProps) {
  const showNumber = contentUiConfig.mobileShowMenuNumber;

  return (
    <div
      className="cg-mobile-panel"
      role="navigation"
      aria-label="모바일 콘텐츠 메뉴"
    >
      <div className="cg-mobile-panel__inner">
        <div className="cg-mobile-panel__grid">
          {topicConfig.menuItems.map((menuItem) => {
            const href = resolveMenuHref(menuItem.id, menuItem.href);
            const isActive = activePath === href;
            const card = CONTENT_CARDS.find((item) => item.id === menuItem.id);
            const accent = card?.accent ?? menuItem.accent;

            return (
              <Link
                key={menuItem.id}
                href={href}
                scroll
                className={`cg-mobile-panel__card${isActive ? " is-active" : ""}`}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                aria-label={menuItem.title}
              >
                <span
                  className={`cg-mobile-panel__label cg-mobile-panel__label--${accent}`}
                >
                  {showNumber && menuItem.numberLabel ? (
                    <span className="cg-mobile-panel__num" aria-hidden="true">
                      {menuItem.numberLabel}
                    </span>
                  ) : null}
                  <span className="cg-mobile-panel__icon" aria-hidden="true">
                    <MenuIcon iconKey={menuItem.iconKey} size={15} />
                  </span>
                  <strong>{menuItem.title}</strong>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
