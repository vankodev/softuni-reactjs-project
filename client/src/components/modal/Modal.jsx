import styles from "./Modal.module.css"

export default function Modal({ show, children, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
}
