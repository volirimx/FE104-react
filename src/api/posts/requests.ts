import { Post } from './types';
import axios from 'axios';

export const getPostById = async ({ postId, onSuccess }: { postId: number, onSuccess(data: Post): void }) => {
    try {
        const response = await axios.get<Post>(
            `https://studapi.teachmeskills.by/blog/posts/${postId}/`
        );

        if (response.status !== 200) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        onSuccess(response.data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
