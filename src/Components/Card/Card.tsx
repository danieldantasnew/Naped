import React from "react";
import styles from "./Card.module.css";
import Modal from "../Helper/Modal/Modal";
import { useNavigate } from "react-router-dom";

const styleModal: React.CSSProperties = {
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: "1",
  backgroundColor: "#28283061",
};

type typeCard = {
  id: number;
  title: string;
  images: string[];
  activeFunction?: boolean;
  info?: string;
  classStyle?: CSSModuleClasses[string];
};

const Card = ({ id, title, images, info, classStyle, activeFunction = true }: typeCard) => {
  const navigate = useNavigate();

  function openPage(id: number) {
    navigate(`/item/${id}`);
  }

  return (
    <div
      className={`
        ${styles.imageContent} 
        ${classStyle} 
        `}
      onClick={activeFunction ? () => openPage(id): ()=> ''}>
        <Modal stylesFrom={styleModal} />
        <img src={images[0]} alt={`Foto de ${title}`} />
        <h2>{title}</h2>
        {info ? <p>{info}</p> : ""}
    </div>
  );
};

export default Card;
