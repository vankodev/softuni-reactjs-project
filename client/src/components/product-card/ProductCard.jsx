export default function ProductCard({
    modelName,
    pictureUrl,
    screenSize,
    processor,
    videoCard,
    ram,
    storage,
    price,
    _id,
}) {
    return (
        <div className="productCard">
            <img
                style={{ width: "200px" }}
                src={pictureUrl}
                alt="laptop-image"
            />
            <h3>{modelName}</h3>
            <p>Screen Size: {screenSize}</p>
            <p>Processor: {processor}</p>
            <p>RAM: {videoCard}</p>
            <p>Video Card: {ram}</p>
            <p>Storage: {storage}</p>
            <p>Price: ${price}</p>
        </div>
    );
}
