import styles from "./Login.module.css";

export default function Login() {
    return (
        <div className="container">
            <div className={styles.login}>
                <h1 className={styles.header}>Login</h1>
                <form className="form">
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
