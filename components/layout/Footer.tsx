import Link from "next/link";

import { HealthInformationNotice } from "@/components/content/HealthInformationNotice";
import { LEGAL } from "@/config/legal";
import { topicConfig } from "@/config/topic";

const legalLinks = [
  { key: "privacyPolicy", label: "개인정보 처리방침" },
  { key: "terms", label: "이용약관" },
  { key: "nonCoveredFees", label: "비급여 진료비 안내" },
  { key: "operatorDisclosure", label: "운영자 정보" },
  { key: "cookieNotice", label: "쿠키 안내" },
] as const;

export function Footer() {
  const enabledLinks = legalLinks.filter((item) => {
    const doc = LEGAL[item.key];
    return doc.enabled && doc.href;
  });

  return (
    <footer className="cg-footer">
      <div className="cg-container">
        <p className="cg-footer__copy">
          © 2026 {topicConfig.logoText}. {topicConfig.operatorName}
        </p>
        <p className="cg-footer__webblog">Web Blog.</p>
        <HealthInformationNotice variant="footer" />
        {enabledLinks.length > 0 ? (
          <nav className="cg-footer__legal" aria-label="법률 문서">
            {enabledLinks.map((item) => (
              <Link key={item.key} href={LEGAL[item.key].href!}>
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </footer>
  );
}
