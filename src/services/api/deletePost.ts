import api from '.';

export async function deletePost(id: number): Promise<void> {
    try {
        const { data } = await api.delete(`/careers/${id}/`);

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
