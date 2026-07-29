import { ArticleTemplate } from "@/components/content/ArticleTemplate";
import type { ContentPage } from "@/types/content";

type ContentPageViewProps = {
  page: ContentPage;
};

/** 하위 페이지 뷰 — 범용 ArticleTemplate에 위임 */
export function ContentPageView({ page }: ContentPageViewProps) {
  return <ArticleTemplate page={page} />;
}
