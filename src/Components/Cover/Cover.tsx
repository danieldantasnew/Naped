import React from "react";
import styles from "./Cover.module.css";
import Modal from "../Helper/Modal/Modal";
import H2 from "../Helper/H2/H2";
import useAutoSlideTransition from "../../Hooks/useAutoSlideTransition";
import { Naped } from "../../Types/types";
import useMobile from "../../Hooks/useMobile";

type CoverType = {
  title: string;
  description: string;
  image: Naped[];
  slideStart: number;
  slideEnd: number;
};

const Cover = ({
  title,
  description,
  image,
  slideStart,
  slideEnd,
}: CoverType) => {
  const slide = useAutoSlideTransition(slideStart, slideEnd);
  const imageCaseError = "../src/assets/elric.jpg";
  const [animationDelay, setAnimationDelay] = React.useState(false);
  const mobile = useMobile("max-width: 640px");

  React.useEffect(() => {
    setAnimationDelay(true);
    const timeOutToAnimate = setTimeout(() => {
      setAnimationDelay(false);
    }, 8000);

    function handleVisibilityChange() {
      setAnimationDelay(false);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timeOutToAnimate);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [slide]);

  return (
    <div className={styles.Cover}>
      <div
        className={`
          ${styles.imageContent} ${animationDelay ? styles.animationDelay : ""}
        `}>
        <Modal stylesFrom={styles.configModal} />
        {mobile ? (
          <img
            src={
              !image[slide].images.largeSecondImage
                ? imageCaseError
                : image[slide].images.largeSecondImage
            }
            alt={`Capa da categoria ${title}`}
          />
        ) : (
          <img
            src={
              !image[slide].images.customSecondImage
                ? imageCaseError
                : image[slide].images.customSecondImage
            }
            alt={`Capa da categoria ${title}`}
          />
        )}
      </div>
      <H2 label={title} classStyle={styles.configH2} />
      <p>{description}</p>
    </div>
  );
};

export default Cover;
