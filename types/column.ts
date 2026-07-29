export type ColumnStatus = "draft" | "published";

export type ColumnEntry = {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  keywords: string[];
  thumbnail: string;
  socialImage?: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs?: string[];
  sources?: string[];
  author?: string;
  reviewer?: string;
  status: ColumnStatus;
};
