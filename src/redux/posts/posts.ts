import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type PostGrade = "liked" | "disliked" | undefined;
// Define a type for the slice state
export interface PostState {
    id: number;
    title: string;
    text: string;
    grade: PostGrade;
}

// Define the initial state using that type
const initialState: PostState[] = [
    {
        id: 0,
        title: "mam",
        text: "wmdi",
        grade: undefined,
    },
    {
        id: 1,
        title: "pap",
        text: "wmdi",
        grade: undefined,
    },
    {
        id: 2,
        title: "ded",
        text: "wmdi",
        grade: undefined,
    }
];

interface RatePostPayload{
    id: number;
    grade: PostGrade;
}
export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
        setPosts: (state, action:PayloadAction<PostState[]>) => {
            state = action.payload;
        },
        ratePost:  (state, action:PayloadAction<RatePostPayload>) => {
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
    },
});

export const { setPosts, ratePost } = postSlice.actions

export const selectAllPosts = (store: RootState) => store.post

export default postSlice.reducer