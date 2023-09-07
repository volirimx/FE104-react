import { configureStore } from '@reduxjs/toolkit'
import post from "./counter/posts";
import user from "../redux/user/user";
import them from "../redux/thems/thems";
import counter from "../redux/counter/count";


export const store = configureStore({
  reducer: { post, user, them, counter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          'meta.arg',
          'payload.timestamp',
          'payload.headers',
          'payload.config.transformRequest.0',
          'payload.config.transformResponse.0', // Исключаем это поле
        ],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates', 'postSlice.config'],
      },
    }), 
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch