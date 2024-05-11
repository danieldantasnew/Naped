import React from "react";
import styles from "./LatestNews.module.css";
import StringToDate from "../../Functions/StringToDate/StringToDate";
import { Naped } from "../../Types/types";
import Card from "../Card/Card";
import H2 from "../Helper/H2/H2";

function sortByRecents(dataCome: Naped[]) {
  const dataConvert = dataCome.sort((itemA, itemB) => {
    const dateA = StringToDate(itemA.date)?.getTime();
    const dateB = StringToDate(itemB.date)?.getTime();

    if (!dateA || !dateB) return 0;

    return dateB - dateA;
  });

  return dataConvert;
}

const LatestNews = ({ data }: { data: Naped[] }) => {
  const [newData, setNewData] = React.useState<Naped[] | null>(null);

  React.useEffect(() => {
    if (data) {
      const dataConverted = sortByRecents(data.slice()).slice(0, 6);
      setNewData(dataConverted);
    }
  }, [data]);

  if (!newData) return null;

  return (
    <section className={styles.LatestNews}>
      <H2 label="Notícias mais recentes" />
      <div>
        {newData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            images={item.images}
            title={item.title}
            info={item.info}
            classStyle={styles.configCard}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
