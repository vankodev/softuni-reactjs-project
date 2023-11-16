import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductCard from "../product-card/ProductCard";

export default function FeturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.get().then((result) => setProducts(result));
    }, []);

    return (
        <div className="featuredProducts">
            <h2>Featured Products</h2>
            {products.slice(0, 3).map((product) => (
                <ProductCard key={product._id} {...product} />
            ))}
        </div>
    );
}
