import styles from "./ProductCard.module.css";

export default function ProductCard({
    modelName,
    pictureUrl,
    screenSize,
    processor,
    ram,
    videoCard,
    storage,
    price,
    _id,
}) {
    return (
        <div className={styles.productCard}>
            <img
                style={{ width: "200px" }}
                src={pictureUrl}
                alt="laptop-image"
            />
            <h3>{modelName}</h3>
            <p>Screen Size: {screenSize}</p>
            <p>Processor: {processor}</p>
            <p>RAM: {ram}</p>
            <p>Video Card: {videoCard}</p>
            <p>Storage: {storage}</p>
            <p className={styles.price}>${price}</p>
        </div>
    );
}
