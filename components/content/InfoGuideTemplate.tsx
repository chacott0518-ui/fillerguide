import Link from "next/link";

import { ArticleBody } from "@/components/content/ArticleBody";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FaqAccordion } from "@/components/content/FaqList";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { OfficialSources } from "@/components/content/OfficialSources";
import { JsonLd } from "@/components/seo/JsonLd";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  articleJsonLdFromFields,
  breadcrumbJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/schema";
import { assertOfficialSources, type InfoGuide } from "@/types/info-guide";

type InfoGuideTemplateProps = {
  guide: InfoGuide;
};

function formatDisplayDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso.slice(0, 10);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

/**
 * 신버전 정보형 아티클 템플릿 (레이아웃 전용).
 * 기존 ArticleTemplate·핵심 6페이지와 분리한다.
 */
export function InfoGuideTemplate({ guide }: InfoGuideTemplateProps) {
  assertOfficialSources(guide);

  const schemas = [
    webPageJsonLd({
      name: guide.h1,
      description: guide.seo.description,
      path: guide.href,
      image: guide.seo.socialImage || guide.seo.ogImage,
      type: "WebPage",
    }),
    breadcrumbJsonLd([
      { name: SITE.shortName, path: ROUTES.home },
      { name: guide.h1, path: guide.href },
    ]),
    articleJsonLdFromFields({
      headline: guide.h1,
      description: guide.seo.description,
      path: guide.href,
      image: guide.seo.socialImage || guide.seo.ogImage,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      articleSection: guide.categoryLabel,
    }),
    faqPageJsonLd(guide.faqs, guide.href),
  ];

  return (
    <>
      <article className="cg-info-guide cg-info-guide--v2 cg-page--enter">
        <div className="cg-container">
          <Breadcrumb
            items={[
              { label: "골반필러", href: ROUTES.home },
              { label: guide.preview.title },
            ]}
          />

          <div className="cg-info-guide__reading">
            <header className="cg-info-guide__header">
              <p className="cg-info-guide__eyebrow">{guide.categoryLabel}</p>
              <h1 className="cg-info-guide__h1">{guide.h1}</h1>
              <p className="cg-info-guide__dates">
                <span>발행 {formatDisplayDate(guide.publishedAt)}</span>
                <span aria-hidden="true"> · </span>
                <span>수정 {formatDisplayDate(guide.updatedAt)}</span>
              </p>
            </header>

            <section className="cg-info-guide__intro" aria-label="도입">
              {guide.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>

            <div className="cg-info-guide__first-check">
              <KeySummaryCards
                title={guide.firstCheckTitle}
                items={guide.firstCheckItems}
              />
            </div>

            <div className="cg-info-guide__body" data-article-body="true">
              <ArticleBody sections={guide.sections} />

              <FaqAccordion
                items={guide.faqs}
                title={guide.faqTitle}
                id="faq"
                numberLabel="08"
                className="cg-info-guide__faq"
              />

              <nav
                className="cg-info-guide__related"
                aria-labelledby="info-guide-related-title"
              >
                <h2
                  id="info-guide-related-title"
                  className="cg-info-guide__related-title"
                >
                  관련 정보
                </h2>
                <ul className="cg-info-guide__related-list">
                  {guide.relatedLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="cg-info-guide__related-row"
                      >
                        <span className="cg-info-guide__related-label">
                          {item.anchor}
                        </span>
                        <span
                          className="cg-info-guide__related-arrow"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <aside className="cg-info-guide__notice" role="note">
                <p>{guide.medicalNotice}</p>
              </aside>

              <OfficialSources sources={guide.officialSources} />
            </div>
          </div>
        </div>
      </article>
      <JsonLd data={schemas} />
    </>
  );
}
