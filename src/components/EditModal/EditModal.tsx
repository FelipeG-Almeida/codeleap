import React, { useState } from 'react';
import styles from './EditModal.module.css';
import { Post } from '../../common/interface/post';
import { usePosts } from '../../common/hooks/usePosts';

interface ModalProps {
    isOpen: boolean;
    post: Post;
    onClose: () => void;
}

const EditModal: React.FC<ModalProps> = ({ isOpen, post, onClose }) => {
    const { handleUpdatePost } = usePosts();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    if (!isOpen) return null;

    const handleSubmit = () => {
        handleUpdatePost(post.id ?? 0, title, content);
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <p>Edit Item</p>
                    <form>
                        <label htmlFor='title'>Title</label>
                        <input
                            id='title'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor='content'>Content</label>
                        <textarea
                            id='content'
                            placeholder='Content here'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </form>
                    <div>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;

