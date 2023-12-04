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
            <div className={styles.productImage}>
                <img src={pictureUrl} alt="laptop-image" />
            </div>
            <h3>{modelName}</h3>
            <div className={styles.specs}>
                <p>{screenSize} Display</p>
                <p>{processor}</p>
                <p>{ram} RAM</p>
                <p>{videoCard}</p>
                <p>{storage}</p>
            </div>
            <h2 className={styles.price}>${price}</h2>
        </div>
    );
}
