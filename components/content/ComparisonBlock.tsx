import type { ComparisonSide } from "@/types/content";

type ComparisonBlockProps = {
  left: ComparisonSide;
  right: ComparisonSide;
  note?: string;
};

export function ComparisonBlock({ left, right, note }: ComparisonBlockProps) {
  return (
    <div className="cg-visual cg-visual--compare">
      <div className="cg-visual__compare-grid">
        <div className="cg-visual__compare-col">
          <h3>{left.label}</h3>
          <p>{left.text}</p>
        </div>
        <div className="cg-visual__compare-col">
          <h3>{right.label}</h3>
          <p>{right.text}</p>
        </div>
      </div>
      {note ? <p className="cg-visual__note">{note}</p> : null}
    </div>
  );
}
