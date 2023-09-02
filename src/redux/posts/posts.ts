import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

export type PostGrade = "liked" | "disliked" | undefined;
export type BookmarkedGrade = true | false;
// Define a type for the slice state
export interface PostState {
    id: number;
    title: string;
    text: string;
    image: string;
    date: string;
    lesson_num: number;
    author: number;
    
    grade: PostGrade;
    bookmarked: BookmarkedGrade;
}

// Define the initial state using that type
const initialState: PostState[] = [];

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    const response = await axios.get("https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=11");
    console.log(response);
    return response.data.results;
});

interface RatePostPayload{
    id: number;
    grade: PostGrade;
}
interface RateBookmark{
    id: number;
    bookmarked: BookmarkedGrade;
}

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        setPosts: (state, action:PayloadAction<PostState[]>) => {
            state = action.payload;
        },
        ratePost: (state, action:PayloadAction<RatePostPayload>) => {
            const searchedPostIndex = state.findIndex(
                (post) => post.id === action.payload.id
            );

            if(searchedPostIndex === -1) return state;

            const payload = action.payload;
            const searchedPost = state[searchedPostIndex];

            if(payload.grade === searchedPost.grade){
                searchedPost.grade = undefined;
            }else{
                searchedPost.grade = payload.grade;
            }
        },  
        //number
        handleBookmark: (state, action:PayloadAction<RateBookmark>) => {
            const searchedPostIndex = state.findIndex(
                (post) => post.id === action.payload.id
            );

            if(searchedPostIndex === -1) return state;

            const searchedPost = state[searchedPostIndex];
            
            searchedPost.bookmarked = !searchedPost.bookmarked;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            return [...action.payload];
        });
    }    
});

export const { setPosts, ratePost, handleBookmark } = postSlice.actions

export const selectAllPosts = (store: RootState) => store.post

export default postSlice.reducer