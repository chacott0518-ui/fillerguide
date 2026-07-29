import type { SectionStep } from "@/types/content";

type InfoGridProps = {
  items: SectionStep[];
  /** 모바일 열 수. PC는 기존 그리드 규칙 유지 */
  mobileColumns?: 1 | 2;
};

export function InfoGrid({ items, mobileColumns = 1 }: InfoGridProps) {
  return (
    <div
      className="cg-visual cg-visual--blocks"
      data-mobile-columns={mobileColumns}
    >
      {items.map((block) => (
        <div key={block.label} className="cg-visual__block">
          <h3>{block.label}</h3>
          <p>{block.text}</p>
        </div>
      ))}
    </div>
  );
}
