"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { ArticleSectionBlock } from "@/components/content/ArticleSectionBlock";
import type { ArticleSection } from "@/types/content";

type HomeArticleSliderProps = {
  sections: ArticleSection[];
  showNumbers?: boolean;
};

const MOBILE_MQ = "(max-width: 767px)";

export function HomeArticleSlider({
  sections,
  showNumbers = true,
}: HomeArticleSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobileRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const applyViewportHeight = useCallback((index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    if (!isMobileRef.current) {
      viewport.style.height = "";
      return;
    }

    const slide = slideRefs.current[index];
    if (!slide) return;
    viewport.style.height = `${Math.ceil(slide.scrollHeight)}px`;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      isMobileRef.current = mq.matches;
      applyViewportHeight(activeIndex);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [activeIndex, applyViewportHeight]);

  useLayoutEffect(() => {
    applyViewportHeight(activeIndex);
  }, [activeIndex, applyViewportHeight, sections]);

  useEffect(() => {
    const slide = slideRefs.current[activeIndex];
    if (!slide || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => {
      applyViewportHeight(activeIndex);
    });
    ro.observe(slide);
    return () => ro.disconnect();
  }, [activeIndex, applyViewportHeight]);

  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (slides.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!isMobileRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = slides.indexOf(visible.target as HTMLDivElement);
        if (index >= 0) {
          setActiveIndex(index);
        }
      },
      {
        root: viewportRef.current,
        threshold: [0.45, 0.6, 0.75],
      },
    );

    slides.forEach((slide) => io.observe(slide));
    return () => io.disconnect();
  }, [sections]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    const slide = slideRefs.current[index];
    const viewport = viewportRef.current;
    if (slide && viewport && isMobileRef.current) {
      viewport.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });
    }
    requestAnimationFrame(() => applyViewportHeight(index));
  };

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next =
      (index + delta + sections.length) % sections.length;
    goToSlide(next);
    const buttons =
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
        ".cg-home-slider__tab",
      );
    buttons?.[next]?.focus();
  };

  return (
    <div className="cg-home-slider">
      <div
        className="cg-home-slider__tabs"
        role="tablist"
        aria-label="수술 전 알아야 할 정보 섹션"
      >
        {sections.map((section, index) => {
          const label =
            section.numberLabel || String(index + 1).padStart(2, "0");
          const isActive = index === activeIndex;
          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              className={`cg-home-slider__tab${isActive ? " is-active" : ""}`}
              aria-label={`${label} ${section.heading}`}
              aria-selected={isActive}
              aria-current={isActive ? "true" : undefined}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goToSlide(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div ref={viewportRef} className="cg-home-slider__viewport">
        <div className="cg-home-slider__track">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="cg-home-slider__slide"
              data-slide-index={index}
            >
              <ArticleSectionBlock
                section={section}
                showNumbers={showNumbers}
                className="cg-home-slider__card"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
