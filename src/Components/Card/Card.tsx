import styles from "./Card.module.css";
import Modal from "../Helper/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Images } from "../../Types/types";


type typeCard = {
  id: number;
  title: string;
  images: Images;
  activeFunction?: boolean;
  info?: string;
  classStyle?: CSSModuleClasses[string];
  noLargeFirstCard?: boolean;
  animationOn?: boolean;
};

const Card = ({ id, title, images, info, classStyle, activeFunction = true, noLargeFirstCard = true, animationOn = true }: typeCard) => {
  const navigate = useNavigate();

  function openPage(id: number) {
    navigate(`/item/${id}`);
  }

  return (
    <div
      className={`
        ${`${styles.imageContent} ${animationOn ? styles.animationOn : ''}`}
        ${noLargeFirstCard ? styles.noLargeFirstCard : ''} 
        ${classStyle} 
        `}
      onClick={activeFunction ? () => openPage(id): ()=> ''}>
        <Modal stylesFrom={styles.configModal} />
        <img
        src={!images.card ? "../src/assets/image/WithoutPhoto/elric.jpg" : images.card }
        alt={`Foto de ${title}`}
        />
        <h2>{title}</h2>
        {info ? <p>{info}</p> : ""}
    </div>
  );
};

export default Card;
