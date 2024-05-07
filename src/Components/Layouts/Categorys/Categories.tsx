import React from 'react';
import styles from './Categories.module.css';

const Categories = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.cards}>{ children }</div>
  )
}

export default Categories;