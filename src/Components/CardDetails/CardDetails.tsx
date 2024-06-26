import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Button from "../Form/Button/Button";
import styles from "./CardDetails.module.css";
import StringToDate from "../../Functions/StringToDate/StringToDate";
import FormatDate from "../../Functions/NormalizeDate/FormatDate";
import { Naped } from "../../Types/types";

type typeCardDetails = Omit<React.ComponentProps<'div'>, 'id'> & Omit<Naped, 'author' | 'paragraphs' | 'clicks' | 'categories'>

const CardDetails = ({ id, images, name, title, previous, date,...props }: typeCardDetails) => {
  
  const navigate = useNavigate();

  function navigateTo(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, src: number) {
    e.preventDefault();
    navigate(`/item/${src}`);
  }

  const newDate = StringToDate(date);

  return (
    <div className={styles.CardDetails} {...props}>
      <Card
        id={id}
        images={images}
        name={name}
        classStyle={styles.configForCardComponent}
        activeFunction={false}
        animationOn={false}
      />
      <div className={styles.contentCard}>
        <h2>{title}</h2>
        <p>{previous}</p>
        <p>{newDate ? FormatDate(newDate): ''}</p>
        <Button label="Ler notícia" aria-label="Ler notícia" onClick={(e)=> navigateTo(e, id)}/>
      </div>
    </div>
  );
};

export default CardDetails;
