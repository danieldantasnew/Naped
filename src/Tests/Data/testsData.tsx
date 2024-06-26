import { Naped } from "../../Types/types";
import React from "react";
import { Context } from "../../Store/Context/DataContext";

export const mockData: Naped[] = [
  {
    id: 1,
    author: "Author 1",
    name: "Name 1",
    title: "Title 1",
    paragraphs: ["Paragraph 1"],
    previous: "Previous 1",
    date: "2024-05-06 14:00:00",
    clicks: 100,
    images: {
      card: "pathimgcard1.jpg",
      customSecondImage: "pathimgcustom1.jpg",
      largeSecondImage: "pathimglarge1.jpg",
    },
    categories: ["games", "movies"],
  },
  {
    id: 2,
    author: "Author 2",
    name: "Name 2",
    title: "Title 2",
    paragraphs: ["Paragraph 2"],
    previous: "Previous 2",
    date: "2024-05-09 14:00:01",
    clicks: 200,
    images: {
      card: "pathimgcard2.jpg",
      customSecondImage: "pathimgcustom2.jpg",
      largeSecondImage: "pathimglarge2.jpg",
    },
    categories: ["animes", "movies"],
  },
  {
    id: 3,
    author: "Author 3",
    name: "Name 3",
    title: "Title 3",
    paragraphs: ["Paragraph 3"],
    previous: "Previous 3",
    date: "2024-05-09 14:00:02",
    clicks: 300,
    images: {
      card: "pathimgcard3.jpg",
      customSecondImage: "pathimgcustom3.jpg",
      largeSecondImage: "pathimglarge3.jpg",
    },
    categories: ["animes", "movies"],
  },
  {
    id: 4,
    author: "Author 4",
    name: "Name 4",
    title: "Title 4",
    paragraphs: ["Paragraph 4"],
    previous: "Previous 4",
    date: "2024-05-09 14:00:03",
    clicks: 400,
    images: {
      card: "pathimgcard4.jpg",
      customSecondImage: "pathimgcustom4.jpg",
      largeSecondImage: "pathimglarge4.jpg",
    },
    categories: ["animes", "movies"],
  },
  {
    id: 5,
    author: "Author 5",
    name: "Name 5",
    title: "Title 5",
    paragraphs: ["Paragraph 5"],
    previous: "Previous 5",
    date: "2024-05-09 14:00:00",
    clicks: 500,
    images: {
      card: "pathimgcard5.jpg",
      customSecondImage: "pathimgcustom5.jpg",
      largeSecondImage: "pathimglarge5.jpg",
    },
    categories: ["games", "movies"],
  },
  {
    id: 6,
    author: "Author 6",
    name: "Name 6",
    title: "Title 6",
    paragraphs: ["Paragraph 6"],
    previous: "Previous 6",
    date: "2024-05-09 14:00:12",
    clicks: 600,
    images: {
      card: "pathimgcard6.jpg",
      customSecondImage: "pathimgcustom6.jpg",
      largeSecondImage: "pathimglarge6.jpg",
    },
    categories: ["games", "movies"],
  },
  {
    id: 7,
    author: "Author 7",
    name: "Name 7",
    title: "Title 7",
    paragraphs: ["Paragraph 7"],
    previous: "Previous 7",
    date: "2024-05-09 14:00:00",
    clicks: 700,
    images: {
      card: "pathimgcard7.jpg",
      customSecondImage: "pathimgcustom7.jpg",
      largeSecondImage: "pathimglarge7.jpg",
    },
    categories: ["games", "movies"],
  },
  {
    id: 8,
    author: "Author 8",
    name: "Name 8",
    title: "Title 8",
    paragraphs: ["Paragraph 8"],
    previous: "Previous 8",
    date: "2024-05-09 14:00:00",
    clicks: 800,
    images: {
      card: "pathimgcard8.jpg",
      customSecondImage: "pathimgcustom8.jpg",
      largeSecondImage: "pathimglarge8.jpg",
    },
    categories: ["games", "series"],
  },
  {
    id: 9,
    author: "Author 9",
    name: "Name 9",
    title: "Title 9",
    paragraphs: ["Paragraph 9"],
    previous: "Previous 9",
    date: "2024-05-09 14:00:07",
    clicks: 900,
    images: {
      card: "pathimgcard9.jpg",
      customSecondImage: "pathimgcustom9.jpg",
      largeSecondImage: "pathimglarge9.jpg",
    },
    categories: ["games", "series"],
  },
  {
    id: 10,
    author: "Author 10",
    name: "Name 10",
    title: "Title 10",
    paragraphs: ["Paragraph 10"],
    previous: "Previous 10",
    date: "2024-05-09 14:00:08",
    clicks: 1000,
    images: {
      card: "pathimgcard10.jpg",
      customSecondImage: "pathimgcustom10.jpg",
      largeSecondImage: "pathimglarge10.jpg",
    },
    categories: ["games", "series"],
  },
];

export const MockDataContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const mockValue = {
    data: mockData,
    loading: false,
    error: null,
  };

  return <Context.Provider value={mockValue}>{children}</Context.Provider>;
};
