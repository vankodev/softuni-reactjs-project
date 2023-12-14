import { useEffect, useState, useContext, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as productService from "../../services/productService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";

import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
    const navigate = useNavigate();
    const { isAuthenticated, username, email, userId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);

        commentService.getAll(productId)
            .then((result) => {
            dispatch({
                type: "GET_ALL_COMMENTS",
                payload: result,
            });
        });
    }, [productId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            productId,
            values.comment
        );

        newComment.owner = { username, email };

        dispatch({
            type: "ADD_COMMENT",
            payload: newComment,
        });

        values.comment = "";
    };

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to product ${product.title}`);

        if (hasConfirmed) {
            await productService.remove(productId);

            navigate('/products');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: "",
    });

    return (
        <div className="container">
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
                                    onClick={deleteButtonClickHandler}
                                >Delete</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.comments}>
                    <h2>Comments</h2>
                    {comments.length === 0 && <p>No one has shared their opinion about this laptop yet.</p>}
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">
                                <p>{username}</p>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    {isAuthenticated && (
                        <>
                            <textarea
                                name="comment"
                                placeholder="Comment......"
                                value={values.comment}
                                onChange={onChange}
                            ></textarea>
                            <button>Add Comment</button>
                        </>
                    )}
                    {!isAuthenticated && (
                        <p><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to add new comment!</p>
                    )}

                </form>
            </div>
        </div>
    );
}
