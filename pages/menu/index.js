import PizzaItem from "../../Components/PizzaItem";
import styles from "../../styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <h1>Menus</h1>
      <div className={styles.pizzasContainer}>
        <h2>Veg Pizzas</h2>
        <div className={styles.subpizzasContainer}>
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
        </div>
      </div>
      <div className={styles.pizzasContainer}>
        <h2>Non-Veg Pizzas</h2>
        <div>
          <PizzaItem />
        </div>
      </div>
    </div>
  );
};

export default Menu;
