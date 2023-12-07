import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productService from "../../services/productService";

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId).then(setProduct);
    }, [productId]);

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
        </div>
    );
}
