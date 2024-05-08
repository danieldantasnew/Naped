import styles from "./Categories.module.css";
import { Naped } from "../../../Types/types";
import Card from "../../Card/Card";

const Categories = ({ newData }: { newData: Naped[] | null }) => {
  if (!newData) return null;
  return (
    <div className={`${styles.cards} ${newData.length === 0 ? styles.onlyChildIsP : ''}`}>
      {newData.length > 0 ? (
        newData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            images={item.images}
            title={item.title}
            info={item.info}
          />
        ))
      ) : (
        <p>Nenhum resultado encontrado ;(</p>
      )}
    </div>
  );
};

export default Categories;
