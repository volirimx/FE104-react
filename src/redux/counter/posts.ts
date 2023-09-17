import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { Post } from "../../models";

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (searchParams: string) => {
    console.log(searchParams);
    console.log(searchParams.slice(5));
    console.log(parseInt(searchParams.slice(5)));
    
    
    const response = await axios.get(
      `https://studapi.teachmeskills.by/blog/posts/?limit=6&offset=${
        (parseInt(searchParams.slice(5)) - 1) * 6
      }&${searchParams || ""}`
    );

    const postsObj = response.data;
    // Добавляем свойство favorites: false к каждому элементу массива
    const postsWithFavorites = postsObj.results.map((post: Post) => ({
      ...post,
      favorites: false,
    }));
    postsObj.results = postsWithFavorites;
    return postsObj;
  }
);

interface PostsObj {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Post[];
}

// Define the initial state using that type
const initialState: PostsObj = {
  count: 0,
  next: null,
  previous: null,
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
