import { CONTACT } from "@/config/contact";

type PartnershipCTAProps = {
  variant?: "top" | "bottom";
};

export function PartnershipCTA({ variant = "top" }: PartnershipCTAProps) {
  void variant;
  if (!CONTACT.kakaoEnabled) return null;

  return (
    <aside className="cg-partner-cta" aria-label="제휴 문의">
      <div className="cg-partner-cta__copy">
        <p className="cg-partner-cta__headline">
          골반필러 관련 콘텐츠 제휴를 검토하고 계신가요?
        </p>
      </div>
      <div className="cg-partner-cta__actions">
        <a
          className="cg-action-btn"
          href={CONTACT.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          제휴문의
        </a>
      </div>
    </aside>
  );
}

/** 하위 호환 */
export function AdInquiryBanner() {
  return <PartnershipCTA variant="bottom" />;
}

/** 메인페이지 하단 단일 상담 CTA */
export function ConsultCTA() {
  return <PartnershipCTA variant="bottom" />;
}
