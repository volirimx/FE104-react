import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Root } from 'react-dom/client';
import axios from 'axios';

interface PostState {
  id: number;
  title: string;
  text: string;
  rate: 'liked' | 'disliked' | undefined;
}

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async () => {
    const response = axios.get(`https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10`);
    return response.data.results;
  }
);

export const getPostById = createAsyncThunk (
  'post/getPostById',
  async ({ onSuccess, id }: {
  onSuccess(data: any): void;
  id: number;
}) => {
  const response = await axios.get(
     `https://studapi.teachmeskills.by/blog/posts/${id}`
  );
  if (!response.data || response.status !== 200) return;
  onSuccess(response.data);
});


const initialState: PostState[] = [

];

interface RatePostPayload {
  id: number;
  rate: 'liked' | 'disliked' | undefined;
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostState[]>) => {
      state = action.payload;
    },
    ratePost: (state, action: PayloadAction<RatePostPayload>) => {
      const searchedPostIndex = state.findIndex((post) => post.id === action.payload.id);
      
      if (searchedPostIndex === -1) return state;
      
      const payload = action.payload;
      const searchedPost = state[searchedPostIndex];
      
      if (payload.rate === searchedPost.rate) {
        payload.rate === undefined;
      };
    } 
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPostById.pending, (state) => {

    })
    .addCase(getPostById.fulfilled, (state, action) => {
      state = action.payload;
    })
    .addCase(getPostById.rejected, (state, action) => {

    });
  }
})

export const { setPosts } = postSlice.actions

export const selectAllPosts = (store: RootState) => store.post;

export default postSlice.reducer