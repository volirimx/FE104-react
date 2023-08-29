import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

export type PostGrade = "liked" | "disliked";

export interface PostState {
  id: number;
  title: string;
  text: string;
  grade: PostGrade | undefined;
}
const initialState: PostState[] = [
  {
    id: 0,
    title: "Aboba",
    text: "abobaaboba",
    grade: undefined,
  },
  {
    id: 1,
    title: "Aboba1",
    text: "abobaaboba",
    grade: undefined,
  },
  {
    id: 2,
    title: "Aboba2",
    text: "abobaaboba",
    grade: undefined,
  },
];

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response.data.results;
});

interface RatePostPayload {
  grade: PostGrade;
  id: number;
}
export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostState[]>) => {
      state = action.payload;
    },
    ratePost: (state, action: PayloadAction<RatePostPayload>) => {
      const searchedPostIndex = state.findIndex(
        (post) => post.id === action.payload.id
      );

      if (searchedPostIndex === -1) return state;

      const payload = action.payload;
      const searchedPost = state[searchedPostIndex];

      if (payload.grade === searchedPost.grade) {
        searchedPost.grade = undefined;
      } else {
        searchedPost.grade = payload.grade;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setPosts, ratePost } = postSlice.actions;

export const selectAllPosts = (store: RootState) => store.post;

export default postSlice.reducer;
