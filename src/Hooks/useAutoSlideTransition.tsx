import React from "react";

const useAutoSlideTransition = (
  start: number,
  slideLenght: number,
  time = 8000
) => {
  const [slide, setSlide] = React.useState(start);
  const timeOutRef = React.useRef<number | null>(null);

  const transitionCallback = React.useCallback(() => {
    const timeOut = () => {
      if (slide + 1 < slideLenght) setSlide((s) => s + 1);
      else setSlide(start);
    };
    timeOut();
  }, [slide, setSlide, start, slideLenght]);

  React.useEffect(() => {
    if (timeOutRef.current !== null) clearInterval(timeOutRef.current);
    timeOutRef.current = setInterval(transitionCallback, time);

    return () => {
      if (timeOutRef.current !== null) clearInterval(timeOutRef.current);
    };
  }, [transitionCallback, time]);

  return slide;
};

export default useAutoSlideTransition;
