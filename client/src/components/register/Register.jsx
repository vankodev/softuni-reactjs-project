import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import styles from "./Register.module.css";

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });
    return (
        <div className="container">
            <div className={styles.register}>
                <h1 className={styles.header}>Register</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Username]}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Email]}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Password]}
                        />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            onChange={onChange}
                            values={values[RegisterFormKeys.ConfirmPassword]}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
