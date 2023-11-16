import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h2>
                <Link className={styles.logo} to="/">
                    GamingLaptops.com
                </Link>
            </h2>
            <nav className={styles.navigation}>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/products/add">Add Product</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </nav>
        </div>
    );
}
