import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
