import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductCard from "../product-card/ProductCard";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.get().then((result) => setProducts(result));
    }, []);

    return (
        <div className="productList">
            <h1>Product List Page</h1>

            {products.map((product) => (
                <ProductCard key={product._id} {...product} />
            ))}
        </div>
    );
}
