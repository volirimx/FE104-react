import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Root } from 'react-dom/client';

// Define a type for the slice state
interface PostState {
  id: number;
  title: string;
  text: string;
  rate: 'liked' | 'disliked' | undefined;
}

// Define the initial state using that type
const initialState: PostState[] = [
  {
    id: 0,
    title: 'Aboba',
    text: 'abobaabobaaboba',
    rate: undefined,
  },

  {
    id: 1,
    title: 'Will',
    text: 'abobaabobaaboba',
    rate: undefined,
  },
  
  {
    id: 2,
    title: 'Jack',
    text: 'abobaabobaaboba',
    rate: undefined,
  },
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
})

export const { setPosts } = postSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAllPosts = (store: RootState) => store.post;

export default postSlice.reducer