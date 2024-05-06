import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Button from "../Form/Button/Button";
import styles from "./CardDetails.module.css";
import FormatDate from "../../Functions/NormalizeDate/FormatDate";
import StringToDate from "../../Functions/StringToDate/StringToDate";

type typeCardDetails = {
  id: number;
  title: string;
  info: string;
  moreInfo: string;
  date: string;
  images: string[];
}

const CardDetails = ({ id, images, title, info, moreInfo, date }: typeCardDetails) => {
  
  const navigate = useNavigate();

  function navigateTo(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, src: number) {
    e.preventDefault();
    navigate(`/naped/${src}`);
  }

  const newDate = StringToDate(date);

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
        <p style={{color: "var(--dark-40)"}}>{newDate ? FormatDate(newDate): ''}</p>
        <Button label="Ler notícia" onClick={(e)=> navigateTo(e, id)}/>
      </div>
    </div>
  );
};

export default CardDetails;
