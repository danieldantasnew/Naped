import React from "react";
import styles from "./Section_1.module.css";
import { Naped } from "../../../../Types/types";
import Card from "../../../Card/Card";
import useAutoSlideTransition from "../../../../Hooks/useAutoSlideTransition";

function observerAutoSlide(data: Naped[], stateSlide: number) {
  if (stateSlide + 3 === data.length + 1) {
    const newArray: Naped[] = [];
    newArray.push(data[stateSlide]);
    newArray.push(data[stateSlide + 1]);
    newArray.push(data[0]);
    return newArray;
  }
  else {
    const newArray: Naped[] = [];
    newArray.push(data[stateSlide]);
    newArray.push(data[0]);
    newArray.push(data[1]);
    return newArray;
  }
}

const Section_1 = ({ data }: { data: Naped[] }) => {
  const [newData, setNewData] = React.useState<Naped[] | null>(null);
  const [animationDelay, setAnimationDelay] = React.useState(false);
  const [endSlide, setEndSlide] = React.useState(0);
  const slide = useAutoSlideTransition(0, endSlide);

  React.useEffect(() => {
    if (data) {
      setEndSlide(data.length);
      if (slide + 3 > data.length) {
        const autoSlideReturns = observerAutoSlide(data, slide);
        setNewData(autoSlideReturns);
      } 
      else setNewData(data.slice(slide, slide+3));
    }
  }, [data, slide]);

  React.useEffect(() => {
    setAnimationDelay(true);
    const timeOutToAnimate = setTimeout(() => {
      setAnimationDelay(false);
    }, 8000);
    
    function handleVisibilityChange() {
      setAnimationDelay(false);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleVisibilityChange);
    return () => {
      clearTimeout(timeOutToAnimate);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleVisibilityChange);
    };
  }, [slide]);

  if (!newData) return null;

  return (
    <section className={styles.Section_1} data-testid="section_1">
      <div className={styles.content_1}>
        <h1>Mundo nerd? Naped!</h1>
        <p>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </div>
      <div className={styles.content_2}>
        {newData.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            images={item.images}
            title={item.title}
            classStyle={`${styles.configCard} ${animationDelay ? styles.animationDelay : ''}`}
            noLargeFirstCard={false}
            animationOn={false}
            data-testid="card-div"
            data-testcard-id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Section_1;
