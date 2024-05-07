import React from 'react';
import styles from './Flex.module.css';

const Flex = ({children}: React.PropsWithChildren) => {
  return (
    <section className={`${styles.Flex} animationLeft`}>
      {children}
    </section>
  )
}

export default Flex