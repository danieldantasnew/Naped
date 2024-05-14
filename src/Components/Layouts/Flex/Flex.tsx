import React from "react";
import styles from "./Flex.module.css";

type FlexTypes = React.ComponentProps<'section'> & React.PropsWithChildren & {
  classStyle?: CSSModuleClasses[string];
};

const Flex = ({ children, classStyle, ...props }: FlexTypes) => {
  return (
    <section
      className={
        `animationLeft 
        ${styles.Flex}
        ${classStyle ? classStyle : ""} 
        `}
      {...props}
      >
      {children}
    </section>
  );
};

export default Flex;
