import { configureStore } from '@reduxjs/toolkit'
import counter from './counter/counter'
import user from "./user/user";
import post from "./posts/posts"
import favoritePosts from './favoritePosts/favoritePosts';
import accessToken from '../redux/accessToken/accessToken'

const store = configureStore({
  reducer: {post, counter, user, favoritePosts, accessToken},
})

//дает понимание что в глобальном состоянии 
//получаем тип всего стейта и возвращаем его через ReturnType
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;