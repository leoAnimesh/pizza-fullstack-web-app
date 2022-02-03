import PizzaItem from "../../Components/PizzaItem";
import styles from "../../styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <h1>Menu</h1>
      <div className={styles.pizzasContainer}>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </div>
    </div>
  );
};

export default Menu;
