type ArticleSummaryProps = {
  lead: string;
  publishedAt: string;
  updatedAt?: string;
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}

export function ArticleSummary({
  lead,
  publishedAt,
  updatedAt,
}: ArticleSummaryProps) {
  const dateLabel =
    updatedAt && updatedAt !== publishedAt
      ? `수정 ${formatDate(updatedAt)}`
      : formatDate(publishedAt);

  return (
    <div className="cg-article-summary">
      <p className="cg-article-summary__lead">{lead}</p>
      <p className="cg-article-summary__date">
        <time dateTime={updatedAt || publishedAt}>{dateLabel}</time>
      </p>
    </div>
  );
}
