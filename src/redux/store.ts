import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme/theme'
import postReducer from './posts/posts'
import userReducer from './user/user'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    post: postReducer,
    user: userReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch