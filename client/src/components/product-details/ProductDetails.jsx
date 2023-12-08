import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService";
import * as commentService from "../../services/commentService";

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [usernameValue, setUsernameValue] = useState("");
    const [commentValue, setCommentValue] = useState("");
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId).then(setProduct);
        commentService.getAll(productId).then(setComments);
    }, [productId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentService.create(
            productId,
            usernameValue,
            commentValue
        );

        setComments((prevComments) => [...prevComments, newComment]);

        setUsernameValue("");
        setCommentValue("");
    };

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    const commentChangeHandler = (e) => {
        setCommentValue(e.target.value);
    };

    return (
        <div className="ProductDetails">
            <h1>Product Details</h1>
            <h2>{product.modelName}</h2>
            <img src={product.pictureUrl} alt="laptop-image" />
            <p>{product.screenSize}</p>
            <p>{product.processor}</p>
            <p>{product.videoCard}</p>
            <p>{product.ram}</p>
            <p>{product.storage}</p>
            <p>{product.price}</p>
            <ul className="comments">
                {comments.map((comment) => (
                    <li key={comment._id} className="comment">
                        <p>{comment.username}</p>
                        <p>{comment.text}</p>
                    </li>
                ))}
            </ul>
            <form className="form" onSubmit={addCommentHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={usernameValue}
                    onChange={usernameChangeHandler}
                />
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={commentValue}
                    onChange={commentChangeHandler}
                ></textarea>
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </div>
    );
}
