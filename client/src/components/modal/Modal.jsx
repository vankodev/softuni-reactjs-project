import styles from "./Modal.module.css"

export default function Modal({ show, children, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
}
