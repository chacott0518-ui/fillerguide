import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import type { ContentCard as ContentCardType } from "@/types/content";

type ContentCardProps = {
  card: ContentCardType;
  active?: boolean;
  priority?: boolean;
  /** 이미지+제목만 (상단 목차카드) / false면 관련 콘텐츠용 상세 카드 */
  compact?: boolean;
};

function formatCardDate(value: string): string {
  if (/^\d{4}\.\d{2}\.\d{2}$/.test(value)) return value;
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return `${match[1]}.${match[2]}.${match[3]}`;
  return value;
}

export function ContentCard({
  card,
  active = false,
  priority = false,
  compact = true,
}: ContentCardProps) {
  const style = {
    "--card-accent": card.accentColor,
    "--card-accent-hover": card.accentHoverColor,
  } as CSSProperties;

  return (
    <Link
      className={`cg-content-card cg-content-card--${card.accent}${active ? " is-active" : ""}${compact ? " cg-content-card--compact" : " cg-content-card--rich"}`}
      href={card.href}
      aria-current={active ? "page" : undefined}
      style={style}
    >
      <span className="cg-content-card__media">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          width={card.image.width}
          height={card.image.height}
          sizes={
            compact
              ? "(max-width: 639px) 50vw, (max-width: 899px) 33vw, 16vw"
              : "(max-width: 639px) 100vw, (max-width: 899px) 50vw, 33vw"
          }
          priority={priority}
          style={{ objectFit: compact ? "contain" : "cover" }}
        />
      </span>
      <span className="cg-content-card__body">
        <strong className="cg-content-card__title">{card.title}</strong>
        {!compact ? (
          <>
            <span className="cg-content-card__meta">
              {formatCardDate(card.publishedAt)} · {card.cardMetaLabel}
            </span>
            <span className="cg-content-card__desc">
              {card.cardDescription}
            </span>
            <span className="cg-content-card__more">
              더 읽기
              <span aria-hidden="true"> →</span>
            </span>
          </>
        ) : null}
      </span>
    </Link>
  );
}
