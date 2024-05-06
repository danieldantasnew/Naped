import React from "react";
import { Naped } from "../../../Types/types";
import H2 from "../../Helper/H2/H2";
import Card from "../../Card/Card";
import styles from "./Section_3.module.css";

const Section_3 = ({ data }: { data: Naped[] }) => {
  const [newData, setNewData] = React.useState<Naped[] | null>(null);

  React.useEffect(() => {
    if (data) setNewData(data.slice(0, 6));
  }, [data]);

  if (!newData) return null;

  return (
    <section className={styles.Section_3}>
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

export default Section_3;
