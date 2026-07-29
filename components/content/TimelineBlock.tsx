import type { SectionStep } from "@/types/content";

type TimelineBlockProps = {
  items: SectionStep[];
};

export function TimelineBlock({ items }: TimelineBlockProps) {
  return (
    <ol className="cg-visual cg-visual--timeline">
      {items.map((item) => (
        <li key={item.label}>
          <span className="cg-visual__timeline-dot" aria-hidden="true" />
          <div>
            <strong>{item.label}</strong>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
