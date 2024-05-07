import React from 'react';
import styles from './Cover.module.css';
import Modal from '../Helper/Modal/Modal';
import H2 from '../Helper/H2/H2';
import useAutoSlideTransition from '../../Hooks/useAutoSlideTransition';

type CoverType = {
  title: string;
  description: string;
  image: string[];
  slideStart: number;
  slideEnd: number;
}

const Cover = ({ title, description, image, slideStart, slideEnd }: CoverType) => {
  const slide = useAutoSlideTransition(slideStart, slideEnd);
  const [animationDelay, setAnimationDelay] = React.useState(false);

  React.useEffect(() => {
    setAnimationDelay(true);
    const timeOutToAnimate = setTimeout(() => {
      setAnimationDelay(false)
    }, 8000);
    
    return () => clearTimeout(timeOutToAnimate);
  }, [slide]);

  return (
    <div className={styles.Cover}>
      <div
        className={`${styles.imageContent} ${animationDelay ? styles.animationDelay : ''}`}>
          <Modal
            stylesFrom={styles.configModal}
          />
        <img src={image[slide]} alt={`Capa da categoria ${title}`} />
      </div>
      <H2 label={title} classStyle={styles.configH2} />
      <p>{ description }</p>
    </div>
  )
}

export default Cover;