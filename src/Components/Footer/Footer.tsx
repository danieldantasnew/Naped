import styles from './Footer.module.css';
import Logo from '../../assets/Logo';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Logo />
      <p>Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.</p>
    </footer>
  )
}

export default Footer;