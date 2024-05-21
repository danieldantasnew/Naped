import React from "react";
import styles from "./NavigateBetweenPages.module.css";
import ArrowActive from "../../assets/ArrowActive";
import Arrow from "../../assets/Arrow";

type TypeNavigate = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  firstPage: number;
  lastPage: number;
  previous?: number | null;
  next?: number | null;
};

const noBackground: React.CSSProperties = {
  backgroundColor: "transparent",
};

const activeItem: React.CSSProperties = {
  backgroundColor: "var(--brand-color)",
  color: "var(--dark-40)",
};

const NavigateBetweenPages = ({
  page,
  setPage,
  totalPages,
  firstPage,
  lastPage,
  previous,
  next,
}: TypeNavigate) => {

  React.useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [page]);

  return (
    <ul className={styles.NavigateBetweenPages}>
      {firstPage !== page? (
        <li
          onClick={() => setPage(firstPage)}
          className={`${styles.toLeft} ${styles.noTransition}`}>
          <ArrowActive height={22} width={22}/>
        </li>
      ) : (
        <li style={noBackground} className={`${styles.noTransition}`}>
          <Arrow height={22} width={22}/>
        </li>
      )}
      <ul className={styles.NavigateBetweenPages}>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            onClick={() => setPage(index + 1)}
            key={index}
            style={page === index + 1 ? activeItem : {}}>
            {index + 1}
          </li>
        ))}
      </ul>
      {lastPage !== page ? (
        <li onClick={() => setPage(lastPage)} className={`${styles.noTransition}`}>
          <ArrowActive height={22} width={22}/>
        </li>
      ) : (
        <li
          style={noBackground}
          className={`${styles.toRight} ${styles.noTransition}`}>
          <Arrow height={22} width={22}/>
        </li>
      )}
    </ul>
  );
};

export default NavigateBetweenPages;
