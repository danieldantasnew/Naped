import React from "react";
import Account from "../Account/Account";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./MobileMenu.module.css";
import Modal from "../../Helper/Modal/Modal";
import { useLocation } from "react-router-dom";
import BtnMenu from "../../../assets/BtnMenu";
import BtnClose from "../../../assets/BtnClose";

const MobileMenu = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);
  const {pathname} = useLocation();

  React.useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      <div
        className={styles.btnMenu}
        onClick={() => setMenuMobile(!menuMobile)}>
        <BtnMenu height="24" width="24" />
      </div>
      {menuMobile ? (
        <>
          <Modal func={setMenuMobile}/>
          <div className={styles.MobileMenu}>
            <div
              className={styles.btnCloseMenu}
              onClick={() => setMenuMobile((menu) => !menu)}>
              <BtnClose height="24" width="24" />
            </div>
            <NavMenu />
            <Account onClick={(e) => e.preventDefault()} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileMenu;
