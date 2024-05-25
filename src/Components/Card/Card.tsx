import React from "react";
import styles from "./Card.module.css";
import Modal from "../Helper/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Naped } from "../../Types/types";

type typeCard = Omit<React.ComponentProps<"div">, "id"> &
  Pick<Naped, "id" | "name" | "images"> & {
    activeFunction?: boolean;
    title?: string;
    classStyle?: CSSModuleClasses[string];
    noLargeFirstCard?: boolean;
    animationOn?: boolean;
  };

const Card = ({
  id,
  name,
  images,
  title,
  classStyle,
  activeFunction = true,
  noLargeFirstCard = true,
  animationOn = true,
  ...props
}: typeCard) => {
  const navigate = useNavigate();
  const [image, setImage] = React.useState(images.card);

  function openPage(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) {
    event.preventDefault();
    navigate(`/item/${id}`);
  }

  function handleErrorImage() {
    setImage("../src/assets/elric.jpg");
  }

  return (
    <div
      className={`
        ${`${styles.imageContent} 
        ${animationOn ? styles.animationOn : ""}`}
        ${noLargeFirstCard ? styles.noLargeFirstCard : ""} 
        ${classStyle ? classStyle : ""} 
        `}
      onClick={activeFunction ? (event) => openPage(event, id) : () => ""}
      {...props}
    >
      <Modal
        stylesFrom={title ? styles.configModal : styles.configModalWithoutInfo}
      />
      <img src={image} alt={`Foto de ${name}`} onError={handleErrorImage} />
      <h2>{name}</h2>
      {title ? <p>{title}</p> : ""}
    </div>
  );
};

export default Card;
