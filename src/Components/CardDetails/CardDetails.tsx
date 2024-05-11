import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Button from "../Form/Button/Button";
import styles from "./CardDetails.module.css";
import StringToDate from "../../Functions/StringToDate/StringToDate";
import FormatDate from "../../Functions/NormalizeDate/FormatDate";
import { Images } from "../../Types/types";

type typeCardDetails = {
  id: number;
  title: string;
  info: string;
  moreInfo: string;
  date: string;
  images: Images;
}

const CardDetails = ({ id, images, title, info, moreInfo, date }: typeCardDetails) => {
  
  const navigate = useNavigate();

  function navigateTo(e: React.PointerEvent<HTMLButtonElement>, src: number) {
    e.preventDefault();
    navigate(`/item/${src}`);
  }

  const newDate = StringToDate(date);

  return (
    <div className={styles.CardDetails}>
      <Card
        id={id}
        images={images}
        title={title}
        classStyle={styles.configForCardComponent}
        activeFunction={false}
        animationOn={false}
      />
      <div className={styles.contentOfCard}>
        <h2>{info}</h2>
        <p>{moreInfo}</p>
        <p>{newDate ? FormatDate(newDate): ''}</p>
        <Button label="Ler notícia" aria-label="Ler notícia" onPointerDown={(e)=> navigateTo(e, id)}/>
      </div>
    </div>
  );
};

export default CardDetails;
