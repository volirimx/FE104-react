import { configureStore } from '@reduxjs/toolkit'
import post from "./counter/posts";
import user from "../redux/user/user";
import them from "../redux/thems/thems";
import favorites from "../redux/favorites/favorites";

export const store = configureStore({
  reducer: { user, them, favorites }
   
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch