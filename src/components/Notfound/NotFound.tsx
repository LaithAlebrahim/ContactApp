import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.not__found}>
      <h1 className={styles.back__title}>Sorry</h1>
      <p className={styles.back__label}>
        The page you are looking for does not exist
      </p>
      <Link className={styles.link__back} to="/Contacts">
        Back to HomePage ......
      </Link>
    </div>
  );
}

export default NotFound;
