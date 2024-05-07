import React from 'react'
import { Category, Naped } from '../Types/types';

function filterByCategory(arrayData: Naped[], category: Category, search?: string) {
  if (search) {
    const escapedContentSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedContentSearch, 'i');
    return arrayData
      .filter((item) => item.category === category)
      .filter((item) => regex.test(item.title));
  } 
  return arrayData.filter((item)=> item.category === category);
}

const useCategoryData = (data: Naped[] | null, category: Category, search?: string) => {
  const [ dataCategory, setDataCategory ] = React.useState<Naped[] | null>(null);
  
  React.useEffect(() => {
    if (data && category) {
      if (search) setDataCategory(filterByCategory(data, category, search));
      else setDataCategory(filterByCategory(data, category));
    }
  }, [data, category, search]);

  return dataCategory;
}

export default useCategoryData;