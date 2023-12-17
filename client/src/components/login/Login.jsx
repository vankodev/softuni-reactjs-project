import { useState, useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: "",
        password: "",
    });

    const validateEmail = () => {
        if (!values.email) {
            return "Email address is required.";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            return "Please enter a valid email address.";
        }
        return "";
    };

    const validatePassword = () => {
        if (!values.password) {
            return "Password is required.";
        }
        return "";
    };

    const validateForm = () => {
        return {
            email: validateEmail(),
            password: validatePassword(),
        };
    };

    const validateField = (name, value) => {
        switch (name) {
            case "email":
                return validateEmail(value);
            case "password":
                return validatePassword(value);
            default:
                return "";
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.values(formErrors).some((error) => error)) {
            setErrors(formErrors);
        } else {
            try {
                await onSubmit(e);
            } catch (error) {
                setErrors({ ...errors, form: error.message })
            }
        }

        console.log("Current Errors State:", errors);
    };

    return (
        <div className="container">
            <div className={styles.login}>
                <h1 className={styles.header}>Login</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={onChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            value={values.password}
                            onChange={onChange}
                        />
                        {errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>
                    {errors.form && (
                        <p className="error">{errors.form}</p>
                    )}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
