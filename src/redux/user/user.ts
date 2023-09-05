import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface UserState {
    name: string;
    email: string;
    age: number;
}

const initialState: UserState = {
    name: "Nastia",
    email: "Nastia",
    age: 21
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state = action.payload;
        },

    },
})

export const { setUser } = userSlice.actions

export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer