export type KeySummaryItem = {
  numberLabel: string;
  title: string;
  text: string;
};

type KeySummaryCardsProps = {
  title?: string;
  items: KeySummaryItem[];
};

/**
 * 핵심요약 카드 그리드 (메인·상세 공용).
 */
export function KeySummaryCards({
  title = "골반필러 핵심요약",
  items,
}: KeySummaryCardsProps) {
  if (!items.length) return null;

  return (
    <section className="cg-key-summary" aria-labelledby="key-summary-title">
      <h2 id="key-summary-title" className="cg-key-summary__heading">
        {title}
      </h2>
      <ol className="cg-key-summary__grid">
        {items.map((item) => (
          <li key={item.numberLabel} className="cg-key-summary__card">
            <span className="cg-key-summary__num" aria-hidden="true">
              {item.numberLabel}
            </span>
            <strong className="cg-key-summary__title">{item.title}</strong>
            <p className="cg-key-summary__text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
