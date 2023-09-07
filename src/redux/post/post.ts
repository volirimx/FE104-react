import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import type { Post } from  '../../api/posts/types';
import axios from "axios";

export type PostGrade = 'liked'| 'disliked';
type RatePostPayload = {
    id: number;
    grade: PostGrade
}

const initialState: Post[] = [{
    'author': 146,
    'date': "2021-10-12",
    'description': "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    'id': 31,
    'image' : "https://tms-studapi-dev.s3.amazonaws.com/media/72fqw2qq3kxh_xQOVBOZ.jpeg",
    'lesson_num' : 2121,
    'text' : "dasdadfgsgwr",
    'title' : "sdasdsa",
    'likes': 0,
    'dislikes': 0,
    'onClick': () => {},
    'onRateClick': () => {}
    }, {
        'author': 147,
    'date': "2021-10-13",
    'description': "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    'id': 32,
    'image' : "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-11_%D0%B2_22.01.36_uctCuc8.png",
    'lesson_num' : 2121,
    'text' : "dasdadfgsgwr",
    'title' : "sdasdsa",
    'likes': 0,
    'dislikes': 0,
    'onClick': () => {},
    'onRateClick': () => {}
    }, {
        'author': 148,
    'date': "2021-10-14",
    'description': "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    'id': 33,
    'image' : "https://tms-studapi-dev.s3.amazonaws.com/media/72fqw2qq3kxh_rjiB1V8.jpeg",
    'lesson_num' : 2121,
    'text' : "dasdadfgsgwr",
    'title' : "sdasdsa",
    'likes': 0,
    'dislikes': 0,
    'onClick': () => {},
    'onRateClick': () => {}
    }   
];
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    const response = await axios.get("https://studapi.teachmeskills.by/blog/posts/?lesson_num=2023&limit=20");
    return response.data.results;
  });

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state = action.payload;
        },
        ratePost: (state, action:PayloadAction<RatePostPayload>)=>{
            const searchedPostIndex = state.findIndex(
                (post) => post.id === action.payload.id
              );        
              if (searchedPostIndex === -1) return state;        
              const payload = action.payload;
              const searchedPost = state[searchedPostIndex]; 
              if (payload.grade === 'liked') {
                searchedPost.likes += 1;
              } else {
                searchedPost.dislikes += 1;
              }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
          return action.payload;
        });
      },
})

export const { setPosts, ratePost } = postSlice.actions

export const selectPosts = (store: RootState) => store.post;

export default postSlice.reducer;