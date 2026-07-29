type ExamNoticeBoxProps = {
  label?: string;
  body: string;
};

export function ExamNoticeBox({
  label = "검사 전 확인",
  body,
}: ExamNoticeBoxProps) {
  return (
    <aside className="cg-exam-notice" role="note" aria-label={label}>
      <span className="cg-exam-notice__icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 7v3.5M8 5.2h.01"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <p className="cg-exam-notice__label">{label}</p>
      <p className="cg-exam-notice__body">{body}</p>
    </aside>
  );
}
