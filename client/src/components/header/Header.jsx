import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link className="home" to="/">
                    GamingLaptops
                </Link>
            </h1>
            <nav className="navigation">
                <li>
                    <Link to="/products">All Products</Link>
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
