import React from "react";
import styles from "./Flex.module.css";

type FlexTypes = React.PropsWithChildren & {
  classStyle?: CSSModuleClasses[string];
};

const Flex = ({ children, classStyle }: FlexTypes) => {
  return (
    <section
      className={`${styles.Flex} ${
        classStyle ? classStyle : ""
      } animationLeft`}>
      {children}
    </section>
  );
};

export default Flex;
