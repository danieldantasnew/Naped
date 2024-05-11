import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Naped } from "../../Types/types";
import Card from "../../Components/Card/Card";
import styles from "./ItemPage.module.css";
import Loading from "../../Components/Helper/Loading/Loading";
import StringToDate from "../../Functions/StringToDate/StringToDate";
import FormatDate from "../../Functions/NormalizeDate/FormatDate";
import { useDataContext } from "../../Store/Context/DataContext";
import LatestNews from "../../Components/LatestNews/LatestNews";

const ItemPage = () => {
  const { id } = useParams();
  const [newDate, setNewDate] = React.useState<string | null>(null);
  const {data, loading, error} = useFetch<Naped>(`http://localhost:3000/naped/${id}`);
  const dataContext = useDataContext();

  React.useEffect(() => {
    if (data) {
      fetch(`http://localhost:3000/naped/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clicks: Number(data.clicks) + 1,
        }),
      });
      const dateConverted = StringToDate(data.date);
      if(dateConverted) setNewDate(FormatDate(dateConverted, true));
    }
  }, [data, id]);


  if (loading) return <Loading />;
  if(!data || !dataContext.data) return null;

  return (
    <section className={`${styles.ItemPage} animationLeft`}>
      <h2>{data.info}</h2>
      <p>{data.moreInfo}</p>
      <p>Publicado em {newDate}</p>
      <Card
        key={data.id}
        id={data.id}
        images={data.images}
        title={data.title}
        classStyle={styles.configCard}
        activeFunction={false}
        animationOn={false}
      />
      <LatestNews data={dataContext.data} />
    </section>
  );
};

export default ItemPage;
