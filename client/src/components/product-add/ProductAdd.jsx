export default function ProductAdd() {
    return (
        <div className="productAdd">
            <h1>Add Product Page</h1>
            <form>
                <div>
                    <label>Model Name:</label>
                    <input type="text" name="modelName" />
                </div>
                <div>
                    <label>Picture URL:</label>
                    <input type="text" name="pictureUrl" />
                </div>
                <div>
                    <label>Screen Size:</label>
                    <input type="text" name="screenSize" />
                </div>
                <div>
                    <label>Processor:</label>
                    <input type="text" name="processor" />
                </div>
                <div>
                    <label>Video Card:</label>
                    <input type="text" name="weight" />
                </div>
                <div>
                    <label>RAM:</label>
                    <input type="text" name="ram" />
                </div>
                <div>
                    <label>Storage:</label>
                    <input type="text" name="storage" />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="price" />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}
