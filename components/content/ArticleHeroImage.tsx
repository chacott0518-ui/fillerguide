import Image from "next/image";

import type { ContentImage } from "@/types/content";

type ArticleHeroImageProps = {
  image: ContentImage;
  /** primary: 상단 대표 / secondary: 보조(필요 시) */
  variant?: "primary" | "secondary";
};

export function ArticleHeroImage({
  image,
  variant = "primary",
}: ArticleHeroImageProps) {
  const isSecondary = variant === "secondary";

  if (!image?.src) return null;

  return (
    <figure
      className={`cg-article-hero cg-article-hero--${variant}`}
      aria-hidden={isSecondary ? true : undefined}
    >
      <Image
        src={image.src}
        alt={isSecondary ? "" : image.alt}
        width={image.width || 1200}
        height={image.height || 1200}
        sizes="(max-width: 900px) 100vw, 1180px"
        className="cg-article-hero__img"
        priority={variant === "primary"}
      />
    </figure>
  );
}
