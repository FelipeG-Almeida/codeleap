import React from 'react';
import { PostsContext } from '../context/postsContext';

export const usePosts = () => {
    const { posts, newPost, loading, handleDeletePost, handleUpdatePost } =
        React.useContext(PostsContext);

    return {
        posts,
        newPost,
        loading,
        handleDeletePost,
        handleUpdatePost,
    };
};

