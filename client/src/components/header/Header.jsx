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
                <Link to="/products">Products</Link>
                <div className="user">
                    <Link to="/products/create">Create Product</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </div>
    );
}
