const baseUrl = "http://localhost:3030/jsonstore/products";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return Object.values(result);
};

export const create = async (productData) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(productData),
    });

    const result = await response.json();

    return result;
};
