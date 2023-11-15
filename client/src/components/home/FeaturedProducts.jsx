import ProductCard from "../product-card/ProductCard";

export default function FeturedProducts() {
    return (
        <div className="featuredProducts">
            <h2>Featured Products</h2>
            <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}
