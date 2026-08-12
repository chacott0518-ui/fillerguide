"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FaqAccordion } from "@/components/content/FaqList";
import { ROUTES } from "@/config/routes";
import { getFaqsByIds } from "@/content/faqs";
import { INFO_HUB_CATEGORIES, INFO_HUB_FAQ_IDS, getInfoHubEntries } from "@/content/info-hub";

const ALL_TAB_ID = "all" as const;

export function InfoHubTemplate() {
  const entries = useMemo(() => getInfoHubEntries(), []);
  const [activeCategory, setActiveCategory] =
    useState<(typeof INFO_HUB_CATEGORIES)[number]["id"] | typeof ALL_TAB_ID>(
      ALL_TAB_ID,
    );

  const visibleEntries =
    activeCategory === ALL_TAB_ID
      ? entries
      : entries.filter((entry) => entry.categoryId === activeCategory);

  const hubFaqs = getFaqsByIds(INFO_HUB_FAQ_IDS);

  return (
    <article className="cg-info-hub cg-page--enter">
      <div className="cg-container">
        <Breadcrumb
          items={[
            { label: "골반필러", href: ROUTES.home },
            { label: "골반필러 의료정보" },
          ]}
        />

        <header className="cg-info-hub__header">
          <p className="cg-info-hub__eyebrow">의료정보 탐색</p>
          <h1 className="cg-info-hub__h1">골반필러 의료정보</h1>
          <p className="cg-info-hub__lead">
            상담 준비부터 시술 이해, 회복·관리, 경과·유지, 안전·주의, 의료정보
            확인 방법까지 주제별로 정리한 골반필러 의료정보 가이드입니다.
          </p>
        </header>

        <nav className="cg-info-hub__tabs" aria-label="의료정보 카테고리">
          <div className="cg-info-hub__tabs-track">
            <button
              type="button"
              className={`cg-info-hub__tab${activeCategory === ALL_TAB_ID ? " is-active" : ""}`}
              aria-pressed={activeCategory === ALL_TAB_ID}
              onClick={() => setActiveCategory(ALL_TAB_ID)}
            >
              전체
            </button>
            {INFO_HUB_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`cg-info-hub__tab${activeCategory === category.id ? " is-active" : ""}`}
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                <span aria-hidden="true">{category.emoji}</span> {category.label}
              </button>
            ))}
          </div>
          <span className="cg-info-hub__tabs-fade" aria-hidden="true" />
        </nav>

        <ul className="cg-info-hub__grid">
          {visibleEntries.map((entry) => (
            <li key={entry.id}>
              <Link href={entry.href} className="cg-info-hub__card">
                <span className="cg-info-hub__card-title">{entry.title}</span>
                <span className="cg-info-hub__card-desc">
                  {entry.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {hubFaqs.length > 0 ? (
          <FaqAccordion
            items={hubFaqs}
            title="골반필러 의료정보 자주 묻는 질문"
            id="info-hub-faq"
            className="cg-info-hub__faq"
          />
        ) : null}

        <nav className="cg-info-hub__back" aria-label="골반필러 메인으로 이동">
          <Link href={ROUTES.home}>← 골반필러 메인으로 돌아가기</Link>
        </nav>
      </div>
    </article>
  );
}
