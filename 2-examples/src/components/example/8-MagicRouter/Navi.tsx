import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import styles from './styles.module.css';

function Navi() {
  return (
    <ul className={styles.navigation}>
      <li className={styles.link}>
        <Link to={ROUTES.ADMIN_DASHBOARD}>Home</Link>
      </li>
      <li className={styles.link}>
        <Link to={ROUTES.ADMIN_ABOUT}>About</Link>
      </li>
    </ul>
  );
}

export default Navi;
