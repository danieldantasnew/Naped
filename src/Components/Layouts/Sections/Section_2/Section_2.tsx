import React from "react";
import styles from "./Section_2.module.css";
import { Naped } from "../../../../Types/types";
import CardDetails from "../../../CardDetails/CardDetails";
import H2 from "../../../Helper/H2/H2";
import Card from "../../../Card/Card";

const Section_2 = ({ data }: { data: Naped[] }) => {
  const [newData, setNewData] = React.useState<Naped[] | null>(null);

  React.useEffect(() => {
    setNewData(data.slice(0, -3));
  }, [data]);

  if (!newData) return null;
  return (
    <section className={styles.Section_2}>
      <div className={styles.container_1}>
        {newData.map((item) => (
          <CardDetails
            key={item.id}
            id={item.id}
            name={item.name}
            images={item.images}
            date={item.date}
            title={item.title}
            previous={item.previous}
          />
        ))}
      </div>
      <div className={styles.container_2}>
        <H2 label="Leia também"/>
        {data.slice(-3).map((item) =>
          <Card
            key={item.id}
            id={item.id}
            images={item.images}
            name={item.name}
            title={item.title}
            classStyle={styles.configForCardComponent}
          />
        )}
      </div>
    </section>
  );
};

export default Section_2;
