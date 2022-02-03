import React from "react";
import styles from "../styles/PizzaItem.module.scss";
import Link from "next/link";

const PizzaItem = () => {
  return (
    <div className={styles.pizzaContainer}>
      <Link href="/product/1">
        <a>
          <img src="Images/pizza.png" />
        </a>
      </Link>
      <div className={styles.rating}>
        <span>2.5/5 ⭐</span>
      </div>
      <p>
        Paperoni pizza <span style={{ backgroundColor: "green" }}></span>
      </p>
      <div className={styles.InfoContainer}>
        <span>12 $</span>
        <button>Add +</button>
      </div>
    </div>
  );
};

export default PizzaItem;
