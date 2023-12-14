import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({
    _id,
    modelName,
    pictureUrl,
    screenSize,
    processor,
    ram,
    videoCard,
    storage,
    price,
}) {
    const navigate = useNavigate();

    return (
        <div
            className={styles.productCard}
            onClick={() => navigate(`/products/${_id}`)}
        >
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
