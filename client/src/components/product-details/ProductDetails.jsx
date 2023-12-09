import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const { email } = useContext(AuthContext);
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
            commentValue
        );

        setComments(state => [...state, { ...newComment, author: { email } }]);

        setCommentValue("");
    };

    const commentChangeHandler = (e) => {
        setCommentValue(e.target.value);
    };

    console.log(222, comments)

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
                {comments.map(({ _id, text, owner: { email } })  => (
                    <li key={_id} className="comment">
                        <p>{email}</p>
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
            <form className="form" onSubmit={addCommentHandler}>
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
