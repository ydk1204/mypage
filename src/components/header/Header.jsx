import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <i className="fa-solid fa-snowflake"></i>
          <a href="#">&nbsp; 양양</a>
        </div>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__menu__item} data-link="#home">
            intro
          </li>
          <li className={styles.navbar__menu__item} data-link="#about">
            project
          </li>
          <li className={styles.navbar__menu__item} data-link="#skills">
            skill
          </li>
          <li className={styles.navbar__menu__item} data-link="#work">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
