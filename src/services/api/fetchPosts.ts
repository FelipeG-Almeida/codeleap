import api from '.';
import { Post } from '../../common/interface/post';

export async function fetchPost(): Promise<Post[]> {
    try {
        const { data } = await api.get('/careers/');

        return data.results;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
