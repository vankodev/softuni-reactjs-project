import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (productId, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        text,
    });

    return newComment;
};


export const edit = async (commentId, productId, text) => {
    const data = { productId, text };
    const comment = await request.put(`${baseUrl}/${commentId}`, data);

    return comment;
};
