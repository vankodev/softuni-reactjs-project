import { useNavigate } from "react-router-dom";

import styles from "./CTA.module.css";

export default function CTA() {
    const navigate = useNavigate();
    
    return (
        <div className={styles.cta}>
            <div className="container">
                <div className={styles.ctaContent}>
                    <h2>
                        Join our community to get the latest updates and offers!
                    </h2>
                    <button onClick={() => navigate(`/register`)}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
