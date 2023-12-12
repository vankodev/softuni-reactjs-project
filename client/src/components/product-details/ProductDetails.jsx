import { useEffect, useState, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';

export default function ProductDetails() {
    const { email, userId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);

        commentService.getAll(productId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            })
    }, [productId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            productId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

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
            <form className="form" onSubmit={onSubmit}>
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={values.comment}
                    onChange={onChange}
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
