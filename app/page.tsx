import Image from "next/image";
import Link from "next/link";

import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { HomeContentCards } from "@/components/content/ContentCardGrid";
import { FaqAccordion } from "@/components/content/FaqList";
import { InfoGuideLayer } from "@/components/content/InfoGuideLayer";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { PageTocCards } from "@/components/content/PageTocCards";
import { RelatedPages } from "@/components/content/RelatedPages";
import { ClinicMap } from "@/components/contact/ClinicMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FEATURE_IMAGE } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { getFaqsByIds } from "@/content/faqs";
import {
  HOME_CONCLUSION,
  HOME_FAQ_IDS,
  HOME_FAQ_INTRO,
  HOME_INTRO,
  HOME_SECTIONS,
  HOME_SEO,
  HOME_TOC,
} from "@/content/pages/home";
import {
  faqPageJsonLd,
  itemListJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export default function HomePage() {
  const faqs = getFaqsByIds([...HOME_FAQ_IDS]);
  const heroImage = HOME_INTRO.featureImage;
  const editorialImages = [
    {
      src: HOME_FEATURE_IMAGE.src,
      alt: "골반필러 상담 전 확인할 정보 안내 이미지",
      width: HOME_FEATURE_IMAGE.width,
      height: HOME_FEATURE_IMAGE.height,
    },
    {
      src: "/images/pelvic-filler/골반필러-가격비용.webp",
      alt: "골반필러 가격 확인 기준을 보여주는 안내 이미지",
      width: 800,
      height: 800,
    },
  ];

  return (
    <>
      <div className="cg-home cg-page--enter">
        <div className="cg-container">
          {heroImage?.src ? (
            <section className="cg-home-hero" aria-labelledby="home-hero-title">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                priority
                sizes="(max-width: 768px) 100vw, 1120px"
                className="cg-home-hero__img"
              />
              <div className="cg-home-hero__overlay">
                <p className="cg-home-hero__eyebrow">필러가이드</p>
                <h1 id="home-hero-title" className="cg-home__title">
                  {HOME_INTRO.h1}
                </h1>
                <p className="cg-home-hero__subtitle">{HOME_INTRO.subtitle}</p>
              </div>
            </section>
          ) : null}

          <header className="cg-page__header cg-home__header">
            <h2 className="cg-home__question">{HOME_INTRO.heading}</h2>
          </header>

          <section className="cg-home-lead">
            {HOME_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </section>

          {HOME_INTRO.keySummary ? (
            <KeySummaryCards items={HOME_INTRO.keySummary} />
          ) : null}

          <HomeContentCards />

          <InfoGuideLayer />

          <div className="cg-article-mid-cta">
            <PartnershipCTA variant="top" />
          </div>

          <section className="cg-editorial-grid" aria-label="골반필러 보조 이미지">
            {editorialImages.map((image) => (
              <figure key={image.src} className="cg-editorial-grid__item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="cg-editorial-grid__img"
                />
              </figure>
            ))}
          </section>

          <ClinicMap />

          <PageTocCards items={HOME_TOC} />

          <ArticleBody sections={HOME_SECTIONS} />

          <section
            id="home-faq"
            className="cg-faq-section cg-article-section cg-main-faq"
            aria-labelledby="home-faq-title"
          >
            <p className="cg-article-section__num">06</p>
            <h2 id="home-faq-title">골반필러 FAQ</h2>
            {HOME_FAQ_INTRO.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <FaqAccordion items={faqs} title="" id="home-faq-list" />
            <p className="cg-home-faq-more">
              <Link href={ROUTES.faq}>골반필러 FAQ 전체 보기</Link>
            </p>
          </section>

          <ArticleConclusion
            heading="골반필러를 검토할 때 마지막으로 확인할 점"
            body={HOME_CONCLUSION}
          />

          <RelatedPages showAll />

          <PartnershipCTA variant="bottom" />
        </div>
      </div>

      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            name: HOME_INTRO.h1,
            description: HOME_SEO.description,
            path: "/",
            image: heroImage?.src,
            type: "WebPage",
          }),
          itemListJsonLd(),
          faqPageJsonLd(faqs, "/"),
        ]}
      />
    </>
  );
}
