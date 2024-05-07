import React from 'react'
import { Category, Naped } from '../Types/types';

function filterByCategory(arrayData: Naped[], category: Category) {
  return arrayData.filter((item)=> item.category === category);
}

const useCategoryData = (data: Naped[] | null, category: Category) => {
  const [ dataCategory, setDataCategory ] = React.useState<Naped[] | null>(null);
  
  React.useEffect(() => {
    if (data && category) {
      setDataCategory(filterByCategory(data, category))
    }
  }, [data, category]);

  return dataCategory;
}

export default useCategoryData;