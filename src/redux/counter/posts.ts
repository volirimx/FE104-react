import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { Post } from "../../models";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get(
    "https://studapi.teachmeskills.by/blog/posts/?limit=6"
  );
  const postsObj = response.data;
  // Добавляем свойство favorites: false к каждому элементу массива
  const postsWithFavorites = postsObj.results.map((post: Post) => ({
    ...post,
    favorites: false,
  }));
  postsObj.results = postsWithFavorites;
  return postsObj;
});

interface PostsObj {
  count: number | null;
  next: string;
  previous: string;
  results: Post[];
}

// Define the initial state using that type
const initialState: PostsObj = {
  count: null,
  next: "",
  previous: "",
  results: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updatePost: (state, action: PayloadAction<Post>) => {
      const { id, favorites } = action.payload;
      const postToUpdate = state.results.find((post) => post.id === id);
      if (postToUpdate) {
        postToUpdate.favorites = !favorites;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updatePost } = postSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllPosts = (store: RootState) => store.post;

export default postSlice.reducer;
