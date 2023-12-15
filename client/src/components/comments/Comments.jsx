import { useState, useEffect, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";

import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import reducer from "./commentReducer";
import Modal from "../modal/Modal";

import styles from "./Comments.module.css";

export default function Comments() {
    const { isAuthenticated, userId, username, email } = useContext(AuthContext);
    const [comments, dispatch] = useReducer(reducer, []);
    const { productId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [editComment, setEditComment] = useState("");

    useEffect(() => {
        commentService
            .getAll(productId)
            .then((result) => {
                dispatch({
                    type: "GET_ALL_COMMENTS",
                    payload: result,
                });
            })
            .catch((error) => {
                console.error("Failed to fetch comments:", error);
            });
    }, [productId]);

    const addCommentHandler = async (values) => {
        try {
            const newComment = await commentService.create(
                productId,
                values.comment
            );

            newComment.owner = { username, email };

            dispatch({
                type: "ADD_COMMENT",
                payload: newComment,
            });

            values.comment = "";
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: "",
    });

    const openEditCommentHandler = (commentId, text) => {
        setEditComment({ commentId, text });

        setShowModal(true);
    };

    const editCommentHandler = async () => {
        try {
            const editedComment = await commentService.edit(
                editComment.commentId,
                productId,
                editComment.text
            );

            editedComment.owner = { username, email };

            dispatch({
                type: "EDIT_COMMENT",
                payload: editedComment,
            });

            setShowModal(false);
        } catch (error) {
            console.log("Failed to edit comment:", error);
        }
    };

    const onEditChange = (e) => {
        setEditComment((state) => ({
            ...state,
            text: e.target.value,
        }));
    };

    const deleteCommentHandler = async () => {
        try {
            await commentService.remove(editComment.commentId);

            dispatch({
                type: "DELETE_COMMENT",
                payload: editComment,
            });

            setShowModal(false);
        } catch (error) {
            console.log("Failed to delete comment:", error);
        }
    };

    return (
        <div className={styles.commentsWrapper}>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.editComment}>
                    <h2>Edit Comment</h2>
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={editComment.text}
                        onChange={onEditChange}
                    ></textarea>
                    <div className={styles.editCommentButtons}>
                        <button onClick={editCommentHandler}> Edit Comment </button>
                        <button onClick={deleteCommentHandler}> Delete Comment </button>
                    </div>
                </div>
            </Modal>

            <div className={styles.comments}>
                <h2>Comments</h2>
                {comments.length === 0 && (
                    <p>
                        No one has shared their opinion about this laptop yet.
                    </p>
                )}
                <ul>
                    {comments.map(
                        ({ _id, _ownerId, text, owner: { username } }) => (
                            <li key={_id} className={styles.comment}>
                                <p>{username}</p>
                                <p>{text}</p>
                                <p
                                    className={`
                                        ${styles.button} 
                                        ${ _ownerId === userId ? styles.buttonVisible : "" }
                                    `}
                                    onClick={() => openEditCommentHandler(_id, text) }
                                >
                                    Edit
                                </p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <form className="form" onSubmit={onSubmit}>
                {isAuthenticated && (
                    <>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            value={values.comment}
                            onChange={onChange}
                        ></textarea>
                        <button>Add Comment</button>
                    </>
                )}
                {!isAuthenticated && (
                    <p>
                        <Link to="/login">Login </Link> or
                        <Link to="/register"> Register</Link> to add new comment!
                    </p>
                )}
            </form>
        </div>
    );
}
