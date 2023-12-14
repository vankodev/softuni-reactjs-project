import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

import Modal from "../modal/Modal"
import Profile from "../profile/Profile"

import styles from "./Header.module.css";

export default function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [showModal, setShowModal] = useState(false);

    const { isAuthenticated, isAdmin,  username } = useContext(AuthContext);

    return (
        <div className={styles.header}>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Profile />
            </Modal>

            <h2>
                <Link to="/" className={styles.logo}>
                    GamingLaptops
                </Link>
            </h2>
            <nav className={styles.navigation}>
                <li>
                    <Link
                        to="/products"
                        className={isActive("/products") ? styles.active : ""}
                    >
                        Products
                    </Link>
                </li>

                {isAuthenticated && isAdmin && (
                        <li>
                            <Link
                                to="/products/create"
                                className={
                                    isActive("/products/create") ? styles.active : ""
                                }
                            >
                                Create Product
                            </Link>
                        </li>
                )}
                {isAuthenticated && (
                    <>
                        <li>
                            <Link
                                to="/logout"
                                className={isActive("/logout") ? styles.active : ""}
                            >
                                Logout
                            </Link>
                        </li>
                        <li
                            className={styles.username}
                            onClick={() => setShowModal(true)}
                        >{username}</li>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <li>
                            <Link
                                to="/login"
                                className={isActive("/login") ? styles.active : ""}
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className={isActive("/register") ? styles.active : ""}
                            >
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </nav>
        </div>
    );
}
