export type Category = "animes" | "movies" | "games" | "series";

export interface Naped {
  id: number;
  title: string;
  info: string;
  moreInfo: string;
  date: string;
  clicks: number;
  images: string[];
  category: Category;
}