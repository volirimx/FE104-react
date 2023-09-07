import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts";
import usersReducer from "./users";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
