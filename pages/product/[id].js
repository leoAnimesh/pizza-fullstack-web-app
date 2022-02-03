import { useState } from "react";
import Counter from "../../Components/Counter";
import styles from "../../styles/Product.module.scss";

const product = () => {
  const [selector, SetSelector] = useState("sm");
  const selectors = ["sm", "md", "lg"];
  return (
    <div className={styles.container}>
      <div className={styles.ProductImgContainer}>
        <img src="/Images/pizza-big.svg" />
      </div>
      <div className={styles.ProductInfoContainer}>
        <h1>Peperoni Pizza</h1>
        <h3>Rating : 4.5/5 ⭐</h3>
        <h3>price : 15 $</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <h3>sizes</h3>

        <div className={styles.sizes}>
          {selectors.map((val) => (
            <div
              onClick={() => {
                SetSelector(val);
              }}
              className={styles.selectBtn}
              style={{
                backgroundColor: selector == val ? "#fff" : null,
                color: selector == val ? "#000" : "#fff",
                border: `3px solid ${selector == val ? "#ff6965" : "#fff"}`,
              }}
            >
              {val}
            </div>
          ))}
        </div>
        <h3>Toppings</h3>
        <ul>
          <div>
            <input type="checkbox" />
            <span>Chili Flex</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Tomato ketchup</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Origano</span>
          </div>
        </ul>
        <div className={styles.quantity}>
          <h3>Quantity :</h3>
          <Counter />
        </div>
        <div>
          <button className={styles.btn}>Add to Cart 🛒</button>
          <button className={styles.btn}>Buy Now 💰</button>
        </div>
      </div>
    </div>
  );
};

export default product;
