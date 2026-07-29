import type { SectionStep } from "@/types/content";

type StepsBlockProps = {
  steps: SectionStep[];
};

/**
 * 단계형 안내. label에 번호가 포함되어 있으므로 별도 장식 인덱스는 두지 않는다.
 */
export function StepsBlock({ steps }: StepsBlockProps) {
  return (
    <ol className="cg-visual cg-visual--steps">
      {steps.map((step) => (
        <li key={step.label}>
          <div className="cg-visual__step-body">
            <strong className="cg-visual__step-title">{step.label}</strong>
            <span className="cg-visual__step-text">{step.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
