"use client";

import type { MouseEvent } from "react";

import type { TocItem } from "@/types/content";

type TableOfContentsProps = {
  items: TocItem[];
  title?: string;
};

export function TableOfContents({
  items,
  title = "목차",
}: TableOfContentsProps) {
  if (items.length === 0) return null;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="cg-toc" aria-label={title}>
      <p className="cg-toc__title">{title}</p>
      <ol className="cg-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="cg-toc__link"
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
            >
              {item.numberLabel ? (
                <span className="cg-toc__num">{item.numberLabel}</span>
              ) : null}
              {item.decorativeIcon ? (
                <span className="cg-toc__icon" aria-hidden="true">
                  {item.decorativeIcon}
                </span>
              ) : null}
              <span className="cg-toc__label">{item.label}</span>
              <span className="cg-toc__chevron" aria-hidden="true">
                ›
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
