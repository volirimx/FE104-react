import { configureStore } from '@reduxjs/toolkit'
import post from "./counter/posts";
import user from "../redux/user/user";

export const store = configureStore({
  reducer: { user }
   
})
console.log(store);



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch