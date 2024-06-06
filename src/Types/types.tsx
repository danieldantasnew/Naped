type Category = ("animes" | "movies" | "games" | "series")[];

type Images = {
  card: string;
  largeSecondImage: string;
  customSecondImage: string;
};

export interface Naped {
  id: number;
  author: string;
  name: string;
  title: string;
  paragraphs: string[];
  previous: string;
  date: string;
  clicks: number;
  images: Images;
  categories: Category;
}

export type PaginatedItems = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Naped[];
};
