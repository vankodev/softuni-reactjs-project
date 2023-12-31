import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

import styles from "./Hero.module.css";

export default function Hero() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.heroInner}>
                    <h1>Welcome to GamingLaptops</h1>
                    <p>Explore the best and latest in gaming laptops</p>
                    {!isAuthenticated && (
                        <button onClick={() => navigate(`/register`)}>Register Now</button>
                    )}
                </div>
            </div>
        </div>
    );
}
