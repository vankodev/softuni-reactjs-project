import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';

import AuthContext from './contexts/authContext';

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
    const [auth, setAuth] = useState({});
    const location = useLocation();
    const showBanner = location.pathname !== "/";

    const loginSubmitHandler = (values) => {
        console.log(values)
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
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
