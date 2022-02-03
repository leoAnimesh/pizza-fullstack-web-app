import React from "react";
import styles from "../styles/Counter.module.scss";

const Counter = () => {
  return (
    <div className={styles.container}>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  );
};

export default Counter;
