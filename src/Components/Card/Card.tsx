import styles from "./Card.module.css";
import Modal from "../Helper/Modal/Modal";
import { useNavigate } from "react-router-dom";


type typeCard = {
  id: number;
  title: string;
  images: string[];
  activeFunction?: boolean;
  info?: string;
  classStyle?: CSSModuleClasses[string];
  noLargeFirstCard?: boolean;
};

const Card = ({ id, title, images, info, classStyle, activeFunction = true, noLargeFirstCard = true }: typeCard) => {
  const navigate = useNavigate();

  function openPage(id: number) {
    navigate(`/item/${id}`);
  }

  return (
    <div
      className={`
        ${styles.imageContent}
        ${noLargeFirstCard ? styles.noLargeFirstCard : ''} 
        ${classStyle} 
        `}
      onClick={activeFunction ? () => openPage(id): ()=> ''}>
        <Modal stylesFrom={styles.configModal} />
        <img src={images[0]} alt={`Foto de ${title}`} />
        <h2>{title}</h2>
        {info ? <p>{info}</p> : ""}
    </div>
  );
};

export default Card;
