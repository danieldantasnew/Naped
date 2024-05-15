import React from "react";
import styles from "./NavigateBetweenPages.module.css";

type TypeNavigate = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  previous: number | null;
  next: number | null;
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
  previous,
  next,
  totalPages,
}: TypeNavigate) => {
  return (
    <ul className={styles.NavigateBetweenPages}>
      {previous ? (
        <li
          onClick={() => setPage(previous)}
          className={`${styles.toLeft} ${styles.noTransition}`}>
          <img
            src="../../src/assets/ArrowsNavigate/arrowActive.png"
            alt="Voltar uma página"
          />
        </li>
      ) : (
        <li style={noBackground} className={`${styles.noTransition}`}>
          <img
            src="../../src/assets/ArrowsNavigate/Arrow.png"
            alt="Primeira página"
          />
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
      {next ? (
        <li onClick={() => setPage(next)} className={`${styles.noTransition}`}>
          <img
            src="../../src/assets/ArrowsNavigate/arrowActive.png"
            alt="Voltar uma página"
          />
        </li>
      ) : (
        <li
          style={noBackground}
          className={`${styles.toRight} ${styles.noTransition}`}>
          <img
            src="../../src/assets/ArrowsNavigate/Arrow.png"
            alt="Voltar uma página"
          />
        </li>
      )}
    </ul>
  );
};

export default NavigateBetweenPages;
