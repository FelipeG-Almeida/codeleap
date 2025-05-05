import { createContext } from 'react';
import { Post } from '../interface/post';

export const PostsContext = createContext<{
    posts: Post[];
    newPost: (title: string, content: string) => void;
    loading: boolean;
    handleDeletePost: (id: number) => void;
    handleUpdatePost: (id: number, title: string, content: string) => void;
}>({
    posts: [],
    newPost: () => {},
    loading: false,
    handleDeletePost: () => {},
    handleUpdatePost: () => {},
});

