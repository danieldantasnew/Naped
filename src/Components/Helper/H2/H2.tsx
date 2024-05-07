import styles from './H2.module.css';

const H2 = ({label, classStyle}: {label: string, classStyle?: CSSModuleClasses[string]}) => {
  return (
    <h2 className={`${styles.H2} ${classStyle ? classStyle : ''}`}>{label}</h2>
  )
}

export default H2;