import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface UserState {
    name: string;
    email: string;
    age: number;
}

// Define the initial state using that type
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

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer