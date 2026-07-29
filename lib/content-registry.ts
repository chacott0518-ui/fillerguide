import { getFaqsByIds } from "@/content/faqs";
import {
  ALL_PAGE_HREFS,
  CONTENT_CARDS,
  CONTENT_PAGES,
  getContentPageById,
  getContentPageBySlug,
} from "@/content/pages";
import { getPublishedColumns } from "@/content/columns";
import type { ContentPage } from "@/types/content";
import type { FaqItem } from "@/types/faq";

export {
  ALL_PAGE_HREFS,
  CONTENT_CARDS,
  CONTENT_PAGES,
  getContentPageById,
  getContentPageBySlug,
  getPublishedColumns,
};

export { getFaqsByIds };

export function getPageFaqs(page: ContentPage): FaqItem[] {
  return getFaqsByIds(page.faqIds);
}

export function getPublicUrls(): string[] {
  return [...ALL_PAGE_HREFS];
}
