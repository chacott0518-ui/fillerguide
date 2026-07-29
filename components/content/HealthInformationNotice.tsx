type HealthInformationNoticeProps = {
  text?: string;
  /** Footer 등 민트 박스 없이 텍스트만 표시 */
  variant?: "box" | "footer";
};

export const HEALTH_INFORMATION_TEXT =
  "필러가이드는 골반필러 관련 일반 정보를 제공하는 정보 사이트입니다. 개인의 상태에 대한 진단이나 시술 여부는 의료기관의 상담과 진료를 통해 확인해야 합니다.";

const MFDS_URL =
  "https://www.mfds.go.kr/brd/m_465/view.do?company_cd=&company_nm=&itm_seq_1=0&itm_seq_2=0&multi_itm_seq=0&page=1&seq=27164&srchFr=&srchTo=&srchTp=&srchWord=";

const FDA_URL =
  "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers";

function ReferenceCriteria() {
  return (
    <div className="cg-health-notice__refs">
      <p className="cg-health-notice__refs-title">참고 기준</p>
      <ul className="cg-health-notice__refs-list">
        <li>
          <a href={MFDS_URL} target="_blank" rel="noopener noreferrer">
            식품의약품안전처 성형용 필러 안전사용 안내
          </a>
        </li>
        <li>
          <a href={FDA_URL} target="_blank" rel="noopener noreferrer">
            미국 FDA Dermal Fillers 안내
          </a>
        </li>
      </ul>
      <p className="cg-health-notice__refs-note">
        필러 제품의 특성, 허가 범위와 적용 부위는 제품마다 다를 수 있으므로 시술 전
        제품명과 허가사항, 예상 가능한 부작용을 의료진에게 확인해야 합니다.
      </p>
    </div>
  );
}

export function HealthInformationNotice({
  text = HEALTH_INFORMATION_TEXT,
  variant = "box",
}: HealthInformationNoticeProps) {
  if (variant === "footer") {
    return (
      <div className="cg-footer__health" role="note" aria-label="의료정보 안내">
        <p className="cg-footer__health-title">의료정보 안내</p>
        <p className="cg-footer__health-text">{text}</p>
        <p className="cg-footer__health-text">작성·운영: 필러가이드 편집팀</p>
        <p className="cg-footer__health-title">참고 기준</p>
        <ul className="cg-footer__health-refs">
          <li>
            <a href={MFDS_URL} target="_blank" rel="noopener noreferrer">
              식품의약품안전처 성형용 필러 안전사용 안내
            </a>
          </li>
          <li>
            <a href={FDA_URL} target="_blank" rel="noopener noreferrer">
              미국 FDA Dermal Fillers 안내
            </a>
          </li>
        </ul>
        <p className="cg-footer__health-text">
          필러 제품의 특성, 허가 범위와 적용 부위는 제품마다 다를 수 있으므로 시술 전
          제품명과 허가사항, 예상 가능한 부작용을 의료진에게 확인해야 합니다.
        </p>
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
          <p className="cg-health-notice__text">작성·운영: 필러가이드 편집팀</p>
          <ReferenceCriteria />
        </div>
      </div>
    </aside>
  );
}
