import Link from "next/link";

type RelatedArticleLinkProps = {
  href: string;
  label: string;
};

export function RelatedArticleLink({ href, label }: RelatedArticleLinkProps) {
  return (
    <p className="cg-related-link">
      <Link className="cg-related-link__a" href={href}>
        <span className="cg-related-link__text">{label}</span>
        <span className="cg-related-link__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </p>
  );
}
