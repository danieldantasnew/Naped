import Logo from '../../assets/Logo';
import OptionsMenu from './NavMenu/NavMenu';
import Account from './Account/Account';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo/>
      <OptionsMenu/>
      <Account onClick={(e)=> e.preventDefault()}/>
    </header>
  )
}

export default Header;