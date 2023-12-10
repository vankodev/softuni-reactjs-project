import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(
            values.email,
            values.password,
            values.username
        );

        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem("accessToken");
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
