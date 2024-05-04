import React from "react";
import styles from "./Card.module.css";
import Modal from "../Helper/Modal/Modal";

const styleModal: React.CSSProperties = {
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: "1",
  backgroundColor: "#28283061"
}

type typeCard = {
  title: string;
  images: string[];
  info?: string;
}

const Card = ({title, images, info}: typeCard) => {
  return (
    <div className={styles.imageContent}>
      <Modal stylesFrom={styleModal} />
      <img src={images[0]} alt={`Foto de ${title}`} />
      <h2>{title}</h2>
      { info ? <p>{info}</p> : ''}
    </div>
  );
};

export default Card;
