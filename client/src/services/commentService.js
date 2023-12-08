import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAll = async (productId) => {
    const result = await request.get(baseUrl);

    return Object.values(result).filter(
        (comment) => comment.productId === productId
    );
};

export const create = async (productId, username, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        username,
        text,
    });

    return newComment;
};
