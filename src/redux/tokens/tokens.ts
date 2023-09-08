import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

interface SignInData{
  email: string;
  password: string;
}

export interface tokensState {
  accessToken: string;
  refreshToken: string;
};

const initialState: tokensState = {
  accessToken: "",
  refreshToken: "",
};

const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
}

export const saveTokensToStore = createAsyncThunk('tokens/saveTokensToStore',
  async(data: SignInData) => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/jwt/create/", 
      data,
    );  
    const tokens = response.data;  
    saveRefreshTokenToLocalStorage(tokens.refresh);
    return tokens
  }
);

export const accessTokenSlice = createSlice({
  name: "tokens",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveTokensToStore.fulfilled, (state, action) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
    });
  },
})

export const selectAccessToken = (store: RootState) => store.tokens.accessToken;
export const selectRefreshToken = (store: RootState) => store.tokens.refreshToken;

export default accessTokenSlice.reducer;

