import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Banner from "./components/header/Banner";
import Home from "./components/home/Home";
import ProductList from "./components/product-list/ProductList";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ProductCreate from "./components/product-create/ProductCreate";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/product-details/ProductDetails";


function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const showBanner = location.pathname !== "/";
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        console.log(result)

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password, values.username);
        
        setAuth(result);

        console.log(result)

        navigate(Path.Home);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.email,
    }

    return (
        <AuthContext.Provider value={values}>
            <div className="app">
                <Header />

                {showBanner && <Banner />}

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/products/create" element={<ProductCreate />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/products/:productId" element={<ProductDetails />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
