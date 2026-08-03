import Link from "next/link";

import type { HubContextLink as HubContextLinkData } from "@/types/content";

type HubContextLinkProps = {
  link: HubContextLinkData;
};

/**
 * 하위 페이지 → 메인 허브(`/`) 문맥링크.
 * 핵심요약 다음·목차 직전에 1회 출력한다.
 */
export function HubContextLink({ link }: HubContextLinkProps) {
  return (
    <p className="cg-hub-context-link">
      {link.before}
      <Link href={link.href} className="cg-hub-context-link__a">
        {link.anchor}
      </Link>
      {link.after}
    </p>
  );
}
