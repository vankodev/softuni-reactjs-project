import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";

export default function Login() {
    const { values, onChange, onSubmit } = useForm({
        email: "",
        password: "",
    });

    return (
        <div className="container">
            <div className={styles.login}>
                <h1 className={styles.header}>Login</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={onChange}
                            value={values.email}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            onChange={onChange}
                            value={values.password}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
