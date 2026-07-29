import Link from "next/link";

import type { FaqHubCardConfig } from "@/config/content-ui";

type FaqHubCardProps = {
  card: FaqHubCardConfig;
};

export function FaqHubCard({ card }: FaqHubCardProps) {
  return (
    <aside className="cg-faq-hub" aria-labelledby="faq-hub-title">
      <div className="cg-faq-hub__copy">
        <h2 id="faq-hub-title" className="cg-faq-hub__title">
          {card.title}
        </h2>
        <p className="cg-faq-hub__desc">{card.description}</p>
      </div>
      <Link className="cg-faq-hub__link" href={card.href}>
        {card.linkLabel}
      </Link>
    </aside>
  );
}
