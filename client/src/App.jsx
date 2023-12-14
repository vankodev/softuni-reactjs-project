import { Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from './contexts/authContext';
import AuthGuard from './components/guards/AuthGuard';
import AdminGuard from './components/guards/AdminGuard';
import AuthRedirectGuard from './components/guards/AuthRedirectGuard';

import Header from "./components/header/Header";
import Banner from "./components/header/Banner";
import Home from "./components/home/Home";
import ProductList from "./components/product-list/ProductList";
import Login from "./components/login/Login";
import Logout from './components/logout/Logout';
import Register from "./components/register/Register";
import ProductCreate from "./components/product-create/ProductCreate";
import ProductEdit from "./components/product-edit/ProductEdit";
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
                        <Route path="/products/:productId" element={<ProductDetails />} />
                        <Route element={<AuthRedirectGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        <Route element={<AuthGuard />}>
                            <Route path='/products/:productId/edit' element={<ProductEdit />} />
                            {/* <Route path='/products/:productId/delete' element={<ProductDelete />} /> */}
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route element={<AdminGuard />}>
                            <Route path="/products/create" element={<ProductCreate />} />
                        </Route>
                    </Routes>
                </div>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
