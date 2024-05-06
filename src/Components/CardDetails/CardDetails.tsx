import Card from "../Card/Card";
import Button from "../Form/Button/Button";
import styles from "./CardDetails.module.css";

type typeCardDetails = {
  id: number;
  title: string;
  info: string;
  moreInfo: string;
  date: string;
  images: string[];
}

const CardDetails = ({id, images, title, info, moreInfo, date}: typeCardDetails) => {
  return (
    <div className={styles.CardDetails}>
      <Card
        id={id}
        images={images}
        title={title}
        classStyle={styles.configForCardComponent}
      />
      <div className={styles.contentOfCard}>
        <h2>{info}</h2>
        <p>{moreInfo}</p>
        <p>{date}</p>
        <Button label="Ler notícia" onClick={(e)=> e.preventDefault()}/>
      </div>
    </div>
  );
};

export default CardDetails;
