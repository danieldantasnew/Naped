import React from "react";

const useAutoSlideTransition = (start: number, end: number) => {
  const [slide, setSlide] = React.useState(start);
  const timeOutRef = React.useRef<number | null>(null);

  const transitionCallback = React.useCallback(() => {
    const timeOut = () => {
      if (slide + 1 < end) setSlide((s) => s + 1);
      else setSlide(start);
    };
    timeOut();
  }, [slide, setSlide, start, end]);

  React.useEffect(() => {
    timeOutRef.current = setInterval(transitionCallback, 8000);

    return () => {
      if (timeOutRef.current !== null) clearInterval(timeOutRef.current);
    };
  }, [transitionCallback]);

  return slide;
};

export default useAutoSlideTransition;
