import { useState } from 'react';
import { usePosts } from '../../common/hooks/usePosts';
import styles from './Feed.module.css';
import PostCard from '../../components/PostCard/PostCard';
import { FaUser } from 'react-icons/fa6';
import { ImExit } from 'react-icons/im';
import { useAuth } from '../../common/hooks/useAuth';
import { IoMdSearch } from 'react-icons/io';
import { PiCircleNotchBold } from 'react-icons/pi';

const Feed = () => {
    const { posts, newPost, loading } = usePosts();
    const { logout } = useAuth();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        newPost(title.trim(), content.trim());
        setTitle('');
        setContent('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>CodeLeap Network</h1>
                <div>
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <FaUser color='#fff' size={14} />
                        <span>Add Friend</span>
                    </button>
                    <button onClick={logout}>
                        <ImExit color='#fff' size={14} />
                        <span>Logout</span>
                    </button>
                    {showSearch && (
                        <div id={styles.popover}>
                            <input type='text' placeholder='Search user' />
                            <button>
                                <IoMdSearch color='#fff' size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.posts}>
                <form onSubmit={handleSubmit}>
                    <h3>What’s on your mind?</h3>

                    <label htmlFor='title'>Title</label>
                    <input
                        id='title'
                        type='text'
                        placeholder='Hello World'
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

                    <button
                        type='submit'
                        disabled={!title.trim() || !content.trim()}
                        className={
                            !title.trim() || !content.trim() ? 'disabled' : ''
                        }
                    >
                        Create
                    </button>
                </form>
                {loading ? (
                    <PiCircleNotchBold size={40} color='#7695ec' />
                ) : (
                    posts.map((post) => <PostCard key={post.id} {...post} />)
                )}
            </div>
        </div>
    );
};

export default Feed;

