import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchPosts } from "../api/getPosts";

export type Rate = undefined | 1 | 2;

interface RateAction {
  rate: Rate;
  id: number | null;
}

export interface ForPost {
  author: number;
  date: string;
  description: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
  rate: Rate;
  popUp: boolean;
}

interface PostsState {
  posts: ForPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    ratePost(state, action: PayloadAction<RateAction>) {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      if (postIndex === -1) return state;
      const neededPost = state.posts[postIndex];

      if (action.payload.rate === neededPost.rate) {
        neededPost.rate = undefined;
      } else {
        neededPost.rate = action.payload.rate;
      }
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<ForPost[]>) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { ratePost } = postsSlice.actions;
export const selectRate = (id: number) => (store: RootState) => {
  const searchedPost = store.posts.find((post) => post.id === id);
  if (searchedPost) {
    return searchedPost.rate;
  }
  return undefined;
};
export default postsSlice.reducer;
