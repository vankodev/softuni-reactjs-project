import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService";
import * as commentService from "../../services/commentService";

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId).then(setProduct);
    }, [productId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            productId,
            formData.get("username"),
            formData.get("comment")
        );

        console.log(newComment);
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
            <form className="form" onSubmit={addCommentHandler}>
                <input type="text" name="username" placeholder="username" />
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </div>
    );
}
