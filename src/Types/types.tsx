export type Category = ("animes" | "movies" | "games" | "series")[];

export type Images = {
  card: string;
  largeSecondImage: string;
  customSecondImage: string;
}

export interface Naped {
  id: number;
  name: string;
  title: string;
  infoAboutItem: string;
  paragraph_1: string;
  paragraph_2: string;
  date: string;
  clicks: number;
  images: Images;
  categories: Category;
}