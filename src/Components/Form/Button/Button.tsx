import React from "react";
import styles from "./Button.module.css";
import ArrowRight from "../../../assets/ArrowRight";
import ArrowLeft from "../../../assets/ArrowLeft";

type ButtonType = React.ComponentProps<"button"> & {
  label: string;
  Arrow?: "left" | "right";
  classStyle?: CSSModuleClasses[string];
};

const Button = ({
  label,
  classStyle,
  Arrow = "right",
  ...props
}: ButtonType) => {
  return (
    <>
      {Arrow === "left" ? (
        <button
          className={`${styles.Button} ${styles.arrowLeft} ${
            classStyle ? classStyle : ""
          }`}
          {...props}>
          <ArrowLeft color="#FEFBFB" width="20" height="20" />
          {label}
        </button>
      ) : (
        <button className={`${styles.Button}`} {...props}>
          {label}
          <ArrowRight color="#FEFBFB" width="20" height="20" />
        </button>
      )}
    </>
  );
};

export default Button;
