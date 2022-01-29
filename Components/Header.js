import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.LeftContainer}>
        <h1>Carving for pizza ?</h1>
        <h2>Oder yours now</h2>
        <span>50% of on first purchase</span>
        <Link href="/menu">
          <a className={styles.btn}>Oder Now</a>
        </Link>
      </div>
      <div className={styles.RightContainer}>
        <img src="Images/Hero Img.png" />
      </div>
    </div>
  );
};

export default Header;
