import { ForPost } from "../redux/posts";
import axios from "axios";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

// interface Response {
//   count: number;
//   next: string;
//   previous: null;
//   results: ForPost[];
// }

// export const fetchPosts =
//   (searchInput: string) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(postsSlice.actions.postsFetching());
//       const response = await axios.get();

//       dispatch(postsSlice.actions.postsFetchingSuccess(response.data.results));
//     } catch (e) {
//       dispatch(postsSlice.actions.postsFetchingError(e.message));
//     }
//   };

export const fetchPosts = createAsyncThunk(
  "posts/postsFetching",
  async (searchInput: string) => {
    try {
      const response = await axios.get<ForPost[]>(
        `https://studapi.teachmeskills.by/blog/posts/?search=${searchInput}&limit=100&offset=0`
      );
      return response.data.results;
    } catch (error) {
      return isRejectedWithValue("и БАц!");
    }
  }
);
