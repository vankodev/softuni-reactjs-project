import ProductCard from "../product-card/ProductCard";

export default function ProductList() {
    return (
        <div className="productList">
            <h1>Product List Page</h1>
            <ul>
                {/* This is where each product will be listed */}
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
            </ul>
        </div>
    );
}
