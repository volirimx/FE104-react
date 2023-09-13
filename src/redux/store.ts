import { configureStore } from "@reduxjs/toolkit";
import post from "./posts/posts";
import user from "./user/user";
import character from "./character/character";

export const store = configureStore({
  reducer: { post, user, character },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
