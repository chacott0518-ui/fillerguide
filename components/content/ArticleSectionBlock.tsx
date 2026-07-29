import { ComparisonBlock } from "@/components/content/ComparisonBlock";
import { ChecklistBlock } from "@/components/content/ChecklistBlock";
import { InfoGrid } from "@/components/content/InfoGrid";
import { RelatedArticleLink } from "@/components/content/RelatedArticleLink";
import { ArticleCallout } from "@/components/content/ArticleCallout";
import { FaqAccordion } from "@/components/content/FaqList";
import { CompareTable, ResponsiveTable } from "@/components/content/ResponsiveTable";
import { StepsBlock } from "@/components/content/StepsBlock";
import { TimelineBlock } from "@/components/content/TimelineBlock";
import { getLayoutDecorativeIcon } from "@/config/section-icons";
import { getFaqsByIds } from "@/content/faqs";
import type { ArticleSection } from "@/types/content";

function SectionVisuals({ section }: { section: ArticleSection }) {
  if (section.layout === "comparison" && section.comparison) {
    return (
      <ComparisonBlock
        left={section.comparison.left}
        right={section.comparison.right}
        note={section.comparison.note}
      />
    );
  }

  if (section.layout === "checklist" && section.bullets) {
    return <ChecklistBlock items={section.bullets} />;
  }

  if (section.layout === "steps" && section.steps) {
    return <StepsBlock steps={section.steps} />;
  }

  if (section.layout === "timeline" && section.timeline) {
    return <TimelineBlock items={section.timeline} />;
  }

  if (
    (section.layout === "info-blocks" || section.layout === "info-grid") &&
    section.infoBlocks
  ) {
    const mobileColumns =
      section.mobileCardColumns ??
      (section.infoBlocks.some((item) => item.text.length > 48) ? 1 : 2);
    return (
      <InfoGrid items={section.infoBlocks} mobileColumns={mobileColumns} />
    );
  }

  if (section.layout === "compare-table" && section.compareRows) {
    return (
      <CompareTable
        rows={section.compareRows}
        leftHeader={section.compareHeaders?.[0]}
        rightHeader={section.compareHeaders?.[1]}
      />
    );
  }

  if (section.layout === "responsive-table" && section.table) {
    return <ResponsiveTable data={section.table} />;
  }

  if (section.bullets) {
    return <ChecklistBlock items={section.bullets} />;
  }

  return null;
}

type ArticleSectionBlockProps = {
  section: ArticleSection;
  showNumbers?: boolean;
  className?: string;
};

export function ArticleSectionBlock({
  section,
  showNumbers = true,
  className = "",
}: ArticleSectionBlockProps) {
  const HeadingTag = section.level === "h3" ? "h3" : "h2";
  const inlineFaqs =
    section.faqIds && section.faqIds.length > 0
      ? getFaqsByIds(section.faqIds)
      : [];
  const icon =
    section.decorativeIcon || getLayoutDecorativeIcon(section.layout);

  return (
    <section
      id={section.id}
      className={`cg-article-section${className ? ` ${className}` : ""}`}
      aria-labelledby={`${section.id}-heading`}
    >
      {showNumbers && section.numberLabel ? (
        <p className="cg-article-section__num">{section.numberLabel}</p>
      ) : null}
      <HeadingTag id={`${section.id}-heading`}>
        <span className="cg-article-section__icon" aria-hidden="true">
          {icon}
        </span>
        <span className="cg-article-section__heading-text">
          {section.heading}
        </span>
      </HeadingTag>
      {section.directAnswer ? (
        <p className="cg-article-section__answer">{section.directAnswer}</p>
      ) : null}
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
      <SectionVisuals section={section} />
      {section.callout ? <ArticleCallout text={section.callout} /> : null}
      {inlineFaqs.length > 0 ? (
        <FaqAccordion
          items={inlineFaqs}
          title=""
          id={`${section.id}-faqs`}
          className="cg-page-faq cg-inline-faq"
        />
      ) : null}
      {section.relatedHref ? (
        <RelatedArticleLink
          href={section.relatedHref}
          label={section.relatedLabel || "관련 내용 보기"}
        />
      ) : null}
    </section>
  );
}
