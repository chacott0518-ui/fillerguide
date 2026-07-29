type ArticleCalloutProps = {
  text: string;
};

export function ArticleCallout({ text }: ArticleCalloutProps) {
  return (
    <aside className="cg-callout" role="note">
      <p>{text}</p>
    </aside>
  );
}
