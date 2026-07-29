/**
 * 칼럼 확장용 레지스트리.
 * status가 published인 항목만 sitemap·목록에 포함한다.
 * 현재는 공개 칼럼이 없으므로 빈 배열을 유지한다.
 */
import type { ColumnEntry } from "@/types/column";

export const COLUMNS: ColumnEntry[] = [];

export function getPublishedColumns(): ColumnEntry[] {
  return COLUMNS.filter((column) => column.status === "published");
}

export function getColumnBySlug(slug: string): ColumnEntry | undefined {
  return getPublishedColumns().find((column) => column.slug === slug);
}
