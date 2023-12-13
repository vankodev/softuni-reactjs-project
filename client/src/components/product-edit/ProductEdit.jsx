import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as productService from "../../services/productService";
import styles from "./ProductEdit.module.css";

const formInitialState = {
    modelName: "",
    pictureUrl: "",
    screenSize: "",
    processor: "",
    videoCard: "",
    ram: "",
    storage: "",
    price: "",
};

export default function ProductEdit() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setFormValues(result);
            });
    }, [productId]);

    const changeHandler = (e) => {
        let value = "";

        switch (e.target.type) {
            case "number":
                value = Number(e.target.value);
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues((state) => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await productService.edit(productId, formValues);

            navigate(`/products/${productId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const priceValidator = () => {
        if (formValues.price < 0) {
            setErrors((state) => ({
                ...state,
                price: "Price should be a positive number!",
            }));
        } else {
            if (errors.price) {
                setErrors((state) => ({ ...state, price: "" }));
            }
        }
    };

    return (
        <div className="container">
            <div className={styles.productEdit}>
                <h1 className={styles.header}>Edit Product</h1>
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="modelName">Model Name</label>
                        <input
                            type="text"
                            name="modelName"
                            id="modelName"
                            value={formValues.modelName}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="pictureUrl">Picture URL</label>
                        <input
                            type="text"
                            name="pictureUrl"
                            id="pictureUrl"
                            value={formValues.pictureUrl}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="screenSize">Screen Size</label>
                        <input
                            type="text"
                            name="screenSize"
                            id="screenSize"
                            value={formValues.screenSize}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="processor">Processor</label>
                        <input
                            type="text"
                            name="processor"
                            id="processor"
                            value={formValues.processor}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="videoCard">Video Card</label>
                        <input
                            type="text"
                            name="videoCard"
                            id="videoCard"
                            value={formValues.videoCard}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="ram">RAM</label>
                        <input
                            type="text"
                            name="ram"
                            id="ram"
                            value={formValues.ram}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="storage">Storage</label>
                        <input
                            type="text"
                            name="storage"
                            id="storage"
                            value={formValues.storage}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price (USD)</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={formValues.price}
                            onChange={changeHandler}
                            onBlur={priceValidator}
                            className={errors.price && "inputError"}
                        />
                        {errors.price && (
                            <p className="errorMessage">{errors.price}</p>
                        )}
                    </div>
                    <button type="submit">Edit Product</button>
                </form>
            </div>
        </div>
    );
}
