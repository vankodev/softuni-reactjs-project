import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Banner from "./components/header/Banner";
import Home from "./components/home/Home";
import ProductList from "./components/product-list/ProductList";
import Login from "./components/login/login";
import Register from "./components/register/Register";
import ProductAdd from "./components/product-add/ProductAdd";
import Footer from "./components/footer/Footer";

function App() {
    const location = useLocation();
    const showBanner = location.pathname !== "/";

    return (
        <div className="app">
            <Header />

            {showBanner && <Banner />}

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/add" element={<ProductAdd />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
