import { useState, useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import styles from "./Register.module.css";

const formInitialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const { values, onChange, onSubmit } = useForm(
        registerSubmitHandler,
        formInitialState
    );

    const validateUsername = () => {
        if (!values.username) {
            return "Username is required.";
        } else if (values.username.length < 3) {
            return "Username must be at least 3 characters long.";
        }
        return "";
    };

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
        } else if (values.password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        return "";
    };

    const validateConfirmPassword = () => {
        if (!values.confirmPassword) {
            return "Password confirmation is required.";
        } else if (values.password !== values.confirmPassword) {
            return "Passwords should match.";
        }
        return "";
    };

    const validateForm = () => {
        return {
            username: validateUsername(),
            email: validateEmail(),
            password: validatePassword(),
            confirmPassword: validateConfirmPassword(),
        };
    };

    const validateField = (name, value) => {
        switch (name) {
            case "username":
                return validateUsername(value);
            case "email":
                return validateEmail(value);
            case "password":
                return validatePassword(value);
            case "confirmPassword":
                return validateConfirmPassword(value);
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
                setErrors({ ...errors, form: error.message });
            }
        }
    };

    return (
        <div className="container">
            <div className={styles.register}>
                <h1 className={styles.header}>Register</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={onChange}
                            onBlur={handleBlur}
                        />
                        {errors.username && (
                            <p className="error">{errors.username}</p>
                        )}
                    </div>
                    <div>
                        <label>Email</label>
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
                            name="password"
                            id="register-password"
                            value={values.password}
                            onChange={onChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirm-password"
                            value={values.confirmPassword}
                            onChange={onChange}
                        />
                        {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>
                    {errors.form && <p className="error">{errors.form}</p>}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
