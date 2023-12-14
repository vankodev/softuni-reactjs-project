import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as productService from "../../services/productService";
import AuthContext from "../../contexts/authContext";


import Modal from "../modal/Modal"
import Comment from "../comment/Comment"

import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);
    }, [productId]);

    const deleteButtonClickHandler = async () => {
        await productService.remove(productId);

        navigate('/products');
    }

    return (
        <div className="container">
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.deleteModal}>
                    <h2>Confirm Deletion</h2>
                    <div className={styles.modalButtons}>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        <button onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                </div>
            </Modal>

            <div className={styles.productDetails}>
                <h1 className={styles.header}>Product Details</h1>
                <div className={styles.specs}>
                    <div className={styles.specsImage}>
                        <img src={product.pictureUrl} alt="laptop-image" />
                    </div>
                    <div className={styles.specsContent}>
                        <h2 className={styles.specsName}>{product.modelName}</h2>
                        <p>{product.screenSize}</p>
                        <p>{product.processor}</p>
                        <p>{product.videoCard}</p>
                        <p>{product.ram}</p>
                        <p>{product.storage}</p>
                        <p>${product.price}</p>
                        {userId === product._ownerId && (
                            <div className={styles.adminControls}>
                                <button
                                    type="button"
                                    onClick={() => navigate(`/products/${productId}/edit`)}
                                >Edit</button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                >Delete</button>
                            </div>
                        )}
                    </div>
                </div>

                <Comment />
            </div>
        </div>
    );
}
