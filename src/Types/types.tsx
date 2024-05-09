export type Category = ("animes" | "movies" | "games" | "series")[];

export type Images = {
  card: string;
  largeSecondImage: string;
  customSecondImage: string;
}

export interface Naped {
  id: number;
  title: string;
  info: string;
  moreInfo: string;
  date: string;
  clicks: number;
  images: Images;
  categories: Category;
}