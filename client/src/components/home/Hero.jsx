import styles from "../home/Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.heroInner}>
                    {/* Hero Section with CTA with invitation to register */}
                    <h1>Welcome to GamingLaptops</h1>
                    <p>Explore the best and latest in gaming laptops</p>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    );
}
