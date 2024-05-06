import styles from './H2.module.css';

const H2 = ({label}: {label: string}) => {
  return (
    <h2 className={styles.H2}>{label}</h2>
  )
}

export default H2;