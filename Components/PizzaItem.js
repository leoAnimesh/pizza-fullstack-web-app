import React from "react";
import styles from "../styles/PizzaItem.module.scss";

const PizzaItem = () => {
  return (
    <div className={styles.pizzaContainer}>
      <img src="Images/pizza.png" />
      <p>
        Paperoni pizza <span></span>
      </p>
      <div className={styles.InfoContainer}>
        <span>12 $</span>
        <button>add</button>
      </div>
    </div>
  );
};

export default PizzaItem;
