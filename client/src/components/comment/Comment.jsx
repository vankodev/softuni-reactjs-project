import { useEffect, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";

import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import reducer from "./commentReducer";

import styles from "./Comments.module.css";

export default function Comment() {
    const { isAuthenticated, username, email } = useContext(AuthContext);
    const [comments, dispatch] = useReducer(reducer, []);
    const { productId } = useParams();

    useEffect(() => {
        commentService.getAll(productId)
            .then((result) => {
            dispatch({
                type: "GET_ALL_COMMENTS",
                payload: result,
            });
        });
    }, [productId]);


    const addCommentHandler = async (values) => {
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
    };
    
    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: "",
    });

    return (
        <div className={styles.commentsWrapper}>
            <div className={styles.comments}>
                <h2>Comments</h2>
                {comments.length === 0 && (
                    <p>
                        No one has shared their opinion about this laptop yet.
                    </p>
                )}
                <ul>
                    {comments.map(({ _id, text, owner: { username } }) => (
                        <li key={_id} className="comment">
                            <p>{username}</p>
                            <p>{text}</p>
                        </li>
                    ))}
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
                        <Link to="/login">Login</Link> or{" "}
                        <Link to="/register">Register</Link> to add new comment!
                    </p>
                )}
            </form>
        </div>
    );
}
