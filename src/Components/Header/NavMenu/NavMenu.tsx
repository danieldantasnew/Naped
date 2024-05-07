import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.NavMenu}>
        <li>
          <NavLink
            to={"/"}
            className={location.pathname === "/" ? styles.active : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/series"}
            className={location.pathname === "/series" ? styles.active : ''}>
            Séries
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/movies"}
            className={location.pathname === "/movies" ? styles.active : ''}>
            Filmes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/animes"}
            className={location.pathname === "/animes" ? styles.active : ''}>
            Animes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/games"}
            className={location.pathname === "/games" ? styles.active : ''}>
            Games
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu;