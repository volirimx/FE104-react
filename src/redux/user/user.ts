import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Root } from 'react-dom/client';
import axios from 'axios';

// Define a type for the slice state
interface UserState {
  name: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data) => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/users/", 
      data
    );
    return response.data;
  }
);



const initialState: UserState = {

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {

    })
    .addCase(registerUser.fulfilled, (state, action) => {

    })
    .addCase(registerUser.rejected, (state, action) => {

    });
  }
})

export const { login } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (store: RootState) => store.user;

export default userSlice.reducer;