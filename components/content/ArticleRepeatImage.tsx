import Image from "next/image";

import type { ContentImage } from "@/types/content";

type ArticleRepeatImageProps = {
  image: ContentImage;
};

/** 본문 중간 반복 썸네일 — 장식용이므로 빈 alt */
export function ArticleRepeatImage({ image }: ArticleRepeatImageProps) {
  if (!image?.src) return null;

  return (
    <figure className="cg-article-repeat" aria-hidden="true">
      <Image
        src={image.src}
        alt=""
        width={image.width || 1200}
        height={image.height || 1200}
        sizes="(max-width: 767px) 100vw, 720px"
        className="cg-article-repeat__img"
      />
    </figure>
  );
}
