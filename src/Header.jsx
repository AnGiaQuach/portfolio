import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.NavbarContainer}>
        <Link to="/" className={`${styles.Link} ${styles.HomeLink}`}>
          <div>Home</div>
        </Link>

        <Link to="/about" className={`${styles.Link} ${styles.AboutLink}`}>
          <div>About</div>
        </Link>
        <Link to="/contact" className={`${styles.Link} ${styles.ContactLink}`}>
          <div>Contact</div>
        </Link>
      </div>
    </nav>
  );
}
