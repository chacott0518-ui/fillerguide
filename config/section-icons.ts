/**
 * 섹션 layout 기반 장식 아이콘.
 * slug 분기 없이 layout/데이터로만 결정한다.
 */
import type { SectionLayout } from "@/types/content";

const LAYOUT_ICONS: Partial<Record<SectionLayout, string>> = {
  comparison: "💬",
  checklist: "✅",
  steps: "🔎",
  timeline: "⏱️",
  "info-blocks": "💡",
  "info-grid": "💡",
  "compare-table": "📊",
  "responsive-table": "🧾",
  callout: "⚠️",
  conclusion: "✅",
  prose: "📌",
};

export function getLayoutDecorativeIcon(
  layout?: SectionLayout,
): string {
  if (!layout) return "📌";
  return LAYOUT_ICONS[layout] ?? "📌";
}
