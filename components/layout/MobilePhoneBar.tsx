"use client";

import { CONTACT } from "@/config/contact";

export function MobileContactBar() {
  if (!CONTACT.enabled) return null;

  const phoneHref = CONTACT.phoneTel
    ? `tel:${CONTACT.phoneTel.replace(/[^0-9+]/g, "")}`
    : "";

  return (
    <nav className="cg-mobile-bar" aria-label="빠른 문의">
      {CONTACT.kakaoEnabled ? (
        <a
          className="cg-mobile-bar__btn cg-mobile-bar__btn--kakao"
          href={CONTACT.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7-.1.5-.6 2.1-.7 2.4 0 0-.1.4.2.3.3-.1 3.2-2.1 3.7-2.5.7.1 1.4.2 2.2.2 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
          </svg>
          카톡 제휴문의
        </a>
      ) : null}
      {phoneHref ? (
        <a
          className="cg-mobile-bar__btn cg-mobile-bar__btn--phone"
          href={phoneHref}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
          </svg>
          상담전화
        </a>
      ) : null}
    </nav>
  );
}

/** 하위 호환 */
export const MobilePhoneBar = MobileContactBar;
