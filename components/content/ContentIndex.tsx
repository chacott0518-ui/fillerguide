import Link from "next/link";

import type { HomeIndexItem } from "@/types/content";

type ContentIndexProps = {
  items: HomeIndexItem[];
};

export function ContentIndex({ items }: ContentIndexProps) {
  return (
    <section className="cg-content-index" aria-labelledby="content-index-title">
      <h2 id="content-index-title" className="sr-only">
        골반필러 콘텐츠 인덱스
      </h2>
      <ol className="cg-content-index__list">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="cg-content-index__item">
              <span className="cg-content-index__num" aria-hidden="true">
                {item.numberLabel}
              </span>
              <span className="cg-content-index__copy">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
