type ArticleConclusionProps = {
  heading?: string;
  body: string | string[];
};

export function ArticleConclusion({
  heading = "결론",
  body,
}: ArticleConclusionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className="cg-conclusion" aria-labelledby="article-conclusion">
      <h2 id="article-conclusion">
        <span className="cg-conclusion__icon" aria-hidden="true">
          ✅
        </span>
        <span>{heading}</span>
      </h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </section>
  );
}
