import Image from "next/image";

import type { ContentImage } from "@/types/content";

type ArticleImagePairProps = {
  /** 권장: 데이터에서 전달하는 상단 이미지 배열 (1~2장) */
  images?: ContentImage[] | null;
  /** @deprecated images 우선 */
  primaryImage?: ContentImage | null;
  /** @deprecated images 우선 */
  secondaryImage?: ContentImage | null;
  primaryAlt?: string;
  secondaryAlt?: string;
  /** 첫 번째 이미지만 priority 검토 */
  priority?: boolean;
};

/**
 * 범용 상단 이미지 세트.
 * images 길이에 따라 1장 또는 2장을 렌더링한다.
 */
export function ArticleImagePair({
  images,
  primaryImage,
  secondaryImage,
  primaryAlt,
  secondaryAlt,
  priority = false,
}: ArticleImagePairProps) {
  const fromArray = (images ?? []).filter((item) => Boolean(item?.src));
  const legacy = [
    primaryImage
      ? {
          ...primaryImage,
          alt: primaryAlt ?? primaryImage.alt,
        }
      : null,
    secondaryImage
      ? {
          ...secondaryImage,
          alt: secondaryAlt ?? secondaryImage.alt,
        }
      : null,
  ].filter((item): item is ContentImage => Boolean(item?.src));

  const list = fromArray.length > 0 ? fromArray : legacy;

  if (list.length === 0) return null;

  const pair = list.length > 1;

  return (
    <div
      className={`cg-image-pair${pair ? " cg-image-pair--dual" : " cg-image-pair--single"}`}
    >
      {list.map((image, index) => (
        <figure key={`${image.src}-${index}`} className="cg-image-pair__item">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 1200}
            height={image.height || 1200}
            sizes={
              pair
                ? "(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 580px"
                : "(max-width: 767px) 100vw, 720px"
            }
            className="cg-image-pair__img"
            priority={priority && index === 0}
          />
        </figure>
      ))}
    </div>
  );
}
