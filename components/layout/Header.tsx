"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileMenuPanel } from "@/components/navigation/MobileMenuPanel";
import { CONTACT } from "@/config/contact";
import { topicConfig } from "@/config/topic";

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((current) => !current);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- pathname 변경 시 메뉴 닫기
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        menuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          className="cg-menu-scrim"
          aria-label="메뉴 닫기"
          onClick={closeMenu}
        />
      ) : null}

      <header className="cg-site-header">
        <div ref={headerRef} className="cg-site-header__inner">
          <div
            className={`cg-header-bar ${menuOpen ? "cg-header-bar--menu-open" : ""}`}
          >
            <Link
              className="cg-header-logo"
              href="/"
              aria-label={`${topicConfig.logoText} 홈`}
              onClick={closeMenu}
            >
              <span className="cg-header-logo__text">{topicConfig.logoText}</span>
            </Link>

            <div className="cg-header-actions">
              {CONTACT.kakaoEnabled ? (
                <a
                  className="cg-header-kakao"
                  href={CONTACT.kakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  카카오톡 제휴문의
                </a>
              ) : null}

              <button
                type="button"
                className={`cg-header-menu-button ${menuOpen ? "is-open" : ""}`}
                aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
                aria-expanded={menuOpen}
                aria-controls={menuId}
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <svg
                    className="cg-header-menu-button__x"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 3.5l9 9M12.5 3.5l-9 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <>
                    <span />
                    <span />
                    <span />
                  </>
                )}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div id={menuId}>
              <MegaMenu onNavigate={closeMenu} activePath={pathname} />
              <MobileMenuPanel onNavigate={closeMenu} activePath={pathname} />
            </div>
          ) : null}
        </div>
      </header>

      <div className="cg-site-header-spacer" aria-hidden="true" />
    </>
  );
}
