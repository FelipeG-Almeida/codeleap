import api from '.';

export async function updatePost(
    id: number,
    title: string,
    content: string
): Promise<void> {
    try {
        const { data } = await api.patch(`/careers/${id}/`, { title, content });

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
