import { PostRequestType, PostByIdRequestType } from './types';
import axios from 'axios';

export const getPosts = async ({limit, offset, callback}: PostRequestType) => {
    const apiURL = `https://studapi.teachmeskills.by/blog/posts/?offset=${offset}&limit=${limit}`;
    const response = await axios.get(apiURL);
    if (response.status === 200 && Array.isArray(response.data.results)) {
        callback(response.data.results);
    } else {
        callback(null);
    }
}

export const getPostById = async ({id, callback}: PostByIdRequestType) => {
    const apiURL = `https://studapi.teachmeskills.by/blog/posts/${id}`;
    const response = await axios.get(apiURL);
    if (response.status === 200 && response.data) {
        callback(response.data);
    } else {
        callback(null);
    }
}