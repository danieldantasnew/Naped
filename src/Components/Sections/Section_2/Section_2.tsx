import React from "react";
import { Naped } from "../../../Types/types";
import Card from "../../Card/Card";
import styles from "./Section_2.module.css";
import CardDetails from "../../CardDetails/CardDetails";

const Section_2 = ({ data }: { data: Naped[] }) => {
  const [newData, setNewData] = React.useState<Naped[] | null>(null);

  React.useEffect(() => {
    setNewData(data.slice(3, -3));
  }, [data]);

  if (!newData) return null;
  return (
    <section className={styles.Section_2}>
      <div className={styles.container_1}>
        {newData.map((item) => (
          <CardDetails
            key={item.id}
            id={item.id}
            title={item.title}
            images={item.images}
            date={item.date}
            info={item.info}
            moreInfo={item.moreInfo}
          />
        ))}
      </div>
      <div className={styles.container_2}>
        <h2>Leia também</h2>
        {data.slice(-3).map((item) =>
          <Card
            key={item.id}
            id={item.id}
            images={item.images}
            title={item.title}
            info={item.info}
            classStyle={styles.configForCardComponent}
          />
        )}
      </div>
    </section>
  );
};

export default Section_2;
