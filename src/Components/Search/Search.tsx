import React from 'react';
import styles from './Search.module.css';

const Search = ({...props}: React.ComponentProps<'input'>) => {
  return (
    <div className={styles.divInputStyle}>
      <input
        placeholder='Quer ajuda na procura? Pesquise aqui'
        className={styles.Search}
        {...props}
      />
    </div>
  )
}

export default Search;