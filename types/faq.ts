export type FaqItem = {
  id: string;
  order: number;
  question: string;
  answer: string;
  relatedSlug?: string;
  relatedLabel?: string;
  categories: string[];
};
