import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

export type Rate = undefined | 1 | 2;

interface RateAction {
  rate: Rate;
  id: number | null;
}

interface ForSave {
  saved: boolean;
  id: number | undefined;
}

interface Data {
  count: number;
  next: string;
  previous: null;
  results: ForPost[];
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
  saved: boolean;
}

interface PostsState {
  posts: ForPost[];
  likedPosts: ForPost[];
  savedPosts: ForPost[];
  post: ForPost | undefined;
}

const initialState: PostsState = {
  posts: [],
  likedPosts: [],
  savedPosts: [],
  post: undefined,
};

export const thunkGetPosts = createAsyncThunk(
  "posts/getPosts",
  async (searchInput: string) => {
    const response = await axios.get<Data>(
      `https://studapi.teachmeskills.by/blog/posts/?search=${searchInput}&limit=100&offset=0`
    );
    return response.data.results;
  }
);

export const thunkSelectPost = createAsyncThunk(
  "posts/selectPost",
  async (id: string) => {
    const response = await axios.get<ForPost>(
      `https://studapi.teachmeskills.by/blog/posts/${id}`
    );
    return response.data;
  }
);

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
    savePost(state, action: PayloadAction<ForSave>) {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );

      if (postIndex === -1) return state;
      const neededPost = state.posts[postIndex];

      if (action.payload.saved === neededPost.saved) {
        neededPost.saved = false;
      } else {
        neededPost.saved = action.payload.saved;
      }
    },
    setLikedPosts(state, action: PayloadAction<ForPost[]>) {
      state.likedPosts = action.payload;
    },
    setSavedPosts(state, action: PayloadAction<ForPost[]>) {
      state.savedPosts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      thunkGetPosts.fulfilled,
      (state, action: PayloadAction<ForPost[]>) => {
        state.posts = action.payload;
      }
    );
    builder.addCase(
      thunkSelectPost.fulfilled,
      (state, action: PayloadAction<ForPost>) => {
        state.post = action.payload;
      }
    );
  },
});
export const { ratePost, savePost, setLikedPosts, setSavedPosts } =
  postsSlice.actions;
export const selectRate = (id: number) => (store: RootState) => {
  const searchedPost = store.posts.posts.find(
    (post: ForPost) => post.id === id
  );
  if (searchedPost) {
    return searchedPost.rate;
  }
  return undefined;
};
export const selectSave = (id: number) => (store: RootState) => {
  const searchedPost = store.posts.posts.find(
    (post: ForPost) => post.id === id
  );
  if (searchedPost) {
    return searchedPost.saved;
  }
  return undefined;
};

export default postsSlice.reducer;
