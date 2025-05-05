import React from 'react';
import styles from './DeleteModal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteModal: React.FC<ModalProps> = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <p>Are you sure you want to delete this item?</p>
                    <div>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;

