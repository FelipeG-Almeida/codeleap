import { Post } from '../../common/interface/post';
import styles from './PostCard.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { useAuth } from '../../common/hooks/useAuth';
import timeAgo from '../../utils/timeAgo';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useState } from 'react';
import { usePosts } from '../../common/hooks/usePosts';
import EditModal from '../EditModal/EditModal';
import { IoIosHeartEmpty } from 'react-icons/io';
import { GoComment } from 'react-icons/go';

export default function PostCard(post: Post) {
    const { user } = useAuth();
    const { handleDeletePost } = usePosts();
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleDelete = () => {
        handleDeletePost(post.id ?? 0);
        setOpenDelete(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>{post.title}</h3>
                {user === post.username && (
                    <div className={styles.actions}>
                        <button onClick={() => setOpenDelete(true)}>
                            <MdDeleteForever size={28} color='#fff' />
                        </button>
                        <button onClick={() => setOpenEdit(true)}>
                            <FaRegEdit size={24} color='#fff' />
                        </button>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div>
                    <img src='https://avatar.iran.liara.run/public' />
                    <span>@{post.username}</span>
                    <small>{timeAgo(post.created_datetime ?? '')}</small>
                </div>
                <p>{post.content}</p>
            </div>
            <div className={styles.footer}>
                <button>
                    <IoIosHeartEmpty size={24} color='#000' />
                </button>
                <span>0</span>
                <button>
                    <GoComment size={24} color='#000' />
                </button>
            </div>
            <DeleteModal
                isOpen={openDelete}
                onClose={() => setOpenDelete(false)}
                onDelete={handleDelete}
            />
            <EditModal
                isOpen={openEdit}
                post={post}
                onClose={() => setOpenEdit(false)}
            />
        </div>
    );
}

