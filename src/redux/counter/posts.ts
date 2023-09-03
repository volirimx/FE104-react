import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { PostState, CardDataResult, Post } from "../../models";

// Define a type for the slice state

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get(
    "https://studapi.teachmeskills.by/blog/posts/?limit=8&offset=6"
  );
  const posts = response.data.results;

  // Добавляем свойство favorites: false к каждому элементу массива
  const postsWithFavorites = posts.map((post: Post) => ({
    ...post,
    favorites: false,
  }));

  return postsWithFavorites;
});

// Define the initial state using that type
const initialState: PostState[] = [];
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostState[]>) => {
      state = action.payload;
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const updatedPosts = state.map((post) => {
        if (post.id === action.payload.id) {
          // Создаем новый объект с обновленным свойством favorites
          const updatedPost = { ...post, favorites: action.payload.favorites };
          return updatedPost;
        }
        return post;
      });
      return updatedPosts;
    },
    
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setPosts, updatePost } = postSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllPosts = (store: RootState) => store.post;

export default postSlice.reducer;
