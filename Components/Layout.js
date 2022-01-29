import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
