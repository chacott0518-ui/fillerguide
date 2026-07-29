import { ContentCard } from "@/components/content/ContentCard";
import { PageTocCards } from "@/components/content/PageTocCards";
import { CONTENT_CARDS } from "@/lib/content-registry";

type ContentCardGridProps = {
  activeHref?: string;
  showIntro?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ContentCardGrid({
  activeHref,
  showIntro = false,
  eyebrow = "CONTENT GUIDE",
  title = "골반필러 핵심 정보",
  description = "가격, 후기, 주의사항과 유지·회복기간까지 주제별로 정리했습니다.",
}: ContentCardGridProps) {
  return (
    <section className="cg-card-grid" aria-labelledby="content-card-grid-title">
      {showIntro ? (
        <div className="cg-section-intro">
          <p className="cg-section-intro__eyebrow">{eyebrow}</p>
          <h2 id="content-card-grid-title">{title}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <h2 id="content-card-grid-title" className="sr-only">
          {title}
        </h2>
      )}
      <div className="cg-card-grid__list">
        {CONTENT_CARDS.map((card, index) => (
          <ContentCard
            key={card.id}
            card={card}
            active={activeHref === card.href}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
}

/** 메인 상단 목차 — PageTocCards와 동일한 콘텐츠형 카드 */
export function HomeContentCards() {
  return <PageTocCards />;
}
