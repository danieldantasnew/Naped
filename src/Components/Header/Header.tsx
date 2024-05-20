import Logo from "../../assets/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Account from "./Account/Account";
import styles from "./Header.module.css";
import useMobile from "../../Hooks/useMobile";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const mobile = useMobile("max-width: 767px");
  const navigate = useNavigate();
  
  return (
    <header className={styles.Header}>
      <Logo onClick={()=> navigate('/')} />
      {mobile ? (
        <MobileMenu />
      ) : (
        <div className={styles.divNavs}>
          <NavMenu />
          <Account onPointerDown={(e) => e.preventDefault()} />
        </div>
      )}
    </header>
  );
};

export default Header;
