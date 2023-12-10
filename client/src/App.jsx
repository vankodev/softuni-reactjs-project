import { Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Banner from "./components/header/Banner";
import Home from "./components/home/Home";
import ProductList from "./components/product-list/ProductList";
import Login from "./components/login/Login";
import Logout from './components/logout/Logout';
import Register from "./components/register/Register";
import ProductCreate from "./components/product-create/ProductCreate";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/product-details/ProductDetails";


function App() {
    const location = useLocation();
    const showBanner = location.pathname !== "/";

    return (
        <AuthProvider>
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
                        <Route path={Path.Logout} element={<Logout />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
