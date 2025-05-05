import api from '.';
import { Post } from '../../common/interface/post';

export async function createPost(post: Post): Promise<Post> {
    try {
        const { data } = await api.post('/careers/', post);

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
