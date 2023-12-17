import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

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
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        [
            "modelName",
            "pictureUrl",
            "screenSize",
            "processor",
            "videoCard",
            "ram",
            "storage",
        ].forEach((field) => {
            if (!values[field]) {
                newErrors[field] = "This field is required";
            }
        });

        if (!values.price) {
            newErrors.price = "Price is required";
        } else if (Number(values.price) <= 0) {
            newErrors.price = "Price must be a positive number";
        }

        return newErrors;
    };

    const productSubmitHandler = () => {
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                productService.create(values);
                navigate("/products");
            } catch (error) {
                setErrors({ form: error.message });
            }
        }
    };

    const { values, onChange, onSubmit } = useForm(
        productSubmitHandler,
        formInitialState
    );

    return (
        <div className="container">
            <div className={styles.productCreate}>
                <h1 className={styles.header}>Create Product</h1>
                <form className="form" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="modelName">Model Name</label>
                        <input
                            type="text"
                            name="modelName"
                            id="modelName"
                            value={values.modelName}
                            onChange={onChange}
                        />
                        {errors.modelName && (
                            <p className="error">{errors.modelName}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="pictureUrl">Picture URL</label>
                        <input
                            type="text"
                            name="pictureUrl"
                            id="pictureUrl"
                            value={values.pictureUrl}
                            onChange={onChange}
                        />
                        {errors.pictureUrl && (
                            <p className="error">{errors.pictureUrl}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="screenSize">Screen Size</label>
                        <input
                            type="text"
                            name="screenSize"
                            id="screenSize"
                            value={values.screenSize}
                            onChange={onChange}
                        />
                        {errors.screenSize && (
                            <p className="error">{errors.screenSize}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="processor">Processor</label>
                        <input
                            type="text"
                            name="processor"
                            id="processor"
                            value={values.processor}
                            onChange={onChange}
                        />
                        {errors.processor && (
                            <p className="error">{errors.processor}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="videoCard">Video Card</label>
                        <input
                            type="text"
                            name="videoCard"
                            id="videoCard"
                            value={values.videoCard}
                            onChange={onChange}
                        />
                        {errors.videoCard && (
                            <p className="error">{errors.videoCard}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="ram">RAM</label>
                        <input
                            type="text"
                            name="ram"
                            id="ram"
                            value={values.ram}
                            onChange={onChange}
                        />
                        {errors.ram && <p className="error">{errors.ram}</p>}
                    </div>
                    <div>
                        <label htmlFor="storage">Storage</label>
                        <input
                            type="text"
                            name="storage"
                            id="storage"
                            value={values.storage}
                            onChange={onChange}
                        />
                        {errors.storage && (
                            <p className="error">{errors.storage}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="price">Price (USD)</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={values.price}
                            onChange={onChange}
                        />
                        {errors.price && (
                            <p className="error">{errors.price}</p>
                        )}
                    </div>
                    {errors.form && <p className="error">{errors.form}</p>}
                    <button type="submit">Create Product</button>
                </form>
            </div>
        </div>
    );
}
