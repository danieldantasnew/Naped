import React from "react";
import Account from "../Account/Account";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./MobileMenu.module.css";
import Modal from "../../Helper/Modal/Modal";

const MobileMenu = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  return (
    <>
      <div
        className={styles.btnMenu}
        onClick={() => setMenuMobile(!menuMobile)}>
        <img src="./src/assets/btn-menu.svg" />
      </div>
      {menuMobile ? (
        <>
          <Modal func={setMenuMobile}/>
          <div className={styles.MobileMenu}>
            <div
              className={styles.btnCloseMenu}
              onClick={() => setMenuMobile((menu) => !menu)}>
              <img src="./src/assets/btn-close-menu.svg" alt="Fechar menu" />
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
