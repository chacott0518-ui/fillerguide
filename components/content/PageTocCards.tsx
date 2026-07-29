"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

import { CONTENT_CARDS } from "@/lib/content-registry";
import type { TocItem } from "@/types/content";

function formatCardDate(value?: string): string {
  if (!value) return "2026.07.28";
  if (/^\d{4}\.\d{2}\.\d{2}$/.test(value)) return value;
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return `${match[1]}.${match[2]}.${match[3]}`;
  return value;
}

type TopicGuideCardsProps = {
  activeHref?: string;
  title?: string;
};

function TopicGuideCards({
  activeHref,
  title = "골반필러 핵심 정보",
}: TopicGuideCardsProps) {
  return (
    <section className="cg-topic-guide" aria-labelledby="topic-guide-title">
      <h2 id="topic-guide-title" className="sr-only">
        {title}
      </h2>
      <div className="cg-topic-guide__grid">
        {CONTENT_CARDS.map((card, index) => {
          const src = card.image?.src;
          if (!src) return null;

          return (
            <Link
              key={card.id}
              className={`cg-topic-guide__card${activeHref === card.href ? " is-active" : ""}`}
              href={card.href}
              scroll
              aria-current={activeHref === card.href ? "page" : undefined}
            >
              <span className="cg-topic-guide__media">
                <Image
                  src={src}
                  alt={card.image.alt}
                  width={card.image.width || 800}
                  height={card.image.height || 800}
                  sizes="(max-width: 899px) 50vw, 33vw"
                  priority={index < 3}
                  style={{ objectFit: "contain" }}
                />
              </span>
              <span className="cg-topic-guide__body">
                <strong className="cg-topic-guide__title">
                  {card.cardTitle || card.title}
                </strong>
                <time
                  className="cg-topic-guide__date"
                  dateTime={card.publishedAt}
                >
                  {formatCardDate(card.publishedAt)}
                </time>
                <span className="cg-topic-guide__desc">
                  {card.cardDescription || card.description}
                </span>
                <span className="cg-topic-guide__more">더 읽기 →</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

type SectionTocProps = {
  title?: string;
  items: Array<TocItem & { description?: string }>;
};

/**
 * 번호형 본문 목차 (앵커 이동).
 */
export function SectionTocCards({
  title = "이 페이지의 목차",
  items,
}: SectionTocProps) {
  if (!items.length) return null;

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
    <nav className="cg-page-toc" aria-labelledby="page-toc-title">
      <h2 id="page-toc-title" className="cg-page-toc__heading">
        {title}
      </h2>
      <ol className="cg-page-toc__grid">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="cg-page-toc__card"
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
            >
              {item.numberLabel ? (
                <span className="cg-page-toc__num">{item.numberLabel}</span>
              ) : null}
              <span className="cg-page-toc__label">{item.label}</span>
              {item.description ? (
                <span className="cg-page-toc__desc">{item.description}</span>
              ) : null}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

type PageTocCardsProps = {
  activeHref?: string;
  title?: string;
  /** 있으면 번호형 섹션 목차, 없으면 콘텐츠형 주제 카드 6개 */
  items?: Array<TocItem & { description?: string }>;
};

/**
 * items 있음 → 번호형 섹션 목차 (메인 호환)
 * items 없음 → 상단 콘텐츠형 목차카드 6개
 */
export function PageTocCards({
  activeHref,
  title,
  items,
}: PageTocCardsProps) {
  if (items && items.length > 0) {
    return <SectionTocCards title={title} items={items} />;
  }
  return <TopicGuideCards activeHref={activeHref} title={title} />;
}
