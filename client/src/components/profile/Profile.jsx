import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import styles from "./Profile.module.css"

export default function Profile() {
    const { username, email, } = useContext(AuthContext);

    return (
        <div className={styles.profile}>
            <h2>User Profile</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}