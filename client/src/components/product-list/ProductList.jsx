import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductCard from "../product-card/ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.get().then((result) => setProducts(result));
    }, []);

    return (
        <div className="container">
            <div className={styles.productList}>
                <h1>Best Gaming Laptops</h1>
                <div className={styles.products}>
                    {products.map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
