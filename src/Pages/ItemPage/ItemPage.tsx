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
import Flex from "../../Components/Layouts/Flex/Flex";
import ErrorComponent from "../../Components/Helper/ErrorComponent/ErrorComponent";

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
  if (error) return <ErrorComponent message={error} />;
  if(!data || !dataContext.data) return <ErrorComponent message="Não há itens para mostrar" />;

  return (
    <section className={`${styles.ItemPage} animationLeft`}>
      <Flex classStyle={styles.content_1}>
        <Flex classStyle={styles.container}>
          <h2>{data.title}</h2>
          <p>{data.previous}</p>
          <p id={styles.detailsInfo}>Por <strong>{ data.author }</strong> - Publicado em {newDate}</p>
        </Flex>
        <Card
          key={data.id}
          id={data.id}
          images={data.images}
          name={data.name}
          classStyle={styles.configCard}
          activeFunction={false}
          animationOn={false}
        />
        {data.paragraphs.slice(0, -1).map((item, index) => <p key={index}>{item}</p>)}
        <img src={data.images.largeSecondImage} alt={`Foto de ${data.name}`} />
        {data.paragraphs.slice(-1).map((item, index) => <p key={index}>{item}</p>)}
      </Flex>
      <LatestNews data={dataContext.data} />
    </section>
  );
};

export default ItemPage;
