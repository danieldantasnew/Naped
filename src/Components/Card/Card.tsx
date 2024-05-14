import styles from "./Card.module.css";
import Modal from "../Helper/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Images } from "../../Types/types";


type typeCard = {
  id: number;
  name: string;
  images: Images;
  activeFunction?: boolean;
  title?: string;
  classStyle?: CSSModuleClasses[string];
  noLargeFirstCard?: boolean;
  animationOn?: boolean;
};

const Card = ({ id, name, images, title, classStyle, activeFunction = true, noLargeFirstCard = true, animationOn = true }: typeCard) => {
  const navigate = useNavigate();

  function openPage(event: React.PointerEvent<HTMLDivElement>, id: number) {
    event.preventDefault();
    navigate(`/item/${id}`);
  }

  return (
    <div
      className={`
        ${`${styles.imageContent} 
        ${animationOn ? styles.animationOn : ''}`}
        ${noLargeFirstCard ? styles.noLargeFirstCard : ''} 
        ${classStyle ? classStyle : ''} 
        `}
      onPointerDown={activeFunction ? (event) => openPage(event, id): ()=> ''}>
        <Modal stylesFrom={title ? styles.configModal : styles.configModalNoInfo} />
        <img
          src={!images.card ? "../src/assets/image/WithoutPhoto/elric.jpg" : images.card }
          alt={`Foto de ${name}`}
        />
        <h2>{name}</h2>
        {title ? <p>{title}</p> : ""}
    </div>
  );
};

export default Card;
