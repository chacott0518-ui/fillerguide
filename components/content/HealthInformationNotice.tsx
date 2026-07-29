type HealthInformationNoticeProps = {
  text?: string;
  /** Footer 등 민트 박스 없이 텍스트만 표시 */
  variant?: "box" | "footer";
};

export const HEALTH_INFORMATION_TEXT =
  "필러가이드는 골반필러 관련 일반 정보를 제공하는 정보 사이트입니다. 개인의 상태에 대한 진단이나 시술 여부는 의료기관의 상담과 진료를 통해 확인해야 합니다.";

export function HealthInformationNotice({
  text = HEALTH_INFORMATION_TEXT,
  variant = "box",
}: HealthInformationNoticeProps) {
  if (variant === "footer") {
    return (
      <div className="cg-footer__health" role="note" aria-label="의료정보 안내">
        <p className="cg-footer__health-title">의료정보 안내</p>
        <p className="cg-footer__health-text">{text}</p>
      </div>
    );
  }

  return (
    <aside className="cg-health-notice" role="note" aria-label="의료정보 안내">
      <div className="cg-health-notice__inner">
        <span className="cg-health-notice__icon" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <circle cx="10" cy="10" r="8" />
            <path d="M10 9v4M10 6.5h.01" strokeWidth="1.8" />
          </svg>
        </span>
        <div className="cg-health-notice__body">
          <strong className="cg-health-notice__title">의료정보 안내</strong>
          <p className="cg-health-notice__text">{text}</p>
        </div>
      </div>
    </aside>
  );
}
