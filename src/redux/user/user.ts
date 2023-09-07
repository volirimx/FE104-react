import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import axios from 'axios';

type UserState = {
    username: string;
    email: string;
    age: number;
}

const initialState: UserState = {
    username: "Nastia",
    email: "Nastia",
    age: 28
}
type RegisterPayload = {
    username: string;
    email: string;
    password: string;    
  };

  export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (data: RegisterPayload) => {
        const response = await axios.post(
            "https://studapi.teachmeskills.by/auth/users/",
            data
        );
        return response.data;
    }
  );

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state = action.payload;
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.username = action.payload.username;
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            console.log(state);
            console.log(action);

        })
    }
})

export const { setUser } = userSlice.actions

export const selectUser = (store: RootState) => store.user;
export const selectUserEmail = (store: RootState) => store.user.email;
export const selectUsername = (store: RootState) => store.user.username;

export default userSlice.reducer