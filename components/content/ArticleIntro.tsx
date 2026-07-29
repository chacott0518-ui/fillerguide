type ArticleIntroProps = {
  paragraphs: string[];
};

export function ArticleIntro({ paragraphs }: ArticleIntroProps) {
  if (paragraphs.length === 0) return null;

  return (
    <div className="cg-article-intro">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}
