import { CONTACT } from "@/config/contact";

type PartnershipCTAProps = {
  variant?: "top" | "bottom";
};

export function PartnershipCTA({ variant = "top" }: PartnershipCTAProps) {
  void variant;
  if (!CONTACT.kakaoEnabled) return null;

  return (
    <aside className="cg-partner-cta" aria-label="광고·콘텐츠 제휴 문의">
      <div className="cg-partner-cta__copy">
        {/* TODO: 실제 제휴 병원 확정 후 환자 상담 CTA와 분리해 병원명·상담 링크를 반영 */}
        <p className="cg-partner-cta__headline">
          골반필러 정보 사이트의 광고·콘텐츠 제휴를 검토하고 계신가요?
        </p>
        <p className="cg-partner-cta__note">
          필러가이드는 정보 사이트입니다. 환자 예약·진료 연결이 아닙니다.
        </p>
      </div>
      <div className="cg-partner-cta__actions">
        <a
          className="cg-action-btn"
          href={CONTACT.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          광고·콘텐츠 제휴문의
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
