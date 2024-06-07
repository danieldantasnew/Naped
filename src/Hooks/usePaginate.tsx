import React from "react";
import { Naped, PaginatedItems } from "../Types/types";

interface TypePaginatedReceives {
  data: Naped[] | null;
  limit: number;
  page: number;
}

const usePaginate = ({
  data,
  limit,
  page,
}: TypePaginatedReceives): PaginatedItems | null => {
  const [dataSliced, setDataSliced] = React.useState<Naped[] | null>();
  React.useEffect(() => {
    if (data) {
      if (page === 1) {
        setDataSliced(data.slice(0, limit));
      } else {
        setDataSliced(data.slice(limit * page - limit, limit * page));
      }
    }
  }, [data, page, limit]);

  if (!dataSliced || !data) return null;

  return {
    first: 1,
    prev: page - 1 > 0 ? page - 1 : null,
    next: page + 1 <= Math.ceil(data.length / limit) ? page + 1 : null,
    last: Math.ceil(data.length / limit),
    pages: Math.ceil(data.length / limit),
    items: data.length,
    data: dataSliced,
  };
};

export default usePaginate;
