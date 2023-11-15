export default function ProductCard() {
    return (
        <div className="productCard">
            <img
                style={{ width: "200px" }}
                src="../../../public/images/laptop.png"
                alt="laptop-image"
            />
            <h3>Laptop Model Name</h3>
            <p>Screen Size: Spec</p>
            <p>Processor: Spec</p>
            <p>RAM: Spec</p>
            <p>Video Card: Spec</p>
            <p>Storage: Spec</p>
            <p>Price: $Spec</p>
        </div>
    );
}
