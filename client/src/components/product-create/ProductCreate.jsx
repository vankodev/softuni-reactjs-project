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

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
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
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={formValues.price}
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="submit">Create Product</button>
                </form>
            </div>
        </div>
    );
}
