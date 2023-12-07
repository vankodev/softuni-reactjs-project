import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productService from "../../services/productService";
import styles from "./ProductCreate.module.css";

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

export default function ProductCreate() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

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

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();

        try {
            productService.create(formValues);

            navigate("/products");
        } catch (err) {
            console.log(err);
        }

        resetFormHandler();
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
            <div className={styles.productCreate}>
                <h1 className={styles.header}>Create Product</h1>
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
                    <button type="submit">Create Product</button>
                </form>
            </div>
        </div>
    );
}
