// В файле favoritePostsSlice.ts (или подобном)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: number[] = [];

export const favoritePostsSlice = createSlice({
    name: 'favoritePosts',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<number>) => {
            state.push(action.payload);
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
            const postIdToRemove = action.payload;
            return state.filter((postId) => postId !== postIdToRemove);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritePostsSlice.actions;

export const selectFavoritePosts = (state: RootState) => state.favoritePosts;

export default favoritePostsSlice.reducer;
