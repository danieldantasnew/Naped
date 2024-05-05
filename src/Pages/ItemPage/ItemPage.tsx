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
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clicks: fetchData.data.clicks + 1,
        }),
      });
    }
  }, [fetchData, id]);

  return <div>ItemPage</div>;
};

export default ItemPage;
