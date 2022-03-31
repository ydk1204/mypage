import React from "react";
import styles from "./Header.module.css";

const Header = ({ divLocation }) => {
  const pageMove = (e) => {
    let target = e.target.innerHTML;
    let divtop = 0;
    switch (target) {
      case "intro":
        divtop = divLocation[0];
        break;
      case "project":
        divtop = divLocation[1];
        break;
      case "skill":
        divtop = divLocation[2];
        break;
      case "contact":
        divtop = divLocation[3];
        break;
      default:
        break;
    }
    window.scrollTo({
      top: divtop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <i className="fa-solid fa-snowflake"></i>
          <a href="#">&nbsp; 양양</a>
        </div>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__menu__item} onClick={pageMove}>
            intro
          </li>
          <li className={styles.navbar__menu__item} onClick={pageMove}>
            project
          </li>
          <li className={styles.navbar__menu__item} onClick={pageMove}>
            skill
          </li>
          <li className={styles.navbar__menu__item} onClick={pageMove}>
            contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
