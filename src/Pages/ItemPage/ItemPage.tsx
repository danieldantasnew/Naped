import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Naped } from "../../Types/types";

const ItemPage = () => {
  const { id } = useParams();
  const fetchData = useFetch<Naped>(`http://localhost:3000/naped/${id}`);

  React.useEffect(() => {
    if (fetchData.data) {
      fetch(`http://localhost:3000/naped/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title: fetchData.data.title,
          category: fetchData.data.category,
          clicks: fetchData.data.clicks + 1,
          date: fetchData.data.date,
          images: fetchData.data.images,
          info: fetchData.data.info,
          moreInfo: fetchData.data.moreInfo
        }),
      });
    }
  }, [fetchData, id]);

  return <div>ItemPage</div>;
};

export default ItemPage;
