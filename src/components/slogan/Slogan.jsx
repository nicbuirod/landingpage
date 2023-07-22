import React from "react";
import styles from "./slogan.module.scss";

const Slogan = ({ isHovered }) => {
  return (
    <div className={styles.slogan_container}>
      <div className={styles.divider}></div>
      {isHovered && <div className={styles.divider_black}></div>}
      <div className={styles.slogan_container_text}>
        <p>
          EMPECEMOS A <br />
          HACERLO SENCILLO
        </p>
        <p>
          |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nos emociona impulsar tu
          transformación digital
        </p>
      </div>
      <div className={styles.slogan_container_empty}></div>
    </div>
  );
};

export default Slogan;
