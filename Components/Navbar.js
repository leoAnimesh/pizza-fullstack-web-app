import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navLeft}>
        <img src="Images/logo.png" />
        <h1>
          Pizza <br /> <span>Mania</span>
        </h1>
      </div>
      <div className={styles.navRight}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
        <Link href="/cart">
          <a className={styles.cartCounter}>
            Cart <span>2</span>
          </a>
        </Link>
        <Link href="/login">
          <a className={styles.btn}>Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
