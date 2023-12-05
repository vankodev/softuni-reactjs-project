import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductCard from "../product-card/ProductCard";
import styles from "./FeaturedProducts.module.css";

export default function FeturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.get().then((result) => setProducts(result));
    }, []);

    return (
        <div className="container">
            <div className={styles.featuredProducts}>
                <h2>Featured Products</h2>
                <div className={styles.featuredProductsList}>
                    {products.slice(0, 3).map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
