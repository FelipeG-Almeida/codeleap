import React, { useCallback, useEffect, useState } from 'react';
import { PostsContext } from './postsContext';
import { Post } from '../interface/post';
import { useAuth } from '../hooks/useAuth';
import { createPost } from '../../services/api/createPost';
import { fetchPost } from '../../services/api/fetchPosts';
import { deletePost } from '../../services/api/deletePost';
import { updatePost } from '../../services/api/updatePost';

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const handleFetchPosts = useCallback(async () => {
        if (!user) return;
        setLoading(true);
        const posts = await fetchPost();
        setPosts(posts);
        setLoading(false);
    }, [user]);

    const newPost = useCallback(
        async (title: string, content: string) => {
            if (!user) return;
            const newPost: Post = {
                username: user,
                title,
                content,
            };

            await createPost(newPost);
            handleFetchPosts();
        },
        [handleFetchPosts, user]
    );

    const handleDeletePost = useCallback(
        async (id: number) => {
            await deletePost(id);
            handleFetchPosts();
        },
        [handleFetchPosts]
    );

    const handleUpdatePost = useCallback(
        async (id: number, title: string, content: string) => {
            await updatePost(id, title, content);

            handleFetchPosts();
        },
        [handleFetchPosts]
    );

    useEffect(() => {
        handleFetchPosts();
    }, [handleFetchPosts]);

    return (
        <PostsContext.Provider
            value={{
                posts,
                newPost,
                loading,
                handleDeletePost,
                handleUpdatePost,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};

