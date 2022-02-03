import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Admin.module.scss";

const admin = () => {
  const [form, setForm] = useState({
    name: "",
    rating: null,
    price: null,
    type: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios("http://localhost:3000/api/pizzas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      setForm({
        name: "",
        price: null,
        rating: null,
        type: null,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <div className={styles.optionBar}>
        <span>Pizzas</span>
        <span>Oders</span>
      </div>
      <hr />
      <div className={styles.addPizzas}>
        <h2>Add Pizzas</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          ></input>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            placeholder="Rating"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="null">Select type</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non Veg</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default admin;
