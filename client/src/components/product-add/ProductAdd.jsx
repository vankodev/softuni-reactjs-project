import { useNavigate } from "react-router-dom";
import * as productService from "../../services/productService";
import styles from "./ProductAdd.module.css";

export default function ProductAdd() {
    const navigate = useNavigate();

    const addProductSubmitHandler = (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            productService.add(productData);

            navigate("products");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <div className={styles.productAdd}>
                <h1 className={styles.header}>Add Product</h1>
                <form className="form" onSubmit={addProductSubmitHandler}>
                    <div>
                        <label>Model Name</label>
                        <input type="text" name="modelName" />
                    </div>
                    <div>
                        <label>Picture URL</label>
                        <input type="text" name="pictureUrl" />
                    </div>
                    <div>
                        <label>Screen Size</label>
                        <input type="text" name="screenSize" />
                    </div>
                    <div>
                        <label>Processor</label>
                        <input type="text" name="processor" />
                    </div>
                    <div>
                        <label>Video Card</label>
                        <input type="text" name="videoCard" />
                    </div>
                    <div>
                        <label>RAM</label>
                        <input type="text" name="ram" />
                    </div>
                    <div>
                        <label>Storage</label>
                        <input type="text" name="storage" />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name="price" />
                    </div>
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
}
