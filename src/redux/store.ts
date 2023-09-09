import { configureStore } from '@reduxjs/toolkit'
import counter from './counter/counter';
import user from './user/user';
import post from './post/post'

export const store = configureStore({
    reducer: { counter, user, post },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;