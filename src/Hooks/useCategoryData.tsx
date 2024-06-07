import React from "react";
import { Naped } from "../Types/types";

type Category = "animes" | "movies" | "games" | "series";

function filterByCategory(
  arrayData: Naped[],
  category: Category,
  search?: string
) {
  if (search) {
    const escapedContentSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedContentSearch, "i");
    return arrayData
      .filter((item) => item.categories.includes(category))
      .filter((item) => regex.test(item.name));
  }
  return arrayData.filter((item) => item.categories.includes(category));
}

const useCategoryData = (
  data: Naped[] | null,
  category: Category,
  search?: string
) => {
  const [dataCategory, setDataCategory] = React.useState<Naped[] | null>(null);

  React.useEffect(() => {
    if (data && category) {
      if (search) setDataCategory(filterByCategory(data, category, search));
      else setDataCategory(filterByCategory(data, category));
    }
  }, [data, category, search]);

  return dataCategory;
};

export default useCategoryData;
