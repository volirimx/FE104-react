import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface PostState {
  id: number;
  title: string;
  text: string;
  grade: string | undefined;
}

// Define the initial state using that type
const initialState: PostState[] = [
  {
    id: 0,
    title: "Aboba1",
    text: 'aaaaaa',
    grade: undefined
  },
  {
    id: 1,
    title: "Aboba2",
    text: 'aaaaaa',
    grade: undefined
  },
  {
    id: 2,
    title: "Aboba3",
    text: 'aaaaaa',
    grade: undefined
  },
  {
    id: 3,
    title: "Aboba4",
    text: 'aaaaaa',
    grade: undefined
  },
];
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   setPosts: (state, action: PayloadAction<PostState[]>) => {
    state = action.payload;   
    },
  },
})

export const { setPosts } = postSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllPosts = (store: RootState) => store.post;

export default postSlice.reducer;