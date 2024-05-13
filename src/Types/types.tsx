export type Category = ("animes" | "movies" | "games" | "series")[];

export type Images = {
  card: string;
  largeSecondImage: string;
  customSecondImage: string;
}

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